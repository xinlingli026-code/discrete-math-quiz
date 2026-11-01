window.BANK.push({
  sec: "1.5",
  title: "Nested Quantifiers",
  titleCn: "嵌套量词",
  tips: [
    "否定内推规则：¬∀x A ≡ ∃x¬A，¬∃x A ≡ ∀x¬A；否定号每穿过一个量词就要改变量词类型，再配合德摩根律把 ¬ 推入谓词。",
    "量词顺序是关键：∀x∃y 与 ∃x∀y 一般不可交换，翻译时先找“每个/所有”再找“存在/某个”，且嵌套次序必须与英文语序一致。",
    "常见句式翻译：every…some… 对应 ∀x∃y；there is…every… 对应 ∃x∀y；“至少一个”与“恰好一个”要用谓词内部再量化来表达。",
    "命题否定化为简单英文时，不能只写“it is not the case that”，要把否定直接作用到具体对象上，例如“there is a student who has not …”。",
    "前束范式（PNF）：所有量词必须提到最前面且只出现一次；常用工具是 ∃xA ∧ ∃xB ≡ ∃x(A∧B)、∀xA ∨ ∀xB ≡ ∀x∀y(A(x)∨B(y))。",
    "反例法判断全称命题为假：只需在整数/实数论域中给出一组具体值使谓词为假，注意 x² = y² 不推出 x = y（可用 x = 2, y = -2）。",
    "唯一存在 ∃!xP(x) 的展开式为 ∃x(P(x) ∧ ∀y(P(y) → y = x))，等价写法 ∃x∀y(P(y) ↔ y = x))；注意 ∃ 与 ∀ 不可互换。",
    "论域决定结论：同一公式在非零实数、非零整数、正实数下真假可能不同（如 ∀x∃y(xy = 1) 在整数域为假）。"
  ],
  items: [
    {
      no: 31,
      type: "否定化简",
      q: "Express the negations of each of these statements so that all negation symbols immediately precede predicates.",
      parts: [
        {
          k: "a",
          q: "∀x ∃y ∀z T(x, y, z)",
          mode: "short",
          ans: ["∃x ∀y ∃z ¬T(x, y, z)"],
          ref: "Negating changes each quantifier in turn: ¬∀x ∃y ∀z T(x,y,z) ≡ ∃x ¬∃y ∀z T(x,y,z) ≡ ∃x ∀y ¬∀z T(x,y,z) ≡ ∃x ∀y ∃z ¬T(x,y,z)."
        },
        {
          k: "b",
          q: "∀x ∃y P(x, y) ∨ ∀x ∃y Q(x, y)",
          mode: "short",
          ans: ["∀x ∃y ¬P(x, y) ∧ ∀x ∃y ¬Q(x, y)"],
          ref: "De Morgan's law gives ¬(∀x∃y P(x,y) ∨ ∀x∃y Q(x,y)) ≡ ¬∀x∃y P(x,y) ∧ ¬∀x∃y Q(x,y), and pushing each negation inward gives ∀x∃y ¬P(x,y) ∧ ∀x∃y ¬Q(x,y)."
        },
        {
          k: "c",
          q: "∀x ∃y (P(x, y) ∧ ∃z R(x, y, z))",
          mode: "short",
          ans: ["∃x ∀y (¬P(x, y) ∨ ∀z ¬R(x, y, z))"],
          ref: "¬∀x∃y(P(x,y) ∧ ∃z R(x,y,z)) ≡ ∃x∀y ¬(P(x,y) ∧ ∃z R(x,y,z)) ≡ ∃x∀y(¬P(x,y) ∨ ¬∃z R(x,y,z)) ≡ ∃x∀y(¬P(x,y) ∨ ∀z ¬R(x,y,z))."
        },
        {
          k: "d",
          q: "∀x ∃y (P(x, y) → Q(x, y))",
          mode: "short",
          ans: ["∃x ∀y (P(x, y) ∧ ¬Q(x, y))"],
          ref: "¬∀x∃y(P(x,y) → Q(x,y)) ≡ ∃x∀y ¬(P(x,y) → Q(x,y)) ≡ ∃x∀y(P(x,y) ∧ ¬Q(x,y)), using ¬(p → q) ≡ p ∧ ¬q."
        }
      ]
    },
    {
      no: 32,
      type: "否定化简",
      q: "Express the negations of each of these statements so that all negation symbols immediately precede predicates.",
      parts: [
        {
          k: "a",
          q: "∃z ∀y ∀x T(x, y, z)",
          mode: "short",
          ans: ["∀z ∃y ∃x ¬T(x, y, z)"],
          ref: "Negating changes each quantifier it passes: ¬∃z ∀y ∀x T(x,y,z) ≡ ∀z ¬∀y ∀x T(x,y,z) ≡ ∀z ∃y ¬∀x T(x,y,z) ≡ ∀z ∃y ∃x ¬T(x,y,z)."
        },
        {
          k: "b",
          q: "∃x ∃y P(x, y) ∧ ∀x ∀y Q(x, y)",
          mode: "short",
          ans: ["∀x ∀y ¬P(x, y) ∨ ∃x ∃y ¬Q(x, y)"],
          ref: "¬(∃x∃y P(x,y) ∧ ∀x∀y Q(x,y)) ≡ ¬∃x∃y P(x,y) ∨ ¬∀x∀y Q(x,y) ≡ ∀x¬∃y P(x,y) ∨ ∃x¬∀y Q(x,y) ≡ ∀x∀y ¬P(x,y) ∨ ∃x∃y ¬Q(x,y)."
        },
        {
          k: "c",
          q: "∃x ∃y (Q(x, y) ↔ Q(y, x))",
          mode: "short",
          ans: ["∀x ∀y (¬Q(x, y) ↔ Q(y, x))"],
          ref: "¬∃x∃y(Q(x,y) ↔ Q(y,x)) ≡ ∀x¬∃y(Q(x,y) ↔ Q(y,x)) ≡ ∀x∀y ¬(Q(x,y) ↔ Q(y,x)) ≡ ∀x∀y(¬Q(x,y) ↔ Q(y,x)), using ¬(p ↔ q) ≡ ¬p ↔ q."
        },
        {
          k: "d",
          q: "∀y ∃x ∃z (T(x, y, z) ∨ Q(x, y))",
          mode: "short",
          ans: ["∃y ∀x ∀z (¬T(x, y, z) ∧ ¬Q(x, y))"],
          ref: "¬∀y∃x∃z(T(x,y,z) ∨ Q(x,y)) ≡ ∃y¬∃x∃z(T(x,y,z) ∨ Q(x,y)) ≡ ∃y∀x¬∃z(T(x,y,z) ∨ Q(x,y)) ≡ ∃y∀x∀z¬(T(x,y,z) ∨ Q(x,y)) ≡ ∃y∀x∀z(¬T(x,y,z) ∧ ¬Q(x,y))."
        }
      ]
    },
    {
      no: 33,
      type: "否定化简",
      q: "Rewrite each of these statements so that negations appear only within predicates (that is, so that no negation is outside a quantifier or an expression involving logical connectives).",
      parts: [
        {
          k: "a",
          q: "¬∀x ∀y P(x, y)",
          mode: "short",
          ans: ["∃x ∃y ¬P(x, y)"],
          ref: "¬∀x∀y P(x,y) ≡ ∃x¬∀y P(x,y) ≡ ∃x∃y ¬P(x,y)."
        },
        {
          k: "b",
          q: "¬∀y ∃x P(x, y)",
          mode: "short",
          ans: ["∃y ∀x ¬P(x, y)"],
          ref: "¬∀y∃x P(x,y) ≡ ∃y¬∃x P(x,y) ≡ ∃y∀x ¬P(x,y)."
        },
        {
          k: "c",
          q: "¬∀y ∀x (P(x, y) ∨ Q(x, y))",
          mode: "short",
          ans: ["∃y ∃x (¬P(x, y) ∧ ¬Q(x, y))"],
          ref: "¬∀y∀x(P(x,y) ∨ Q(x,y)) ≡ ∃y∃x ¬(P(x,y) ∨ Q(x,y)) ≡ ∃y∃x(¬P(x,y) ∧ ¬Q(x,y))."
        },
        {
          k: "d",
          q: "¬(∃x ∃y ¬P(x, y) ∧ ∀x ∀y Q(x, y))",
          mode: "short",
          ans: ["∀x ∀y P(x, y) ∨ ∃x ∃y ¬Q(x, y)"],
          ref: "¬(∃x∃y¬P(x,y) ∧ ∀x∀y Q(x,y)) ≡ ¬∃x∃y¬P(x,y) ∨ ¬∀x∀y Q(x,y) ≡ ∀x∀y P(x,y) ∨ ∃x∃y ¬Q(x,y)."
        },
        {
          k: "e",
          q: "¬∀x (∃y ∀z P(x, y, z) ∧ ∃z ∀y P(x, y, z))",
          mode: "short",
          ans: ["∃x (∀y ∃z ¬P(x, y, z) ∨ ∀z ∃y ¬P(x, y, z))"],
          ref: "¬∀x(∃y∀z P(x,y,z) ∧ ∃z∀y P(x,y,z)) ≡ ∃x¬(∃y∀z P(x,y,z) ∧ ∃z∀y P(x,y,z)) ≡ ∃x(¬∃y∀z P(x,y,z) ∨ ¬∃z∀y P(x,y,z)) ≡ ∃x(∀y∃z ¬P(x,y,z) ∨ ∀z∃y ¬P(x,y,z))."
        }
      ]
    },
    {
      no: 34,
      type: "真值判断",
      q: "Find a common domain for the variables x, y, and z for which the statement ∀x ∀y ((x ≠ y) → ∀z ((z = x) ∨ (z = y))) is true and another domain for which it is false.",
      parts: [
        {
          k: "1",
          q: "Give one domain for which the statement is true and another domain for which it is false.",
          mode: "self",
          ref: "The logical expression is asserting that the domain consists of at most two members. (It is saying that whenever you have two unequal objects, any object has to be one of those two. Note that it is vacuously true for domains with one element.) Therefore any domain having one or two members will make it true (such as the female members of the United States Supreme Court in 2005), and any domain with more than two members will make it false (such as all members of the United States Supreme Court in 2005)."
        }
      ]
    },
    {
      no: 35,
      type: "真值判断",
      q: "Find a common domain for the variables x, y, z, and w for which the statement ∀x ∀y ∀z ∃w ((w ≠ x) ∧ (w ≠ y) ∧ (w ≠ z)) is true and another common domain for these variables for which it is false.",
      parts: [
        {
          k: "1",
          q: "Give one common domain for x, y, z, w for which the statement is true and another for which it is false.",
          mode: "self",
          ref: "The statement says that for any three elements x, y, z of the domain there is a fourth element w different from all three, so a domain of four elements (for example {1, 2, 3, 4}) makes it true: x, y, z occupy at most three of the four elements, so a fourth one is available. A domain with three elements (for example {1, 2, 3}) makes it false, because for x = 1, y = 2, z = 3 there is no w left over. The domain of all integers (or all reals) also makes it false.",
          cn: "注意“至少四个元素才是真”；三个元素的论域即可构造反例。"
        }
      ]
    },
    {
      no: 36,
      type: "数学命题形式化",
      q: "Express each of these statements using quantifiers. Then form the negation of the statement so that no negation is to the left of a quantifier. Next, express the negation in simple English. (Do not simply use the phrase “It is not the case that.”)",
      parts: [
        {
          k: "a",
          q: "No one has lost more than one thousand dollars playing the lottery.",
          mode: "short",
          ans: [
            "Someone has lost more than $1000 playing the lottery.",
            "∃x ∃y (y > 1000 ∧ L(x, y))"
          ],
          ref: "Let L(x, y) mean that person x has lost y dollars playing the lottery. The original statement is ¬∃x ∃y (y > 1000 ∧ L(x, y)). Its negation is ∃x ∃y (y > 1000 ∧ L(x, y)); someone has lost more than $1000 playing the lottery.",
          cn: "原句已含否定，否定后只需把 ¬ 去掉并把量词推到最前。"
        },
        {
          k: "b",
          q: "There is a student in this class who has chatted with exactly one other student.",
          mode: "short",
          ans: [
            "Everybody in this class has either chatted with no one else or has chatted with two or more others.",
            "∀x ∀y (y ≠ x → ∃z (z ≠ x ∧ ¬(z = y ↔ C(x, z))))"
          ],
          ref: "Let C(x, y) mean that person x has chatted with person y. The given statement is ∃x ∃y (y ≠ x ∧ ∀z (z ≠ x → (z = y ↔ C(x, z)))). The negation is therefore ∀x ∀y (y ≠ x → ∃z (z ≠ x ∧ ¬(z = y ↔ C(x, z)))). In English, everybody in this class has either chatted with no one else or has chatted with two or more others."
        },
        {
          k: "c",
          q: "No student in this class has sent e-mail to exactly two other students in this class.",
          mode: "short",
          ans: [
            "Some student in this class has sent e-mail to exactly two other students in this class.",
            "∃x ∃y ∃z (y ≠ z ∧ x ≠ y ∧ x ≠ z ∧ ∀w (w ≠ x → (E(x, w) ↔ (w = y ∨ w = z))))"
          ],
          ref: "Let E(x, y) mean that person x has sent e-mail to person y. The given statement is ¬∃x ∃y ∃z (y ≠ z ∧ x ≠ y ∧ x ≠ z ∧ ∀w (w ≠ x → (E(x, w) ↔ (w = y ∨ w = z)))). The negation is obviously ∃x ∃y ∃z (y ≠ z ∧ x ≠ y ∧ x ≠ z ∧ ∀w (w ≠ x → (E(x, w) ↔ (w = y ∨ w = z)))). In English, some student in this class has sent e-mail to exactly two other students in this class."
        },
        {
          k: "d",
          q: "Some student has solved every exercise in this book.",
          mode: "short",
          ans: [
            "For every student in this class, there is some exercise that he or she has not solved.",
            "∀x ∃y ¬S(x, y)"
          ],
          ref: "Let S(x, y) mean that student x has solved exercise y. The statement is ∃x ∀y S(x, y). The negation is ∀x ∃y ¬S(x, y). In English, for every student in this class, there is some exercise that he or she has not solved. (One could also interpret the given statement as asserting that for every exercise, there exists a student — perhaps a different one for each exercise — who has solved it; in that case the order of the quantifiers would be reversed.)"
        },
        {
          k: "e",
          q: "No student has solved at least one exercise in every section of this book.",
          mode: "short",
          ans: [
            "Some student has solved at least one exercise in every section of this book.",
            "∃x ∀z ∃y (B(y, z) ∧ S(x, y))"
          ],
          ref: "Let S(x, y) mean that student x has solved exercise y, and let B(y, z) mean that exercise y is in section z of the book. The statement is ¬∃x ∀z ∃y (B(y, z) ∧ S(x, y)). The negation is of course ∃x ∀z ∃y (B(y, z) ∧ S(x, y)). In English, some student has solved at least one exercise in every section of this book."
        }
      ]
    },
    {
      no: 37,
      type: "数学命题形式化",
      q: "Express each of these statements using quantifiers. Then form the negation of the statement so that no negation is to the left of a quantifier. Next, express the negation in simple English. (Do not simply use the phrase “It is not the case that.”)",
      parts: [
        {
          k: "a",
          q: "Every student in this class has taken exactly two mathematics classes at this school.",
          mode: "short",
          ans: [
            "Some student in this class has not taken exactly two mathematics classes at this school.",
            "∃x ∀y ∀z (y = z ∨ ¬T(x, y) ∨ ¬T(x, z) ∨ ∃w (w ≠ y ∧ w ≠ z ∧ T(x, w)))"
          ],
          ref: "Let T(x, y) mean that student x has taken course y. The statement is ∀x ∃y ∃z (y ≠ z ∧ T(x, y) ∧ T(x, z) ∧ ∀w ((w ≠ y ∧ w ≠ z) → ¬T(x, w))). Negating gives ∃x ∀y ∀z (y = z ∨ ¬T(x, y) ∨ ¬T(x, z) ∨ ∃w (w ≠ y ∧ w ≠ z ∧ T(x, w))). In English: some student in this class has not taken exactly two mathematics classes at this school (that is, has taken fewer than two or more than two).",
          cn: "“恰好两个”的否定要拆成“少于两个或多于两个”，不能直接写 ¬(恰好两个)。"
        },
        {
          k: "b",
          q: "Someone has visited every country in the world except Libya.",
          mode: "short",
          ans: [
            "For every person, there is some country other than Libya that the person has not visited.",
            "∀x ∃y (y ≠ Libya ∧ ¬V(x, y))"
          ],
          ref: "Let V(x, y) mean that person x has visited country y. The statement is ∃x ∀y (y ≠ Libya → V(x, y)). Its negation is ∀x ∃y (y ≠ Libya ∧ ¬V(x, y)). In English: every person has failed to visit some country other than Libya.",
          cn: "“except Libya”写成 y ≠ Libya 出现在前件位置，否定后该条件必须保留。"
        },
        {
          k: "c",
          q: "No one has climbed every mountain in the Himalayas.",
          mode: "short",
          ans: [
            "Someone has climbed every mountain in the Himalayas.",
            "∃x ∀y (M(y) → C(x, y))"
          ],
          ref: "Let M(y) mean that y is a mountain in the Himalayas and let C(x, y) mean that person x has climbed y. The statement is ¬∃x ∀y (M(y) → C(x, y)), equivalently ∀x ∃y (M(y) ∧ ¬C(x, y)). Its negation is ∃x ∀y (M(y) → C(x, y)). In English: someone has climbed every mountain in the Himalayas."
        },
        {
          k: "d",
          q: "Every movie actor has either been in a movie with Kevin Bacon or has been in a movie with someone who has been in a movie with Kevin Bacon.",
          mode: "short",
          ans: [
            "There is a movie actor who has never been in a movie with Kevin Bacon and who has never been in a movie with anyone who has been in a movie with Kevin Bacon.",
            "∃x (¬A(x, k) ∧ ∀y (¬A(x, y) ∨ ¬A(y, k)))"
          ],
          ref: "Let A(x, y) mean that actor x has been in a movie with actor y, and let k denote Kevin Bacon. The statement is ∀x (A(x, k) ∨ ∃y (A(x, y) ∧ A(y, k))). Its negation is ∃x (¬A(x, k) ∧ ∀y (¬A(x, y) ∨ ¬A(y, k))). In English: there is a movie actor who has never been in a movie with Kevin Bacon and who has never been in a movie with anyone who has been in a movie with Kevin Bacon."
        }
      ]
    },
    {
      no: 38,
      type: "否定化简",
      q: "Express the negations of these propositions using quantifiers, and in English.",
      parts: [
        {
          k: "a",
          q: "Every student in this class likes mathematics.",
          mode: "short",
          ans: [
            "Some student in this class does not like mathematics.",
            "∃x ¬L(x)"
          ],
          ref: "In English, the negation is “Some student in this class does not like mathematics.” With the obvious propositional function, this is ∃x ¬L(x)."
        },
        {
          k: "b",
          q: "There is a student in this class who has never seen a computer.",
          mode: "short",
          ans: [
            "Every student in this class has seen a computer.",
            "∀x S(x)"
          ],
          ref: "In English, the negation is “Every student in this class has seen a computer.” With the obvious propositional function, this is ∀x S(x)."
        },
        {
          k: "c",
          q: "There is a student in this class who has taken every mathematics course offered at this school.",
          mode: "short",
          ans: [
            "For every student in this class, there is a mathematics course that this student has not taken.",
            "∀x ∃c ¬T(x, c)"
          ],
          ref: "In English, the negation is “For every student in this class, there is a mathematics course that this student has not taken.” With the obvious propositional function, this is ∀x ∃c ¬T(x, c)."
        },
        {
          k: "d",
          q: "There is a student in this class who has been in at least one room of every building on campus.",
          mode: "short",
          ans: [
            "For every student there is a building such that for every room in that building, the student has not been in that room.",
            "∀x ∃y ∀z (¬P(z, y) ∨ ¬Q(x, z))",
            "∀x ∃y ∀z (P(z, y) → ¬Q(x, z))"
          ],
          ref: "As in part (f) of Exercise 15, let P(z, y) be “Room z is in building y,” and let Q(x, z) be “Student x has been in room z.” Then the original statement is ∃x ∀y ∃z (P(z, y) ∧ Q(x, z)). To form the negation, we change all the quantifiers and put the negation on the inside, then apply De Morgan's law. The negation is therefore ∀x ∃y ∀z (¬P(z, y) ∨ ¬Q(x, z)), which is also equivalent to ∀x ∃y ∀z (P(z, y) → ¬Q(x, z)). In English, this could be read, “For every student there is a building such that for every room in that building, the student has not been in that room.”"
        }
      ]
    },
    {
      no: 39,
      type: "反例",
      q: "Find a counterexample, if possible, to these universally quantified statements, where the domain for all variables consists of all integers.",
      parts: [
        {
          k: "a",
          q: "∀x ∀y (x² = y² → x = y)",
          mode: "short",
          ans: ["x = 2, y = -2", "x = 1, y = -1", "x = 2, y = -2 (or any x ≠ |y|)"],
          ref: "Take x = 2 and y = -2: then x² = y² = 4 but x ≠ y, so the implication fails. (Any pair with x = -y and x ≠ 0 works.)"
        },
        {
          k: "b",
          q: "∀x ∃y (y² = x)",
          mode: "short",
          ans: ["x = -1", "x = -1 (no integer y satisfies y² = -1)"],
          ref: "Take x = -1. No integer y has y² = -1, since squares are never negative, so the existential part fails and x = -1 is a counterexample."
        },
        {
          k: "c",
          q: "∀x ∀y (xy ≥ x)",
          mode: "short",
          ans: ["x = 1, y = -1", "x = 1, y = -1 (then xy = -1 < x = 1)"],
          ref: "Take x = 1 and y = -1: then xy = -1 < x = 1, so the statement xy ≥ x is false and the universally quantified claim has a counterexample."
        }
      ]
    },
    {
      no: 40,
      type: "反例",
      q: "Find a counterexample, if possible, to these universally quantified statements, where the domain for all variables consists of all integers.",
      parts: [
        {
          k: "a",
          q: "∀x ∃y (x = 1/y)",
          mode: "short",
          ans: ["x = 2", "x = 2 (the only solution is y = 1/2, which is not an integer)"],
          ref: "There are many counterexamples. If x = 2, then there is no y among the integers such that 2 = 1/y, since the only solution of this equation is y = 1/2. Even if we were working in the domain of real numbers, x = 0 would provide a counterexample, since 0 = 1/y for no real number y."
        },
        {
          k: "b",
          q: "∀x ∃y (y² − x < 100)",
          mode: "short",
          ans: ["x = -200", "x = -200 (then y² < -100 is impossible)"],
          ref: "We can rewrite y² − x < 100 as y² < 100 + x. Since squares can never be negative, no such y exists if x is, say, -200. This x provides a counterexample."
        },
        {
          k: "c",
          q: "∀x ∀y (x² ≠ y³)",
          mode: "short",
          ans: ["x = 27, y = 9", "x = 27, y = 9 (since 27² = 3⁶ = 9³)", "x = 0, y = 0", "x = 1, y = 1"],
          ref: "This is not true, since sixth powers are both squares and cubes. Trivial counterexamples would include x = y = 0 and x = y = 1, but we can also take something like x = 27 and y = 9, since 27² = 3⁶ = 9³."
        }
      ]
    },
    {
      no: 41,
      type: "量词翻译",
      q: "Use quantifiers to express the associative law for multiplication of real numbers.",
      parts: [
        {
          k: "1",
          q: "Express the associative law for multiplication of real numbers using quantifiers.",
          mode: "short",
          ans: ["∀x ∀y ∀z (x(yz) = (xy)z)", "∀x∀y∀z(x·(y·z) = (x·y)·z)"],
          ref: "The associative law states that x(yz) = (xy)z for all real numbers, so the quantifiers are ∀x ∀y ∀z (x(yz) = (xy)z), with the domain of discourse being the real numbers."
        }
      ]
    },
    {
      no: 42,
      type: "量词翻译",
      q: "Use quantifiers to express the distributive laws of multiplication over addition for real numbers.",
      parts: [
        {
          k: "1",
          q: "Express the distributive law of multiplication over addition for real numbers using quantifiers.",
          mode: "short",
          ans: ["∀x ∀y ∀z (x(y + z) = xy + xz)"],
          ref: "The distributive law is just the statement that x(y + z) = xy + xz for all real numbers. Therefore the expression we want is ∀x ∀y ∀z (x(y + z) = xy + xz), where the quantifiers are assumed to range over (that is, the domain of discourse is) the real numbers."
        }
      ]
    },
    {
      no: 43,
      type: "数学命题形式化",
      q: "Use quantifiers and logical connectives to express the fact that every linear polynomial (that is, polynomial of degree 1) with real coefficients and where the coefficient of x is nonzero, has exactly one real root.",
      parts: [
        {
          k: "1",
          q: "Express the stated fact about linear polynomials using quantifiers and logical connectives.",
          mode: "short",
          ans: [
            "∀a ∀b (a ≠ 0 → ∃x (ax + b = 0 ∧ ∀y (ay + b = 0 → y = x)))",
            "∀a∀b(a≠0→∃x(ax+b=0 ∧ ∀y(ay+b=0→y=x)))"
          ],
          ref: "Let a and b range over the real numbers, with a the coefficient of x and b the constant term. Since a ≠ 0 is required for the polynomial to have degree 1, the statement is ∀a ∀b (a ≠ 0 → ∃x (ax + b = 0 ∧ ∀y (ay + b = 0 → y = x))). The second conjunct says that x is the only root, which is exactly the phrase “exactly one real root” (the unique existential quantifier written out in full)."
        }
      ]
    },
    {
      no: 44,
      type: "数学命题形式化",
      q: "Use quantifiers and logical connectives to express the fact that a quadratic polynomial with real number coefficients has at most two real roots.",
      parts: [
        {
          k: "1",
          q: "Express the stated fact about quadratic polynomials using quantifiers and logical connectives.",
          mode: "short",
          ans: [
            "∀a ∀b ∀c (a ≠ 0 → ∀x1 ∀x2 ∀x3 ((ax1² + bx1 + c = 0 ∧ ax2² + bx2 + c = 0 ∧ ax3² + bx3 + c = 0) → (x1 = x2 ∨ x1 = x3 ∨ x2 = x3)))",
            "∀a ∀b ∀c (a ≠ 0 → ∀x1 ∀x2 ∀x3 ((ax1^2 + bx1 + c = 0 ∧ ax2^2 + bx2 + c = 0 ∧ ax3^2 + bx3 + c = 0) → (x1 = x2 ∨ x1 = x3 ∨ x2 = x3)))"
          ],
          ref: "We want to say that for each triple of coefficients (the a, b, and c in the expression ax² + bx + c, where we insist that a ≠ 0 so that this actually is quadratic), there are at most two values of x making that expression equal to 0. The domain here is all real numbers. We write ∀a ∀b ∀c (a ≠ 0 → ∀x1 ∀x2 ∀x3 (ax1² + bx1 + c = 0 ∧ ax2² + bx2 + c = 0 ∧ ax3² + bx3 + c = 0) → (x1 = x2 ∨ x1 = x3 ∨ x2 = x3))."
        }
      ]
    },
    {
      no: 45,
      type: "真值判断",
      q: "Determine the truth value of the statement ∀x ∃y (xy = 1) if the domain for the variables consists of",
      parts: [
        {
          k: "a",
          q: "the nonzero real numbers.",
          mode: "tf",
          ans: ["true"],
          ref: "True: for every nonzero real number x we may take y = 1/x, which is also a nonzero real number, and then xy = 1.",
          cn: "注意 x = 0 已被排除在论域之外，所以每个 x 都能取倒数。"
        },
        {
          k: "b",
          q: "the nonzero integers.",
          mode: "tf",
          ans: ["false"],
          ref: "False: for x = 2 there is no nonzero integer y with 2y = 1, since y = 1/2 is not an integer.",
          cn: "整数域中只有 x = 1, -1 能取到整数 y。"
        },
        {
          k: "c",
          q: "the positive real numbers.",
          mode: "tf",
          ans: ["true"],
          ref: "True: for every positive real number x we may take y = 1/x, which is a positive real number, and then xy = 1."
        }
      ]
    },
    {
      no: 46,
      type: "真值判断",
      q: "Determine the truth value of the statement ∃x ∀y (x ≤ y²) if the domain for the variables consists of",
      parts: [
        {
          k: "a",
          q: "the positive real numbers.",
          mode: "tf",
          ans: ["false"],
          ref: "This is false, since no matter how small a positive number x we might choose, if we let y = √x/2, then x = 2y², and it will not be true that x ≤ y².",
          cn: "正实数域中取不到不大于所有平方的数。"
        },
        {
          k: "b",
          q: "the integers.",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since we can take x = -1, for example: -1 ≤ y² holds for every integer y because y² ≥ 0."
        },
        {
          k: "c",
          q: "the nonzero real numbers.",
          mode: "tf",
          ans: ["true"],
          ref: "This is true, since we can take x = -1, for example: -1 ≤ y² holds for every nonzero real y because y² ≥ 0."
        }
      ]
    },
    {
      no: 47,
      type: "等价证明",
      q: "Show that the two statements ¬∃x ∀y P(x, y) and ∀x ∃y ¬P(x, y), where both quantifiers over the first variable in P(x, y) have the same domain, and both quantifiers over the second variable in P(x, y) have the same domain, are logically equivalent.",
      parts: [
        {
          k: "1",
          q: "Give a proof that the two statements ¬∃x∀yP(x,y) and ∀x∃y¬P(x,y) are logically equivalent.",
          mode: "self",
          ref: "Start with ¬∃x∀y P(x,y). Pushing the negation inward, ¬∃x∀y P(x,y) ≡ ∀x¬∀y P(x,y) ≡ ∀x∃y ¬P(x,y). Since each step is a logical equivalence (De Morgan's law for quantifiers), the two statements are logically equivalent. Equivalently: ¬∃x∀y P(x,y) says that there is some x for which no y satisfies P(x,y); this is exactly the statement that for every x there exists a y with ¬P(x,y)."
        }
      ]
    },
    {
      no: 48,
      type: "等价证明",
      q: "Show that ∀xP(x) ∨ ∀xQ(x) and ∀x ∀y (P(x) ∨ Q(y)), where all quantifiers have the same nonempty domain, are logically equivalent. (The new variable y is used to combine the quantifications correctly.)",
      parts: [
        {
          k: "1",
          q: "Give a proof that ∀xP(x) ∨ ∀xQ(x) and ∀x∀y (P(x) ∨ Q(y)) are logically equivalent.",
          mode: "self",
          ref: "We need to show that each of these propositions implies the other. Suppose that ∀xP(x) ∨ ∀xQ(x) is true. We want to show that ∀x∀y (P(x) ∨ Q(y)) is true. By our hypothesis, one of two things must be true. Either P is universally true, or Q is universally true. In the first case, ∀x∀y (P(x) ∨ Q(y)) is true, since the first expression in the disjunction is true, no matter what x and y are; and in the second case, ∀x∀y (P(x) ∨ Q(y)) is also true, since now the second expression in the disjunction is true, no matter what x and y are. Next we need to prove the converse. So suppose that ∀x∀y (P(x) ∨ Q(y)) is true. We want to show that ∀xP(x) ∨ ∀xQ(x) is true. If ∀xP(x) is true, then we are done. Otherwise, P(x0) must be false for some x0 in the domain of discourse. For this x0, then, the hypothesis tells us that P(x0) ∨ Q(y) is true, no matter what y is. Since P(x0) is false, it must be the case that Q(y) is true for each y. In other words, ∀yQ(y) is true, or, to change the name of the meaningless quantified variable, ∀xQ(x) is true. This certainly implies that ∀xP(x) ∨ ∀xQ(x) is true, as desired."
        }
      ]
    },
    {
      no: 49,
      type: "等价证明",
      q: "Show that the following pairs of statements are logically equivalent, where all quantifiers have the same nonempty domain.",
      parts: [
        {
          k: "a",
          q: "∀xP(x) ∧ ∃xQ(x) is logically equivalent to ∀x ∃y (P(x) ∧ Q(y)).",
          mode: "self",
          ref: "First direction: suppose ∀xP(x) ∧ ∃xQ(x). Pick any x0 with Q(x0) true. For every x, P(x) is true and Q(x0) is true, so P(x) ∧ Q(x0) holds; hence ∀x∃y (P(x) ∧ Q(y)) is true. Conversely, suppose ∀x∃y (P(x) ∧ Q(y)). For any x, taking the y supplied by the existential quantifier shows P(x), so ∀xP(x) holds. Taking any x (the domain is nonempty) and the corresponding y shows that some y satisfies Q(y), so ∃xQ(x) holds. Thus ∀xP(x) ∧ ∃xQ(x) is true. The two statements are logically equivalent."
        },
        {
          k: "b",
          q: "∀xP(x) ∨ ∃xQ(x) is equivalent to ∀x ∃y (P(x) ∨ Q(y)).",
          mode: "self",
          ref: "First direction: suppose ∀xP(x) ∨ ∃xQ(x). If ∀xP(x) holds, then for any x and y the disjunction P(x) ∨ Q(y) is true, so ∀x∃y (P(x) ∨ Q(y)) holds. Otherwise ∃x0Q(x0) holds; then for any x, P(x) ∨ Q(x0) is true, so again ∀x∃y (P(x) ∨ Q(y)) holds. Conversely, suppose ∀x∃y (P(x) ∨ Q(y)). If ∀xP(x) holds we are done. Otherwise P(x0) is false for some x0, and then the hypothesis forces Q(y) to be true for every y, i.e. ∀xQ(x) holds, so ∃xQ(x) holds. Hence ∀xP(x) ∨ ∃xQ(x) is true. The two statements are logically equivalent."
        }
      ]
    },
    {
      no: 50,
      type: "前束范式",
      q: "Put these statements in prenex normal form. [Hint: Use logical equivalence from Tables 6 and 7 in Section 1.3, Table 2 in Section 1.4, Example 19 in Section 1.4, Exercises 47 and 48 in Section 1.4, and Exercises 48 and 49.]",
      parts: [
        {
          k: "a",
          q: "∃xP(x) ∨ ∃xQ(x) ∨ A, where A is a proposition not involving any quantifiers.",
          mode: "short",
          ans: ["∃x (P(x) ∨ Q(x) ∨ A)"],
          ref: "By Exercises 47 and 48b in Section 1.4, we can simply bring the existential quantifier outside: ∃x (P(x) ∨ Q(x) ∨ A)."
        },
        {
          k: "b",
          q: "¬(∀xP(x) ∨ ∀xQ(x))",
          mode: "short",
          ans: ["∃x ∃y ¬(P(x) ∨ Q(y))"],
          ref: "By Exercise 48 of the current section, the expression inside the parentheses is logically equivalent to ∀x∀y (P(x) ∨ Q(y)). Applying the negation operation, we obtain ∃x ∃y ¬(P(x) ∨ Q(y))."
        },
        {
          k: "c",
          q: "∃xP(x) → ∃xQ(x)",
          mode: "short",
          ans: ["∀x ∃y (¬P(x) ∨ Q(y))"],
          ref: "First we rewrite this using Table 7 in Section 1.3 as ∃xQ(x) ∨ ¬∃xP(x), which is equivalent to ∃xQ(x) ∨ ∀x ¬P(x). To combine the existential and universal statements we use part (b) of Exercise 49 of the current section, obtaining ∀x ∃y (¬P(x) ∨ Q(y)), which is in prenex normal form."
        }
      ]
    },
    {
      no: 51,
      type: "前束范式",
      q: "Show how to transform an arbitrary statement to a statement in prenex normal form that is equivalent to the given statement. (Note: A formal solution of this exercise requires use of structural induction, covered in Section 5.3.)",
      parts: [
        {
          k: "1",
          q: "Describe a transformation that turns any statement into an equivalent statement in prenex normal form.",
          mode: "self",
          ref: "Use structural induction on the structure of the statement. For a statement built from propositional variables, predicates, T and F joined by logical connectives and quantifiers: (1) A formula with no quantifiers (a propositional formula or a single predicate) is already in prenex normal form. (2) If A is in prenex normal form, so is ¬A, since ¬(Q1x1 ⋯ Qkxk P(x1,…,xk)) ≡ Q1'x1 ⋯ Qk'xk ¬P(x1,…,xk), where each existential quantifier is changed to universal and vice versa; and A ∧ B and A ∨ B are put in prenex normal form by first dropping the quantifiers of A and B into a common prefix using the equivalences ∀x A ∧ ∀x B ≡ ∀x(A ∧ B), ∃x A ∨ ∃x B ≡ ∃x(A ∨ B), ∃x A ∧ ∃x B ≡ ∃x(A ∧ B), and ∀x A ∨ ∀x B ≡ ∀x∀y(A(x) ∨ B(y)), then applying the negation rule again as needed. (3) If A is in prenex normal form, so is ¬A as above, and if A and B are in prenex normal form then so are A ∧ B and A ∨ B after combining the quantifier prefixes and renaming bound variables. Since every statement is built from these cases, every statement has an equivalent prenex normal form. (A formal proof requires structural induction.)"
        }
      ]
    },
    {
      no: 52,
      type: "量词翻译",
      q: "Express the quantification ∃!xP(x), introduced in Section 1.4, using universal quantifications, existential quantifications, and logical operators.",
      parts: [
        {
          k: "1",
          q: "Express the unique existence quantification for P(x) using universal quantifications, existential quantifications, and logical operators.",
          mode: "short",
          ans: [
            "∃x (P(x) ∧ ∀y (P(y) → y = x))",
            "∃x ∀y (P(y) ↔ y = x)"
          ],
          ref: "We simply want to say that there exists an x such that P(x) holds, and that every y such that P(y) holds must be this same x. Thus we write ∃x (P(x) ∧ ∀y (P(y) → y = x)). Even more compactly, we can write ∃x ∀y (P(y) ↔ y = x)."
        }
      ]
    }
  ]
});
