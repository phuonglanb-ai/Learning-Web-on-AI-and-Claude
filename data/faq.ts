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
];
