/* 1.6 Rules of Inference —— 题库数据 */
window.BANK.push({
  sec: "1.6",
  title: "Rules of Inference",
  titleCn: "推理规则",
  tips: [
    "肯定前件（Modus ponens）：由 p → q 和 p 推出 q。否定后件（Modus tollens）：由 p → q 和 ¬q 推出 ¬p。两者都是有效的推理规则。",
    "假言三段论（Hypothetical syllogism）：由 p → q 和 q → r 推出 p → r；注意「传递」不能直接用于含有否定前件的形式。",
    "析取三段论（Disjunctive syllogism）：由 p ∨ q 和 ¬p 推出 q；与合取（Conjunction）、化简（Simplification）、添加（Addition）同属命题演算规则。",
    "化简只能用于合取式（p ∧ q 推出 p），不能用于析取式；添加规则由 p 推出 p ∨ q。",
    "全称例化（Universal instantiation）与全称概括（Universal generalization）：由 ∀x P(x) 可得 P(a)；由 P(a)（a 任意）可得 ∀x P(x)。",
    "存在概括（Existential generalization）：由 P(a) 推出 ∃x P(x)；存在例化（Existential instantiation）只能引入某个未指定个体，不能指定为某个特定的人。",
    "常见谬误：肯定后件（affirming the consequent）、否定前件（denying the antecedent）、肯定结论、否定假设。判断有效性时要先构造反例。",
    "写推理证明用两栏法：左栏写命题，右栏写理由（前提 / 肯定前件 / 否定后件 / 化简 / 析取三段论等），最后一步才用全称概括。"
  ],
  items: [
    {
      no: 1,
      type: "论证形式",
      q: "Find the argument form for the following argument and determine whether it is valid. Can we conclude that the conclusion is true if the premises are true?\nIf Socrates is human, then Socrates is mortal.\nSocrates is human.\n∴ Socrates is mortal.",
      parts: [
        {
          k: "1",
          q: "Find the argument form for the following argument and determine whether it is valid. Can we conclude that the conclusion is true if the premises are true?\nIf Socrates is human, then Socrates is mortal.\nSocrates is human.\n∴ Socrates is mortal.",
          mode: "choice",
          options: ["Valid", "Invalid"],
          ans: ["Valid"],
          ref: "Argument form: p → q, p, ∴ q, where p is \"Socrates is human\" and q is \"Socrates is mortal.\" This is modus ponens, which is valid. Therefore we can conclude that the conclusion (Socrates is mortal) is true if the premises (the first two statements) are true.",
          cn: "肯定前件（modus ponens）：p → q 与 p 推出 q，有效。"
        }
      ]
    },
    {
      no: 2,
      type: "论证形式",
      q: "Find the argument form for the following argument and determine whether it is valid. Can we conclude that the conclusion is true if the premises are true?\nIf George does not have eight legs, then he is not a spider.\nGeorge is a spider.\n∴ George has eight legs.",
      parts: [
        {
          k: "1",
          q: "Find the argument form for the following argument and determine whether it is valid. Can we conclude that the conclusion is true if the premises are true?\nIf George does not have eight legs, then he is not a spider.\nGeorge is a spider.\n∴ George has eight legs.",
          mode: "choice",
          options: ["Valid", "Invalid"],
          ans: ["Valid"],
          ref: "This is modus tollens. The first statement is p → q, where p is \"George does not have eight legs\" and q is \"George is not a spider.\" The second statement is ¬q. The third is ¬p. Modus tollens is valid. We can therefore conclude that the conclusion of the argument (third statement) is true, given that the hypotheses (the first two statements) are true.",
          cn: "否定后件（modus tollens）：p → q 与 ¬q 推出 ¬p，有效。"
        }
      ]
    },
    {
      no: 3,
      type: "推理规则",
      q: "What rule of inference is used in each of these arguments?",
      parts: [
        {
          k: "a",
          q: "Alice is a mathematics major. Therefore, Alice is either a mathematics major or a computer science major.",
          mode: "choice",
          options: ["Addition", "Simplification", "Conjunction", "Modus ponens", "Disjunctive syllogism"],
          ans: ["Addition"],
          ref: "Alice is a mathematics major. Therefore, Alice is either a mathematics major or a computer science major. Addition: from p we infer p ∨ q."
        },
        {
          k: "b",
          q: "Jerry is a mathematics major and a computer science major. Therefore, Jerry is a mathematics major.",
          mode: "choice",
          options: ["Simplification", "Conjunction", "Addition", "Modus ponens", "Modus tollens"],
          ans: ["Simplification"],
          ref: "Jerry is a mathematics major and a computer science major. Therefore, Jerry is a mathematics major. Simplification: from p ∧ q we infer p."
        },
        {
          k: "c",
          q: "If it is rainy, then the pool will be closed. It is rainy. Therefore, the pool is closed.",
          mode: "choice",
          options: ["Modus ponens", "Modus tollens", "Hypothetical syllogism", "Disjunctive syllogism", "Addition"],
          ans: ["Modus ponens"],
          ref: "If it is rainy, then the pool will be closed. It is rainy. Therefore, the pool is closed. Modus ponens: from p → q and p we infer q."
        },
        {
          k: "d",
          q: "If it snows today, the university will close. The university is not closed today. Therefore, it did not snow today.",
          mode: "choice",
          options: ["Modus tollens", "Modus ponens", "Hypothetical syllogism", "Conjunction", "Simplification"],
          ans: ["Modus tollens"],
          ref: "If it snows today, the university will close. The university is not closed today. Therefore, it did not snow today. Modus tollens: from p → q and ¬q we infer ¬p."
        },
        {
          k: "e",
          q: "If I go swimming, then I will stay in the sun too long. If I stay in the sun too long, then I will sunburn. Therefore, if I go swimming, then I will sunburn.",
          mode: "choice",
          options: ["Hypothetical syllogism", "Modus ponens", "Modus tollens", "Addition", "Conjunction"],
          ans: ["Hypothetical syllogism"],
          ref: "If I go swimming, then I will stay in the sun too long. If I stay in the sun too long, then I will sunburn. Therefore, if I go swimming, then I will sunburn. Hypothetical syllogism: from p → q and q → r we infer p → r."
        }
      ]
    },
    {
      no: 4,
      type: "推理规则",
      q: "What rule of inference is used in each of these arguments?",
      parts: [
        {
          k: "a",
          q: "Kangaroos live in Australia and are marsupials. Therefore, kangaroos are marsupials.",
          mode: "choice",
          options: ["Simplification", "Conjunction", "Addition", "Modus ponens", "Modus tollens"],
          ans: ["Simplification"],
          ref: "We have taken the conjunction of two propositions and asserted one of them. This is, according to Table 1, simplification."
        },
        {
          k: "b",
          q: "It is either hotter than 100 degrees today or the pollution is dangerous. It is less than 100 degrees outside today. Therefore, the pollution is dangerous.",
          mode: "choice",
          options: ["Disjunctive syllogism", "Addition", "Simplification", "Conjunction", "Modus ponens"],
          ans: ["Disjunctive syllogism"],
          ref: "We have taken the disjunction of two propositions and the negation of one of them, and asserted the other. This is, according to Table 1, disjunctive syllogism."
        },
        {
          k: "c",
          q: "Linda is an excellent swimmer. If Linda is an excellent swimmer, then she can work as a lifeguard. Therefore, Linda can work as a lifeguard.",
          mode: "choice",
          options: ["Modus ponens", "Modus tollens", "Hypothetical syllogism", "Simplification", "Addition"],
          ans: ["Modus ponens"],
          ref: "Modus ponens: from \"If Linda is an excellent swimmer, then she can work as a lifeguard\" and \"Linda is an excellent swimmer\" we infer \"Linda can work as a lifeguard.\""
        },
        {
          k: "d",
          q: "Steve will work at a computer company this summer. Therefore, this summer Steve will work at a computer company or he will be a beach bum.",
          mode: "choice",
          options: ["Addition", "Simplification", "Conjunction", "Modus ponens", "Disjunctive syllogism"],
          ans: ["Addition"],
          ref: "Addition: from p we infer p ∨ q. Here p is \"Steve will work at a computer company this summer\" and q is \"he will be a beach bum.\""
        },
        {
          k: "e",
          q: "If I work all night on this homework, then I can answer all the exercises. If I answer all the exercises, I will understand the material. Therefore, if I work all night on this homework, then I will understand the material.",
          mode: "choice",
          options: ["Hypothetical syllogism", "Modus ponens", "Modus tollens", "Addition", "Conjunction"],
          ans: ["Hypothetical syllogism"],
          ref: "Hypothetical syllogism: from p → q and q → r we infer p → r."
        }
      ]
    },
    {
      no: 5,
      type: "推理过程",
      q: "Use rules of inference to show that the hypotheses “Randy works hard,” “If Randy works hard, then he is a dull boy,” and “If Randy is a dull boy, then he will not get the job” imply the conclusion “Randy will not get the job.”",
      parts: [
        {
          k: "1",
          q: "Use rules of inference to show that the hypotheses “Randy works hard,” “If Randy works hard, then he is a dull boy,” and “If Randy is a dull boy, then he will not get the job” imply the conclusion “Randy will not get the job.”",
          mode: "self",
          ref: "Step    Reason\n1. Randy works hard.    Hypothesis\n2. If Randy works hard, then he is a dull boy.    Hypothesis\n3. If Randy is a dull boy, then he will not get the job.    Hypothesis\n4. Randy is a dull boy.    Modus ponens using (1) and (2)\n5. Randy will not get the job.    Modus ponens using (3) and (4)\nThus the hypotheses imply the conclusion.",
          cn: "连续两次使用肯定前件（modus ponens）。"
        }
      ]
    },
    {
      no: 6,
      type: "推理过程",
      q: "Use rules of inference to show that the hypotheses “If it does not rain or if it is not foggy, then the sailing race will be held and the lifesaving demonstration will go on,” “If the sailing race is held, then the trophy will be awarded,” and “The trophy was not awarded” imply the conclusion “It rained.”",
      parts: [
        {
          k: "1",
          q: "Use rules of inference to show that the hypotheses “If it does not rain or if it is not foggy, then the sailing race will be held and the lifesaving demonstration will go on,” “If the sailing race is held, then the trophy will be awarded,” and “The trophy was not awarded” imply the conclusion “It rained.”",
          mode: "self",
          ref: "Let r be the proposition “It rains,” let f be the proposition “It is foggy,” let s be the proposition “The sailing race will be held,” let l be the proposition “The lifesaving demonstration will go on,” and let t be the proposition “The trophy will be awarded.” We are given premises (¬r ∨ ¬f) → (s ∧ l), s → t, and ¬t. We want to conclude r. We set up the proof in two columns, with reasons, as in Example 6. Note that it is valid to replace subexpressions by other expressions logically equivalent to them.\nStep    Reason\n1. ¬t    Hypothesis\n2. s → t    Hypothesis\n3. ¬s    Modus tollens using (1) and (2)\n4. (¬r ∨ ¬f) → (s ∧ l)    Hypothesis\n5. ¬(s ∧ l) → ¬(¬r ∨ ¬f)    Contrapositive of (4)\n6. (¬s ∨ ¬l) → (r ∧ f)    De Morgan's law and double negative\n7. ¬s ∨ ¬l    Addition, using (3)\n8. r ∧ f    Modus ponens using (6) and (7)\n9. r    Simplification using (8)",
          cn: "关键：先由否定后件得 ¬s，再用第一前提的逆否命题 + 德摩根律。"
        }
      ]
    },
    {
      no: 7,
      type: "推理规则",
      q: "What rules of inference are used in this famous argument? “All men are mortal. Socrates is a man. Therefore, Socrates is mortal.”",
      parts: [
        {
          k: "1",
          q: "What rules of inference are used in this famous argument? “All men are mortal. Socrates is a man. Therefore, Socrates is mortal.”",
          mode: "choice",
          options: ["Universal instantiation", "Universal generalization", "Modus ponens", "Modus tollens", "Conjunction"],
          ans: ["Universal instantiation", "Modus ponens"],
          ref: "From “All men are mortal,” i.e. ∀x(M(x) → Mort(x)), universal instantiation gives the special case “If Socrates is a man, then Socrates is mortal.” Combining this with the premise “Socrates is a man” by modus ponens gives “Socrates is mortal.”",
          cn: "全称例化 + 肯定前件，两条规则都要用到。"
        }
      ]
    },
    {
      no: 8,
      type: "推理规则",
      q: "What rules of inference are used in this argument? “No man is an island. Manhattan is an island. Therefore, Manhattan is not a man.”",
      parts: [
        {
          k: "1",
          q: "What rules of inference are used in this argument? “No man is an island. Manhattan is an island. Therefore, Manhattan is not a man.”",
          mode: "choice",
          options: ["Universal instantiation", "Universal generalization", "Modus ponens", "Modus tollens", "Hypothetical syllogism"],
          ans: ["Universal instantiation", "Modus ponens"],
          ref: "First we use universal instantiation to conclude from “For all x, if x is a man, then x is not an island” the special case of interest, “If Manhattan is a man, then Manhattan is not an island.” Then we form the contrapositive (using also double negative): “If Manhattan is an island, then Manhattan is not a man.” Finally we use modus ponens to conclude that Manhattan is not a man. Alternatively, we could apply modus tollens.",
          cn: "也可以用否定后件（modus tollens）完成最后一步。"
        }
      ]
    },
    {
      no: 9,
      type: "推理过程",
      q: "For each of these collections of premises, what relevant conclusion or conclusions can be drawn? Explain the rules of inference used to obtain each conclusion from the premises.",
      parts: [
        {
          k: "a",
          q: "“If I take the day off, it either rains or snows.” “I took Tuesday off or I took Thursday off.” “It was sunny on Tuesday.” “It did not snow on Thursday.”",
          mode: "self",
          ref: "Reading “it was sunny on Tuesday” as “it did not rain (nor snow) on Tuesday”: suppose I had taken the day off on Tuesday. By the first premise it would then have rained or snowed on Tuesday; since it did not rain, disjunctive syllogism would force it to snow, contradicting the sunny Tuesday premise. Hence: I did not take the day off on Tuesday. Then, from “I took Tuesday off or I took Thursday off” by disjunctive syllogism: I took the day off on Thursday. By the first premise, it rained or snowed on Thursday; since it did not snow on Thursday (fourth premise), it rained on Thursday.",
          cn: "第一条前提是「下雨或下雪」，阳光表示两者都不成立；注意结论用了析取三段论。"
        },
        {
          k: "b",
          q: "“If I eat spicy foods, then I have strange dreams.” “I have strange dreams if there is thunder while I sleep.” “I did not have strange dreams.”",
          mode: "self",
          ref: "From “If I eat spicy foods, then I have strange dreams” and “I did not have strange dreams,” modus tollens gives: I do not eat spicy foods. From “I have strange dreams if there is thunder while I sleep” (thunder → strange dreams) and “I did not have strange dreams,” modus tollens gives: there was no thunder while I slept. Nothing else follows.",
          cn: "两次否定后件（modus tollens）。"
        },
        {
          k: "c",
          q: "“I am either clever or lucky.” “I am not lucky.” “If I am lucky, then I will win the lottery.”",
          mode: "self",
          ref: "From “I am either clever or lucky” and “I am not lucky,” disjunctive syllogism gives: I am clever. The third premise, “If I am lucky, then I will win the lottery,” yields nothing further, because we already know I am not lucky; no conclusion about winning the lottery can be drawn.",
          cn: "析取三段论；第三条前提用不上。"
        },
        {
          k: "d",
          q: "“Every computer science major has a personal computer.” “Ralph does not have a personal computer.” “Ann has a personal computer.”",
          mode: "self",
          ref: "From “Every computer science major has a personal computer” and “Ralph does not have a personal computer,” universal instantiation followed by modus tollens gives: Ralph is not a computer science major. Nothing can be concluded about Ann: from “Ann has a personal computer” we cannot conclude that Ann is a computer science major (that would be affirming the consequent).",
          cn: "肯定后件谬误：不能由「有个人电脑」推出「是计算机科学专业」。"
        },
        {
          k: "e",
          q: "“What is good for corporations is good for the United States.” “What is good for the United States is good for you.” “What is good for corporations is for you to buy lots of stuff.”",
          mode: "self",
          ref: "Let G = “What is good for corporations,” U = “What is good for the United States,” Y = “What is good for you,” S = “for you to buy lots of stuff.” The premises are G → U, U → Y, G → S. From the first two premises, hypothetical syllogism gives G → Y: what is good for corporations is good for you. Also, by conjunction, what is good for corporations is both good for the United States and for you to buy lots of stuff. We cannot conclude U → S; that does not follow from the premises.",
          cn: "假言三段论把前两条前提串起来；不能由 G→U 与 G→S 推出 U→S。"
        },
        {
          k: "f",
          q: "“All rodents gnaw their food.” “Mice are rodents.” “Rabbits do not gnaw their food.” “Bats are not rodents.”",
          mode: "self",
          ref: "From “All rodents gnaw their food” and “Mice are rodents,” universal instantiation plus modus ponens gives: mice gnaw their food. From “All rodents gnaw their food” and “Rabbits do not gnaw their food,” universal instantiation plus modus tollens gives: rabbits are not rodents. From “All rodents gnaw their food” and “Bats are not rodents,” modus tollens gives: bats do not gnaw their food.",
          cn: "全称例化后，分别用肯定前件与否定后件。"
        }
      ]
    },
    {
      no: 10,
      type: "推理过程",
      q: "For each of these sets of premises, what relevant conclusion or conclusions can be drawn? Explain the rules of inference used to obtain each conclusion from the premises.",
      parts: [
        {
          k: "a",
          q: "“If I play hockey, then I am sore the next day.” “I use the whirlpool if I am sore.” “I did not use the whirlpool.”",
          mode: "self",
          ref: "If we use modus tollens starting from the back, then we conclude that I am not sore. Another application of modus tollens then tells us that I did not play hockey."
        },
        {
          k: "b",
          q: "“If I work, it is either sunny or partly sunny.” “I worked last Monday or I worked last Friday.” “It was not sunny on Tuesday.” “It was not partly sunny on Friday.”",
          mode: "self",
          ref: "We really can't conclude anything specific here."
        },
        {
          k: "c",
          q: "“All insects have six legs.” “Dragonflies are insects.” “Spiders do not have six legs.” “Spiders eat dragonflies.”",
          mode: "self",
          ref: "By universal instantiation, we conclude from the first conditional statement by modus ponens that dragonflies have six legs, and we conclude by modus tollens that spiders are not insects. We could say using existential generalization that, for example, there exists a non-six-legged creature that eats a six-legged creature, and that there exists a non-insect that eats an insect."
        },
        {
          k: "d",
          q: "“Every student has an Internet account.” “Homer does not have an Internet account.” “Maggie has an Internet account.”",
          mode: "self",
          ref: "We can apply universal instantiation to the conditional statement and conclude that if Homer (respectively, Maggie) is a student, then he (she) has an Internet account. Now modus tollens tells us that Homer is not a student. There are no conclusions to be drawn about Maggie."
        },
        {
          k: "e",
          q: "“All foods that are healthy to eat do not taste good.” “Tofu is healthy to eat.” “You only eat what tastes good.” “You do not eat tofu.” “Cheeseburgers are not healthy to eat.”",
          mode: "self",
          ref: "The first conditional statement is that if x is healthy to eat, then x does not taste good. Universal instantiation and modus ponens therefore tell us that tofu does not taste good. The third sentence says that if you eat x, then x tastes good. Therefore the fourth hypothesis already follows (by modus tollens) from the first three. No conclusions can be drawn about cheeseburgers from these statements."
        },
        {
          k: "f",
          q: "“I am either dreaming or hallucinating.” “I am not dreaming.” “If I am hallucinating, I see elephants running down the road.”",
          mode: "self",
          ref: "By disjunctive syllogism, the first two hypotheses allow us to conclude that I am hallucinating. Therefore by modus ponens we know that I see elephants running down the road."
        }
      ]
    },
    {
      no: 11,
      type: "论证形式",
      q: "Show that the argument form with premises p1, p2, …, pn and conclusion q → r is valid if the argument form with premises p1, p2, …, pn, q, and conclusion r is valid.",
      parts: [
        {
          k: "1",
          q: "Show that the argument form with premises p1, p2, …, pn and conclusion q → r is valid if the argument form with premises p1, p2, …, pn, q, and conclusion r is valid.",
          mode: "self",
          ref: "Suppose the second argument form is valid, that is, p1, p2, …, pn, q ⊨ r. To prove the first form valid, assume p1, p2, …, pn are true. If q is also true, then by the validity of the second form r follows. Hence whenever the premises p1, …, pn hold, the conditional q → r holds, so p1, …, pn ⊨ q → r. Equivalently, the two argument forms are equivalent: adjoining q as a premise and concluding r is the same as concluding q → r (conditional proof).",
          cn: "等价于「附加前提法／条件证明」：q → r 与 ¬q ∨ r 的关系。"
        }
      ]
    },
    {
      no: 12,
      type: "推理过程",
      q: "Show that the argument form with premises (p ∧ t) → (r ∨ s), q → (u ∧ t), u → p, and ¬s and conclusion q → r is valid by first using Exercise 11 and then using rules of inference from Table 1.",
      parts: [
        {
          k: "1",
          q: "Show that the argument form with premises (p ∧ t) → (r ∨ s), q → (u ∧ t), u → p, and ¬s and conclusion q → r is valid by first using Exercise 11 and then using rules of inference from Table 1.",
          mode: "self",
          ref: "Applying Exercise 11, we want to show that the conclusion r follows from the five premises (p ∧ t) → (r ∨ s), q → (u ∧ t), u → p, ¬s, and q. From q and q → (u ∧ t) we get u ∧ t by modus ponens. From there we get both u and t by simplification (and the commutative law). From u and u → p we get p by modus ponens. From p and t we get p ∧ t by conjunction. From that and (p ∧ t) → (r ∨ s) we get r ∨ s by modus ponens. From that and ¬s we finally get r by disjunctive syllogism.",
          cn: "先用习题 11 化归为带附加前提 q 的形式，再依次用肯定前件、化简、合取、析取三段论。"
        }
      ]
    },
    {
      no: 13,
      type: "推理过程",
      q: "For each of these arguments, explain which rules of inference are used for each step.",
      parts: [
        {
          k: "a",
          q: "“Doug, a student in this class, knows how to write programs in JAVA. Everyone who knows how to write programs in JAVA can get a high-paying job. Therefore, someone in this class can get a high-paying job.”",
          mode: "self",
          ref: "Universal instantiation: from “Everyone who knows how to write programs in JAVA can get a high-paying job” conclude “Doug can get a high-paying job.” Modus ponens: together with the premise “Doug knows how to write programs in JAVA,” conclude “Doug can get a high-paying job.” Existential generalization: since Doug is a student in this class, conclude “someone in this class can get a high-paying job.”",
          cn: "全称例化 → 肯定前件 → 存在概括。"
        },
        {
          k: "b",
          q: "“Somebody in this class enjoys whale watching. Every person who enjoys whale watching cares about ocean pollution. Therefore, there is a person in this class who cares about ocean pollution.”",
          mode: "self",
          ref: "Existential instantiation: from “Somebody in this class enjoys whale watching” introduce an unspecified person y who is in this class and enjoys whale watching. Universal instantiation: from “Every person who enjoys whale watching cares about ocean pollution” conclude “y cares about ocean pollution.” Existential generalization: conclude “there is a person in this class who cares about ocean pollution.”",
          cn: "存在例化 → 全称例化 → 存在概括；例化得到的个体必须是未指定的。"
        },
        {
          k: "c",
          q: "“Each of the 93 students in this class owns a personal computer. Everyone who owns a personal computer can use a word processing program. Therefore, Zeke, a student in this class, can use a word processing program.”",
          mode: "self",
          ref: "Universal instantiation: from “Each of the 93 students in this class owns a personal computer” conclude “Zeke owns a personal computer”; from “Everyone who owns a personal computer can use a word processing program” conclude “Zeke can use a word processing program.” Modus ponens: combining the two previous steps gives the conclusion. (The number 93 is irrelevant to the inference.)",
          cn: "两次全称例化 + 肯定前件。"
        },
        {
          k: "d",
          q: "“Everyone in New Jersey lives within 50 miles of the ocean. Someone in New Jersey has never seen the ocean. Therefore, someone who lives within 50 miles of the ocean has never seen the ocean.”",
          mode: "self",
          ref: "Existential instantiation: let y be a person in New Jersey who has never seen the ocean. Universal instantiation: from “Everyone in New Jersey lives within 50 miles of the ocean” conclude “y lives within 50 miles of the ocean.” Conjunction: y lives within 50 miles of the ocean and y has never seen the ocean. Existential generalization: conclude “someone who lives within 50 miles of the ocean has never seen the ocean.”",
          cn: "存在例化 → 全称例化 → 合取 → 存在概括。"
        }
      ]
    },
    {
      no: 14,
      type: "推理过程",
      q: "For each of these arguments, explain which rules of inference are used for each step.",
      parts: [
        {
          k: "a",
          q: "“Linda, a student in this class, owns a red convertible. Everyone who owns a red convertible has gotten at least one speeding ticket. Therefore, someone in this class has gotten a speeding ticket.”",
          mode: "self",
          ref: "Let c(x) be “x is in this class,” let r(x) be “x owns a red convertible,” and let t(x) be “x has gotten a speeding ticket.” We are given premises c(Linda), r(Linda), ∀x(r(x) → t(x)), and we want to conclude ∃x(c(x) ∧ t(x)).\nStep    Reason\n1. ∀x(r(x) → t(x))    Hypothesis\n2. r(Linda) → t(Linda)    Universal instantiation using (1)\n3. r(Linda)    Hypothesis\n4. t(Linda)    Modus ponens using (2) and (3)\n5. c(Linda)    Hypothesis\n6. c(Linda) ∧ t(Linda)    Conjunction using (4) and (5)\n7. ∃x(c(x) ∧ t(x))    Existential generalization using (6)"
        },
        {
          k: "b",
          q: "“Each of five roommates, Melissa, Aaron, Ralph, Veneesha, and Keeshawn, has taken a course in discrete mathematics. Every student who has taken a course in discrete mathematics can take a course in algorithms. Therefore, all five roommates can take a course in algorithms next year.”",
          mode: "self",
          ref: "Let r(x) be “x is one of the five roommates listed,” let d(x) be “x has taken a course in discrete mathematics,” and let a(x) be “x can take a course in algorithms.” We are given premises ∀x(r(x) → d(x)) and ∀x(d(x) → a(x)), and we want to conclude ∀x(r(x) → a(x)). In what follows y represents an arbitrary person.\nStep    Reason\n1. ∀x(r(x) → d(x))    Hypothesis\n2. r(y) → d(y)    Universal instantiation using (1)\n3. ∀x(d(x) → a(x))    Hypothesis\n4. d(y) → a(y)    Universal instantiation using (3)\n5. r(y) → a(y)    Hypothetical syllogism using (2) and (4)\n6. ∀x(r(x) → a(x))    Universal generalization using (5)",
          cn: "最后一步才可用全称概括，因为 y 是任意个体。"
        },
        {
          k: "c",
          q: "“All movies produced by John Sayles are wonderful. John Sayles produced a movie about coal miners. Therefore, there is a wonderful movie about coal miners.”",
          mode: "self",
          ref: "Let s(x) be “x is a movie produced by Sayles,” let c(x) be “x is a movie about coal miners,” and let w(x) be “movie x is wonderful.” We are given premises ∀x(s(x) → w(x)) and ∃x(s(x) ∧ c(x)), and we want to conclude ∃x(c(x) ∧ w(x)). In our proof, y represents an unspecified particular movie.\nStep    Reason\n1. ∃x(s(x) ∧ c(x))    Hypothesis\n2. s(y) ∧ c(y)    Existential instantiation using (1)\n3. s(y)    Simplification using (2)\n4. ∀x(s(x) → w(x))    Hypothesis\n5. s(y) → w(y)    Universal instantiation using (4)\n6. w(y)    Modus ponens using (3) and (5)\n7. c(y)    Simplification using (2)\n8. w(y) ∧ c(y)    Conjunction using (6) and (7)\n9. ∃x(c(x) ∧ w(x))    Existential generalization using (8)"
        },
        {
          k: "d",
          q: "“There is someone in this class who has been to France. Everyone who goes to France visits the Louvre. Therefore, someone in this class has visited the Louvre.”",
          mode: "self",
          ref: "Let c(x) be “x is in this class,” let f(x) be “x has been to France,” and let l(x) be “x has visited the Louvre.” We are given premises ∃x(c(x) ∧ f(x)), ∀x(f(x) → l(x)), and we want to conclude ∃x(c(x) ∧ l(x)). In our proof, y represents an unspecified particular person.\nStep    Reason\n1. ∃x(c(x) ∧ f(x))    Hypothesis\n2. c(y) ∧ f(y)    Existential instantiation using (1)\n3. f(y)    Simplification using (2)\n4. c(y)    Simplification using (2)\n5. ∀x(f(x) → l(x))    Hypothesis\n6. f(y) → l(y)    Universal instantiation using (5)\n7. l(y)    Modus ponens using (3) and (6)\n8. c(y) ∧ l(y)    Conjunction using (4) and (7)\n9. ∃x(c(x) ∧ l(x))    Existential generalization using (8)"
        }
      ]
    },
    {
      no: 15,
      type: "有效性判断",
      q: "For each of these arguments determine whether the argument is correct or incorrect and explain why.",
      parts: [
        {
          k: "a",
          q: "All students in this class understand logic. Xavier is a student in this class. Therefore, Xavier understands logic.",
          mode: "choice",
          options: ["Correct", "Incorrect"],
          ans: ["Correct"],
          ref: "Correct. Universal instantiation on “All students in this class understand logic” gives “Xavier understands logic” (since Xavier is a student in this class), and modus ponens yields the conclusion.",
          cn: "全称例化 + 肯定前件，论证正确。"
        },
        {
          k: "b",
          q: "Every computer science major takes discrete mathematics. Natasha is taking discrete mathematics. Therefore, Natasha is a computer science major.",
          mode: "choice",
          options: ["Correct", "Incorrect"],
          ans: ["Incorrect"],
          ref: "Incorrect. This is the converse error (affirming the consequent): from “Natasha takes discrete mathematics” we cannot conclude that Natasha is a computer science major; a student from another major may also be taking discrete mathematics.",
          cn: "肯定后件谬误：选修离散数学不代表是计算机科学专业。"
        },
        {
          k: "c",
          q: "All parrots like fruit. My pet bird is not a parrot. Therefore, my pet bird does not like fruit.",
          mode: "choice",
          options: ["Correct", "Incorrect"],
          ans: ["Incorrect"],
          ref: "Incorrect. This is the fallacy of denying the antecedent: from “my pet bird is not a parrot” we cannot conclude that it does not like fruit; a non-parrot bird may well like fruit.",
          cn: "否定前件谬误：不是鹦鹉也完全可能喜欢水果。"
        },
        {
          k: "d",
          q: "Everyone who eats granola every day is healthy. Linda is not healthy. Therefore, Linda does not eat granola every day.",
          mode: "choice",
          options: ["Correct", "Incorrect"],
          ans: ["Correct"],
          ref: "Correct. Universal instantiation gives “If Linda eats granola every day, then Linda is healthy,” and modus tollens with “Linda is not healthy” gives “Linda does not eat granola every day.”",
          cn: "否定后件（modus tollens）的正确用法。"
        }
      ]
    },
    {
      no: 16,
      type: "有效性判断",
      q: "For each of these arguments determine whether the argument is correct or incorrect and explain why.",
      parts: [
        {
          k: "a",
          q: "Everyone enrolled in the university has lived in a dormitory. Mia has never lived in a dormitory. Therefore, Mia is not enrolled in the university.",
          mode: "choice",
          options: ["Correct", "Incorrect"],
          ans: ["Correct"],
          ref: "This is correct, using universal instantiation and modus tollens.",
          cn: "否定后件（modus tollens），论证正确。"
        },
        {
          k: "b",
          q: "A convertible car is fun to drive. Isaac's car is not a convertible. Therefore, Isaac's car is not fun to drive.",
          mode: "choice",
          options: ["Correct", "Incorrect"],
          ans: ["Incorrect"],
          ref: "This is not correct. After applying universal instantiation, it contains the fallacy of denying the hypothesis.",
          cn: "否定假设的谬误（denying the hypothesis）：不是敞篷车也可能很好开。"
        },
        {
          k: "c",
          q: "Quincy likes all action movies. Quincy likes the movie Eight Men Out. Therefore, Eight Men Out is an action movie.",
          mode: "choice",
          options: ["Correct", "Incorrect"],
          ans: ["Incorrect"],
          ref: "After applying universal instantiation, it contains the fallacy of affirming the conclusion.",
          cn: "肯定结论的谬误（affirming the conclusion）：喜欢的电影未必都是动作片。"
        },
        {
          k: "d",
          q: "All lobstermen set at least a dozen traps. Hamilton is a lobsterman. Therefore, Hamilton sets at least a dozen traps.",
          mode: "choice",
          options: ["Correct", "Incorrect"],
          ans: ["Correct"],
          ref: "This is correct, using universal instantiation and modus ponens.",
          cn: "全称例化 + 肯定前件，论证正确。"
        }
      ]
    },
    {
      no: 17,
      type: "逻辑错误",
      q: "What is wrong with this argument? Let H(x) be “x is happy.” Given the premise ∃xH(x), we conclude that H(Lola). Therefore, Lola is happy.",
      parts: [
        {
          k: "1",
          q: "What is wrong with this argument? Let H(x) be “x is happy.” Given the premise ∃xH(x), we conclude that H(Lola). Therefore, Lola is happy.",
          mode: "self",
          ref: "The error is in the first step. From ∃xH(x) we may only conclude that there is some individual who is happy; existential instantiation introduces an unspecified witness, and that witness need not be Lola. Concluding H(Lola) from ∃xH(x) treats the existential statement as if it referred to the particular individual Lola — an illegitimate instantiation (the converse error). The correct conclusion is only: there exists someone who is happy.",
          cn: "存在例化不能把见证者指定为特定个体 Lola。"
        }
      ]
    },
    {
      no: 18,
      type: "逻辑错误",
      q: "What is wrong with this argument? Let S(x, y) be “x is shorter than y.” Given the premise ∃sS(s, Max), it follows that S(Max, Max). Then by existential generalization it follows that ∃xS(x, x), so that someone is shorter than himself.",
      parts: [
        {
          k: "1",
          q: "What is wrong with this argument? Let S(x, y) be “x is shorter than y.” Given the premise ∃sS(s, Max), it follows that S(Max, Max). Then by existential generalization it follows that ∃xS(x, x), so that someone is shorter than himself.",
          mode: "self",
          ref: "We know that some s exists that makes S(s, Max) true, but we cannot conclude that Max is one such s. Therefore this first step is invalid.",
          cn: "从 ∃sS(s, Max) 不能得出 S(Max, Max)：见证者 s 不一定是 Max。"
        }
      ]
    },
    {
      no: 19,
      type: "有效性判断",
      q: "Determine whether each of these arguments is valid. If an argument is correct, what rule of inference is being used? If it is not, what logical error occurs?",
      parts: [
        {
          k: "a",
          q: "If n is a real number such that n > 1, then n² > 1. Suppose that n² > 1. Then n > 1.",
          mode: "choice",
          options: ["Valid", "Invalid"],
          ans: ["Invalid"],
          ref: "The premise is p → q with p = “n > 1” and q = “n² > 1”, but the argument asserts q and concludes p. This is the fallacy of affirming the consequent (converse error), so the argument is invalid. A counterexample is n = −2, for which n² = 4 > 1 while n is not > 1.",
          cn: "肯定后件谬误：n² > 1 推不出 n > 1（如 n = −2）。"
        },
        {
          k: "b",
          q: "If n is a real number with n > 3, then n² > 9. Suppose that n² ≤ 9. Then n ≤ 3.",
          mode: "choice",
          options: ["Valid", "Invalid"],
          ans: ["Valid"],
          ref: "This is modus tollens: with p = “n > 3” and q = “n² > 9”, the second premise is ¬q and the conclusion is ¬p, so the argument is valid.",
          cn: "否定后件（modus tollens）：¬q 推出 ¬p。"
        },
        {
          k: "c",
          q: "If n is a real number with n > 2, then n² > 4. Suppose that n ≤ 2. Then n² ≤ 4.",
          mode: "choice",
          options: ["Valid", "Invalid"],
          ans: ["Valid"],
          ref: "This is modus tollens: with p = “n > 2” and q = “n² > 4”, the second premise is ¬p and the conclusion is ¬q (the contrapositive of the premise), so the argument is valid.",
          cn: "否定前件（modus tollens），由 n ≤ 2 得 n² ≤ 4。"
        }
      ]
    },
    {
      no: 20,
      type: "有效性判断",
      q: "Determine whether these are valid arguments.",
      parts: [
        {
          k: "a",
          q: "If x is a positive real number, then x² is a positive real number. Therefore, if a² is positive, where a is a real number, then a is a positive real number.",
          mode: "choice",
          options: ["Valid", "Invalid"],
          ans: ["Invalid"],
          ref: "This is invalid. It is the fallacy of affirming the conclusion. Letting a = −2 provides a counterexample.",
          cn: "肯定结论的谬误（affirming the consequent）；反例 a = −2。"
        },
        {
          k: "b",
          q: "If x² ≠ 0, where x is a real number, then x ≠ 0. Let a be a real number with a² ≠ 0; then a ≠ 0.",
          mode: "choice",
          options: ["Valid", "Invalid"],
          ans: ["Valid"],
          ref: "This is valid; it is modus ponens.",
          cn: "肯定前件（modus ponens）。"
        }
      ]
    },
    {
      no: 21,
      type: "推理规则",
      q: "Which rules of inference are used to establish the conclusion of Lewis Carroll's argument described in Example 26 of Section 1.4?",
      parts: [
        {
          k: "1",
          q: "Which rules of inference are used to establish the conclusion of Lewis Carroll's argument described in Example 26 of Section 1.4?",
          mode: "self",
          ref: "The rules used are universal instantiation, modus ponens, modus tollens, and finally universal generalization. As in the closely related argument of Example 27 (worked out step by step in the solution to Exercise 22), one takes Tweety to be an arbitrary hummingbird, applies the first premise and modus ponens to obtain that Tweety is richly colored, then uses modus tollens on the appropriate premises to eliminate “does not live on honey” and “is a large bird”, and finally applies universal generalization to conclude the statement about all hummingbirds.",
          cn: "与习题 22（Example 27）同型的证明：全称例化 + 肯定前件 + 否定后件 + 全称概括。"
        }
      ]
    },
    {
      no: 22,
      type: "推理规则",
      q: "Which rules of inference are used to establish the conclusion of Lewis Carroll's argument described in Example 27 of Section 1.4?",
      parts: [
        {
          k: "1",
          q: "Which rules of inference are used to establish the conclusion of Lewis Carroll's argument described in Example 27 of Section 1.4?",
          mode: "self",
          ref: "We will give an argument establishing the conclusion. We want to show that all hummingbirds are small. Let Tweety be an arbitrary hummingbird. We must show that Tweety is small. The first premise implies that if Tweety is a hummingbird, then Tweety is richly colored. Therefore by (universal) modus ponens we can conclude that Tweety is richly colored. The third premise implies that if Tweety does not live on honey, then Tweety is not richly colored. Therefore by (universal) modus tollens we can now conclude that Tweety does live on honey. Finally, the second premise implies that if Tweety is a large bird, then Tweety does not live on honey. Therefore again by (universal) modus tollens we can now conclude that Tweety is not a large bird, i.e., that Tweety is small, as desired. Notice that we invoke universal generalization as the last step.",
          cn: "规则清单：全称例化、肯定前件、否定后件、最后全称概括。"
        }
      ]
    }
  ]
});
