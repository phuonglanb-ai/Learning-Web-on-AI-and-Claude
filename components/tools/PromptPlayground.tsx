"use client";

import { useState, FormEvent } from "react";
import { Wand2, Loader2, Info } from "lucide-react";
import { useLanguage } from "@/context/AppProviders";

interface PlanStep {
  vi: string;
  en: string;
}

const SCENARIOS: { keywords: string[]; plan: PlanStep[] }[] = [
  {
    keywords: ["rủi ro", "risk", "tuân thủ", "compliance"],
    plan: [
      { vi: "Khung vấn đề: xác định ai theo dõi rủi ro, dữ liệu nguồn nào, tần suất cập nhật.", en: "Frame: identify who tracks risk, which source data, how often it updates." },
      { vi: "Mô hình dữ liệu: Rủi ro, Mức xác suất, Mức ảnh hưởng, Đơn vị phụ trách, Hạn xử lý.", en: "Data model: Risk, Probability, Impact, Owner, Due date." },
      { vi: "Giao diện: bảng có thể lọc theo mức độ ưu tiên, đánh dấu màu theo mức rủi ro.", en: "Interface: a filterable table, color-coded by risk level." },
      { vi: "Kiểm thử: nhập 5-10 rủi ro mẫu, xác nhận sắp xếp và lọc đúng.", en: "Testing: enter 5-10 sample risks, confirm sorting and filtering work." },
    ],
  },
  {
    keywords: ["tuyển dụng", "ứng viên", "hiring", "candidate", "recruit"],
    plan: [
      { vi: "Khung vấn đề: HR cần theo dõi ứng viên qua các vòng tuyển dụng.", en: "Frame: HR needs to track candidates through hiring stages." },
      { vi: "Mô hình dữ liệu: Tên, Vị trí, Trạng thái (Mới/Phỏng vấn/Offer/Từ chối), Ngày cập nhật.", en: "Data model: Name, Position, Status (New/Interview/Offer/Rejected), Last updated." },
      { vi: "Ràng buộc bảo mật: lưu cục bộ hoặc trong hệ thống nội bộ, không gửi ra dịch vụ ngoài.", en: "Security constraint: store locally or in an internal system, never send to an external service." },
      { vi: "Giao diện: danh sách có thể lọc theo trạng thái và vị trí ứng tuyển.", en: "Interface: a list filterable by status and position." },
    ],
  },
  {
    keywords: ["báo cáo", "report", "esg", "dashboard"],
    plan: [
      { vi: "Khung vấn đề: xác định ai đọc báo cáo và họ cần thấy gì đầu tiên.", en: "Frame: identify who reads the report and what they need to see first." },
      { vi: "Nguồn dữ liệu: liệt kê các hệ thống/tệp cần tổng hợp và tần suất cập nhật.", en: "Data sources: list the systems/files to consolidate and how often they update." },
      { vi: "Bố cục: phần tóm tắt điều hành ở đầu, chi tiết ở dưới, biểu đồ minh hoạ xu hướng.", en: "Layout: executive summary at top, details below, charts illustrating trends." },
      { vi: "Kiểm thử: đối chiếu vài con số trên báo cáo với nguồn gốc để xác nhận chính xác.", en: "Testing: cross-check a few report figures against source data for accuracy." },
    ],
  },
];

const DEFAULT_PLAN: PlanStep[] = [
  { vi: "Khung vấn đề: ai sẽ dùng công cụ này, và \"thành công\" trông như thế nào?", en: "Frame: who will use this tool, and what does success look like?" },
  { vi: "Mô tả cụ thể: liệt kê dữ liệu đầu vào, định dạng đầu ra mong muốn, và các ràng buộc quan trọng.", en: "Describe concretely: list the input data, desired output format, and important constraints." },
  { vi: "Yêu cầu AI sinh bản nháp đầu tiên, sau đó chạy thử ngay để quan sát kết quả thật.", en: "Ask the AI for a first draft, then run it immediately to observe the real result." },
  { vi: "Phản hồi cụ thể cho từng điểm chưa đúng, kèm ví dụ mong muốn.", en: "Give specific feedback on each incorrect point, with an example of what you want." },
];

export function PromptPlayground() {
  const { t, locale } = useLanguage();
  const [request, setRequest] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<PlanStep[] | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!request.trim()) return;
    setLoading(true);
    setPlan(null);
    const normalized = request.toLowerCase();
    const match = SCENARIOS.find((s) => s.keywords.some((k) => normalized.includes(k)));
    // Simulated "thinking" delay so the workflow feels real; no network call is made.
    window.setTimeout(() => {
      setPlan(match ? match.plan : DEFAULT_PLAN);
      setLoading(false);
    }, 550);
  }

  const isVi = locale === "vi";

  return (
    <div className="rounded-xl2 border border-ink-200 bg-white p-6 shadow-card">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
          <Wand2 size={20} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-semibold text-ink-900">
            {isVi ? "Trình mô phỏng quy trình Vibe Coding" : "Vibe Coding Workflow Simulator"}
          </h3>
          <p className="text-sm text-ink-500">
            {isVi
              ? "Mô tả một công cụ bạn muốn xây dựng — công cụ sẽ minh hoạ cách chia nhỏ yêu cầu thành các bước làm việc với AI."
              : "Describe a tool you want to build — this shows how to break the request into steps for working with AI."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder={
            isVi
              ? "Ví dụ: một bảng theo dõi rủi ro tuân thủ cho đội quản trị rủi ro"
              : "e.g. a compliance risk tracker for the risk management team"
          }
          className="focus-ring flex-1 rounded-md border border-ink-200 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Wand2 size={16} />}
          {isVi ? "Tạo kế hoạch" : "Generate plan"}
        </button>
      </form>

      {plan && (
        <div className="mt-5 space-y-2 border-t border-ink-100 pt-4">
          {plan.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
                {idx + 1}
              </span>
              <p className="text-sm leading-relaxed text-ink-700">{isVi ? step.vi : step.en}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-start gap-2 rounded-md bg-ink-50 px-3 py-2 text-xs text-ink-500">
        <Info size={14} className="mt-0.5 shrink-0" />
        <p>
          {isVi
            ? "Đây là bản demo minh hoạ quy trình, không gọi API AI thật. Trong triển khai thật, bước này sẽ do Claude thực hiện dựa trên yêu cầu chi tiết của bạn."
            : "This is a workflow demo and does not call a real AI API. In a real deployment, this step would be performed by Claude based on your detailed request."}
        </p>
      </div>
    </div>
  );
}
