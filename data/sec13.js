window.BANK.push({
  sec: "1.3",
  title: "Propositional Equivalences",
  titleCn: "命题等价",
  tips: [
    "等价律表：p ∧ T ≡ p，p ∨ F ≡ p，p ∧ F ≡ F，p ∨ T ≡ T，p ∧ p ≡ p，p ∨ p ≡ p",
    "互补律与双重否定：p ∧ ¬p ≡ F，p ∨ ¬p ≡ T，¬(¬p) ≡ p",
    "德摩根律：¬(p ∧ q) ≡ ¬p ∨ ¬q，¬(p ∨ q) ≡ ¬p ∧ ¬q；否定复合命题要交换「与」和「或」",
    "条件-析取等价：p → q ≡ ¬p ∨ q；逆否等价 p → q ≡ ¬q → ¬p",
    "吸收律：p ∨ (p ∧ q) ≡ p，p ∧ (p ∨ q) ≡ p",
    "分配律：p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)，p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)",
    "重言式判定：条件式 p → q 为假当且仅当 p 为真且 q 为假",
    "等值演算技巧：把 ¬ 尽量推到命题字母（德摩根），再用互补律、双重否定化简"
  ],
  items: [
    {
      no: 1,
      type: "等价验证",
      q: "Use truth tables to verify these equivalences.",
      parts: [
        { k: "a", q: "p ∧ T ≡ p", mode: "tf", ans: ["true"], ref: "p ∧ T ≡ p (identity law). The truth table of p ∧ T is identical to the truth table of p, so the equivalence holds.", cn: "恒等律：p ∧ T ≡ p，等价成立。" },
        { k: "b", q: "p ∨ F ≡ p", mode: "tf", ans: ["true"], ref: "p ∨ F ≡ p (identity law). The truth table of p ∨ F is identical to the truth table of p, so the equivalence holds.", cn: "恒等律：p ∨ F ≡ p，等价成立。" },
        { k: "c", q: "p ∧ F ≡ F", mode: "tf", ans: ["true"], ref: "p ∧ F ≡ F (domination law). The truth table of p ∧ F is F in every row, so the equivalence holds.", cn: "零律：p ∧ F ≡ F，等价成立。" },
        { k: "d", q: "p ∨ T ≡ T", mode: "tf", ans: ["true"], ref: "p ∨ T ≡ T (domination law). The truth table of p ∨ T is T in every row, so the equivalence holds.", cn: "壹律：p ∨ T ≡ T，等价成立。" },
        { k: "e", q: "p ∨ p ≡ p", mode: "tf", ans: ["true"], ref: "p ∨ p ≡ p (idempotent law). The truth table of p ∨ p is identical to the truth table of p, so the equivalence holds.", cn: "幂等律：p ∨ p ≡ p，等价成立。" },
        { k: "f", q: "p ∧ p ≡ p", mode: "tf", ans: ["true"], ref: "p ∧ p ≡ p (idempotent law). The truth table of p ∧ p is identical to the truth table of p, so the equivalence holds.", cn: "幂等律：p ∧ p ≡ p，等价成立。" }
      ]
    },
    {
      no: 2,
      type: "逻辑等价证明",
      q: "Show that ¬(¬p) and p are logically equivalent.",
      parts: [
        { k: "1", q: "¬(¬p) and p are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "There are two cases. If p is true, then ¬(¬p) is the negation of a false proposition, hence true. Similarly, if p is false, then ¬(¬p) is also false. Therefore the two propositions are logically equivalent." }
      ]
    },
    {
      no: 3,
      type: "等价验证",
      q: "Use truth tables to verify the commutative laws.",
      parts: [
        { k: "a", q: "p ∨ q ≡ q ∨ p.", mode: "tf", ans: ["true"], ref: "We construct the relevant truth table and note that the two columns for p ∨ q and q ∨ p are identical, so the equivalence holds (commutative law of disjunction).", cn: "交换律（析取）：p ∨ q ≡ q ∨ p。" },
        { k: "b", q: "p ∧ q ≡ q ∧ p.", mode: "tf", ans: ["true"], ref: "We construct the relevant truth table and note that the two columns for p ∧ q and q ∧ p are identical, so the equivalence holds (commutative law of conjunction).", cn: "交换律（合取）：p ∧ q ≡ q ∧ p。" }
      ]
    },
    {
      no: 4,
      type: "等价验证",
      q: "Use truth tables to verify the associative laws.",
      parts: [
        { k: "a", q: "(p ∨ q) ∨ r ≡ p ∨ (q ∨ r).", mode: "tf", ans: ["true"], ref: "We construct the relevant truth table and note that the fifth and seventh columns are identical: (p ∨ q) ∨ r and p ∨ (q ∨ r) have the same truth value for all eight assignments of p, q, r.", cn: "结合律（析取）。" },
        { k: "b", q: "(p ∧ q) ∧ r ≡ p ∧ (q ∧ r).", mode: "tf", ans: ["true"], ref: "We construct the relevant truth table and note that the fifth and seventh columns are identical: (p ∧ q) ∧ r and p ∧ (q ∧ r) have the same truth value for all eight assignments of p, q, r.", cn: "结合律（合取）。" }
      ]
    },
    {
      no: 5,
      type: "等价验证",
      q: "Use a truth table to verify the distributive law.",
      parts: [
        { k: "1", q: "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r).", mode: "tf", ans: ["true"], ref: "We construct the relevant truth table; the column for p ∧ (q ∨ r) is identical to the column for (p ∧ q) ∨ (p ∧ r). Both sides are true exactly when p is true and at least one of q and r is true, so the distributive law holds.", cn: "分配律：合取对析取分配。" }
      ]
    },
    {
      no: 6,
      type: "德摩根",
      q: "Use a truth table to verify the first De Morgan law.",
      parts: [
        { k: "1", q: "¬(p ∧ q) ≡ ¬p ∨ ¬q.", mode: "tf", ans: ["true"], ref: "We see that the fourth and seventh columns are identical. ¬(p ∧ q) is true exactly when at least one of p and q is false, which is exactly when ¬p ∨ ¬q is true; hence the first De Morgan law holds." }
      ]
    },
    {
      no: 7,
      type: "德摩根",
      q: "Use De Morgan's laws to find the negation of each of the following statements.",
      parts: [
        { k: "a", q: "Jan is rich and happy.", mode: "short", ans: ["Jan is not rich or is not happy.", "Jan is not rich or Jan is not happy."], ref: "Jan is not rich or is not happy. (We negate each part and swap \"and\" with \"or.\")" },
        { k: "b", q: "Carlos will bicycle or run tomorrow.", mode: "short", ans: ["Carlos will not bicycle and will not run tomorrow.", "Carlos will not bicycle and Carlos will not run tomorrow."], ref: "Carlos will not bicycle and will not run tomorrow. (We negate each part and swap \"and\" with \"or.\")" },
        { k: "c", q: "Mei walks or takes the bus to class.", mode: "short", ans: ["Mei does not walk and does not take the bus to class.", "Mei does not walk and Mei does not take the bus to class."], ref: "Mei does not walk and does not take the bus to class. (We negate each part and swap \"and\" with \"or.\")" },
        { k: "d", q: "Ibrahim is smart and hard working.", mode: "short", ans: ["Ibrahim is not smart or is not hard working.", "Ibrahim is not smart or Ibrahim is not hard working."], ref: "Ibrahim is not smart or is not hard working. (We negate each part and swap \"and\" with \"or.\")" }
      ]
    },
    {
      no: 8,
      type: "德摩根",
      q: "Use De Morgan's laws to find the negation of each of the following statements.",
      parts: [
        { k: "a", q: "Kwame will take a job in industry or go to graduate school.", mode: "short", ans: ["Kwame will not take a job in industry and will not go to graduate school."], ref: "Kwame will not take a job in industry and will not go to graduate school. We need to negate each part and swap \"and\" with \"or.\"" },
        { k: "b", q: "Yoshiko knows Java and calculus.", mode: "short", ans: ["Yoshiko does not know Java or does not know calculus."], ref: "Yoshiko does not know Java or does not know calculus. We need to negate each part and swap \"and\" with \"or.\"" },
        { k: "c", q: "James is young and strong.", mode: "short", ans: ["James is not young or he is not strong.", "James is not young, or he is not strong."], ref: "James is not young, or he is not strong. We need to negate each part and swap \"and\" with \"or.\"" },
        { k: "d", q: "Rita will move to Oregon or Washington.", mode: "short", ans: ["Rita will not move to Oregon and will not move to Washington."], ref: "Rita will not move to Oregon and will not move to Washington. We need to negate each part and swap \"and\" with \"or.\"" }
      ]
    },
    {
      no: 9,
      type: "等价式化简",
      q: "For each of these compound propositions, use the conditional-disjunction equivalence (Example 3) to find an equivalent compound proposition that does not involve conditionals.",
      parts: [
        { k: "a", q: "p → ¬q", mode: "short", ans: ["¬p ∨ ¬q"], ref: "p → ¬q ≡ ¬p ∨ ¬q by the conditional-disjunction equivalence." },
        { k: "b", q: "(p → q) → r", mode: "short", ans: ["(p ∧ ¬q) ∨ r", "¬(¬p ∨ q) ∨ r", "(p ∧ ¬q) ∨ r"], ref: "(p → q) → r ≡ ¬(p → q) ∨ r by the conditional-disjunction equivalence ≡ ¬(¬p ∨ q) ∨ r by a second De Morgan's law ≡ (p ∧ ¬q) ∨ r." },
        { k: "c", q: "(¬q → p) → (p → ¬q)", mode: "short", ans: ["¬p ∨ ¬q"], ref: "(¬q → p) → (p → ¬q) ≡ ¬(¬q → p) ∨ (p → ¬q) ≡ ¬(q ∨ p) ∨ (¬p ∨ ¬q) ≡ (¬q ∧ ¬p) ∨ ¬p ∨ ¬q ≡ ¬p ∨ ¬q by absorption." }
      ]
    },
    {
      no: 10,
      type: "等价式化简",
      q: "For each of these compound propositions, use the conditional-disjunction equivalence (Example 3) to find an equivalent compound proposition that does not involve conditionals.",
      parts: [
        { k: "a", q: "¬p → ¬q", mode: "short", ans: ["p ∨ ¬q"], ref: "¬p → ¬q ≡ p ∨ ¬q by the conditional-disjunction equivalence." },
        { k: "b", q: "(p ∨ q) → ¬p", mode: "short", ans: ["¬p"], ref: "(p ∨ q) → ¬p ≡ ¬(p ∨ q) ∨ ¬p by the conditional-disjunction equivalence ≡ (¬p ∧ ¬q) ∨ ¬p by the second De Morgan's law ≡ ¬p by the first absorption law." },
        { k: "c", q: "(p → ¬q) → (¬p → q)", mode: "short", ans: ["p ∨ q"], ref: "(p → ¬q) → (¬p → q) ≡ ¬(p → ¬q) ∨ (¬p → q) by the conditional-disjunction equivalence ≡ ¬(¬p ∨ ¬q) ∨ (¬¬p ∨ q) ≡ (p ∧ q) ∨ (p ∨ q) by the double negation and De Morgan's laws ≡ (p ∧ q) ∨ p ∨ q by the associative law ≡ p ∨ q by the absorption law." }
      ]
    },
    {
      no: 11,
      type: "重言式",
      q: "Show that each of these conditional statements is a tautology by using truth tables.",
      parts: [
        { k: "a", q: "(p ∧ q) → p", mode: "tf", ans: ["true"], ref: "We construct the truth table; the column for (p ∧ q) → p contains only T's, so the statement is a tautology.", cn: "合取式为真时 p 必为真，故条件式恒真。" },
        { k: "b", q: "p → (p ∨ q)", mode: "tf", ans: ["true"], ref: "We construct the truth table; the column for p → (p ∨ q) contains only T's, so the statement is a tautology.", cn: "p 为真时 p ∨ q 必为真。" },
        { k: "c", q: "¬p → (p → q)", mode: "tf", ans: ["true"], ref: "We construct the truth table; the column for ¬p → (p → q) contains only T's, so the statement is a tautology. (When ¬p is true, p is false, so p → q is true.)", cn: "注意 p 为假时 p → q 恒真。" },
        { k: "d", q: "(p ∧ q) → (p → q)", mode: "tf", ans: ["true"], ref: "We construct the truth table; the column for (p ∧ q) → (p → q) contains only T's, so the statement is a tautology.", cn: "p ∧ q 为真时 p、q 均真，故 p → q 为真。" },
        { k: "e", q: "¬(p → q) → p", mode: "tf", ans: ["true"], ref: "We construct the truth table; the column for ¬(p → q) → p contains only T's, so the statement is a tautology. (¬(p → q) is true only when p is true and q is false.)", cn: "¬(p→q) 为真蕴含 p 为真。" },
        { k: "f", q: "¬(p → q) → ¬q", mode: "tf", ans: ["true"], ref: "We construct the truth table; the column for ¬(p → q) → ¬q contains only T's, so the statement is a tautology. (¬(p → q) is true only when p is true and q is false.)", cn: "¬(p→q) 为真蕴含 q 为假。" }
      ]
    },
    {
      no: 12,
      type: "重言式",
      q: "Show that each of these conditional statements is a tautology by using truth tables.",
      parts: [
        { k: "a", q: "[¬p ∧ (p ∨ q)] → q", mode: "tf", ans: ["true"], ref: "We construct a truth table for the conditional statement and note that the relevant column contains only T's. For part (a) the column for [¬p ∧ (p ∨ q)] → q is T in all four rows.", cn: "¬p ∧ (p∨q) 为真时 p 假而 q 真。" },
        { k: "b", q: "[(p → q) ∧ (q → r)] → (p → r)", mode: "tf", ans: ["true"], ref: "We construct a truth table for the conditional statement and note that the relevant column contains only T's. For part (b) the column for [(p → q) ∧ (q → r)] → (p → r) is T in all eight rows.", cn: "蕴含的传递性。" },
        { k: "c", q: "[p ∧ (p → q)] → q", mode: "tf", ans: ["true"], ref: "We construct a truth table for the conditional statement and note that the relevant column contains only T's. For part (c) the column for [p ∧ (p → q)] → q is T in all four rows.", cn: "p ∧ (p→q) 为真时 q 必真。" },
        { k: "d", q: "[(p ∨ q) ∧ (p → r) ∧ (q → r)] → r", mode: "tf", ans: ["true"], ref: "We construct a truth table for the conditional statement and note that the relevant column contains only T's. For part (d) the column for [(p ∨ q) ∧ (p → r) ∧ (q → r)] → r is T in all eight rows.", cn: "p ∨ q 为真时 p 或 q 真，从而 r 真。" }
      ]
    },
    {
      no: 13,
      type: "逻辑等价证明",
      q: "Show that each conditional statement in Exercise 11 is a tautology using the fact that a conditional statement is false exactly when the hypothesis is true and the conclusion is false. (Do not use truth tables.)",
      parts: [
        { k: "a", q: "Exercise 11(a): (p ∧ q) → p", mode: "self", ref: "If this were not a tautology, then p ∧ q would be true but p would be false. This cannot happen, because the truth of p ∧ q forces p to be true, a contradiction." },
        { k: "b", q: "Exercise 11(b): p → (p ∨ q)", mode: "self", ref: "If this were not a tautology, then p would be true but p ∨ q would be false. This cannot happen, because the truth of p ∨ q follows from the truth of p, a contradiction." },
        { k: "c", q: "Exercise 11(c): ¬p → (p → q)", mode: "self", ref: "If this were not a tautology, then ¬p would be true but p → q would be false. But ¬p true means p is false, and then p → q is automatically true, a contradiction." },
        { k: "d", q: "Exercise 11(d): (p ∧ q) → (p → q)", mode: "self", ref: "If this were not a tautology, then p ∧ q would be true but p → q would be false. For p → q to be false we need p true and q false, while the truth of p ∧ q forces q to be true, a contradiction." },
        { k: "e", q: "Exercise 11(e): ¬(p → q) → p", mode: "self", ref: "If this were not a tautology, then ¬(p → q) would be true but p would be false. But ¬(p → q) is true only when p is true and q is false, so p must be true, a contradiction." },
        { k: "f", q: "Exercise 11(f): ¬(p → q) → ¬q", mode: "self", ref: "If this were not a tautology, then ¬(p → q) would be true but ¬q would be false. But ¬(p → q) is true only when p is true and q is false, so q must be false, a contradiction." }
      ]
    },
    {
      no: 14,
      type: "逻辑等价证明",
      q: "Show that each conditional statement in Exercise 12 is a tautology using the fact that a conditional statement is false exactly when the hypothesis is true and the conclusion is false. (Do not use truth tables.)",
      parts: [
        { k: "a", q: "Exercise 12(a): [¬p ∧ (p ∨ q)] → q", mode: "self", ref: "If this were not a tautology, then ¬p ∧ (p ∨ q) would be true but q would be false. This cannot happen, because the truth of ¬p ∧ (p ∨ q) forces p to be false, which, when combined with the truth of p ∨ q, in turn forces q to be true, a contradiction." },
        { k: "b", q: "Exercise 12(b): [(p → q) ∧ (q → r)] → (p → r)", mode: "self", ref: "If this were not a tautology, then (p → q) ∧ (q → r) would be true but p → r would be false. For p → r to be false it must be that p is true and r is false. But p being true implies by the first expression that q is also true and hence that r is also true, a contradiction." },
        { k: "c", q: "Exercise 12(c): [p ∧ (p → q)] → q", mode: "self", ref: "If this were not a tautology, then p ∧ (p → q) would be true but q would be false. This cannot happen, because the first expression forces q to be true." },
        { k: "d", q: "Exercise 12(d): [(p ∨ q) ∧ (p → r) ∧ (q → r)] → r", mode: "self", ref: "If this were not a tautology, then (p ∨ q) ∧ (p → r) ∧ (q → r) would be true but r would be false. The first part of the hypothesis forces at least one of p and q to be true and the second and third parts then force r to be true, a contradiction." }
      ]
    },
    {
      no: 15,
      type: "逻辑等价证明",
      q: "Show that each conditional statement in Exercise 11 is a tautology by applying a chain of logical identities as in Example 8. (Do not use truth tables.)",
      parts: [
        { k: "a", q: "Exercise 11(a): (p ∧ q) → p", mode: "self", ref: "(p ∧ q) → p ≡ ¬(p ∧ q) ∨ p by the conditional-disjunction equivalence ≡ (¬p ∨ ¬q) ∨ p by a De Morgan's law ≡ (p ∨ p) ∨ ¬q by commutativity and associativity ≡ p ∨ ¬q by an idempotent law ≡ T by a domination law." },
        { k: "b", q: "Exercise 11(b): p → (p ∨ q)", mode: "self", ref: "p → (p ∨ q) ≡ ¬p ∨ (p ∨ q) by the conditional-disjunction equivalence ≡ (¬p ∨ p) ∨ q by associativity ≡ T ∨ q by a negation law ≡ T by a domination law." },
        { k: "c", q: "Exercise 11(c): ¬p → (p → q)", mode: "self", ref: "¬p → (p → q) ≡ ¬(¬p) ∨ (p → q) by the conditional-disjunction equivalence ≡ p ∨ (¬p ∨ q) by a double negation and associativity ≡ (p ∨ ¬p) ∨ q ≡ T ∨ q ≡ T." },
        { k: "d", q: "Exercise 11(d): (p ∧ q) → (p → q)", mode: "self", ref: "(p ∧ q) → (p → q) ≡ ¬(p ∧ q) ∨ (p → q) by the conditional-disjunction equivalence ≡ (¬p ∨ ¬q) ∨ (¬p ∨ q) ≡ ¬p ∨ (¬q ∨ ¬q) ∨ q by commutativity and associativity ≡ ¬p ∨ ¬q ∨ q ≡ ¬p ∨ T ≡ T." },
        { k: "e", q: "Exercise 11(e): ¬(p → q) → p", mode: "self", ref: "¬(p → q) → p ≡ ¬¬(p → q) ∨ p by the conditional-disjunction equivalence and double negation ≡ (p → q) ∨ p ≡ (¬p ∨ q) ∨ p ≡ (p ∨ p) ∨ q ≡ p ∨ q ≡ ¬p ∨ p ∨ q ≡ T." },
        { k: "f", q: "Exercise 11(f): ¬(p → q) → ¬q", mode: "self", ref: "¬(p → q) → ¬q ≡ ¬¬(p → q) ∨ ¬q by the conditional-disjunction equivalence and double negation ≡ (p → q) ∨ ¬q ≡ (¬p ∨ q) ∨ ¬q ≡ ¬p ∨ (q ∨ ¬q) ≡ ¬p ∨ T ≡ T." }
      ]
    },
    {
      no: 16,
      type: "逻辑等价证明",
      q: "Show that each conditional statement in Exercise 12 is a tautology by applying a chain of logical identities as in Example 8. (Do not use truth tables.)",
      parts: [
        { k: "a", q: "Exercise 12(a): [¬p ∧ (p ∨ q)] → q", mode: "self", ref: "[¬p ∧ (p ∨ q)] → q ≡ ¬[¬p ∧ (p ∨ q)] ∨ q by the conditional-disjunction equivalence ≡ p ∨ ¬(p ∨ q) ∨ q by a De Morgan's law ≡ (p ∨ q) ∨ ¬(p ∨ q) by commutativity and associativity ≡ T by a negation law." },
        { k: "b", q: "Exercise 12(b): [(p → q) ∧ (q → r)] → (p → r)", mode: "self", ref: "[(p → q) ∧ (q → r)] → (p → r) ≡ ¬[(p → q) ∧ (q → r)] ∨ (p → r) by the conditional-disjunction equivalence ≡ ¬(p → q) ∨ ¬(q → r) ∨ (p → r) by a De Morgan's law ≡ (p ∧ ¬q) ∨ (q ∧ ¬r) ∨ ¬p ∨ r by the negation of conditionals and the conditional-disjunction equivalences ≡ [¬p ∨ (p ∧ ¬q)] ∨ [r ∨ (q ∧ ¬r)] by associativity ≡ [(¬p ∨ p) ∧ (¬p ∨ ¬q)] ∨ [(r ∨ q) ∧ (r ∨ ¬r)] by a distributive law ≡ [T ∧ (¬p ∨ ¬q)] ∨ [(r ∨ q) ∧ T] by a negation law ≡ (¬p ∨ ¬q) ∨ (r ∨ q) by an identity law ≡ (¬p ∨ r) ∨ (¬q ∨ q) by associativity ≡ (¬p ∨ r) ∨ T by a negation law ≡ T by a domination law." },
        { k: "c", q: "Exercise 12(c): [p ∧ (p → q)] → q", mode: "self", ref: "[p ∧ (p → q)] → q ≡ ¬[p ∧ (p → q)] ∨ q by the conditional-disjunction equivalence ≡ ¬p ∨ ¬(p → q) ∨ q by a De Morgan's law ≡ (¬p ∨ q) ∨ ¬(p → q) by commutativity and associativity ≡ (p → q) ∨ ¬(p → q) by the conditional-disjunction equivalence ≡ T by a negation law." },
        { k: "d", q: "Exercise 12(d): [(p ∨ q) ∧ (p → r) ∧ (q → r)] → r", mode: "self", ref: "[(p ∨ q) ∧ (p → r) ∧ (q → r)] → r ≡ ¬[(p ∨ q) ∧ (p → r) ∧ (q → r)] ∨ r by the conditional-disjunction equivalence ≡ ¬(p ∨ q) ∨ ¬(p → r) ∨ ¬(q → r) ∨ r by a De Morgan's law ≡ ¬(p ∨ q) ∨ [(p ∧ ¬r) ∨ r] ∨ [(q ∧ ¬r) ∨ r] by an idempotent law, commutativity, and associativity ≡ ¬(p ∨ q) ∨ [(p ∨ r) ∧ (¬r ∨ r)] ∨ [(q ∨ r) ∧ (¬r ∨ r)] by a distributive law ≡ ¬(p ∨ q) ∨ [(p ∨ r) ∧ T] ∨ [(q ∨ r) ∧ T] by a negation law ≡ ¬(p ∨ q) ∨ (p ∨ r) ∨ (q ∨ r) by an identity law ≡ ¬(p ∨ q) ∨ (p ∨ q) ∨ r by associativity and an idempotent law ≡ T ∨ r by a negation law ≡ T by a domination law." }
      ]
    },
    {
      no: 17,
      type: "等价验证",
      q: "Use truth tables to verify the absorption laws.",
      parts: [
        { k: "a", q: "p ∨ (p ∧ q) ≡ p", mode: "tf", ans: ["true"], ref: "We construct the relevant truth table; the columns for p ∨ (p ∧ q) and p are identical, so the first absorption law holds.", cn: "吸收律（析取型）。" },
        { k: "b", q: "p ∧ (p ∨ q) ≡ p", mode: "tf", ans: ["true"], ref: "We construct the relevant truth table; the columns for p ∧ (p ∨ q) and p are identical, so the second absorption law holds.", cn: "吸收律（合取型）。" }
      ]
    },
    {
      no: 18,
      type: "重言式",
      q: "Determine whether (¬p ∧ (p → q)) → ¬q is a tautology.",
      parts: [
        { k: "1", q: "(¬p ∧ (p → q)) → ¬q is a tautology.", mode: "tf", ans: ["false"], ref: "This is not a tautology. It is saying that knowing that the hypothesis of a conditional statement is false allows us to conclude that the conclusion is also false, and we know that this is not valid reasoning. To show that it is not a tautology, we need to find truth assignments for p and q that make the entire proposition false. Since this is possible only if the conclusion is false, we want to let q be true; and since we want the hypothesis to be true, we must also let p be false. It is easy to check that if, indeed, p is false and q is true, then the conditional statement is false. Therefore it is not a tautology.", cn: "反例：p = F，q = T。" }
      ]
    },
    {
      no: 19,
      type: "重言式",
      q: "Determine whether (¬q ∧ (p → q)) → ¬p is a tautology.",
      parts: [
        { k: "1", q: "(¬q ∧ (p → q)) → ¬p is a tautology.", mode: "tf", ans: ["true"], ref: "This is a tautology. Suppose p is true; then p → q has the same truth value as q, so ¬q ∧ (p → q) is false and the conditional is true. Suppose p is false; then ¬p is true, so the conclusion is true and the conditional is true. In every case the statement is true, so it is a tautology.", cn: "与第 18 题不同：这里假设为真时 p 必为真。" }
      ]
    },
    {
      no: 20,
      type: "逻辑等价证明",
      q: "Show that p ↔ q and (p ∧ q) ∨ (¬p ∧ ¬q) are logically equivalent.",
      parts: [
        { k: "1", q: "p ↔ q and (p ∧ q) ∨ (¬p ∧ ¬q) are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "The first of these propositions is true if and only if p and q have the same truth value. The second is true if and only if either p and q are both true, or p and q are both false. Clearly these two conditions are saying the same thing." }
      ]
    },
    {
      no: 21,
      type: "逻辑等价证明",
      q: "Show that ¬(p ↔ q) and p ↔ ¬q are logically equivalent.",
      parts: [
        { k: "1", q: "¬(p ↔ q) and p ↔ ¬q are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "¬(p ↔ q) is true exactly when p and q have different truth values. The proposition p ↔ ¬q is true exactly when p and ¬q have the same truth value, which happens exactly when p and q have different truth values. Hence the two propositions are true in exactly the same cases and are logically equivalent." }
      ]
    },
    {
      no: 22,
      type: "逻辑等价证明",
      q: "Show that p → q and ¬q → ¬p are logically equivalent.",
      parts: [
        { k: "1", q: "p → q and ¬q → ¬p are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "It is easy to see from the definitions of conditional statement and negation that each of these propositions is false in the case in which p is true and q is false, and true in the other three cases. Therefore the two propositions are logically equivalent." }
      ]
    },
    {
      no: 23,
      type: "逻辑等价证明",
      q: "Show that ¬p ↔ q and p ↔ ¬q are logically equivalent.",
      parts: [
        { k: "1", q: "¬p ↔ q and p ↔ ¬q are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "¬p ↔ q is true exactly when ¬p and q have the same truth value, that is, exactly when p and q have different truth values. The proposition p ↔ ¬q is likewise true exactly when p and q have different truth values. Hence the two propositions are logically equivalent." }
      ]
    },
    {
      no: 24,
      type: "逻辑等价证明",
      q: "Show that ¬(p ⊕ q) and p ↔ q are logically equivalent.",
      parts: [
        { k: "1", q: "¬(p ⊕ q) and p ↔ q are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "It is easy to see from the definitions of the logical operations involved here that each of these propositions is true in the cases in which p and q have the same truth value, and false in the cases in which p and q have opposite truth values. Therefore the two propositions are logically equivalent." }
      ]
    },
    {
      no: 25,
      type: "逻辑等价证明",
      q: "Show that ¬(p ↔ q) and ¬p ↔ q are logically equivalent.",
      parts: [
        { k: "1", q: "¬(p ↔ q) and ¬p ↔ q are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "¬(p ↔ q) is true exactly when p and q have different truth values. The proposition ¬p ↔ q is true exactly when ¬p and q agree, which happens exactly when p and q have different truth values. Hence the two propositions are logically equivalent." }
      ]
    },
    {
      no: 26,
      type: "逻辑等价证明",
      q: "Show that (p → q) ∧ (p → r) and p → (q ∧ r) are logically equivalent.",
      parts: [
        { k: "1", q: "(p → q) ∧ (p → r) and p → (q ∧ r) are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "Suppose that (p → q) ∧ (p → r) is true. We want to show that p → (q ∧ r) is true, which means that we want to show that q ∧ r is true whenever p is true. If p is true, since we know that both p → q and p → r are true from our assumption, we can conclude that q is true and that r is true. Therefore q ∧ r is true, as desired. Conversely, suppose that p → (q ∧ r) is true. We need to show that p → q is true and that p → r is true, which means that if p is true, then so are q and r. But this follows from p → (q ∧ r)." }
      ]
    },
    {
      no: 27,
      type: "逻辑等价证明",
      q: "Show that (p → r) ∧ (q → r) and (p ∨ q) → r are logically equivalent.",
      parts: [
        { k: "1", q: "(p → r) ∧ (q → r) and (p ∨ q) → r are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "If (p → r) ∧ (q → r) is true, then whenever p ∨ q is true, either p is true, in which case p → r forces r to be true, or q is true, in which case q → r forces r to be true; so (p ∨ q) → r is true. Conversely, if (p ∨ q) → r is true and p ∨ q is true, then r is true, so both p → r and q → r are true. Hence the two propositions are logically equivalent." }
      ]
    },
    {
      no: 28,
      type: "逻辑等价证明",
      q: "Show that (p → q) ∨ (p → r) and p → (q ∨ r) are logically equivalent.",
      parts: [
        { k: "1", q: "(p → q) ∨ (p → r) and p → (q ∨ r) are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "We determine exactly which rows of the truth table will have T as their entries. Note (p → q) ∨ (p → r) will be true when either of the conditional statements is true. The conditional statement will be true if p is false, or if q in one case or r in the other case is true, i.e., when q ∨ r is true, which is precisely when p → (q ∨ r) is true. Since the two propositions are true in exactly the same situations, they are logically equivalent." }
      ]
    },
    {
      no: 29,
      type: "逻辑等价证明",
      q: "Show that (p → r) ∨ (q → r) and (p ∧ q) → r are logically equivalent.",
      parts: [
        { k: "1", q: "(p → r) ∨ (q → r) and (p ∧ q) → r are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "Both propositions are false in exactly one case: p true, q true, r false. Indeed (p → r) ∨ (q → r) is false only when both conditionals fail, which needs p true, q true and r false; and (p ∧ q) → r is false only when p ∧ q is true and r is false, i.e. in the same case. In all other cases both are true, so the two propositions are logically equivalent." }
      ]
    },
    {
      no: 30,
      type: "逻辑等价证明",
      q: "Show that ¬p → (q → r) and q → (p ∨ r) are logically equivalent.",
      parts: [
        { k: "1", q: "¬p → (q → r) and q → (p ∨ r) are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "Applying the third and first equivalences in Table 7, we have ¬p → (q → r) ≡ p ∨ (q → r) ≡ p ∨ ¬q ∨ r. Applying the first equivalence in Table 7 to q → (p ∨ r) shows that ¬q ∨ p ∨ r is equivalent to it. But these are equivalent by the commutative and associative laws." }
      ]
    },
    {
      no: 31,
      type: "逻辑等价证明",
      q: "Show that p ↔ q and (p → q) ∧ (q → p) are logically equivalent.",
      parts: [
        { k: "1", q: "p ↔ q and (p → q) ∧ (q → p) are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "The proposition p ↔ q is true exactly when p and q have the same truth value. The proposition (p → q) ∧ (q → p) is true exactly when neither conditional fails, that is, exactly when p and q have the same truth value. Hence the two propositions are logically equivalent." }
      ]
    },
    {
      no: 32,
      type: "逻辑等价证明",
      q: "Show that p ↔ q and ¬p ↔ ¬q are logically equivalent.",
      parts: [
        { k: "1", q: "p ↔ q and ¬p ↔ ¬q are logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "We know that p ↔ q is true precisely when p and q have the same truth value. But this happens precisely when ¬p and ¬q have the same truth value, that is, ¬p ↔ ¬q." }
      ]
    },
    {
      no: 33,
      type: "重言式",
      q: "Show that (p → q) ∧ (q → r) → (p → r) is a tautology.",
      parts: [
        { k: "1", q: "(p → q) ∧ (q → r) → (p → r) is a tautology.", mode: "tf", ans: ["true"], ref: "Suppose the hypothesis (p → q) ∧ (q → r) is true and p is true. Then p → q forces q to be true, and q → r then forces r to be true, so the conclusion p → r is true. Hence the conditional is true in every case and the statement is a tautology.", cn: "蕴含的传递性：前提为真时结论必真。" }
      ]
    },
    {
      no: 34,
      type: "重言式",
      q: "Show that (p ∨ q) ∧ (¬p ∨ r) → (q ∨ r) is a tautology.",
      parts: [
        { k: "1", q: "(p ∨ q) ∧ (¬p ∨ r) → (q ∨ r) is a tautology.", mode: "tf", ans: ["true"], ref: "The conclusion q ∨ r will be true in every case except when q and r are both false. But if q and r are both false, then one of p ∨ q or ¬p ∨ r is false, because one of p or ¬p is false. Thus in this case the hypothesis (p ∨ q) ∧ (¬p ∨ r) is false. A conditional statement in which the conclusion is true or the hypothesis is false is true, and that completes the argument." }
      ]
    },
    {
      no: 35,
      type: "逻辑等价证明",
      q: "Show that (p → q) → r and p → (q → r) are not logically equivalent.",
      parts: [
        { k: "1", q: "(p → q) → r and p → (q → r) are not logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Not equivalent"], ref: "Let p, q, and r all be false. Then (p → q) → r is T → F, which is false, while p → (q → r) is F → (F → F) = F → T, which is true. So the two propositions have different truth values for this assignment, and hence they are not logically equivalent." }
      ]
    },
    {
      no: 36,
      type: "逻辑等价证明",
      q: "Show that (p ∧ q) → r and (p → r) ∧ (q → r) are not logically equivalent.",
      parts: [
        { k: "1", q: "(p ∧ q) → r and (p → r) ∧ (q → r) are not logically equivalent.", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Not equivalent"], ref: "We just need to find an assignment of truth values that makes one of these propositions true and the other false. We can let p be true and the other two variables be false. Then the first statement will be F → F, which is true, but the second will be F ∧ T, which is false." }
      ]
    }
  ]
});
