import { Localized } from "@/lib/types";

export interface ChecklistDef {
  storageKey: string;
  title: Localized;
  subtitle: Localized;
  items: Localized[];
}

export const deploymentChecklist: ChecklistDef = {
  storageKey: "deployment",
  title: {
    vi: "Danh sách kiểm tra trước khi triển khai công cụ tự chế",
    en: "Pre-deployment checklist for homegrown tools",
  },
  subtitle: {
    vi: "Dựa trên bài học 'Rủi ro, giới hạn và thực hành an toàn khi vibe coding'",
    en: "Based on the 'Risks, limits, and safe practices for vibe coding' lesson",
  },
  items: [
    { vi: "Dữ liệu thật hay dữ liệu giả lập? Nếu là dữ liệu thật, đã phân loại mức độ nhạy cảm chưa?", en: "Real or synthetic data? If real, has it been classified for sensitivity?" },
    { vi: "Ai chịu trách nhiệm rà soát và duyệt kết quả AI trước khi dùng chính thức?", en: "Who is accountable for reviewing and approving AI output before official use?" },
    { vi: "Đội IT/bảo mật đã biết đến và (nếu cần) rà soát công cụ chưa?", en: "Is IT/security aware of the tool and has it been reviewed if needed?" },
    { vi: "Có kế hoạch dự phòng nếu công cụ ngừng hoạt động hoặc cho kết quả sai không?", en: "Is there a fallback plan if the tool fails or produces incorrect output?" },
    { vi: "Phạm vi sử dụng đã được giới hạn rõ ràng (một phòng ban, một quy trình) chưa?", en: "Has the scope of use been clearly limited (one department, one process)?" },
  ],
};

export const aiHiringChecklist: ChecklistDef = {
  storageKey: "ai-hiring",
  title: {
    vi: "Danh sách kiểm tra tuân thủ AI trong tuyển dụng",
    en: "AI hiring compliance checklist",
  },
  subtitle: {
    vi: "Dựa trên bài học 'Đạo đức, thiên vị thuật toán và tuân thủ khi dùng AI trong HR'",
    en: "Based on the 'Ethics, algorithmic bias, and compliance' lesson",
  },
  items: [
    { vi: "Ứng viên có được thông báo khi AI tham gia sàng lọc hồ sơ không?", en: "Are candidates notified when AI is involved in resume screening?" },
    { vi: "Có cơ chế để ứng viên yêu cầu con người xem xét lại quyết định không?", en: "Is there a mechanism for candidates to request human review?" },
    { vi: "Kết quả sàng lọc có được kiểm toán định kỳ theo nhóm nhân khẩu học không?", en: "Are screening outcomes periodically audited by demographic group?" },
    { vi: "Tài liệu về cách mô hình được huấn luyện/kiểm định có được lưu trữ đầy đủ không?", en: "Is documentation of model training/validation properly retained?" },
  ],
};

export const aiGovernanceChecklist: ChecklistDef = {
  storageKey: "ai-governance",
  title: {
    vi: "Danh sách kiểm tra quản trị rủi ro của AI",
    en: "AI risk governance checklist",
  },
  subtitle: {
    vi: "Dựa trên bài học 'Quản trị rủi ro của chính AI (AI Governance)'",
    en: "Based on the 'Governing the risks of AI itself' lesson",
  },
  items: [
    { vi: "Trường hợp sử dụng AI này đã được đưa vào sổ đăng ký rủi ro chưa?", en: "Has this AI use case been entered into the risk register?" },
    { vi: "Có kế hoạch giám sát 'model drift' theo thời gian không?", en: "Is there a plan to monitor 'model drift' over time?" },
    { vi: "Nếu dùng mô hình bên thứ ba, đã rà soát nguồn dữ liệu huấn luyện và trách nhiệm pháp lý chưa?", en: "If using a third-party model, has training data provenance and legal liability been reviewed?" },
    { vi: "Trường hợp sử dụng rủi ro cao đã được hội đồng quản trị AI phê duyệt chưa?", en: "Has a high-risk use case been approved by the AI governance committee?" },
  ],
};

export const allChecklists: ChecklistDef[] = [
  deploymentChecklist,
  aiHiringChecklist,
  aiGovernanceChecklist,
];
