window.BANK.push({
  sec: "1.5",
  title: "Nested Quantifiers",
  titleCn: "嵌套量词",
  tips: [
    "翻译题先看量词顺序：∀x∃y 表示“对每个 x 都存在一个 y”，而 ∃x∀y 表示“存在一个 x 对所有 y 都行”，两者不可互换。",
    "“There is / No …” 用 ∃ 起步；“every / everybody” 用 ∀ 起步；出现“没有人能……”常写成 ¬∃x∀y 的形式更自然。",
    "“恰好一个”写成 ∃x∀y(… ↔ y = x)；“至少两个”要引入两个不同变量并加上 x1 ≠ x2。",
    "否定化简规则：¬∀ 换成 ∃¬，¬∃ 换成 ∀¬，再用 De Morgan 律把否定推进谓词内部。",
    "“only if” 对应 →（A only if B 即 A → B），“if and only if” 对应 ↔；系统规格题必须先定义谓词再写量词。",
    "判断真值时优先找具体取值或反例：∀x∃y 类通常为真，∃x∀y 类常为假，∃x∃y 类看能否凑出解。",
    "量词不可随意交换顺序，但可对无关变量改名；嵌套量词译成英文时要照辖域逐层展开。",
    "量词翻译的答案要写成规范公式，符号统一使用 ∀ ∃ ¬ ∧ ∨ → ↔ 与 ≠，不要保留 PDF 抽取的噪声字符。"
  ],
  items: [
    {
      no: 7,
      type: "量词翻译",
      q: "Let T(x, y) be the statement “x has been a contestant on quiz show y.” Express each of the following statements in English.",
      parts: [
        {
          k: "b",
          q: "∃x T(x, Korean) ∧ ∀x T(x, Mexican)",
          mode: "self",
          ref: "There is someone who has been a contestant on a Korean quiz show, and everyone has been a contestant on a Mexican quiz show.",
          cn: "注意 ∧ 的两侧各自带量词：左侧是存在，右侧是全称。"
        },
        {
          k: "c",
          q: "∃y (T(Monique Arsenault, y) ∨ T(Jay Johnson, y))",
          mode: "self",
          ref: "Monique Arsenault or Jay Johnson has been a contestant on some quiz show.",
          cn: "y 只被量化一次，是“某个问答节目”。"
        },
        {
          k: "d",
          q: "∀x∀z∃y((x ≠ z) → ¬(T(x, y) ∧ T(z, y)))",
          mode: "self",
          ref: "For every two different people x and z, there is a quiz show y that neither of them has been a contestant on.",
          cn: "¬(A ∧ B) 等价于 A → ¬B，读成“都不是”。"
        },
        {
          k: "e",
          q: "∃x∃z∀y(T(x, y) ↔ T(z, y))",
          mode: "self",
          ref: "There are two people x and z who have been contestants on exactly the same quiz shows.",
          cn: "↔ 表达“参加过的节目完全相同”。"
        },
        {
          k: "f",
          q: "∀x∀z∃y(T(x, y) ↔ T(z, y))",
          mode: "self",
          ref: "For every two people x and z, there is a quiz show y such that either both of them have been contestants on y or neither of them has been.",
          cn: "与 (e) 相比，x 与 z 由“存在”变成“任意”，但节目 y 仍然是每个 x、z 各自可选。"
        }
      ]
    },
    {
      no: 8,
      type: "量词翻译",
      q: "Let Q(x, y) be the statement “Student x has been a contestant on quiz show y.” Express each of these sentences in terms of Q(x, y), quantifiers, and logical connectives, where the domain for x consists of all students at your school and for y consists of all quiz shows on television.",
      parts: [
        {
          k: "a",
          q: "There is a student at your school who has been a contestant on a television quiz show.",
          mode: "short",
          ans: ["∃x∃yQ(x,y)"],
          ref: "∃x∃yQ(x,y)",
          cn: "学生和节目各存在一个，两个量词都要有。"
        },
        {
          k: "b",
          q: "No student at your school has ever been a contestant on a television quiz show.",
          mode: "short",
          ans: ["¬∃x∃yQ(x,y)", "∀x∀y¬Q(x,y)"],
          ref: "This is the negation of part (a), and so could be written either ¬∃x∃yQ(x,y) or ∀x∀y¬Q(x,y).",
          cn: "答案册给了两种等价写法。"
        },
        {
          k: "c",
          q: "There is a student at your school who has been a contestant on Jeopardy! and on Wheel of Fortune.",
          mode: "short",
          ans: ["∃x(Q(x, Jeopardy!) ∧ Q(x, Wheel of Fortune))"],
          ref: "We assume from the wording that the statement means that the same person appeared on both shows: ∃x(Q(x, Jeopardy!) ∧ Q(x, Wheel of Fortune)).",
          cn: "同一个 x 同时出现在两个节目中。"
        },
        {
          k: "d",
          q: "Every television quiz show has had a student from your school as a contestant.",
          mode: "short",
          ans: ["∀y∃xQ(x,y)"],
          ref: "∀y∃xQ(x,y)",
          cn: "对每个节目都存在某个学生，量词顺序是 ∀y∃x。"
        },
        {
          k: "e",
          q: "At least two students from your school have been contestants on Jeopardy!.",
          mode: "short",
          ans: ["∃x1∃x2(Q(x1, Jeopardy!) ∧ Q(x2, Jeopardy!) ∧ x1 ≠ x2)"],
          ref: "∃x1∃x2(Q(x1, Jeopardy!) ∧ Q(x2, Jeopardy!) ∧ x1 ≠ x2)",
          cn: "“至少两个”要两个变量再加 x1 ≠ x2。"
        }
      ]
    },
    {
      no: 9,
      type: "量词翻译",
      q: "Let L(x, y) be the statement “x loves y,” where the domain for both x and y consists of all people in the world. Use quantifiers to express each of these statements.",
      parts: [
        {
          k: "a",
          q: "Everybody loves Jerry.",
          mode: "short",
          ans: ["∀x L(x, Jerry)"],
          ref: "∀x L(x, Jerry)",
          cn: "被爱者是常量 Jerry，只需量化 x。"
        },
        {
          k: "b",
          q: "Everybody loves somebody.",
          mode: "short",
          ans: ["∀x∃y L(x,y)"],
          ref: "∀x∃y L(x,y)",
          cn: "对每人 x，存在某个 y（y 依赖 x）。"
        },
        {
          k: "c",
          q: "There is somebody whom everybody loves.",
          mode: "short",
          ans: ["∃y∀x L(x,y)"],
          ref: "∃y∀x L(x,y)",
          cn: "与 (b) 的量词顺序恰好相反。"
        },
        {
          k: "d",
          q: "Nobody loves everybody.",
          mode: "short",
          ans: ["¬∃x∀y L(x,y)"],
          ref: "¬∃x∀y L(x,y)",
          cn: "等价写法：∀x∃y¬L(x,y)。"
        },
        {
          k: "e",
          q: "There is somebody whom Lydia does not love.",
          mode: "short",
          ans: ["∃y ¬L(Lydia, y)"],
          ref: "∃y ¬L(Lydia, y)",
          cn: "Lydia 是常量，只否定被爱的那一项。"
        },
        {
          k: "f",
          q: "There is somebody whom no one loves.",
          mode: "short",
          ans: ["∃y∀x ¬L(x,y)"],
          ref: "∃y∀x ¬L(x,y)",
          cn: "¬ 放在谓词 L 前面，量词保持不变。"
        },
        {
          k: "g",
          q: "There is exactly one person whom everybody loves.",
          mode: "short",
          ans: ["∃y(∀x L(x,y) ∧ ∀z(∀x L(x,z) → z = y))"],
          ref: "∃y(∀x L(x,y) ∧ ∀z(∀x L(x,z) → z = y))",
          cn: "“恰好一个”＝存在唯一性条件。"
        },
        {
          k: "h",
          q: "There are exactly two people whom Lynn loves.",
          mode: "short",
          ans: ["∃x∃y(x ≠ y ∧ L(Lynn,x) ∧ L(Lynn,y) ∧ ∀z((L(Lynn,z) ∧ z ≠ x) → z = y))"],
          ref: "∃x∃y(x ≠ y ∧ L(Lynn,x) ∧ L(Lynn,y) ∧ ∀z((L(Lynn,z) ∧ z ≠ x) → z = y))",
          cn: "两个人 x、y 不同，且除他们之外 Lynn 不再爱别人。"
        },
        {
          k: "i",
          q: "Everyone loves himself or herself.",
          mode: "short",
          ans: ["∀x L(x,x)"],
          ref: "∀x L(x,x)",
          cn: "两个变元取同一对象。"
        },
        {
          k: "j",
          q: "There is someone who loves no one besides himself or herself.",
          mode: "short",
          ans: ["∃x∀y((y ≠ x) → ¬L(x,y))"],
          ref: "∃x∀y((y ≠ x) → ¬L(x,y))",
          cn: "除自己外谁都不爱。"
        }
      ]
    },
    {
      no: 10,
      type: "量词翻译",
      q: "Let F(x, y) be the statement “x can fool y,” where the domain consists of all people in the world. Use quantifiers to express each of these statements.",
      parts: [
        {
          k: "a",
          q: "Everybody can fool Fred.",
          mode: "short",
          ans: ["∀x F(x, Fred)"],
          ref: "∀x F(x, Fred)",
          cn: "Fred 是常量。"
        },
        {
          k: "b",
          q: "Evelyn can fool everybody.",
          mode: "short",
          ans: ["∀y F(Evelyn, y)"],
          ref: "∀y F(Evelyn, y)",
          cn: "Evelyn 是常量，只量化被愚弄的人。"
        },
        {
          k: "c",
          q: "Everybody can fool somebody.",
          mode: "short",
          ans: ["∀x∃y F(x,y)"],
          ref: "∀x∃y F(x,y)",
          cn: "y 依赖 x。"
        },
        {
          k: "d",
          q: "There is no one who can fool everybody.",
          mode: "short",
          ans: ["¬∃x ∀y F(x,y)"],
          ref: "¬∃x ∀y F(x,y)",
          cn: "等价写法：∀x∃y ¬F(x,y)。"
        },
        {
          k: "e",
          q: "Everyone can be fooled by somebody.",
          mode: "short",
          ans: ["∀y∃x F(x,y)"],
          ref: "∀y∃x F(x,y)",
          cn: "与 (c) 顺序相反：这里 x（愚弄者）依赖 y。"
        },
        {
          k: "f",
          q: "No one can fool both Fred and Jerry.",
          mode: "short",
          ans: ["¬∃x(F(x, Fred) ∧ F(x, Jerry))"],
          ref: "¬∃x(F(x, Fred) ∧ F(x, Jerry))",
          cn: "先否定再拆开：¬(A ∧ B) ≡ ¬A ∨ ¬B。"
        },
        {
          k: "g",
          q: "Nancy can fool exactly two people.",
          mode: "short",
          ans: ["∃y1∃y2(F(Nancy, y1) ∧ F(Nancy, y2) ∧ y1 ≠ y2 ∧ ∀y(F(Nancy, y) → (y = y1 ∨ y = y2)))"],
          ref: "∃y1∃y2(F(Nancy, y1) ∧ F(Nancy, y2) ∧ y1 ≠ y2 ∧ ∀y(F(Nancy, y) → (y = y1 ∨ y = y2)))",
          cn: "恰好两人：两人不同，且所骗之人非此二人即无。"
        },
        {
          k: "h",
          q: "There is exactly one person whom everybody can fool.",
          mode: "short",
          ans: ["∃y(∀x F(x, y) ∧ ∀z(∀x F(x, z) → z = y))"],
          ref: "∃y(∀x F(x, y) ∧ ∀z(∀x F(x, z) → z = y))",
          cn: "存在一个被所有人愚弄的人，且只有一个。"
        },
        {
          k: "i",
          q: "No one can fool himself or herself.",
          mode: "short",
          ans: ["¬∃x F(x,x)"],
          ref: "¬∃x F(x,x)",
          cn: "等价写法：∀x ¬F(x,x)。"
        },
        {
          k: "j",
          q: "There is someone who can fool exactly one person besides himself or herself.",
          mode: "short",
          ans: ["∃x∃y(x ≠ y ∧ F(x,y) ∧ ∀z((F(x,z) ∧ z ≠ x) → z = y))"],
          ref: "∃x∃y(x ≠ y ∧ F(x,y) ∧ ∀z((F(x,z) ∧ z ≠ x) → z = y)) (We do not assume that this sentence is asserting that this person can or cannot fool her/himself.)",
          cn: "除自己以外恰好骗到一个人。"
        }
      ]
    },
    {
      no: 11,
      type: "量词翻译",
      q: "Let S(x) be the predicate “x is a student,” F(x) the predicate “x is a faculty member,” and A(x, y) the predicate “x has asked y a question,” where the domain consists of all people associated with your school. Use quantifiers to express each of these statements.",
      parts: [
        {
          k: "a",
          q: "Lois has asked Professor Michaels a question.",
          mode: "short",
          ans: ["A(Lois, Professor Michaels)"],
          ref: "A(Lois, Professor Michaels)",
          cn: "两边都是常量，无需量词。"
        },
        {
          k: "b",
          q: "Every student has asked Professor Gross a question.",
          mode: "short",
          ans: ["∀x(S(x) → A(x, Professor Gross))"],
          ref: "∀x(S(x) → A(x, Professor Gross))",
          cn: "用蕴含把“是学生”的限制写进去。"
        },
        {
          k: "c",
          q: "Every faculty member has either asked Professor Miller a question or been asked a question by Professor Miller.",
          mode: "short",
          ans: ["∀x(F(x) → (A(x, Professor Miller) ∨ ∃y(S(y) ∧ A(Professor Miller, y))))"],
          ref: "∀x(F(x) → (A(x, Professor Miller) ∨ ∃y(S(y) ∧ A(Professor Miller, y))))",
          cn: "后半句“被 Miller 问过”要引入问的人 y 且 y 是学生。"
        },
        {
          k: "d",
          q: "Some student has not asked any faculty member a question.",
          mode: "short",
          ans: ["∃x(S(x) ∧ ∀y(F(y) → ¬A(x,y)))"],
          ref: "∃x(S(x) ∧ ∀y(F(y) → ¬A(x,y)))",
          cn: "“没有问过任何教师”＝对所有教师都否定。"
        },
        {
          k: "e",
          q: "There is a faculty member who has never been asked a question by a student.",
          mode: "short",
          ans: ["∃x(F(x) ∧ ∀y(S(y) → ¬A(x,y)))"],
          ref: "∃x(F(x) ∧ ∀y(S(y) → ¬A(x,y)))",
          cn: "与 (d) 互换 S 与 F 的角色。"
        },
        {
          k: "f",
          q: "Some student has asked every faculty member a question.",
          mode: "short",
          ans: ["∃x(S(x) ∧ ∀y(F(y) → A(x,y)))"],
          ref: "∃x(S(x) ∧ ∀y(F(y) → A(x,y)))",
          cn: "存在一个学生，量词顺序 ∃x∀y。"
        },
        {
          k: "g",
          q: "There is a faculty member who has asked every other faculty member a question.",
          mode: "short",
          ans: ["∃x(F(x) ∧ ∀y((F(y) ∧ y ≠ x) → A(x,y)))"],
          ref: "∃x(F(x) ∧ ∀y((F(y) ∧ y ≠ x) → A(x,y)))",
          cn: "“每个其他教师”要排除自己。"
        },
        {
          k: "h",
          q: "Some student has never been asked a question by a faculty member.",
          mode: "short",
          ans: ["∃x(S(x) ∧ ¬∃y(F(y) ∧ A(y,x)))"],
          ref: "∃x(S(x) ∧ ¬∃y(F(y) ∧ A(y,x)))",
          cn: "A(y,x) 的顺序：y 是提问者，x 是被提问者。"
        }
      ]
    },
    {
      no: 12,
      type: "量词翻译",
      q: "Let I(x) be the statement “x has an Internet connection” and C(x, y) be the statement “x and y have chatted over the Internet,” where the domain for the variables x and y consists of all students in your class. Use quantifiers to express each of these statements.",
      parts: [
        {
          k: "a",
          q: "Jerry does not have an Internet connection.",
          mode: "short",
          ans: ["¬I(Jerry)"],
          ref: "¬I(Jerry)",
          cn: "常量，无需量词。"
        },
        {
          k: "b",
          q: "Rachel has not chatted over the Internet with Chelsea.",
          mode: "short",
          ans: ["¬C(Rachel, Chelsea)"],
          ref: "¬C(Rachel, Chelsea)",
          cn: "C(x, y) 中 x 是聊天者，y 是被聊者。"
        },
        {
          k: "c",
          q: "Jan and Sharon have never chatted over the Internet.",
          mode: "short",
          ans: ["¬C(Jan, Sharon)"],
          ref: "¬C(Jan, Sharon)",
          cn: "两人之间从未聊过。"
        },
        {
          k: "d",
          q: "No one in the class has chatted with Bob.",
          mode: "short",
          ans: ["¬∃x C(x, Bob)"],
          ref: "¬∃x C(x, Bob)",
          cn: "等价写法：∀x ¬C(x, Bob)。"
        },
        {
          k: "e",
          q: "Sanjay has chatted with everyone except Joseph.",
          mode: "short",
          ans: ["∀x((x ≠ Joseph) ↔ C(x, Sanjay))"],
          ref: "∀x((x ≠ Joseph) ↔ C(x, Sanjay))",
          cn: "用 ↔ 同时表达“除 Joseph 外都聊过”和“没和 Joseph 聊过”。"
        },
        {
          k: "f",
          q: "Someone in your class does not have an Internet connection.",
          mode: "short",
          ans: ["∃x ¬I(x)"],
          ref: "∃x ¬I(x)",
          cn: "与 (g) 等价。"
        },
        {
          k: "g",
          q: "Not everyone in your class has an Internet connection.",
          mode: "short",
          ans: ["¬∀x I(x)"],
          ref: "¬∀x I(x) (same as (f))",
          cn: "答案册注明与 (f) 相同。"
        },
        {
          k: "h",
          q: "Exactly one student in your class has an Internet connection.",
          mode: "short",
          ans: ["∃x∀y((x = y) ↔ I(y))"],
          ref: "∃x∀y((x = y) ↔ I(y))",
          cn: "“恰好一个”的标准写法。"
        },
        {
          k: "i",
          q: "Everyone except one student in your class has an Internet connection.",
          mode: "short",
          ans: ["∃x∀y((x ≠ y) ↔ I(y))"],
          ref: "∃x∀y((x ≠ y) ↔ I(y))",
          cn: "与 (h) 的区别是 x ≠ y。"
        },
        {
          k: "j",
          q: "Everyone in your class with an Internet connection has chatted over the Internet with at least one other student in your class.",
          mode: "short",
          ans: ["∀x(I(x) → ∃y((x ≠ y) ∧ C(x,y)))"],
          ref: "∀x(I(x) → ∃y((x ≠ y) ∧ C(x,y)))",
          cn: "蕴含 + 存在，且聊天对象不能是本人。"
        },
        {
          k: "k",
          q: "Someone in your class has an Internet connection but has not chatted with anyone else in your class.",
          mode: "short",
          ans: ["∃x(I(x) ∧ ∀y((x ≠ y) → ¬C(x,y)))"],
          ref: "∃x(I(x) ∧ ∀y((x ≠ y) → ¬C(x,y)))",
          cn: "对所有其他人都不聊。"
        },
        {
          k: "l",
          q: "There are two students in your class who have not chatted with each other over the Internet.",
          mode: "short",
          ans: ["∃x∃y((x ≠ y) ∧ ¬C(x,y))"],
          ref: "∃x∃y((x ≠ y) ∧ ¬C(x,y))",
          cn: "两人不同且互相没聊过。"
        },
        {
          k: "m",
          q: "There is a student in your class who has chatted with everyone in your class over the Internet.",
          mode: "short",
          ans: ["∃x∀y C(x,y)"],
          ref: "∃x∀y C(x,y)",
          cn: "存在一个与所有人聊过的人。"
        },
        {
          k: "n",
          q: "There are at least two students in your class who have not chatted with the same person in your class.",
          mode: "short",
          ans: ["∃x∃y((x ≠ y) ∧ ∀z ¬(C(x,z) ∧ C(y,z)))"],
          ref: "∃x∃y((x ≠ y) ∧ ∀z ¬(C(x,z) ∧ C(y,z)))",
          cn: "不存在第三人与两人都聊过。"
        },
        {
          k: "o",
          q: "There are two students in the class who between them have chatted with everyone else in the class.",
          mode: "short",
          ans: ["∃x∃y((x ≠ y) ∧ ∀z(C(x,z) ∨ C(y,z)))"],
          ref: "∃x∃y((x ≠ y) ∧ ∀z(C(x,z) ∨ C(y,z)))",
          cn: "对每个 z，至少与 x、y 之一聊过。"
        }
      ]
    },
    {
      no: 13,
      type: "量词翻译",
      q: "Let M(x, y) be “x has sent y an e-mail message” and T(x, y) be “x has telephoned y,” where the domain consists of all students in your class. Use quantifiers to express each of these statements. (Assume that all e-mail messages that were sent are received, which is not the way things often work.)",
      parts: [
        {
          k: "a",
          q: "Chou has never sent an e-mail message to Koko.",
          mode: "short",
          ans: ["¬M(Chou, Koko)"],
          ref: "¬M(Chou, Koko)",
          cn: "M(x, y) 中 x 是发送者。"
        },
        {
          k: "b",
          q: "Arlene has never sent an e-mail message to or telephoned Sarah.",
          mode: "short",
          ans: ["¬M(Arlene, Sarah) ∧ ¬T(Arlene, Sarah)"],
          ref: "¬M(Arlene, Sarah) ∧ ¬T(Arlene, Sarah)",
          cn: "“既没有……也没有……”是两个否定用 ∧ 连接。"
        },
        {
          k: "c",
          q: "José has never received an e-mail message from Deborah.",
          mode: "short",
          ans: ["¬M(Deborah, José)"],
          ref: "¬M(Deborah, José)",
          cn: "发件人是 Deborah，收件人是 José，顺序不能颠倒。"
        },
        {
          k: "d",
          q: "Every student in your class has sent an e-mail message to Ken.",
          mode: "short",
          ans: ["∀x M(x, Ken)"],
          ref: "∀x M(x, Ken)",
          cn: "Ken 是常量。"
        },
        {
          k: "e",
          q: "No one in your class has telephoned Nina.",
          mode: "short",
          ans: ["¬∃x T(x, Nina)"],
          ref: "¬∃x T(x, Nina)",
          cn: "等价写法：∀x ¬T(x, Nina)。"
        },
        {
          k: "f",
          q: "Everyone in your class has either telephoned Avi or sent him an e-mail message.",
          mode: "short",
          ans: ["∀x(T(x, Avi) ∨ M(x, Avi))"],
          ref: "∀x(T(x, Avi) ∨ M(x, Avi))",
          cn: "“either … or …” 对应 ∨，不是 ⊕。"
        },
        {
          k: "g",
          q: "There is a student in your class who has sent everyone else in your class an e-mail message.",
          mode: "short",
          ans: ["∃x∀y((x ≠ y) → M(x,y))"],
          ref: "∃x∀y((x ≠ y) → M(x,y))",
          cn: "存在一个人给其余所有人发过邮件。"
        },
        {
          k: "h",
          q: "There is someone in your class who has either sent an e-mail message or telephoned everyone else in your class.",
          mode: "short",
          ans: ["∃x∀y((x ≠ y) → (M(x,y) ∨ T(x,y)))"],
          ref: "∃x∀y((x ≠ y) → (M(x,y) ∨ T(x,y)))",
          cn: "把 (g) 中 M 换成 M ∨ T，注意 ∀y 要在 ∧ 之外。"
        },
        {
          k: "i",
          q: "There are two different students in your class who have sent each other e-mail messages.",
          mode: "short",
          ans: ["∃x∃y((x ≠ y) ∧ M(x,y) ∧ M(y,x))"],
          ref: "∃x∃y((x ≠ y) ∧ M(x,y) ∧ M(y,x))",
          cn: "互相都发过。"
        },
        {
          k: "j",
          q: "There is a student who has sent himself or herself an e-mail message.",
          mode: "short",
          ans: ["∃x M(x,x)"],
          ref: "∃x M(x,x)",
          cn: "两变元相同。"
        },
        {
          k: "k",
          q: "There is a student in your class who has not received an e-mail message from anyone else in the class and who has not been called by any other student in the class.",
          mode: "short",
          ans: ["∃x(¬∃y((x ≠ y) ∧ M(y,x)) ∧ ¬∃y((x ≠ y) ∧ T(y,x)))"],
          ref: "∃x(¬∃y((x ≠ y) ∧ M(y,x)) ∧ ¬∃y((x ≠ y) ∧ T(y,x)))",
          cn: "收件方向：M(y,x) 表示 y 发给 x。"
        },
        {
          k: "l",
          q: "Every student in the class has either received an e-mail message or received a telephone call from another student in the class.",
          mode: "short",
          ans: ["∀x∃y((x ≠ y) ∧ (M(y,x) ∨ T(y,x)))"],
          ref: "∀x∃y((x ≠ y) ∧ (M(y,x) ∨ T(y,x)))",
          cn: "对每个 x，都存在某个别人 y 给他发过邮件或打过电话。"
        },
        {
          k: "m",
          q: "There are at least two students in your class such that one student has sent the other e-mail and the second student has telephoned the first student.",
          mode: "short",
          ans: ["∃x∃y((x ≠ y) ∧ M(x,y) ∧ T(y,x))"],
          ref: "∃x∃y((x ≠ y) ∧ M(x,y) ∧ T(y,x))",
          cn: "一个发邮件，另一个打电话回去。"
        },
        {
          k: "n",
          q: "There are two different students in your class who between them have sent an e-mail message to or telephoned everyone else in the class.",
          mode: "short",
          ans: ["∃x∃y((x ≠ y) ∧ ∀z((z ≠ x ∧ z ≠ y) → (M(x,z) ∨ T(x,z) ∨ M(y,z) ∨ T(y,z))))"],
          ref: "∃x∃y((x ≠ y) ∧ ∀z((z ≠ x ∧ z ≠ y) → (M(x,z) ∨ T(x,z) ∨ M(y,z) ∨ T(y,z))))",
          cn: "两人合力覆盖其余所有人。"
        }
      ]
    },
    {
      no: 14,
      type: "量词翻译",
      q: "Use quantifiers and predicates with more than one variable to express these statements. (Our domain of discourse for persons here consists of people in this class.)",
      parts: [
        {
          k: "a",
          q: "There is a student in this class who can speak Hindi. (Let S(x, y) mean that person x can speak language y.)",
          mode: "short",
          ans: ["∃x S(x, Hindi)"],
          ref: "Let S(x, y) mean that person x can speak language y. Then our statement is ∃x S(x, Hindi).",
          cn: "答案册为每小题自定义了一个谓词。"
        },
        {
          k: "b",
          q: "Every student in this class plays some sport. (Let P(x, y) mean that person x plays sport y.)",
          mode: "short",
          ans: ["∀x∃y P(x,y)"],
          ref: "Let P(x, y) mean that person x plays sport y. Then our statement is ∀x∃y P(x, y).",
          cn: "注意是 ∀x∃y 而不是 ∃x∀y。"
        },
        {
          k: "c",
          q: "Some student in this class has visited Alaska but has not visited Hawaii. (Let V(x, y) mean that person x has visited state y.)",
          mode: "short",
          ans: ["∃x(V(x, Alaska) ∧ ¬V(x, Hawaii))"],
          ref: "Let V(x, y) mean that person x has visited state y. Then our statement is ∃x(V(x, Alaska) ∧ ¬V(x, Hawaii)).",
          cn: "“但没有”对应 ∧ 与 ¬。"
        },
        {
          k: "d",
          q: "All students in this class have learned at least one programming language. (Let L(x, y) mean that person x has learned programming language y.)",
          mode: "short",
          ans: ["∀x∃y L(x,y)"],
          ref: "Let L(x, y) mean that person x has learned programming language y. Then our statement is ∀x∃y L(x, y).",
          cn: "至少一门语言 ⇒ 存在一个 y。"
        },
        {
          k: "e",
          q: "There is a student in this class who has taken every course offered by one of the departments in this school. (Let T(x, y) mean that x has taken course y, and let O(y, z) mean that course y is offered by department z.)",
          mode: "short",
          ans: ["∃x∃z∀y(O(y, z) → T(x, y))"],
          ref: "Let T(x, y) mean that x has taken course y, and let O(y, z) mean that course y is offered by department z. Then our statement is ∃x∃z∀y(O(y, z) → T(x, y)).",
          cn: "先定一个系 z，再对该系开设的所有课程取遍。"
        },
        {
          k: "f",
          q: "Some student in this class grew up in the same town as exactly one other student in this class. (Let G(x, y) mean that persons x and y grew up in the same town.)",
          mode: "short",
          ans: ["∃x∃y((x ≠ y) ∧ G(x,y) ∧ ∀z(G(x,z) → (x = y ∨ x = z)))"],
          ref: "Let G(x, y) mean that persons x and y grew up in the same town. Then our statement is ∃x∃y(x ≠ y ∧ G(x, y) ∧ ∀z(G(x, z) → (x = y ∨ x = z))).",
          cn: "同乡关系要求排除第三个同乡。"
        },
        {
          k: "g",
          q: "Every student in this class has chatted with at least one other student in at least one chat group. (Let C(x, y, z) mean that persons x and y have chatted with each other in chat group z.)",
          mode: "short",
          ans: ["∀x∃y∃z((x ≠ y) ∧ C(x,y,z))"],
          ref: "Let C(x, y, z) mean that persons x and y have chatted with each other in chat group z. Then our statement is ∀x∃y∃z(x ≠ y ∧ C(x, y, z)).",
          cn: "三个量词依次是学生、聊天对象、聊天室。"
        }
      ]
    },
    {
      no: 15,
      type: "量词翻译",
      q: "Use quantifiers and predicates with more than one variable to express these statements.",
      parts: [
        {
          k: "a",
          q: "Every computer science student needs a course in discrete mathematics.",
          mode: "self",
          ref: "可令 C(x) 表示“x 是计算机科学专业学生”，D(x, y) 表示“x 需要课程 y”，则语句为 ∀x(C(x) → ∃y D(x, y))；也可令 D(x) 直接表示“x 需要离散数学课程”，写成 ∀x(C(x) → D(x))。",
          cn: "答案不唯一：谓词可以自拟，关键是量词结构 ∀x∃y。"
        },
        {
          k: "b",
          q: "There is a student in this class who owns a personal computer.",
          mode: "self",
          ref: "令 S(x) 表示“x 是本班学生”，P(x) 表示“x 拥有个人电脑”，则语句为 ∃x(S(x) ∧ P(x))。",
          cn: "存在量词 + 合取。"
        },
        {
          k: "c",
          q: "Every student in this class has taken at least one computer science course.",
          mode: "self",
          ref: "令 S(x) 表示“x 是本班学生”，C(y) 表示“y 是计算机科学课程”，T(x, y) 表示“x 修过课程 y”，则语句为 ∀x(S(x) → ∃y(C(y) ∧ T(x, y)))。",
          cn: "量词顺序是 ∀x∃y。"
        },
        {
          k: "d",
          q: "There is a student in this class who has taken at least one course in computer science.",
          mode: "self",
          ref: "令 S(x) 表示“x 是本班学生”，C(y) 表示“y 是计算机科学课程”，T(x, y) 表示“x 修过课程 y”，则语句为 ∃x(S(x) ∧ ∃y(C(y) ∧ T(x, y)))。",
          cn: "与 (c) 只差量词顺序：∃x∃y。"
        },
        {
          k: "e",
          q: "Every student in this class has been in every building on campus.",
          mode: "self",
          ref: "令 S(x) 表示“x 是本班学生”，B(y) 表示“y 是校内建筑”，V(x, y) 表示“x 进过建筑 y”，则语句为 ∀x(S(x) → ∀y(B(y) → V(x, y)))。",
          cn: "∀x∀y 结构。"
        },
        {
          k: "f",
          q: "There is a student in this class who has been in every room of at least one building on campus.",
          mode: "self",
          ref: "令 S(x) 表示“x 是本班学生”，B(y) 表示“y 是校内建筑”，R(z) 表示“z 是房间”，In(z, y) 表示“房间 z 在建筑 y 中”，V(x, z) 表示“x 进过房间 z”，则语句为 ∃x∃y(S(x) ∧ B(y) ∧ ∀z((R(z) ∧ In(z, y)) → V(x, z)))。",
          cn: "先选定一个建筑，再遍历它的所有房间。"
        },
        {
          k: "g",
          q: "Every student in this class has been in at least one room of every building on campus.",
          mode: "self",
          ref: "令 S(x) 表示“x 是本班学生”，B(y) 表示“y 是校内建筑”，R(z) 表示“z 是房间”，In(z, y) 表示“房间 z 在建筑 y 中”，V(x, z) 表示“x 进过房间 z”，则语句为 ∀x(S(x) → ∀y(B(y) → ∃z(R(z) ∧ In(z, y) ∧ V(x, z))))。",
          cn: "与 (f) 相反：每个建筑都要至少一个房间。"
        }
      ]
    },
    {
      no: 16,
      type: "量词翻译",
      q: "A discrete mathematics class contains 1 mathematics major who is a freshman, 12 mathematics majors who are sophomores, 15 computer science majors who are sophomores, 2 mathematics majors who are juniors, 2 computer science majors who are juniors, and 1 computer science major who is a senior. Express each of these statements in terms of quantifiers and then determine its truth value. (Let P(s, c, m) be the statement that student s has class standing c and is majoring in m; s ranges over the students in the class, c over the four class standings, m over all possible majors.)",
      parts: [
        {
          k: "a",
          q: "There is a student in the class who is a junior.",
          mode: "short",
          ans: ["∃s∃m P(s, junior, m)"],
          ref: "The proposition is ∃s∃mP(s, junior, m). It is true from the given information. 真值：真。",
          cn: "真值为真：班上确有 4 名大四前的学生。"
        },
        {
          k: "b",
          q: "Every student in the class is a computer science major.",
          mode: "short",
          ans: ["∀s∃c P(s, c, computer science)"],
          ref: "The proposition is ∀s∃cP(s, c, computer science). This is false, since there are some mathematics majors. 真值：假。",
          cn: "真值为假：还有数学专业的学生。"
        },
        {
          k: "c",
          q: "There is a student in the class who is neither a mathematics major nor a junior.",
          mode: "short",
          ans: ["∃s∃c∃m(P(s, c, m) ∧ (c ≠ junior) ∧ (m ≠ mathematics))"],
          ref: "The proposition is ∃s∃c∃m(P(s, c, m) ∧ (c ≠ junior) ∧ (m ≠ mathematics)). This is true, since there is a sophomore majoring in computer science. 真值：真。",
          cn: "真值为真：15 名计算机科学专业的二年级学生符合。"
        },
        {
          k: "d",
          q: "Every student in the class is either a sophomore or a computer science major.",
          mode: "short",
          ans: ["∀s((∃c P(s, c, computer science)) ∨ (∃m P(s, sophomore, m)))"],
          ref: "The proposition is ∀s((∃cP(s, c, computer science)) ∨ (∃mP(s, sophomore, m))). This is false, since there is a freshman mathematics major. 真值：假。",
          cn: "真值为假：1 名数学专业大一学生不符合。"
        },
        {
          k: "e",
          q: "There is a major such that there is a student in the class in every year of study with that major.",
          mode: "short",
          ans: ["∃m∀c∃s P(s, c, m)"],
          ref: "The proposition is ∃m∀c∃sP(s, c, m). This is false. It cannot be that m is mathematics, since there is no senior mathematics major, and it cannot be that m is computer science, since there is no freshman computer science major. Nor, of course, can m be any other major. 真值：假。",
          cn: "真值为假：两个专业都缺一个年级。"
        }
      ]
    },
    {
      no: 17,
      type: "系统规格",
      q: "Express each of these system specifications using predicates, quantifiers, and logical connectives, if necessary.",
      parts: [
        {
          k: "a",
          q: "Every user has access to exactly one mailbox. (Let U(x) mean that x is a user of the system, M(x) that x is a mailbox, and A(x, y) that user x has access to mailbox y.)",
          mode: "short",
          ans: ["∀x(U(x) → ∃!y(M(y) ∧ A(x,y)))", "∀x(U(x) → ∃y(M(y) ∧ A(x,y) ∧ ∀z((M(z) ∧ A(x,z)) → z = y)))"],
          ref: "∀x(U(x) → ∃!y(M(y) ∧ A(x,y)))，等价写法：∀x(U(x) → ∃y(M(y) ∧ A(x,y) ∧ ∀z((M(z) ∧ A(x,z)) → z = y)))。",
          cn: "“exactly one”可用 ∃! 或唯一性量词刻画。"
        },
        {
          k: "b",
          q: "There is a process that continues to run during all error conditions only if the kernel is working correctly. (Let P(x) mean that x is a process, E(x) that x is an error condition, C(x, y) that process x continues to run during error condition y, and K that the kernel is working correctly.)",
          mode: "short",
          ans: ["(∃x(P(x) ∧ ∀y(E(y) → C(x,y)))) → K"],
          ref: "(∃x(P(x) ∧ ∀y(E(y) → C(x,y)))) → K，“only if” 对应 →。",
          cn: "“A only if B” 写成 A → B。"
        },
        {
          k: "c",
          q: "All users on the campus network can access all websites whose url has a .edu extension. (Let U(x) mean that x is a user of the system, N(x) that x is on the campus network, W(y) that y is a website, Edu(y) that the url of y has a .edu extension, and A(x, y) that x can access y.)",
          mode: "short",
          ans: ["∀x((U(x) ∧ N(x)) → ∀y((W(y) ∧ Edu(y)) → A(x,y)))"],
          ref: "∀x((U(x) ∧ N(x)) → ∀y((W(y) ∧ Edu(y)) → A(x,y)))。",
          cn: "两个全称量词嵌套，∀x∀y。"
        },
        {
          k: "d",
          q: "There are exactly two systems that monitor every remote server. (Let Sy(x) mean that x is a system of the monitored kind, R(y) that y is a remote server, and M(x, y) that system x monitors server y.)",
          mode: "short",
          ans: ["∃s1∃s2((s1 ≠ s2) ∧ ∀r(R(r) → (M(s1,r) ∧ M(s2,r))) ∧ ∀s(Sy(s) → ((∀r(R(r) → M(s,r))) → (s = s1 ∨ s = s2))))"],
          ref: "∃s1∃s2(s1 ≠ s2 ∧ ∀r(R(r) → (M(s1,r) ∧ M(s2,r))) ∧ ∀s(Sy(s) → ((∀r(R(r) → M(s,r))) → (s = s1 ∨ s = s2))))。",
          cn: "“恰好两个监控者”＝两个存在 + 唯一性条件。"
        },
        {
          k: "e",
          q: "No one knows the password of every user on the system except for the system administrator, who knows all passwords. (Let K(x, y) mean that person x knows the password of user y, and let SysAdm be the system administrator.)",
          mode: "short",
          ans: ["∀x(((∀u K(x,u)) ↔ x = SysAdm))"],
          ref: "∀x((∀u K(x,u)) ↔ x = SysAdm)，其中 K(x, y) 表示人 x 知道用户 y 的密码，SysAdm 为系统管理员。",
          cn: "“除了……之外没有别人”用 ↔ 把管理员刻画出来。"
        }
      ]
    },
    {
      no: 18,
      type: "系统规格",
      q: "Express each of these system specifications using predicates, quantifiers, and logical connectives, if necessary.",
      parts: [
        {
          k: "a",
          q: "At least one console must be accessible during every fault condition. (Let A(x) mean that console x is accessible and H(x) mean that fault condition x is happening.)",
          mode: "short",
          ans: ["∀f(H(f) → ∃c A(c))"],
          ref: "∀f(H(f) → ∃c A(c)), where A(x) means that console x is accessible, and H(x) means that fault condition x is happening.",
          cn: "对每个故障条件，至少有一个可访问的控制台。"
        },
        {
          k: "b",
          q: "The e-mail address of every user can be retrieved whenever the archive contains at least one message sent by every user on the system. (Let A(x) mean that the archive contains message x, S(x, y) mean that user x sent message y, and R(x) mean that the e-mail address of user x can be retrieved.)",
          mode: "short",
          ans: ["(∀u∃m(A(m) ∧ S(u,m))) → ∀u R(u)"],
          ref: "(∀u∃m(A(m) ∧ S(u,m))) → ∀u R(u), where A(x) means that the archive contains message x, S(x, y) means that user x sent message y, and R(x) means that the e-mail address of user x can be retrieved.",
          cn: "“whenever”读作蕴含 →。"
        },
        {
          k: "c",
          q: "For every security breach there is at least one mechanism that can detect that breach if and only if there is a process that has not been compromised. (Let D(x, y) mean that mechanism x can detect breach y, and C(x) mean that process x has been compromised.)",
          mode: "short",
          ans: ["(∀b∃m D(m,b)) ↔ ∃p ¬C(p)"],
          ref: "(∀b∃m D(m,b)) ↔ ∃p ¬C(p), where D(x, y) means that mechanism x can detect breach y, and C(x) means that process x has been compromised.",
          cn: "前半句与后半句之间是“当且仅当”↔。"
        },
        {
          k: "d",
          q: "There are at least two paths connecting every two distinct endpoints on the network. (Let C(p, x, y) mean that path p connects endpoint x to endpoint y.)",
          mode: "short",
          ans: ["∀x∀y((x ≠ y) → ∃p∃q((p ≠ q) ∧ C(p,x,y) ∧ C(q,x,y)))"],
          ref: "∀x∀y(x ≠ y → ∃p∃q(p ≠ q ∧ C(p, x, y) ∧ C(q, x, y))), where C(p, x, y) means that path p connects endpoint x to endpoint y.",
          cn: "“至少两条路径”需要两条不同路径 p、q。"
        },
        {
          k: "e",
          q: "No one knows the password of every user on the system except for the system administrator, who knows all passwords. (Let K(x, y) mean that person x knows the password of user y, and let SysAdm be the system administrator.)",
          mode: "short",
          ans: ["∀x(((∀u K(x,u)) ↔ x = SysAdm))"],
          ref: "∀x((∀u K(x,u)) ↔ x = SysAdm), where K(x, y) means that person x knows the password of user y and SysAdm is the system administrator.",
          cn: "与 17(e) 同型题目。"
        }
      ]
    },
    {
      no: 19,
      type: "数学命题形式化",
      q: "Express each of these statements using mathematical and logical operators, predicates, and quantifiers, where the domain consists of all integers.",
      parts: [
        {
          k: "a",
          q: "The sum of two negative integers is negative.",
          mode: "short",
          ans: ["∀x∀y((x < 0 ∧ y < 0) → (x + y < 0))"],
          ref: "∀x∀y((x < 0) ∧ (y < 0) → (x + y < 0))",
          cn: "合取与蕴含的辖域要写清楚。"
        },
        {
          k: "b",
          q: "The difference of two positive integers is not necessarily positive.",
          mode: "short",
          ans: ["¬∀x∀y((x > 0 ∧ y > 0) → (x − y > 0))", "∃x∃y((x > 0) ∧ (y > 0) ∧ (x − y ≤ 0))"],
          ref: "¬∀x∀y((x > 0) ∧ (y > 0) → (x − y > 0))，等价写法：∃x∃y((x > 0) ∧ (y > 0) ∧ (x − y ≤ 0))。",
          cn: "“不一定”＝否定整个全称条件句，而不是只否定结论。"
        },
        {
          k: "c",
          q: "The sum of the squares of two integers is greater than or equal to the square of their sum.",
          mode: "short",
          ans: ["∀x∀y(x² + y² ≥ (x + y)²)"],
          ref: "∀x∀y(x² + y² ≥ (x + y)²)",
          cn: "照题面形式化即可（该命题本身为假，例如 x = y = 1）。"
        },
        {
          k: "d",
          q: "The absolute value of the product of two integers is the product of their absolute values.",
          mode: "short",
          ans: ["∀x∀y(|xy| = |x||y|)"],
          ref: "∀x∀y(|xy| = |x||y|)",
          cn: "绝对值用竖线表示。"
        }
      ]
    },
    {
      no: 20,
      type: "数学命题形式化",
      q: "Express each of these statements using predicates, quantifiers, logical connectives, and mathematical operators where the domain consists of all integers.",
      parts: [
        {
          k: "a",
          q: "The product of two negative integers is positive.",
          mode: "short",
          ans: ["∀x∀y((x < 0 ∧ y < 0) → (xy > 0))"],
          ref: "∀x∀y((x < 0) ∧ (y < 0) → (xy > 0))",
          cn: "两个负数相乘为正。"
        },
        {
          k: "b",
          q: "The average of two positive integers is positive.",
          mode: "short",
          ans: ["∀x∀y((x > 0 ∧ y > 0) → ((x + y)/2 > 0))"],
          ref: "∀x∀y((x > 0) ∧ (y > 0) → ((x + y) / 2 > 0))",
          cn: "平均值写作 (x + y)/2。"
        },
        {
          k: "c",
          q: "The difference of two negative integers is not necessarily negative.",
          mode: "short",
          ans: ["¬∀x∀y((x < 0 ∧ y < 0) → (x − y < 0))", "∃x∃y((x < 0) ∧ (y < 0) ∧ (x − y ≥ 0))"],
          ref: "¬∀x∀y((x < 0) ∧ (y < 0) → (x − y < 0)). Note that we do not want to put the negation symbol inside (it is not true that the difference of two negative integers is never negative), nor do we want to negate just the conclusion. We could rewrite our solution by passing the negation inside, obtaining ∃x∃y((x < 0) ∧ (y < 0) ∧ (x − y ≥ 0)).",
          cn: "与 19(b) 同型：否定整个条件句。"
        },
        {
          k: "d",
          q: "The absolute value of the sum of two integers does not exceed the sum of the absolute values of these integers.",
          mode: "short",
          ans: ["∀x∀y(|x + y| ≤ |x| + |y|)"],
          ref: "∀x∀y(|x + y| ≤ |x| + |y|)",
          cn: "“不超过”对应 ≤。"
        }
      ]
    },
    {
      no: 21,
      type: "数学命题形式化",
      q: "Use predicates, quantifiers, logical connectives, and mathematical operators to express the statement that every positive integer is the sum of the squares of four integers.",
      parts: [
        {
          k: "1",
          q: "Every positive integer is the sum of the squares of four integers.",
          mode: "short",
          ans: ["∀x(x > 0 → ∃a∃b∃c∃d(x = a² + b² + c² + d²))"],
          ref: "∀x(x > 0 → ∃a∃b∃c∃d(x = a² + b² + c² + d²))，即拉格朗日四平方和定理的形式化表述。",
          cn: "四个被开方的整数要先用存在量词引入。"
        }
      ]
    },
    {
      no: 22,
      type: "数学命题形式化",
      q: "Use predicates, quantifiers, logical connectives, and mathematical operators to express the statement that there is a positive integer that is not the sum of three squares.",
      parts: [
        {
          k: "1",
          q: "There is a positive integer that is not the sum of three squares.",
          mode: "short",
          ans: ["∃x∀a∀b∀c((x > 0) ∧ x ≠ a² + b² + c²)"],
          ref: "∃x∀a∀b∀c((x > 0) ∧ x ≠ a² + b² + c²), where the domain of discourse consists of all integers.",
          cn: "“不是三个平方之和”对 a、b、c 全称否定。"
        }
      ]
    },
    {
      no: 23,
      type: "数学命题形式化",
      q: "Express each of these mathematical statements using predicates, quantifiers, logical connectives, and mathematical operators.",
      parts: [
        {
          k: "a",
          q: "The product of two negative real numbers is positive.",
          mode: "short",
          ans: ["∀x∀y((x < 0 ∧ y < 0) → (xy > 0))"],
          ref: "∀x∀y((x < 0) ∧ (y < 0) → (xy > 0))，其中论域为所有实数。",
          cn: "与第 20(a) 题同型。"
        },
        {
          k: "b",
          q: "The difference of a real number and itself is zero.",
          mode: "short",
          ans: ["∀x(x − x = 0)"],
          ref: "∀x(x − x = 0)，即 ∀x 0 = 0。",
          cn: "论域为实数时该命题为真。"
        },
        {
          k: "c",
          q: "Every positive real number has exactly two square roots.",
          mode: "short",
          ans: ["∀x(x > 0 → ∃y1∃y2((y1² = x) ∧ (y2² = x) ∧ (y1 ≠ y2) ∧ ∀z((z² = x) → (z = y1 ∨ z = y2))))"],
          ref: "∀x(x > 0 → ∃y1∃y2(y1² = x ∧ y2² = x ∧ y1 ≠ y2 ∧ ∀z(z² = x → (z = y1 ∨ z = y2))))，其中论域为所有实数。",
          cn: "“恰好两个”＝存在两个不同的根且没有第三个。"
        },
        {
          k: "d",
          q: "A negative real number does not have a square root that is a real number.",
          mode: "short",
          ans: ["¬∃x∃y((x < 0) ∧ (y² = x))"],
          ref: "¬∃x∃y((x < 0) ∧ (y² = x))，等价写法：∀x∀y((x < 0) → (y² ≠ x))。",
          cn: "也可以把否定写成 ∀x∀y((x < 0) → y² ≠ x)。"
        }
      ]
    },
    {
      no: 24,
      type: "嵌套量词",
      q: "Translate each of these nested quantifications into an English statement that expresses a mathematical fact. The domain in each case consists of all real numbers.",
      parts: [
        {
          k: "a",
          q: "∃x∀y(x + y = y)",
          mode: "short",
          ans: [
            "There exists an additive identity for the real numbers.",
            "There exists a real number that when added to every real number does not change its value."
          ],
          ref: "There exists an additive identity for the real numbers—a number that when added to every number does not change its value.",
          cn: "“加法单位元”只对实数成立（x = 0）。"
        },
        {
          k: "b",
          q: "∀x∀y(((x ≥ 0) ∧ (y < 0)) → (x − y > 0))",
          mode: "short",
          ans: [
            "A nonnegative number minus a negative number is positive.",
            "For every pair of real numbers x and y, if x is nonnegative and y is negative, then x − y is positive."
          ],
          ref: "A nonnegative number minus a negative number is positive. (Equivalently: for every real number x and real number y, if x is nonnegative and y is negative, then the difference x − y is positive.)",
          cn: "该命题为真。"
        },
        {
          k: "c",
          q: "∃x∃y(((x ≤ 0) ∧ (y ≤ 0)) ∧ (x − y > 0))",
          mode: "short",
          ans: [
            "The difference of two nonpositive numbers is not necessarily nonpositive.",
            "There exist two nonpositive real numbers whose difference is positive."
          ],
          ref: "The difference of two nonpositive numbers is not necessarily nonpositive.",
          cn: "∃ 只需要一组例子，例如 x = −1, y = −2。"
        },
        {
          k: "d",
          q: "∀x∀y(((x ≠ 0) ∧ (y ≠ 0)) ↔ (xy ≠ 0))",
          mode: "short",
          ans: [
            "The product of two numbers is nonzero if and only if both factors are nonzero.",
            "For every two real numbers x and y, the product xy is nonzero if and only if both x and y are nonzero."
          ],
          ref: "The product of two numbers is nonzero if and only if both factors are nonzero.",
          cn: "↔ 表示“当且仅当”。"
        }
      ]
    },
    {
      no: 25,
      type: "嵌套量词",
      q: "Translate each of these nested quantifications into an English statement that expresses a mathematical fact. The domain in each case consists of all real numbers.",
      parts: [
        {
          k: "a",
          q: "∃x∀y(xy = y)",
          mode: "short",
          ans: [
            "There exists a multiplicative identity for the real numbers.",
            "There exists a real number that when multiplied by every real number gives that number."
          ],
          ref: "There exists a multiplicative identity for the real numbers—a number that when multiplied by every number gives that number.",
          cn: "取 x = 1 即可，注意与第 24(a) 题的加法单位元区分。"
        },
        {
          k: "b",
          q: "∀x∀y(((x < 0) ∧ (y < 0)) → (xy > 0))",
          mode: "short",
          ans: [
            "The product of two negative real numbers is positive.",
            "For every pair of real numbers x and y, if both are negative, then their product is positive."
          ],
          ref: "The product of two negative real numbers is positive.",
          cn: "该命题为真。"
        },
        {
          k: "c",
          q: "∃x∃y((x² > y) ∧ (x < y))",
          mode: "short",
          ans: [
            "There exist two real numbers x and y such that the square of x is greater than y while x itself is less than y.",
            "There are real numbers x and y such that x squared is larger than y but x is smaller than y."
          ],
          ref: "There exist two real numbers x and y such that the square of x is greater than y while x is less than y.",
          cn: "两个存在量词作用在同一对 x、y 上。"
        },
        {
          k: "d",
          q: "∀x∀y∃z(x + y = z)",
          mode: "short",
          ans: [
            "The sum of any two real numbers is a real number.",
            "For every pair of real numbers x and y there exists a real number z with x + y = z."
          ],
          ref: "The sum of any two real numbers is a real number.",
          cn: "z 的存在性对每个 x、y 都成立。"
        }
      ]
    },
    {
      no: 26,
      type: "真值判断",
      q: "Let Q(x, y) be the statement “x + y = x − y.” If the domain for both variables consists of all integers, what are the truth values?",
      parts: [
        {
          k: "a",
          q: "Q(1, 1)",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since 1 + 1 ≠ 1 − 1.",
          cn: "1 + 1 = 2，而 1 − 1 = 0。"
        },
        {
          k: "b",
          q: "Q(2, 0)",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since 2 + 0 = 2 − 0.",
          cn: "两边都等于 2。"
        },
        {
          k: "c",
          q: "∀y Q(1, y)",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since there are many values of y for which 1 + y ≠ 1 − y.",
          cn: "等式 1 + y = 1 − y 只有 y = 0 成立。"
        },
        {
          k: "d",
          q: "∃x Q(x, 2)",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since the equation x + 2 = x − 2 has no solution.",
          cn: "x 被消掉，方程无解。"
        },
        {
          k: "e",
          q: "∃x ∃y Q(x, y)",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since we can take x = y = 0.",
          cn: "取 x = y = 0。"
        },
        {
          k: "f",
          q: "∀x ∃y Q(x, y)",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since we can take y = 0 for each x.",
          cn: "对每个 x 取 y = 0 即可。"
        },
        {
          k: "g",
          q: "∃y ∀x Q(x, y)",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since we can take y = 0.",
          cn: "存在一个 y（取 0）使所有 x 都成立。"
        },
        {
          k: "h",
          q: "∀y ∃x Q(x, y)",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since part (d) was false.",
          cn: "y = 2 时不存在 x，与 (d) 一致。"
        },
        {
          k: "i",
          q: "∀x ∀y Q(x, y)",
          mode: "tf",
          ans: ["false"],
          ref: "This is certainly false.",
          cn: "取 x = y = 0 以外的情形，如 Q(1, 1) 为假。"
        }
      ]
    },
    {
      no: 27,
      type: "真值判断",
      q: "Determine the truth value of each of these statements if the domain for all variables consists of all integers.",
      parts: [
        {
          k: "a",
          q: "∀n ∃m (n² < m)",
          mode: "tf",
          ans: ["true"],
          ref: "真。对每个整数 n，取 m = n² + 1 即有 n² < m。",
          cn: "构造 m = n² + 1。"
        },
        {
          k: "b",
          q: "∃n ∀m (n < m²)",
          mode: "tf",
          ans: ["true"],
          ref: "真。取 n = −1：由于 m² ≥ 0 > −1，故对一切整数 m 都有 n < m²。",
          cn: "关键：n = 0 时 m = 0 会失败，必须取 n = −1。"
        },
        {
          k: "c",
          q: "∀n ∃m (n + m = 0)",
          mode: "tf",
          ans: ["true"],
          ref: "真。对每个整数 n，取 m = −n 即可。",
          cn: "相反数总能取到。"
        },
        {
          k: "d",
          q: "∃n ∀m (nm = m)",
          mode: "tf",
          ans: ["true"],
          ref: "真。取 n = 1，则 nm = m 对一切 m 成立。",
          cn: "n = 1 是乘法单位元。"
        },
        {
          k: "e",
          q: "∃n ∃m (n² + m² = 5)",
          mode: "tf",
          ans: ["true"],
          ref: "真。取 n = 1, m = 2，则 1² + 2² = 5。",
          cn: "5 = 1 + 4。"
        },
        {
          k: "f",
          q: "∃n ∃m (n² + m² = 6)",
          mode: "tf",
          ans: ["false"],
          ref: "假。整数的平方只能取 0, 1, 4, 9, …，两个平方之和不可能为 6（可取到的和为 0, 1, 2, 4, 5, 8, …）。",
          cn: "枚举平方的可能取值即可排除。"
        },
        {
          k: "g",
          q: "∃n ∃m ((n + m = 4) ∧ (n − m = 1))",
          mode: "tf",
          ans: ["false"],
          ref: "假。两式相加得 2n = 5，即 n = 2.5，不是整数，故无整数解。",
          cn: "注意两式联立后的奇偶性。"
        },
        {
          k: "h",
          q: "∃n ∃m ((n + m = 4) ∧ (n − m = 2))",
          mode: "tf",
          ans: ["true"],
          ref: "真。两式相加得 2n = 6，即 n = 3；代回得 m = 1，此时 n + m = 4 且 n − m = 2。",
          cn: "与 (g) 对比：n = 3, m = 1 是整数解。"
        },
        {
          k: "i",
          q: "∀n ∀m ∃p (p = (m + n)/2)",
          mode: "tf",
          ans: ["false"],
          ref: "假。当 m + n 为奇数时其一半不是整数，例如 n = 0, m = 1 时需要 p = 1/2，不存在整数 p。",
          cn: "除以 2 的问题：奇偶性。"
        }
      ]
    },
    {
      no: 28,
      type: "真值判断",
      q: "Determine the truth value of each of these statements if the domain of each variable consists of all real numbers.",
      parts: [
        {
          k: "a",
          q: "∀x ∃y (x² = y)",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since for a given real x, let y = x².",
          cn: "取 y = x²。"
        },
        {
          k: "b",
          q: "∀x ∃y (x = y²)",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since no such y exists if x is negative.",
          cn: "负数没有实平方根。"
        },
        {
          k: "c",
          q: "∃x ∀y (xy = 0)",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since we can set x = 0.",
          cn: "取 x = 0。"
        },
        {
          k: "d",
          q: "∃x ∃y (x + y ≠ y + x)",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since the commutative law for addition always holds.",
          cn: "加法交换律恒成立。"
        },
        {
          k: "e",
          q: "∀x ((x ≠ 0) → ∃y (xy = 1))",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since we can take y = 1/x.",
          cn: "取 y = 1/x，前提保证 x ≠ 0。"
        },
        {
          k: "f",
          q: "∃x ∀y ((y ≠ 0) → xy = 1)",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since the reciprocal of y depends on y—there is not one x that works for all y.",
          cn: "不存在统一的 x。"
        },
        {
          k: "g",
          q: "∀x ∃y (x + y = 1)",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since we can let y = 1 − x.",
          cn: "取 y = 1 − x。"
        },
        {
          k: "h",
          q: "∃x ∃y ((x + 2y = 2) ∧ (2x + 4y = 5))",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since this system of equations is inconsistent.",
          cn: "第一式乘 2 得 2x + 4y = 4，与第二式矛盾。"
        },
        {
          k: "i",
          q: "∀x ∃y ((x + y = 2) ∧ (2x − y = 1))",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since this system has only one solution. If x = 0, for example, then no y satisfies y = 2 ∧ −y = 1.",
          cn: "方程组只有 x = 1, y = 1 一组解，对一般 x 无解。"
        },
        {
          k: "j",
          q: "∀x ∀y ∃z (z = (x + y)/2)",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since we can let z = (x + y)/2.",
          cn: "取 z = (x + y)/2。"
        }
      ]
    },
    {
      no: 29,
      type: "量词翻译",
      q: "Suppose the domain of the propositional function P(x, y) consists of pairs x and y, where x is 1, 2, or 3 and y is 1, 2, or 3. Write out these propositions using disjunctions and conjunctions.",
      parts: [
        {
          k: "a",
          q: "∀x ∀y P(x, y)",
          mode: "short",
          ans: ["P(1,1) ∧ P(1,2) ∧ P(1,3) ∧ P(2,1) ∧ P(2,2) ∧ P(2,3) ∧ P(3,1) ∧ P(3,2) ∧ P(3,3)"],
          ref: "P(1,1) ∧ P(1,2) ∧ P(1,3) ∧ P(2,1) ∧ P(2,2) ∧ P(2,3) ∧ P(3,1) ∧ P(3,2) ∧ P(3,3)：九个命题全部为真。",
          cn: "全称量词展开成 9 个合取项。"
        },
        {
          k: "b",
          q: "∃x ∃y P(x, y)",
          mode: "short",
          ans: ["P(1,1) ∨ P(1,2) ∨ P(1,3) ∨ P(2,1) ∨ P(2,2) ∨ P(2,3) ∨ P(3,1) ∨ P(3,2) ∨ P(3,3)"],
          ref: "P(1,1) ∨ P(1,2) ∨ P(1,3) ∨ P(2,1) ∨ P(2,2) ∨ P(2,3) ∨ P(3,1) ∨ P(3,2) ∨ P(3,3)：九个命题至少有一个为真。",
          cn: "存在量词展开成 9 个析取项。"
        },
        {
          k: "c",
          q: "∃x ∀y P(x, y)",
          mode: "short",
          ans: ["(P(1,1) ∧ P(1,2) ∧ P(1,3)) ∨ (P(2,1) ∧ P(2,2) ∧ P(2,3)) ∨ (P(3,1) ∧ P(3,2) ∧ P(3,3))"],
          ref: "(P(1,1) ∧ P(1,2) ∧ P(1,3)) ∨ (P(2,1) ∧ P(2,2) ∧ P(2,3)) ∨ (P(3,1) ∧ P(3,2) ∧ P(3,3))：存在一行整行为真。",
          cn: "先对 y 取合取（同一行的三个），再对 x 取析取。"
        },
        {
          k: "d",
          q: "∀y ∃x P(x, y)",
          mode: "short",
          ans: ["(P(1,1) ∨ P(2,1) ∨ P(3,1)) ∧ (P(1,2) ∨ P(2,2) ∨ P(3,2)) ∧ (P(1,3) ∨ P(2,3) ∨ P(3,3))"],
          ref: "(P(1,1) ∨ P(2,1) ∨ P(3,1)) ∧ (P(1,2) ∨ P(2,2) ∨ P(3,2)) ∧ (P(1,3) ∨ P(2,3) ∨ P(3,3))：每一列至少有一个为真。",
          cn: "先对 x 取析取（同一列的三个），再对 y 取合取。"
        }
      ]
    },
    {
      no: 30,
      type: "否定化简",
      q: "Rewrite each of these statements so that negations appear only within predicates (that is, so that no negation is outside a quantifier or an expression involving logical connectives).",
      parts: [
        {
          k: "a",
          q: "¬∃y ∃x P(x, y)",
          mode: "short",
          ans: ["∀y ∀x ¬P(x, y)"],
          ref: "∀y ∀x ¬P(x, y)。用 ¬∃ 换成 ∀¬ 的等价式，再把量词依次提出。",
          cn: "¬∃ → ∀¬。"
        },
        {
          k: "b",
          q: "¬∀x ∃y P(x, y)",
          mode: "short",
          ans: ["∃x ∀y ¬P(x, y)"],
          ref: "∃x ∀y ¬P(x, y)。用 ¬∀ 换成 ∃¬ 的等价式。",
          cn: "¬∀ → ∃¬，量词个数不变。"
        },
        {
          k: "c",
          q: "¬∃y (Q(y) ∧ ∀x ¬R(x, y))",
          mode: "short",
          ans: ["∀y (¬Q(y) ∨ ∃x R(x, y))"],
          ref: "∀y (¬Q(y) ∨ ∃x R(x, y))：先把 ¬∃ 换成 ∀¬，再用 De Morgan 律把 ¬(A ∧ B) 换成 ¬A ∨ ¬B，并把 ¬∀x ¬R 换成 ∃x R。",
          cn: "De Morgan：¬(A ∧ B) ≡ ¬A ∨ ¬B。"
        },
        {
          k: "d",
          q: "¬∃y (∃x R(x, y) ∨ ∀x S(x, y))",
          mode: "short",
          ans: ["∀y (∀x ¬R(x, y) ∧ ∃x ¬S(x, y))"],
          ref: "∀y (∀x ¬R(x, y) ∧ ∃x ¬S(x, y))：¬∃ 换成 ∀¬，De Morgan 律给出 ¬(A ∨ B) ≡ ¬A ∧ ¬B，再把 ¬∀x S 换成 ∃x ¬S。",
          cn: "¬(A ∨ B) ≡ ¬A ∧ ¬B。"
        },
        {
          k: "e",
          q: "¬∃y (∀x ∃z T(x, y, z) ∨ ∃x ∀z U(x, y, z))",
          mode: "short",
          ans: ["∀y (∃x ∀z ¬T(x, y, z) ∧ ∀x ∃z ¬U(x, y, z))"],
          ref: "∀y (∃x ∀z ¬T(x, y, z) ∧ ∀x ∃z ¬U(x, y, z))：把 ¬∃ 换成 ∀¬、¬∀ 换成 ∃¬，再用 De Morgan 律得到合取。",
          cn: "两个 ¬∀x 分别变成 ∃x¬。"
        }
      ]
    }
  ]
});
