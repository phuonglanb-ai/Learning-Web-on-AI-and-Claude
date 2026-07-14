# AI Learning Hub — Vibe Coding & AI Automation cho Corporate Affairs

Nền tảng học tập tự động, song ngữ (Việt/Anh), về **Vibe Coding** (lập trình bằng ngôn ngữ tự
nhiên với AI) và **AI Automation** cho ba mảng nghiệp vụ: Corporate Affairs, HR/People
Experience, và Quản trị rủi ro doanh nghiệp.

Nội dung được tổng hợp từ Harvard Business Review, McKinsey, Deloitte, SHRM, các khung quản trị
rủi ro/AI phổ biến (COSO, NIST AI RMF), và tài liệu kỹ thuật chính thức về Claude — xem trang
**Tài nguyên** trong ứng dụng để biết chi tiết nguồn.

## Công nghệ

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- Không cần backend/database để chạy demo — trạng thái người dùng (ngôn ngữ, vai trò, tiến độ học,
  dữ liệu công cụ) lưu trong `localStorage` của trình duyệt
- `lucide-react` cho icon

## Chạy thử cục bộ

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

Các lệnh khác:

```bash
npm run build       # build production
npm run start        # chạy bản build production
npm run lint          # kiểm tra ESLint
npm run typecheck  # kiểm tra kiểu TypeScript
```

## Cấu trúc thư mục

```
app/                        # Next.js App Router
  page.tsx                  # Trang chủ
  modules/page.tsx           # Danh sách chuyên đề
  modules/[module]/page.tsx           # Chi tiết một chuyên đề (danh sách bài học)
  modules/[module]/[lesson]/page.tsx  # Nội dung một bài học
  tools/page.tsx              # Trang công cụ demo tương tác
  resources/page.tsx        # Trang tài nguyên tham khảo
  admin/page.tsx              # Bảng quản trị nội dung (yêu cầu vai trò Admin/Expert)
  layout.tsx, globals.css   # Layout gốc + style toàn cục

components/                 # Component UI dùng chung (Navbar, Footer, LessonListItem,
                             # ModuleCard, ChatbotWidget, icon-map...)
components/tools/           # Các công cụ demo: PromptPlayground, RiskMatrixTool, ChecklistTool

context/AppProviders.tsx    # React context: ngôn ngữ (VI/EN), vai trò (RBAC), tiến độ học

data/                       # "CMS" dạng file tĩnh — nguồn nội dung duy nhất
  modules.ts                # 4 chuyên đề x 4 bài học, đầy đủ nội dung song ngữ
  resources.ts               # Danh sách tài nguyên tham khảo
  faq.ts                     # Câu hỏi thường gặp cho chatbot demo
  tools.ts                   # Định nghĩa các checklist tái sử dụng
  dictionary.ts               # Chuỗi giao diện (UI strings) song ngữ

lib/                        # Kiểu dữ liệu dùng chung, hàm tiện ích, bảng màu theo chuyên đề
```

## Mở rộng nội dung

### Thêm một bài học vào chuyên đề có sẵn

Mở `data/modules.ts`, tìm module tương ứng, thêm một object `Lesson` mới vào mảng `lessons`.
Mỗi trường văn bản đều có dạng `{ vi: "...", en: "..." }` (hoặc mảng cho `body`/`keyTakeaways`).
Trang bài học và mục lục sẽ tự động cập nhật, không cần sửa code giao diện.

### Thêm một chuyên đề (module) mới

1. Thêm một object `Module` mới vào mảng `modules` trong `data/modules.ts`.
2. Chọn một icon có sẵn trong `components/icon-map.tsx` (hoặc thêm icon mới từ `lucide-react`
   vào `iconMap`).
3. Chọn một màu trong `lib/colors.ts` (`brand`, `accent`, `amber`, `rose`) hoặc thêm màu mới theo
   đúng mẫu class Tailwind tĩnh (không dùng chuỗi màu động, để Tailwind không purge nhầm class).

Trang chủ, trang danh sách chuyên đề, và điều hướng đều đọc trực tiếp từ `data/modules.ts` nên sẽ
tự nhận diện chuyên đề mới.

### Thêm một công cụ demo mới

Tạo component mới trong `components/tools/`, sau đó import và render trong `app/tools/page.tsx`.
`ChecklistTool` là ví dụ về component tái sử dụng được — chỉ cần thêm một `ChecklistDef` mới vào
`data/tools.ts` để có thêm một checklist mà không cần viết component mới.

### Tích hợp chatbot AI thật (thay vì FAQ cục bộ)

`components/ChatbotWidget.tsx` hiện dùng hàm `answerFor()` để so khớp từ khoá với `data/faq.ts` —
đây là bản demo chạy hoàn toàn phía trình duyệt, không gọi API nào. Để nâng cấp thành trợ lý AI
thật, thay `answerFor()` bằng một lệnh gọi API tới Claude (qua route API riêng trên server để giữ
kín API key), truyền theo lịch sử hội thoại và (tuỳ chọn) nội dung `data/modules.ts` làm ngữ cảnh
(kỹ thuật Retrieval-Augmented Generation — xem bài học "Tự động hoá quy trình HR vận hành").

### Kết nối hệ thống phân quyền thật

`context/AppProviders.tsx` hiện mô phỏng vai trò (`admin`/`expert`/`learner`) bằng một bộ chọn ở
Navbar, lưu trong `localStorage` — không có xác thực thật. Khi triển khai thật, thay `RoleContext`
bằng dữ liệu phiên đăng nhập thật (NextAuth, SSO nội bộ, v.v.) và chuyển nội dung ở `app/admin`
sang đọc/ghi qua API thay vì `localStorage`.

## Giới hạn của bản demo

- Không có backend/database thật — mọi trạng thái người dùng chỉ lưu cục bộ trong trình duyệt của
  từng người, không đồng bộ giữa các thiết bị hay người dùng.
- Chatbot và "Trình mô phỏng quy trình Vibe Coding" dùng logic so khớp từ khoá cố định, không gọi
  API AI thật — được thiết kế để minh hoạ khái niệm, không phải sản phẩm hoàn chỉnh.
- Bảng quản trị nội dung (`/admin`) minh hoạ luồng RBAC nhưng chưa có xác thực thật; đừng dùng
  trực tiếp trong môi trường sản xuất mà không bổ sung lớp xác thực/uỷ quyền phía server.
