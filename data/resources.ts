import { Resource } from "@/lib/types";

// Ghi chú: các nguồn dưới đây liệt kê theo tổ chức xuất bản và chủ đề báo cáo,
// tổng hợp từ các ấn phẩm/khảo sát thường niên đáng tin cậy của từng tổ chức.
// Vì các đường dẫn bài viết cụ thể thay đổi/di chuyển thường xuyên, hãy tìm
// theo tiêu đề trên trang chủ của tổ chức để có bản mới nhất và chính xác nhất.
export const resources: Resource[] = [
  {
    organization: "Harvard Business Review (HBR)",
    title: {
      vi: "Các bài viết về People Analytics, đạo đức AI và quản trị nhân sự dựa trên dữ liệu",
      en: "Articles on people analytics, AI ethics, and data-driven people management",
    },
    type: { vi: "Bài viết & nghiên cứu tình huống", en: "Articles & case studies" },
    note: {
      vi: "Tìm trên hbr.org theo chủ đề \"People Analytics\", \"AI Ethics\", \"Future of Work\".",
      en: "Search hbr.org for topics \"People Analytics\", \"AI Ethics\", \"Future of Work\".",
    },
    url: "https://hbr.org",
  },
  {
    organization: "McKinsey & Company",
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
    organization: "Deloitte",
    title: {
      vi: "Human Capital Trends và các báo cáo về AI Governance, quản trị rủi ro doanh nghiệp",
      en: "Human Capital Trends and reports on AI governance, enterprise risk management",
    },
    type: { vi: "Khảo sát thường niên & báo cáo chuyên đề", en: "Annual survey & thematic report" },
    note: {
      vi: "Tìm trên deloitte.com mục Insights, chủ đề \"Human Capital Trends\", \"AI governance\", \"Risk & Compliance\".",
      en: "Search deloitte.com under Insights, topics \"Human Capital Trends\", \"AI governance\", \"Risk & Compliance\".",
    },
    url: "https://www2.deloitte.com",
  },
  {
    organization: "SHRM (Society for Human Resource Management)",
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
    organization: "NIST (National Institute of Standards and Technology)",
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
    organization: "COSO",
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
    organization: "Anthropic",
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
];
