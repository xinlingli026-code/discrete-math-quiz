<#
  安全扫描：对本仓库做静态安全检查（无第三方依赖，纯静态分析）
  用法：powershell -ExecutionPolicy Bypass -File tools/security-scan.ps1
  退出码：0 = 无高危项；1 = 存在高危项
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$report = New-Object System.Collections.Generic.List[string]
$fail = 0

function Add-Line($s) { $report.Add($s) | Out-Null }
function Check($name, $cond, $detail) {
  if ($cond) { Add-Line ("  [PASS] $name") }
  else { Add-Line ("  [FAIL] $name  ->  $detail"); $script:fail++ }
}

Add-Line "=== 1. 密钥 / 凭据扫描 ==="
$secretPatterns = @(
  'gh[pousr]_[A-Za-z0-9]{20,}',                      # GitHub token
  'github_pat_[A-Za-z0-9_]{20,}',                    # fine-grained PAT
  'sk-[A-Za-z0-9]{20,}',                             # OpenAI-style key
  'AKIA[0-9A-Z]{16}',                                # AWS access key
  'AIza[0-9A-Za-z\-_]{30,}',                         # Google API key
  'xox[baprs]-[0-9a-zA-Z\-]{10,}',                   # Slack token
  '-----BEGIN (RSA |EC |OPENSSH |PGP )? PRIVATE KEY',
  '(?i)(api[_-]?key|secret|passwd|password|token)\s*[:=]\s*["''][^"'']{8,}["'']'
)
$files = Get-ChildItem $root -Recurse -File | Where-Object {
  $_.FullName -notmatch '\\.git\\' -and $_.Extension -in '.js', '.html', '.css', '.md', '.json', '.yml', '.yaml', '.ps1', '.txt'
}
$secretHits = @()
foreach ($f in $files) {
  $txt = Get-Content $f.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
  if ($null -eq $txt) { continue }
  foreach ($p in $secretPatterns) {
    if ($txt -match $p) { $secretHits += "$($f.FullName.Replace($root,'')) 匹配 $p" }
  }
}
Check "未发现硬编码密钥/私钥" ($secretHits.Count -eq 0) ($secretHits -join '; ')

Add-Line ""
Add-Line "=== 2. 危险 JavaScript API ==="
$webFiles = $files | Where-Object { ($_.Extension -eq '.js' -or $_.Extension -eq '.html') -and $_.FullName -notmatch '[/\\]tools[/\\]' }
$jsFiles = $webFiles
Add-Line "  (扫描范围: 浏览器运行时文件 index.html / app.js / data/*.js；tools/ 下的 Node 脚本不参与浏览器 API 检查)"
foreach ($bad in @('eval\s*\(', 'new\s+Function\s*\(', 'setTimeout\s*\(\s*["'']', 'setInterval\s*\(\s*["'']')) {
  $hits = @()
  foreach ($f in $jsFiles) {
    $t = Get-Content $f.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
    if ($t -and $t -match $bad) { $hits += $f.Name }
  }
  Check "未使用 $($bad -replace '\\s.*','')（字符串求值）" ($hits.Count -eq 0) ($hits -join ', ')
}

Add-Line ""
Add-Line "=== 3. innerHTML 注入面（XSS） ==="
# 不可信来源：题库文本、用户输入、题型标签等
$untrusted = 'p\.ref|p\.ans|p\.cn|p\.q|item\.q|it\.q|part-q|s\.tips|detail|\bname\b|\btitle\b|highlight|rec\.ans|inp\.value|ta\.value'
$innerHits = @()
foreach ($f in $jsFiles) {
  $txt = Get-Content $f.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
  if ($null -eq $txt) { continue }
  # 以分号切分语句，逐条判定
  foreach ($stmt in ($txt -split ';')) {
    if ($stmt -notmatch '\.innerHTML\s*=') { continue }
    $rhs = ($stmt -split '\.innerHTML\s*=', 2)[1]
    $safe = $false
    if ($rhs -match "^\s*['""]['""]\s*$") { $safe = $true }              # 清空
    elseif ($rhs -match 'esc\(') { $safe = $true }                      # 经 esc() 转义
    elseif ($rhs -notmatch $untrusted) { $safe = $true }               # 只含静态字面量与数值
    if (-not $safe) {
      $innerHits += "$($f.Name): $($stmt.Trim())"
    }
  }
}
Check "所有 innerHTML 写入均经过 esc() 或只含静态字面量/数值" ($innerHits.Count -eq 0) ($innerHits -join ' | ')

# 反向核查：不可信字段是否存在"未经 esc() 直接进 DOM"的路径
$rawLeaks = @()
foreach ($f in $jsFiles) {
  $txt = Get-Content $f.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
  if ($null -eq $txt) { continue }
  foreach ($m in [regex]::Matches($txt, '(?s)\.innerHTML\s*=\s*([^;]{0,400});')) {
    $stmt = $m.Value
    if ($stmt -match $untrusted -and $stmt -notmatch 'esc\(') { $rawLeaks += "$($f.Name): $($stmt.Trim())" }
  }
}
Check "不可信字段（题库文本/用户输入/标签）无未经 esc() 的渲染路径" ($rawLeaks.Count -eq 0) ($rawLeaks -join ' | ')

# 确认 esc() 的实现本身覆盖了危险字符
$appJs = Get-Content (Join-Path $root 'app.js') -Raw -Encoding UTF8
Check 'esc() 转义 & < > "' ($appJs -match '&amp;' -and $appJs -match '&lt;' -and $appJs -match '&gt;' -and $appJs -match '&quot;') "esc() 实现不完整"

Add-Line ""
Add-Line "=== 4. 外部网络请求 / 第三方资源 ==="
$extHits = @()
foreach ($f in $files) {
  if ($f.Name -eq 'security-scan.ps1') { continue }   # 扫描脚本自身含检测用正则字面量
  $t = Get-Content $f.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
  if ($null -eq $t) { continue }
  foreach ($m in [regex]::Matches($t, '(?i)(src|href)\s*=\s*["''](https?:)?//[^"'']+')) {
    $extHits += "$($f.Name): $($m.Value)"
  }
  if ($t -match '(?i)\b(fetch\s*\(|XMLHttpRequest|navigator\.sendBeacon|new\s+WebSocket|\bimport\s*\()') {
    $extHits += "$($f.Name): 存在网络/动态导入调用"
  }
}
Check "无外部资源引用与网络调用（完全离线）" ($extHits.Count -eq 0) ($extHits -join ' | ')

Add-Line ""
Add-Line "=== 5. 第三方依赖 ==="
$pkg = Get-ChildItem $root -Recurse -File -Include 'package.json','requirements.txt','Gemfile','pom.xml' -ErrorAction SilentlyContinue
Check "零第三方依赖（无 package.json / lock 文件）" ($pkg.Count -eq 0) ($pkg.Name -join ', ')

Add-Line ""
Add-Line "=== 6. 导入功能安全性（进度 JSON 导入） ==="
$imp = [regex]::Match($appJs, '(?s)function importProgress.*?\n\}')
$impTxt = if ($imp.Success) { $imp.Value } else { '' }
Check "导入使用 JSON.parse 而非 eval" ($impTxt -match 'JSON\.parse' -and $impTxt -notmatch 'eval') "导入实现可疑"
Check "导入内容不直接写入 innerHTML" ($impTxt -notmatch 'innerHTML') "导入内容被直接渲染"
Check "导入失败有错误提示" ($impTxt -match 'toast') "缺少失败提示"

Add-Line ""
Add-Line "=== 7. 本地存储隔离 ==="
Check "localStorage 使用专用命名空间" ($appJs -match "LS_KEY\s*=\s*'dmq\." ) "存储键未隔离"
Check "导出走 Blob 下载，不含凭据" ($appJs -match 'new Blob' -and $appJs -notmatch 'localStorage\.clear\(\)[\s\S]{0,80}export') "导出实现可疑"

Add-Line ""
Add-Line "=== 8. 文件协议与路径 ==="
$pathHits = @()
foreach ($f in $jsFiles) {
  $t = Get-Content $f.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
  if ($t -and $t -match '(?i)(readFile|writeFile|require\s*\(\s*[''"]\.\.)') { $pathHits += $f.Name }
}
Check "无文件系统/路径穿越调用" ($pathHits.Count -eq 0) ($pathHits -join ', ')

Add-Line ""
Add-Line "=== 9. 提交内容清单 ==="
Add-Line ("  文件总数: " + $files.Count)
Add-Line ("  含个人数据检查: " + $(if ($files | Where-Object { $_.Name -match '(\.env|credential|secret|\.key|\.pem)$' }) { '发现可疑文件' } else { '未发现 .env / 凭据文件' }))

Add-Line ""
if ($fail -eq 0) {
  Add-Line "=== 安全检测结果：通过（0 个高危项）==="
} else {
  Add-Line "=== 安全检测结果：发现 $fail 项需处理 ==="
}
$report -join "`n" | Write-Output
exit $fail
