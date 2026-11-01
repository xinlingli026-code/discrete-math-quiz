#!/usr/bin/env node
/**
 * 题库结构校验器 —— Node 运行时，零第三方依赖（仅用内置 fs / path / vm）
 *
 * 用法:
 *   node tools/validate-data.js
 *   node tools/validate-data.js --quiet   # 只输出结论
 *
 * 检查内容:
 *   1. data/sec*.js 可被解析，且每个文件只 push 一条小节记录
 *   2. 文件名与 sec 字段一致
 *   3. 大题题号：整数、唯一、严格递增
 *   4. 每个 part 都有非空 q、合法 mode、非空 ref
 *   5. tf / choice / short 的 ans 齐全；choice 的 ans 能在 options 中找到
 *   6. index.html 引用了全部 data/sec*.js
 *
 * 退出码: 0 = 无错误（可能有警告）；1 = 存在错误
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const VALID_MODES = ['tf', 'choice', 'short', 'self'];
const QUIET = process.argv.indexOf('--quiet') !== -1;

const errors = [];
const warnings = [];
const stats = {
  files: 0,
  sections: 0,
  items: 0,
  parts: 0,
  modes: { tf: 0, choice: 0, short: 0, self: 0 },
  sectionItems: {}
};

function err(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }
function say(msg) { if (!QUIET) console.log(msg); }

function loadBank(file) {
  const code = fs.readFileSync(file, 'utf8');
  const sandbox = { window: { BANK: [] } };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: path.basename(file) });
  return sandbox.window.BANK;
}

function expectedSec(fileName) {
  const m = /^sec(\d+)([a-z]?)\.js$/.exec(fileName);
  if (!m) return null;
  const digits = m[1];
  if (digits.length === 2) return digits[0] + '.' + digits[1];
  if (digits.length === 3) return digits[0] + '.' + digits.slice(1);
  return null;
}

function checkPart(sec, itemNo, key, p, where) {
  if (!p || typeof p !== 'object') {
    err(`${where}: part 不是对象`);
    return;
  }
  if (typeof p.q !== 'string' || !p.q.trim()) {
    err(`${where}: 缺少小题题干 q`);
  }
  if (VALID_MODES.indexOf(p.mode) === -1) {
    err(`${where}: mode 非法或缺失 -> "${p.mode}"`);
  } else {
    stats.modes[p.mode]++;
  }
  const ref = typeof p.ref === 'string' ? p.ref.trim() : '';
  if (!ref || /^[.\u2026]+$/.test(ref)) {
    err(`${where}: 参考答案 ref 缺失或为空`);
  }
  if (p.mode === 'tf') {
    if (!Array.isArray(p.ans) || p.ans.length === 0) {
      err(`${where}: tf 模式缺少 ans`);
    } else {
      p.ans.forEach((a) => {
        const v = String(a).trim().toLowerCase();
        if (v !== 'true' && v !== 'false') err(`${where}: tf 的 ans 非法 -> "${a}"`);
      });
    }
  } else if (p.mode === 'choice') {
    if (!Array.isArray(p.options) || p.options.length < 2 || p.options.length > 6) {
      err(`${where}: choice 的 options 数量异常（应为 2–6）`);
    }
    if (!Array.isArray(p.ans) || p.ans.length === 0) {
      err(`${where}: choice 模式缺少 ans`);
    } else if (Array.isArray(p.options)) {
      p.ans.forEach((a) => {
        const hit = p.options.some((o) => String(o).trim().toLowerCase() === String(a).trim().toLowerCase());
        if (!hit) warn(`${where}: ans "${a}" 未出现在 options 中`);
      });
    }
  } else if (p.mode === 'short') {
    if (!Array.isArray(p.ans) || p.ans.length === 0) {
      err(`${where}: short 模式缺少 ans`);
    }
  }
}

function main() {
  if (!fs.existsSync(DATA_DIR)) {
    err(`找不到题库目录: ${DATA_DIR}`);
    return report();
  }

  const seenBySec = {};
  const fileNames = fs.readdirSync(DATA_DIR)
    .filter((f) => /^sec\d+[a-z]?\.js$/.test(f))
    .sort();

  if (fileNames.length === 0) err('data/ 下没有找到 sec*.js 题库文件');

  fileNames.forEach((fileName) => {
    const full = path.join(DATA_DIR, fileName);
    stats.files++;

    let bank;
    try {
      bank = loadBank(full);
    } catch (e) {
      err(`${fileName}: 解析失败 -> ${e && e.message ? e.message : e}`);
      return;
    }

    if (!Array.isArray(bank) || bank.length !== 1) {
      err(`${fileName}: 期望恰好 1 条小节记录，实际 ${Array.isArray(bank) ? bank.length : '非数组'}`);
      return;
    }

    const sec = bank[0];
    const exp = expectedSec(fileName);
    if (exp && sec.sec !== exp) {
      err(`${fileName}: sec 字段 "${sec.sec}" 与文件名预期 "${exp}" 不一致`);
    }
    if (typeof sec.title !== 'string' || !sec.title.trim()) err(`${fileName}: 缺少 title`);
    if (typeof sec.titleCn !== 'string' || !sec.titleCn.trim()) warn(`${fileName}: 缺少中文标题 titleCn`);
    if (!Array.isArray(sec.tips) || sec.tips.length === 0) warn(`${fileName}: 缺少考点提要 tips`);

    if (!Array.isArray(sec.items) || sec.items.length === 0) {
      err(`${fileName}: items 为空`);
      return;
    }

    stats.sections++;
    const seen = {};
    let prevNo = -Infinity;

    sec.items.forEach((item) => {
      const where = `${fileName} 第 ${item && item.no} 题`;
      if (!item || typeof item !== 'object') {
        err(`${where}: item 不是对象`);
        return;
      }
      if (!Number.isInteger(item.no) || item.no <= 0) {
        err(`${where}: 题号 no 非法`);
        return;
      }
      if (seen[item.no]) {
        err(`${where}: 题号重复`);
        return;
      }
      seen[item.no] = true;
      if (item.no <= prevNo) {
        err(`${where}: 题号未严格递增（上一题为 ${prevNo}）`);
      }
      prevNo = item.no;

      if (typeof item.q !== 'string' || !item.q.trim()) err(`${where}: 缺少题干 q`);
      if (typeof item.type !== 'string' || !item.type.trim()) warn(`${where}: 缺少题型标签 type`);
      if (!Array.isArray(item.parts) || item.parts.length === 0) {
        err(`${where}: parts 为空`);
        return;
      }

      stats.items++;
      const secSeen = seenBySec[sec.sec] || (seenBySec[sec.sec] = {});
      if (secSeen[item.no]) {
        err(`${where}: 题号与同小节其他文件重复`);
      }
      secSeen[item.no] = true;
      const keys = {};
      item.parts.forEach((part, idx) => {
        const key = part && part.k ? String(part.k) : String(idx + 1);
        if (keys[key]) err(`${where} part ${key}: 子题标签重复`);
        keys[key] = true;
        stats.parts++;
        checkPart(sec.sec, item.no, key, part, `${where} part ${key}`);
      });
    });

    const nos = sec.items.map((i) => i.no).sort((a, b) => a - b);
    const span = nos[nos.length - 1] - nos[0] + 1;
    if (span !== nos.length) {
      warn(`${fileName}: 题号不连续（${nos[0]}–${nos[nos.length - 1]}，共 ${nos.length} 题，缺 ${span - nos.length} 个）`);
    }
    stats.sectionItems[sec.sec] = (stats.sectionItems[sec.sec] || 0) + nos.length;
  });

  // 同一小节被拆成多个文件时（sec15a / sec15b），题号不应重复
  const bySec = {};
  Object.keys(stats.sectionItems).forEach((s) => { bySec[s] = stats.sectionItems[s]; });
  const secList = Object.keys(bySec).sort();
  say('小节题量统计:');
  secList.forEach((s) => say(`  ${s}: ${bySec[s]} 题`));

  // index.html 是否引用了全部题库文件
  const indexFile = path.join(ROOT, 'index.html');
  if (fs.existsSync(indexFile)) {
    const html = fs.readFileSync(indexFile, 'utf8');
    fileNames.forEach((f) => {
      if (html.indexOf('data/' + f) === -1) {
        err(`index.html 未引用题库文件 data/${f}`);
      }
    });
  } else {
    err('缺少 index.html');
  }

  return report();
}

function report() {
  const auto = stats.modes.tf + stats.modes.choice + stats.modes.short;
  say('');
  say('=== 题库校验统计 ===');
  say(`  题库文件: ${stats.files}  小节: ${Object.keys(stats.sectionItems).length}  大题: ${stats.items}  小题: ${stats.parts}`);
  say(`  自动判分: ${auto} (tf ${stats.modes.tf} / choice ${stats.modes.choice} / short ${stats.modes.short})`);
  say(`  人工自评: ${stats.modes.self}`);

  if (warnings.length) {
    say('');
    say(`=== 警告 ${warnings.length} 条 ===`);
    warnings.forEach((w) => say('  [WARN] ' + w));
  }
  if (errors.length) {
    say('');
    say(`=== 错误 ${errors.length} 条 ===`);
    errors.forEach((e) => say('  [ERROR] ' + e));
    say('');
    say('=== 校验结果：失败 ===');
    process.exitCode = 1;
    return;
  }
  say('');
  say('=== 校验结果：通过 ===');
}

main();
