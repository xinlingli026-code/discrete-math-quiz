/* ============================================================
   离散数学自测 · 应用引擎
   数据来自 data/sec1*.js （window.BANK）
   ============================================================ */
(function () {
'use strict';

var BANK = window.BANK || [];

/* 同一小节可能被拆成多个文件加载，这里按 sec 合并，split 过程对用户不可见 */
(function () {
  var merged = [], byId = {};
  BANK.forEach(function (s) {
    s.tips = s.tips || [];
    s.items = s.items || [];
    if (byId[s.sec]) {
      var t = byId[s.sec];
      t.items = t.items.concat(s.items);
      s.tips.forEach(function (x) { if (t.tips.indexOf(x) < 0) t.tips.push(x); });
    } else { byId[s.sec] = s; merged.push(s); }
  });
  BANK = merged;
})();
var LS_KEY = 'dmq.progress.v1';
var LS_THEME = 'dmq.theme';

/* ---------- 小节索引 ---------- */
var SECTIONS = BANK.map(function (sec) {
  return { id: sec.sec, title: sec.title, cn: sec.titleCn, tips: sec.tips || [], items: sec.items || [] };
});
var SEC_BY_ID = {};
SECTIONS.forEach(function (s) { SEC_BY_ID[s.id] = s; });

/* ---------- 进度存储 ---------- */
var progress = { rec: {}, fav: [], updated: 0 };
try {
  var raw = localStorage.getItem(LS_KEY);
  if (raw) progress = Object.assign(progress, JSON.parse(raw));
} catch (e) { /* 首次运行 */ }
if (!progress.rec) progress.rec = {};
if (!progress.fav) progress.fav = [];

function save() {
  progress.updated = Date.now();
  try { localStorage.setItem(LS_KEY, JSON.stringify(progress)); } catch (e) {}
}

/* ---------- 工具 ---------- */
function $(s, r) { return (r || document).querySelector(s); }
function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
function el(tag, cls, html) {
  var n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}
function toast(msg) {
  var t = $('#toast');
  t.textContent = msg; t.hidden = false;
  clearTimeout(t._tm); t._tm = setTimeout(function () { t.hidden = true; }, 1900);
}
function pidOf(sec, item, part) { return sec + '#' + item.no + '#' + part.k; }

/* ---------- 归一化与判分 ---------- */
var SUB_DIGITS = { '₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9' };
var SUP_MAP = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','ⁿ':'n' };

function norm(s) {
  if (s == null) return '';
  var t = String(s);
  t = t.replace(/[！-～]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); });
  t = t.replace(/[₀-₉]/g, function (c) { return SUB_DIGITS[c]; });
  t = t.replace(/[⁰-⁹ⁿ]/g, function (c) { return SUP_MAP[c]; });
  t = t.toLowerCase();
  t = t.replace(/[∧&·∙]/g, '∧');
  t = t.replace(/[∨|]/g, '∨');
  t = t.replace(/→|⇒|⊃|⟶|->|=>|-->/g, '→');
  t = t.replace(/↔|⇔|≡|<->|<=>/g, '↔');
  t = t.replace(/[（]/g, '(').replace(/[）]/g, ')');
  t = t.replace(/[“”„]/g, '"').replace(/[‘’]/g, "'");
  t = t.replace(/[，、]/g, ',').replace(/[。；：]/g, ';');
  t = t.replace(/\s+/g, '');
  t = t.replace(/[.;]+$/, '');
  return t;
}
/* "!" 可能是 ¬ 也可能是 ∨，两种都试 */
function variants(s) {
  var raw = String(s == null ? '' : s);
  var a = norm(raw.replace(/!/g, '¬'));
  var b = norm(raw.replace(/!/g, '∨'));
  return a === b ? [a] : [a, b];
}
function words(s) {
  return String(s == null ? '' : s).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5 ]+/g, ' ').split(/\s+/).filter(Boolean);
}
/* 长英文句子用词重合度兜底 */
function looseEq(user, ans) {
  var aw = words(ans), uw = words(user);
  if (aw.length < 5 || uw.length < 5) return false;
  var set = {}, hit = 0;
  uw.forEach(function (w) { set[w] = 1; });
  aw.forEach(function (w) { if (set[w]) hit++; });
  return hit / aw.length >= 0.78;
}
function matchAny(user, ansList) {
  var uv = variants(user);
  for (var i = 0; i < ansList.length; i++) {
    var av = variants(ansList[i]);
    for (var a = 0; a < uv.length; a++) for (var b = 0; b < av.length; b++) {
      if (uv[a] && uv[a] === av[b]) return true;
    }
    if (looseEq(user, ansList[i])) return true;
  }
  return false;
}

/* 判断一个 short 答案是否"确定性"：
   - 含数学符号（∧ ∨ ¬ → ↔ ⊕ ∃ ∀ = ≠ ≤ ≥ …）→ 公式，答案唯一，可自动判对错
   - 含括号的符号化写法 → 公式
   - 其余（英文句子/自然语言）→ 同一命题存在多种合法表述，改为对照答案自评
   英文句子若按字符串硬判，会把"Abby did not send more than 100 text messages
   yesterday."这类完全正确但措辞不同的答案误判为"错误"。 */
function isDeterministic(ans) {
  var s = String(ans == null ? '' : ans);
  if (/[∧∨¬→↔⊕∃∀⊥⊤=≠≤≥<>]/.test(s)) return true;
  if (/[()[\]]/.test(s) && /[A-Za-z]/.test(s)) return true;
  var w = s.split(/\s+/).filter(function (x) { return /^[A-Za-z]{3,}/.test(x); });
  return w.length === 0;
}

/* ---------- 全局状态 ---------- */
var view = {
  mode: 'seq',
  sec: 'all',
  types: {},
  status: 'all',
  list: [],
  paper: null,      // {ids:[], deadline:number|null}
  revealed: {},
  current: 0
};

/* ---------- 数据查询 ---------- */
function allItems() {
  var out = [];
  SECTIONS.forEach(function (s) {
    s.items.forEach(function (it) { out.push({ sec: s, item: it }); });
  });
  return out;
}
function itemParts(entry) { return entry.item.parts || []; }
function recOf(pid) { return progress.rec[pid] || null; }
function statusOf(entry) {
  var ps = itemParts(entry), done = 0, wrong = 0, right = 0, partial = 0, fav = false;
  ps.forEach(function (p) {
    var r = recOf(pidOf(entry.sec.id, entry.item, p));
    if (r) {
      done++;
      if (r.s === 'right') right++;
      else if (r.s === 'wrong') wrong++;
      else if (r.s === 'partial') partial++;
    }
    if (progress.fav.indexOf(pidOf(entry.sec.id, entry.item, p)) >= 0) fav = true;
  });
  return { total: ps.length, done: done, right: right, wrong: wrong, partial: partial, fav: fav,
           acc: (right + partial * 0.5) };
}
function isFav(pid) { return progress.fav.indexOf(pid) >= 0; }
function toggleFav(pid) {
  var i = progress.fav.indexOf(pid);
  if (i >= 0) progress.fav.splice(i, 1); else progress.fav.push(pid);
  save();
}

/* ---------- 筛选与列表 ---------- */
function typeIndex() {
  var m = {};
  allItems().forEach(function (e) {
    var t = e.item.type || '其他';
    m[t] = (m[t] || 0) + 1;
  });
  return m;
}
function applyFilter() {
  var tmap = typeIndex();
  var out = [];
  allItems().forEach(function (e) {
    if (view.sec !== 'all' && e.sec.id !== view.sec) return;
    if (Object.keys(view.types).length && !view.types[e.item.type || '其他']) return;
    var st = statusOf(e);
    if (view.status === 'todo' && st.done > 0) return;
    if (view.status === 'wrong' && st.wrong === 0) return;
    if (view.status === 'fav' && !st.fav) return;
    out.push(e);
  });
  return out;
}
function buildList() {
  if (view.mode === 'random' && view.paper) {
    var map = {};
    allItems().forEach(function (e) { map[e.sec.id + '#' + e.item.no] = e; });
    view.list = view.paper.ids.map(function (k) { return map[k]; }).filter(Boolean);
  } else if (view.mode === 'wrong') {
    view.list = allItems().filter(function (e) { return statusOf(e).wrong > 0; });
  } else {
    view.list = applyFilter();
  }
}

/* ---------- 渲染：侧栏 ---------- */
function renderSidebar() {
  var ul = $('#secList'); ul.innerHTML = '';
  var tmap = typeIndex();
  var totalParts = 0, doneParts = 0, rightParts = 0, favCount = 0;
  SECTIONS.forEach(function (s) {
    var t = 0, d = 0, r = 0;
    s.items.forEach(function (it) {
      it.parts.forEach(function (p) {
        t++;
        var rec = recOf(pidOf(s.id, it, p));
        if (rec) { d++; if (rec.s === 'right') r++; }
      });
    });
    totalParts += t; doneParts += d; rightParts += r;
    var pct = t ? Math.round(d / t * 100) : 0;
    var li = el('li');
    var b = el('button', (view.sec === s.id ? 'is-on' : ''));
    b.innerHTML = '<span class="sname">' + esc(s.cn) + '<span class="ssub">' + esc(s.id + ' · ' + s.title) + '</span></span>' +
                  '<span class="spct">' + pct + '%</span>';
    b.onclick = function () {
      view.sec = (view.sec === s.id ? 'all' : s.id);
      view.mode = 'seq'; view.paper = null;
      syncModeSeg(); buildList(); renderAll();
    };
    li.appendChild(b); ul.appendChild(li);
  });
  // 全部
  var li2 = el('li');
  var b2 = el('button', view.sec === 'all' ? 'is-on' : '');
  b2.innerHTML = '<span class="sname">全部小节<span class="ssub">第 1 章 逻辑与证明</span></span>' +
                 '<span class="spct">' + (totalParts ? Math.round(doneParts / totalParts * 100) : 0) + '%</span>';
  b2.onclick = function () { view.sec = 'all'; view.mode = 'seq'; view.paper = null; syncModeSeg(); buildList(); renderAll(); };
  li2.appendChild(b2); ul.insertBefore(li2, ul.firstChild);

  // 题型 chips
  var tc = $('#typeChips'); tc.innerHTML = '';
  Object.keys(tmap).sort().forEach(function (t) {
    var c = el('button', 'chip' + (view.types[t] ? ' is-on' : ''), esc(t) + ' <b>' + tmap[t] + '</b>');
    c.onclick = function () {
      if (view.types[t]) delete view.types[t]; else view.types[t] = 1;
      view.mode = 'seq'; view.paper = null;
      buildList(); renderAll();
    };
    tc.appendChild(c);
  });

  // 统计条
  var pct = totalParts ? Math.round(doneParts / totalParts * 100) : 0;
  $('#progText').textContent = doneParts + ' / ' + totalParts + ' 小题';
  $('#progBar').style.width = pct + '%';
  $('#stDone').textContent = doneParts;
  $('#stAcc').textContent = doneParts ? Math.round(rightParts / doneParts * 100) + '%' : '—';
  $('#stFav').textContent = progress.fav.length;
}

/* ---------- 渲染：题目 ---------- */
function renderQuestions() {
  var wrap = $('#qWrap'); wrap.innerHTML = '';
  if (!view.list.length) { $('#emptyBox').hidden = false; $('#navBar').hidden = true; $('#runHead').hidden = true; return; }
  $('#emptyBox').hidden = true;

  view.list.forEach(function (entry, idx) {
    var sec = entry.sec, item = entry.item;
    var card = el('section', 'qcard');
    card.id = 'q-' + idx;
    card.dataset.idx = idx;

    var head = el('div', 'qhead');
    head.innerHTML = '<span class="qno">' + esc(sec.id + '.' + item.no) + '</span>' +
      '<span class="qtype">' + esc(item.type || '综合') + '</span>' +
      '<span class="qsec">' + esc(sec.cn) + '</span>';
    card.appendChild(head);

    var qt = el('div', 'qtext', esc(item.q));
    card.appendChild(qt);

    var revKey = sec.id + '#' + item.no;
    var isRev = !!view.revealed[revKey];

    var parts = el('div', 'parts');
    item.parts.forEach(function (p) {
      parts.appendChild(renderPart(sec, item, p, isRev));
    });
    card.appendChild(parts);

    var acts = el('div', 'acts');
    var rev = el('button', 'btn', isRev ? '隐藏答案' : '显示答案');
    rev.setAttribute('data-rev', revKey);
    rev.style.fontSize = '12.5px'; rev.style.padding = '5px 12px';
    rev.onclick = function () {
      view.revealed[revKey] = !view.revealed[revKey];
      refreshItem(sec, item);
    };
    acts.appendChild(rev);
    var fav = el('button', 'fav-btn' + (itemFav(sec.id, item) ? ' on' : ''), '★ 收藏本题');
    fav.onclick = function () {
      item.parts.forEach(function (p) { toggleFav(pidOf(sec.id, item, p)); });
      fav.classList.toggle('on', itemFav(sec.id, item));
      renderSidebar();
    };
    acts.appendChild(fav);
    var diff = el('span', 'diff');
    acts.appendChild(diff);
    card.appendChild(acts);

    // 已显示答案 → 展开答案区
    wrap.appendChild(card);
  });

  renderNav();
}
function p_all(item) { return (item.parts && item.parts[0]) || { k: '1' }; }
function cssEsc(s) { return s.replace(/"/g, '\\"'); }
function itemFav(secId, item) {
  var any = false;
  item.parts.forEach(function (p) { if (isFav(pidOf(secId, item, p))) any = true; });
  return any;
}

function renderPart(sec, item, p, revealed) {
  var pid = pidOf(sec.id, item, p);
  var box = el('div', 'part');
  box.dataset.part = pid;

  var head = el('div', 'part-head');
  head.innerHTML = '<span class="part-k">' + esc(p.k) + '</span><span class="part-q">' + esc(p.q) + '</span>';
  var stamp = el('span', 'stamp', '');
  head.appendChild(stamp);
  box.appendChild(head);

  var rec = recOf(pid);
  if (rec) box.classList.add('st-' + rec.s);

  function markOpt(b, label) {
    var isRight = matchAny(label, p.ans || []);
    if (revealed && isRight) b.classList.add('right');
    if (rec && rec.ans === label) {
      b.classList.add('sel');
      if (revealed && !isRight) b.classList.add('wrong');
    }
  }
  /* 只重绘当前题目，避免每答一题就重建全部 227 张卡片（曾导致点击卡顿 5 秒） */
  function repaint() { refreshItem(sec, item); }

  if (p.mode === 'tf') {
    var o = el('div', 'opts');
    ['True', 'False'].forEach(function (label) {
      var b = el('button', 'opt', label);
      markOpt(b, label);
      b.onclick = function () {
        var ok = matchAny(label, p.ans);
        record(pid, ok ? 'right' : 'wrong', label);
        repaint();
      };
      o.appendChild(b);
    });
    box.appendChild(o);
  } else if (p.mode === 'choice') {
    var oc = el('div', 'opts');
    (p.options || []).forEach(function (label) {
      var b = el('button', 'opt', esc(label));
      markOpt(b, label);
      b.onclick = function () {
        var ok = matchAny(label, p.ans || []);
        record(pid, ok ? 'right' : 'wrong', label);
        repaint();
      };
      oc.appendChild(b);
    });
    box.appendChild(oc);
  } else if (p.mode === 'short') {
    /* 开放式答案（英文句子、反例等）答案不唯一，预设答案只作参考，不直接判错 */
    var lenient = p.lenient || /counterexample/i.test(p.q || '') || !isDeterministic((p.ans || [])[0]);
    var w = el('div', 'short-wrap');
    var inp = el('input');
    inp.type = 'text';
    inp.setAttribute('data-part', pid);
    inp.placeholder = '输入答案后按回车提交';
    if (rec && rec.ans) inp.value = rec.ans;
    inp.onkeydown = function (e) { if (e.key === 'Enter') submitShort(); };
    function submitShort() {
      var v = inp.value.trim();
      if (!v) return;
      var ok = matchAny(v, p.ans || []);
      if (lenient && !ok) {
        record(pid, 'skip', v);
        view.revealed[sec.id + '#' + item.no] = true;   // 直接展开参考答案供对照
        repaint();
        toast('此题为开放表述，未匹配到预设答案——已展开参考答案，请自评');
        return;
      }
      record(pid, ok ? 'right' : 'wrong', v);
      repaint();
    }
    var sub = el('button', 'btn', '提交');
    sub.style.fontSize = '12.5px'; sub.style.padding = '5px 12px';
    sub.onclick = submitShort;
    w.appendChild(inp); w.appendChild(sub);
    box.appendChild(w);
    if (lenient) {
      var lw = el('div', 'self-wrap');
      lw.appendChild(el('span', 'lbl', '或对照参考答案自评：'));
      [['right', '正确', 'on-ok'], ['partial', '部分正确', 'on-part'], ['wrong', '错误', 'on-wrong']].forEach(function (t) {
        var b = el('button', 'sbtn' + (rec && rec.s === t[0] ? ' ' + t[2] : ''), t[1]);
        b.onclick = function () {
          var cur = recOf(pid);
          record(pid, t[0], cur && cur.ans ? cur.ans : inp.value.trim());
          repaint();
        };
        lw.appendChild(b);
      });
      box.appendChild(lw);
    }
  } else if (p.mode === 'self') {
    var ta = el('textarea', 'self-area');
    ta.rows = 3;
    ta.placeholder = '先写下你的答案/推理，再点“显示答案”对照';
    if (rec && rec.ans) ta.value = rec.ans;
    ta.onblur = function () {
      var cur = recOf(pid);
      var v = ta.value.trim();
      if (!cur && !v) return;
      record(pid, cur ? cur.s : 'skip', v);
    };
    box.appendChild(ta);
    if (revealed) {
      var sw = el('div', 'self-wrap');
      sw.appendChild(el('span', 'lbl', '对照答案自评：'));
      [['right', '正确', 'on-ok'], ['partial', '部分正确', 'on-part'], ['wrong', '错误', 'on-wrong']].forEach(function (t) {
        var b = el('button', 'sbtn' + (rec && rec.s === t[0] ? ' ' + t[2] : ''), t[1]);
        b.onclick = function () {
          var cur = recOf(pid);
          record(pid, t[0], cur && cur.ans ? cur.ans : ta.value.trim());
          repaint();
        };
        sw.appendChild(b);
      });
      box.appendChild(sw);
    } else {
      box.appendChild(el('div', 'self-hint', '✎ 写下你的思路后，点下方“显示答案”对照，再回来自评。'));
    }
  }

  // 参考答案（仅在展开时才生成内容，避免首屏塞进 800 多段答案文本）
  var refBox = el('div', 'ref');
  refBox.dataset.refbox = pid;
  refBox.hidden = !revealed;
  if (revealed) {
    var h = '<span class="ref-h">参考答案</span>' + esc(p.ref || '（暂无）');
    if ((p.mode === 'short' || p.mode === 'choice') && p.ans && p.ans.length) {
      h += '<div class="cn">✅ 标准答案：' + esc(p.ans.join('　/　')) + '</div>';
    }
    if (p.cn) h += '<div class="cn">💡 ' + esc(p.cn) + '</div>';
    refBox.innerHTML = h;
  }
  box.appendChild(refBox);

  // stamp 文本
  if (rec) {
    stamp.textContent = rec.s === 'right' ? '✓ 正确' : rec.s === 'partial' ? '◐ 部分正确' : rec.s === 'skip' ? '✎ 待自评' : '✗ 错误';
  }
  return box;
}

function record(pid, s, ans) {
  progress.rec[pid] = { s: s, ans: ans == null ? '' : String(ans), t: Date.now() };
  save();
}

/* 只重绘一道大题（含它的小题与"显示答案"按钮），避免整页重绘 */
function refreshItem(sec, item) {
  var revKey = sec.id + '#' + item.no;
  var isRev = !!view.revealed[revKey];
  (item.parts || []).forEach(function (p) {
    var pid = pidOf(sec.id, item, p);
    var old = document.querySelector('.part[data-part="' + cssEsc(pid) + '"]');
    if (old && old.parentNode) old.parentNode.replaceChild(renderPart(sec, item, p, isRev), old);
  });
  var rv = document.querySelector('[data-rev="' + cssEsc(revKey) + '"]');
  if (rv) rv.textContent = isRev ? '隐藏答案' : '显示答案';
  renderSidebar(); renderNav();
}

/* ---------- 渲染：底部导航 ---------- */
function renderNav() {
  var dots = $('#navDots'); dots.innerHTML = '';
  view.list.forEach(function (entry, idx) {
    var st = statusOf(entry);
    var i = el('i', st.done ? 's-' + (st.wrong ? 'wrong' : st.partial ? 'partial' : 'right') : 's-todo');
    i.title = entry.sec.id + '.' + entry.item.no;
    i.onclick = function () { scrollToIdx(idx); };
    dots.appendChild(i);
  });
  var cur = $$('.nav-dots i')[view.current];
  if (cur) cur.classList.add('is-now');

  $('#rhMeta').textContent = '第 ' + (view.current + 1) + ' / ' + view.list.length + ' 题';
  $('#btnPrev').disabled = view.current <= 0;
  $('#btnNext').disabled = view.current >= view.list.length - 1;
}
function scrollToIdx(idx) {
  view.current = Math.max(0, Math.min(idx, view.list.length - 1));
  var n = document.getElementById('q-' + view.current);
  if (n) {
    n.scrollIntoView({ behavior: 'smooth', block: 'start' });
    $$('.qcard').forEach(function (c) { c.classList.remove('is-current'); });
    n.classList.add('is-current');
  }
  renderNav();
}

/* ---------- 渲染：全部 ---------- */
function renderAll() {
  renderSidebar();
  renderQuestions();
  var isPaper = view.mode === 'random';
  $('#paperPanel').hidden = !isPaper;
  $('#runHead').hidden = !view.list.length;
  $('#navBar').hidden = !view.list.length;
  var names = { seq: '顺序练习', random: '随机组卷', wrong: '错题重练' };
  $('#rhTitle').textContent = names[view.mode];
  if (view.list.length) {
    var secTxt = view.sec === 'all' ? '全部小节' : (SEC_BY_ID[view.sec] ? SEC_BY_ID[view.sec].cn : view.sec);
    $('#rhMeta').textContent = '第 ' + (view.current + 1) + ' / ' + view.list.length + ' 题 · ' + secTxt;
  }
  updateScopeOptions();
}
function syncModeSeg() {
  $$('#modeSeg .seg-btn').forEach(function (b) {
    b.classList.toggle('is-on', b.dataset.mode === view.mode);
  });
}
function updateScopeOptions() {
  var sel = $('#pScope');
  if (sel.options.length > 1) return;
  SECTIONS.forEach(function (s) {
    var o = el('option', '', esc(s.id + ' ' + s.cn));
    o.value = s.id; sel.appendChild(o);
  });
}

/* ---------- 统计 ---------- */
function renderStats() {
  var wrap = $('#statWrap'); wrap.innerHTML = '';
  var total = 0, done = 0, right = 0, partial = 0, wrong = 0;

  var secRows = el('div');
  SECTIONS.forEach(function (s) {
    var t = 0, d = 0, r = 0, p = 0, w = 0;
    s.items.forEach(function (it) {
      it.parts.forEach(function (pp) {
        t++;
        var rec = recOf(pidOf(s.id, it, pp));
        if (rec) { d++; if (rec.s === 'right') r++; else if (rec.s === 'partial') p++; else w++; }
      });
    });
    total += t; done += d; right += r; partial += p; wrong += w;
    var pct = t ? Math.round(d / t * 100) : 0;
    var acc = d ? Math.round((r + p * 0.5) / d * 100) : 0;
    secRows.appendChild(statRow(s.id + ' ' + s.cn, s.title, pct, acc, d + '/' + t, r + '✓ ' + p + '◐ ' + w + '✗'));
  });
  var h = el('h3', '', '分节完成情况');
  wrap.appendChild(h); wrap.appendChild(secRows);

  // 题型维度
  var byType = {};
  allItems().forEach(function (e) {
    var t = e.item.type || '其他';
    byType[t] = byType[t] || { t: 0, d: 0, r: 0, p: 0, w: 0 };
    e.item.parts.forEach(function (pp) {
      byType[t].t++;
      var rec = recOf(pidOf(e.sec.id, e.item, pp));
      if (rec) { byType[t].d++; if (rec.s === 'right') byType[t].r++; else if (rec.s === 'partial') byType[t].p++; else byType[t].w++; }
    });
  });
  var tRows = el('div');
  Object.keys(byType).sort(function (a, b) { return byType[b].t - byType[a].t; }).forEach(function (t) {
    var o = byType[t];
    var pct = o.t ? Math.round(o.d / o.t * 100) : 0;
    var acc = o.d ? Math.round((o.r + o.p * 0.5) / o.d * 100) : 0;
    tRows.appendChild(statRow(t, '', pct, acc, o.d + '/' + o.t, o.r + '✓ ' + o.p + '◐ ' + o.w + '✗'));
  });
  wrap.appendChild(el('h3', '', '题型掌握度'));
  wrap.appendChild(tRows);

  var summary = el('div');
  summary.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;margin-top:4px';
  summary.innerHTML =
    '<span class="chip">总小题 ' + total + '</span>' +
    '<span class="chip">已完成 ' + done + '</span>' +
    '<span class="chip">正确 ' + right + '</span>' +
    '<span class="chip">部分正确 ' + partial + '</span>' +
    '<span class="chip">错误 ' + wrong + '</span>' +
    '<span class="chip">整体正确率 ' + (done ? Math.round((right + partial * 0.5) / done * 100) : 0) + '%</span>';
  wrap.appendChild(summary);
}
function statRow(name, sub, pct, acc, cnt, detail) {
  var row = el('div', 'st-row');
  var nm = el('div', 'nm');
  nm.innerHTML = esc(name) + (sub ? '<small>' + esc(sub) + '</small>' : '');
  row.appendChild(nm);
  var b = el('div');
  b.innerHTML = '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
                '<div style="font-size:11.5px;color:var(--fg3);margin-top:5px">' + esc(detail) + '</div>';
  row.appendChild(b);
  var d = el('div', 'donut');
  d.innerHTML = donutSvg(pct) + '<span class="lbl">' + acc + '%</span>';
  row.appendChild(d);
  return row;
}
function donutSvg(pct) {
  var R = 30, C = 2 * Math.PI * R, off = C * (1 - pct / 100);
  return '<svg width="74" height="74" viewBox="0 0 74 74">' +
    '<circle cx="37" cy="37" r="' + R + '" fill="none" stroke="var(--line2)" stroke-width="8"/>' +
    '<circle cx="37" cy="37" r="' + R + '" fill="none" stroke="var(--accent)" stroke-width="8" stroke-linecap="round" ' +
    'stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg>';
}

/* ---------- 速查卡 ---------- */
function renderCheat() {
  var wrap = $('#cheatWrap'); wrap.innerHTML = '';
  SECTIONS.forEach(function (s) {
    var box = el('div', 'cheat-sec');
    box.innerHTML = '<h3>' + esc(s.id + ' · ' + s.cn) +
      ' <span style="font-weight:400;color:var(--fg3);font-size:12px">' + esc(s.title) + '</span></h3>';
    var ul = el('ul');
    (s.tips || []).forEach(function (t) { ul.appendChild(el('li', '', esc(t))); });
    box.appendChild(ul);
    wrap.appendChild(box);
  });
}

/* ---------- 搜索 ---------- */
function doSearch(q) {
  var res = $('#searchResults'); res.innerHTML = '';
  q = q.trim().toLowerCase();
  if (!q) { res.innerHTML = '<p class="muted" style="font-size:13px">输入关键词开始搜索。</p>'; return; }
  var hits = [];
  allItems().forEach(function (e) {
    var hay = (e.item.q + ' ' + (e.item.type || '') + ' ' + e.item.parts.map(function (p) { return p.q + ' ' + (p.ref || ''); }).join(' ')).toLowerCase();
    if (hay.indexOf(q) >= 0) hits.push(e);
  });
  res.innerHTML = '<p class="muted" style="font-size:12.5px;margin:0 0 8px">命中 ' + hits.length + ' 道题</p>';
  hits.slice(0, 60).forEach(function (e) {
    var it = el('div', 'sr-item');
    it.innerHTML = '<div class="sr-h">' + esc(e.sec.id + '.' + e.item.no + ' · ' + (e.item.type || '')) + '</div>' +
      '<div class="sr-q">' + highlight(e.item.q, q) + '</div>';
    it.onclick = function () {
      $('#searchModal').hidden = true;
      view.sec = 'all'; view.mode = 'seq'; view.paper = null; view.types = {}; view.status = 'all';
      syncModeSeg(); buildList(); renderAll();
      var idx = view.list.indexOf(e);
      if (idx >= 0) setTimeout(function () { scrollToIdx(idx); }, 60);
    };
    res.appendChild(it);
  });
}
function highlight(text, q) {
  var i = text.toLowerCase().indexOf(q);
  if (i < 0) return esc(text);
  return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
}

/* ---------- 计时器 ---------- */
var timerId = null, deadline = null;
function startTimer(minutes) {
  stopTimer();
  deadline = Date.now() + minutes * 60 * 1000;
  var t = $('#timer'); t.hidden = false;
  timerId = setInterval(function () {
    var left = Math.max(0, Math.round((deadline - Date.now()) / 1000));
    var mm = String(Math.floor(left / 60)).padStart(2, '0');
    var ss = String(left % 60).padStart(2, '0');
    t.textContent = mm + ':' + ss;
    if (left <= 0) {
      stopTimer();
      toast('时间到！已自动交卷并展开全部答案');
      revealAll();
    }
  }, 1000);
}
function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } $('#timer').hidden = true; }
function revealAll() {
  view.list.forEach(function (e) { view.revealed[e.sec.id + '#' + e.item.no] = true; });
  renderQuestions();
}

/* ---------- 组卷 ---------- */
function makePaper() {
  var count = parseInt($('#pCount').value, 10) || 20;
  var scope = $('#pScope').value;
  var pool = allItems().filter(function (e) { return scope === 'all' || e.sec.id === scope; });
  for (var i = pool.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
  }
  var chosen = pool.slice(0, Math.min(count, pool.length));
  view.paper = { ids: chosen.map(function (e) { return e.sec.id + '#' + e.item.no; }) };
  view.mode = 'random';
  view.current = 0;
  syncModeSeg();
  buildList();
  renderAll();
  if ($('#pTimer').checked) startTimer(Math.max(5, Math.round(chosen.length * 1.5)));
  toast('已生成 ' + chosen.length + ' 题试卷');
}

/* ---------- 导入导出 ---------- */
function exportProgress() {
  var blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'discrete-math-quiz-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  toast('进度已导出');
}
function importProgress(file) {
  var fr = new FileReader();
  fr.onload = function () {
    try {
      var d = JSON.parse(fr.result);
      progress = Object.assign({ rec: {}, fav: [], updated: 0 }, d);
      save(); buildList(); renderAll();
      toast('进度已导入');
    } catch (e) { toast('导入失败：文件格式不正确'); }
  };
  fr.readAsText(file);
}

/* ---------- 主题 ---------- */
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem(LS_THEME, t); } catch (e) {}
}
function initTheme() {
  var t = 'light';
  try { t = localStorage.getItem(LS_THEME) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); } catch (e) {}
  setTheme(t);
}

/* ---------- 事件绑定 ---------- */
function bind() {
  $('#modeSeg').addEventListener('click', function (e) {
    var b = e.target.closest('.seg-btn'); if (!b) return;
    view.mode = b.dataset.mode;
    view.current = 0;
    if (view.mode !== 'random') { view.paper = null; stopTimer(); }
    syncModeSeg(); buildList(); renderAll();
  });
  $('#statusChips').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    $$('#statusChips .chip').forEach(function (c) { c.classList.remove('is-on'); });
    b.classList.add('is-on');
    view.status = b.dataset.status;
    if (view.mode === 'wrong') { view.mode = 'seq'; syncModeSeg(); }
    view.current = 0;
    buildList(); renderAll();
  });
  $('#btnMakePaper').onclick = makePaper;
  $('#btnShuffleAll').onclick = function () {
    var pool = applyFilter();
    for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = pool[i]; pool[i] = pool[j]; pool[j] = t; }
    view.paper = { ids: pool.map(function (e) { return e.sec.id + '#' + e.item.no; }) };
    view.mode = 'random'; view.current = 0; syncModeSeg(); buildList(); renderAll();
    toast('已按当前筛选条件随机排序');
  };
  $('#btnPrev').onclick = function () { scrollToIdx(view.current - 1); };
  $('#btnNext').onclick = function () { scrollToIdx(view.current + 1); };
  $('#btnStats').onclick = function () { renderStats(); $('#statsModal').hidden = false; };
  $('#btnCheat').onclick = function () { renderCheat(); $('#cheatModal').hidden = false; };
  $('#btnTheme').onclick = function () {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  };
  $('#btnExport').onclick = exportProgress;
  $('#btnImport').onclick = function () { $('#fileImport').click(); };
  $('#fileImport').onchange = function (e) { if (e.target.files[0]) importProgress(e.target.files[0]); };
  $('#btnReset').onclick = function () {
    if (!confirm('确定要清空全部答题进度与收藏吗？此操作不可撤销。')) return;
    progress = { rec: {}, fav: [], updated: Date.now() };
    save(); buildList(); renderAll(); toast('进度已重置');
  };
  $('#btnSearch').onclick = function () { $('#searchModal').hidden = false; $('#searchInput').focus(); doSearch(''); };
  $('#searchInput').addEventListener('input', function () { doSearch(this.value); });
  $('#btnResetFilter').onclick = function () {
    view.sec = 'all'; view.types = {}; view.status = 'all'; view.mode = 'seq'; view.paper = null;
    $$('#statusChips .chip').forEach(function (c, i) { c.classList.toggle('is-on', i === 0); });
    syncModeSeg(); buildList(); renderAll();
  };
  $$('.modal').forEach(function (m) {
    m.addEventListener('click', function (e) {
      if (e.target === m || e.target.hasAttribute('data-close')) m.hidden = true;
    });
  });

  document.addEventListener('keydown', function (e) {
    if (/input|textarea|select/i.test((e.target.tagName || ''))) return;
    if (e.key === 'Escape') { $$('.modal').forEach(function (m) { m.hidden = true; }); return; }
    if (e.key === 'n' || e.key === 'ArrowRight') { e.preventDefault(); scrollToIdx(view.current + 1); }
    if (e.key === 'p' || e.key === 'ArrowLeft') { e.preventDefault(); scrollToIdx(view.current - 1); }
    if (e.key === '/') { e.preventDefault(); $('#searchModal').hidden = false; $('#searchInput').focus(); }
  });

  var wrap = $('#qWrap');
  wrap.addEventListener('scroll', function () {}, { passive: true });
  document.addEventListener('scroll', function () {
    var cards = $$('.qcard');
    var best = 0;
    cards.forEach(function (c, i) { if (c.getBoundingClientRect().top < 160) best = i; });
    if (best !== view.current) { view.current = best; renderNav(); }
  }, { passive: true });
}

/* ---------- 启动 ---------- */
function init() {
  initTheme();
  bind();
  buildList();
  renderAll();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

})();
