window.BANK.push({
  sec: "1.1",
  title: "Propositional Logic",
  titleCn: "命题逻辑",
  tips: [
    "命题必须能赋真值：陈述句 + 无自由变量；命令、疑问句、含变量的句子都不是命题",
    "常见联结词：¬ 否定、∧ 合取（and）、∨ 析取（or）、→ 蕴涵（if...then）、↔ 双条件（iff）、⊕ 异或",
    "否定规则：¬(p ∧ q) ≡ ¬p ∨ ¬q，¬(p ∨ q) ≡ ¬p ∧ ¬q；否定复合命题要交换「与」和「或」",
    "条件句三种改写：p → q、¬q → ¬p（逆否）、只有 q 才 p；「necessary」把必要条件放在结论，「sufficient」把充分条件放在前件",
    "「p if and only if q」= p ↔ q = (p → q) ∧ (q → p)；中文的「当且仅当」不可漏掉一个方向",
    "真值表行数 = 2ⁿ（n 为出现的不同命题变量个数）；真值表由内向外逐步构造",
    "恒真式（tautology）每行都真；矛盾式（contradiction）每行都假",
    "位运算按位进行：OR 取 1 只要有一位为 1；AND 全 1 才为 1；XOR 两位不同才为 1"
  ],
  items: [
    {
      no: 1,
      type: "命题判定",
      q: "Which of these sentences are propositions? What are the truth values of those that are propositions?",
      parts: [
        { k: "a", q: "Boston is the capital of Massachusetts.", mode: "tf", ans: ["true"], ref: "This is a proposition and it is true. Boston is the capital of Massachusetts.", cn: "陈述句且为真。" },
        { k: "b", q: "Miami is the capital of Florida.", mode: "tf", ans: ["false"], ref: "This is a proposition but it is false. The capital of Florida is Tallahassee, not Miami.", cn: "是命题，但为假（佛州首府是塔拉哈西）。" },
        { k: "c", q: "2 + 3 = 5.", mode: "tf", ans: ["true"], ref: "This is a proposition and it is true, since 2 + 3 = 5.", cn: "真命题。" },
        { k: "d", q: "5 + 7 = 10.", mode: "tf", ans: ["false"], ref: "This is a proposition but it is false, since 5 + 7 = 12, not 10.", cn: "是命题但为假。" },
        { k: "e", q: "x + 2 = 11.", mode: "short", ans: ["not a proposition", "it is not a proposition", "not a proposition (no truth value)"], ref: "Not a proposition: it contains a free variable x, so its truth value depends on the value of x and it is not a declarative statement with a definite truth value." },
        { k: "f", q: "Answer this question.", mode: "short", ans: ["not a proposition", "it is not a proposition", "not a proposition (it is a command)"], ref: "Not a proposition: it is a command (an imperative sentence), not a declarative sentence that can be true or false." }
      ]
    },
    {
      no: 2,
      type: "命题判定",
      q: "Which of these are propositions? What are the truth values of those that are propositions?",
      parts: [
        { k: "a", q: "Do not pass go.", mode: "short", ans: ["not a proposition", "it is not a proposition"], ref: "This is not a proposition; it is a command." },
        { k: "b", q: "What time is it?", mode: "short", ans: ["not a proposition", "it is not a proposition"], ref: "This is not a proposition; it is a question." },
        { k: "c", q: "There are no black flies in Maine.", mode: "tf", ans: ["false"], ref: "This is a proposition that is false, as anyone who has been to Maine knows." },
        { k: "d", q: "4 + x = 5.", mode: "short", ans: ["not a proposition", "it is not a proposition"], ref: "This is not a proposition; its truth value depends on the value of x." },
        { k: "e", q: "The moon is made of green cheese.", mode: "tf", ans: ["false"], ref: "This is a proposition that is false." },
        { k: "f", q: "2ⁿ ≥ 100.", mode: "short", ans: ["not a proposition", "it is not a proposition"], ref: "This is not a proposition; its truth value depends on the value of n." }
      ]
    },
    {
      no: 3,
      type: "否定",
      q: "What is the negation of each of these propositions?",
      parts: [
        { k: "a", q: "Linda is younger than Sanjay.", mode: "short", ans: ["Linda is not younger than Sanjay.", "Linda is not younger than Sanjay"], ref: "Linda is not younger than Sanjay." },
        { k: "b", q: "Mei makes more money than Isabella.", mode: "short", ans: ["Mei does not make more money than Isabella.", "Mei does not make more money than Isabella"], ref: "Mei does not make more money than Isabella." },
        { k: "c", q: "Moshe is taller than Monica.", mode: "short", ans: ["Moshe is not taller than Monica.", "Moshe is not taller than Monica"], ref: "Moshe is not taller than Monica." },
        { k: "d", q: "Abby is richer than Ricardo.", mode: "short", ans: ["Abby is not richer than Ricardo.", "Abby is not richer than Ricardo"], ref: "Abby is not richer than Ricardo." }
      ]
    },
    {
      no: 4,
      type: "否定",
      q: "What is the negation of each of these propositions?",
      parts: [
        { k: "a", q: "Janice has more Facebook friends than Juan.", mode: "short", ans: ["Janice does not have more Facebook friends than Juan.", "Janice does not have more Facebook friends than Juan"], ref: "Janice does not have more Facebook friends than Juan." },
        { k: "b", q: "Quincy is smarter than Venkat.", mode: "short", ans: ["Quincy is not smarter than Venkat.", "Quincy is not smarter than Venkat"], ref: "Quincy is not smarter than Venkat." },
        { k: "c", q: "Zelda drives more miles to school than Paola.", mode: "short", ans: ["Zelda does not drive more miles to school than Paola.", "Zelda does not drive more miles to school than Paola"], ref: "Zelda does not drive more miles to school than Paola." },
        { k: "d", q: "Briana sleeps longer than Gloria.", mode: "short", ans: ["Briana does not sleep longer than Gloria.", "Briana does not sleep longer than Gloria"], ref: "Briana does not sleep longer than Gloria." }
      ]
    },
    {
      no: 5,
      type: "否定",
      q: "What is the negation of each of these propositions?",
      parts: [
        { k: "a", q: "Mei has an MP3 player.", mode: "short", ans: ["Mei does not have an MP3 player.", "Mei does not have an MP3 player"], ref: "Mei does not have an MP3 player." },
        { k: "b", q: "There is no pollution in New Jersey.", mode: "short", ans: ["There is pollution in New Jersey.", "There is pollution in New Jersey"], ref: "There is pollution in New Jersey. (Negating the negative gives an affirmative statement.)" },
        { k: "c", q: "2 + 1 = 3.", mode: "short", ans: ["2 + 1 ≠ 3", "2+1≠3"], ref: "2 + 1 ≠ 3. (The negation of an equality is the corresponding inequality.)" },
        { k: "d", q: "The summer in Maine is hot and sunny.", mode: "short", ans: ["The summer in Maine is not hot and sunny.", "The summer in Maine is not hot and sunny", "It is not the case that the summer in Maine is hot and sunny"], ref: "The summer in Maine is not hot and sunny. (Negating a conjunction negates the whole statement; by De Morgan it is also equivalent to: the summer in Maine is not hot or it is not sunny.)" }
      ]
    },
    {
      no: 6,
      type: "否定",
      q: "What is the negation of each of these propositions?",
      parts: [
        { k: "a", q: "Jennifer and Teja are friends.", mode: "short", ans: ["Jennifer and Teja are not friends.", "Jennifer and Teja are not friends"], ref: "Jennifer and Teja are not friends." },
        { k: "b", q: "There are 13 items in a baker's dozen.", mode: "short", ans: ["There are not 13 items in a baker's dozen.", "The number of items in a baker's dozen is not equal to 13."], ref: "There are not 13 items in a baker's dozen. (Alternatively: The number of items in a baker's dozen is not equal to 13.)" },
        { k: "c", q: "Abby sent more than 100 text messages yesterday.", mode: "short", ans: ["Abby sent fewer than 101 text messages yesterday.", "Abby sent at most 100 text messages yesterday."], ref: "Abby sent fewer than 101 text messages yesterday. (Alternatively, Abby sent at most 100 text messages yesterday.)" },
        { k: "d", q: "121 is a perfect square.", mode: "short", ans: ["121 is not a perfect square.", "121 is not a perfect square"], ref: "121 is not a perfect square." }
      ]
    },
    {
      no: 7,
      type: "否定",
      q: "What is the negation of each of these propositions?",
      parts: [
        { k: "a", q: "Steve has more than 100 GB free disk space on his laptop.", mode: "short", ans: ["Steve does not have more than 100 GB free disk space on his laptop.", "Steve has at most 100 GB free disk space on his laptop."], ref: "Steve does not have more than 100 GB free disk space on his laptop. (Equivalently, Steve has at most 100 GB free disk space on his laptop.)" },
        { k: "b", q: "Zach blocks e-mails and texts from Jennifer.", mode: "short", ans: ["Zach does not block e-mails and texts from Jennifer.", "Zach does not block both e-mails and texts from Jennifer."], ref: "Zach does not block e-mails and texts from Jennifer. (Formally: ¬(B ∧ T); by De Morgan it is equivalent to Zach does not block e-mails or Zach does not block texts from Jennifer.)" },
        { k: "c", q: "7 ⋅ 11 ⋅ 13 = 999.", mode: "short", ans: ["7 ⋅ 11 ⋅ 13 ≠ 999", "7 · 11 · 13 ≠ 999"], ref: "7 ⋅ 11 ⋅ 13 ≠ 999. (The negation of an equality is the corresponding inequality.)" },
        { k: "d", q: "Diane rode her bicycle 100 miles on Sunday.", mode: "short", ans: ["Diane did not ride her bicycle 100 miles on Sunday.", "Diane did not ride her bicycle 100 miles on Sunday"], ref: "Diane did not ride her bicycle 100 miles on Sunday." }
      ]
    },
    {
      no: 8,
      type: "真值判断",
      q: "Suppose that Smartphone A has 256 MB RAM and 32 GB ROM, and the resolution of its camera is 8 MP; Smartphone B has 288 MB RAM and 64 GB ROM, and the resolution of its camera is 4 MP; and Smartphone C has 128 MB RAM and 32 GB ROM, and the resolution of its camera is 5 MP. Determine the truth value of each of these propositions.",
      parts: [
        { k: "a", q: "Smartphone B has the most RAM of these three smartphones.", mode: "tf", ans: ["true"], ref: "True, because 288 > 256 and 288 > 128." },
        { k: "b", q: "Smartphone C has more ROM or a higher resolution camera than Smartphone B.", mode: "tf", ans: ["true"], ref: "True, because C has 5 MP resolution compared to B's 4 MP resolution. Note that only one of these conditions needs to be met because of the word or." },
        { k: "c", q: "Smartphone B has more RAM, more ROM, and a higher resolution camera than Smartphone A.", mode: "tf", ans: ["false"], ref: "False, because its resolution is not higher (all of the statements would have to be true for the conjunction to be true)." },
        { k: "d", q: "If Smartphone B has more RAM and more ROM than Smartphone C, then it also has a higher resolution camera.", mode: "tf", ans: ["false"], ref: "False, because the hypothesis of this conditional statement is true (288 > 128 and 64 > 32) and the conclusion is false (4 MP is not higher than 5 MP)." },
        { k: "e", q: "Smartphone A has more RAM than Smartphone B if and only if Smartphone B has more RAM than Smartphone A.", mode: "tf", ans: ["false"], ref: "False, because the first part of this biconditional statement is false (256 < 288) and the second part is true." }
      ]
    },
    {
      no: 9,
      type: "真值判断",
      q: "Suppose that during the most recent fiscal year, the annual revenue of Acme Computer was 138 billion dollars and its net profit was 8 billion dollars, the annual revenue of Nadir Software was 87 billion dollars and its net profit was 5 billion dollars, and the annual revenue of Quixote Media was 111 billion dollars and its net profit was 13 billion dollars. Determine the truth value of each of these propositions for the most recent fiscal year.",
      parts: [
        { k: "a", q: "Quixote Media had the largest annual revenue.", mode: "tf", ans: ["false"], ref: "False: Acme Computer had the largest annual revenue (138 billion > 111 billion > 87 billion).", cn: "Acme 138 > Quixote 111。" },
        { k: "b", q: "Nadir Software had the lowest net profit and Acme Computer had the largest annual revenue.", mode: "tf", ans: ["true"], ref: "True: Nadir's net profit of 5 billion is the lowest (5 < 8 < 13) and Acme's revenue of 138 billion is the largest (138 > 111 > 87).", cn: "两个合取项都真。" },
        { k: "c", q: "Acme Computer had the largest net profit or Quixote Media had the largest net profit.", mode: "tf", ans: ["true"], ref: "True: Quixote Media had the largest net profit (13 billion > 8 billion > 5 billion), so the disjunction is true even though Acme did not have the largest net profit.", cn: "析取只需一项为真。" },
        { k: "d", q: "If Quixote Media had the smallest net profit, then Acme Computer had the largest annual revenue.", mode: "tf", ans: ["true"], ref: "True: the hypothesis is false (Quixote had the largest net profit, 13 billion), and a conditional with a false hypothesis is always true.", cn: "前件为假 → 蕴涵式为真。" },
        { k: "e", q: "Nadir Software had the smallest net profit if and only if Acme Computer had the largest annual revenue.", mode: "tf", ans: ["true"], ref: "True: both sides of the biconditional are true (Nadir had the lowest net profit, 5 billion; Acme had the largest revenue, 138 billion), so T ↔ T is true.", cn: "T ↔ T 为真。" }
      ]
    },
    {
      no: 10,
      type: "英文表述",
      q: "Let p and q be the propositions p: I bought a lottery ticket this week. q: I won the million dollar jackpot. Express each of these propositions as an English sentence.",
      parts: [
        { k: "a", q: "¬p", mode: "self", ref: "I did not buy a lottery ticket this week." },
        { k: "b", q: "p ∨ q", mode: "self", ref: "Either I bought a lottery ticket this week, or [in the inclusive sense] I won the million dollar jackpot on Friday." },
        { k: "c", q: "p → q", mode: "self", ref: "If I bought a lottery ticket this week, then I won the million dollar jackpot on Friday." },
        { k: "d", q: "p ∧ q", mode: "self", ref: "I bought a lottery ticket this week, and I won the million dollar jackpot on Friday." },
        { k: "e", q: "p ↔ q", mode: "self", ref: "I bought a lottery ticket this week if and only if I won the million dollar jackpot on Friday." },
        { k: "f", q: "¬p → ¬q", mode: "self", ref: "If I did not buy a lottery ticket this week, then I did not win the million dollar jackpot on Friday." },
        { k: "g", q: "¬p ∧ ¬q", mode: "self", ref: "I did not buy a lottery ticket this week, and I did not win the million dollar jackpot on Friday." },
        { k: "h", q: "¬p ∨ (p ∧ q)", mode: "self", ref: "Either I did not buy a lottery ticket this week, or else I did buy one and won the million dollar jackpot on Friday." }
      ]
    },
    {
      no: 11,
      type: "英文表述",
      q: "Let p and q be the propositions Swimming at the New Jersey shore is allowed and Sharks have been spotted near the shore, respectively. Express each of these compound propositions as an English sentence.",
      parts: [
        { k: "a", q: "¬q", mode: "self", ref: "Sharks have not been spotted near the shore." },
        { k: "b", q: "p ∧ q", mode: "self", ref: "Swimming at the New Jersey shore is allowed and sharks have been spotted near the shore." },
        { k: "c", q: "¬p ∨ q", mode: "self", ref: "Either swimming at the New Jersey shore is not allowed, or sharks have been spotted near the shore." },
        { k: "d", q: "p → ¬q", mode: "self", ref: "If swimming at the New Jersey shore is allowed, then sharks have not been spotted near the shore." },
        { k: "e", q: "¬q → p", mode: "self", ref: "If sharks have not been spotted near the shore, then swimming at the New Jersey shore is allowed." },
        { k: "f", q: "¬p → ¬q", mode: "self", ref: "If swimming at the New Jersey shore is not allowed, then sharks have not been spotted near the shore." },
        { k: "g", q: "p ↔ ¬q", mode: "self", ref: "Swimming at the New Jersey shore is allowed if and only if sharks have not been spotted near the shore." },
        { k: "h", q: "¬p ∧ (p ∨ ¬q)", mode: "self", ref: "Swimming at the New Jersey shore is not allowed and (either swimming is allowed or sharks have not been spotted near the shore)." }
      ]
    },
    {
      no: 12,
      type: "英文表述",
      q: "Let p and q be the propositions The election is decided and The votes have been counted, respectively. Express each of these compound propositions as an English sentence.",
      parts: [
        { k: "a", q: "¬p", mode: "self", ref: "The election is not decided." },
        { k: "b", q: "p ∨ q", mode: "self", ref: "The election is decided, or the votes have been counted." },
        { k: "c", q: "¬p ∧ q", mode: "self", ref: "The election is not decided, and the votes have been counted." },
        { k: "d", q: "q → p", mode: "self", ref: "If the votes have been counted, then the election is decided." },
        { k: "e", q: "¬q → ¬p", mode: "self", ref: "If the votes have not been counted, then the election is not decided." },
        { k: "f", q: "¬p → ¬q", mode: "self", ref: "If the election is not decided, then the votes have not been counted." },
        { k: "g", q: "p ↔ q", mode: "self", ref: "The election is decided if and only if the votes have been counted." },
        { k: "h", q: "¬q ∨ (¬p ∧ q)", mode: "self", ref: "Either the votes have not been counted, or else the election is not decided and the votes have been counted. Note that we were able to incorporate the parentheses by using the words either and else." }
      ]
    },
    {
      no: 13,
      type: "形式化",
      q: "Let p and q be the propositions p: It is below freezing. q: It is snowing. Write these propositions using p and q and logical connectives (including negations).",
      parts: [
        { k: "a", q: "It is below freezing and snowing.", mode: "short", ans: ["p ∧ q"], ref: "p ∧ q." },
        { k: "b", q: "It is below freezing but not snowing.", mode: "short", ans: ["p ∧ ¬q"], ref: "p ∧ ¬q." },
        { k: "c", q: "It is not below freezing and it is not snowing.", mode: "short", ans: ["¬p ∧ ¬q"], ref: "¬p ∧ ¬q." },
        { k: "d", q: "It is either snowing or below freezing (or both).", mode: "short", ans: ["p ∨ q"], ref: "p ∨ q. (The words either ... or both signal an inclusive or.)" },
        { k: "e", q: "If it is below freezing, it is also snowing.", mode: "short", ans: ["p → q"], ref: "p → q." },
        { k: "f", q: "Either it is below freezing or it is snowing, but it is not snowing if it is below freezing.", mode: "short", ans: ["(p ∨ q) ∧ (p → ¬q)"], ref: "(p ∨ q) ∧ (p → ¬q). The first conjunct gives either/or, the second gives not snowing if below freezing." },
        { k: "g", q: "That it is below freezing is necessary and sufficient for it to be snowing.", mode: "short", ans: ["p ↔ q"], ref: "p ↔ q. Necessary and sufficient means if and only if." }
      ]
    },
    {
      no: 14,
      type: "英文表述",
      q: "Let p, q, and r be the propositions p: You have the flu. q: You miss the final examination. r: You pass the course. Express each of these propositions as an English sentence.",
      parts: [
        { k: "a", q: "p → q", mode: "self", ref: "If you have the flu, then you miss the final exam." },
        { k: "b", q: "¬q ↔ r", mode: "self", ref: "You do not miss the final exam if and only if you pass the course." },
        { k: "c", q: "q → ¬r", mode: "self", ref: "If you miss the final exam, then you do not pass the course." },
        { k: "d", q: "p ∨ q ∨ r", mode: "self", ref: "You have the flu, or miss the final exam, or pass the course." },
        { k: "e", q: "(p → ¬r) ∨ (q → ¬r)", mode: "self", ref: "It is either the case that if you have the flu then you do not pass the course, or the case that if you miss the final exam then you do not pass the course (or both, it is understood)." },
        { k: "f", q: "(p ∧ q) ∨ (¬q ∧ r)", mode: "self", ref: "Either you have the flu and miss the final exam, or you do not miss the final exam and do pass the course." }
      ]
    },
    {
      no: 15,
      type: "形式化",
      q: "Let p and q be the propositions p: You drive over 65 miles per hour. q: You get a speeding ticket. Write these propositions using p and q and logical connectives (including negations).",
      parts: [
        { k: "a", q: "You do not drive over 65 miles per hour.", mode: "short", ans: ["¬p"], ref: "¬p." },
        { k: "b", q: "You drive over 65 miles per hour, but you do not get a speeding ticket.", mode: "short", ans: ["p ∧ ¬q"], ref: "p ∧ ¬q." },
        { k: "c", q: "You will get a speeding ticket if you drive over 65 miles per hour.", mode: "short", ans: ["p → q"], ref: "p → q." },
        { k: "d", q: "If you do not drive over 65 miles per hour, then you will not get a speeding ticket.", mode: "short", ans: ["¬p → ¬q"], ref: "¬p → ¬q." },
        { k: "e", q: "Driving over 65 miles per hour is sufficient for getting a speeding ticket.", mode: "short", ans: ["p → q"], ref: "p → q. (The sufficient condition goes in the hypothesis.)" },
        { k: "f", q: "You get a speeding ticket, but you do not drive over 65 miles per hour.", mode: "short", ans: ["q ∧ ¬p"], ref: "q ∧ ¬p." },
        { k: "g", q: "Whenever you get a speeding ticket, you are driving over 65 miles per hour.", mode: "short", ans: ["q → p"], ref: "q → p. (Whenever means if.)" }
      ]
    },
    {
      no: 16,
      type: "形式化",
      q: "Let p, q, and r be the propositions p: You get an A on the final exam. q: You do every exercise in this book. r: You get an A in this class. Write these propositions using p, q, and r and logical connectives (including negations).",
      parts: [
        { k: "a", q: "You get an A in this class, but you do not do every exercise in this book.", mode: "short", ans: ["r ∧ ¬q"], ref: "r ∧ ¬q." },
        { k: "b", q: "You get an A on the final, you do every exercise in this book, and you get an A in this class.", mode: "short", ans: ["p ∧ q ∧ r"], ref: "p ∧ q ∧ r." },
        { k: "c", q: "To get an A in this class, it is necessary for you to get an A on the final.", mode: "short", ans: ["r → p"], ref: "r → p. (The necessary condition is the conclusion.)" },
        { k: "d", q: "You get an A on the final, but you don't do every exercise in this book; nevertheless, you get an A in this class.", mode: "short", ans: ["p ∧ ¬q ∧ r"], ref: "p ∧ ¬q ∧ r." },
        { k: "e", q: "Getting an A on the final and doing every exercise in this book is sufficient for getting an A in this class.", mode: "short", ans: ["(p ∧ q) → r"], ref: "(p ∧ q) → r." },
        { k: "f", q: "You will get an A in this class if and only if you either do every exercise in this book or you get an A on the final.", mode: "short", ans: ["r ↔ (q ∨ p)"], ref: "r ↔ (q ∨ p)." }
      ]
    },
    {
      no: 17,
      type: "形式化",
      q: "Let p, q, and r be the propositions p: Grizzly bears have been seen in the area. q: Hiking is safe on the trail. r: Berries are ripe along the trail. Write these propositions using p, q, and r and logical connectives (including negations).",
      parts: [
        { k: "a", q: "Berries are ripe along the trail, but grizzly bears have not been seen in the area.", mode: "short", ans: ["r ∧ ¬p"], ref: "r ∧ ¬p." },
        { k: "b", q: "Grizzly bears have not been seen in the area and hiking on the trail is safe, but berries are ripe along the trail.", mode: "short", ans: ["¬p ∧ q ∧ r"], ref: "¬p ∧ q ∧ r." },
        { k: "c", q: "If berries are ripe along the trail, hiking is safe if and only if grizzly bears have not been seen in the area.", mode: "short", ans: ["r → (q ↔ ¬p)"], ref: "r → (q ↔ ¬p)." },
        { k: "d", q: "It is not safe to hike on the trail, but grizzly bears have not been seen in the area and the berries along the trail are ripe.", mode: "short", ans: ["¬q ∧ ¬p ∧ r"], ref: "¬q ∧ ¬p ∧ r." },
        { k: "e", q: "For hiking on the trail to be safe, it is necessary but not sufficient that berries not be ripe along the trail and for grizzly bears not to have been seen in the area.", mode: "self", ref: "Hiking being safe (q) is necessary but not sufficient for the condition berries not ripe and bears not seen (¬r ∧ ¬p). Necessary means q → (¬r ∧ ¬p); not sufficient means that (¬r ∧ ¬p) does not imply q, i.e. ¬((¬r ∧ ¬p) → q), equivalently (¬r ∧ ¬p) ∧ ¬q is a possible case. So the full statement is: q → (¬r ∧ ¬p) together with the fact that (¬r ∧ ¬p) does not guarantee q.", cn: "必要条件放在结论侧；「不充分」表示该条件不能反推 q。" },
        { k: "f", q: "Hiking is not safe on the trail whenever grizzly bears have been seen in the area and berries are ripe along the trail.", mode: "short", ans: ["(p ∧ r) → ¬q"], ref: "(p ∧ r) → ¬q." }
      ]
    },
    {
      no: 18,
      type: "真值判断",
      q: "Determine whether these biconditionals are true or false.",
      parts: [
        { k: "a", q: "2 + 2 = 4 if and only if 1 + 1 = 2.", mode: "tf", ans: ["true"], ref: "This is T ↔ T, which is true." },
        { k: "b", q: "1 + 1 = 2 if and only if 2 + 3 = 4.", mode: "tf", ans: ["false"], ref: "This is T ↔ F, which is false." },
        { k: "c", q: "1 + 1 = 3 if and only if monkeys can fly.", mode: "tf", ans: ["true"], ref: "This is F ↔ F, which is true." },
        { k: "d", q: "0 > 1 if and only if 2 > 1.", mode: "tf", ans: ["false"], ref: "This is F ↔ T, which is false." }
      ]
    },
    {
      no: 19,
      type: "真值判断",
      q: "Determine whether each of these conditional statements is true or false.",
      parts: [
        { k: "a", q: "If 1 + 1 = 2, then 2 + 2 = 5.", mode: "tf", ans: ["false"], ref: "This is T → F, which is false.", cn: "前件真、结论假 ⇒ 蕴涵式为假。" },
        { k: "b", q: "If 1 + 1 = 3, then 2 + 2 = 4.", mode: "tf", ans: ["true"], ref: "This is F → T, which is true.", cn: "前件为假 ⇒ 蕴涵式为真。" },
        { k: "c", q: "If 1 + 1 = 3, then 2 + 2 = 5.", mode: "tf", ans: ["true"], ref: "This is F → F, which is true." },
        { k: "d", q: "If monkeys can fly, then 1 + 1 = 3.", mode: "tf", ans: ["true"], ref: "This is F → F, which is true." }
      ]
    },
    {
      no: 20,
      type: "真值判断",
      q: "Determine whether each of these conditional statements is true or false.",
      parts: [
        { k: "a", q: "If 1 + 1 = 3, then unicorns exist.", mode: "tf", ans: ["true"], ref: "This is F → F, which is true." },
        { k: "b", q: "If 1 + 1 = 3, then dogs can fly.", mode: "tf", ans: ["true"], ref: "This is F → F, which is true." },
        { k: "c", q: "If 1 + 1 = 2, then dogs can fly.", mode: "tf", ans: ["false"], ref: "This is T → F, which is false." },
        { k: "d", q: "If 2 + 2 = 4, then 1 + 2 = 3.", mode: "tf", ans: ["true"], ref: "This is T → T, which is true." }
      ]
    },
    {
      no: 21,
      type: "相容或与排斥或",
      q: "For each of these sentences, determine whether an inclusive or, or an exclusive or, is intended. Explain your answer.",
      parts: [
        { k: "a", q: "Coffee or tea comes with dinner.", mode: "self", ref: "The sentence is ambiguous between the two readings: under an inclusive or it is true whenever coffee comes with dinner, whenever tea comes, and also when both come; under an exclusive or it is true only when exactly one of them comes. In the usual restaurant setting the intended meaning is the exclusive or (the guest receives one beverage, not both), but the inclusive reading cannot be ruled out.", cn: "语境决定；无法唯一判定，故用自评。" },
        { k: "b", q: "A password must have at least three digits or be at least eight characters long.", mode: "choice", options: ["inclusive or", "exclusive or"], ans: ["inclusive or"], ref: "Inclusive or: a password can satisfy both conditions at the same time (for example a password with 10 digits and 12 characters), so both alternatives are allowed simultaneously." },
        { k: "c", q: "The prerequisite for the course is a course in number theory or a course in cryptography.", mode: "choice", options: ["inclusive or", "exclusive or"], ans: ["inclusive or"], ref: "Inclusive or: a student may have taken both number theory and cryptography; the requirement is satisfied as soon as at least one of the two courses has been taken." },
        { k: "d", q: "You can pay using U.S. dollars or euros.", mode: "choice", options: ["inclusive or", "exclusive or"], ans: ["exclusive or"], ref: "Exclusive or: a single payment is made in one currency, so it is not possible to pay in both U.S. dollars and euros at the same time." }
      ]
    },
    {
      no: 22,
      type: "相容或与排斥或",
      q: "For each of these sentences, determine whether an inclusive or, or an exclusive or, is intended. Explain your answer.",
      parts: [
        { k: "a", q: "Experience with C++ or Java is required.", mode: "choice", options: ["inclusive or", "exclusive or"], ans: ["inclusive or"], ref: "The employer making this request would be happy if the applicant knew both of these languages, so this is clearly an inclusive or." },
        { k: "b", q: "Lunch includes soup or salad.", mode: "choice", options: ["inclusive or", "exclusive or"], ans: ["exclusive or"], ref: "The restaurant would probably charge extra if the diner wanted both of these items, so this is an exclusive or." },
        { k: "c", q: "To enter the country you need a passport or a voter registration card.", mode: "choice", options: ["inclusive or", "exclusive or"], ans: ["inclusive or"], ref: "If a person happened to have both forms of identification, so much the better, so this is an inclusive or." },
        { k: "d", q: "Publish or perish.", mode: "choice", options: ["inclusive or", "exclusive or"], ans: ["inclusive or"], ref: "This could be argued either way, but the inclusive interpretation seems more appropriate. This phrase means that faculty members who do not publish papers in research journals are likely to be fired from their jobs during the probationary period. On the other hand, it may happen that they will be fired even if they do publish (for example if their teaching is poor)." }
      ]
    },
    {
      no: 23,
      type: "语义辨析",
      q: "For each of these sentences, state what the sentence means if the logical connective or is an inclusive or (that is, a disjunction) versus an exclusive or. Which of these meanings of or do you think is intended?",
      parts: [
        { k: "a", q: "To take discrete mathematics, you must have taken calculus or a course in computer science.", mode: "self", ref: "Inclusive or: to take discrete mathematics you must have taken calculus, or you must have taken a course in computer science, or both. Exclusive or: you must have taken exactly one of the two, never both. The intended meaning is the inclusive or: knowing both subjects certainly satisfies the requirement." },
        { k: "b", q: "When you buy a new car from Acme Motor Company, you get $2000 back in cash or a 2% car loan.", mode: "self", ref: "Inclusive or: you receive the cash rebate, or the 2% loan, or possibly both. Exclusive or: you receive exactly one of the two offers. The intended meaning is the exclusive or, since the two offers are alternatives." },
        { k: "c", q: "Dinner for two includes two items from column A or three items from column B.", mode: "self", ref: "Inclusive or: the dinner includes two items from column A, or three items from column B, or possibly both. Exclusive or: the dinner includes two items from column A, or three items from column B, but not both. The intended meaning is the exclusive or, since a two-item and a three-item choice are alternatives." },
        { k: "d", q: "School is closed if more than two feet of snow falls or if the wind chill is below −100 °F.", mode: "self", ref: "Inclusive or: school is closed if more than two feet of snow falls, or if the wind chill is below −100 °F, or if both conditions hold. Exclusive or: school is closed if exactly one of the two conditions holds. The intended meaning is the inclusive or: either condition alone is enough to close school, and both together certainly close it." }
      ]
    },
    {
      no: 24,
      type: "条件句改写",
      q: "Write each of these statements in the form if p, then q in English. [Hint: Refer to the list of common ways to express conditional statements provided in this section.]",
      parts: [
        { k: "a", q: "It is necessary to wash the boss's car to get promoted.", mode: "self", ref: "The necessary condition is the conclusion: If you get promoted, then you wash the boss's car." },
        { k: "b", q: "Winds from the south imply a spring thaw.", mode: "self", ref: "If the winds are from the south, then there will be a spring thaw." },
        { k: "c", q: "A sufficient condition for the warranty to be good is that you bought the computer less than a year ago.", mode: "self", ref: "The sufficient condition is the hypothesis: If you bought the computer less than a year ago, then the warranty is good." },
        { k: "d", q: "Willy gets caught whenever he cheats.", mode: "self", ref: "If Willy cheats, then he gets caught." },
        { k: "e", q: "You can access the website only if you pay a subscription fee.", mode: "self", ref: "The only if condition is the conclusion: If you access the website, then you must pay a subscription fee." },
        { k: "f", q: "Getting elected follows from knowing the right people.", mode: "self", ref: "If you know the right people, then you will be elected." },
        { k: "g", q: "Carol gets seasick whenever she is on a boat.", mode: "self", ref: "If Carol is on a boat, then she gets seasick." }
      ]
    },
    {
      no: 25,
      type: "条件句改写",
      q: "Write each of these statements in the form if p, then q in English. [Hint: Refer to the list of common ways to express conditional statements.]",
      parts: [
        { k: "a", q: "It snows whenever the wind blows from the northeast.", mode: "self", ref: "If the wind blows from the northeast, then it snows." },
        { k: "b", q: "The apple trees will bloom if it stays warm for a week.", mode: "self", ref: "If it stays warm for a week, then the apple trees will bloom." },
        { k: "c", q: "That the Pistons win the championship implies that they beat the Lakers.", mode: "self", ref: "If the Pistons win the championship, then they beat the Lakers." },
        { k: "d", q: "It is necessary to walk eight miles to get to the top of Long's Peak.", mode: "self", ref: "The necessary condition is the conclusion: If you get to the top of Long's Peak, then you walked eight miles." },
        { k: "e", q: "To get tenure as a professor, it is sufficient to be world famous.", mode: "self", ref: "The sufficient condition is the hypothesis: If you are world famous, then you get tenure as a professor." },
        { k: "f", q: "If you drive more than 400 miles, you will need to buy gasoline.", mode: "self", ref: "Already in the required form: If you drive more than 400 miles, then you will need to buy gasoline." },
        { k: "g", q: "Your guarantee is good only if you bought your CD player less than 90 days ago.", mode: "self", ref: "The only if condition is the conclusion: If your guarantee is good, then you bought your CD player less than 90 days ago." },
        { k: "h", q: "Jan will go swimming unless the water is too cold.", mode: "self", ref: "Unless means if not: If the water is not too cold, then Jan will go swimming." },
        { k: "i", q: "We will have a future, provided that people believe in science.", mode: "self", ref: "Provided that means if: If people believe in science, then we will have a future." }
      ]
    },
    {
      no: 26,
      type: "条件句改写",
      q: "Write each of these statements in the form if p, then q in English. [Hint: Refer to the list of common ways to express conditional statements provided in this section.]",
      parts: [
        { k: "a", q: "I will remember to send you the address only if you send me an e-mail message.", mode: "self", ref: "If I am to remember to send you the address, then you will have to send me an e-mail message. (This has been slightly reworded so that the tenses make sense.)" },
        { k: "b", q: "To be a citizen of this country, it is sufficient that you were born in the United States.", mode: "self", ref: "If you were born in the United States, then you are a citizen of this country." },
        { k: "c", q: "If you keep your textbook, it will be a useful reference in your future courses.", mode: "self", ref: "If you keep your textbook, then it will be a useful reference in your future courses. (The word then is understood in English, even if omitted.)" },
        { k: "d", q: "The Red Wings will win the Stanley Cup if their goalie plays well.", mode: "self", ref: "If their goaltender plays well, then the Red Wings will win the Stanley Cup." },
        { k: "e", q: "That you get the job implies that you had the best credentials.", mode: "self", ref: "If you get the job, then you had the best credentials." },
        { k: "f", q: "The beach erodes whenever there is a storm.", mode: "self", ref: "If there is a storm, then the beach erodes." },
        { k: "g", q: "It is necessary to have a valid password to log on to the server.", mode: "self", ref: "If you log on to the server, then you have a valid password." },
        { k: "h", q: "You will reach the summit unless you begin your climb too late.", mode: "self", ref: "If you do not begin your climb too late, then you will reach the summit." },
        { k: "i", q: "You will get a free ice cream cone, provided that you are among the first 100 customers tomorrow.", mode: "self", ref: "If you are among the first 100 customers tomorrow, then you will get a free ice cream cone." }
      ]
    },
    {
      no: 27,
      type: "双条件句改写",
      q: "Write each of these propositions in the form p if and only if q in English.",
      parts: [
        { k: "a", q: "If it is hot outside you buy an ice cream cone, and if you buy an ice cream cone it is hot outside.", mode: "self", ref: "You buy an ice cream cone if and only if it is hot outside." },
        { k: "b", q: "For you to win the contest it is necessary and sufficient that you have the only winning ticket.", mode: "self", ref: "You win the contest if and only if you have the only winning ticket." },
        { k: "c", q: "You get promoted only if you have connections, and you have connections only if you get promoted.", mode: "self", ref: "You get promoted if and only if you have connections." },
        { k: "d", q: "If you watch television your mind will decay, and conversely.", mode: "self", ref: "Your mind will decay if and only if you watch television." },
        { k: "e", q: "The trains run late on exactly those days when I take it.", mode: "self", ref: "The trains run late if and only if I take the train." }
      ]
    },
    {
      no: 28,
      type: "双条件句改写",
      q: "Write each of these propositions in the form p if and only if q in English.",
      parts: [
        { k: "a", q: "For you to get an A in this course, it is necessary and sufficient that you learn how to solve discrete mathematics problems.", mode: "self", ref: "You will get an A in this course if and only if you learn how to solve discrete mathematics problems." },
        { k: "b", q: "If you read the newspaper every day, you will be informed, and conversely.", mode: "self", ref: "You will be informed if and only if you read the newspaper every day. (It sounds better in this order; it would be logically equivalent to state this as You read the newspaper every day if and only if you will be informed.)" },
        { k: "c", q: "It rains if it is a weekend day, and it is a weekend day if it rains.", mode: "self", ref: "It rains if and only if it is a weekend day." },
        { k: "d", q: "You can see the wizard only if the wizard is not in, and the wizard is not in only if you can see him.", mode: "self", ref: "You can see the wizard if and only if he is not in." },
        { k: "e", q: "My airplane flight is late exactly when I have to catch a connecting flight.", mode: "self", ref: "My airplane flight is late if and only if I have to catch a connecting flight." }
      ]
    },
    {
      no: 29,
      type: "逆否命题",
      q: "State the converse, contrapositive, and inverse of each of these conditional statements.",
      parts: [
        { k: "a", q: "If it snows today, I will ski tomorrow.", mode: "self", ref: "Converse: If I will ski tomorrow, then it snows today. Contrapositive: If I do not ski tomorrow, then it does not snow today. Inverse: If it does not snow today, then I will not ski tomorrow." },
        { k: "b", q: "I come to class whenever there is going to be a quiz.", mode: "self", ref: "Original: If there is going to be a quiz, then I come to class. Converse: If I come to class, then there is going to be a quiz. Contrapositive: If I do not come to class, then there is not going to be a quiz. Inverse: If there is not going to be a quiz, then I do not come to class." },
        { k: "c", q: "A positive integer is a prime only if it has no divisors other than 1 and itself.", mode: "self", ref: "Original: If a positive integer is prime, then it has no divisors other than 1 and itself. Converse: If a positive integer has no divisors other than 1 and itself, then it is prime. Contrapositive: If a positive integer has a divisor other than 1 and itself, then it is not prime. Inverse: If a positive integer is not prime, then it has a divisor other than 1 and itself." }
      ]
    },
    {
      no: 30,
      type: "逆否命题",
      q: "State the converse, contrapositive, and inverse of each of these conditional statements.",
      parts: [
        { k: "a", q: "If it snows tonight, then I will stay at home.", mode: "self", ref: "Converse: If I stay home, then it will snow tonight. Contrapositive: If I do not stay at home, then it will not snow tonight. Inverse: If it does not snow tonight, then I will not stay home." },
        { k: "b", q: "I go to the beach whenever it is a sunny summer day.", mode: "self", ref: "Original: If it is a sunny summer day, then I go to the beach. Converse: Whenever I go to the beach, it is a sunny summer day. Contrapositive: Whenever I do not go to the beach, it is not a sunny summer day. Inverse: Whenever it is not a sunny day, I do not go to the beach." },
        { k: "c", q: "When I stay up late, it is necessary that I sleep until noon.", mode: "self", ref: "Original: If I stay up late, then I sleep until noon. Converse: If I sleep until noon, then I stayed up late. Contrapositive: If I do not sleep until noon, then I did not stay up late. Inverse: If I don't stay up late, then I don't sleep until noon." }
      ]
    },
    {
      no: 31,
      type: "真值表",
      q: "How many rows appear in a truth table for each of these compound propositions?",
      parts: [
        { k: "a", q: "p → ¬p", mode: "short", ans: ["4", "2^2 = 4"], ref: "There are two distinct variables (p), so the truth table has 2² = 4 rows." },
        { k: "b", q: "(p ∨ ¬r) ∧ (q ∨ ¬s)", mode: "short", ans: ["16", "2^4 = 16"], ref: "There are four distinct variables (p, q, r, s), so the truth table has 2⁴ = 16 rows." },
        { k: "c", q: "q ∨ p ∨ ¬s ∨ ¬r ∨ ¬t ∨ u", mode: "short", ans: ["64", "2^6 = 64"], ref: "There are six distinct variables (p, q, r, s, t, u), so the truth table has 2⁶ = 64 rows." },
        { k: "d", q: "(p ∧ r ∧ t) ↔ (q ∧ t)", mode: "short", ans: ["16", "2^4 = 16"], ref: "There are four distinct variables (p, q, r, t), so the truth table has 2⁴ = 16 rows." }
      ]
    },
    {
      no: 32,
      type: "真值表",
      q: "How many rows appear in a truth table for each of these compound propositions?",
      parts: [
        { k: "a", q: "(q → ¬p) ∨ (¬p → ¬q)", mode: "short", ans: ["4", "2^2 = 4"], ref: "A truth table will need 2ⁿ rows if there are n variables; here n = 2, so 2² = 4." },
        { k: "b", q: "(p ∨ ¬t) ∧ (p ∨ ¬s)", mode: "short", ans: ["8", "2^3 = 8"], ref: "A truth table will need 2ⁿ rows if there are n variables; here n = 3 (p, s, t), so 2³ = 8." },
        { k: "c", q: "(p → r) ∨ (¬s → ¬t) ∨ (¬u → v)", mode: "short", ans: ["64", "2^6 = 64"], ref: "A truth table will need 2ⁿ rows if there are n variables; here n = 6 (p, r, s, t, u, v), so 2⁶ = 64." },
        { k: "d", q: "(p ∧ r ∧ s) ∨ (q ∧ t) ∨ (r ∧ ¬t)", mode: "short", ans: ["32", "2^5 = 32"], ref: "A truth table will need 2ⁿ rows if there are n variables; here n = 5 (p, q, r, s, t), so 2⁵ = 32." }
      ]
    },
    {
      no: 33,
      type: "真值表",
      q: "Construct a truth table for each of these compound propositions.",
      parts: [
        { k: "a", q: "p ∧ ¬p", mode: "self", ref: "Truth table: p = T gives T ∧ F = F; p = F gives F ∧ T = F. The column is F, F: the proposition is always false (a contradiction)." },
        { k: "b", q: "p ∨ ¬p", mode: "self", ref: "Truth table: p = T gives T ∨ F = T; p = F gives F ∨ T = T. The column is T, T: the proposition is always true (a tautology)." },
        { k: "c", q: "(p ∨ ¬q) → q", mode: "self", ref: "Truth table with rows (p, q) = (T, T), (T, F), (F, T), (F, F): the column (p ∨ ¬q) → q has values T, F, T, F." },
        { k: "d", q: "(p ∨ q) → (p ∧ q)", mode: "self", ref: "Truth table with rows (p, q) = (T, T), (T, F), (F, T), (F, F): the column (p ∨ q) → (p ∧ q) has values T, F, F, T." },
        { k: "e", q: "(p → q) ↔ (¬q → ¬p)", mode: "self", ref: "Truth table with rows (p, q) = (T, T), (T, F), (F, T), (F, F): the column (p → q) ↔ (¬q → ¬p) has values T, T, T, T, since ¬q → ¬p is the contrapositive of p → q and therefore always has the same truth value." },
        { k: "f", q: "(p → q) → (q → p)", mode: "self", ref: "Truth table with rows (p, q) = (T, T), (T, F), (F, T), (F, F): the column (p → q) → (q → p) has values T, T, F, T." }
      ]
    },
    {
      no: 34,
      type: "真值表",
      q: "Construct a truth table for each of these compound propositions.",
      parts: [
        { k: "a", q: "p → ¬p", mode: "self", ref: "To construct the truth table for a compound proposition, we work from the inside out. Table: p = T, ¬p = F, p → ¬p = F; p = F, ¬p = T, p → ¬p = T. The column has values F, T." },
        { k: "b", q: "p ↔ ¬p", mode: "self", ref: "Table: p = T, ¬p = F, p ↔ ¬p = F; p = F, ¬p = T, p ↔ ¬p = F. The column has values F, F: the proposition is always false." },
        { k: "c", q: "p ⊕ (p ∨ q)", mode: "self", ref: "Table (rows p, q = (T, T), (T, F), (F, T), (F, F)): p ∨ q has values T, T, T, F; p ⊕ (p ∨ q) has values F, F, T, F." },
        { k: "d", q: "(p ∧ q) → (p ∨ q)", mode: "self", ref: "We first construct the truth tables for p ∧ q and for p ∨ q and combine them. Table (rows (T, T), (T, F), (F, T), (F, F)): p ∧ q = T, F, F, F; p ∨ q = T, T, T, F; the column (p ∧ q) → (p ∨ q) has values T, T, T, T." },
        { k: "e", q: "(q → ¬p) ↔ (p ↔ q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): ¬p = F, F, T, T; q → ¬p = F, T, T, T; p ↔ q = T, F, F, T; the column (q → ¬p) ↔ (p ↔ q) has values F, F, F, T." },
        { k: "f", q: "(p ↔ q) ⊕ (p ↔ ¬q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p ↔ q = T, F, F, T; ¬q = F, T, F, T; p ↔ ¬q = F, T, F, T; the column (p ↔ q) ⊕ (p ↔ ¬q) has values T, T, T, T." }
      ]
    },
    {
      no: 35,
      type: "真值表",
      q: "Construct a truth table for each of these compound propositions.",
      parts: [
        { k: "a", q: "(p ∨ q) → (p ⊕ q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p ∨ q = T, T, T, F; p ⊕ q = F, T, T, F; the column (p ∨ q) → (p ⊕ q) has values F, T, T, T." },
        { k: "b", q: "(p ⊕ q) → (p ∧ q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p ⊕ q = F, T, T, F; p ∧ q = T, F, F, F; the column (p ⊕ q) → (p ∧ q) has values T, F, F, T." },
        { k: "c", q: "(p ∨ q) ⊕ (p ∧ q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p ∨ q = T, T, T, F; p ∧ q = T, F, F, F; the column (p ∨ q) ⊕ (p ∧ q) has values F, T, T, F." },
        { k: "d", q: "(p ↔ q) ⊕ (¬p ↔ q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p ↔ q = T, F, F, T; ¬p ↔ q = F, F, T, T; the column (p ↔ q) ⊕ (¬p ↔ q) has values T, F, T, F." },
        { k: "e", q: "(p ↔ q) ⊕ (¬p ↔ ¬r)", mode: "self", ref: "The truth table has 2³ = 8 rows (p, q, r). Since ¬p ↔ ¬r is equivalent to p ↔ r, the proposition is equivalent to (p ↔ q) ⊕ (p ↔ r), which is true exactly when q and r have different truth values and false exactly when q and r have the same truth value (independent of p)." },
        { k: "f", q: "(p ⊕ q) → (p ⊕ ¬q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p ⊕ q = F, T, T, F; p ⊕ ¬q = T, F, F, T; the column (p ⊕ q) → (p ⊕ ¬q) has values T, F, F, T." }
      ]
    },
    {
      no: 36,
      type: "真值表",
      q: "Construct a truth table for each of these compound propositions.",
      parts: [
        { k: "a", q: "p ⊕ p", mode: "self", ref: "Table: p = T gives T ⊕ T = F; p = F gives F ⊕ F = F. The column has values F, F: a bit string is never different from itself." },
        { k: "b", q: "p ⊕ ¬p", mode: "self", ref: "Table: p = T gives T ⊕ F = T; p = F gives F ⊕ T = T. The column has values T, T: p and its negation always differ." },
        { k: "c", q: "p ⊕ ¬q", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): ¬p = F, F, T, T; ¬q = F, T, F, T; the column p ⊕ ¬q has values T, F, F, T." },
        { k: "d", q: "¬p ⊕ ¬q", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): ¬p = F, F, T, T; ¬q = F, T, F, T; the column ¬p ⊕ ¬q has values F, T, T, F." },
        { k: "e", q: "(p ⊕ q) ∨ (p ⊕ ¬q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p ⊕ q = F, T, T, F; p ⊕ ¬q = T, F, F, T; the column (p ⊕ q) ∨ (p ⊕ ¬q) has values T, T, T, T: the first is a tautology." },
        { k: "f", q: "(p ⊕ q) ∧ (p ⊕ ¬q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p ⊕ q = F, T, T, F; p ⊕ ¬q = T, F, F, T; the column (p ⊕ q) ∧ (p ⊕ ¬q) has values F, F, F, F: the second is a contradiction." }
      ]
    },
    {
      no: 37,
      type: "真值表",
      q: "Construct a truth table for each of these compound propositions.",
      parts: [
        { k: "a", q: "p → ¬q", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): the column p → ¬q has values F, T, T, T." },
        { k: "b", q: "¬p ↔ q", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): ¬p = F, F, T, T; the column ¬p ↔ q has values F, F, T, T." },
        { k: "c", q: "(p → q) ∨ (¬p → q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p → q = T, F, T, T; ¬p → q = T, F, T, T; the column (p → q) ∨ (¬p → q) has values T, F, T, T." },
        { k: "d", q: "(p → q) ∧ (¬p → q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p → q = T, F, T, T; ¬p → q = T, F, T, T; the column (p → q) ∧ (¬p → q) has values T, F, T, T." },
        { k: "e", q: "(p ↔ q) ∨ (¬p ↔ q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): p ↔ q = T, F, F, T; ¬p ↔ q = F, F, T, T; the column (p ↔ q) ∨ (¬p ↔ q) has values T, F, T, T." },
        { k: "f", q: "(¬p ↔ ¬q) ↔ (p ↔ q)", mode: "self", ref: "Table (rows (p, q) = (T, T), (T, F), (F, T), (F, F)): ¬p ↔ ¬q = T, F, F, T; p ↔ q = T, F, F, T; the column (¬p ↔ ¬q) ↔ (p ↔ q) has values T, T, T, T: it is a tautology since ¬p ↔ ¬q is logically equivalent to p ↔ q." }
      ]
    },
    {
      no: 38,
      type: "真值表",
      q: "Construct a truth table for each of these compound propositions.",
      parts: [
        { k: "a", q: "(p ∨ q) ∨ r", mode: "self", ref: "Table with rows (p, q, r) = (T, T, T), (T, T, F), (T, F, T), (T, F, F), (F, T, T), (F, T, F), (F, F, T), (F, F, F): p ∨ q = T, T, T, T, T, T, F, F; the column (p ∨ q) ∨ r has values T, T, T, T, T, T, T, F." },
        { k: "b", q: "(p ∨ q) ∧ r", mode: "self", ref: "Table with the eight rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: p ∨ q = T, T, T, T, T, T, F, F; the column (p ∨ q) ∧ r has values T, F, T, F, T, F, F, F." },
        { k: "c", q: "(p ∧ q) ∨ r", mode: "self", ref: "Table with the eight rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: p ∧ q = T, T, F, F, F, F, F, F; the column (p ∧ q) ∨ r has values T, T, F, F, T, T, F, F." },
        { k: "d", q: "(p ∧ q) ∧ r", mode: "self", ref: "Table with the eight rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: p ∧ q = T, T, F, F, F, F, F, F; the column (p ∧ q) ∧ r has values T, F, F, F, F, F, F, F." },
        { k: "e", q: "(p ∨ q) ∧ ¬r", mode: "self", ref: "Table with the eight rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: ¬r = F, T, F, T, F, T, F, T; p ∨ q = T, T, T, T, T, T, F, F; the column (p ∨ q) ∧ ¬r has values T, T, T, F, T, T, T, F." },
        { k: "f", q: "(p ∧ q) ∨ ¬r", mode: "self", ref: "Table with the eight rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: ¬r = F, T, F, T, F, T, F, T; p ∧ q = T, T, F, F, F, F, F, F; the column (p ∧ q) ∨ ¬r has values T, T, T, T, T, T, T, F." }
      ]
    },
    {
      no: 39,
      type: "真值表",
      q: "Construct a truth table for each of these compound propositions.",
      parts: [
        { k: "a", q: "p → (¬q ∨ r)", mode: "self", ref: "Table with rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: the column p → (¬q ∨ r) has values T, F, T, T, T, T, T, T." },
        { k: "b", q: "¬p → (q → r)", mode: "self", ref: "Table with rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: the column ¬p → (q → r) has values T, F, T, T, T, T, T, T." },
        { k: "c", q: "(p → q) ∨ (¬p → r)", mode: "self", ref: "Table with rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: p → q = T, T, F, F, T, T, T, T; ¬p → r = T, F, T, T, T, F, T, F; the column (p → q) ∨ (¬p → r) has values T, T, T, T, T, T, T, T: it is a tautology." },
        { k: "d", q: "(p → q) ∧ (¬p → r)", mode: "self", ref: "Table with rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: p → q = T, T, F, F, T, T, T, T; ¬p → r = T, F, T, T, T, F, T, F; the column (p → q) ∧ (¬p → r) has values T, F, F, F, T, F, T, F." },
        { k: "e", q: "(p ↔ q) ∨ (¬q ↔ r)", mode: "self", ref: "Table with rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: p ↔ q = T, T, F, F, F, F, T, T; ¬q ↔ r = F, T, T, F, F, T, T, F; the column (p ↔ q) ∨ (¬q ↔ r) has values T, T, T, F, F, T, T, T." },
        { k: "f", q: "(¬p ↔ ¬q) ↔ (q ↔ r)", mode: "self", ref: "Table with rows (p, q, r) in the order TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF: ¬p ↔ ¬q = T, T, F, F, F, F, T, T; q ↔ r = T, F, T, F, T, F, T, T; the column (¬p ↔ ¬q) ↔ (q ↔ r) has values T, F, F, F, F, T, T, T." }
      ]
    },
    {
      no: 40,
      type: "真值表",
      q: "Construct a truth table for ((p → q) → r) → s.",
      parts: [
        { k: "1", q: "((p → q) → r) → s", mode: "self", ref: "This time the truth table needs 2⁴ = 16 rows. With rows (p, q, r, s) in the order TTTT, TTTF, TTFT, TTFF, TFTT, TFTF, TFFT, TFFF, FTTT, FTTF, FTFT, FTFF, FFTT, FFTF, FFFT, FFFF, the columns p → q, (p → q) → r and ((p → q) → r) → s give the final column T, F, T, T, T, F, T, F, T, F, T, T, T, F, T, T." }
      ]
    },
    {
      no: 41,
      type: "真值表",
      q: "Construct a truth table for (p ↔ q) ↔ (r ↔ s).",
      parts: [
        { k: "1", q: "(p ↔ q) ↔ (r ↔ s)", mode: "self", ref: "The truth table needs 2⁴ = 16 rows. The proposition is true exactly when p ↔ q and r ↔ s have the same truth value, that is, when an even number of the four propositions p, q, r, s are false (equivalently, when the number of true propositions among them is even). It is false when an odd number of them are false." }
      ]
    },
    {
      no: 42,
      type: "论证",
      q: "Explain, without using a truth table, why (p ∨ ¬q) ∧ (q ∨ ¬r) ∧ (r ∨ ¬p) is true when p, q, and r have the same truth value and it is false otherwise.",
      parts: [
        { k: "1", q: "Explain why (p ∨ ¬q) ∧ (q ∨ ¬r) ∧ (r ∨ ¬p) is true when p, q, and r have the same truth value and false otherwise.", mode: "self", ref: "This statement is true if and only if all three clauses, p ∨ ¬q, q ∨ ¬r, and r ∨ ¬p are true. Suppose p, q, and r are all true. Because each clause has an unnegated variable, each clause is true. Similarly, if p, q, and r are all false, then because each clause has a negated variable, each clause is true. On the other hand, if one of the variables is true and the other two false, then the clause containing the negation of that variable will be false, making the entire conjunction false; and similarly, if one of the variables is false and the other two true, then the clause containing that variable unnegated will be false, again making the entire conjunction false." }
      ]
    },
    {
      no: 43,
      type: "论证",
      q: "Explain, without using a truth table, why (p ∨ q ∨ r) ∧ (¬p ∨ ¬q ∨ ¬r) is true when at least one of p, q, and r is true and at least one is false, but is false when all three variables have the same truth value.",
      parts: [
        { k: "1", q: "Explain why (p ∨ q ∨ r) ∧ (¬p ∨ ¬q ∨ ¬r) is true when at least one of p, q, and r is true and at least one is false, but false when all three have the same truth value.", mode: "self", ref: "The first conjunct p ∨ q ∨ r is true exactly when at least one of p, q, r is true, and the second conjunct ¬p ∨ ¬q ∨ ¬r is true exactly when at least one of p, q, r is false. The conjunction therefore holds exactly when at least one of the three is true and at least one is false. If all three are true, the second conjunct is false; if all three are false, the first conjunct is false; in both cases the conjunction is false." }
      ]
    },
    {
      no: 44,
      type: "论证",
      q: "If p₁, p₂, …, pₙ are n propositions, explain why ⋀(i = 1 to n − 1) ⋁(j = i + 1 to n) (¬pᵢ ∨ ¬pⱼ) is true if and only if at most one of p₁, p₂, …, pₙ is true.",
      parts: [
        { k: "1", q: "Explain why ⋀(i = 1 to n − 1) ⋁(j = i + 1 to n) (¬pᵢ ∨ ¬pⱼ) is true if and only if at most one of p₁, p₂, …, pₙ is true.", mode: "self", ref: "The indexed disjunctions, ¬pᵢ ∨ ¬pⱼ, say that for each pair of distinct propositions in the list, at least one is false. By letting i range from 1 to n − 1 and j range from i + 1 to n, we are checking all pairs of distinct propositions in the list. By taking the conjunction over all pairs of indexes, we check that no two distinct propositions are both true. In other words, the expression says that for every pair of propositions, at least one of the pair is false. That is equivalent to saying that for every pair of propositions, at most one of the two is true. Which is equivalent to the statement that at most one of the propositions in the list is true." }
      ]
    },
    {
      no: 45,
      type: "构造",
      q: "Use Exercise 44 to construct a compound proposition that is true if and only if exactly one of the propositions p₁, p₂, …, pₙ is true. [Hint: Combine the compound proposition in Exercise 44 and a compound proposition that is true if and only if at least one of p₁, p₂, …, pₙ is true.]",
      parts: [
        { k: "1", q: "Construct a compound proposition that is true if and only if exactly one of p₁, p₂, …, pₙ is true.", mode: "self", ref: "Take the conjunction of the proposition of Exercise 44, ⋀(i = 1 to n − 1) ⋁(j = i + 1 to n) (¬pᵢ ∨ ¬pⱼ), which says that at most one of the propositions is true, with the proposition p₁ ∨ p₂ ∨ ⋯ ∨ pₙ, which says that at least one of them is true. The compound proposition (⋀(i = 1 to n − 1) ⋁(j = i + 1 to n) (¬pᵢ ∨ ¬pⱼ)) ∧ (p₁ ∨ p₂ ∨ ⋯ ∨ pₙ) is therefore true if and only if exactly one of the propositions is true." }
      ]
    },
    {
      no: 46,
      type: "程序追踪",
      q: "What is the value of x after each of these statements is encountered in a computer program, if x = 1 before the statement is reached?",
      parts: [
        { k: "a", q: "if x + 2 = 3 then x := x + 1", mode: "short", ans: ["2"], ref: "Since the condition is true (1 + 2 = 3), the statement is executed, so x is incremented and now has the value 2." },
        { k: "b", q: "if (x + 1 = 3) OR (2x + 2 = 3) then x := x + 1", mode: "short", ans: ["1"], ref: "Since the condition is false (1 + 1 = 3 is false and 2·1 + 2 = 4 ≠ 3 is false, so the OR is false), the statement is not executed, so x is not incremented and now still has the value 1." },
        { k: "c", q: "if (2x + 3 = 5) AND (3x + 4 = 7) then x := x + 1", mode: "short", ans: ["2"], ref: "Since the condition is true (2·1 + 3 = 5 and 3·1 + 4 = 7), the statement is executed, so x is incremented and now has the value 2." },
        { k: "d", q: "if (x + 1 = 2) XOR (x + 2 = 3) then x := x + 1", mode: "short", ans: ["1"], ref: "Since the condition is false (both 1 + 1 = 2 and 1 + 2 = 3 are true, and XOR of two true propositions is false), the statement is not executed, so x is not incremented and now still has the value 1." },
        { k: "e", q: "if x < 2 then x := x + 1", mode: "short", ans: ["2"], ref: "Since the condition is true when it is encountered (since x = 1), the statement is executed, so x is incremented and now has the value 2. (It is irrelevant that the condition is now false.)" }
      ]
    },
    {
      no: 47,
      type: "位运算",
      q: "Find the bitwise OR, bitwise AND, and bitwise XOR of each of these pairs of bit strings.",
      parts: [
        { k: "a1", q: "bitwise OR of 101 1110 and 010 0001", mode: "short", ans: ["1111111", "111 1111"], ref: "Bitwise OR: 101 1110 ∨ 010 0001 = 111 1111, i.e. 1111111." },
        { k: "a2", q: "bitwise AND of 101 1110 and 010 0001", mode: "short", ans: ["0000000", "000 0000"], ref: "Bitwise AND: 101 1110 ∧ 010 0001 = 000 0000, i.e. 0000000." },
        { k: "a3", q: "bitwise XOR of 101 1110 and 010 0001", mode: "short", ans: ["1111111", "111 1111"], ref: "Bitwise XOR: 101 1110 ⊕ 010 0001 = 111 1111, i.e. 1111111." },
        { k: "b1", q: "bitwise OR of 1111 0000 and 1010 1010", mode: "short", ans: ["11111010", "1111 1010"], ref: "Bitwise OR: 1111 0000 ∨ 1010 1010 = 1111 1010, i.e. 11111010." },
        { k: "b2", q: "bitwise AND of 1111 0000 and 1010 1010", mode: "short", ans: ["10100000", "1010 0000"], ref: "Bitwise AND: 1111 0000 ∧ 1010 1010 = 1010 0000, i.e. 10100000." },
        { k: "b3", q: "bitwise XOR of 1111 0000 and 1010 1010", mode: "short", ans: ["01011010", "0101 1010"], ref: "Bitwise XOR: 1111 0000 ⊕ 1010 1010 = 0101 1010, i.e. 01011010." },
        { k: "c1", q: "bitwise OR of 00 0111 0001 and 10 0100 1000", mode: "short", ans: ["1001111001", "1001 1110 01"], ref: "Bitwise OR: 00 0111 0001 ∨ 10 0100 1000 = 1001 1110 01, i.e. 1001111001." },
        { k: "c2", q: "bitwise AND of 00 0111 0001 and 10 0100 1000", mode: "short", ans: ["0001000000", "0001 0000 00"], ref: "Bitwise AND: 00 0111 0001 ∧ 10 0100 1000 = 0001 0000 00, i.e. 0001000000." },
        { k: "c3", q: "bitwise XOR of 00 0111 0001 and 10 0100 1000", mode: "short", ans: ["1000111001", "1000 1110 01"], ref: "Bitwise XOR: 00 0111 0001 ⊕ 10 0100 1000 = 1000 1110 01, i.e. 1000111001." },
        { k: "d1", q: "bitwise OR of 11 1111 1111 and 00 0000 0000", mode: "short", ans: ["1111111111", "1111 1111 11"], ref: "Bitwise OR: 11 1111 1111 ∨ 00 0000 0000 = 1111 1111 11, i.e. 1111111111." },
        { k: "d2", q: "bitwise AND of 11 1111 1111 and 00 0000 0000", mode: "short", ans: ["0000000000", "0000 0000 00"], ref: "Bitwise AND: 11 1111 1111 ∧ 00 0000 0000 = 0000 0000 00, i.e. 0000000000." },
        { k: "d3", q: "bitwise XOR of 11 1111 1111 and 00 0000 0000", mode: "short", ans: ["1111111111", "1111 1111 11"], ref: "Bitwise XOR: 11 1111 1111 ⊕ 00 0000 0000 = 1111 1111 11, i.e. 1111111111." }
      ]
    }
  ]
});
