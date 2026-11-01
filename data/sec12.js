/* Section 1.2 - Applications of Propositional Logic
 * Source: quiz_src/1.2.pdf (Exercises 1-22) + IRG_Ch01-solution.pdf (even-numbered solutions only).
 * Math symbols are written with unicode escapes on purpose: \u2227 = \u2228 = \u00ac = \u2192 = \u2194 = \u2203 = \u2200
 */
window.BANK.push({
  sec: "1.2",
  title: "Applications of Propositional Logic",
  titleCn: "命题逻辑的应用",
  tips: [
    "“only if” 给出必要条件，翻译为 p → q；“if” 给出充分条件，翻译为 q → p。",
    "“unless” 通常等价于“或”：p unless q 就是 p ∨ q（等价于 ¬q → p）。",
    "“whenever”“when ... then”也翻译为蕴含式 →；“but”“and”翻译为合取 ∧；“but not”是 ¬ 的合取。",
    "“It is necessary to X”表示“必须有 X”，与“whenever”结合时通常是充分条件方向的蕴含式。",
    "系统规格一致性题：先把每条规格写成公式，再检查是否存在一组真值赋值使所有公式同时为真；存在即 Consistent。",
    "布尔检索：AND 表示同时包含，NOT 或连字符表示排除，Google 默认要求所有检索词都出现，括号用于分组。",
    "人物/箱子推理题要穷举所有可能配置，逐条核对每个铭文或陈述的真假，再与题设的“真话者/说谎者”身份匹配。",
    "带下标的命题（b₃₂、g₁、h₁₆ 等）表示具体的硬件条件，翻译时注意与合取、析取的括号分组。"
  ],
  items: [
    {
      no: 1,
      type: "逻辑翻译",
      q: "You cannot edit a protected Wikipedia entry unless you are an administrator. Express your answer in terms of e: “You can edit a protected Wikipedia entry” and a: “You are an administrator.”",
      parts: [
        {
          k: "1",
          q: "Translate the statement into propositional logic.",
          mode: "short",
          ans: ["e → a", "a → e"],
          ref: "e → a. “You cannot edit ... unless you are an administrator” means that editing is possible only if you are an administrator, so editing (e) implies administrator (a).",
          cn: "“unless”在这里是“只有……才”的意思，方向别反：e → a。"
        }
      ]
    },
    {
      no: 2,
      type: "逻辑翻译",
      q: "You can see the movie only if you are over 18 years old or you have the permission of a parent. Express your answer in terms of m: “You can see the movie,” e: “You are over 18 years old,” and p: “You have the permission of a parent.”",
      parts: [
        {
          k: "1",
          q: "Translate the statement into propositional logic.",
          mode: "short",
          ans: ["m → (e ∨ p)", "m → (e ∨ p)"],
          ref: "Recall that p only if q means p → q. In this case, if you can see the movie then you must have fulfilled one of the two requirements. Therefore the statement is m → (e ∨ p). Notice that in everyday life one might actually say “You can see the movie if you meet one of these conditions,” but logically that is not what the rules really say.",
          cn: "“only if”给必要条件：能看电影 → (满18岁 ∨ 有家长许可)。"
        }
      ]
    },
    {
      no: 3,
      type: "逻辑翻译",
      q: "You can graduate only if you have completed the requirements of your major and you do not owe money to the university and you do not have an overdue library book. Express your answer in terms of g: “You can graduate,” m: “You owe money to the university,” r: “You have completed the requirements of your major,” and b: “You have an overdue library book.”",
      parts: [
        {
          k: "1",
          q: "Translate the statement into propositional logic.",
          mode: "short",
          ans: ["g → (r ∧ ¬m ∧ ¬b)", "g → (r ∧ ¬m ∧ ¬b)"],
          ref: "g → (r ∧ ¬m ∧ ¬b). The requirements that must be met are: the requirements of the major are completed (r), you do not owe money (¬m), and you have no overdue library book (¬b); being able to graduate (g) requires all of them.",
          cn: "“only if”后是合取式；欠钱与逾期图书都要取否定：¬m ∧ ¬b。"
        }
      ]
    },
    {
      no: 4,
      type: "逻辑翻译",
      q: "To use the wireless network in the airport you must pay the daily fee unless you are a subscriber to the service. Express your answer in terms of w: “You can use the wireless network in the airport,” d: “You pay the daily fee,” and s: “You are a subscriber to the service.”",
      parts: [
        {
          k: "1",
          q: "Translate the statement into propositional logic.",
          mode: "short",
          ans: ["w → (d ∨ s)", "w → (d ∨ s)"],
          ref: "The condition stated here is that if you use the network, then either you pay the fee or you are a subscriber. Therefore the proposition in symbols is w → (d ∨ s).",
          cn: "“unless”翻译成析取，条件部分用蕴含式：w → (d ∨ s)。"
        }
      ]
    },
    {
      no: 5,
      type: "逻辑翻译",
      q: "You are eligible to be President of the U.S.A. only if you are at least 35 years old, were born in the U.S.A., or at the time of your birth both of your parents were citizens, and you have lived at least 14 years in the country. Express your answer in terms of e: “You are eligible to be President of the U.S.A.,” a: “You are at least 35 years old,” b: “You were born in the U.S.A.,” p: “At the time of your birth, both of your parents were citizens,” and r: “You have lived at least 14 years in the U.S.A.”",
      parts: [
        {
          k: "1",
          q: "Translate the statement into propositional logic.",
          mode: "short",
          ans: ["e → ((a ∨ (b ∧ p)) ∧ r)", "e → (r ∧ (a ∨ (b ∧ p)))"],
          ref: "e → ((a ∨ (b ∧ p)) ∧ r). The condition for eligibility is that you are at least 35 years old or you were born in the U.S.A. or both of your parents were citizens at the time of your birth (a ∨ (b ∧ p)), and that you have lived at least 14 years in the country (r).",
          cn: "括号分组要小心：(a ∨ (b ∧ p)) ∧ r，即“年龄或出生情况”再与“居住年限”同时成立。"
        }
      ]
    },
    {
      no: 6,
      type: "逻辑翻译",
      q: "You can upgrade your operating system only if you have a 32-bit processor running at 1 GHz or faster, at least 1 GB RAM, and 16 GB free hard disk space, or a 64-bit processor running at 2 GHz or faster, at least 2 GB RAM, and at least 32 GB free hard disk space. Express your answer in terms of u: “You can upgrade your operating system,” b₃₂: “You have a 32-bit processor,” b₆₄: “You have a 64-bit processor,” g₁: “Your processor runs at 1 GHz or faster,” g₂: “Your processor runs at 2 GHz or faster,” r₁: “Your processor has at least 1 GB RAM,” r₂: “Your processor has at least 2 GB RAM,” h₁₆: “You have at least 16 GB free hard disk space,” and h₃₂: “You have at least 32 GB free hard disk space.”",
      parts: [
        {
          k: "1",
          q: "Translate the statement into propositional logic.",
          mode: "short",
          ans: [
            "u → ((b₃₂ ∧ g₁ ∧ r₁ ∧ h₁₆) ∨ (b₆₄ ∧ g₂ ∧ r₂ ∧ h₃₂))",
            "u → (b₃₂ ∧ g₁ ∧ r₁ ∧ h₁₆) ∨ (b₆₄ ∧ g₂ ∧ r₂ ∧ h₃₂)",
            "u → ((b32 ∧ g1 ∧ r1 ∧ h16) ∨ (b64 ∧ g2 ∧ r2 ∧ h32))"
          ],
          ref: "This is similar to Exercise 2: u → (b₃₂ ∧ g₁ ∧ r₁ ∧ h₁₆) ∨ (b₆₄ ∧ g₂ ∧ r₂ ∧ h₃₂). Each branch is a conjunction of the four hardware requirements, and the two branches are alternatives.",
          cn: "两组配置是“或”的关系，每组内部四项用“且”；括号建议写成 u → (A ∨ B)。"
        }
      ]
    },
    {
      no: 7,
      type: "系统规格",
      q: "Express these system specifications using the propositions p: “The message is scanned for viruses” and q: “The message was sent from an unknown system” together with logical connectives (including negations).",
      parts: [
        {
          k: "a",
          q: "“The message is scanned for viruses whenever the message was sent from an unknown system.”",
          mode: "short",
          ans: ["p → q", "q → p"],
          ref: "p → q. “Whenever” means “if”: whenever the message was sent from an unknown system (q), the message is scanned for viruses (p); i.e., scanning is performed whenever the message comes from an unknown system.",
          cn: "“whenever X”表示“只要 X 就……”，即 X → Y。"
        },
        {
          k: "b",
          q: "“The message was sent from an unknown system but it was not scanned for viruses.”",
          mode: "short",
          ans: ["q ∧ ¬p", "¬p ∧ q"],
          ref: "q ∧ ¬p. “But” means “and”: the message was sent from an unknown system (q) and it was not scanned for viruses (¬p).",
          cn: "“but”=∧，后半句取否定。"
        },
        {
          k: "c",
          q: "“It is necessary to scan the message for viruses whenever it was sent from an unknown system.”",
          mode: "short",
          ans: ["q → p", "p → q"],
          ref: "q → p. Whenever the message was sent from an unknown system it is necessary that it be scanned for viruses; that is, being sent from an unknown system implies that scanning is required (q → p). Note the reversal compared with part (a).",
          cn: "本题与 (a) 方向相反：(a) 是 p → q，(c) 是 q → p。"
        },
        {
          k: "d",
          q: "“When a message is not sent from an unknown system it is not scanned for viruses.”",
          mode: "short",
          ans: ["¬q → ¬p", "¬p → ¬q"],
          ref: "¬q → ¬p. When the message is not sent from an unknown system (¬q) it is not scanned for viruses (¬p).",
          cn: "前件取否定、后件取否定，注意 ¬q 在前、¬p 在后。"
        }
      ]
    },
    {
      no: 8,
      type: "系统规格",
      q: "Express these system specifications using the propositions p: “The user enters a valid password,” q: “Access is granted,” and r: “The user has paid the subscription fee” and logical connectives (including negations).",
      parts: [
        {
          k: "a",
          q: "“The user has paid the subscription fee, but does not enter a valid password.”",
          mode: "short",
          ans: ["r ∧ ¬p", "¬p ∧ r"],
          ref: "r ∧ ¬p. “But” means “and”: the user has paid the subscription fee (r) and does not enter a valid password (¬p).",
          cn: "“but”=∧。"
        },
        {
          k: "b",
          q: "“Access is granted whenever the user has paid the subscription fee and enters a valid password.”",
          mode: "short",
          ans: ["(r ∧ p) → q", "(p ∧ r) → q"],
          ref: "(r ∧ p) → q. “Whenever” means “if”: if the user has paid the subscription fee and enters a valid password (r ∧ p), then access is granted (q).",
          cn: "前件是合取式，要加括号。"
        },
        {
          k: "c",
          q: "“Access is denied if the user has not paid the subscription fee.”",
          mode: "short",
          ans: ["¬r → ¬q", "¬q → ¬r"],
          ref: "¬r → ¬q. Access being denied is the negation of q, so we have ¬r → ¬q.",
          cn: "“access is denied”是 q 的否定，所以结论写成 ¬q。"
        },
        {
          k: "d",
          q: "“If the user has not entered a valid password but has paid the subscription fee, then access is granted.”",
          mode: "short",
          ans: ["(¬p ∧ r) → q", "(r ∧ ¬p) → q"],
          ref: "(¬p ∧ r) → q. The hypothesis is a conjunction: the user has not entered a valid password (¬p) and has paid the subscription fee (r), so access is granted (q).",
          cn: "“but”在条件内部仍表示合取。"
        }
      ]
    },
    {
      no: 9,
      type: "一致性判断",
      q: "Are these system specifications consistent? “The system is in multiuser state if and only if it is operating normally. If the system is operating normally, the kernel is functioning. The kernel is not functioning or the system is in interrupt mode. If the system is not in multiuser state, then it is in interrupt mode. The system is not in interrupt mode.”",
      parts: [
        {
          k: "1",
          q: "Are these system specifications consistent?",
          mode: "choice",
          options: ["Consistent", "Inconsistent"],
          ans: ["Inconsistent"],
          ref: "Inconsistent. Write M for “the system is in multiuser state,” N for “the system is operating normally,” K for “the kernel is functioning,” and I for “the system is in interrupt mode.” The specifications are M ↔ N, N → K, ¬K ∨ I, ¬M → I, and ¬I. From ¬I and ¬K ∨ I we get ¬K, so K is false; then N → K forces N false; then M ↔ N forces M false; but then ¬M → I forces I true, contradicting ¬I. No truth assignment satisfies all five specifications.",
          cn: "先把五条规格形式化再逐条推：¬I 使 ¬K ∨ I 只能靠 ¬K 成立。"
        }
      ]
    },
    {
      no: 10,
      type: "一致性判断",
      q: "Are these system specifications consistent? “Whenever the system software is being upgraded, users cannot access the file system. If users can access the file system, then they can save new files. If users cannot save new files, then the system software is not being upgraded.”",
      parts: [
        {
          k: "1",
          q: "Are these system specifications consistent?",
          mode: "choice",
          options: ["Consistent", "Inconsistent"],
          ans: ["Consistent"],
          ref: "We write these symbolically: u → ¬a, a → s, ¬s → ¬u. Note that we can make all the conclusion true by making a false, s true, and u false. Therefore if the users cannot access the file system, they can save new files, and the system is not being upgraded, then all the conditional statements are true. Thus the system is consistent.",
          cn: "官方解：取 a 假、s 真、u 假，三条蕴含式同时为真，故一致。"
        }
      ]
    },
    {
      no: 11,
      type: "一致性判断",
      q: "Are these system specifications consistent? “The router can send packets to the edge system only if it supports the new address space. For the router to support the new address space it is necessary that the latest software release be installed. The router can send packets to the edge system if the latest software release is installed. The router does not support the new address space.”",
      parts: [
        {
          k: "1",
          q: "Are these system specifications consistent?",
          mode: "choice",
          options: ["Consistent", "Inconsistent"],
          ans: ["Consistent"],
          ref: "Consistent. Let S = “the router can send packets to the edge system,” N = “the router supports the new address space,” I = “the latest software release is installed.” The specifications are S → N, N → I, I → S, and ¬N. The assignment S = F, N = F, I = F satisfies all four: S → N and N → I and I → S are all vacuously true and ¬N holds. Hence the specifications are consistent.",
          cn: "三条蕴含式构成一个环，只要三者都假就不冲突，再配合“并不支持新地址空间”仍成立。"
        }
      ]
    },
    {
      no: 12,
      type: "一致性判断",
      q: "Are these system specifications consistent? “If the file system is not locked, then new messages will be queued. If the file system is not locked, then the system is functioning normally, and conversely. If new messages are not queued, then they will be sent to the message buffer. If the file system is not locked, then new messages will be sent to the message buffer. New messages will not be sent to the message buffer.”",
      parts: [
        {
          k: "1",
          q: "Are these system specifications consistent?",
          mode: "choice",
          options: ["Consistent", "Inconsistent"],
          ans: ["Consistent"],
          ref: "This system is consistent. We use L, Q, N, and B to stand for the basic propositions here, “The file system is locked,” “New messages will be queued,” “The system is functioning normally,” and “New messages will be sent to the message buffer,” respectively. Then the given specifications are ¬L → Q, ¬L ↔ N, ¬Q → B, ¬L → B, and ¬B. If we want consistency, then we had better have B false in order that ¬B be true. This requires that both L and Q be true, by the two conditional statements that have B as their consequence. The first conditional statement therefore is of the form F → T, which is true. Finally, the biconditional ¬L ↔ N can be satisfied by taking N to be false. Thus this set of specifications is consistent. Note that there is just this one satisfying truth assignment.",
          cn: "官方解：L、Q 真，B、N 假是唯一满足赋值。"
        }
      ]
    },
    {
      no: 13,
      type: "布尔检索",
      q: "What Boolean search would you use to look for Web pages about beaches in New Jersey? What if you wanted to find Web pages about beaches on the isle of Jersey (in the English Channel)?",
      parts: [
        {
          k: "a",
          q: "Boolean search for Web pages about beaches in New Jersey.",
          mode: "self",
          ref: "A standard Boolean search is BEACHES AND NEW JERSEY. Equivalent formulations such as “BEACH AND NEW JERSEY” or putting the two terms in the opposite order (NEW JERSEY AND BEACHES) search for the same set of pages; the AND is what requires both topics to appear on the page.",
          cn: "两个主题都要出现，所以用 AND 连接：BEACHES AND NEW JERSEY。"
        },
        {
          k: "b",
          q: "Boolean search for Web pages about beaches on the isle of Jersey (in the English Channel).",
          mode: "self",
          ref: "A standard search is BEACHES AND JERSEY AND (ENGLAND OR CHANNEL). Because “Jersey” is also the name of the U.S. state, the location is usually restricted with the parenthesis (ENGLAND OR CHANNEL) or by excluding the U.S. state, e.g. BEACHES AND JERSEY -NEW JERSEY. Any search requiring “beaches”, “Jersey” and a qualifier for the Channel Island is acceptable.",
          cn: "Jersey 既是海峡中的岛也是美国州名，需要用 (ENGLAND OR CHANNEL) 或 -NEW JERSEY 排除歧义。"
        }
      ]
    },
    {
      no: 14,
      type: "布尔检索",
      q: "What Boolean search would you use to look for Web pages about hiking in West Virginia? What if you wanted to find Web pages about hiking in Virginia, but not in West Virginia?",
      parts: [
        {
          k: "a",
          q: "Boolean search for Web pages about hiking in West Virginia.",
          mode: "short",
          ans: ["WEST AND VIRGINIA AND HIKING", "HIKING AND WEST AND VIRGINIA", "WEST VIRGINIA AND HIKING"],
          ref: "This is similar to Example 6, about universities in New Mexico. To search for hiking in West Virginia, we could enter WEST AND VIRGINIA AND HIKING.",
          cn: "三个词都要出现，用 AND 连接。"
        },
        {
          k: "b",
          q: "Boolean search for Web pages about hiking in Virginia, but not in West Virginia.",
          mode: "short",
          ans: ["(VIRGINIA AND HIKING) NOT WEST", "(VIRGINIA AND HIKING) -WEST", "VIRGINIA AND HIKING NOT WEST"],
          ref: "If we enter (VIRGINIA AND HIKING) NOT WEST, then we’ll get websites about hiking in Virginia but not in West Virginia, except for sites that happen to use the word “west” in a different context (e.g., “Follow the stream west until you come to a clearing”).",
          cn: "用 NOT（或连字符 -）排除 West，注意括号分组。"
        }
      ]
    },
    {
      no: 15,
      type: "布尔检索",
      q: "What Google search would you use to look for Web pages relating to Ethiopian restaurants in New York or New Jersey?",
      parts: [
        {
          k: "1",
          q: "Give the Google search string.",
          mode: "self",
          ref: "A standard Google search is ETHIOPIAN RESTAURANT (NEW YORK OR NEW JERSEY). Since Google by default requires all search terms to be present, the two location names are combined with parentheses and OR, and the cuisine keyword is simply included as a term.",
          cn: "Google 默认要求所有词都出现，地点用 (NEW YORK OR NEW JERSEY) 分组。"
        }
      ]
    },
    {
      no: 16,
      type: "布尔检索",
      q: "What Google search would you use to look for men’s shoes or boots not designed for work?",
      parts: [
        {
          k: "1",
          q: "Give the Google search string.",
          mode: "short",
          ans: ["MEN'S (SHOES OR BOOTS) -WORK", "MEN'S (SHOES OR BOOTS) NOT WORK", "MENS (SHOES OR BOOTS) -WORK"],
          ref: "This is similar to Exercise 14, except that problem asked about conducting a general Boolean search, while this specifically asked about a Google search. Thus we use a hyphen rather than the word NOT, and we can omit the word AND since Google defaults to requiring the presence of all search terms. Entering MEN'S (SHOES OR BOOTS) -WORK is an effective and efficient search.",
          cn: "Google 版用连字符 - 而不是 NOT，且可省略 AND。"
        }
      ]
    },
    {
      no: 17,
      type: "趣味推理",
      q: "Suppose that in Example 7, the inscriptions on Trunks 1, 2, and 3 are “The treasure is in Trunk 3,” “The treasure is in Trunk 1,” and “This trunk is empty.” For each of these statements, determine whether the Queen who never lies could state this, and if so, which trunk the treasure is in.",
      parts: [
        {
          k: "a",
          q: "“All the inscriptions are false.”",
          mode: "self",
          ref: "The Queen cannot say this. If all three inscriptions were false, then the inscription on Trunk 3 (“This trunk is empty”) being false means Trunk 3 is not empty, so the treasure is in Trunk 3; but then the inscription on Trunk 1 (“The treasure is in Trunk 3”) is true — a contradiction. (The three possible locations give respectively one, two, and one true inscriptions, never zero.)",
          cn: "先假设“全假”，立刻由 Trunk 3 不空推出 Trunk 1 的铭文为真，矛盾。"
        },
        {
          k: "b",
          q: "“Exactly one of the inscriptions is true.”",
          mode: "self",
          ref: "The Queen can say this, but the trunk cannot be determined uniquely: the treasure is in Trunk 2 or in Trunk 3. If the treasure is in Trunk 3, only the inscription on Trunk 1 (“The treasure is in Trunk 3”) is true. If the treasure is in Trunk 2, only the inscription on Trunk 3 (“This trunk is empty”) is true. Exactly one inscription is true in each of these two cases. (If the treasure is in Trunk 1, then two inscriptions are true.)",
          cn: "注意：Trunk 2 与 Trunk 3 两种情形都恰好一条铭文为真，无法唯一确定。"
        },
        {
          k: "c",
          q: "“Exactly two of the inscriptions are true.”",
          mode: "self",
          ref: "The Queen can say this, and the treasure is in Trunk 1. If the treasure is in Trunk 1, then the inscription on Trunk 1 is false while the inscriptions on Trunks 2 (“The treasure is in Trunk 1”) and 3 (“This trunk is empty”) are both true — exactly two true inscriptions. If the treasure is in Trunk 2 or Trunk 3, only one inscription is true.",
          cn: "唯一情形：宝藏在 Trunk 1。"
        },
        {
          k: "d",
          q: "“All three inscriptions are true.”",
          mode: "self",
          ref: "The Queen cannot say this. The inscriptions on Trunks 1 and 2 (“The treasure is in Trunk 3” and “The treasure is in Trunk 1”) cannot both be true, since the treasure is in only one of the three trunks.",
          cn: "Trunk 1 与 Trunk 2 的铭文不可能同时为真。"
        }
      ]
    },
    {
      no: 18,
      type: "趣味推理",
      q: "Suppose that in Example 7 there are treasures in two of the three trunks. The inscriptions on Trunks 1, 2, and 3 are “This trunk is empty,” “There is a treasure in Trunk 1,” and “There is a treasure in Trunk 2.” For each of these statements, determine whether the Queen who never lies could state this, and if so, which two trunks the treasures are in.",
      parts: [
        {
          k: "a",
          q: "“All the inscriptions are false.”",
          mode: "self",
          ref: "Queen cannot say this. In particular, the inscriptions on Trunks 1 and 2 cannot both be false, because if Trunk 1’s inscription is false, then it is not empty, but if Trunk 2’s inscription is false, then there is no treasure in Trunk 1. These are contradictory.",
          cn: "官方解答要点：Trunk 1 与 Trunk 2 的铭文不可能同时为假。"
        },
        {
          k: "b",
          q: "“Exactly one of the inscriptions is true.”",
          mode: "self",
          ref: "Queen can say this; treasures are in Trunks 1 and 3. If exactly one of the inscriptions is true, it cannot be that of Trunk 3, by the argument in part (a). The inscription on Trunk 1 being true is consistent with Trunk 2 bearing a false statement. Since there are treasures in two of the trunks, this means Trunks 2 and 3 contain the treasures, which means that the inscription on Trunk 3 is true making two true inscriptions, rather than one. The final possibility is that the inscription on Trunk 2 is true, in which case Trunk 1 contains a treasure making its claim of being empty false. Knowing that the inscription on Trunk 3 is false then means that Trunk 2 does not contain a treasure, and so the other treasure is in Trunk 3.",
          cn: "官方解答要点：宝藏在 Trunk 1 与 Trunk 3。"
        },
        {
          k: "c",
          q: "“Exactly two of the inscriptions are true.”",
          mode: "self",
          ref: "Queen can say this, but one cannot determine the location of the treasures. If the inscription on Trunk 1 is false, then the treasures are in Trunks 1 and 2. If the inscription on Trunk 2 is false, then the treasures are in Trunks 2 and 3. The inscription on Trunk 3 cannot be false, since the inscriptions on Trunks 1 and 2 are contradictory.",
          cn: "官方解答要点：Trunk 2 必有宝藏，但 Trunk 1 或 Trunk 3 无法确定。"
        },
        {
          k: "d",
          q: "“All three inscriptions are true.”",
          mode: "self",
          ref: "Queen cannot say this. The inscriptions on Trunks 1 and 2 cannot both be true.",
          cn: "官方解答要点：Trunk 1 与 Trunk 2 的铭文不可能同时为真。"
        }
      ]
    },
    {
      no: 19,
      type: "趣味推理",
      q: "Each inhabitant of a remote village always tells the truth or always lies. A villager will give only a “Yes” or a “No” response to a question a tourist asks. Suppose you are a tourist visiting this area and come to a fork in the road. One branch leads to the ruins you want to visit; the other branch leads deep into the jungle. A villager is standing at the fork in the road. What one question can you ask the villager to determine which branch to take?",
      parts: [
        {
          k: "1",
          q: "Give one question that determines which branch leads to the ruins.",
          mode: "self",
          ref: "Ask the villager: “If I were to ask you which branch leads to the ruins, would you say that the left branch leads to the ruins?” If the villager is a truth teller, he answers “yes” exactly when the left branch is the correct one. If he is a liar, then the honest answer to the hypothetical question would have been “no” (when the left branch is correct, a liar would have said the right branch leads to the ruins), so lying about it he again answers “yes”. Thus both types of villager indicate the left branch when it is the correct one and the right branch otherwise.",
          cn: "关键是把问题包在“如果我问你……”的假设里，让真话者与说谎者给出相同答案。"
        }
      ]
    },
    {
      no: 20,
      type: "趣味推理",
      q: "An explorer is captured by a group of cannibals. There are two types of cannibals—those who always tell the truth and those who always lie. The cannibals will barbecue the explorer unless he can determine whether a particular cannibal always lies or always tells the truth. He is allowed to ask the cannibal exactly one question.",
      parts: [
        {
          k: "a",
          q: "Explain why the question “Are you a liar?” does not work.",
          mode: "self",
          ref: "If the explorer encounters a truth-teller, then he will honestly answer “no” to her question. If she encounters a liar, then the honest answer to her question is “yes,” so he will lie and answer “no.” Thus everybody will answer “no” to the question, and the explorer will have no way to determine which type of cannibal she is speaking to.",
          cn: "两种人都回答“no”，信息量为零。"
        },
        {
          k: "b",
          q: "Find a question that the explorer can use to determine whether the cannibal always lies or always tells the truth.",
          mode: "self",
          ref: "There are several possible correct answers. One is the following question: “If I were to ask you if you always told the truth, would you say that you did?” Then if the cannibal is a truth teller, he will answer yes (truthfully), while if he is a liar, then, since in fact he would have said that he did tell the truth if questioned, he will now lie and answer no.",
          cn: "官方示例问法：“如果我问你是否总说真话，你会回答‘是’吗？”"
        }
      ]
    },
    {
      no: 21,
      type: "趣味推理",
      q: "When three professors are seated in a restaurant, the hostess asks them: “Does everyone want coffee?” The first professor says “I do not know.” The second professor then says “I do not know.” Finally, the third professor says “No, not everyone wants coffee.” The hostess comes back and gives coffee to the professors who want it. How did she figure out who wanted coffee?",
      parts: [
        {
          k: "1",
          q: "Explain how the hostess determined who wanted coffee.",
          mode: "self",
          ref: "The first two professors wanted coffee; the third professor did not. Reasoning: a professor who does not want coffee knows the answer is “no” (not everyone wants coffee), so he would answer “No” rather than “I do not know.” Hence the first professor and the second professor, who both said “I do not know,” must themselves want coffee. The third professor, hearing this, would have been able to answer “yes” if he also wanted coffee, so his answer “No, not everyone wants coffee” shows that he does not want coffee. The hostess therefore gives coffee to the first and second professors only.",
          cn: "自推结论：前两位要咖啡，第三位不要。答案册未收录此题。"
        }
      ]
    },
    {
      no: 22,
      type: "趣味推理",
      q: "When planning a party you want to know whom to invite. Among the people you would like to invite are three touchy friends. You know that if Jasmine attends, she will become unhappy if Samir is there, Samir will attend only if Kanti will be there, and Kanti will not attend unless Jasmine also does. Which combinations of these three friends can you invite so as not to make someone unhappy?",
      parts: [
        {
          k: "1",
          q: "Which combinations of these three friends can you invite so as not to make someone unhappy?",
          mode: "self",
          ref: "We translate these conditions into statements in symbolic logic, using j, s, and k for the propositions that Jasmine, Samir, and Kanti attend, respectively. The first statement is j → ¬s. The second statement is s → k. The last statement is ¬k ∨ j, because “unless” means “or.” (We could also translate this as k → j.) First, suppose that s is true. Then the second statement tells us that k is also true, and then the last statement forces j to be true. But now the first statement forces s to be false. So we conclude that s must be false; Samir cannot attend. On the other hand, if s is false, then the first two statements are automatically true, no matter what the truth values of k and j are. If we look at the last statement, we see that it will be true as long as it is not the case that k is true and j is false. So the only combinations of friends that make everybody happy are Jasmine and Kanti, or Jasmine alone (or no one!).",
          cn: "官方解答：Jasmine 与 Kanti，或只有 Jasmine（或都不请）；Samir 一定不能请。"
        }
      ]
    }
  ]
});
