import { FaqItem } from "@/lib/types";

export const faqItems: FaqItem[] = [
  {
    question: { vi: "Vibe coding là gì?", en: "What is vibe coding?" },
    answer: {
      vi: "Vibe coding là cách làm phần mềm bằng cách mô tả yêu cầu bằng ngôn ngữ tự nhiên cho AI (như Claude), AI sẽ sinh và chỉnh sửa code. Người dùng tập trung vào mô tả ý định và đánh giá kết quả, thay vì viết cú pháp thủ công. Xem chi tiết ở bài học đầu tiên trong module Vibe Coding.",
      en: "Vibe coding is building software by describing requirements in natural language to an AI (like Claude), which generates and edits the code. You focus on describing intent and evaluating output, instead of hand-writing syntax. See the first lesson in the Vibe Coding module for details.",
    },
    tags: ["vibe-coding", "co-ban"],
  },
  {
    question: { vi: "Tôi không biết lập trình, tôi có học được không?", en: "I don't know how to code — can I still learn this?" },
    answer: {
      vi: "Có. Trang học này được thiết kế để người không chuyên kỹ thuật vẫn nắm được cách tư duy và làm việc với AI để tạo ra công cụ hữu ích. Hãy bắt đầu từ module Vibe Coding, bài \"Vibe coding là gì\" trước khi vào các module chuyên đề.",
      en: "Yes. This platform is designed so non-technical people can still learn how to think about and work with AI to build useful tools. Start with the Vibe Coding module's \"What is vibe coding\" lesson before moving to the specialty modules.",
    },
    tags: ["vibe-coding", "hoc-tap"],
  },
  {
    question: { vi: "Dữ liệu nhạy cảm của công ty có nên đưa vào AI không?", en: "Should I put sensitive company data into AI?" },
    answer: {
      vi: "Không nên đưa dữ liệu cá nhân, tài chính chưa công bố, hay bí mật kinh doanh vào các công cụ AI công cộng không có cam kết bảo mật doanh nghiệp rõ ràng. Xem bài \"Rủi ro, giới hạn và thực hành an toàn khi vibe coding\" để biết danh sách kiểm tra trước khi triển khai.",
      en: "You should not put personal data, undisclosed financial data, or trade secrets into public AI tools without a clear enterprise data commitment. See the \"Risks, limits, and safe practices\" lesson for a pre-deployment checklist.",
    },
    tags: ["bao-mat", "rui-ro"],
  },
  {
    question: { vi: "AI có thể thay thế hoàn toàn công việc của HR không?", en: "Can AI fully replace HR's job?" },
    answer: {
      vi: "Không. Các nghiên cứu (SHRM, Deloitte) đều chỉ ra AI hiệu quả nhất ở tác vụ hành chính lặp lại, còn tương tác con người quan trọng (lương thưởng, xung đột, đánh giá ảnh hưởng sự nghiệp) nên do con người đảm nhiệm. Xem module HR & People Experience để biết chi tiết.",
      en: "No. Research (SHRM, Deloitte) consistently shows AI is most effective on repetitive administrative tasks, while important human interactions (compensation, conflict, career-impacting evaluations) should remain human-led. See the HR & People Experience module for details.",
    },
    tags: ["hr", "dao-duc"],
  },
  {
    question: { vi: "Ma trận rủi ro trong công cụ demo hoạt động thế nào?", en: "How does the risk matrix demo tool work?" },
    answer: {
      vi: "Công cụ Ma trận rủi ro ở trang Công cụ demo cho phép bạn nhập một rủi ro, chọn mức xác suất và mức ảnh hưởng, hệ thống sẽ tự xếp vị trí trên ma trận 5x5 và gợi ý mức ưu tiên xử lý — minh hoạ cách AI có thể hỗ trợ trực quan hoá rủi ro như mô tả trong module Quản trị rủi ro.",
      en: "The Risk Matrix tool on the Demo Tools page lets you enter a risk, choose a probability and impact level, and the system automatically places it on a 5x5 matrix and suggests a priority level — illustrating how AI can help visualize risk as described in the Risk Management module.",
    },
    tags: ["cong-cu", "rui-ro"],
  },
  {
    question: { vi: "Làm sao để thêm một chuyên đề học tập mới vào trang này?", en: "How do I add a new learning topic to this site?" },
    answer: {
      vi: "Thêm một đối tượng Module mới vào file data/modules.ts với đầy đủ trường song ngữ. Hệ thống trang và điều hướng sẽ tự động nhận diện module mới mà không cần sửa code giao diện. Xem README phần \"Mở rộng nội dung\".",
      en: "Add a new Module object to data/modules.ts with all bilingual fields filled in. Pages and navigation will automatically pick up the new module without any UI code changes. See the README section \"Extending content\".",
    },
    tags: ["mo-rong", "quan-tri"],
  },

  // ---------------------------- Vibe coding ----------------------------
  {
    question: {
      vi: "Tôi cần biết ngôn ngữ lập trình trước khi học vibe coding không?",
      en: "Do I need to know a programming language before learning vibe coding?",
    },
    answer: {
      vi: "Không bắt buộc. Vibe coding được thiết kế để người không chuyên kỹ thuật cũng mô tả được yêu cầu bằng ngôn ngữ tự nhiên. Biết chút kỹ thuật cơ bản (dữ liệu, bảo mật) giúp bạn giám sát AI tốt hơn, nhưng không phải điều kiện tiên quyết. Xem bài \"Vibe coding là gì\".",
      en: "Not required. Vibe coding is designed so non-technical people can describe requirements in natural language. Knowing some technical basics (data, security) helps you supervise the AI better, but it isn't a prerequisite. See the \"What is vibe coding\" lesson.",
    },
    tags: ["vibe-coding", "co-ban"],
  },
  {
    question: {
      vi: "Vibe coding có phù hợp với dự án lớn, phức tạp không?",
      en: "Is vibe coding suitable for large, complex projects?",
    },
    answer: {
      vi: "Vibe coding phù hợp nhất cho công cụ nội bộ, bản demo, và tự động hoá tác vụ có phạm vi rõ ràng. Với hệ thống lớn nhiều người dùng, dữ liệu nhạy cảm ở quy mô doanh nghiệp, vẫn cần kiến trúc sư/kỹ sư phần mềm giám sát, kiểm thử và bảo trì lâu dài. Xem bài \"Quy trình làm việc với Claude\" để biết quy trình lặp phù hợp quy mô nhỏ và vừa.",
      en: "Vibe coding works best for internal tools, prototypes, and well-scoped task automation. Large multi-user systems with enterprise-scale sensitive data still need software architects/engineers for oversight, testing, and long-term maintenance. See \"Working with Claude\" for the iterative workflow suited to small-to-medium scope.",
    },
    tags: ["vibe-coding", "trung-cap"],
  },
  {
    question: {
      vi: "Sự khác nhau giữa Claude và Claude Code là gì?",
      en: "What is the difference between Claude and Claude Code?",
    },
    answer: {
      vi: "Claude là trợ lý AI hội thoại dùng cho viết, phân tích, trả lời câu hỏi. Claude Code là công cụ dành cho lập trình: nó đọc trực tiếp mã nguồn, chạy lệnh, sửa nhiều tệp cùng lúc trong một dự án thật — phù hợp khi bạn cần AI thao tác trực tiếp lên codebase thay vì chỉ trò chuyện. Xem bài \"Quy trình làm việc với Claude\".",
      en: "Claude is a conversational AI assistant for writing, analysis, and Q&A. Claude Code is built for programming: it reads source code directly, runs commands, and edits multiple files at once inside a real project — useful when you need the AI to act directly on a codebase rather than just chat. See \"Working with Claude\".",
    },
    tags: ["vibe-coding", "claude", "co-ban"],
  },
  {
    question: {
      vi: "Làm sao để viết prompt hiệu quả khi nhờ AI viết code?",
      en: "How do I write an effective prompt when asking AI to write code?",
    },
    answer: {
      vi: "Nêu rõ bối cảnh (dự án gì, công nghệ gì đang dùng), yêu cầu cụ thể (đầu vào, đầu ra, ràng buộc), và ví dụ mong muốn nếu có. Tránh yêu cầu mơ hồ như \"làm cho đẹp hơn\" — hãy nói rõ tiêu chí. Xem bài \"Prompt hiệu quả cho code\" để có khung mẫu chi tiết.",
      en: "State the context (what project, what stack is in use), the concrete requirement (input, output, constraints), and an example of the desired result if you have one. Avoid vague asks like \"make it nicer\" — spell out the criteria. See the \"Effective prompts for code\" lesson for a detailed template.",
    },
    tags: ["vibe-coding", "prompt-engineering"],
  },
  {
    question: {
      vi: "Nếu AI viết code sai hoặc chạy lỗi thì phải làm sao?",
      en: "What should I do if the AI writes incorrect or broken code?",
    },
    answer: {
      vi: "Đừng chỉ nói \"nó bị lỗi\" — dán nguyên văn thông báo lỗi hoặc mô tả chính xác điều xảy ra so với điều bạn mong đợi. AI sửa lỗi tốt nhất khi có thông tin cụ thể để so sánh. Nếu lỗi lặp lại nhiều lần, hãy yêu cầu AI giải thích logic trước khi sửa tiếp. Xem bài \"Rủi ro, giới hạn và thực hành an toàn khi vibe coding\".",
      en: "Don't just say \"it's broken\" — paste the exact error message or precisely describe what happened versus what you expected. AI fixes bugs best when given concrete information to compare against. If the same error keeps recurring, ask the AI to explain its logic before trying another fix. See \"Risks, limits, and safe practices\".",
    },
    tags: ["vibe-coding", "rui-ro"],
  },

  // ---------------------------- Corporate Affairs ----------------------------
  {
    question: {
      vi: "AI có thể giúp gì cho bộ phận truyền thông doanh nghiệp?",
      en: "How can AI help a corporate communications team?",
    },
    answer: {
      vi: "AI hỗ trợ soạn thảo nháp thông cáo báo chí, tóm tắt tin tức liên quan đến công ty, và chuẩn hoá giọng văn theo bộ nhận diện thương hiệu — giúp rút ngắn thời gian soạn thảo, nhưng bản duyệt cuối và các phát ngôn nhạy cảm vẫn cần con người kiểm soát. Xem module \"AI Automation cho Corporate Affairs\".",
      en: "AI helps draft press release copy, summarize company-related news, and standardize tone according to brand guidelines — shortening drafting time, though final approval and sensitive statements still need human control. See the \"AI Automation for Corporate Affairs\" module.",
    },
    tags: ["corporate-affairs", "truyen-thong"],
  },
  {
    question: {
      vi: "Làm sao dùng AI để theo dõi danh tiếng và dư luận về công ty?",
      en: "How can AI be used to monitor company reputation and public sentiment?",
    },
    answer: {
      vi: "AI có thể tổng hợp lượng lớn tin tức, mạng xã hội và diễn đàn để phát hiện xu hướng dư luận sớm, phân loại theo mức độ tích cực/tiêu cực, và cảnh báo khi có dấu hiệu khủng hoảng truyền thông. Xem bài \"Theo dõi danh tiếng và dư luận\" trong module Corporate Affairs.",
      en: "AI can synthesize large volumes of news, social media, and forum content to spot sentiment trends early, classify positive/negative signals, and flag potential PR crises. See the \"Reputation and sentiment monitoring\" lesson in the Corporate Affairs module.",
    },
    tags: ["corporate-affairs", "danh-tieng"],
  },
  {
    question: {
      vi: "AI Automation trong Corporate Affairs có rủi ro gì về mặt uy tín?",
      en: "What reputational risks does AI automation carry in Corporate Affairs?",
    },
    answer: {
      vi: "Rủi ro chính là phát ngôn tự động sai ngữ cảnh, thiếu sắc thái văn hoá, hoặc dùng dữ liệu lỗi thời khiến công ty phát ngôn thiếu chính xác trước công chúng. Luôn có bước rà soát của con người trước khi công bố nội dung do AI soạn liên quan đến khủng hoảng hoặc bên liên quan quan trọng. Xem bài \"Stakeholder & ESG reporting\".",
      en: "The main risk is automated statements that miss context or cultural nuance, or rely on outdated data, causing the company to make inaccurate public statements. Always keep a human review step before publishing AI-drafted content related to a crisis or key stakeholders. See \"Stakeholder & ESG reporting\".",
    },
    tags: ["corporate-affairs", "rui-ro", "dao-duc"],
  },

  // ---------------------------- HR & People Experience ----------------------------
  {
    question: {
      vi: "AI có thể dùng để sàng lọc hồ sơ ứng viên không, có công bằng không?",
      en: "Can AI be used to screen job candidates, and is it fair?",
    },
    answer: {
      vi: "AI có thể sàng lọc hồ sơ theo tiêu chí đã định nghĩa để tiết kiệm thời gian, nhưng nếu dữ liệu huấn luyện có thiên vị lịch sử (giới tính, độ tuổi...), AI có thể lặp lại thiên vị đó. Cần kiểm toán định kỳ kết quả sàng lọc theo nhóm nhân khẩu học và luôn có con người xem xét lại quyết định cuối. Xem bài \"Đạo đức, thiên vị và tuân thủ khi dùng AI trong HR\".",
      en: "AI can screen resumes against defined criteria to save time, but if the training data carries historical bias (gender, age, etc.), the AI can repeat that bias. Regularly audit screening outcomes by demographic group and always keep a human reviewing the final decision. See \"Ethics, bias, and compliance when using AI in HR\".",
    },
    tags: ["hr-people-experience", "dao-duc", "tuyen-dung"],
  },
  {
    question: {
      vi: "People analytics là gì và AI đóng vai trò gì trong đó?",
      en: "What is people analytics, and what role does AI play in it?",
    },
    answer: {
      vi: "People analytics là việc dùng dữ liệu nhân sự (khảo sát, hiệu suất, luân chuyển...) để ra quyết định quản trị con người dựa trên bằng chứng thay vì cảm tính. AI giúp phát hiện mẫu hình trong dữ liệu lớn nhanh hơn, ví dụ dự báo nguy cơ nghỉ việc, nhưng kết quả cần diễn giải cẩn trọng để tránh kết luận sai. Xem bài \"People analytics & trải nghiệm nhân viên\".",
      en: "People analytics is the use of HR data (surveys, performance, turnover, etc.) to make evidence-based people decisions instead of relying on intuition. AI helps detect patterns in large datasets faster, e.g. predicting attrition risk, but results need careful interpretation to avoid false conclusions. See \"People analytics & employee experience\".",
    },
    tags: ["hr-people-experience", "people-analytics"],
  },
  {
    question: {
      vi: "Làm sao đảm bảo AI trong tuyển dụng không thiên vị (bias)?",
      en: "How do we make sure AI in hiring doesn't produce bias?",
    },
    answer: {
      vi: "Thông báo rõ cho ứng viên khi AI tham gia sàng lọc, kiểm toán định kỳ kết quả theo nhóm nhân khẩu học, lưu trữ đầy đủ tài liệu về cách mô hình được huấn luyện, và luôn cho phép con người xem xét lại quyết định. Công cụ \"Danh sách kiểm tra tuân thủ AI trong tuyển dụng\" ở trang Công cụ demo áp dụng trực tiếp các tiêu chí này.",
      en: "Notify candidates clearly when AI is involved in screening, audit outcomes by demographic group regularly, keep full documentation of how the model was trained, and always allow a human to review the decision. The \"AI hiring compliance checklist\" tool on the Demo Tools page applies these criteria directly.",
    },
    tags: ["hr-people-experience", "dao-duc", "tuan-thu"],
  },

  // ---------------------------- Risk management ----------------------------
  {
    question: {
      vi: "ERM là gì và AI thay đổi cách quản trị rủi ro doanh nghiệp thế nào?",
      en: "What is ERM, and how is AI changing enterprise risk management?",
    },
    answer: {
      vi: "ERM (Enterprise Risk Management) là khung quản trị rủi ro toàn diện theo tiêu chuẩn COSO, giúp doanh nghiệp nhận diện, đánh giá và ứng phó rủi ro một cách có hệ thống. AI giúp xử lý khối lượng dữ liệu lớn để phát hiện rủi ro sớm hơn và mô phỏng kịch bản nhanh hơn con người làm thủ công. Xem bài \"Tổng quan ERM và AI\".",
      en: "ERM (Enterprise Risk Management) is a comprehensive risk governance framework based on the COSO standard, helping organizations identify, assess, and respond to risk systematically. AI helps process large volumes of data to spot risk earlier and simulate scenarios faster than manual work. See \"ERM and AI overview\".",
    },
    tags: ["quan-tri-rui-ro", "erm"],
  },
  {
    question: {
      vi: "Làm sao dùng AI để tự động hoá công việc tuân thủ (compliance)?",
      en: "How can AI automate compliance work?",
    },
    answer: {
      vi: "AI có thể tự động rà soát tài liệu hợp đồng, đối chiếu với danh mục quy định, và cảnh báo các điều khoản rủi ro cao để con người ưu tiên xem xét — giảm thời gian rà soát thủ công. Kết quả AI vẫn cần chuyên gia tuân thủ xác nhận trước khi có hiệu lực pháp lý. Xem bài \"Tự động hoá compliance\".",
      en: "AI can automatically scan contract documents, cross-reference them against a regulation checklist, and flag high-risk clauses for human prioritization — cutting manual review time. AI output still needs a compliance expert's sign-off before it carries legal weight. See \"Compliance automation\".",
    },
    tags: ["quan-tri-rui-ro", "tuan-thu"],
  },
  {
    question: {
      vi: "Ai chịu trách nhiệm khi AI đưa ra quyết định rủi ro sai?",
      en: "Who is accountable when AI makes a wrong risk decision?",
    },
    answer: {
      vi: "Trách nhiệm pháp lý và đạo đức luôn thuộc về con người/tổ chức triển khai AI, không phải bản thân hệ thống AI. Vì vậy mọi trường hợp sử dụng AI rủi ro cao cần được đăng ký vào sổ rủi ro, có hội đồng quản trị AI phê duyệt, và có kế hoạch giám sát liên tục. Xem bài \"Quản trị rủi ro của chính AI (AI Governance)\".",
      en: "Legal and ethical accountability always rests with the humans/organization deploying the AI, not the AI system itself. That's why every high-risk AI use case should be logged in a risk register, approved by an AI governance board, and paired with an ongoing monitoring plan. See \"Governing the risk of AI itself\".",
    },
    tags: ["quan-tri-rui-ro", "ai-governance", "dao-duc"],
  },

  // ---------------------------- General AI literacy ----------------------------
  {
    question: {
      vi: "AI hallucination (ảo giác AI) là gì?",
      en: "What is AI hallucination?",
    },
    answer: {
      vi: "AI hallucination là khi mô hình AI tạo ra thông tin nghe có vẻ hợp lý nhưng thực chất sai hoặc bịa đặt — ví dụ trích dẫn sai số liệu, nguồn không tồn tại. Luôn kiểm tra chéo các sự kiện, số liệu quan trọng với nguồn đáng tin cậy trước khi sử dụng, đặc biệt trong báo cáo hoặc quyết định có ảnh hưởng lớn.",
      en: "AI hallucination is when a model generates information that sounds plausible but is actually incorrect or fabricated — for example, citing wrong figures or nonexistent sources. Always cross-check important facts and figures against trustworthy sources before relying on them, especially in reports or high-impact decisions.",
    },
    tags: ["ai-co-ban", "rui-ro"],
  },
  {
    question: {
      vi: "Làm sao đánh giá được một câu trả lời của AI có đáng tin không?",
      en: "How do I judge whether an AI answer is trustworthy?",
    },
    answer: {
      vi: "Kiểm tra xem AI có trích nguồn cụ thể không, đối chiếu số liệu quan trọng với tài liệu gốc, và thử đặt câu hỏi ngược để xem AI có nhất quán không. Với quyết định quan trọng, luôn dùng AI như một trợ lý gợi ý chứ không phải quyết định cuối cùng. Xem mục Tài nguyên tham khảo để so sánh với nguồn chính thống.",
      en: "Check whether the AI cites specific sources, cross-reference key figures against the original document, and try asking a follow-up question to see if the AI stays consistent. For important decisions, always treat AI as an advisory assistant, not the final decision-maker. See the Resources section to compare against authoritative sources.",
    },
    tags: ["ai-co-ban", "rui-ro"],
  },
  {
    question: {
      vi: "Sự khác biệt giữa AI automation và RPA là gì?",
      en: "What is the difference between AI automation and RPA?",
    },
    answer: {
      vi: "RPA (Robotic Process Automation) tự động hoá các bước cố định, có quy tắc rõ ràng (ví dụ sao chép dữ liệu giữa hai hệ thống). AI automation dùng mô hình AI để xử lý các tác vụ cần hiểu ngôn ngữ, suy luận, hoặc ra quyết định linh hoạt hơn (ví dụ tóm tắt văn bản, trả lời câu hỏi). Hai công nghệ thường kết hợp với nhau trong thực tế.",
      en: "RPA (Robotic Process Automation) automates fixed, rule-based steps (e.g. copying data between two systems). AI automation uses AI models to handle tasks that require language understanding, reasoning, or more flexible decision-making (e.g. summarizing text, answering questions). In practice, the two technologies are often combined.",
    },
    tags: ["ai-co-ban", "tu-dong-hoa"],
  },
  {
    question: {
      vi: "Chi phí sử dụng AI như Claude có đắt không?",
      en: "Is using an AI like Claude expensive?",
    },
    answer: {
      vi: "Chi phí phụ thuộc vào quy mô sử dụng và mô hình cụ thể — thường tính theo lượng văn bản xử lý. Với các tác vụ nội bộ quy mô nhỏ (soạn thảo, tóm tắt, công cụ demo), chi phí thường thấp hơn nhiều so với thuê nhân sự làm thủ công tương đương. Nên bắt đầu từ một use case nhỏ để đo lường hiệu quả trước khi mở rộng.",
      en: "Cost depends on usage scale and the specific model — usually billed by the amount of text processed. For small-scale internal tasks (drafting, summarizing, demo tools), the cost is typically much lower than hiring equivalent manual labor. Start with one small use case to measure impact before scaling up.",
    },
    tags: ["ai-co-ban", "roi", "chi-phi"],
  },
  {
    question: {
      vi: "Làm sao thuyết phục lãnh đạo đầu tư vào AI automation?",
      en: "How do I convince leadership to invest in AI automation?",
    },
    answer: {
      vi: "Bắt đầu với một bản demo nhỏ giải quyết một vấn đề cụ thể, đo lường thời gian/chi phí tiết kiệm được, và trình bày cả rủi ro lẫn kế hoạch kiểm soát rủi ro đi kèm. Lãnh đạo thường bị thuyết phục bởi kết quả cụ thể hơn là lý thuyết — hãy dùng các công cụ demo trên trang này như điểm khởi đầu.",
      en: "Start with a small demo that solves one concrete problem, measure the time/cost saved, and present both the risks and the accompanying risk-control plan. Leadership is usually persuaded by concrete results rather than theory — use the demo tools on this site as a starting point.",
    },
    tags: ["ai-co-ban", "roi", "quan-tri"],
  },
  {
    question: {
      vi: "AI có thể thay thế hoàn toàn nhân viên không?",
      en: "Can AI completely replace employees?",
    },
    answer: {
      vi: "Hiếm khi. Nghiên cứu từ McKinsey và Deloitte cho thấy AI hiệu quả nhất khi đảm nhận các tác vụ lặp lại, còn phán đoán phức tạp, quan hệ con người và trách nhiệm giải trình vẫn cần con người. Vai trò công việc thường thay đổi (làm việc cùng AI) hơn là biến mất hoàn toàn.",
      en: "Rarely. Research from McKinsey and Deloitte shows AI is most effective at repetitive tasks, while complex judgment, human relationships, and accountability still require people. Roles tend to shift toward working alongside AI rather than disappearing entirely.",
    },
    tags: ["ai-co-ban", "dao-duc"],
  },
];
