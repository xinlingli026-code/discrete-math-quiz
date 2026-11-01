<div align="center">

# 离散数学自测 · Discrete Math Quiz

**离线、零依赖、纯前端的离散数学自测工具**
*An offline, dependency-free, pure front-end self-test tool for discrete mathematics*

第 1 章「逻辑与证明」全节覆盖 · 227 道大题 / 829 道小题 · 64% 自动判分

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Validate](https://github.com/xinlingli026-code/discrete-math-quiz/actions/workflows/validate.yml/badge.svg)](https://github.com/xinlingli026-code/discrete-math-quiz/actions/workflows/validate.yml)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success.svg)]()
[![Offline](https://img.shields.io/badge/network-none-informational.svg)]()
[![No Build Step](https://img.shields.io/badge/build-none%20required-success.svg)]()

[快速开始](#快速开始) · [功能](#功能) · [判分规则](#判分规则) · [题库来源](#题库来源与已知缺口) · [贡献指南](CONTRIBUTING.md) · [安全策略](SECURITY.md)

</div>

---

## 这是什么

一本离散数学教材第 1 章（1.1–1.6 节）的**习题自测软件**：题目、官方解答、判分、错题本、学习统计全部打包在一个纯静态网页里。

**打开即用，不装任何东西，不联网，不上传任何数据。**

```
双击 index.html  →  开始做题
```

- 无需 Node / Python / 构建步骤
- 无第三方依赖，无 CDN 引用，无网络请求
- 答题进度存浏览器 localStorage，可导出 JSON 跨设备迁移

### English summary

A self-test web app for Chapter 1 (“The Foundations: Logic and Proofs”) of a discrete
mathematics textbook. It ships the exercise text, the official solution notes, an
auto-grading engine, a wrong-answer book and learning statistics — all in one
static page.

**Zero dependencies. No build step. Fully offline.** Open `index.html` in a browser
and start. Progress is stored in `localStorage` and can be exported as JSON.

---

## 功能

| 功能 | 说明 |
|---|---|
| **顺序练习** | 按小节顺序推进，左侧可按小节 / 题型 / 状态筛选 |
| **随机组卷** | 选题量与范围随机抽题成卷，可开倒计时，到时自动交卷并展开全部答案 |
| **错题重练** | 一键汇总所有做错的大题 |
| **自动判分** | 判断题、选择题、公式填空题即时判分；主观题对照官方解答自评 |
| **参考答案** | 每题可展开官方解答要点，部分附中文提示与易错点 |
| **学习统计** | 分节完成度、题型掌握度环形图，正确 / 部分正确 / 错误分布 |
| **考点速查** | 每节中文考点提要速查卡 |
| **全文搜索** | 检索题干与答案（快捷键 `/`） |
| **进度持久化** | localStorage 保存答题与收藏，可导出 / 导入 JSON |
| **深浅色主题** | 顶栏 `◐` 切换，跟随系统偏好 |
| **自检工具** | 三个内置自检页，题库与判分引擎可自动体检 |

**快捷键**：`N` / `→` 下一题，`P` / `←` 上一题，`/` 搜索，`Esc` 关闭弹层。

---

## 快速开始

### 方式一：直接使用（无需任何环境）

1. 下载或克隆本仓库
2. 双击 `index.html`

推荐 Chrome / Edge / Firefox 最新版。

### 方式二：克隆

```bash
git clone https://github.com/xinlingli026-code/discrete-math-quiz.git
cd discrete-math-quiz
# 直接打开 index.html 即可；如需本地服务：
python -m http.server 8000     # 然后访问 http://localhost:8000
```

### 换成你自己的题库

```bash
# 删掉示例题库
rm -rf data/sec*.js
# 按 SCHEMA.md 编写你自己的 data/sec11.js ... 并在 index.html 中引入
```

详见 [`SCHEMA.md`](SCHEMA.md)。

---

## 目录结构

```
discrete-math-quiz/
├─ index.html        页面骨架（双击即用）
├─ styles.css        样式：浅色 / 深色两套主题变量
├─ app.js            引擎：判分、筛选、组卷、统计、搜索、持久化
├─ SCHEMA.md         题库数据规范：新增/修改题目的写法
├─ check.html        题库自检页：结构体检与质量报告
├─ selftest.html     判分引擎自检页：530 道自动判分题的断言
├─ apptest.html      端到端自检页：驱动真实 app.js 跑 6 个场景
├─ tools/
│  ├─ validate-data.js     题库校验（Node，零依赖，供 CI 使用）
│  └─ security-scan.ps1    安全扫描（静态分析，9 项检查）
├─ .github/          Issue 模板与 CI 工作流
├─ data/             题库数据（见 data/README.md 的授权说明）
│  ├─ sec11.js … sec16.js
└─ LICENSE           MIT
```

---

## 题库规模

| 小节 | 大题 | 小题 | 可自动判分 | 对照自评 |
|---|---:|---:|---:|---:|
| 1.1 命题逻辑 Propositional Logic | 47 | 236 | 111 | 125 |
| 1.2 命题逻辑的应用 Applications of Propositional Logic | 22 | 37 | 21 | 16 |
| 1.3 命题等价 Propositional Equivalences | 36 | 78 | 58 | 20 |
| 1.4 谓词与量词 Predicates and Quantifiers | 54 | 215 | 124 | 91 |
| 1.5 嵌套量词 Nested Quantifiers | 46 | 208 | 189 | 19 |
| 1.6 推理规则 Rules of Inference | 22 | 55 | 27 | 28 |
| **合计** | **227** | **829** | **530 (64%)** | **299** |

---

## 判分规则

引擎的判定分两类，界线在 `app.js` 的 `isDeterministic()`：

- **答案唯一 → 严格自动判分**。答案里含数学符号（`∧ ∨ ¬ → ↔ ⊕ ∃ ∀ = ≠ ≤ ≥`）或带括号的符号化写法，即属此类。比对前会归一化：去空格、统一全角半角、`¬!~`/`∨|`/`∧&`/`→=>`/`↔≡` 等价、上下标转数字，因此 `p∧q` 与 `p&q` 视为相同。
- **答案不唯一 → 对照答案自评**。自然语言句子（如"写出下列命题的否定句"）和反例题，同一问题存在多种合法表述，预设答案只作参考。提交后若未匹配到预设答案，会**自动展开参考答案**并标记为「✎ 待自评」，由你点「正确 / 部分正确 / 错误」判定。

> 设计取舍：对开放题硬做字符串比对会把"完全正确但措辞不同"的答案误判为错误，
> 因此宁可交给人判断，也不给出错误的确定性结论。

---

## 题库来源与已知缺口

题目与解答来自配套教材与教师资源包（IRG）。**已知缺口如实标注，未凭空补写**：

1. 官方答案册只覆盖**偶数题号**；奇数题无官方解答，由推导给出可靠答案或转为自评模式。
2. 1.1 节习题止于第 47 题，而答案册到第 54 题（末尾题号错位一位），按内容匹配处理。
3. 1.5 节习题 PDF 为节选，第 1–6 题及第 7 题 a) 缺失，未凭空生成。
4. 1.3 / 1.4 / 1.5 / 1.6 习题 PDF 同为节选，个别小节末题有缺页。

---

## 自检与安全

三个自检页用浏览器直接打开即可：

| 页面 | 作用 |
|---|---|
| `check.html` | 题库结构体检：题号连续性、mode 分布、缺项、抽取噪声残留 |
| `selftest.html` | 判分引擎断言：标准答案能否判过自己、干扰项是否误判、提交逻辑分支 |
| `apptest.html` | 端到端：驱动真实 `app.js` 的 DOM 与事件，跑 6 个真实使用场景 |

CI（`.github/workflows/validate.yml`）在每次 push / PR 上自动执行：题库结构校验（Node）、
静态安全扫描（PowerShell）、零依赖检查与无外部资源检查。任何一项失败都会让本次提交挂上红色叉号。

命令行等价于：

```bash
node tools/validate-data.js
powershell -ExecutionPolicy Bypass -File tools/security-scan.ps1
```

> 注：`tools/validate-data.js` 需要 Node.js（仅用于校验，不参与运行）；`tools/security-scan.ps1` 需要 PowerShell。两者都不是运行本应用的前置条件。

### 安全检测

```powershell
powershell -ExecutionPolicy Bypass -File tools/security-scan.ps1
```

覆盖 9 类：硬编码密钥/私钥、危险 JS API（`eval` / `new Function` / 字符串定时器）、
`innerHTML` 注入面与不可信字段渲染路径、外部资源与网络调用、第三方依赖、
导入功能安全性、localStorage 命名空间隔离、文件系统调用、敏感文件残留。

**当前结果：通过，0 个高危项。**

架构层面的安全属性：纯静态、无网络请求、无第三方脚本、零依赖、
所有题库文本经 `esc()` 转义后渲染、导入仅走 `JSON.parse`、本地存储命名空间隔离。

---

## 贡献

欢迎提交 Issue 与 Pull Request。请先阅读 [贡献指南](CONTRIBUTING.md)、
[行为准则](CODE_OF_CONDUCT.md) 与 [安全策略](SECURITY.md)。

新增题目请遵循 [`SCHEMA.md`](SCHEMA.md)，并确保 `check.html` 与 `selftest.html` 全部通过。

---

## 许可证

**软件代码：[MIT](LICENSE)** —— 可自由用于商业用途，包括闭源集成，无需支付许可费。

**`data/` 下的习题文本与官方解答属于第三方版权材料，不在 MIT 授权范围内**，
适用 [`data/README.md`](data/README.md) 中单独说明的授权。若你不具备再分发权利，
删除 `data/` 目录即可，软件其余部分照常可用。

---

## 致谢

- 题目与官方解答来自配套教材及其教师资源包，版权归属原作者。
- 本项目为学习辅助工具，与教材出版方无关联。
