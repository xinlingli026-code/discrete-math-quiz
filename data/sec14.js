window.BANK.push({
  sec: "1.4",
  title: "Predicates and Quantifiers",
  titleCn: "谓词与量词",
  tips: [
    "量词否定法则：¬∀x P(x) ≡ ∃x ¬P(x)，¬∃x P(x) ≡ ∀x ¬P(x)；否定后要把否定号继续推到谓词内部。",
    "翻译三要素：先定论域（domain），再定谓词，最后处理联结词；“每个/所有”用 ∀，“存在/某个/至少一个”用 ∃。",
    "∀x(P(x) → Q(x)) 表示“每个 P 都是 Q”；“只有…才”给出必要条件用 →，而“既…又…”用 ∧。",
    "空域量词规则（48–51）均以论域非空为前提：∀x A ≡ A，∃x A ≡ A；若论域为空，则 ∀x A 为真而 ∃x A 为假。",
    "反例法：全称命题为假只需给出一个使谓词为假的元素；注意论域是整数还是实数，常数域不同结论不同。",
    "量词展开：∃x P(x) 像析取，∀x P(x) 像合取，把量词改写成有限个析取/合取是常用手法（见 17–20、30–31）。",
    "量词顺序：∀x∀y 与 ∃x∃y 可以交换，但 ∀x∃y 与 ∃x∀y 不能交换（见下一节嵌套量词）。",
    "系统规格翻译要盯住措辞方向：“只有…才”给必要条件（→），而“只要…就”“所有…都”给充分条件。"
  ],
  items: [
    {
      no: 1,
      type: "真值判断",
      q: "Let P(x) denote the statement “x ≤ 4.” What are these truth values?",
      parts: [
        { k: "a", q: "P(0)", mode: "tf", ans: ["true"], ref: "P(0) is true, since 0 ≤ 4." },
        { k: "b", q: "P(4)", mode: "tf", ans: ["true"], ref: "P(4) is true, since 4 ≤ 4." },
        { k: "c", q: "P(6)", mode: "tf", ans: ["false"], ref: "P(6) is false, since 6 > 4." }
      ]
    },
    {
      no: 2,
      type: "真值判断",
      q: "Let P(x) be the statement “The word x contains the letter a.” What are these truth values?",
      parts: [
        { k: "a", q: "P(orange)", mode: "tf", ans: ["true"], ref: "This is true, since there is an a in orange." },
        { k: "b", q: "P(lemon)", mode: "tf", ans: ["false"], ref: "This is false, since there is no a in lemon." },
        { k: "c", q: "P(true)", mode: "tf", ans: ["false"], ref: "This is false, since there is no a in true." },
        { k: "d", q: "P(false)", mode: "tf", ans: ["true"], ref: "This is true, since there is an a in false." }
      ]
    },
    {
      no: 3,
      type: "真值判断",
      q: "Let Q(x, y) denote the statement “x is the capital of y.” What are these truth values?",
      parts: [
        { k: "a", q: "Q(Denver, Colorado)", mode: "tf", ans: ["true"], ref: "True: Denver is the capital of Colorado." },
        { k: "b", q: "Q(Detroit, Michigan)", mode: "tf", ans: ["false"], ref: "False: Detroit is not the capital of Michigan (Lansing is)." },
        { k: "c", q: "Q(Massachusetts, Boston)", mode: "tf", ans: ["false"], ref: "False: Massachusetts is a state, not a city; Boston is the capital of Massachusetts, so the arguments are reversed." },
        { k: "d", q: "Q(New York, New York)", mode: "tf", ans: ["true"], ref: "True: New York City is the capital of the state of New York." }
      ]
    },
    {
      no: 4,
      type: "求值",
      q: "State the value of x after the statement if P(x) then x := 1 is executed, where P(x) is the statement “x > 1,” if the value of x when this statement is reached is",
      parts: [
        { k: "a", q: "x = 0.", mode: "short", ans: ["0"], ref: "Here x is still equal to 0, since the condition is false." },
        { k: "b", q: "x = 1.", mode: "short", ans: ["1"], ref: "Here x is still equal to 1, since the condition is false." },
        { k: "c", q: "x = 2.", mode: "short", ans: ["1"], ref: "This time x is equal to 1 at the end, since the condition is true, so the statement x := 1 is executed." }
      ]
    },
    {
      no: 5,
      type: "量词翻译",
      q: "Let P(x) be the statement “x spends more than five hours every weekday in class,” where the domain for x consists of all students. Express each of these quantifications in English.",
      parts: [
        { k: "a", q: "∃xP(x)", mode: "self", ref: "Some student spends more than five hours every weekday in class. (Alternatively, there exists a student who spends more than five hours every weekday in class.)" },
        { k: "b", q: "∀xP(x)", mode: "self", ref: "Every student spends more than five hours every weekday in class. (Alternatively, all students spend more than five hours every weekday in class.)" },
        { k: "c", q: "∃x¬P(x)", mode: "self", ref: "Some student does not spend more than five hours every weekday in class. (Alternatively, there exists a student who spends at most five hours every weekday in class.)" },
        { k: "d", q: "∀x¬P(x)", mode: "self", ref: "No student spends more than five hours every weekday in class. (Alternatively, every student spends at most five hours every weekday in class.)" }
      ]
    },
    {
      no: 6,
      type: "量词翻译",
      q: "Let N(x) be the statement “x has visited North Dakota,” where the domain consists of the students in your school. Express each of these quantifications in English.",
      parts: [
        { k: "a", q: "∃xN(x)", mode: "self", ref: "Some student in the school has visited North Dakota. (Alternatively, there exists a student in the school who has visited North Dakota.)" },
        { k: "b", q: "∀xN(x)", mode: "self", ref: "Every student in the school has visited North Dakota. (Alternatively, all students in the school have visited North Dakota.)" },
        { k: "c", q: "¬∃xN(x)", mode: "self", ref: "This is the negation of part (a): No student in the school has visited North Dakota. (Alternatively, there does not exist a student in the school who has visited North Dakota.)" },
        { k: "d", q: "∃x¬N(x)", mode: "self", ref: "Some student in the school has not visited North Dakota. (Alternatively, there exists a student in the school who has not visited North Dakota.)" },
        { k: "e", q: "¬∀xN(x)", mode: "self", ref: "This is the negation of part (b): It is not true that every student in the school has visited North Dakota. (Alternatively, not all students in the school have visited North Dakota.)" },
        { k: "f", q: "∀x¬N(x)", mode: "self", ref: "All students in the school have not visited North Dakota. (This is technically the correct answer, although common English usage takes this sentence to mean—incorrectly—the answer to part (e). To be perfectly clear, one could say that every student in this school has failed to visit North Dakota, or simply that no student has visited North Dakota.) Note also that parts (c) and (f) are equivalent, and parts (d) and (e) are equivalent, but these two pairs are not equivalent to each other." }
      ]
    },
    {
      no: 7,
      type: "量词翻译",
      q: "Translate these statements into English, where C(x) is “x is a comedian” and F(x) is “x is funny” and the domain consists of all people.",
      parts: [
        { k: "a", q: "∀x(C(x) → F(x))", mode: "self", ref: "Every comedian is funny. (Alternatively, if a person is a comedian, then that person is funny.)" },
        { k: "b", q: "∀x(C(x) ∧ F(x))", mode: "self", ref: "Every person is a comedian and is funny." },
        { k: "c", q: "∃x(C(x) → F(x))", mode: "self", ref: "There exists a person such that if that person is a comedian, then that person is funny. (Note that this is trivially true, satisfied, for example, by anyone who is not a comedian, so it is not the sort of thing one would normally say.)" },
        { k: "d", q: "∃x(C(x) ∧ F(x))", mode: "self", ref: "There is a person who is a comedian and who is funny. (Alternatively, some comedians are funny.)" }
      ]
    },
    {
      no: 8,
      type: "量词翻译",
      q: "Translate these statements into English, where R(x) is “x is a rabbit” and H(x) is “x hops” and the domain consists of all animals.",
      parts: [
        { k: "a", q: "∀x(R(x) → H(x))", mode: "self", ref: "If an animal is a rabbit, then that animal hops. (Alternatively, every rabbit hops.)" },
        { k: "b", q: "∀x(R(x) ∧ H(x))", mode: "self", ref: "Every animal is a rabbit and hops." },
        { k: "c", q: "∃x(R(x) → H(x))", mode: "self", ref: "There exists an animal such that if it is a rabbit, then it hops. (Note that this is trivially true, satisfied, for example, by lions, so it is not the sort of thing one would say.)" },
        { k: "d", q: "∃x(R(x) ∧ H(x))", mode: "self", ref: "There exists an animal that is a rabbit and hops. (Alternatively, some rabbits hop. Alternatively, some hopping animals are rabbits.)" }
      ]
    },
    {
      no: 9,
      type: "量词翻译",
      q: "Let P(x) be the statement “x can speak Russian” and let Q(x) be the statement “x knows the computer language C++.” Express each of these sentences in terms of P(x), Q(x), quantifiers, and logical connectives. The domain for quantifiers consists of all students at your school.",
      parts: [
        { k: "a", q: "There is a student at your school who can speak Russian and who knows C++.", mode: "short", ans: ["∃x(P(x) ∧ Q(x))"], ref: "∃x(P(x) ∧ Q(x)): there is a student who speaks Russian and who knows C++." },
        { k: "b", q: "There is a student at your school who can speak Russian but who doesn’t know C++.", mode: "short", ans: ["∃x(P(x) ∧ ¬Q(x))"], ref: "∃x(P(x) ∧ ¬Q(x)): there is a student who speaks Russian but does not know C++." },
        { k: "c", q: "Every student at your school either can speak Russian or knows C++.", mode: "short", ans: ["∀x(P(x) ∨ Q(x))"], ref: "∀x(P(x) ∨ Q(x)): every student can speak Russian or knows C++." },
        { k: "d", q: "No student at your school can speak Russian or knows C++.", mode: "short", ans: ["∀x(¬P(x) ∧ ¬Q(x))"], ref: "∀x(¬P(x) ∧ ¬Q(x)): no student can speak Russian or knows C++." }
      ]
    },
    {
      no: 10,
      type: "量词翻译",
      q: "Let C(x) be the statement “x has a cat,” let D(x) be the statement “x has a dog,” and let F(x) be the statement “x has a ferret.” Express each of these statements in terms of C(x), D(x), F(x), quantifiers, and logical connectives. Let the domain consist of all students in your class.",
      parts: [
        { k: "a", q: "A student in your class has a cat, a dog, and a ferret.", mode: "short", ans: ["∃x(C(x) ∧ D(x) ∧ F(x))"], ref: "We assume that this means that one student has all three animals: ∃x(C(x) ∧ D(x) ∧ F(x))." },
        { k: "b", q: "All students in your class have a cat, a dog, or a ferret.", mode: "short", ans: ["∀x(C(x) ∨ D(x) ∨ F(x))"], ref: "∀x(C(x) ∨ D(x) ∨ F(x))." },
        { k: "c", q: "Some student in your class has a cat and a ferret, but not a dog.", mode: "short", ans: ["∃x(C(x) ∧ F(x) ∧ ¬D(x))"], ref: "∃x(C(x) ∧ F(x) ∧ ¬D(x))." },
        { k: "d", q: "No student in your class has a cat, a dog, and a ferret.", mode: "short", ans: ["¬∃x(C(x) ∧ D(x) ∧ F(x))"], ref: "This is the negation of part (a): ¬∃x(C(x) ∧ D(x) ∧ F(x))." },
        { k: "e", q: "For each of the three animals, cats, dogs, and ferrets, there is a student in your class who has this animal as a pet.", mode: "short", ans: ["(∃xC(x)) ∧ (∃xD(x)) ∧ (∃xF(x))", "(∃xC(x)) ∧ (∃yD(y)) ∧ (∃zF(z))"], ref: "Here the owners of these pets can be different: (∃xC(x)) ∧ (∃xD(x)) ∧ (∃xF(x)). There is no harm in using the same dummy variable, but this could also be written, for example, as (∃xC(x)) ∧ (∃yD(y)) ∧ (∃zF(z))." }
      ]
    },
    {
      no: 11,
      type: "真值判断",
      q: "Let P(x) be the statement “x = x².” If the domain consists of the integers, what are these truth values?",
      parts: [
        { k: "a", q: "P(0)", mode: "tf", ans: ["true"], ref: "P(0) is true, since 0 = 0²." },
        { k: "b", q: "P(1)", mode: "tf", ans: ["true"], ref: "P(1) is true, since 1 = 1²." },
        { k: "c", q: "P(2)", mode: "tf", ans: ["false"], ref: "P(2) is false, since 2 ≠ 2² = 4." },
        { k: "d", q: "P(-1)", mode: "tf", ans: ["false"], ref: "P(-1) is false, since -1 ≠ (-1)² = 1." },
        { k: "e", q: "∃xP(x)", mode: "tf", ans: ["true"], ref: "∃xP(x) is true, since P(0) and P(1) are true." },
        { k: "f", q: "∀xP(x)", mode: "tf", ans: ["false"], ref: "∀xP(x) is false, since e.g. P(2) is false." }
      ]
    },
    {
      no: 12,
      type: "真值判断",
      q: "Let Q(x) be the statement “x + 1 > 2x.” If the domain consists of all integers, what are these truth values?",
      parts: [
        { k: "a", q: "Q(0)", mode: "tf", ans: ["true"], ref: "Since 0 + 1 > 2·0, we know that Q(0) is true." },
        { k: "b", q: "Q(-1)", mode: "tf", ans: ["true"], ref: "Since (-1) + 1 > 2·(-1), we know that Q(-1) is true." },
        { k: "c", q: "Q(1)", mode: "tf", ans: ["false"], ref: "Since 1 + 1 > 2·1 is false (2 > 2 fails), we know that Q(1) is false." },
        { k: "d", q: "∃xQ(x)", mode: "tf", ans: ["true"], ref: "From part (a) we know that there is at least one x that makes Q(x) true, so ∃xQ(x) is true." },
        { k: "e", q: "∀xQ(x)", mode: "tf", ans: ["false"], ref: "From part (c) we know that there is at least one x that makes Q(x) false, so ∀xQ(x) is false." },
        { k: "f", q: "∃x¬Q(x)", mode: "tf", ans: ["true"], ref: "From part (c) we know that there is at least one x that makes Q(x) false, so ∃x¬Q(x) is true." },
        { k: "g", q: "∀x¬Q(x)", mode: "tf", ans: ["false"], ref: "From part (a) we know that there is at least one x that makes Q(x) true, so ∀x¬Q(x) is false." }
      ]
    },
    {
      no: 13,
      type: "真值判断",
      q: "Determine the truth value of each of these statements if the domain consists of all integers.",
      parts: [
        { k: "a", q: "∀n(n + 1 > n)", mode: "tf", ans: ["true"], ref: "True: adding 1 to any integer makes it strictly larger." },
        { k: "b", q: "∃n(2ⁿ = 3ⁿ)", mode: "tf", ans: ["true"], ref: "True: n = 0 works, since 2⁰ = 3⁰ = 1. (For n ≠ 0, 2ⁿ ≠ 3ⁿ.)" },
        { k: "c", q: "∃n(n = -n)", mode: "tf", ans: ["true"], ref: "True: n = 0 works." },
        { k: "d", q: "∀n(3ⁿ ≤ 4ⁿ)", mode: "tf", ans: ["false"], ref: "False: for n = -1 we get 3⁻¹ = 1/3 > 1/4 = 4⁻¹." }
      ]
    },
    {
      no: 14,
      type: "真值判断",
      q: "Determine the truth value of each of these statements if the domain consists of all real numbers.",
      parts: [
        { k: "a", q: "∃x(x³ = -1)", mode: "tf", ans: ["true"], ref: "Since (-1)³ = -1, this is true." },
        { k: "b", q: "∃x(x⁴ < x²)", mode: "tf", ans: ["true"], ref: "Since (1/2)⁴ < (1/2)², this is true." },
        { k: "c", q: "∀x((-x)² = x²)", mode: "tf", ans: ["true"], ref: "Since (-x)² = ((-1)x)² = (-1)²x² = x², we know that ∀x((-x)² = x²) is true." },
        { k: "d", q: "∀x(2x > x)", mode: "tf", ans: ["false"], ref: "Twice a positive number is larger than the number, but this inequality is not true for negative numbers or 0. Therefore ∀x(2x > x) is false." }
      ]
    },
    {
      no: 15,
      type: "真值判断",
      q: "Determine the truth value of each of these statements if the domain for all variables consists of all integers.",
      parts: [
        { k: "a", q: "∀n(n² ≥ 0)", mode: "tf", ans: ["true"], ref: "True: the square of an integer is never negative." },
        { k: "b", q: "∃n(n² = 2)", mode: "tf", ans: ["false"], ref: "False: 2 is not a perfect square, so no integer n satisfies n² = 2." },
        { k: "c", q: "∀n(n² ≥ n)", mode: "tf", ans: ["true"], ref: "True for integers: n² - n = n(n - 1) ≥ 0 for every integer n (the product of two consecutive integers is never negative). Note this would be false over the reals, e.g. n = 1/2." },
        { k: "d", q: "∃n(n² < 0)", mode: "tf", ans: ["false"], ref: "False: the square of an integer is never negative." }
      ]
    },
    {
      no: 16,
      type: "真值判断",
      q: "Determine the truth value of each of these statements if the domain of each variable consists of all real numbers.",
      parts: [
        { k: "a", q: "∃x(x² = 2)", mode: "tf", ans: ["true"], ref: "True (x = √2)." },
        { k: "b", q: "∃x(x² = -1)", mode: "tf", ans: ["false"], ref: "False (√-1 is not a real number)." },
        { k: "c", q: "∀x(x² + 2 ≥ 1)", mode: "tf", ans: ["true"], ref: "True (the left-hand side is always at least 2)." },
        { k: "d", q: "∀x(x² ≠ x)", mode: "tf", ans: ["false"], ref: "False (not true for x = 1 or x = 0)." }
      ]
    },
    {
      no: 17,
      type: "量词翻译",
      q: "Suppose that the domain of the propositional function P(x) consists of the integers 0, 1, 2, 3, and 4. Write out each of these propositions using disjunctions, conjunctions, and negations.",
      parts: [
        { k: "a", q: "∃xP(x)", mode: "short", ans: ["P(0) ∨ P(1) ∨ P(2) ∨ P(3) ∨ P(4)"], ref: "∃xP(x) is like a disjunction: P(0) ∨ P(1) ∨ P(2) ∨ P(3) ∨ P(4)." },
        { k: "b", q: "∀xP(x)", mode: "short", ans: ["P(0) ∧ P(1) ∧ P(2) ∧ P(3) ∧ P(4)"], ref: "∀xP(x) is like a conjunction: P(0) ∧ P(1) ∧ P(2) ∧ P(3) ∧ P(4)." },
        { k: "c", q: "∃x¬P(x)", mode: "short", ans: ["¬P(0) ∨ ¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4)"], ref: "¬P(0) ∨ ¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4)." },
        { k: "d", q: "∀x¬P(x)", mode: "short", ans: ["¬P(0) ∧ ¬P(1) ∧ ¬P(2) ∧ ¬P(3) ∧ ¬P(4)"], ref: "¬P(0) ∧ ¬P(1) ∧ ¬P(2) ∧ ¬P(3) ∧ ¬P(4)." },
        { k: "e", q: "¬∃xP(x)", mode: "short", ans: ["¬(P(0) ∨ P(1) ∨ P(2) ∨ P(3) ∨ P(4))", "¬P(0) ∧ ¬P(1) ∧ ¬P(2) ∧ ¬P(3) ∧ ¬P(4)"], ref: "This is just the negation of part (a): ¬(P(0) ∨ P(1) ∨ P(2) ∨ P(3) ∨ P(4)); by De Morgan’s laws this equals ¬P(0) ∧ ¬P(1) ∧ ¬P(2) ∧ ¬P(3) ∧ ¬P(4)." },
        { k: "f", q: "¬∀xP(x)", mode: "short", ans: ["¬(P(0) ∧ P(1) ∧ P(2) ∧ P(3) ∧ P(4))", "¬P(0) ∨ ¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4)"], ref: "This is just the negation of part (b): ¬(P(0) ∧ P(1) ∧ P(2) ∧ P(3) ∧ P(4)); by De Morgan’s laws this equals ¬P(0) ∨ ¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4)." }
      ]
    },
    {
      no: 18,
      type: "量词翻译",
      q: "Suppose that the domain of the propositional function P(x) consists of the integers -2, -1, 0, 1, and 2. Write out each of these propositions using disjunctions, conjunctions, and negations.",
      parts: [
        { k: "a", q: "∃xP(x)", mode: "short", ans: ["P(-2) ∨ P(-1) ∨ P(0) ∨ P(1) ∨ P(2)"], ref: "We want to assert that P(x) is true for some x in the domain, so either P(-2) is true or P(-1) is true or P(0) is true or P(1) is true or P(2) is true. Thus the answer is P(-2) ∨ P(-1) ∨ P(0) ∨ P(1) ∨ P(2)." },
        { k: "b", q: "∀xP(x)", mode: "short", ans: ["P(-2) ∧ P(-1) ∧ P(0) ∧ P(1) ∧ P(2)"], ref: "P(-2) ∧ P(-1) ∧ P(0) ∧ P(1) ∧ P(2)." },
        { k: "c", q: "∃x¬P(x)", mode: "short", ans: ["¬P(-2) ∨ ¬P(-1) ∨ ¬P(0) ∨ ¬P(1) ∨ ¬P(2)"], ref: "¬P(-2) ∨ ¬P(-1) ∨ ¬P(0) ∨ ¬P(1) ∨ ¬P(2). Note that by De Morgan’s laws the expression in part (c) is logically equivalent to the expression in part (f), and the expression in part (d) is logically equivalent to the expression in part (e)." },
        { k: "d", q: "∀x¬P(x)", mode: "short", ans: ["¬P(-2) ∧ ¬P(-1) ∧ ¬P(0) ∧ ¬P(1) ∧ ¬P(2)"], ref: "¬P(-2) ∧ ¬P(-1) ∧ ¬P(0) ∧ ¬P(1) ∧ ¬P(2)." },
        { k: "e", q: "¬∃xP(x)", mode: "short", ans: ["¬(P(-2) ∨ P(-1) ∨ P(0) ∨ P(1) ∨ P(2))", "¬P(-2) ∧ ¬P(-1) ∧ ¬P(0) ∧ ¬P(1) ∧ ¬P(2)"], ref: "This is just the negation of part (a): ¬(P(-2) ∨ P(-1) ∨ P(0) ∨ P(1) ∨ P(2))." },
        { k: "f", q: "¬∀xP(x)", mode: "short", ans: ["¬(P(-2) ∧ P(-1) ∧ P(0) ∧ P(1) ∧ P(2))", "¬P(-2) ∨ ¬P(-1) ∨ ¬P(0) ∨ ¬P(1) ∨ ¬P(2)"], ref: "This is just the negation of part (b): ¬(P(-2) ∧ P(-1) ∧ P(0) ∧ P(1) ∧ P(2))." }
      ]
    },
    {
      no: 19,
      type: "量词翻译",
      q: "Suppose that the domain of the propositional function P(x) consists of the integers 1, 2, 3, 4, and 5. Express these statements without using quantifiers, instead using only negations, disjunctions, and conjunctions.",
      parts: [
        { k: "a", q: "∃xP(x)", mode: "short", ans: ["P(1) ∨ P(2) ∨ P(3) ∨ P(4) ∨ P(5)"], ref: "∃xP(x) expands to the disjunction P(1) ∨ P(2) ∨ P(3) ∨ P(4) ∨ P(5)." },
        { k: "b", q: "∀xP(x)", mode: "short", ans: ["P(1) ∧ P(2) ∧ P(3) ∧ P(4) ∧ P(5)"], ref: "∀xP(x) expands to the conjunction P(1) ∧ P(2) ∧ P(3) ∧ P(4) ∧ P(5)." },
        { k: "c", q: "¬∃xP(x)", mode: "short", ans: ["¬(P(1) ∨ P(2) ∨ P(3) ∨ P(4) ∨ P(5))", "¬P(1) ∧ ¬P(2) ∧ ¬P(3) ∧ ¬P(4) ∧ ¬P(5)"], ref: "¬(P(1) ∨ P(2) ∨ P(3) ∨ P(4) ∨ P(5)), which by De Morgan’s laws equals ¬P(1) ∧ ¬P(2) ∧ ¬P(3) ∧ ¬P(4) ∧ ¬P(5)." },
        { k: "d", q: "¬∀xP(x)", mode: "short", ans: ["¬(P(1) ∧ P(2) ∧ P(3) ∧ P(4) ∧ P(5))", "¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4) ∨ ¬P(5)"], ref: "¬(P(1) ∧ P(2) ∧ P(3) ∧ P(4) ∧ P(5)), which by De Morgan’s laws equals ¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4) ∨ ¬P(5)." },
        { k: "e", q: "∀x((x ≠ 3) → P(x)) ∨ ∃x¬P(x)", mode: "self", ref: "Expand the two parts separately. ∀x((x ≠ 3) → P(x)) becomes P(1) ∧ P(2) ∧ P(4) ∧ P(5) (at x = 3 the hypothesis x ≠ 3 is false, so the implication is true and P(3) is not required). And ∃x¬P(x) becomes ¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4) ∨ ¬P(5). Hence the whole statement is (P(1) ∧ P(2) ∧ P(4) ∧ P(5)) ∨ (¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4) ∨ ¬P(5))." }
      ]
    },
    {
      no: 20,
      type: "量词翻译",
      q: "Suppose that the domain of the propositional function P(x) consists of -5, -3, -1, 1, 3, and 5. Express these statements without using quantifiers, instead using only negations, disjunctions, and conjunctions.",
      parts: [
        { k: "a", q: "∃xP(x)", mode: "short", ans: ["P(-5) ∨ P(-3) ∨ P(-1) ∨ P(1) ∨ P(3) ∨ P(5)"], ref: "We want to assert that P(x) is true for some x in the domain, so either P(-5) is true or P(-3) is true or P(-1) is true or P(1) is true or P(3) is true or P(5) is true. Thus the answer is P(-5) ∨ P(-3) ∨ P(-1) ∨ P(1) ∨ P(3) ∨ P(5)." },
        { k: "b", q: "∀xP(x)", mode: "short", ans: ["P(-5) ∧ P(-3) ∧ P(-1) ∧ P(1) ∧ P(3) ∧ P(5)"], ref: "P(-5) ∧ P(-3) ∧ P(-1) ∧ P(1) ∧ P(3) ∧ P(5)." },
        { k: "c", q: "∀x((x ≠ 1) → P(x))", mode: "short", ans: ["P(-5) ∧ P(-3) ∧ P(-1) ∧ P(3) ∧ P(5)", "((-5 ≠ 1) → P(-5)) ∧ ((-3 ≠ 1) → P(-3)) ∧ ((-1 ≠ 1) → P(-1)) ∧ ((1 ≠ 1) → P(1)) ∧ ((3 ≠ 1) → P(3)) ∧ ((5 ≠ 1) → P(5))"], ref: "The formal translation is as follows: ((-5 ≠ 1) → P(-5)) ∧ ((-3 ≠ 1) → P(-3)) ∧ ((-1 ≠ 1) → P(-1)) ∧ ((1 ≠ 1) → P(1)) ∧ ((3 ≠ 1) → P(3)) ∧ ((5 ≠ 1) → P(5)). However, since the hypothesis x ≠ 1 is false when x is 1 and true when x is anything other than 1, we have more simply P(-5) ∧ P(-3) ∧ P(-1) ∧ P(3) ∧ P(5)." },
        { k: "d", q: "∃x((x ≥ 0) ∧ P(x))", mode: "short", ans: ["P(1) ∨ P(3) ∨ P(5)", "((-5 ≥ 0) ∧ P(-5)) ∨ ((-3 ≥ 0) ∧ P(-3)) ∨ ((-1 ≥ 0) ∧ P(-1)) ∨ ((1 ≥ 0) ∧ P(1)) ∨ ((3 ≥ 0) ∧ P(3)) ∨ ((5 ≥ 0) ∧ P(5))"], ref: "The formal translation is as follows: ((-5 ≥ 0) ∧ P(-5)) ∨ ((-3 ≥ 0) ∧ P(-3)) ∨ ((-1 ≥ 0) ∧ P(-1)) ∨ ((1 ≥ 0) ∧ P(1)) ∨ ((3 ≥ 0) ∧ P(3)) ∨ ((5 ≥ 0) ∧ P(5)). Since only three of the x’s in the domain meet the condition, the answer is equivalent to P(1) ∨ P(3) ∨ P(5)." },
        { k: "e", q: "∃x(¬P(x)) ∧ ∀x((x < 0) → P(x))", mode: "short", ans: ["(¬P(1) ∨ ¬P(3) ∨ ¬P(5)) ∧ (P(-1) ∧ P(-3) ∧ P(-5))", "(¬P(-5) ∨ ¬P(-3) ∨ ¬P(-1) ∨ ¬P(1) ∨ ¬P(3) ∨ ¬P(5)) ∧ (P(-1) ∧ P(-3) ∧ P(-5))"], ref: "For the second part we again restrict the domain: (¬P(-5) ∨ ¬P(-3) ∨ ¬P(-1) ∨ ¬P(1) ∨ ¬P(3) ∨ ¬P(5)) ∧ (P(-1) ∧ P(-3) ∧ P(-5)). This is equivalent to (¬P(1) ∨ ¬P(3) ∨ ¬P(5)) ∧ (P(-1) ∧ P(-3) ∧ P(-5))." }
      ]
    },
    {
      no: 21,
      type: "定义域",
      q: "For each of these statements find a domain for which the statement is true and a domain for which the statement is false.",
      parts: [
        { k: "a", q: "Everyone is studying discrete mathematics.", mode: "self", ref: "True domain: the set of students enrolled in a discrete mathematics course. False domain: for example, the set of all students in a school that offers no discrete mathematics course (or the empty-of-such-students set of people). Any domain containing a person not studying discrete mathematics makes it false." },
        { k: "b", q: "Everyone is older than 21 years.", mode: "self", ref: "True domain: any set of people all of whom are older than 21 (e.g. all adults over 21). False domain: any domain containing someone aged 21 or younger (e.g. all people, or all first-grade pupils). Note that the domain must be nonempty for “everyone” to be meaningful." },
        { k: "c", q: "Every two people have the same mother.", mode: "self", ref: "True domain: a set of people who are all children of the same mother (e.g. one family of siblings). False domain: the set of all people (or any domain containing people with different mothers)." },
        { k: "d", q: "No two different people have the same grandmother.", mode: "self", ref: "True domain: a set of people no two of whom share a grandmother (e.g. one person, or people with pairwise different grandmothers). False domain: the set of all siblings (or any domain containing two people with the same grandmother)." }
      ]
    },
    {
      no: 22,
      type: "定义域",
      q: "For each of these statements find a domain for which the statement is true and a domain for which the statement is false.",
      parts: [
        { k: "a", q: "Everyone speaks Hindi.", mode: "self", ref: "Many answers are possible in each case. A domain consisting of a few adults in certain parts of India would make this true. If the domain were all residents of the United States, then this is certainly false." },
        { k: "b", q: "There is someone older than 21 years.", mode: "self", ref: "If the domain is all residents of the United States, then this is true. If the domain is the set of pupils in a first grade class, it is false." },
        { k: "c", q: "Every two people have the same first name.", mode: "self", ref: "If the domain consists of all the United States Presidents whose last name is Bush, then the statement is true. If the domain consists of all United States Presidents, then the statement is false." },
        { k: "d", q: "Someone knows more than two other people.", mode: "self", ref: "If the domain were all residents of the United States, then this is certainly true. If the domain consists of all babies born in the last five minutes, one would expect the statement to be false (it’s not even clear that these babies “know” their mothers yet)." }
      ]
    },
    {
      no: 23,
      type: "量词翻译",
      q: "Translate in two ways each of these statements into logical expressions using predicates, quantifiers, and logical connectives. First, let the domain consist of the students in your class and second, let it consist of all people.",
      parts: [
        { k: "a", q: "Someone in your class can speak Hindi.", mode: "self", ref: "Let S(x) be “x can speak Hindi” and C(x) be “x is in your class.” First way (domain = students in your class): ∃xS(x). Second way (domain = all people): ∃x(C(x) ∧ S(x))." },
        { k: "b", q: "Everyone in your class is friendly.", mode: "self", ref: "Let F(x) be “x is friendly” and C(x) be “x is in your class.” First way: ∀xF(x). Second way (domain = all people): ∀x(C(x) → F(x))." },
        { k: "c", q: "There is a person in your class who was not born in California.", mode: "self", ref: "Let B(x) be “x was born in California” and C(x) be “x is in your class.” First way: ∃x¬B(x). Second way (domain = all people): ∃x(C(x) ∧ ¬B(x))." },
        { k: "d", q: "A student in your class has been in a movie.", mode: "self", ref: "Let M(x) be “x has been in a movie” and C(x) be “x is in your class.” First way: ∃xM(x). Second way (domain = all people): ∃x(C(x) ∧ M(x))." },
        { k: "e", q: "No student in your class has taken a course in logic programming.", mode: "self", ref: "Let L(x) be “x has taken a course in logic programming” and C(x) be “x is in your class.” First way: ∀x¬L(x). Second way (domain = all people): ∀x(C(x) → ¬L(x))." }
      ]
    },
    {
      no: 24,
      type: "量词翻译",
      q: "Translate in two ways each of these statements into logical expressions using predicates, quantifiers, and logical connectives. First, let the domain consist of the students in your class and second, let it consist of all people.",
      parts: [
        { k: "a", q: "Everyone in your class has a cellular phone.", mode: "short", ans: ["∀x(P(x))", "∀xP(x)", "∀x(C(x) → P(x))"], ref: "Let P(x) be “x has a cellular phone.” Then we have ∀xP(x) the first way, or ∀x(C(x) → P(x)) the second way, where C(x) is “x is in your class.”" },
        { k: "b", q: "Somebody in your class has seen a foreign movie.", mode: "short", ans: ["∃x(F(x))", "∃xF(x)", "∃x(C(x) ∧ F(x))"], ref: "Let F(x) be “x has seen a foreign movie.” Then we have ∃xF(x) the first way, or ∃x(C(x) ∧ F(x)) the second way." },
        { k: "c", q: "There is a person in your class who cannot swim.", mode: "short", ans: ["∃x¬S(x)", "∃x(C(x) ∧ ¬S(x))"], ref: "Let S(x) be “x can swim.” Then we have ∃x¬S(x) the first way, or ∃x(C(x) ∧ ¬S(x)) the second way." },
        { k: "d", q: "All students in your class can solve quadratic equations.", mode: "short", ans: ["∀x(Q(x))", "∀xQ(x)", "∀x(C(x) → Q(x))"], ref: "Let Q(x) be “x can solve quadratic equations.” Then we have ∀xQ(x) the first way, or ∀x(C(x) → Q(x)) the second way." },
        { k: "e", q: "Some student in your class does not want to be rich.", mode: "short", ans: ["∃x¬R(x)", "∃x(C(x) ∧ ¬R(x))"], ref: "Let R(x) be “x wants to be rich.” Then we have ∃x¬R(x) the first way, or ∃x(C(x) ∧ ¬R(x)) the second way." }
      ]
    },
    {
      no: 25,
      type: "量词翻译",
      q: "Translate each of these statements into logical expressions using predicates, quantifiers, and logical connectives.",
      parts: [
        { k: "a", q: "No one is perfect.", mode: "self", ref: "Let P(x) be “x is perfect,” with the domain of discourse all people. Then ∀x¬P(x)." },
        { k: "b", q: "Not everyone is perfect.", mode: "self", ref: "Let P(x) be “x is perfect.” Then ∃x¬P(x) (equivalently ¬∀xP(x))." },
        { k: "c", q: "All your friends are perfect.", mode: "self", ref: "Let F(x) be “x is your friend” and P(x) be “x is perfect.” Then ∀x(F(x) → P(x))." },
        { k: "d", q: "At least one of your friends is perfect.", mode: "self", ref: "Let F(x) be “x is your friend” and P(x) be “x is perfect.” Then ∃x(F(x) ∧ P(x))." },
        { k: "e", q: "Everyone is your friend and is perfect.", mode: "self", ref: "Let F(x) be “x is your friend” and P(x) be “x is perfect.” Then ∀x(F(x) ∧ P(x))." },
        { k: "f", q: "Not everybody is your friend or someone is not perfect.", mode: "self", ref: "Let F(x) be “x is your friend” and P(x) be “x is perfect.” Reading the sentence as “Not everybody is your friend, or someone is not perfect,” the expression is ∃x¬F(x) ∨ ∃x¬P(x) (equivalently ∃x¬F(x) ∨ ¬∀xP(x))." }
      ]
    },
    {
      no: 26,
      type: "量词翻译",
      q: "Translate each of these statements into logical expressions in three different ways by varying the domain and by using predicates with one and with two variables.",
      parts: [
        { k: "a", q: "Someone in your school has visited Uzbekistan.", mode: "self", ref: "Let Y(x) be “x is in your school,” U(x) be “x has visited Uzbekistan,” and V(x, y) mean that person x has visited country y. Domain = schoolmates: ∃xU(x). Domain = all people: ∃x(Y(x) ∧ U(x)). With a two-variable predicate: ∃x(Y(x) ∧ V(x, Uzbekistan))." },
        { k: "b", q: "Everyone in your class has studied calculus and C++.", mode: "self", ref: "Let Y(x) be “x is in your class,” C(x) be “x has studied calculus,” P(x) be “x has studied C++,” and S(x, y) mean that person x has studied subject y. Domain = classmates: ∀x(C(x) ∧ P(x)). Domain = all people: ∀x(Y(x) → (C(x) ∧ P(x))). With a two-variable predicate: ∀x(Y(x) → (S(x, calculus) ∧ S(x, C++)))." },
        { k: "c", q: "No one in your school owns both a bicycle and a motorcycle.", mode: "self", ref: "Let Y(x) be “x is in your school,” B(x) be “x owns a bicycle,” M(x) be “x owns a motorcycle,” and O(x, y) mean that person x owns item y. Domain = schoolmates: ∀x¬(B(x) ∧ M(x)). Domain = all people: ∀x(Y(x) → ¬(B(x) ∧ M(x))). With a two-variable predicate: ∀x(Y(x) → ¬(O(x, bicycle) ∧ O(x, motorcycle))). Note that “no one” became “for all … not.”" },
        { k: "d", q: "There is a person in your school who is not happy.", mode: "self", ref: "Let Y(x) be “x is in your school,” H(x) be “x is happy,” and E(x, y) mean that person x is in mental state y. Domain = schoolmates: ∃x¬H(x). Domain = all people: ∃x(Y(x) ∧ ¬H(x)). With a two-variable predicate: ∃x(Y(x) ∧ ¬E(x, happy))." },
        { k: "e", q: "Everyone in your school was born in the twentieth century.", mode: "self", ref: "Let Y(x) be “x is in your school,” T(x) be “x was born in the twentieth century,” and B(x, y) mean that person x was born in the yth century. Domain = schoolmates: ∀xT(x). Domain = all people: ∀x(Y(x) → T(x)). With a two-variable predicate: ∀x(Y(x) → B(x, 20))." }
      ]
    },
    {
      no: 27,
      type: "量词翻译",
      q: "Translate each of these statements into logical expressions in three different ways by varying the domain and by using predicates with one and with two variables.",
      parts: [
        { k: "a", q: "A student in your school has lived in Vietnam.", mode: "self", ref: "Let Y(x) be “x is in your school,” V(x) be “x has lived in Vietnam,” and L(x, y) mean that person x has lived in country y. Domain = students: ∃xV(x). Domain = all people: ∃x(Y(x) ∧ V(x)). With a two-variable predicate: ∃x(Y(x) ∧ L(x, Vietnam))." },
        { k: "b", q: "There is a student in your school who cannot speak Hindi.", mode: "self", ref: "Let Y(x) be “x is in your school,” S(x) be “x can speak Hindi,” and S(x, y) mean that person x speaks language y. Domain = students: ∃x¬S(x). Domain = all people: ∃x(Y(x) ∧ ¬S(x)). With a two-variable predicate: ∃x(Y(x) ∧ ¬S(x, Hindi))." },
        { k: "c", q: "A student in your school knows Java, Prolog, and C++.", mode: "self", ref: "Let Y(x) be “x is in your school,” and let J(x), R(x), C(x) mean that x knows Java, Prolog, and C++ respectively (or K(x, y) mean that x knows language y). Domain = students: ∃x(J(x) ∧ R(x) ∧ C(x)). Domain = all people: ∃x(Y(x) ∧ J(x) ∧ R(x) ∧ C(x)). With a two-variable predicate: ∃x(Y(x) ∧ (K(x, Java) ∧ K(x, Prolog) ∧ K(x, C++)))." },
        { k: "d", q: "Everyone in your class enjoys Thai food.", mode: "self", ref: "Let Y(x) be “x is in your class,” T(x) be “x enjoys Thai food,” and E(x, y) mean that person x enjoys food y. Domain = classmates: ∀xT(x). Domain = all people: ∀x(Y(x) → T(x)). With a two-variable predicate: ∀x(Y(x) → E(x, Thai food))." },
        { k: "e", q: "Someone in your class does not play hockey.", mode: "self", ref: "Let Y(x) be “x is in your class,” H(x) be “x plays hockey,” and P(x, y) mean that person x plays sport y. Domain = classmates: ∃x¬H(x). Domain = all people: ∃x(Y(x) ∧ ¬H(x)). With a two-variable predicate: ∃x(Y(x) ∧ ¬P(x, hockey))." }
      ]
    },
    {
      no: 28,
      type: "量词翻译",
      q: "Translate each of these statements into logical expressions using predicates, quantifiers, and logical connectives.",
      parts: [
        { k: "a", q: "Something is not in the correct place.", mode: "short", ans: ["∃x¬R(x)"], ref: "Let R(x) be “x is in the correct place.” There exists something not in the correct place: ∃x¬R(x)." },
        { k: "b", q: "All tools are in the correct place and are in excellent condition.", mode: "short", ans: ["∀x(T(x) → (R(x) ∧ E(x)))"], ref: "Let T(x) be “x is a tool,” R(x) be “x is in the correct place,” and E(x) be “x is in excellent condition.” If something is a tool, then it is in the correct place and in excellent condition: ∀x(T(x) → (R(x) ∧ E(x)))." },
        { k: "c", q: "Everything is in the correct place and in excellent condition.", mode: "short", ans: ["∀x(R(x) ∧ E(x))"], ref: "∀x(R(x) ∧ E(x)), where the domain of discourse is all things." },
        { k: "d", q: "Nothing is in the correct place and is in excellent condition.", mode: "short", ans: ["∀x¬(R(x) ∧ E(x))"], ref: "This is saying that everything fails to satisfy the condition: ∀x¬(R(x) ∧ E(x))." },
        { k: "e", q: "One of your tools is not in the correct place, but it is in excellent condition.", mode: "short", ans: ["∃x(T(x) ∧ ¬R(x) ∧ E(x))"], ref: "There exists a tool with this property: ∃x(T(x) ∧ ¬R(x) ∧ E(x))." }
      ]
    },
    {
      no: 29,
      type: "量词翻译",
      q: "Express each of these statements using logical operators, predicates, and quantifiers.",
      parts: [
        { k: "a", q: "Some propositions are tautologies.", mode: "self", ref: "Let the domain of discourse be all propositions and let T(x) mean “x is a tautology.” Then ∃xT(x)." },
        { k: "b", q: "The negation of a contradiction is a tautology.", mode: "self", ref: "Let the domain of discourse be all propositions, C(x) mean “x is a contradiction,” and T(x) mean “x is a tautology.” Then ∀x(C(x) → T(¬x))." },
        { k: "c", q: "The disjunction of two contingencies can be a tautology.", mode: "self", ref: "Let the domain of discourse be all propositions, C(x) mean “x is a contingency,” and T(x) mean “x is a tautology.” Then ∃x∃y(C(x) ∧ C(y) ∧ T(x ∨ y))." },
        { k: "d", q: "The conjunction of two tautologies is a tautology.", mode: "self", ref: "Let the domain of discourse be all propositions and let T(x) mean “x is a tautology.” Then ∀x∀y(T(x) ∧ T(y) → T(x ∧ y))." }
      ]
    },
    {
      no: 30,
      type: "量词翻译",
      q: "Suppose the domain of the propositional function P(x, y) consists of pairs x and y, where x is 1, 2, or 3 and y is 1, 2, or 3. Write out these propositions using disjunctions and conjunctions.",
      parts: [
        { k: "a", q: "∃xP(x, 3)", mode: "short", ans: ["P(1, 3) ∨ P(2, 3) ∨ P(3, 3)"], ref: "P(1, 3) ∨ P(2, 3) ∨ P(3, 3)." },
        { k: "b", q: "∀yP(1, y)", mode: "short", ans: ["P(1, 1) ∧ P(1, 2) ∧ P(1, 3)"], ref: "P(1, 1) ∧ P(1, 2) ∧ P(1, 3)." },
        { k: "c", q: "∃y¬P(2, y)", mode: "short", ans: ["¬P(2, 1) ∨ ¬P(2, 2) ∨ ¬P(2, 3)"], ref: "¬P(2, 1) ∨ ¬P(2, 2) ∨ ¬P(2, 3)." },
        { k: "d", q: "∀x¬P(x, 2)", mode: "short", ans: ["¬P(1, 2) ∧ ¬P(2, 2) ∧ ¬P(3, 2)"], ref: "¬P(1, 2) ∧ ¬P(2, 2) ∧ ¬P(3, 2)." }
      ]
    },
    {
      no: 31,
      type: "量词翻译",
      q: "Suppose that the domain of Q(x, y, z) consists of triples x, y, z, where x = 0, 1, or 2, y = 0 or 1, and z = 0 or 1. Write out these propositions using disjunctions and conjunctions.",
      parts: [
        { k: "a", q: "∀yQ(0, y, 0)", mode: "short", ans: ["Q(0, 0, 0) ∧ Q(0, 1, 0)"], ref: "Q(0, 0, 0) ∧ Q(0, 1, 0), since y ranges over 0 and 1." },
        { k: "b", q: "∃xQ(x, 1, 1)", mode: "short", ans: ["Q(0, 1, 1) ∨ Q(1, 1, 1) ∨ Q(2, 1, 1)"], ref: "Q(0, 1, 1) ∨ Q(1, 1, 1) ∨ Q(2, 1, 1), since x ranges over 0, 1, and 2." },
        { k: "c", q: "∃z¬Q(0, 0, z)", mode: "short", ans: ["¬Q(0, 0, 0) ∨ ¬Q(0, 0, 1)"], ref: "¬Q(0, 0, 0) ∨ ¬Q(0, 0, 1), since z ranges over 0 and 1." },
        { k: "d", q: "∃x¬Q(x, 0, 1)", mode: "short", ans: ["¬Q(0, 0, 1) ∨ ¬Q(1, 0, 1) ∨ ¬Q(2, 0, 1)"], ref: "¬Q(0, 0, 1) ∨ ¬Q(1, 0, 1) ∨ ¬Q(2, 0, 1), since x ranges over 0, 1, and 2." }
      ]
    },
    {
      no: 32,
      type: "量词否定",
      q: "Express each of these statements using quantifiers. Then form the negation of the statement so that no negation is to the left of a quantifier. Next, express the negation in simple English. (Do not simply use the phrase “It is not the case that.”)",
      parts: [
        { k: "a", q: "All dogs have fleas.", mode: "self", ref: "Let F(x) be “x has fleas,” and let the domain of discourse be dogs. Our original statement is ∀xF(x). Its negation is ∃x¬F(x). In English this reads “There is a dog that does not have fleas.”" },
        { k: "b", q: "There is a horse that can add.", mode: "self", ref: "Let H(x) be “x can add,” where the domain of discourse is horses. Then our original statement is ∃xH(x). Its negation is ∀x¬H(x). In English this is rendered most simply as “No horse can add.”" },
        { k: "c", q: "Every koala can climb.", mode: "self", ref: "Let C(x) be “x can climb,” and let the domain of discourse be koalas. Our original statement is ∀xC(x). Its negation is ∃x¬C(x). In English this reads “There is a koala that cannot climb.”" },
        { k: "d", q: "No monkey can speak French.", mode: "self", ref: "Let F(x) be “x can speak French,” and let the domain of discourse be monkeys. Our original statement is ¬∃xF(x) or ∀x¬F(x). Its negation is ∃xF(x). In English this reads “There is a monkey that can speak French.”" },
        { k: "e", q: "There exists a pig that can swim and catch fish.", mode: "self", ref: "Let S(x) be “x can swim” and C(x) be “x can catch fish,” where the domain of discourse is pigs. Then our original statement is ∃x(S(x) ∧ C(x)). Its negation is ∀x¬(S(x) ∧ C(x)), which could also be written ∀x(¬S(x) ∨ ¬C(x)) by De Morgan’s law. In English this is “No pig can both swim and catch fish,” or “Every pig either is unable to swim or is unable to catch fish.”" }
      ]
    },
    {
      no: 33,
      type: "量词否定",
      q: "Express each of these statements using quantifiers. Then form the negation of the statement, so that no negation is to the left of a quantifier. Next, express the negation in simple English. (Do not simply use the phrase “It is not the case that.”)",
      parts: [
        { k: "a", q: "Some old dogs can learn new tricks.", mode: "self", ref: "Let O(x) be “x is old,” D(x) be “x is a dog,” and L(x) be “x can learn new tricks,” with the domain of discourse all dogs. The original statement is ∃x(O(x) ∧ D(x) ∧ L(x)). Its negation is ∀x¬(O(x) ∧ D(x) ∧ L(x)), i.e. no old dog can learn new tricks: “There is no old dog that can learn new tricks.”" },
        { k: "b", q: "No rabbit knows calculus.", mode: "self", ref: "Let R(x) be “x is a rabbit” and K(x) be “x knows calculus,” with the domain of discourse all animals. The original statement is ¬∃x(R(x) ∧ K(x)) or ∀x(R(x) → ¬K(x)). Its negation is ∃x(R(x) ∧ K(x)): “Some rabbit knows calculus.”" },
        { k: "c", q: "Every bird can fly.", mode: "self", ref: "Let B(x) be “x is a bird” and F(x) be “x can fly,” with the domain of discourse all animals. The original statement is ∀x(B(x) → F(x)). Its negation is ∃x(B(x) ∧ ¬F(x)): “There is a bird that cannot fly.”" },
        { k: "d", q: "There is no dog that can talk.", mode: "self", ref: "Let D(x) be “x is a dog” and T(x) be “x can talk,” with the domain of discourse all animals. The original statement is ¬∃x(D(x) ∧ T(x)) or ∀x(D(x) → ¬T(x)). Its negation is ∃x(D(x) ∧ T(x)): “There is a dog that can talk.”" },
        { k: "e", q: "There is no one in this class who knows French and Russian.", mode: "self", ref: "Let K(x, y) be “x knows language y,” with the domain of discourse the people in this class. The original statement is ¬∃x(K(x, French) ∧ K(x, Russian)) or ∀x¬(K(x, French) ∧ K(x, Russian)). Its negation is ∃x(K(x, French) ∧ K(x, Russian)): “Someone in this class knows French and Russian.”" }
      ]
    },
    {
      no: 34,
      type: "量词否定",
      q: "Express the negation of these propositions using quantifiers, and then express the negation in English.",
      parts: [
        { k: "a", q: "Some drivers do not obey the speed limit.", mode: "self", ref: "Let S(x) be “x obeys the speed limit,” where the domain of discourse is drivers. The original statement is ∃x¬S(x); the negation is ∀xS(x), “All drivers obey the speed limit.”" },
        { k: "b", q: "All Swedish movies are serious.", mode: "self", ref: "Let S(x) be “x is serious,” where the domain of discourse is Swedish movies. The original statement is ∀xS(x); the negation is ∃x¬S(x), “Some Swedish movies are not serious.”" },
        { k: "c", q: "No one can keep a secret.", mode: "self", ref: "Let S(x) be “x can keep a secret,” where the domain of discourse is people. The original statement is ¬∃xS(x); the negation is ∃xS(x), “Some people can keep a secret.”" },
        { k: "d", q: "There is someone in this class who does not have a good attitude.", mode: "self", ref: "Let A(x) be “x has a good attitude,” where the domain of discourse is people in this class. The original statement is ∃x¬A(x); the negation is ∀xA(x), “Everyone in this class has a good attitude.”" }
      ]
    },
    {
      no: 35,
      type: "量词否定",
      q: "Express the negation of each of these statements in terms of quantifiers without using the negation symbol.",
      parts: [
        { k: "a", q: "∀x(x > 1)", mode: "short", ans: ["∃x(x ≤ 1)"], ref: "The negation is ∃x(x ≤ 1): there is an x that is not greater than 1." },
        { k: "b", q: "∀x(x ≤ 2)", mode: "short", ans: ["∃x(x > 2)"], ref: "The negation is ∃x(x > 2): there is an x that is greater than 2." },
        { k: "c", q: "∃x(x ≥ 4)", mode: "short", ans: ["∀x(x < 4)"], ref: "The negation is ∀x(x < 4): every x is less than 4." },
        { k: "d", q: "∃x(x < 0)", mode: "short", ans: ["∀x(x ≥ 0)"], ref: "The negation is ∀x(x ≥ 0): every x is nonnegative." },
        { k: "e", q: "∀x((x < -1) ∨ (x > 2))", mode: "short", ans: ["∃x((x ≥ -1) ∧ (x ≤ 2))", "∃x(-1 ≤ x ≤ 2)"], ref: "The negation is ∃x((x ≥ -1) ∧ (x ≤ 2)): there is an x between -1 and 2 inclusive." },
        { k: "f", q: "∃x((x < 4) ∨ (x > 7))", mode: "short", ans: ["∀x((x ≥ 4) ∧ (x ≤ 7))", "∀x(4 ≤ x ≤ 7)"], ref: "The negation is ∀x((x ≥ 4) ∧ (x ≤ 7)): every x lies between 4 and 7 inclusive." }
      ]
    },
    {
      no: 36,
      type: "量词否定",
      q: "Express the negation of each of these statements in terms of quantifiers without using the negation symbol.",
      parts: [
        { k: "a", q: "∀x(-2 < x < 3)", mode: "short", ans: ["∃x((x ≤ -2) ∨ (x ≥ 3))"], ref: "∃x((x ≤ -2) ∨ (x ≥ 3))." },
        { k: "b", q: "∀x(0 ≤ x < 5)", mode: "short", ans: ["∃x((x < 0) ∨ (x ≥ 5))"], ref: "∃x((x < 0) ∨ (x ≥ 5))." },
        { k: "c", q: "∃x(-4 ≤ x ≤ 1)", mode: "short", ans: ["∀x((x < -4) ∨ (x > 1))"], ref: "∀x((x < -4) ∨ (x > 1))." },
        { k: "d", q: "∃x(-5 < x < -1)", mode: "short", ans: ["∀x((x ≤ -5) ∨ (x ≥ -1))"], ref: "∀x((x ≤ -5) ∨ (x ≥ -1))." }
      ]
    },
    {
      no: 37,
      type: "反例",
      q: "Find a counterexample, if possible, to these universally quantified statements, where the domain for all variables consists of all integers.",
      parts: [
        { k: "a", q: "∀x(x² ≥ x)", mode: "short", ans: ["No counterexample", "No counterexample exists", "None"], ref: "There is no counterexample: for every integer x, x² - x = x(x - 1) ≥ 0, so the statement is true over the integers. (Note that over the real numbers it would be false, e.g. x = 1/2.)" },
        { k: "b", q: "∀x(x > 0 ∨ x < 0)", mode: "short", ans: ["x = 0"], ref: "The counterexample is x = 0, since neither 0 > 0 nor 0 < 0 holds." },
        { k: "c", q: "∀x(x = 1)", mode: "short", ans: ["x = 2", "x = 0"], ref: "A counterexample is x = 2 (any integer other than 1 works, e.g. x = 0), since x = 1 is false for those values." }
      ]
    },
    {
      no: 38,
      type: "反例",
      q: "Find a counterexample, if possible, to these universally quantified statements, where the domain for all variables consists of all real numbers.",
      parts: [
        { k: "a", q: "∀x(x² ≠ x)", mode: "short", ans: ["x = 1", "x = 0"], ref: "Since 1² = 1, this statement is false; x = 1 is a counterexample. So is x = 0 (these are the only two counterexamples)." },
        { k: "b", q: "∀x(x² ≠ 2)", mode: "short", ans: ["x = √2", "x = -√2"], ref: "There are two counterexamples: x = √2 and x = -√2." },
        { k: "c", q: "∀x(|x| > 0)", mode: "short", ans: ["x = 0"], ref: "There is one counterexample: x = 0, since |0| = 0 is not greater than 0." }
      ]
    },
    {
      no: 39,
      type: "量词翻译",
      q: "Express each of these statements using predicates and quantifiers.",
      parts: [
        { k: "a", q: "A passenger on an airline qualifies as an elite flyer if the passenger flies more than 25,000 miles in a year or takes more than 25 flights during that year.", mode: "self", ref: "Let the domain of discourse be all passengers and let E(x) be “x qualifies as an elite flyer,” M(x) be “x flies more than 25,000 miles in a year,” and F(x) be “x takes more than 25 flights during the year.” Then ∀x((M(x) ∨ F(x)) → E(x)): a passenger qualifies as an elite flyer if the passenger flies more than 25,000 miles in a year or takes more than 25 flights during that year. (If the sentence is read as asserting only the existence of such a passenger, the weaker ∃x(E(x) ∧ (M(x) ∨ F(x))) is also acceptable; the two readings are not logically equivalent in general.)" },
        { k: "b", q: "A man qualifies for the marathon if his best previous time is less than 3 hours and a woman qualifies for the marathon if her best previous time is less than 3.5 hours.", mode: "self", ref: "Let the domain of discourse be all people and let M(x) be “x is a man,” W(x) be “x is a woman,” T(x) be “x’s best previous time,” and Q(x) be “x qualifies for the marathon.” Then ∀x((M(x) ∧ T(x) < 3) → Q(x)) ∧ ∀x((W(x) ∧ T(x) < 3.5) → Q(x)): a man qualifies for the marathon if his best previous time is less than 3 hours, and a woman qualifies for the marathon if her best previous time is less than 3.5 hours. (Equivalently, ∀x(((M(x) ∧ T(x) < 3) ∨ (W(x) ∧ T(x) < 3.5)) → Q(x)).)" },
        { k: "c", q: "A student must take at least 60 course hours, or at least 45 course hours and write a master’s thesis, and receive a grade no lower than a B in all required courses, to receive a master’s degree.", mode: "self", ref: "Let the domain of discourse be all students and let H(x, n) be “x takes at least n course hours,” T(x) be “x writes a master’s thesis,” G(x, z) be “the grade of x in course z,” and D(x) be “x receives a master’s degree.” Then ∀x(((H(x, 60) ∨ (H(x, 45) ∧ T(x))) ∧ ∀z(Required(x, z) → G(x, z) ≥ B)) → D(x))." },
        { k: "d", q: "There is a student who has taken more than 21 credit hours in a semester and received all A’s.", mode: "self", ref: "Let the domain of discourse be all students and let H(x) be “x takes more than 21 credit hours in a semester” and G(x, z) be “the grade of x in course z.” Then ∃x(H(x) ∧ ∀z(Course(x, z) → G(x, z) = A))." }
      ]
    },
    {
      no: 40,
      type: "系统规格",
      q: "Translate these system specifications into English, where the predicate S(x, y) is “x is in state y” and where the domain for x and y consists of all systems and all possible states, respectively.",
      parts: [
        { k: "a", q: "∃xS(x, open)", mode: "self", ref: "Some system is open." },
        { k: "b", q: "∀x(S(x, malfunctioning) ∨ S(x, diagnostic))", mode: "self", ref: "Every system is either malfunctioning or in a diagnostic state." },
        { k: "c", q: "∃xS(x, open) ∨ ∃xS(x, diagnostic)", mode: "self", ref: "Some system is open, or some system is in a diagnostic state." },
        { k: "d", q: "∃x¬S(x, available)", mode: "self", ref: "Some system is unavailable." },
        { k: "e", q: "∀x¬S(x, working)", mode: "self", ref: "No system is working. (We could also say “Every system is not working,” as long as we understood that this is different from “Not every system is working.”)" }
      ]
    },
    {
      no: 41,
      type: "系统规格",
      q: "Translate these specifications into English, where F(p) is “Printer p is out of service,” B(p) is “Printer p is busy,” L(j) is “Print job j is lost,” and Q(j) is “Print job j is queued.”",
      parts: [
        { k: "a", q: "∃p(F(p) ∧ B(p)) → ∃jL(j)", mode: "self", ref: "If there is a printer that is both out of service and busy, then there is a print job that is lost." },
        { k: "b", q: "∀pB(p) → ∃jQ(j)", mode: "self", ref: "If every printer is busy, then there is a print job that is queued." },
        { k: "c", q: "∃j(Q(j) ∧ L(j)) → ∃pF(p)", mode: "self", ref: "If there is a print job that is both queued and lost, then there is a printer that is out of service." },
        { k: "d", q: "(∀pB(p) ∧ ∀jQ(j)) → ∃jL(j)", mode: "self", ref: "If every printer is busy and every print job is queued, then there is a print job that is lost." }
      ]
    },
    {
      no: 42,
      type: "系统规格",
      q: "Express each of these system specifications using predicates, quantifiers, and logical connectives.",
      parts: [
        { k: "a", q: "When there is less than 30 megabytes free on the hard disk, a warning message is sent to all users.", mode: "short", ans: ["F(30) → ∀xW(x)"], ref: "Let F(x) be “There is less than x megabytes free on the hard disk,” with the domain of discourse being positive numbers, and let W(x) be “User x is sent a warning message.” Then we have F(30) → ∀xW(x)." },
        { k: "b", q: "No directories in the file system can be opened and no files can be closed when system errors have been detected.", mode: "short", ans: ["E → ((∀x¬O(x)) ∧ (∀x¬C(x)))"], ref: "Let O(x) be “Directory x can be opened,” let C(x) be “File x can be closed,” and let E be the proposition “System errors have been detected.” Then we have E → ((∀x¬O(x)) ∧ (∀x¬C(x)))." },
        { k: "c", q: "The file system cannot be backed up if there is a user currently logged on.", mode: "short", ans: ["(∃xL(x)) → ¬B"], ref: "Let B be the proposition “The file system can be backed up,” and let L(x) be “User x is currently logged on.” Then we have (∃xL(x)) → ¬B." },
        { k: "d", q: "Video on demand can be delivered when there are at least 8 megabytes of memory available and the connection speed is at least 56 kilobits per second.", mode: "short", ans: ["(M(8) ∧ S(56)) → D(video on demand)"], ref: "Let D(x) be “Product x can be delivered,” let M(x) be “There are at least x megabytes of memory available” and S(x) be “The connection speed is at least x kilobits per second,” where the domain of discourse for the last two propositional functions are positive numbers. Then we have (M(8) ∧ S(56)) → D(video on demand)." }
      ]
    },
    {
      no: 43,
      type: "系统规格",
      q: "Express each of these system specifications using predicates, quantifiers, and logical connectives.",
      parts: [
        { k: "a", q: "At least one mail message, among the nonempty set of messages, can be saved if there is a disk with more than 10 kilobytes of free space.", mode: "self", ref: "Let M(x) be “x is a mail message,” S(x) be “x can be saved,” F(x) be “There is more than x kilobytes of free space on disk x,” and D(x) be “x is a disk.” Then (∃x(D(x) ∧ F(10))) → ∃y(M(y) ∧ S(y))." },
        { k: "b", q: "Whenever there is an active alert, all queued messages are transmitted.", mode: "self", ref: "Let A(x) be “x is an active alert,” M(x) be “x is a message,” Q(x) be “x is queued,” and T(x) be “x is transmitted.” Then ∀x(A(x) → ∀y(M(y) ∧ Q(y) → T(y)))." },
        { k: "c", q: "The diagnostic monitor tracks the status of all systems except the main console.", mode: "self", ref: "Let S(x) be “x is a system,” K(x) be “x is the main console,” and T(x) be “x’s status is tracked by the diagnostic monitor.” Then ∀x((S(x) ∧ ¬K(x)) → T(x))." },
        { k: "d", q: "Each participant on the conference call whom the host of the call did not put on a special list was billed.", mode: "self", ref: "Let P(x) be “x is a participant on the conference call,” L(x) be “x is on the host’s special list,” and B(x) be “x was billed.” Then ∀x((P(x) ∧ ¬L(x)) → B(x))." }
      ]
    },
    {
      no: 44,
      type: "系统规格",
      q: "Express each of these system specifications using predicates, quantifiers, and logical connectives.",
      parts: [
        { k: "a", q: "Every user has access to an electronic mailbox.", mode: "short", ans: ["∀xA(x)"], ref: "Let A(x) be “User x has access to an electronic mailbox.” Then we have ∀xA(x)." },
        { k: "b", q: "The system mailbox can be accessed by everyone in the group if the file system is locked.", mode: "short", ans: ["S(file system, locked) → ∀xA(x, system mailbox)"], ref: "Let A(x, y) be “Group member x can access resource y,” and let S(x, y) be “System x is in state y.” Then we have S(file system, locked) → ∀xA(x, system mailbox)." },
        { k: "c", q: "The firewall is in a diagnostic state only if the proxy server is in a diagnostic state.", mode: "short", ans: ["S(firewall, diagnostic) → S(proxy server, diagnostic)"], ref: "Let S(x, y) be “System x is in state y.” Recalling that “only if” indicates a necessary condition, we have S(firewall, diagnostic) → S(proxy server, diagnostic)." },
        { k: "d", q: "At least one router is functioning normally if the throughput is between 100 kbps and 500 kbps and the proxy server is not in diagnostic mode.", mode: "short", ans: ["(T(100) ∧ ¬T(500) ∧ ¬M(proxy server, diagnostic)) → ∃xS(x, normal)"], ref: "Let T(x) be “The throughput is at least x kbps,” where the domain of discourse is positive numbers, let M(x, y) be “Resource x is in mode y,” and let S(x, y) be “Router x is in state y.” Then we have (T(100) ∧ ¬T(500) ∧ ¬M(proxy server, diagnostic)) → ∃xS(x, normal)." }
      ]
    },
    {
      no: 45,
      type: "等价证明",
      q: "Determine whether ∀x(P(x) → Q(x)) and ∀xP(x) → ∀xQ(x) are logically equivalent. Justify your answer.",
      parts: [
        { k: "1", q: "Are ∀x(P(x) → Q(x)) and ∀xP(x) → ∀xQ(x) logically equivalent?", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "They are logically equivalent. Indeed, ∀x(P(x) → Q(x)) ≡ ¬∃x(P(x) ∧ ¬Q(x)) ≡ ¬∃xP(x) ∨ ¬∃x¬Q(x) ≡ ∀xP(x) → ∀xQ(x). Equivalently, “every P is a Q” says exactly that “if everything is P, then everything is Q.”" }
      ]
    },
    {
      no: 46,
      type: "等价证明",
      q: "Determine whether ∀x(P(x) ↔ Q(x)) and ∀xP(x) ↔ ∀xQ(x) are logically equivalent. Justify your answer.",
      parts: [
        { k: "1", q: "Are ∀x(P(x) ↔ Q(x)) and ∀xP(x) ↔ ∀xQ(x) logically equivalent?", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Not equivalent"], ref: "Not equivalent. We want propositional functions P and Q that are sometimes, but not always, true (so that the second biconditional is F ↔ F and hence true), but such that there is an x making one true and the other false. For example, we can take P(x) to mean that x is an even number (a multiple of 2) and Q(x) to mean that x is a multiple of 3. Then an example like x = 4 or x = 9 shows that ∀x(P(x) ↔ Q(x)) is false." }
      ]
    },
    {
      no: 47,
      type: "等价证明",
      q: "Show that ∃x(P(x) ∨ Q(x)) and ∃xP(x) ∨ ∃xQ(x) are logically equivalent.",
      parts: [
        { k: "1", q: "Are ∃x(P(x) ∨ Q(x)) and ∃xP(x) ∨ ∃xQ(x) logically equivalent?", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Equivalent"], ref: "They are logically equivalent. If ∃xP(x) ∨ ∃xQ(x) is true, there is a witness x for which P(x) or Q(x) holds, so ∃x(P(x) ∨ Q(x)) is true. Conversely, if ∃x(P(x) ∨ Q(x)) is true, the witness x satisfies P(x) or Q(x), so ∃xP(x) or ∃xQ(x) holds. This is exactly the rule that an existential quantifier distributes over a disjunction." }
      ]
    },
    {
      no: 48,
      type: "空域量词",
      q: "Establish these logical equivalences, where x does not occur as a free variable in A. Assume that the domain is nonempty.",
      parts: [
        { k: "a", q: "(∀xP(x)) ∨ A ≡ ∀x(P(x) ∨ A)", mode: "self", ref: "There are two cases. If A is true, then (∀xP(x)) ∨ A is true, and since P(x) ∨ A is true for all x, ∀x(P(x) ∨ A) is also true. Thus both sides of the logical equivalence are true (hence equivalent). Now suppose that A is false. If P(x) is true for all x, then the left-hand side is true. Furthermore, the right-hand side is also true (since P(x) ∨ A is true for all x). On the other hand, if P(x) is false for some x, then both sides are false. Therefore again the two sides are logically equivalent." },
        { k: "b", q: "(∃xP(x)) ∨ A ≡ ∃x(P(x) ∨ A)", mode: "self", ref: "There are two cases. If A is true, then (∃xP(x)) ∨ A is true, and since P(x) ∨ A is true for some (really all) x, ∃x(P(x) ∨ A) is also true. Thus both sides of the logical equivalence are true (hence equivalent). Now suppose that A is false. If P(x) is true for at least one x, then the left-hand side is true. Furthermore, the right-hand side is also true (since P(x) ∨ A is true for that x). On the other hand, if P(x) is false for all x, then both sides are false. Therefore again the two sides are logically equivalent." }
      ]
    },
    {
      no: 49,
      type: "空域量词",
      q: "Establish these logical equivalences, where x does not occur as a free variable in A. Assume that the domain is nonempty.",
      parts: [
        { k: "a", q: "(∀xP(x)) ∧ A ≡ ∀x(P(x) ∧ A)", mode: "self", ref: "There are two cases. If A is false, then both sides are false, because a conjunction with a false conjunct is false. If A is true, then P(x) ∧ A is equivalent to P(x) for each x, so ∀x(P(x) ∧ A) is equivalent to ∀xP(x), which equals the left-hand side. Hence the two sides are logically equivalent." },
        { k: "b", q: "(∃xP(x)) ∧ A ≡ ∃x(P(x) ∧ A)", mode: "self", ref: "There are two cases. If A is false, then both sides are false, because a conjunction with a false conjunct is false. If A is true, then P(x) ∧ A is equivalent to P(x) for each x, so ∃x(P(x) ∧ A) is equivalent to ∃xP(x), which equals the left-hand side. Hence the two sides are logically equivalent." }
      ]
    },
    {
      no: 50,
      type: "空域量词",
      q: "Establish these logical equivalences, where x does not occur as a free variable in A. Assume that the domain is nonempty.",
      parts: [
        { k: "a", q: "∀x(A → P(x)) ≡ A → ∀xP(x)", mode: "self", ref: "There are two cases. If A is false, then both sides of the equivalence are true, because a conditional statement with a false hypothesis is true. If A is true, then A → P(x) is equivalent to P(x) for each x, so the left-hand side is equivalent to ∀xP(x), which is equivalent to the right-hand side." },
        { k: "b", q: "∃x(A → P(x)) ≡ A → ∃xP(x)", mode: "self", ref: "There are two cases. If A is false, then both sides of the equivalence are true, because a conditional statement with a false hypothesis is true (and we are assuming that the domain is nonempty). If A is true, then A → P(x) is equivalent to P(x) for each x, so the left-hand side is equivalent to ∃xP(x), which is equivalent to the right-hand side." }
      ]
    },
    {
      no: 51,
      type: "空域量词",
      q: "Establish these logical equivalences, where x does not occur as a free variable in A. Assume that the domain is nonempty.",
      parts: [
        { k: "a", q: "∀x(P(x) → A) ≡ ∃xP(x) → A", mode: "self", ref: "There are two cases. If A is true, then P(x) → A is true for every x, so the left-hand side is true; also ∃xP(x) → A is true because the consequent A is true, so both sides are true. If A is false, then P(x) → A is equivalent to ¬P(x) for each x, so ∀x(P(x) → A) is equivalent to ¬∃xP(x), i.e. to ∃xP(x) → A. Hence the two sides are logically equivalent." },
        { k: "b", q: "∃x(P(x) → A) ≡ ∀xP(x) → A", mode: "self", ref: "There are two cases. If A is true, then P(x) → A is true for every x, so the left-hand side is true; the right-hand side is also true because its consequent A is true. If A is false, then P(x) → A is equivalent to ¬P(x) for each x, so ∃x(P(x) → A) is equivalent to ∃x¬P(x), which is equivalent to ¬∀xP(x), i.e. to ∀xP(x) → A. Hence the two sides are logically equivalent." }
      ]
    },
    {
      no: 52,
      type: "等价证明",
      q: "Show that ∀xP(x) ∨ ∀xQ(x) and ∀x(P(x) ∨ Q(x)) are not logically equivalent.",
      parts: [
        { k: "1", q: "Are ∀xP(x) ∨ ∀xQ(x) and ∀x(P(x) ∨ Q(x)) logically equivalent?", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Not equivalent"], ref: "It is enough to find a counterexample. It is intuitively clear that the first proposition is asserting much more than the second. It is saying that one of the two predicates, P or Q, is universally true; whereas the second proposition is simply saying that for every x either P(x) or Q(x) holds, but which it is may well depend on x. As a simple counterexample, let P(x) be the statement that x is odd, and let Q(x) be the statement that x is even. Let the domain of discourse be the positive integers. The second proposition is true, since every positive integer is either odd or even. But the first proposition is false, since it is neither the case that all positive integers are odd nor the case that all of them are even." }
      ]
    },
    {
      no: 53,
      type: "等价证明",
      q: "Show that ∃xP(x) ∧ ∃xQ(x) and ∃x(P(x) ∧ Q(x)) are not logically equivalent.",
      parts: [
        { k: "1", q: "Are ∃xP(x) ∧ ∃xQ(x) and ∃x(P(x) ∧ Q(x)) logically equivalent?", mode: "choice", options: ["Equivalent", "Not equivalent"], ans: ["Not equivalent"], ref: "Not equivalent. The first proposition only says that some x satisfies P and possibly a different x satisfies Q; the second says one and the same x satisfies both. Counterexample: let the domain be {1, 2}, with P(1) true, P(2) false, Q(1) false, Q(2) true. Then ∃xP(x) ∧ ∃xQ(x) is true (witnesses 1 and 2 respectively), while ∃x(P(x) ∧ Q(x)) is false." }
      ]
    },
    {
      no: 54,
      type: "真值判断",
      q: "As mentioned in the text, the notation ∃!xP(x) denotes “There exists a unique x such that P(x) is true.” If the domain consists of all integers, what are the truth values of these statements?",
      parts: [
        { k: "a", q: "∃!x(x > 1)", mode: "tf", ans: ["false"], ref: "This is false, since there are many values of x that make x > 1 true." },
        { k: "b", q: "∃!x(x² = 1)", mode: "tf", ans: ["false"], ref: "This is false, since there are two values of x that make x² = 1 true." },
        { k: "c", q: "∃!x(x + 3 = 2x)", mode: "tf", ans: ["true"], ref: "This is true, since by algebra we see that the unique solution to the equation is x = 3." },
        { k: "d", q: "∃!x(x = x + 1)", mode: "tf", ans: ["false"], ref: "This is false, since there are no values of x that make x = x + 1 true." }
      ]
    }
  ]
});
