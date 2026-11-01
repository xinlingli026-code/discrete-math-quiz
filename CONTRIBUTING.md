# 贡献指南 (Contributing)

感谢你愿意为本项目出力！本项目是一个**纯静态、零依赖、完全离线**的自测网页应用，任何改动都必须保持这一约束。

## 环境要求

你**不需要**安装任何运行时、依赖或构建工具。

- 浏览器：任意现代浏览器（Chrome / Edge / Firefox / Safari）
- 可选：Node.js（仅用于运行 `tools/validate-data.js` 校验题库），**不是**运行应用的必需条件

## 本地运行

直接双击 `index.html` 即可，项目不需要服务器、不需要构建、不请求网络。

如需用本地服务调试（某些浏览器对 `file://` 限制较多）：

```bash
python -m http.server 8000    # 或 npx serve .
```

然后访问 <http://localhost:8000/>。

## 改动前请先跑一遍校验

```bash
node tools/validate-data.js          # 题库结构校验（题号、mode、ans、ref）
powershell -ExecutionPolicy Bypass -File tools/security-scan.ps1   # 静态安全扫描
```

两个脚本都必须以退出码 0 结束。这与 CI 上执行的检查完全一致。

## 三条硬性红线

1. **零依赖**：不得引入任何 npm 包、CDN 资源、外部字体、远程 API 或构建步骤。
2. **完全离线**：`index.html` / `app.js` / `styles.css` / `data/` 中不得出现 `http(s)://` 资源引用与网络调用。
3. **内容真实性**：题库内容来自教材习题与官方答案册。**不得编造**答案册中不存在的内容；答案册未覆盖的题目必须标注为 `self`（人工自评）并写明推导结论。

## 题库数据结构

完整规范见 [`SCHEMA.md`](SCHEMA.md)。要点：

- 每个小节一个 `data/secXX.js` 文件，末尾以 `window.BANK.push({...});` 追加。
- 每个 part 必须有 `mode`（`tf` / `choice` / `short` / `self`）与 `ref`（参考答案）。
- `tf` / `choice` / `short` 必须有 `ans`；`self` 不需要 `ans`，由使用者对照 `ref` 自评。
- 数学符号统一使用 `∧ ∨ ¬ → ↔ ⊕ ∀ ∃ ⊤ ⊥`。
- ⚠️ 从 PDF 抽取文本时 `∨` 与 `∃` 都会被抽成 `!`，务必按 `SCHEMA.md` 的还原表处理。

## 提交规范

- 一个 PR 只做一件事，标题用 `feat:` / `fix:` / `docs:` / `data:` 前缀。
- 修改题库时请说明依据（答案册页码或教材原题）。
- 提交前确认 `node tools/validate-data.js` 与安全扫描均通过。

## 认领 Issue

先在 Issue 下留言认领，再开始动手；超过两周无进展可以由维护者重新分配。

## 许可

你贡献的代码默认以 MIT 协议授权（见 [`LICENSE`](LICENSE)）。`data/` 目录下的习题文本与官方解答属第三方版权材料，**不在 MIT 授权范围内**，详见 [`data/README.md`](data/README.md)。
