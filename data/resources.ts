import { Resource } from "@/lib/types";

// Ghi chú: các nguồn dưới đây ưu tiên tổ chức chuẩn hoá, hiệp hội nghề nghiệp
// và trung tâm nghiên cứu chính thống (NIST, ISO, COSO, OECD, EU AI Office,
// ILO, UNESCO, các hiệp hội Corporate Affairs/PR, và các nền tảng đào tạo
// automation uy tín) — tổng hợp và mở rộng từ một danh sách tư liệu do người
// dùng cung cấp. Vì các đường dẫn bài viết cụ thể thay đổi/di chuyển thường
// xuyên, hãy tìm theo tiêu đề trên trang chủ của tổ chức để có bản mới nhất
// và chính xác nhất. Mỗi mục gắn với một `topic` khớp slug chuyên đề trong
// data/modules.ts (hoặc "general" cho các nguồn liên quan tới nhiều chuyên
// đề) để trang Tài nguyên có thể nhóm hiển thị theo chủ đề học tập.
export const resources: Resource[] = [
  // ---------------------------- General / AI literacy ----------------------------
  {
    organization: "Anthropic",
    topic: "general",
    title: {
      vi: "Tài liệu chính thức về Claude, Claude Code và hướng dẫn kỹ thuật prompt/agent",
      en: "Official documentation on Claude, Claude Code, and prompt/agent engineering guidance",
    },
    type: { vi: "Tài liệu kỹ thuật chính thức", en: "Official technical documentation" },
    note: {
      vi: "Nguồn cập nhật nhất cho các thay đổi tính năng và thực hành khuyến nghị khi dùng Claude.",
      en: "The most up-to-date source for feature changes and recommended practices when using Claude.",
    },
    url: "https://www.anthropic.com",
  },
  {
    organization: "McKinsey & Company",
    topic: "general",
    title: {
      vi: "Báo cáo về AI tạo sinh trong doanh nghiệp và tác động đến năng suất tri thức",
      en: "Reports on generative AI in the enterprise and its impact on knowledge-work productivity",
    },
    type: { vi: "Báo cáo nghiên cứu", en: "Research report" },
    note: {
      vi: "Tìm trên mckinsey.com mục McKinsey Digital / QuantumBlack AI, chủ đề \"generative AI\", \"the state of AI\".",
      en: "Search mckinsey.com under McKinsey Digital / QuantumBlack AI, topics \"generative AI\", \"the state of AI\".",
    },
    url: "https://www.mckinsey.com",
  },
  {
    organization: "World Economic Forum",
    topic: "general",
    title: {
      vi: "The AI-First Operating System — thiết kế lại workflow, decision rights và operating model quanh AI",
      en: "The AI-First Operating System — redesigning workflows, decision rights, and the operating model around AI",
    },
    type: { vi: "Báo cáo chiến lược", en: "Strategic report" },
    note: {
      vi: "Nhấn mạnh: thất bại tạo giá trị từ AI thường là thất bại thiết kế hệ thống, không chỉ thất bại công nghệ. Tìm thêm \"Future of Jobs Report\" trên weforum.org.",
      en: "Key point: failure to capture AI value is usually a systems-design failure, not just a technology failure. Also see the \"Future of Jobs Report\" on weforum.org.",
    },
    url: "https://www.weforum.org",
  },
  {
    organization: "OECD.AI",
    topic: "general",
    title: {
      vi: "OECD AI Principles và khung phân loại hệ thống AI theo 5 chiều",
      en: "OECD AI Principles and the 5-dimension AI system classification framework",
    },
    type: { vi: "Nguyên tắc chính sách công", en: "Public policy principles" },
    note: {
      vi: "Phân loại AI theo People & Planet, Economic Context, Data & Input, AI Model, Task & Output — hữu ích để xác định stakeholder và tác nhân AI trong toàn vòng đời.",
      en: "Classifies AI along People & Planet, Economic Context, Data & Input, AI Model, and Task & Output — useful for mapping stakeholders and AI actors across the lifecycle.",
    },
    url: "https://oecd.ai",
  },
  {
    organization: "Stanford HAI",
    topic: "general",
    title: {
      vi: "AI Index Report và Policy Hub — dữ liệu xu hướng AI, mức độ áp dụng và tác động",
      en: "AI Index Report and Policy Hub — data on AI trends, adoption, and impact",
    },
    type: { vi: "Báo cáo dữ liệu thường niên", en: "Annual data report" },
    note: {
      vi: "Theo dõi xu hướng AI, mức độ áp dụng, quy định, đầu tư và tác động đến lực lượng lao động bằng dữ liệu nghiên cứu cập nhật.",
      en: "Tracks AI trends, adoption, regulation, investment, and workforce impact using up-to-date research data.",
    },
    url: "https://hai.stanford.edu",
  },

  // ---------------------------- Vibe Coding / AI automation practice ----------------------------
  {
    organization: "Alan Turing Institute",
    topic: "vibe-coding",
    title: {
      vi: "AI Ethics and Governance in Practice — xem AI như một hệ thống sociotechnical",
      en: "AI Ethics and Governance in Practice — treating AI as a sociotechnical system",
    },
    type: { vi: "Bộ tài liệu 8 workbook", en: "8-workbook curriculum" },
    note: {
      vi: "Đưa trách nhiệm, đạo đức và stakeholder impact vào chính vòng đời dự án thay vì kiểm tra sau khi đã xây xong. Nên học module \"AI Project Lifecycle Mapping\" và \"AI Accountability in Practice\".",
      en: "Builds accountability, ethics, and stakeholder impact into the project lifecycle itself, rather than checking them after the system is built. Start with the \"AI Project Lifecycle Mapping\" and \"AI Accountability in Practice\" modules.",
    },
    url: "https://www.turing.ac.uk",
  },
  {
    organization: "APQC",
    topic: "vibe-coding",
    title: {
      vi: "Process Classification Framework (PCF) — chuẩn hoá quy trình trước khi tự động hoá",
      en: "Process Classification Framework (PCF) — standardizing processes before automating them",
    },
    type: { vi: "Khung phân loại quy trình", en: "Process taxonomy framework" },
    note: {
      vi: "Giúp phân rã công việc (ví dụ \"theo dõi tin tức\") thành các bước cụ thể để biết bước nào rule-based, bước nào cần AI, bước nào cần chuyên gia phê duyệt.",
      en: "Helps decompose work (e.g. \"news monitoring\") into concrete steps to identify what's rule-based, what needs AI, and what needs expert sign-off.",
    },
    url: "https://www.apqc.org",
  },
  {
    organization: "UiPath Academy",
    topic: "vibe-coding",
    title: {
      vi: "Automation Business Analyst Associate — quy trình triển khai dự án automation từ đầu đến cuối",
      en: "Automation Business Analyst Associate — an end-to-end automation project methodology",
    },
    type: { vi: "Khoá đào tạo miễn phí có chứng chỉ", en: "Free certified training path" },
    note: {
      vi: "Đi qua toàn bộ vòng đời: kick-off, phân tích quy trình, thiết kế, UAT, triển khai, hypercare. Nhấn mạnh process owner phải tham gia từ đầu, không giao hết cho đội công nghệ.",
      en: "Covers the full lifecycle: kick-off, process analysis, design, UAT, deployment, hypercare. Emphasizes that the process owner must be involved from the start, not hand the whole problem to a technical team.",
    },
    url: "https://academy.uipath.com",
  },
  {
    organization: "Make Academy",
    topic: "vibe-coding",
    title: {
      vi: "Automation to AI Agents: Foundation — từ tự động hoá cơ bản đến AI agent",
      en: "Automation to AI Agents: Foundation — from basic automation to AI agents",
    },
    type: { vi: "Lộ trình tự học miễn phí", en: "Free self-paced learning path" },
    note: {
      vi: "Phù hợp để dựng prototype nhanh; đi từ khái niệm AI/LLM cơ bản đến thiết kế và vận hành AI agent, không yêu cầu kinh nghiệm kỹ thuật trước đó.",
      en: "Good for fast prototyping; goes from basic AI/LLM concepts to designing and operating AI agents, with no prior technical experience required.",
    },
    url: "https://www.make.com",
  },
  {
    organization: "Microsoft Learn",
    topic: "vibe-coding",
    title: {
      vi: "Power Automate và AI Builder — automation cho người dùng nghiệp vụ",
      en: "Power Automate and AI Builder — automation for business users",
    },
    type: { vi: "Lộ trình học chính thức", en: "Official learning path" },
    note: {
      vi: "Học approval workflow, document processing, AI-assisted classification và các kiểm soát giám sát — thiết kế cho người dùng nghiệp vụ (business users), không chỉ dân IT.",
      en: "Covers approval workflows, document processing, AI-assisted classification, and monitoring controls — designed for business users, not just IT.",
    },
    url: "https://learn.microsoft.com",
  },

  // ---------------------------- Corporate Affairs ----------------------------
  {
    organization: "Harvard Business Review (HBR)",
    topic: "corporate-affairs",
    title: {
      vi: "Các bài viết về truyền thông doanh nghiệp, quan hệ công chúng và AI trong quản trị danh tiếng",
      en: "Articles on corporate communications, public relations, and AI in reputation management",
    },
    type: { vi: "Bài viết & nghiên cứu tình huống", en: "Articles & case studies" },
    note: {
      vi: "Tìm trên hbr.org theo chủ đề \"Corporate Communications\", \"Reputation Management\", \"AI Ethics\".",
      en: "Search hbr.org for topics \"Corporate Communications\", \"Reputation Management\", \"AI Ethics\".",
    },
    url: "https://hbr.org",
  },
  {
    organization: "Arthur W. Page Society",
    topic: "corporate-affairs",
    title: {
      vi: "AI-powered stakeholder intelligence và vai trò của CCO trong AI governance",
      en: "AI-powered stakeholder intelligence and the CCO's role in AI governance",
    },
    type: { vi: "Nghiên cứu ngành cho lãnh đạo truyền thông", en: "Industry research for communications leadership" },
    note: {
      vi: "Phân tích sự chuyển dịch từ khảo sát định kỳ sang stakeholder intelligence gần thời gian thực, và vai trò của human leadership, trust trong truyền thông có AI hỗ trợ.",
      en: "Analyzes the shift from periodic surveys to near-real-time stakeholder intelligence, and the role of human leadership and trust in AI-enabled communications.",
    },
    url: "https://page.org",
  },
  {
    organization: "IABC (International Association of Business Communicators)",
    topic: "corporate-affairs",
    title: {
      vi: "Ethical Use of AI và AI Leadership and Communication SIG",
      en: "Ethical Use of AI and the AI Leadership and Communication SIG",
    },
    type: { vi: "Hướng dẫn đạo đức nghề nghiệp", en: "Professional ethics guidance" },
    note: {
      vi: "Nhấn mạnh verification, confidentiality, fairness, transparency, và rằng người làm truyền thông luôn chịu trách nhiệm cuối cùng với nội dung có AI hỗ trợ.",
      en: "Emphasizes verification, confidentiality, fairness, transparency, and that communicators always bear final responsibility for AI-assisted content.",
    },
    url: "https://www.iabc.com",
  },
  {
    organization: "CIPR (Chartered Institute of Public Relations)",
    topic: "corporate-affairs",
    title: {
      vi: "Responsible Use of AI in PR — Best Practice Guide",
      en: "Responsible Use of AI in PR — Best Practice Guide",
    },
    type: { vi: "Hướng dẫn thực hành nghề nghiệp", en: "Professional practice guide" },
    note: {
      vi: "Sát với công việc Corporate Affairs hằng ngày: drafting, media monitoring, reputational risk, fact-checking và công bố việc dùng AI.",
      en: "Closely tied to day-to-day Corporate Affairs work: drafting, media monitoring, reputational risk, fact-checking, and disclosing AI use.",
    },
    url: "https://cipr.co.uk",
  },
  {
    organization: "PRCA (Public Relations and Communications Association)",
    topic: "corporate-affairs",
    title: {
      vi: "PRCA AI Green Paper — nguyên tắc dùng AI có đạo đức trong PR",
      en: "PRCA AI Green Paper — principles for ethical AI use in PR",
    },
    type: { vi: "Sách trắng ngành", en: "Industry green paper" },
    note: {
      vi: "Nguyên tắc và hướng dẫn thực hành cho việc dùng AI minh bạch, có đạo đức và bảo vệ niềm tin công chúng trong ngành PR/communications.",
      en: "Principles and practical guidance for transparent, ethical AI use that protects public trust in the PR/communications industry.",
    },
    url: "https://www.prca.org.uk",
  },

  // ---------------------------- HR & People Experience ----------------------------
  {
    organization: "SHRM (Society for Human Resource Management)",
    topic: "hr-people-experience",
    title: {
      vi: "Khảo sát công nghệ nhân sự thường niên và hướng dẫn thực hành AI trong tuyển dụng",
      en: "Annual HR technology survey and guidance on AI practice in hiring",
    },
    type: { vi: "Khảo sát ngành & hướng dẫn thực hành", en: "Industry survey & practice guidance" },
    note: {
      vi: "Tìm trên shrm.org mục Research/Topics, chủ đề \"AI in HR\", \"Talent Acquisition Technology\".",
      en: "Search shrm.org under Research/Topics, topics \"AI in HR\", \"Talent Acquisition Technology\".",
    },
    url: "https://www.shrm.org",
  },
  {
    organization: "ILO (International Labour Organization)",
    topic: "hr-people-experience",
    title: {
      vi: "Algorithmic Management and AI at Work — quản lý bằng thuật toán và quyền lao động",
      en: "Algorithmic Management and AI at Work — algorithmic management and labour rights",
    },
    type: { vi: "Nguồn tiêu chuẩn quốc tế", en: "International standard-setting source" },
    note: {
      vi: "Nguồn bắt buộc khi dùng AI trong giám sát/đánh giá nhân sự: phân tích cách hệ thống thuật toán tổ chức, phân công và đánh giá lao động, cùng các rủi ro tâm lý xã hội đi kèm.",
      en: "An essential source when AI is used for worker monitoring/evaluation: analyzes how algorithmic systems organize, assign, and evaluate labor, along with the psychosocial risks involved.",
    },
    url: "https://www.ilo.org",
  },
  {
    organization: "UNESCO",
    topic: "hr-people-experience",
    title: {
      vi: "Global AI Ethics and Governance Observatory — nhân quyền, công bằng và không phân biệt đối xử",
      en: "Global AI Ethics and Governance Observatory — human rights, fairness, and non-discrimination",
    },
    type: { vi: "Đài quan sát chính sách toàn cầu", en: "Global policy observatory" },
    note: {
      vi: "Hữu ích để xây dựng bộ câu hỏi đánh giá tác động đạo đức (ethical impact assessment) hoặc tham vấn các bên liên quan trước khi triển khai AI trong HR.",
      en: "Useful for building an ethical impact assessment or stakeholder consultation questionnaire before deploying AI in HR.",
    },
    url: "https://www.unesco.org",
  },
  {
    organization: "Deloitte",
    topic: "hr-people-experience",
    title: {
      vi: "Human Capital Trends — xu hướng thường niên về con người, tổ chức và AI tại nơi làm việc",
      en: "Human Capital Trends — annual trends on people, organizations, and AI at work",
    },
    type: { vi: "Khảo sát thường niên", en: "Annual survey" },
    note: {
      vi: "Tìm trên deloitte.com mục Insights, chủ đề \"Human Capital Trends\".",
      en: "Search deloitte.com under Insights, topic \"Human Capital Trends\".",
    },
    url: "https://www2.deloitte.com",
  },
  {
    organization: "Gartner",
    topic: "hr-people-experience",
    title: {
      vi: "Nghiên cứu công nghệ nhân sự (HR Tech) và tác động của AI đến trải nghiệm nhân viên",
      en: "HR technology research and the impact of AI on employee experience",
    },
    type: { vi: "Báo cáo nghiên cứu ngành", en: "Industry research report" },
    note: {
      vi: "Tìm trên gartner.com mục HR, chủ đề \"AI in HR\", \"Employee Experience\".",
      en: "Search gartner.com under HR, topics \"AI in HR\", \"Employee Experience\".",
    },
    url: "https://www.gartner.com",
  },

  // ---------------------------- Risk management / AI governance ----------------------------
  {
    organization: "NIST (National Institute of Standards and Technology)",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "AI Risk Management Framework (AI RMF) và Playbook — Govern, Map, Measure, Manage",
      en: "AI Risk Management Framework (AI RMF) and Playbook — Govern, Map, Measure, Manage",
    },
    type: { vi: "Khung quản trị & tiêu chuẩn kỹ thuật", en: "Governance framework & technical standard" },
    note: {
      vi: "Khung nền tảng tốt nhất để thiết kế risk register, control matrix và quy trình phê duyệt AI, tổ chức theo 4 chức năng: Govern (chính sách), Map (bối cảnh & tác động), Measure (đo hiệu năng/rủi ro), Manage (ưu tiên & xử lý).",
      en: "The best foundational framework for designing a risk register, control matrix, and AI approval process, organized into four functions: Govern (policy), Map (context & impact), Measure (performance/risk), Manage (prioritize & respond).",
    },
    url: "https://www.nist.gov",
  },
  {
    organization: "ISO (International Organization for Standardization)",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "ISO/IEC 42001 (hệ thống quản lý AI) và ISO/IEC 42005 (đánh giá tác động hệ thống AI)",
      en: "ISO/IEC 42001 (AI management system) and ISO/IEC 42005 (AI system impact assessment)",
    },
    type: { vi: "Bộ tiêu chuẩn quốc tế", en: "International standard family" },
    note: {
      vi: "42001: cách tổ chức thiết lập, vận hành và cải tiến liên tục hệ thống quản lý AI cấp doanh nghiệp. 42005: hướng dẫn đánh giá tác động của một use case AI cụ thể. Nên học sau khi đã hiểu một phương pháp triển khai thực tế (ví dụ UiPath).",
      en: "42001: how an organization sets up, operates, and continuously improves an enterprise AI management system. 42005: guidance for assessing the impact of a specific AI use case. Best studied after grasping a practical delivery methodology (e.g. UiPath's).",
    },
    url: "https://www.iso.org",
  },
  {
    organization: "COSO",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "AI, Enterprise Risk Management và Internal Control over Generative AI",
      en: "AI, Enterprise Risk Management, and Internal Control over Generative AI",
    },
    type: { vi: "Khung quản trị rủi ro doanh nghiệp", en: "Enterprise risk management framework" },
    note: {
      vi: "Liên kết AI với chiến lược, hiệu suất, ERM và kiểm soát nội bộ — trả lời được các câu hỏi lãnh đạo/kiểm toán hay hỏi: risk owner là ai, bằng chứng kiểm soát nằm ở đâu, ai phê duyệt output.",
      en: "Links AI to strategy, performance, ERM, and internal control — answers the questions leadership/audit typically ask: who is the risk owner, where is the control evidence, who approves the output.",
    },
    url: "https://www.coso.org",
  },
  {
    organization: "European Commission — Digital Strategy",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "EU AI Act — phân loại rủi ro và nghĩa vụ của đơn vị triển khai AI",
      en: "EU AI Act — risk classification and obligations for AI deployers",
    },
    type: { vi: "Văn bản pháp lý & hướng dẫn thực thi", en: "Legislation & implementation guidance" },
    note: {
      vi: "Cách phân loại use case theo mức độ rủi ro, nghĩa vụ giám sát của con người (human oversight), theo dõi và xử lý sự cố — chuẩn tham chiếu quan trọng khi làm việc với đối tác quốc tế.",
      en: "How to classify use cases by risk tier, the human-oversight obligations of deployers, monitoring, and incident response — an important reference point when working with international partners.",
    },
    url: "https://digital-strategy.ec.europa.eu",
  },
  {
    organization: "ISACA",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "AI Governance Brief và tiêu chuẩn kiểm toán CNTT",
      en: "AI Governance Brief and IT audit standards",
    },
    type: { vi: "Tiêu chuẩn ngành & bảng câu hỏi tự đánh giá", en: "Industry standard & self-assessment questionnaire" },
    note: {
      vi: "Có bảng câu hỏi đánh giá mức độ trưởng thành của hệ thống AI governance — hữu ích cho đội kiểm toán/tuân thủ nội bộ.",
      en: "Includes a maturity-assessment questionnaire for AI governance — useful for internal audit/compliance teams.",
    },
    url: "https://www.isaca.org",
  },
  {
    organization: "The Institute of Internal Auditors (IIA)",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "AI Auditing Framework và bộ câu hỏi quản trị/kiểm soát rủi ro cho hội đồng quản trị",
      en: "AI Auditing Framework and board-level governance/control risk questionnaires",
    },
    type: { vi: "Công cụ kiểm toán nội bộ", en: "Internal audit toolkit" },
    note: {
      vi: "Dù viết cho kiểm toán nội bộ, đây là nguồn tốt để tự kiểm tra thiết kế quản trị của một dự án AI trước khi trình lãnh đạo.",
      en: "Though written for internal audit, this is a good source to self-check an AI project's governance design before presenting it to leadership.",
    },
    url: "https://www.theiia.org",
  },
  {
    organization: "NACD (National Association of Corporate Directors)",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "Director Essentials: Implementing AI Governance — 4 trụ cột cho hội đồng quản trị",
      en: "Director Essentials: Implementing AI Governance — a 4-pillar framework for the board",
    },
    type: { vi: "Hướng dẫn cho hội đồng quản trị", en: "Board-level guidance" },
    note: {
      vi: "Khung 4 trụ cột gồm chiến lược, trách nhiệm, rủi ro và tạo giá trị — dùng để xây board questions, AI governance agenda và báo cáo cho lãnh đạo.",
      en: "A 4-pillar framework covering strategy, accountability, risk, and value creation — useful for building board questions, an AI governance agenda, and leadership reporting.",
    },
    url: "https://www.nacdonline.org",
  },
];
