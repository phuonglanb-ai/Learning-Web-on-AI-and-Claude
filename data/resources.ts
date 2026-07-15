import { Resource } from "@/lib/types";

// Ghi chú: các nguồn dưới đây liệt kê theo tổ chức xuất bản và chủ đề báo cáo,
// tổng hợp từ các ấn phẩm/khảo sát thường niên đáng tin cậy của từng tổ chức.
// Vì các đường dẫn bài viết cụ thể thay đổi/di chuyển thường xuyên, hãy tìm
// theo tiêu đề trên trang chủ của tổ chức để có bản mới nhất và chính xác nhất.
// Mỗi mục gắn với một `topic` khớp slug chuyên đề trong data/modules.ts (hoặc
// "general" cho các nguồn liên quan tới nhiều chuyên đề) để trang Tài nguyên
// có thể nhóm hiển thị theo chủ đề học tập.
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
      vi: "Future of Jobs Report — tác động của AI và tự động hoá đến việc làm toàn cầu",
      en: "Future of Jobs Report — the impact of AI and automation on global employment",
    },
    type: { vi: "Báo cáo khảo sát toàn cầu", en: "Global survey report" },
    note: {
      vi: "Tìm trên weforum.org mục Reports, chủ đề \"Future of Jobs\", \"AI governance\".",
      en: "Search weforum.org under Reports, topics \"Future of Jobs\", \"AI governance\".",
    },
    url: "https://www.weforum.org",
  },

  // ---------------------------- Vibe Coding ----------------------------
  {
    organization: "Anthropic Engineering",
    topic: "vibe-coding",
    title: {
      vi: "Hướng dẫn kỹ thuật viết prompt và thực hành tốt khi dùng Claude Code",
      en: "Engineering guidance on prompting and best practices for Claude Code",
    },
    type: { vi: "Tài liệu kỹ thuật & bài viết kỹ sư", en: "Technical docs & engineering articles" },
    note: {
      vi: "Tìm trên anthropic.com mục Engineering/News, chủ đề \"Claude Code\", \"agentic coding\".",
      en: "Search anthropic.com under Engineering/News, topics \"Claude Code\", \"agentic coding\".",
    },
    url: "https://www.anthropic.com",
  },
  {
    organization: "MIT Sloan Management Review",
    topic: "vibe-coding",
    title: {
      vi: "Nghiên cứu về năng suất phát triển phần mềm khi có trợ lý AI",
      en: "Research on software development productivity with AI assistants",
    },
    type: { vi: "Bài viết nghiên cứu quản trị", en: "Management research articles" },
    note: {
      vi: "Tìm trên sloanreview.mit.edu chủ đề \"AI productivity\", \"generative AI adoption\".",
      en: "Search sloanreview.mit.edu for topics \"AI productivity\", \"generative AI adoption\".",
    },
    url: "https://sloanreview.mit.edu",
  },
  {
    organization: "GitHub",
    topic: "vibe-coding",
    title: {
      vi: "Xu hướng lập trình cùng AI (AI pair programming) từ dữ liệu thực tế nhà phát triển",
      en: "AI pair-programming trends from real-world developer data",
    },
    type: { vi: "Blog kỹ thuật & khảo sát nhà phát triển", en: "Engineering blog & developer survey" },
    note: {
      vi: "Tìm trên github.blog chủ đề \"AI\", \"Copilot\", \"developer productivity\".",
      en: "Search github.blog for topics \"AI\", \"Copilot\", \"developer productivity\".",
    },
    url: "https://github.blog",
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
    organization: "Edelman",
    topic: "corporate-affairs",
    title: {
      vi: "Edelman Trust Barometer — khảo sát thường niên về niềm tin công chúng với doanh nghiệp",
      en: "Edelman Trust Barometer — annual survey on public trust in institutions and business",
    },
    type: { vi: "Khảo sát thường niên", en: "Annual survey" },
    note: {
      vi: "Nguồn tham chiếu hàng đầu ngành PR/Corporate Affairs về niềm tin, uy tín và truyền thông khủng hoảng.",
      en: "A leading reference in the PR/Corporate Affairs industry on trust, reputation, and crisis communications.",
    },
    url: "https://www.edelman.com",
  },
  {
    organization: "PwC",
    topic: "corporate-affairs",
    title: {
      vi: "Khảo sát niềm tin doanh nghiệp và báo cáo ESG/stakeholder communications",
      en: "Corporate trust surveys and ESG/stakeholder communications reports",
    },
    type: { vi: "Khảo sát ngành & báo cáo chuyên đề", en: "Industry survey & thematic report" },
    note: {
      vi: "Tìm trên pwc.com mục Insights, chủ đề \"Trust Survey\", \"ESG reporting\".",
      en: "Search pwc.com under Insights, topics \"Trust Survey\", \"ESG reporting\".",
    },
    url: "https://www.pwc.com",
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

  // ---------------------------- Risk management ----------------------------
  {
    organization: "COSO",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "Enterprise Risk Management — Integrating with Strategy and Performance",
      en: "Enterprise Risk Management — Integrating with Strategy and Performance",
    },
    type: { vi: "Khung quản trị rủi ro doanh nghiệp", en: "Enterprise risk management framework" },
    note: {
      vi: "Khung ERM tiêu chuẩn được tham chiếu rộng rãi trong ngành quản trị rủi ro và kiểm toán nội bộ.",
      en: "The standard ERM framework widely referenced in risk management and internal audit.",
    },
    url: "https://www.coso.org",
  },
  {
    organization: "NIST (National Institute of Standards and Technology)",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "AI Risk Management Framework (AI RMF) — khung quản trị rủi ro AI",
      en: "AI Risk Management Framework (AI RMF)",
    },
    type: { vi: "Khung quản trị & tiêu chuẩn kỹ thuật", en: "Governance framework & technical standard" },
    note: {
      vi: "Tài liệu công khai, hữu ích khi xây dựng chính sách quản trị AI nội bộ.",
      en: "Publicly available; useful when building internal AI governance policy.",
    },
    url: "https://www.nist.gov",
  },
  {
    organization: "ISACA",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "Tiêu chuẩn kiểm toán CNTT và hướng dẫn quản trị rủi ro AI (AI Governance)",
      en: "IT audit standards and AI governance risk guidance",
    },
    type: { vi: "Tiêu chuẩn ngành & chứng chỉ chuyên môn", en: "Industry standard & professional certification" },
    note: {
      vi: "Tìm trên isaca.org chủ đề \"AI Governance\", \"IT Risk\", hữu ích cho đội kiểm toán/tuân thủ nội bộ.",
      en: "Search isaca.org for topics \"AI Governance\", \"IT Risk\" — useful for internal audit/compliance teams.",
    },
    url: "https://www.isaca.org",
  },
  {
    organization: "OECD.AI",
    topic: "quan-tri-rui-ro",
    title: {
      vi: "Nguyên tắc và chính sách quản trị AI cấp quốc gia/quốc tế",
      en: "National/international AI governance principles and policy",
    },
    type: { vi: "Khung chính sách công", en: "Public policy framework" },
    note: {
      vi: "Tham chiếu hữu ích khi cần đối chiếu chính sách AI nội bộ với xu hướng quản lý AI toàn cầu.",
      en: "Useful reference when benchmarking internal AI policy against global AI regulation trends.",
    },
    url: "https://oecd.ai",
  },
];
