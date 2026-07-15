import { Module } from "@/lib/types";

export const modules: Module[] = [
  // ============================= MODULE 1: VIBE CODING =============================
  {
    slug: "vibe-coding",
    icon: "Sparkles",
    color: "brand",
    title: { vi: "Vibe Coding với AI", en: "Vibe Coding with AI" },
    description: {
      vi: "Lập trình bằng ngôn ngữ tự nhiên: cách làm việc với Claude và các trợ lý AI để biến ý tưởng thành sản phẩm phần mềm thật, kể cả khi bạn không phải dân kỹ thuật.",
      en: "Programming in natural language: how to work with Claude and AI coding assistants to turn ideas into real software, even if you are not a professional engineer.",
    },
    lessons: [
      {
        slug: "vibe-coding-la-gi",
        title: { vi: "Vibe coding là gì và vì sao nó đang thay đổi cách làm phần mềm", en: "What is vibe coding, and why it is changing how software gets built" },
        summary: {
          vi: "Khái niệm vibe coding, sự khác biệt so với lập trình truyền thống, và lý do các bộ phận nghiệp vụ (không chỉ IT) nên quan tâm.",
          en: "The concept of vibe coding, how it differs from traditional programming, and why business functions — not just IT — should care.",
        },
        durationMin: 12,
        level: "co-ban",
        body: {
          vi: [
            "\"Vibe coding\" là thuật ngữ do nhà nghiên cứu AI Andrej Karpathy phổ biến vào năm 2025, mô tả cách làm phần mềm mới: thay vì gõ từng dòng code, người dùng mô tả bằng ngôn ngữ tự nhiên điều họ muốn xây dựng, và một trợ lý AI (như Claude) sinh ra, chỉnh sửa và kiểm thử code dựa trên mô tả đó. Người dùng tập trung vào \"ý định\" và đánh giá kết quả, thay vì viết cú pháp.",
            "Điểm khác biệt cốt lõi so với lập trình truyền thống: kỹ năng quan trọng nhất không còn là thuộc lòng cú pháp ngôn ngữ lập trình, mà là khả năng tư duy hệ thống — chia nhỏ vấn đề, mô tả yêu cầu rõ ràng, đọc hiểu và đánh giá kết quả AI tạo ra, và biết khi nào cần can thiệp thủ công.",
            "Với các bộ phận Corporate Affairs, HR hay Quản trị rủi ro, vibe coding mở ra khả năng tự xây dựng công cụ nội bộ (dashboard theo dõi rủi ro, công cụ tổng hợp phản hồi nhân viên, trình tạo báo cáo tự động...) mà trước đây phải chờ đội IT hoặc thuê ngoài, rút ngắn thời gian từ ý tưởng đến sản phẩm dùng thử từ hàng tuần xuống còn hàng giờ.",
            "Tuy nhiên, vibe coding không có nghĩa là bỏ qua tư duy kỹ thuật. Các chuyên gia vẫn cần hiểu nguyên lý cơ bản (dữ liệu được lưu ở đâu, bảo mật hoạt động thế nào, vì sao cần kiểm thử) để giám sát AI hiệu quả — vai trò của con người chuyển từ \"người viết code\" sang \"người ra quyết định và kiểm soát chất lượng\".",
          ],
          en: [
            "\"Vibe coding\" is a term popularized by AI researcher Andrej Karpathy in 2025 to describe a new way of building software: instead of typing code line by line, users describe in natural language what they want to build, and an AI assistant (like Claude) generates, edits, and tests the code based on that description. The user focuses on intent and evaluates the output, rather than writing syntax.",
            "The core difference from traditional programming: the most important skill is no longer memorizing programming language syntax, but systems thinking — breaking a problem into parts, describing requirements clearly, reading and judging AI-generated output, and knowing when to step in manually.",
            "For Corporate Affairs, HR, or Risk Management teams, vibe coding opens the door to building internal tools (a risk-tracking dashboard, an employee-feedback synthesizer, an automated report generator...) that previously required IT or an outside vendor — shrinking the time from idea to working prototype from weeks to hours.",
            "Vibe coding does not mean skipping technical thinking altogether. Practitioners still need to understand fundamentals (where data is stored, how security works, why testing matters) to supervise the AI effectively — the human role shifts from \"code writer\" to \"decision-maker and quality controller\".",
          ],
        },
        examples: [
          {
            title: { vi: "Ví dụ: từ mô tả đến công cụ chạy được", en: "Example: from description to a working tool" },
            body: {
              vi: [
                "Yêu cầu bằng lời: \"Tạo cho tôi một trang web đơn giản để nhân viên gửi câu hỏi ẩn danh cho ban lãnh đạo, có danh sách câu hỏi và trạng thái đã trả lời/chưa trả lời.\"",
                "Claude sẽ đề xuất cấu trúc (form nhập liệu, danh sách, lưu trữ dữ liệu), sinh code, và giải thích các lựa chọn kỹ thuật bằng ngôn ngữ thường.",
                "Người dùng phản hồi để tinh chỉnh: \"Thêm bộ lọc theo phòng ban\", \"Ẩn câu hỏi có ngôn từ không phù hợp\" — AI cập nhật ngay lập tức.",
              ],
              en: [
                "Spoken request: \"Build me a simple site where employees can submit anonymous questions to leadership, with a list showing answered/unanswered status.\"",
                "Claude proposes a structure (input form, list view, data storage), generates the code, and explains the technical choices in plain language.",
                "The user refines with feedback: \"Add a filter by department\", \"Hide questions with inappropriate language\" — the AI updates immediately.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Vibe coding chuyển trọng tâm từ viết cú pháp sang mô tả ý định và đánh giá kết quả.",
            "Phù hợp để tạo nhanh công cụ nội bộ, bản demo, tự động hoá tác vụ lặp lại.",
            "Con người vẫn phải hiểu đủ để kiểm soát chất lượng, bảo mật và rủi ro.",
          ],
          en: [
            "Vibe coding shifts the focus from writing syntax to describing intent and judging output.",
            "Well suited for rapidly building internal tools, prototypes, and automating repetitive tasks.",
            "Humans must still understand enough to control quality, security, and risk.",
          ],
        },
        videoId: "LQusVP1-1UU",
      },
      {
        slug: "quy-trinh-lam-viec-voi-claude",
        title: { vi: "Quy trình làm việc với Claude: từ ý tưởng đến sản phẩm", en: "Working with Claude: from idea to shipped product" },
        summary: {
          vi: "Quy trình lặp gồm 5 bước để biến một ý tưởng nghiệp vụ thành công cụ hoạt động được, dùng Claude hoặc Claude Code.",
          en: "A 5-step iterative workflow for turning a business idea into a working tool, using Claude or Claude Code.",
        },
        durationMin: 15,
        level: "co-ban",
        body: {
          vi: [
            "Bước 1 — Khung vấn đề (Frame): Xác định rõ \"ai dùng, để làm gì, kết quả thành công trông như thế nào\". Một khung vấn đề tốt giúp AI hiểu ngữ cảnh và tránh việc phải sửa đi sửa lại nhiều lần.",
            "Bước 2 — Mô tả & sinh (Describe & Generate): Diễn đạt yêu cầu bằng ngôn ngữ tự nhiên, càng cụ thể càng tốt (dữ liệu đầu vào, định dạng đầu ra, ràng buộc). Claude Code có thể đọc trực tiếp mã nguồn hiện có, chạy lệnh, và tạo nhiều tệp cùng lúc trong một dự án thật.",
            "Bước 3 — Chạy thử & quan sát (Run & Observe): Luôn chạy thử kết quả thay vì chỉ đọc code. Với ứng dụng web, hãy mở trình duyệt và thao tác thật; với dữ liệu, kiểm tra vài dòng kết quả cụ thể.",
            "Bước 4 — Phản hồi có định hướng (Steer): Thay vì nói chung chung \"chưa đúng\", hãy chỉ rõ điều gì sai và kết quả mong muốn là gì. Claude học tốt nhất từ phản hồi cụ thể, có ví dụ.",
            "Bước 5 — Chốt & ghi lại (Lock in & Document): Khi đã ưng ý, yêu cầu AI tóm tắt logic đã xây dựng, viết hướng dẫn sử dụng ngắn, và lưu lại để người khác trong nhóm có thể tiếp tục phát triển.",
            "Vòng lặp 5 bước này thường chạy nhiều lần trong một phiên làm việc — điểm mạnh của vibe coding là chi phí thử lại gần như bằng không, nên đừng ngại thử nhiều phương án trước khi chốt.",
          ],
          en: [
            "Step 1 — Frame: Clarify who will use it, for what purpose, and what success looks like. A well-framed problem helps the AI understand context and avoids repeated rework.",
            "Step 2 — Describe & Generate: State the requirement in natural language, as specifically as possible (input data, output format, constraints). Claude Code can read existing source code directly, run commands, and create multiple files at once inside a real project.",
            "Step 3 — Run & Observe: Always run the result instead of just reading the code. For a web app, open a browser and actually interact with it; for data work, inspect a handful of concrete output rows.",
            "Step 4 — Steer: Instead of a vague \"this isn't right\", point to exactly what is wrong and what the desired outcome looks like. Claude learns best from specific, example-based feedback.",
            "Step 5 — Lock in & Document: Once satisfied, ask the AI to summarize the logic it built, write a short usage guide, and save it so teammates can continue development.",
            "This 5-step loop typically runs many times within a single working session — the strength of vibe coding is that the cost of trying again is nearly zero, so don't hesitate to explore several approaches before settling on one.",
          ],
        },
        examples: [
          {
            title: { vi: "Ví dụ áp dụng: Trình theo dõi rủi ro tuân thủ", en: "Applied example: a compliance risk tracker" },
            body: {
              vi: [
                "Khung vấn đề: \"Đội Quản trị rủi ro cần một bảng theo dõi các mục hành động sau kiểm toán nội bộ, có mức độ ưu tiên và hạn xử lý.\"",
                "Mô tả & sinh: \"Tạo bảng gồm các cột: Mục hành động, Đơn vị phụ trách, Mức rủi ro (Cao/Trung bình/Thấp), Hạn xử lý, Trạng thái. Cho phép lọc theo mức rủi ro.\"",
                "Chạy thử: nhập vài dòng dữ liệu mẫu, kiểm tra bộ lọc hoạt động đúng.",
                "Định hướng: \"Mức rủi ro Cao cần hiện màu đỏ nổi bật, và tự sắp xếp lên đầu danh sách.\"",
              ],
              en: [
                "Frame: \"The Risk team needs a tracker for post-internal-audit action items, with priority level and due date.\"",
                "Describe & generate: \"Create a table with columns: Action Item, Owner, Risk Level (High/Medium/Low), Due Date, Status. Allow filtering by risk level.\"",
                "Run & observe: enter a few sample rows, verify the filter works correctly.",
                "Steer: \"High risk items should be highlighted in red and automatically sorted to the top.\"",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Khung vấn đề rõ ràng ngay từ đầu tiết kiệm nhiều vòng chỉnh sửa.",
            "Luôn chạy thử thật, không chỉ đọc code AI sinh ra.",
            "Phản hồi cụ thể, có ví dụ giúp AI sửa đúng hướng nhanh hơn.",
          ],
          en: [
            "A clear upfront frame saves many rounds of rework.",
            "Always actually run the result — don't just read the AI-generated code.",
            "Specific, example-based feedback helps the AI correct course faster.",
          ],
        },
        videoId: "AJpK3YTTKZ4",
      },
      {
        slug: "prompt-hieu-qua-cho-code",
        title: { vi: "Viết yêu cầu hiệu quả cho AI khi lập trình", en: "Writing effective prompts for AI coding" },
        summary: {
          vi: "Các nguyên tắc thực dụng để mô tả yêu cầu kỹ thuật rõ ràng, giảm số lần AI hiểu sai ý.",
          en: "Practical principles for describing technical requirements clearly, reducing the number of times the AI misunderstands you.",
        },
        durationMin: 14,
        level: "trung-cap",
        body: {
          vi: [
            "Cụ thể hoá ngữ cảnh: nêu rõ công nghệ/nền tảng đang dùng (ví dụ \"trang tính Google Sheets\", \"ứng dụng web nội bộ\"), đối tượng người dùng cuối, và ràng buộc (ví dụ \"không được lưu dữ liệu cá nhân ra ngoài hệ thống công ty\").",
            "Đưa ví dụ đầu vào/đầu ra cụ thể thay vì mô tả trừu tượng. Ví dụ, thay vì \"phân loại phản hồi khách hàng\", hãy đưa 3-5 câu phản hồi mẫu và nhãn phân loại mong muốn.",
            "Chia nhỏ yêu cầu lớn thành các bước tuần tự. Một yêu cầu \"xây dựng toàn bộ hệ thống quản lý rủi ro\" sẽ mơ hồ hơn nhiều so với việc chia thành: (1) mô hình dữ liệu, (2) giao diện nhập liệu, (3) báo cáo tổng hợp.",
            "Yêu cầu AI giải thích trước khi thực thi các thay đổi lớn hoặc không thể hoàn tác (ví dụ xoá dữ liệu, thay đổi cấu trúc file), để có cơ hội xem xét trước.",
            "Tận dụng vai trò chuyên gia: yêu cầu Claude đóng vai một kiến trúc sư phần mềm hoặc chuyên gia bảo mật khi cần đánh giá phản biện, thay vì chỉ sinh code theo yêu cầu.",
          ],
          en: [
            "Make context concrete: state the technology/platform in use (e.g. \"Google Sheets\", \"internal web app\"), the end users, and constraints (e.g. \"must not store personal data outside the company system\").",
            "Give concrete input/output examples instead of abstract descriptions. Instead of \"classify customer feedback\", provide 3-5 sample feedback lines and the desired labels.",
            "Break large requests into sequential steps. \"Build an entire risk management system\" is far more ambiguous than splitting it into: (1) data model, (2) input interface, (3) summary reporting.",
            "Ask the AI to explain before executing large or irreversible changes (e.g. deleting data, restructuring files), so you get a chance to review first.",
            "Use expert framing: ask Claude to act as a software architect or security expert when you need critical evaluation, rather than only generating code on request.",
          ],
        },
        examples: [
          {
            title: { vi: "So sánh prompt yếu và prompt tốt", en: "Weak prompt vs. strong prompt" },
            body: {
              vi: [
                "Yếu: \"Làm cho tôi công cụ quản lý nhân sự.\"",
                "Tốt: \"Tạo một trang nội bộ để quản lý hồ sơ ứng viên tuyển dụng, gồm: tên, vị trí ứng tuyển, trạng thái (Mới/Phỏng vấn/Offer/Từ chối), ngày cập nhật. Dữ liệu lưu cục bộ trong trình duyệt (localStorage), không gửi ra máy chủ ngoài vì lý do bảo mật dữ liệu ứng viên.\"",
              ],
              en: [
                "Weak: \"Build me an HR management tool.\"",
                "Strong: \"Create an internal page to manage recruitment candidate records, including: name, position applied for, status (New/Interview/Offer/Rejected), last-updated date. Data should be stored locally in the browser (localStorage), not sent to any external server, for candidate data privacy reasons.\"",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Ngữ cảnh + ví dụ cụ thể là hai yếu tố cải thiện chất lượng prompt nhiều nhất.",
            "Chia nhỏ yêu cầu phức tạp giúp kiểm soát chất lượng từng phần.",
            "Luôn yêu cầu giải thích trước các thay đổi rủi ro cao.",
          ],
          en: [
            "Context plus concrete examples are the two factors that improve prompt quality the most.",
            "Breaking complex requests into parts helps control quality at each stage.",
            "Always ask for an explanation before high-risk changes.",
          ],
        },
      },
      {
        slug: "rui-ro-va-thuc-hanh-an-toan",
        title: { vi: "Rủi ro, giới hạn và thực hành an toàn khi vibe coding trong doanh nghiệp", en: "Risks, limits, and safe practices for vibe coding in the enterprise" },
        summary: {
          vi: "Những rủi ro thực tế (bảo mật, dữ liệu, chất lượng) khi dùng AI để viết công cụ nội bộ, và cách phòng ngừa.",
          en: "Real risks (security, data, quality) when using AI to build internal tools, and how to guard against them.",
        },
        durationMin: 13,
        level: "trung-cap",
        body: {
          vi: [
            "Rủi ro dữ liệu nhạy cảm: không dán thông tin cá nhân nhân viên/khách hàng, dữ liệu tài chính chưa công bố, hay bí mật kinh doanh vào các công cụ AI công cộng không có cam kết bảo mật doanh nghiệp. Ưu tiên dùng nền tảng có kiểm soát dữ liệu (ví dụ tài khoản doanh nghiệp của Claude) và dữ liệu giả lập khi thử nghiệm.",
            "Rủi ro \"ảo giác\" (hallucination): AI có thể tạo ra code chạy được nhưng logic sai, hoặc trích dẫn nguồn/số liệu không có thật. Luôn kiểm chứng các con số, chính sách, hoặc quy định pháp lý quan trọng bằng nguồn chính thức trước khi đưa vào sản phẩm cuối.",
            "Rủi ro bảo mật ứng dụng: công cụ do người không chuyên tạo ra dễ bỏ sót các lỗ hổng cơ bản (xác thực người dùng yếu, lộ dữ liệu qua đường dẫn công khai). Với bất kỳ công cụ nào xử lý dữ liệu thật hoặc được chia sẻ ngoài nhóm nhỏ, nên có review từ đội bảo mật/IT trước khi triển khai rộng.",
            "Rủi ro \"shadow IT\": công cụ tự chế phát triển ngoài quy trình quản trị CNTT chính thức có thể tạo ra các đảo dữ liệu (data silo), khó bảo trì, hoặc vi phạm chính sách nội bộ. Cần có kênh chính thức để đăng ký, đánh giá và (nếu phù hợp) đưa các công cụ tự chế vào hệ thống quản lý chính thức.",
            "Thực hành khuyến nghị: bắt đầu với dữ liệu giả lập, giới hạn phạm vi (một phòng ban, một quy trình), xin phê duyệt trước khi mở rộng, và luôn có người chịu trách nhiệm rà soát kết quả đầu ra của AI — nguyên tắc \"con người luôn trong vòng lặp\" (human-in-the-loop).",
          ],
          en: [
            "Sensitive data risk: never paste employee/customer personal data, undisclosed financial data, or trade secrets into public AI tools without an enterprise data commitment. Prefer platforms with data controls (e.g. an enterprise Claude account) and use synthetic data while prototyping.",
            "Hallucination risk: AI can produce code that runs but has flawed logic, or cite sources/figures that don't actually exist. Always verify important numbers, policies, or legal requirements against an authoritative source before shipping.",
            "Application security risk: tools built by non-specialists can easily miss basic vulnerabilities (weak authentication, data exposed via a public link). Any tool handling real data or shared beyond a small team should get a security/IT review before wider rollout.",
            "\"Shadow IT\" risk: homegrown tools built outside formal IT governance can create data silos, become hard to maintain, or violate internal policy. Establish a formal channel to register, assess, and — where appropriate — bring homegrown tools into official systems management.",
            "Recommended practice: start with synthetic data, limit scope (one department, one process), get approval before scaling, and always keep a human accountable for reviewing AI output — the \"human-in-the-loop\" principle.",
          ],
        },
        examples: [
          {
            title: { vi: "Danh sách kiểm tra trước khi triển khai", en: "Pre-deployment checklist" },
            body: {
              vi: [
                "☐ Dữ liệu thật hay dữ liệu giả lập? Nếu là dữ liệu thật, đã được phân loại mức độ nhạy cảm chưa?",
                "☐ Ai chịu trách nhiệm rà soát và duyệt kết quả AI tạo ra trước khi dùng chính thức?",
                "☐ Công cụ có được đội IT/bảo mật biết đến và (nếu cần) rà soát chưa?",
                "☐ Có kế hoạch nếu công cụ ngừng hoạt động hoặc cho kết quả sai không?",
              ],
              en: [
                "☐ Real or synthetic data? If real, has it been classified for sensitivity?",
                "☐ Who is accountable for reviewing and approving AI-generated output before official use?",
                "☐ Is IT/security aware of the tool and has it been reviewed if needed?",
                "☐ Is there a fallback plan if the tool fails or produces incorrect output?",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Không đưa dữ liệu nhạy cảm thật vào AI khi chưa có kiểm soát bảo mật phù hợp.",
            "Luôn kiểm chứng số liệu và logic quan trọng do AI tạo ra.",
            "Duy trì nguyên tắc con người luôn giám sát và chịu trách nhiệm cuối cùng.",
          ],
          en: [
            "Do not feed real sensitive data into AI without appropriate security controls.",
            "Always verify important AI-generated figures and logic.",
            "Maintain the principle that a human always supervises and holds final accountability.",
          ],
        },
      },
      {
        slug: "tu-cong-cu-den-chuong-trinh-automation",
        title: {
          vi: "Từ một công cụ nhỏ đến chương trình AI automation có quản trị",
          en: "From a single small tool to a governed AI automation program",
        },
        summary: {
          vi: "Khi một ý tưởng vibe coding cần mở rộng thành sáng kiến automation cấp phòng ban/doanh nghiệp: quy trình 10 bước và những phần chuyên gia nghiệp vụ không được giao hết cho AI.",
          en: "When a vibe-coding idea needs to grow into a department- or enterprise-level automation initiative: a 10-step process, and the parts a domain expert must never fully hand off to AI.",
        },
        durationMin: 16,
        level: "nang-cao",
        body: {
          vi: [
            "Vòng lặp 5 bước ở bài \"Quy trình làm việc với Claude\" phù hợp để tạo nhanh một công cụ đơn lẻ. Nhưng khi một công cụ chứng minh được giá trị và cần nhân rộng cho nhiều phòng ban, hoặc xử lý dữ liệu/quyết định có rủi ro cao hơn, cần một phương pháp có cấu trúc hơn — kết hợp tư duy quy trình nghiệp vụ, thiết kế AI, và quản trị rủi ro thay vì chỉ lặp \"mô tả — chạy thử — chỉnh sửa\".",
            "Các tổ chức đào tạo automation chuyên nghiệp (như UiPath Academy) mô tả một dự án automation trưởng thành đi qua đủ vòng đời: kick-off, đánh giá quy trình hiện tại, thiết kế giải pháp, phát triển, kiểm thử, UAT (User Acceptance Testing), triển khai, hypercare (giai đoạn hỗ trợ sát sao sau go-live), và đóng dự án. Điểm mấu chốt: người sở hữu quy trình nghiệp vụ (process owner) phải tham gia từ giai đoạn phân tích, không phải chỉ nhận bàn giao sản phẩm cuối.",
            "Trước khi nghĩ đến việc AI có thể làm gì, cần chuẩn hoá chính quy trình đang tồn tại — nhiều bộ phận hỗ trợ (Corporate Affairs, HR, Pháp chế, Rủi ro) mô tả công việc bằng danh sách đầu việc hoặc tên báo cáo, chứ chưa mô tả thành quy trình đầu-cuối. Ví dụ, \"theo dõi tin tức\" thực chất có thể được phân rã thành: xác định nhu cầu thông tin → thu thập → làm sạch → phân loại → đánh giá mức độ liên quan/tác động → xác minh → tổng hợp → escalation → phân phối → tiếp nhận phản hồi. Chỉ sau khi phân rã như vậy mới biết bước nào có thể tự động hoá bằng rule, bước nào cần AI hỗ trợ, và bước nào bắt buộc phải có chuyên gia quyết định.",
            "Một khung tư duy hệ thống (như của Alan Turing Institute) nhấn mạnh: AI không phải một công cụ kỹ thuật biệt lập, mà là một hệ thống sociotechnical gồm con người, dữ liệu, quy trình, thể chế và quyền lực. Vì vậy, ngay từ khi thiết kế cần trả lời: Ai định nghĩa \"kết quả tốt\"? Ai cung cấp dữ liệu? Ai có thể bị ảnh hưởng hoặc bị loại khỏi hệ thống? Khi AI sai, ai chịu trách nhiệm? Đây chính là các câu hỏi mà tài liệu automation thuần kỹ thuật thường bỏ qua, và là lý do các khung quản trị rủi ro AI (xem module Quản trị rủi ro doanh nghiệp) cần được tích hợp ngay từ đầu, không phải bổ sung sau khi hệ thống đã vận hành.",
          ],
          en: [
            "The 5-step loop from \"Working with Claude\" is well suited to quickly building a single tool. But once a tool proves its value and needs to scale across departments, or touches higher-risk data or decisions, it needs a more structured approach — combining business-process thinking, AI design, and risk governance, rather than just repeating \"describe — run — refine\".",
            "Professional automation training organizations (like UiPath Academy) describe a mature automation project moving through a full lifecycle: kick-off, current-process assessment, solution design, development, testing, UAT (User Acceptance Testing), deployment, hypercare (close post-launch support), and project closure. The key point: the business process owner must be involved from the analysis stage, not just receive the finished product.",
            "Before asking what AI can do, standardize the process that already exists — many support functions (Corporate Affairs, HR, Legal, Risk) describe their work as task lists or report names, not as an end-to-end process. For example, \"news monitoring\" can actually be decomposed into: identify information needs → collect → clean → classify → assess relevance/impact → verify → synthesize → escalate → distribute → receive feedback. Only after this decomposition can you tell which steps can be rule-automated, which need AI assistance, and which must remain an expert decision.",
            "A systems-thinking framework (such as the Alan Turing Institute's) stresses that AI is not an isolated technical tool but a sociotechnical system involving people, data, process, institutions, and power. So the design stage itself must answer: Who defines a \"good outcome\"? Who supplies the data? Who could be affected or excluded by the system? When AI gets it wrong, who is accountable? These are exactly the questions purely technical automation material tends to skip — and why AI risk governance frameworks (see the Enterprise Risk Management module) need to be built in from day one, not bolted on after the system is already running.",
          ],
        },
        examples: [
          {
            title: {
              vi: "Quy trình 10 bước cho một sáng kiến AI automation khối hỗ trợ",
              en: "A 10-step process for a support-function AI automation initiative",
            },
            body: {
              vi: [
                "1–2. Xác định outcome mong muốn và ranh giới hệ thống (quy trình bắt đầu/kết thúc ở đâu, ai là stakeholder).",
                "3–4. Lập bản đồ quy trình hiện tại và phân rã \"knowledge work\" thành thu thập, phân loại, phân tích, phán đoán, quyết định.",
                "5–6. Chọn mức can thiệp AI phù hợp (automation theo rule, AI hỗ trợ, hay AI agent), rồi đánh giá tính khả thi về dữ liệu và rủi ro.",
                "7–8. Thiết kế workflow đích (con người và AI phối hợp ở đâu, ai phê duyệt) rồi làm prototype và đánh giá bằng bộ ca kiểm thử.",
                "9–10. Pilot có UAT và hypercare, sau đó theo dõi liên tục và mở rộng dần khi đã ổn định.",
              ],
              en: [
                "1–2. Define the desired outcome and the system boundary (where the process starts/ends, who the stakeholders are).",
                "3–4. Map the current process and decompose the \"knowledge work\" into collection, classification, analysis, judgment, and decision-making.",
                "5–6. Choose the right level of AI intervention (rule-based automation, AI assistance, or an AI agent), then assess data and risk feasibility.",
                "7–8. Design the target workflow (where humans and AI collaborate, who approves) then build a prototype and evaluate it against a test-case set.",
                "9–10. Pilot with UAT and hypercare, then monitor continuously and scale gradually once stable.",
              ],
            },
          },
          {
            title: {
              vi: "7 điều chuyên gia nghiệp vụ phải đồng sở hữu, không giao hết cho AI",
              en: "7 things a domain expert must co-own, never fully hand off to AI",
            },
            body: {
              vi: [
                "Định nghĩa vấn đề (thế nào mới là đúng vấn đề cần giải quyết).",
                "Hệ thống thuật ngữ và phân loại (domain taxonomy) của lĩnh vực.",
                "Logic ra quyết định và logic xử lý ngoại lệ.",
                "Bộ dữ liệu đánh giá gồm cả ca đúng, sai, khó và nhạy cảm.",
                "Ngưỡng chấp nhận sai số, và trường hợp nào AI chỉ được đề xuất chứ không được tự quyết định.",
              ],
              en: [
                "Problem definition (what actually counts as the right problem to solve).",
                "The domain's taxonomy and classification system.",
                "Decision logic and exception-handling logic.",
                "An evaluation dataset covering correct, incorrect, hard, and sensitive cases.",
                "Acceptable error thresholds, and which cases AI may only propose rather than decide on its own.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Mở rộng từ một công cụ vibe coding sang một sáng kiến automation cấp phòng ban cần thêm quản trị vòng đời, không chỉ thêm tính năng.",
            "Chuẩn hoá quy trình hiện tại trước khi tự động hoá — nếu không, AI sẽ chỉ tăng tốc một quy trình vốn đã rối.",
            "Chuyên gia nghiệp vụ luôn phải giữ quyền quyết định ở các điểm rủi ro cao, không giao trọn cho công nghệ.",
          ],
          en: [
            "Scaling from a vibe-coding tool to a department-level automation initiative requires added lifecycle governance, not just more features.",
            "Standardize the existing process before automating it — otherwise AI just speeds up a process that was already messy.",
            "Domain experts must always retain decision authority at high-risk points, never fully outsourcing it to the technology.",
          ],
        },
      },
    ],
  },

  // ============================= MODULE 2: CORPORATE AFFAIRS =============================
  {
    slug: "corporate-affairs",
    icon: "Building2",
    color: "accent",
    title: { vi: "AI Automation cho Corporate Affairs", en: "AI Automation for Corporate Affairs" },
    description: {
      vi: "Ứng dụng AI trong truyền thông doanh nghiệp, quan hệ công chúng, quan hệ với các bên liên quan, và báo cáo ESG.",
      en: "Applying AI to corporate communications, public relations, stakeholder relations, and ESG reporting.",
    },
    lessons: [
      {
        slug: "tong-quan-ai-corporate-affairs",
        title: { vi: "Tổng quan AI trong Corporate Affairs", en: "Overview of AI in Corporate Affairs" },
        summary: {
          vi: "Bức tranh tổng thể: những mảng việc nào trong Corporate Affairs đang được AI hỗ trợ nhiều nhất, theo các khảo sát ngành gần đây.",
          en: "The big picture: which Corporate Affairs workstreams are benefiting most from AI, per recent industry surveys.",
        },
        durationMin: 12,
        level: "co-ban",
        body: {
          vi: [
            "Các khảo sát ngành truyền thông doanh nghiệp gần đây (bao gồm các báo cáo thường niên của giới học thuật quan hệ công chúng và các hãng tư vấn lớn) cho thấy AI đang được ứng dụng nhiều nhất ở ba nhóm việc: soạn thảo nội dung nháp (thông cáo báo chí, bài phát biểu, tài liệu nội bộ), phân tích và tổng hợp thông tin (theo dõi truyền thông, tóm tắt tin tức), và hỗ trợ ra quyết định (phân tích kịch bản khủng hoảng, dự báo phản ứng dư luận).",
            "Theo phân tích của McKinsey về AI tạo sinh trong doanh nghiệp, giá trị lớn nhất thường đến từ việc tự động hoá các tác vụ \"tri thức lặp lại\" — những việc cần chuyên môn nhưng có khuôn mẫu rõ ràng, ví dụ tổng hợp bản tin hàng ngày hay soạn báo cáo định kỳ cho ban lãnh đạo — hơn là thay thế hoàn toàn công việc sáng tạo chiến lược.",
            "Deloitte và các nghiên cứu về chuyển đổi số trong truyền thông doanh nghiệp nhấn mạnh vai trò ngày càng lớn của đội Corporate Affairs như một \"người phiên dịch\" giữa dữ liệu do AI phân tích và ý nghĩa chiến lược cho ban lãnh đạo — AI cung cấp tín hiệu, con người diễn giải bối cảnh và quyết định hành động.",
            "Rủi ro danh tiếng gắn liền với AI cũng là chủ đề được nhắc đến ngày càng nhiều: nội dung do AI tạo ra thiếu kiểm chứng có thể lan truyền sai lệch nhanh hơn bao giờ hết, nên vai trò kiểm soát chất lượng và \"giọng nói thương hiệu\" (brand voice) của con người trở nên quan trọng hơn, không kém đi.",
          ],
          en: [
            "Recent corporate communications industry surveys (including annual reports from PR academia and major consultancies) show AI being applied most in three areas: drafting content (press releases, speeches, internal materials), analyzing and synthesizing information (media monitoring, news summarization), and decision support (crisis scenario analysis, sentiment forecasting).",
            "McKinsey's analysis of generative AI in the enterprise finds that the biggest value usually comes from automating \"repetitive knowledge work\" — tasks that require expertise but follow a clear pattern, such as compiling a daily news digest or drafting a recurring leadership report — rather than replacing strategic creative work entirely.",
            "Deloitte and other digital-transformation studies in corporate communications highlight the growing role of the Corporate Affairs team as a \"translator\" between AI-analyzed data and strategic meaning for leadership — AI supplies signals, humans interpret context and decide on action.",
            "Reputational risk tied to AI is an increasingly common theme: unverified AI-generated content can spread misinformation faster than ever, making human quality control and brand-voice stewardship more important, not less.",
          ],
        },
        examples: [
          {
            title: { vi: "Bản đồ ứng dụng theo mức độ trưởng thành", en: "Application map by maturity level" },
            body: {
              vi: [
                "Mức 1 (đã phổ biến): tóm tắt tin tức, soạn nháp thông cáo báo chí, dịch thuật đa ngôn ngữ.",
                "Mức 2 (đang phát triển): phân tích cảm xúc dư luận theo thời gian thực, mô phỏng kịch bản khủng hoảng truyền thông.",
                "Mức 3 (mới nổi): trợ lý AI tham gia soạn chiến lược truyền thông dựa trên dữ liệu lịch sử của tổ chức.",
              ],
              en: [
                "Level 1 (mainstream): news summarization, press release drafting, multilingual translation.",
                "Level 2 (growing): real-time public sentiment analysis, crisis communication scenario simulation.",
                "Level 3 (emerging): AI assistants co-drafting communications strategy based on the organization's historical data.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "AI mang lại giá trị lớn nhất ở các tác vụ tri thức lặp lại, không phải chiến lược thuần tuý.",
            "Vai trò con người chuyển sang diễn giải bối cảnh và kiểm soát chất lượng/giọng nói thương hiệu.",
            "Rủi ro lan truyền thông tin sai lệch đòi hỏi quy trình kiểm chứng chặt chẽ hơn khi dùng AI.",
          ],
          en: [
            "AI delivers the most value on repetitive knowledge tasks, not pure strategy.",
            "The human role shifts toward context interpretation and brand-voice/quality control.",
            "The risk of misinformation spreading requires tighter verification processes when using AI.",
          ],
        },
      },
      {
        slug: "tu-dong-hoa-soan-thao-truyen-thong",
        title: { vi: "Tự động hoá soạn thảo & rà soát truyền thông doanh nghiệp", en: "Automating drafting and review of corporate communications" },
        summary: {
          vi: "Cách dùng Claude để soạn nháp thông cáo báo chí, bài phát biểu, Q&A nội bộ, và giữ nhất quán giọng nói thương hiệu.",
          en: "How to use Claude to draft press releases, speeches, internal Q&A, and keep brand voice consistent.",
        },
        durationMin: 14,
        level: "trung-cap",
        body: {
          vi: [
            "Quy trình hiệu quả thường theo mô hình \"AI soạn nháp — người biên tập chiến lược\": cung cấp cho AI bối cảnh (thông tin sự kiện, đối tượng đọc, thông điệp chính cần truyền tải, các từ/cụm từ cần tránh) để tạo bản nháp đầu tiên nhanh chóng, sau đó chuyên gia truyền thông tinh chỉnh về sắc thái, chính trị nội bộ, và rủi ro pháp lý.",
            "Xây dựng \"bộ hướng dẫn giọng nói thương hiệu\" (brand voice guide) dưới dạng văn bản có cấu trúc (tông giọng, từ vựng ưu tiên/tránh dùng, ví dụ câu mẫu) giúp AI tạo nội dung nhất quán hơn qua nhiều lần sử dụng, thay vì phải giải thích lại từ đầu mỗi lần.",
            "Với Q&A nội bộ và tài liệu chuẩn bị cho phỏng vấn báo chí (media training), AI có thể đóng vai phóng viên khó tính để mô phỏng các câu hỏi hóc búa, giúp người phát ngôn luyện tập trả lời trước khi ra thực tế.",
            "Giới hạn quan trọng: AI không nên là nguồn duy nhất xác nhận sự kiện, số liệu tài chính, hay các tuyên bố có thể ảnh hưởng đến giá cổ phiếu hoặc nghĩa vụ pháp lý — các nội dung này luôn cần xác minh chéo với nguồn dữ liệu chính thức của công ty trước khi công bố.",
          ],
          en: [
            "An effective workflow follows an \"AI drafts — human edits for strategy\" model: give the AI context (event details, audience, key messages, words/phrases to avoid) so it can produce a fast first draft, then have a communications professional refine tone, internal politics, and legal risk.",
            "Building a structured \"brand voice guide\" (tone, preferred/avoided vocabulary, example sentences) helps AI produce more consistent content across repeated uses, instead of re-explaining context every time.",
            "For internal Q&A and media-training prep, AI can role-play a tough reporter to simulate hard questions, letting spokespeople rehearse answers before facing the real thing.",
            "Important limit: AI should never be the sole source confirming facts, financial figures, or statements that could move stock price or create legal obligations — such content must always be cross-checked against the company's official data sources before release.",
          ],
        },
        examples: [
          {
            title: { vi: "Mẫu yêu cầu soạn thông cáo báo chí", en: "Sample press release drafting request" },
            body: {
              vi: [
                "\"Soạn nháp thông cáo báo chí (300 từ) công bố việc công ty đạt chứng nhận ISO 27001. Đối tượng đọc: nhà đầu tư và đối tác B2B. Giọng điệu: chuyên nghiệp, tự tin nhưng không phô trương. Bắt buộc trích dẫn một câu nói từ CEO (tôi sẽ cung cấp sau). Tránh từ 'đột phá', 'hàng đầu thị trường'.\"",
              ],
              en: [
                "\"Draft a 300-word press release announcing the company achieved ISO 27001 certification. Audience: investors and B2B partners. Tone: professional, confident but not boastful. Must include a placeholder CEO quote (I will supply it later). Avoid the words 'groundbreaking', 'market-leading'.\"",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Mô hình \"AI soạn nháp — người biên tập chiến lược\" tận dụng tốc độ AI và phán đoán con người.",
            "Bộ hướng dẫn giọng nói thương hiệu bằng văn bản giúp AI nhất quán hơn qua thời gian.",
            "Số liệu và tuyên bố có tính pháp lý luôn cần xác minh với nguồn chính thức.",
          ],
          en: [
            "The \"AI drafts — human edits for strategy\" model leverages AI speed and human judgment together.",
            "A written brand voice guide helps AI stay consistent over time.",
            "Figures and legally sensitive statements must always be verified against official sources.",
          ],
        },
      },
      {
        slug: "theo-doi-danh-tieng-du-luan",
        title: { vi: "Theo dõi rủi ro danh tiếng & phân tích dư luận bằng AI", en: "AI-powered reputation risk and sentiment monitoring" },
        summary: {
          vi: "Cách AI hỗ trợ phát hiện sớm khủng hoảng truyền thông và phân tích xu hướng dư luận trên diện rộng.",
          en: "How AI helps detect emerging communications crises early and analyze public sentiment at scale.",
        },
        durationMin: 13,
        level: "trung-cap",
        body: {
          vi: [
            "AI tạo sinh và mô hình phân tích cảm xúc (sentiment analysis) cho phép quét khối lượng lớn nội dung (mạng xã hội, báo chí, diễn đàn) theo thời gian gần thực, phát hiện các cụm chủ đề đang nổi lên và ước lượng mức độ lan truyền — điều mà việc theo dõi thủ công không thể làm ở quy mô lớn.",
            "Giá trị thực sự nằm ở việc AI giúp phân biệt \"nhiễu\" (một vài bình luận tiêu cực lẻ tẻ) với \"tín hiệu thật\" (một xu hướng đang tăng tốc có khả năng thành khủng hoảng) — thông qua theo dõi tốc độ tăng trưởng đề cập và mức độ lan toả giữa các nhóm đối tượng khác nhau, không chỉ tổng số lượng.",
            "Một khung phản ứng khủng hoảng có hỗ trợ AI thường gồm: (1) phát hiện sớm bằng giám sát tự động, (2) AI tổng hợp nhanh bối cảnh và các bên liên quan chính, (3) con người đánh giá mức độ nghiêm trọng và quyết định phản ứng, (4) AI hỗ trợ soạn thảo phản hồi theo nhiều kịch bản để lãnh đạo lựa chọn.",
            "Hạn chế cần lưu ý: mô hình phân tích cảm xúc có thể hiểu sai ngữ cảnh văn hoá, mỉa mai, hoặc tiếng lóng địa phương — đặc biệt quan trọng với thị trường đa ngôn ngữ như Việt Nam, nơi sắc thái ngôn ngữ vùng miền có thể khiến AI đánh giá sai mức độ nghiêm trọng.",
            "Các hiệp hội nghề nghiệp truyền thông đã đưa ra hướng dẫn cụ thể cho vùng \"xám\" này: Arthur W. Page Society nói về sự chuyển dịch từ khảo sát định kỳ sang \"stakeholder intelligence\" gần thời gian thực nhưng vẫn đòi hỏi human leadership để giữ niềm tin; IABC yêu cầu người làm truyền thông luôn chịu trách nhiệm cuối cùng với nội dung có AI hỗ trợ (verification, fairness, transparency); còn CIPR và PRCA đều nhấn mạnh việc công bố rõ khi nội dung có sự hỗ trợ của AI, đặc biệt trong bối cảnh khủng hoảng.",
          ],
          en: [
            "Generative AI and sentiment analysis models can scan large volumes of content (social media, press, forums) in near-real time, detect emerging topic clusters, and estimate the pace of spread — something manual monitoring cannot do at scale.",
            "The real value lies in AI helping distinguish \"noise\" (a handful of scattered negative comments) from a \"real signal\" (an accelerating trend likely to become a crisis) — by tracking the growth rate of mentions and spread across different audience segments, not just raw volume.",
            "An AI-assisted crisis response framework typically includes: (1) early detection via automated monitoring, (2) AI quickly synthesizing context and key stakeholders, (3) humans assessing severity and deciding on a response, (4) AI drafting multiple response scenarios for leadership to choose from.",
            "A key limitation: sentiment models can misread cultural context, sarcasm, or local slang — especially important in multilingual markets like Vietnam, where regional linguistic nuance can lead AI to misjudge severity.",
            "Communications professional bodies offer concrete guidance for this gray zone: the Arthur W. Page Society describes the shift from periodic surveys to near-real-time \"stakeholder intelligence\" that still requires human leadership to preserve trust; IABC requires communicators to always hold final responsibility for AI-assisted content (verification, fairness, transparency); and both CIPR and PRCA stress clearly disclosing when content had AI assistance, especially during a crisis.",
          ],
        },
        examples: [
          {
            title: { vi: "Kịch bản: phát hiện khủng hoảng sớm", en: "Scenario: early crisis detection" },
            body: {
              vi: [
                "Hệ thống giám sát phát hiện lượng đề cập tiêu cực về một sản phẩm tăng 400% trong 6 giờ, tập trung ở một nhóm cộng đồng cụ thể.",
                "AI tổng hợp: chủ đề chính, 3 bài đăng có ảnh hưởng nhất, ước tính phạm vi tiếp cận.",
                "Đội Corporate Affairs họp nhanh, đánh giá đây là rủi ro Trung bình, chuẩn bị 2 phương án phản hồi để lãnh đạo duyệt trong vòng 2 giờ.",
              ],
              en: [
                "The monitoring system detects negative mentions of a product up 400% in 6 hours, concentrated in one specific community.",
                "AI synthesizes: the main theme, the 3 most influential posts, an estimated reach.",
                "The Corporate Affairs team convenes quickly, assesses this as Medium risk, and prepares 2 response options for leadership approval within 2 hours.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "AI giỏi phát hiện tín hiệu sớm ở quy mô lớn, nhưng con người vẫn quyết định mức độ nghiêm trọng.",
            "Phân biệt nhiễu và tín hiệu thật dựa trên tốc độ tăng và độ lan toả, không chỉ số lượng.",
            "Cẩn trọng với sai lệch văn hoá/ngôn ngữ khi áp dụng phân tích cảm xúc tại thị trường địa phương.",
          ],
          en: [
            "AI excels at early signal detection at scale, but humans still decide on severity.",
            "Distinguish noise from real signal using growth rate and spread, not just volume.",
            "Be cautious of cultural/linguistic bias when applying sentiment analysis in local markets.",
          ],
        },
      },
      {
        slug: "stakeholder-esg-reporting",
        title: { vi: "Quản trị quan hệ bên liên quan & báo cáo ESG với AI", en: "Stakeholder management and ESG reporting with AI" },
        summary: {
          vi: "Ứng dụng AI để tổng hợp dữ liệu ESG phân tán, theo dõi cam kết với các bên liên quan, và soạn báo cáo phát triển bền vững.",
          en: "Using AI to consolidate scattered ESG data, track stakeholder commitments, and draft sustainability reports.",
        },
        durationMin: 13,
        level: "nang-cao",
        body: {
          vi: [
            "Báo cáo ESG (Môi trường, Xã hội, Quản trị) thường đòi hỏi tổng hợp dữ liệu từ hàng chục phòng ban khác nhau theo nhiều khung tiêu chuẩn (GRI, SASB, TCFD...). AI có thể hỗ trợ trích xuất, đối chiếu và chuẩn hoá dữ liệu này nhanh hơn nhiều so với quy trình thủ công qua email và bảng tính rời rạc.",
            "Theo các phân tích của Deloitte về báo cáo bền vững, một rủi ro lớn khi ứng dụng AI vào ESG là \"greenwashing bằng AI\" — AI có thể tạo ra ngôn từ có vẻ ấn tượng nhưng thiếu số liệu kiểm chứng được. Do đó, mọi tuyên bố ESG do AI hỗ trợ soạn thảo cần được gắn với dữ liệu nguồn cụ thể, có thể truy vết.",
            "AI cũng hỗ trợ tốt việc theo dõi \"sổ cam kết\" với các bên liên quan (nhà đầu tư, cộng đồng, cơ quan quản lý, tổ chức phi chính phủ) — tổng hợp các cam kết đã đưa ra, trạng thái thực hiện, và cảnh báo khi có nguy cơ trễ hạn hoặc mâu thuẫn giữa các cam kết.",
            "Xu hướng đáng chú ý theo SHRM và các báo cáo về quản trị doanh nghiệp: hội đồng quản trị ngày càng yêu cầu minh bạch về cách AI được dùng trong xây dựng báo cáo ESG, xem đây là một phần của quản trị AI có trách nhiệm (responsible AI governance), không chỉ là công cụ hiệu suất.",
          ],
          en: [
            "ESG (Environmental, Social, Governance) reporting typically requires consolidating data from dozens of departments across multiple standards (GRI, SASB, TCFD...). AI can help extract, reconcile, and standardize this data far faster than manual processes built on email threads and scattered spreadsheets.",
            "Deloitte's analyses of sustainability reporting flag a major risk in applying AI to ESG: \"AI-enabled greenwashing\" — AI can generate language that sounds impressive but lacks verifiable data behind it. Every AI-assisted ESG claim should therefore be tied to specific, traceable source data.",
            "AI is also well suited to maintaining a \"commitments ledger\" with stakeholders (investors, communities, regulators, NGOs) — consolidating commitments made, implementation status, and flagging risk of missed deadlines or conflicts between commitments.",
            "A notable trend per SHRM and corporate governance reports: boards increasingly demand transparency about how AI is used in building ESG reports, treating this as part of responsible AI governance, not merely an efficiency tool.",
          ],
        },
        examples: [
          {
            title: { vi: "Quy trình tổng hợp báo cáo ESG có AI hỗ trợ", en: "AI-assisted ESG report consolidation workflow" },
            body: {
              vi: [
                "Thu thập dữ liệu thô từ các phòng ban (tiêu thụ năng lượng, số liệu đa dạng nhân sự, khiếu nại khách hàng...).",
                "AI đối chiếu dữ liệu với khung GRI/SASB liên quan, gắn cờ các mục thiếu dữ liệu hoặc không nhất quán.",
                "AI soạn nháp phần diễn giải, có trích dẫn nguồn dữ liệu gốc cho từng con số.",
                "Đội ESG và kiểm toán nội bộ rà soát trước khi trình hội đồng quản trị.",
              ],
              en: [
                "Collect raw data from departments (energy consumption, workforce diversity figures, customer complaints...).",
                "AI reconciles data against relevant GRI/SASB frameworks, flagging missing or inconsistent items.",
                "AI drafts the narrative section, citing the original data source for each figure.",
                "The ESG team and internal audit review before presenting to the board.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "AI tăng tốc tổng hợp dữ liệu ESG phân tán nhưng không thay thế việc kiểm chứng số liệu.",
            "Mọi tuyên bố ESG cần gắn với dữ liệu nguồn có thể truy vết để tránh rủi ro greenwashing.",
            "Minh bạch về cách dùng AI trong báo cáo ESG là một phần của quản trị AI có trách nhiệm.",
          ],
          en: [
            "AI speeds up consolidating scattered ESG data but does not replace data verification.",
            "Every ESG claim needs traceable source data to avoid greenwashing risk.",
            "Transparency about AI use in ESG reporting is part of responsible AI governance.",
          ],
        },
      },
    ],
  },

  // ============================= MODULE 3: HR / PEOPLE EXPERIENCE =============================
  {
    slug: "hr-people-experience",
    icon: "Users",
    color: "amber",
    title: { vi: "AI Automation cho HR & People Experience", en: "AI Automation for HR & People Experience" },
    description: {
      vi: "Ứng dụng AI trong toàn bộ hành trình nhân sự — từ tuyển dụng, vận hành, đến trải nghiệm và phân tích nhân sự.",
      en: "Applying AI across the full employee journey — from recruiting, operations, to experience and people analytics.",
    },
    lessons: [
      {
        slug: "ai-hanh-trinh-nhan-su",
        title: { vi: "AI trong hành trình nhân sự: từ tuyển dụng đến offboarding", en: "AI across the employee journey: from hiring to offboarding" },
        summary: {
          vi: "Bản đồ tổng thể các điểm chạm trong hành trình nhân viên nơi AI đang tạo ra giá trị rõ rệt nhất theo các khảo sát của SHRM.",
          en: "A map of the employee-journey touchpoints where AI is delivering the clearest value, per SHRM surveys.",
        },
        durationMin: 12,
        level: "co-ban",
        body: {
          vi: [
            "Các khảo sát thường niên của SHRM (Society for Human Resource Management) về công nghệ nhân sự cho thấy phần lớn tổ chức đã hoặc đang thí điểm AI ở giai đoạn tuyển dụng (sàng lọc hồ sơ, lên lịch phỏng vấn) và giai đoạn onboarding (trả lời câu hỏi thường gặp, hướng dẫn quy trình) — đây là hai điểm chạm có khối lượng công việc lặp lại cao nhất.",
            "Ở giữa hành trình, AI ngày càng được dùng cho people analytics: dự báo nguy cơ nghỉ việc (attrition risk), phân tích khảo sát mức độ gắn kết nhân viên (engagement survey), và gợi ý lộ trình phát triển cá nhân hoá dựa trên kỹ năng hiện có.",
            "Ở giai đoạn offboarding, AI hỗ trợ tổng hợp phỏng vấn thôi việc (exit interview) trên diện rộng để phát hiện các mẫu hình lý do nghỉ việc mà một cuộc phỏng vấn đơn lẻ khó nhìn ra, giúp HR business partner đưa ra khuyến nghị giữ chân nhân tài có dữ liệu hỗ trợ.",
            "Một phát hiện nhất quán trong nhiều nghiên cứu (bao gồm Deloitte Human Capital Trends): giá trị AI trong HR không đến từ việc thay thế tương tác con người ở các thời điểm quan trọng (ví dụ trao đổi về lương thưởng, xử lý xung đột), mà từ việc giải phóng thời gian của HR khỏi tác vụ hành chính để họ tập trung vào những tương tác đó.",
          ],
          en: [
            "SHRM's (Society for Human Resource Management) annual HR technology surveys show most organizations have piloted or deployed AI at the hiring stage (resume screening, interview scheduling) and onboarding stage (answering FAQs, guiding process steps) — the two touchpoints with the highest volume of repetitive work.",
            "In the middle of the journey, AI is increasingly used for people analytics: predicting attrition risk, analyzing employee engagement survey results, and suggesting personalized development paths based on current skills.",
            "At the offboarding stage, AI helps synthesize exit interviews at scale to surface patterns in reasons for leaving that a single interview would struggle to reveal, helping HR business partners make data-backed retention recommendations.",
            "A consistent finding across multiple studies (including Deloitte Human Capital Trends): AI's value in HR does not come from replacing human interaction at critical moments (e.g. compensation conversations, conflict resolution), but from freeing HR's time from administrative tasks so they can focus on those interactions.",
          ],
        },
        examples: [
          {
            title: { vi: "Bản đồ hành trình nhân sự và điểm chạm AI", en: "Employee journey map and AI touchpoints" },
            body: {
              vi: [
                "Tuyển dụng: AI sàng lọc sơ bộ theo tiêu chí khách quan (kinh nghiệm, kỹ năng), con người quyết định phỏng vấn.",
                "Onboarding: chatbot trả lời câu hỏi về chính sách, quy trình 30-60-90 ngày.",
                "Phát triển: AI gợi ý khoá học dựa trên khoảng trống kỹ năng.",
                "Giữ chân: mô hình dự báo rủi ro nghỉ việc gửi cảnh báo sớm cho quản lý trực tiếp.",
                "Offboarding: tổng hợp xu hướng từ phỏng vấn thôi việc theo quý.",
              ],
              en: [
                "Recruiting: AI performs initial screening on objective criteria (experience, skills), humans decide who to interview.",
                "Onboarding: chatbot answers policy questions, guides the 30-60-90 day plan.",
                "Development: AI suggests courses based on skill gaps.",
                "Retention: attrition-risk model sends early warnings to direct managers.",
                "Offboarding: quarterly synthesis of exit-interview trends.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "AI tạo giá trị rõ nhất ở các điểm chạm có khối lượng công việc lặp lại cao.",
            "Tương tác con người quan trọng (lương thưởng, xung đột) không nên bị AI thay thế.",
            "Giá trị cốt lõi của AI trong HR là giải phóng thời gian cho tương tác con người có ý nghĩa.",
          ],
          en: [
            "AI delivers the clearest value at touchpoints with high volumes of repetitive work.",
            "Critical human interactions (compensation, conflict) should not be replaced by AI.",
            "AI's core value in HR is freeing up time for meaningful human interaction.",
          ],
        },
      },
      {
        slug: "hr-ops-automation",
        title: { vi: "Tự động hoá quy trình HR vận hành", en: "Automating HR operations" },
        summary: {
          vi: "Cách dùng AI để tự động hoá các tác vụ HR vận hành: trả lời câu hỏi chính sách, soạn thư mời làm việc, tổng hợp báo cáo nhân sự định kỳ.",
          en: "Using AI to automate HR operations: answering policy questions, drafting offer letters, compiling recurring HR reports.",
        },
        durationMin: 14,
        level: "trung-cap",
        body: {
          vi: [
            "Chatbot trả lời chính sách nội bộ (dựa trên tài liệu công ty làm nguồn tri thức — kỹ thuật gọi là Retrieval-Augmented Generation, RAG) có thể xử lý phần lớn câu hỏi lặp lại về nghỉ phép, bảo hiểm, quy trình công tác, giảm tải đáng kể cho đội HR service desk.",
            "Soạn thảo tài liệu chuẩn hoá (thư mời làm việc, hợp đồng lao động bản nháp, thư xác nhận thu nhập) có thể được AI hỗ trợ dựa trên mẫu (template) đã được pháp chế phê duyệt — AI điền thông tin biến đổi, con người rà soát bản cuối trước khi ký.",
            "Với báo cáo nhân sự định kỳ (báo cáo biến động nhân sự hàng tháng, báo cáo tuân thủ đào tạo), AI có thể tự động tổng hợp từ hệ thống HRIS và soạn phần diễn giải bằng ngôn ngữ tự nhiên, giúp báo cáo dễ đọc hơn cho lãnh đạo không chuyên về nhân sự.",
            "Nguyên tắc quan trọng khi triển khai: phân loại rõ tác vụ nào có thể để AI xử lý hoàn toàn (câu hỏi chính sách rõ ràng, không có ngoại lệ), tác vụ nào cần AI hỗ trợ nhưng con người quyết định cuối (soạn thư mời làm việc, xử lý trường hợp đặc biệt), và tác vụ nào không nên dùng AI (quyết định kỷ luật, đánh giá hiệu suất cá nhân có ảnh hưởng lớn đến sự nghiệp).",
          ],
          en: [
            "A policy chatbot grounded in company documents as its knowledge source (a technique called Retrieval-Augmented Generation, RAG) can handle most repetitive questions about leave, insurance, and travel processes, significantly reducing load on the HR service desk.",
            "Standardized document drafting (offer letters, draft employment contracts, income confirmation letters) can be AI-assisted based on templates already approved by legal — AI fills in variable information, humans review the final version before signing.",
            "For recurring HR reports (monthly headcount movement reports, training compliance reports), AI can automatically pull from the HRIS system and draft the narrative in natural language, making reports easier to read for non-HR leadership.",
            "A key principle when deploying this: clearly classify which tasks AI can handle fully (clear-cut policy questions with no exceptions), which need AI assistance but a human final decision (offer letter drafting, edge cases), and which should not use AI at all (disciplinary decisions, individual performance evaluations with major career impact).",
          ],
        },
        examples: [
          {
            title: { vi: "Ma trận phân quyền tự động hoá", en: "Automation authority matrix" },
            body: {
              vi: [
                "AI xử lý toàn bộ: \"Số ngày nghỉ phép còn lại của tôi là bao nhiêu?\"",
                "AI hỗ trợ, người duyệt: soạn thư mời làm việc cho ứng viên đã được phê duyệt offer.",
                "Chỉ con người: quyết định kỷ luật, đánh giá hiệu suất ảnh hưởng đến thăng chức.",
              ],
              en: [
                "AI handles fully: \"How many days of leave do I have left?\"",
                "AI assists, human approves: drafting an offer letter for a candidate whose offer was already approved.",
                "Human only: disciplinary decisions, performance reviews affecting promotion.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "RAG giúp chatbot chính sách trả lời chính xác dựa trên tài liệu nội bộ thật, giảm ảo giác.",
            "Phân loại rõ ràng mức độ tự động hoá phù hợp cho từng loại tác vụ.",
            "Quyết định ảnh hưởng lớn đến sự nghiệp cá nhân không nên giao hoàn toàn cho AI.",
          ],
          en: [
            "RAG helps a policy chatbot answer accurately based on real internal documents, reducing hallucination.",
            "Clearly classify the appropriate level of automation for each task type.",
            "Decisions with major career impact should not be fully delegated to AI.",
          ],
        },
      },
      {
        slug: "people-analytics-experience",
        title: { vi: "AI cho trải nghiệm nhân viên và People Analytics", en: "AI for employee experience and people analytics" },
        summary: {
          vi: "Ứng dụng AI để lắng nghe nhân viên ở quy mô lớn và cá nhân hoá trải nghiệm làm việc.",
          en: "Using AI to listen to employees at scale and personalize the work experience.",
        },
        durationMin: 13,
        level: "trung-cap",
        body: {
          vi: [
            "\"Lắng nghe liên tục\" (continuous listening) — thu thập phản hồi nhân viên qua các khảo sát ngắn, thường xuyên thay vì một khảo sát gắn kết lớn mỗi năm — tạo ra khối lượng dữ liệu định tính lớn mà AI có thể tổng hợp thành các chủ đề chính theo thời gian thực, thay vì con người phải đọc thủ công hàng nghìn câu trả lời.",
            "Theo nghiên cứu của McKinsey về trải nghiệm nhân viên, các tổ chức dẫn đầu dùng AI để cá nhân hoá trải nghiệm học tập và phát triển — gợi ý nội dung phù hợp với vai trò, giai đoạn sự nghiệp, và phong cách học của từng người — tương tự cách các nền tảng tiêu dùng cá nhân hoá nội dung.",
            "Cảnh báo quan trọng từ HBR (Harvard Business Review) về phân tích nhân sự: việc theo dõi hành vi làm việc chi tiết (thời gian phản hồi email, số cuộc họp, mức độ hoạt động trên công cụ nội bộ) để dự đoán hiệu suất hoặc rủi ro nghỉ việc dễ vượt qua ranh giới giữa \"insight hữu ích\" và \"giám sát xâm phạm quyền riêng tư\", có thể làm giảm lòng tin nếu không minh bạch với nhân viên về việc thu thập và sử dụng dữ liệu.",
            "Thực hành tốt: minh bạch với nhân viên về dữ liệu nào được thu thập và dùng để làm gì, cho phép nhân viên xem lại dữ liệu về chính họ, và luôn dùng insight từ AI như một điểm khởi đầu cho cuộc trò chuyện của quản lý — không phải kết luận cuối cùng để hành động tự động.",
          ],
          en: [
            "\"Continuous listening\" — collecting employee feedback via short, frequent pulse surveys instead of one large annual engagement survey — produces a large volume of qualitative data that AI can synthesize into key themes in near-real time, instead of humans manually reading thousands of responses.",
            "McKinsey research on employee experience finds leading organizations use AI to personalize learning and development — suggesting content matched to role, career stage, and individual learning style — similar to how consumer platforms personalize content.",
            "An important caution from Harvard Business Review on people analytics: tracking granular work behavior (email response time, meeting count, activity level on internal tools) to predict performance or attrition risk can easily cross the line from \"useful insight\" to \"invasive surveillance\", eroding trust if employees aren't told transparently what data is collected and how it's used.",
            "Good practice: be transparent with employees about what data is collected and why, let employees view data about themselves, and always treat AI insight as a starting point for a manager's conversation — not a final conclusion to act on automatically.",
          ],
        },
        examples: [
          {
            title: { vi: "Ví dụ: từ insight AI đến hành động của quản lý", en: "Example: from AI insight to manager action" },
            body: {
              vi: [
                "AI tổng hợp khảo sát pulse hàng tuần, phát hiện chủ đề \"khối lượng công việc\" tăng đột biến trong một nhóm 12 người.",
                "AI KHÔNG tự động gửi cảnh báo kỷ luật hay thay đổi lương — thay vào đó, gợi ý quản lý trực tiếp nên có buổi trò chuyện 1-1 về khối lượng công việc.",
                "Quản lý xem thêm dữ liệu định tính (ẩn danh, tổng hợp) để chuẩn bị cuộc trò chuyện có bối cảnh, không phải để \"đối chất\" từng cá nhân.",
              ],
              en: [
                "AI synthesizes weekly pulse surveys and detects a spike in the \"workload\" theme within a 12-person team.",
                "AI does NOT automatically trigger disciplinary flags or pay changes — instead, it suggests the direct manager hold a 1-on-1 conversation about workload.",
                "The manager reviews additional (anonymized, aggregated) qualitative data to prepare a contextual conversation, not to confront any one individual.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Lắng nghe liên tục bằng AI giúp phát hiện xu hướng nhanh hơn khảo sát thường niên.",
            "Cá nhân hoá học tập & phát triển là ứng dụng AI có ROI rõ ràng trong trải nghiệm nhân viên.",
            "Minh bạch dữ liệu và giữ vai trò quyết định cho con người là điều kiện để duy trì lòng tin.",
          ],
          en: [
            "AI-powered continuous listening detects trends faster than annual surveys.",
            "Personalized learning & development is an AI application with clear ROI for employee experience.",
            "Data transparency and keeping humans in the decision seat are prerequisites for maintaining trust.",
          ],
        },
      },
      {
        slug: "dao-duc-thien-vi-tuan-thu-hr",
        title: { vi: "Đạo đức, thiên vị thuật toán và tuân thủ khi dùng AI trong HR", en: "Ethics, algorithmic bias, and compliance when using AI in HR" },
        summary: {
          vi: "Rủi ro thiên vị thuật toán trong tuyển dụng và đánh giá nhân sự, cùng khung tuân thủ cần lưu ý.",
          en: "Algorithmic bias risk in recruiting and performance evaluation, and the compliance frameworks to watch.",
        },
        durationMin: 14,
        level: "nang-cao",
        body: {
          vi: [
            "Thiên vị thuật toán trong tuyển dụng thường không đến từ ý định xấu, mà từ dữ liệu huấn luyện phản ánh thiên vị lịch sử — ví dụ một mô hình học từ dữ liệu tuyển dụng quá khứ có thể vô tình học được các mẫu hình phân biệt giới tính hoặc tuổi tác đã tồn tại trong quyết định tuyển dụng trước đây, dù không có trường dữ liệu nào ghi trực tiếp giới tính hay tuổi.",
            "Nhiều khung pháp lý đang siết chặt yêu cầu minh bạch AI trong tuyển dụng (ví dụ các quy định yêu cầu công khai khi AI được dùng để sàng lọc ứng viên, và cho phép ứng viên yêu cầu đánh giá lại bởi con người). Đội HR và Corporate Affairs cần phối hợp chặt với pháp chế để theo dõi các yêu cầu tuân thủ theo từng thị trường hoạt động.",
            "SHRM khuyến nghị một khung đánh giá AI tuyển dụng gồm: kiểm toán định kỳ kết quả theo nhóm nhân khẩu học (audit for disparate impact), luôn có lựa chọn để ứng viên yêu cầu xem xét lại bởi con người, và ghi lại tài liệu về cách mô hình được huấn luyện và kiểm định.",
            "Với đánh giá hiệu suất, HBR cảnh báo về rủi ro \"tự động hoá thiên vị\" khi dùng AI để tổng hợp đánh giá 360 độ hoặc chấm điểm hiệu suất — nếu dữ liệu đầu vào (nhận xét bằng lời) đã mang thiên vị vô thức, AI có thể khuếch đại thay vì loại bỏ nó khi tổng hợp ở quy mô lớn.",
            "Thực hành khuyến nghị: xem AI là công cụ hỗ trợ ra quyết định (decision support), không phải người ra quyết định (decision maker) trong các tình huống ảnh hưởng đến quyền lợi cá nhân nhân viên; luôn có con đường để con người xem xét lại; và kiểm toán định kỳ, độc lập kết quả AI theo các nhóm nhân khẩu học được bảo vệ theo luật.",
            "Tổ chức Lao động Quốc tế (ILO) mở rộng vấn đề này ra ngoài phạm vi tuyển dụng: khung \"Algorithmic Management\" của ILO phân tích cách hệ thống thuật toán không chỉ sàng lọc mà còn tổ chức, phân công, giám sát và đánh giá lao động hằng ngày (ví dụ chấm điểm năng suất tự động, lịch làm việc do AI tối ưu hoá). ILO nhấn mạnh cần đối thoại xã hội (social dialogue) với người lao động trước khi triển khai, và lưu ý các rủi ro tâm lý xã hội (psychosocial risks) khi nhân viên cảm thấy bị giám sát liên tục bởi thuật toán thay vì quản lý con người.",
          ],
          en: [
            "Algorithmic bias in recruiting usually doesn't stem from bad intent, but from training data that reflects historical bias — a model trained on past hiring data can inadvertently learn gender or age discrimination patterns embedded in prior hiring decisions, even without any field explicitly recording gender or age.",
            "Many legal frameworks are tightening AI transparency requirements in hiring (e.g. regulations requiring disclosure when AI is used to screen candidates, and allowing candidates to request human re-evaluation). HR and Corporate Affairs teams need to work closely with legal to track compliance requirements across each market of operation.",
            "SHRM recommends an AI-hiring evaluation framework that includes: periodic audits of outcomes by demographic group (audit for disparate impact), always offering candidates a path to request human review, and documenting how the model was trained and validated.",
            "For performance evaluation, HBR warns of \"automating bias\" risk when using AI to synthesize 360-degree reviews or performance scores — if the input data (written comments) already carries unconscious bias, AI can amplify rather than remove it when aggregating at scale.",
            "Recommended practice: treat AI as decision support, not the decision maker, in situations affecting an individual employee's rights and interests; always provide a path for human review; and conduct periodic, independent audits of AI outcomes across legally protected demographic groups.",
            "The International Labour Organization (ILO) extends this issue beyond hiring: its \"Algorithmic Management\" framework analyzes how algorithmic systems don't just screen but also organize, assign, monitor, and evaluate work day-to-day (e.g. automated productivity scoring, AI-optimized scheduling). ILO stresses the need for social dialogue with workers before rollout, and flags the psychosocial risks when employees feel continuously monitored by an algorithm rather than managed by a person.",
          ],
        },
        examples: [
          {
            title: { vi: "Danh sách kiểm tra tuân thủ AI tuyển dụng", en: "AI hiring compliance checklist" },
            body: {
              vi: [
                "☐ Ứng viên có được thông báo khi AI tham gia sàng lọc hồ sơ không?",
                "☐ Có cơ chế để ứng viên yêu cầu con người xem xét lại quyết định không?",
                "☐ Kết quả sàng lọc có được kiểm toán định kỳ theo nhóm nhân khẩu học không?",
                "☐ Tài liệu về cách mô hình được huấn luyện/kiểm định có được lưu trữ đầy đủ không?",
              ],
              en: [
                "☐ Are candidates notified when AI is involved in resume screening?",
                "☐ Is there a mechanism for candidates to request human review of a decision?",
                "☐ Are screening outcomes periodically audited by demographic group?",
                "☐ Is documentation of how the model was trained/validated properly retained?",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Thiên vị thuật toán thường bắt nguồn từ dữ liệu lịch sử, không phải chủ đích thiết kế.",
            "Luôn duy trì con đường để con người xem xét lại quyết định ảnh hưởng đến cá nhân.",
            "Kiểm toán định kỳ theo nhóm nhân khẩu học là thực hành bắt buộc, không phải tuỳ chọn.",
          ],
          en: [
            "Algorithmic bias usually originates from historical data, not deliberate design.",
            "Always maintain a path for human review of decisions affecting individuals.",
            "Periodic audits by demographic group are mandatory practice, not optional.",
          ],
        },
      },
    ],
  },

  // ============================= MODULE 4: ENTERPRISE RISK MANAGEMENT =============================
  {
    slug: "quan-tri-rui-ro",
    icon: "ShieldAlert",
    color: "rose",
    title: { vi: "AI Automation cho Quản trị Rủi ro Doanh nghiệp", en: "AI Automation for Enterprise Risk Management" },
    description: {
      vi: "Ứng dụng AI trong nhận diện, định lượng, kiểm soát rủi ro doanh nghiệp, và quản trị chính rủi ro của AI.",
      en: "Applying AI to identify, quantify, and control enterprise risk — and how to govern the risks of AI itself.",
    },
    lessons: [
      {
        slug: "tong-quan-erm-va-ai",
        title: { vi: "Tổng quan quản trị rủi ro doanh nghiệp và vai trò của AI", en: "Overview of enterprise risk management and AI's role" },
        summary: {
          vi: "Khung ERM cơ bản (COSO) và những khâu nào trong vòng đời quản trị rủi ro đang được AI hỗ trợ mạnh nhất.",
          en: "The basic ERM framework (COSO) and which stages of the risk management lifecycle AI is strengthening the most.",
        },
        durationMin: 13,
        level: "co-ban",
        body: {
          vi: [
            "Khung Quản trị rủi ro doanh nghiệp (Enterprise Risk Management, ERM) phổ biến nhất — COSO ERM Framework — mô tả một vòng lặp liên tục gồm: xác định bối cảnh & mục tiêu, nhận diện rủi ro, đánh giá/định lượng, ứng phó, giám sát & báo cáo. AI có thể hỗ trợ ở gần như mọi bước, nhưng mức độ trưởng thành khác nhau đáng kể.",
            "Nhận diện rủi ro (risk identification) là khâu AI tạo giá trị rõ nhất hiện nay: quét khối lượng lớn dữ liệu phi cấu trúc (tin tức, báo cáo nội bộ, dữ liệu vận hành, mạng xã hội) để phát hiện các rủi ro mới nổi mà quy trình khảo sát thủ công định kỳ (thường mỗi năm một lần) dễ bỏ sót do độ trễ.",
            "Theo các báo cáo của Deloitte và McKinsey về AI trong quản trị rủi ro, khâu định lượng rủi ro tài chính/tín dụng đã ứng dụng AI/machine learning từ lâu (mô hình dự báo), trong khi khâu định lượng rủi ro phi tài chính (rủi ro danh tiếng, rủi ro vận hành, rủi ro con người) vẫn đang trong giai đoạn phát triển do bản chất khó lượng hoá.",
            "Một xu hướng quan trọng: sự dịch chuyển từ quản trị rủi ro \"phản ứng\" (đánh giá rủi ro đã xảy ra hoặc theo chu kỳ cố định) sang \"chủ động liên tục\" (continuous risk sensing) — nhờ AI có thể xử lý dữ liệu thời gian thực với chi phí thấp hơn nhiều so với trước đây.",
            "COSO — tổ chức xây dựng khung ERM này — cũng ban hành hướng dẫn riêng \"Realize the Full Potential of Artificial Intelligence\", áp dụng trực tiếp các nguyên tắc ERM vào việc xây dựng chiến lược và triển khai AI, cùng hướng dẫn về kiểm soát nội bộ (internal control) đối với AI tạo sinh. Một công cụ bổ trợ hữu ích khác là khung phân loại 5 chiều của OECD (People & Planet, Economic Context, Data & Input, AI Model, Task & Output) — giúp xác định đầy đủ các bên bị ảnh hưởng và tác nhân AI trong một hệ thống trước khi đánh giá rủi ro.",
          ],
          en: [
            "The most widely used Enterprise Risk Management (ERM) framework — COSO ERM — describes a continuous loop: establishing context & objectives, identifying risk, assessing/quantifying, responding, monitoring & reporting. AI can assist at nearly every step, though maturity varies significantly.",
            "Risk identification is where AI currently delivers the clearest value: scanning large volumes of unstructured data (news, internal reports, operational data, social media) to surface emerging risks that periodic manual surveys (often annual) tend to miss due to lag.",
            "Per Deloitte and McKinsey reports on AI in risk management, quantifying financial/credit risk has used AI/machine learning for a long time (forecasting models), while quantifying non-financial risk (reputational, operational, people risk) is still maturing due to how hard it is to measure.",
            "A key trend: the shift from \"reactive\" risk management (assessing risk that has already occurred, or on a fixed cycle) to \"continuous risk sensing\" — made possible by AI processing real-time data at a much lower cost than before.",
            "COSO — the organization behind this ERM framework — also publishes \"Realize the Full Potential of Artificial Intelligence\", applying ERM principles directly to AI strategy and deployment, plus guidance on internal control over generative AI. Another useful complementary tool is the OECD's 5-dimension classification (People & Planet, Economic Context, Data & Input, AI Model, Task & Output) — helpful for fully mapping the affected parties and AI actors in a system before assessing its risk.",
          ],
        },
        examples: [
          {
            title: { vi: "Vòng đời ERM và mức độ hỗ trợ của AI", en: "ERM lifecycle and AI support level" },
            body: {
              vi: [
                "Nhận diện: AI mạnh — quét dữ liệu phi cấu trúc quy mô lớn.",
                "Định lượng tài chính: AI mạnh — mô hình dự báo đã trưởng thành.",
                "Định lượng phi tài chính: AI đang phát triển — cần kết hợp phán đoán chuyên gia.",
                "Ứng phó & quyết định: con người chủ đạo — AI cung cấp kịch bản, con người chọn.",
                "Giám sát & báo cáo: AI mạnh — tự động hoá tổng hợp và cảnh báo.",
              ],
              en: [
                "Identification: AI strong — large-scale unstructured data scanning.",
                "Financial quantification: AI strong — mature forecasting models.",
                "Non-financial quantification: AI developing — needs expert judgment combined in.",
                "Response & decision: human-led — AI supplies scenarios, humans choose.",
                "Monitoring & reporting: AI strong — automated synthesis and alerting.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "AI hỗ trợ mạnh nhất ở khâu nhận diện rủi ro và giám sát/báo cáo trong vòng đời ERM.",
            "Định lượng rủi ro phi tài chính vẫn cần kết hợp chặt với phán đoán chuyên gia.",
            "Xu hướng chuyển từ quản trị rủi ro theo chu kỳ sang giám sát liên tục nhờ AI.",
          ],
          en: [
            "AI provides the strongest support in risk identification and monitoring/reporting within the ERM lifecycle.",
            "Quantifying non-financial risk still requires close integration with expert judgment.",
            "There's a shift from cyclical risk management to continuous monitoring, enabled by AI.",
          ],
        },
      },
      {
        slug: "nhan-dien-dinh-luong-rui-ro-ai",
        title: { vi: "Nhận diện & định lượng rủi ro bằng AI", en: "Identifying and quantifying risk with AI" },
        summary: {
          vi: "Kỹ thuật risk sensing thời gian thực và cách xây dựng ma trận rủi ro có hỗ trợ của AI.",
          en: "Real-time risk sensing techniques and how to build an AI-assisted risk matrix.",
        },
        durationMin: 15,
        level: "trung-cap",
        body: {
          vi: [
            "\"Risk sensing\" là kỹ thuật dùng AI để liên tục quét các nguồn dữ liệu bên ngoài (tin tức ngành, thay đổi quy định pháp luật, biến động thị trường, hoạt động đối thủ cạnh tranh) và bên trong (dữ liệu vận hành, báo cáo sự cố, khảo sát nội bộ) để phát hiện tín hiệu rủi ro sớm hơn quy trình đánh giá rủi ro định kỳ truyền thống.",
            "Một kỹ thuật thực tế: dùng AI để tự động phân loại các sự kiện được phát hiện vào các danh mục rủi ro chuẩn của tổ chức (ví dụ: rủi ro chiến lược, tài chính, vận hành, tuân thủ, danh tiếng), giúp đội quản trị rủi ro ưu tiên xử lý thay vì phải đọc và phân loại thủ công hàng trăm tín hiệu mỗi tuần.",
            "Về định lượng, AI có thể hỗ trợ ước lượng xác suất và mức độ ảnh hưởng bằng cách phân tích dữ liệu lịch sử về các sự kiện tương tự (trong tổ chức hoặc ngành), nhưng con số AI đưa ra nên được xem là \"điểm khởi đầu có cơ sở dữ liệu\" để chuyên gia rủi ro điều chỉnh dựa trên bối cảnh đặc thù, không phải con số cuối cùng để báo cáo trực tiếp lên hội đồng quản trị.",
            "Ma trận rủi ro (risk matrix) hỗ trợ AI thường trực quan hoá rủi ro theo hai trục xác suất và mức độ ảnh hưởng, với khả năng AI tự động cập nhật vị trí của từng rủi ro khi có dữ liệu mới — biến ma trận từ một tài liệu tĩnh cập nhật hàng quý thành một công cụ sống động.",
          ],
          en: [
            "\"Risk sensing\" is a technique that uses AI to continuously scan external data sources (industry news, regulatory changes, market shifts, competitor activity) and internal ones (operational data, incident reports, internal surveys) to detect risk signals earlier than traditional periodic risk assessments.",
            "One practical technique: use AI to automatically classify detected events into the organization's standard risk categories (e.g. strategic, financial, operational, compliance, reputational), helping the risk team prioritize instead of manually reading and categorizing hundreds of signals per week.",
            "For quantification, AI can help estimate probability and impact by analyzing historical data on similar events (within the organization or industry), but AI-generated numbers should be treated as a \"data-informed starting point\" for risk experts to adjust based on specific context — not a final figure to report directly to the board.",
            "An AI-assisted risk matrix typically visualizes risk along two axes — probability and impact — with AI able to automatically update each risk's position as new data arrives, turning the matrix from a static document updated quarterly into a living tool.",
          ],
        },
        examples: [
          {
            title: { vi: "Ví dụ: quy trình risk sensing tuần", en: "Example: weekly risk sensing workflow" },
            body: {
              vi: [
                "Thứ Hai: AI tổng hợp các tín hiệu mới từ tuần trước (tin tức ngành, thay đổi quy định, sự cố nội bộ).",
                "AI phân loại theo danh mục rủi ro và gắn cờ mức độ khẩn cấp sơ bộ.",
                "Đội quản trị rủi ro rà soát danh sách đã phân loại, xác nhận hoặc điều chỉnh mức độ ưu tiên.",
                "Các rủi ro mức độ cao được đưa vào cuộc họp rà soát rủi ro hàng tuần với ban điều hành liên quan.",
              ],
              en: [
                "Monday: AI compiles new signals from the past week (industry news, regulatory changes, internal incidents).",
                "AI classifies them by risk category and flags a preliminary urgency level.",
                "The risk team reviews the classified list, confirming or adjusting priority.",
                "High-priority risks are brought into the weekly risk review meeting with relevant leadership.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Risk sensing giúp phát hiện tín hiệu rủi ro sớm hơn chu kỳ đánh giá định kỳ truyền thống.",
            "Con số định lượng do AI đưa ra là điểm khởi đầu, cần điều chỉnh bởi chuyên gia.",
            "Ma trận rủi ro động (cập nhật liên tục) hữu ích hơn tài liệu tĩnh cập nhật theo quý.",
          ],
          en: [
            "Risk sensing helps detect risk signals earlier than traditional periodic assessment cycles.",
            "AI-generated quantitative figures are a starting point, to be adjusted by experts.",
            "A dynamic, continuously updated risk matrix is more useful than a static quarterly document.",
          ],
        },
      },
      {
        slug: "tu-dong-hoa-compliance",
        title: { vi: "Tự động hoá compliance, kiểm soát nội bộ và báo cáo rủi ro", en: "Automating compliance, internal controls, and risk reporting" },
        summary: {
          vi: "Ứng dụng AI trong giám sát tuân thủ liên tục, kiểm tra kiểm soát nội bộ, và tạo báo cáo rủi ro cho hội đồng quản trị.",
          en: "Applying AI to continuous compliance monitoring, internal control testing, and board risk reporting.",
        },
        durationMin: 14,
        level: "trung-cap",
        body: {
          vi: [
            "Giám sát tuân thủ liên tục (continuous compliance monitoring): thay vì kiểm tra mẫu ngẫu nhiên theo quý hoặc năm, AI có thể quét 100% giao dịch/hoạt động theo các quy tắc đã định nghĩa, gắn cờ ngoại lệ để con người xem xét — tăng độ phủ kiểm soát mà không tăng tương ứng nguồn lực.",
            "Với kiểm soát nội bộ, AI có thể hỗ trợ kiểm thử tự động (automated control testing) — ví dụ kiểm tra xem quy trình phê duyệt chi tiêu có được tuân thủ đúng hạn mức phân quyền không — chạy liên tục thay vì lấy mẫu thủ công định kỳ của kiểm toán nội bộ.",
            "AI hỗ trợ soạn thảo báo cáo rủi ro cho hội đồng quản trị bằng cách tổng hợp dữ liệu từ nhiều hệ thống thành một bản tóm tắt dễ đọc, làm nổi bật các thay đổi đáng chú ý so với kỳ trước — nhưng phần diễn giải ý nghĩa chiến lược và khuyến nghị hành động vẫn cần chuyên gia quản trị rủi ro cấp cao xác nhận trước khi trình.",
            "Một cân nhắc quan trọng theo các khung hướng dẫn compliance hiện đại: AI dùng để giám sát tuân thủ cần chính nó được quản trị chặt chẽ — bao gồm việc ghi lại (log) quyết định gắn cờ của AI để có thể giải trình sau này, tránh tình huống \"hộp đen\" khi cơ quan quản lý yêu cầu giải thích lý do một giao dịch bị/không bị gắn cờ.",
          ],
          en: [
            "Continuous compliance monitoring: instead of checking random samples quarterly or annually, AI can scan 100% of transactions/activities against defined rules and flag exceptions for human review — increasing control coverage without a proportional increase in resources.",
            "For internal controls, AI can assist with automated control testing — e.g. checking whether spending approval processes followed authorization limits correctly — running continuously instead of internal audit's periodic manual sampling.",
            "AI helps draft board risk reports by synthesizing data from multiple systems into an easy-to-read summary, highlighting notable changes versus the prior period — but the strategic interpretation and recommended actions still need confirmation from a senior risk professional before submission.",
            "An important consideration under modern compliance guidance frameworks: AI used for compliance monitoring must itself be tightly governed — including logging the AI's flagging decisions so they can be explained later, avoiding a \"black box\" situation when a regulator asks why a transaction was or wasn't flagged.",
          ],
        },
        examples: [
          {
            title: { vi: "Ví dụ: kiểm soát chi tiêu tự động", en: "Example: automated spend control" },
            body: {
              vi: [
                "Quy tắc: mọi khoản chi trên 50 triệu đồng cần 2 cấp phê duyệt.",
                "AI quét 100% giao dịch, gắn cờ các trường hợp chỉ có 1 cấp phê duyệt.",
                "Kiểm toán nội bộ nhận danh sách gắn cờ hàng tuần thay vì lấy mẫu 5% giao dịch mỗi quý.",
                "Log ghi lại lý do AI gắn cờ từng giao dịch để phục vụ giải trình khi cần.",
              ],
              en: [
                "Rule: any spend over a defined threshold requires 2 levels of approval.",
                "AI scans 100% of transactions, flagging cases with only 1 approval level.",
                "Internal audit receives the flagged list weekly instead of sampling 5% of transactions per quarter.",
                "A log records why AI flagged each transaction, for explanation when needed.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "Giám sát liên tục 100% giao dịch tăng độ phủ kiểm soát so với lấy mẫu thủ công.",
            "Diễn giải chiến lược và khuyến nghị hành động vẫn cần chuyên gia rủi ro cấp cao xác nhận.",
            "AI dùng cho compliance cần được ghi log đầy đủ để có thể giải trình với cơ quan quản lý.",
          ],
          en: [
            "Continuous 100% transaction monitoring increases control coverage versus manual sampling.",
            "Strategic interpretation and recommended actions still need senior risk expert confirmation.",
            "AI used for compliance needs full logging so decisions can be explained to regulators.",
          ],
        },
      },
      {
        slug: "quan-tri-rui-ro-cua-ai",
        title: { vi: "Quản trị rủi ro của chính AI (AI Governance)", en: "Governing the risks of AI itself" },
        summary: {
          vi: "Khi AI trở thành một nguồn rủi ro doanh nghiệp mới cần được quản trị, không chỉ là công cụ quản trị rủi ro.",
          en: "When AI itself becomes a new category of enterprise risk to be governed — not just a risk management tool.",
        },
        durationMin: 14,
        level: "nang-cao",
        body: {
          vi: [
            "Khi tổ chức áp dụng AI rộng rãi, AI tự nó trở thành một nguồn rủi ro doanh nghiệp mới cần đưa vào sổ đăng ký rủi ro (risk register) — bên cạnh vai trò là công cụ hỗ trợ quản trị rủi ro. Các khung quản trị AI hiện nay (ví dụ NIST AI Risk Management Framework) đề xuất đánh giá rủi ro AI theo bốn nhóm: hợp lệ & tin cậy (validity & reliability), an toàn (safety), công bằng & giảm thiên vị (fairness), và minh bạch & khả năng giải trình (transparency & accountability).",
            "Một rủi ro cụ thể cần đưa vào quản trị: \"model drift\" — hiệu suất của mô hình AI suy giảm theo thời gian khi dữ liệu thực tế thay đổi so với dữ liệu huấn luyện ban đầu. Với các mô hình dùng cho quyết định quan trọng (định giá rủi ro tín dụng, sàng lọc tuyển dụng), cần có quy trình giám sát và tái huấn luyện định kỳ, không phải triển khai một lần rồi bỏ quên.",
            "Rủi ro chuỗi cung ứng AI (AI supply chain risk) cũng ngày càng được chú ý: khi tổ chức dùng mô hình AI của bên thứ ba, cần hiểu rõ dữ liệu huấn luyện đến từ đâu, mô hình được kiểm định thế nào, và trách nhiệm pháp lý khi mô hình gây ra lỗi thuộc về ai — những câu hỏi cần đưa vào quy trình đánh giá nhà cung cấp (vendor due diligence).",
            "Về mặt cơ cấu quản trị, thực hành đang nổi lên (được phản ánh trong các khảo sát của Deloitte và McKinsey về AI governance) là thành lập một hội đồng/uỷ ban quản trị AI liên chức năng (thường gồm đại diện Rủi ro, Pháp chế, CNTT, và các đơn vị nghiệp vụ chính) chịu trách nhiệm phê duyệt trường hợp sử dụng AI có rủi ro cao, thay vì để từng phòng ban tự quyết định độc lập.",
            "Với đội Corporate Affairs, HR và Quản trị rủi ro — những người có thể vừa là người dùng AI, vừa là người phải quản trị rủi ro AI cho tổ chức — vai trò kép này đòi hỏi vừa thành thạo công cụ, vừa duy trì tư duy phản biện độc lập về giới hạn và rủi ro của chính công cụ mình đang dùng.",
            "Cụ thể hơn về NIST AI RMF: khung này tổ chức hành động quản trị theo bốn chức năng — Govern (thiết lập chính sách, vai trò, trách nhiệm và văn hoá quản trị AI ở cấp tổ chức), Map (xác định bối cảnh, mục đích sử dụng, người dùng và tác động tiềm ẩn của một hệ thống AI cụ thể), Measure (đo hiệu năng, độ tin cậy và mức rủi ro bằng phương pháp phù hợp), và Manage (ưu tiên, xử lý và theo dõi rủi ro theo thời gian). Đây không phải một checklist tuyến tính làm một lần, mà là bốn nhóm hành động lặp lại theo vòng đời hệ thống.",
            "Ba tiêu chuẩn ISO bổ trợ cho NIST theo hướng cụ thể hơn ở tầng tổ chức: ISO/IEC 42001 quy định cách một tổ chức thiết lập, vận hành và cải tiến liên tục một hệ thống quản lý AI (chính sách, mục tiêu, trách nhiệm, quy trình); còn ISO/IEC 42005 hướng dẫn đánh giá tác động của một use case AI cụ thể đối với cá nhân, nhóm và xã hội. Về mặt pháp lý, EU AI Act phân loại các use case AI theo bốn mức rủi ro (không chấp nhận được, cao, giới hạn, tối thiểu) và quy định nghĩa vụ giám sát của con người (human oversight) tương ứng với từng mức — một điểm tham chiếu hữu ích ngay cả với doanh nghiệp ngoài EU khi làm việc với đối tác quốc tế.",
          ],
          en: [
            "As organizations adopt AI broadly, AI itself becomes a new category of enterprise risk that belongs on the risk register — alongside its role as a risk-management tool. Current AI governance frameworks (e.g. the NIST AI Risk Management Framework) suggest evaluating AI risk across four areas: validity & reliability, safety, fairness (bias mitigation), and transparency & accountability.",
            "One specific risk to govern: \"model drift\" — an AI model's performance degrading over time as real-world data diverges from its original training data. For models used in important decisions (credit risk pricing, hiring screening), there needs to be ongoing monitoring and periodic retraining — not a one-time deployment that's then left unattended.",
            "AI supply chain risk is also drawing more attention: when an organization uses a third-party AI model, it needs to understand where the training data came from, how the model was validated, and who bears legal liability when the model causes an error — questions that belong in vendor due diligence.",
            "On governance structure, an emerging practice (reflected in Deloitte and McKinsey surveys on AI governance) is establishing a cross-functional AI governance committee (typically including Risk, Legal, IT, and key business units) responsible for approving high-risk AI use cases, rather than letting each department decide independently.",
            "For Corporate Affairs, HR, and Risk Management teams — who may be both users of AI and the people responsible for governing AI risk for the organization — this dual role requires both proficiency with the tools and independent critical thinking about the limits and risks of those very tools.",
            "More specifically on the NIST AI RMF: the framework organizes governance action into four functions — Govern (establish policy, roles, responsibilities, and an organization-wide AI governance culture), Map (identify the context, intended use, users, and potential impact of a specific AI system), Measure (assess performance, reliability, and risk level using appropriate methods), and Manage (prioritize, respond to, and track risk over time). This isn't a one-time linear checklist, but four recurring groups of action across the system's lifecycle.",
            "Three ISO standards complement NIST with more organization-level specificity: ISO/IEC 42001 specifies how an organization establishes, operates, and continuously improves an AI management system (policy, objectives, responsibilities, processes); ISO/IEC 42005 guides assessing the impact of a specific AI use case on individuals, groups, and society. Legally, the EU AI Act classifies AI use cases into four risk tiers (unacceptable, high, limited, minimal) and sets human-oversight obligations for each tier — a useful reference point even for non-EU organizations working with international partners.",
          ],
        },
        examples: [
          {
            title: { vi: "Mẫu tiêu chí phê duyệt trường hợp sử dụng AI rủi ro cao", en: "Sample approval criteria for high-risk AI use cases" },
            body: {
              vi: [
                "Trường hợp sử dụng có ảnh hưởng trực tiếp đến quyền lợi cá nhân (tuyển dụng, tín dụng, kỷ luật) → cần phê duyệt của hội đồng quản trị AI.",
                "Trường hợp sử dụng nội bộ, dữ liệu giả lập, không ảnh hưởng đến bên thứ ba → phê duyệt ở cấp phòng ban.",
                "Mọi trường hợp dùng mô hình bên thứ ba xử lý dữ liệu cá nhân → bắt buộc rà soát của Pháp chế và bảo mật thông tin trước khi triển khai.",
              ],
              en: [
                "Use cases directly affecting individual rights (hiring, credit, discipline) → require AI governance committee approval.",
                "Internal use cases, synthetic data, no third-party impact → department-level approval.",
                "Any use of a third-party model processing personal data → mandatory Legal and information-security review before deployment.",
              ],
            },
          },
        ],
        keyTakeaways: {
          vi: [
            "AI cần được đưa vào sổ đăng ký rủi ro như một nguồn rủi ro, không chỉ là công cụ quản trị rủi ro.",
            "Model drift và rủi ro chuỗi cung ứng AI đòi hỏi giám sát liên tục, không phải kiểm tra một lần.",
            "Hội đồng quản trị AI liên chức năng giúp thống nhất tiêu chuẩn phê duyệt trên toàn tổ chức.",
          ],
          en: [
            "AI must be entered on the risk register as a risk source, not just a risk-management tool.",
            "Model drift and AI supply chain risk require continuous monitoring, not a one-time check.",
            "A cross-functional AI governance committee helps unify approval standards across the organization.",
          ],
        },
      },
    ],
  },
];

export const getModuleBySlug = (slug: string) => modules.find((m) => m.slug === slug);

export const getLessonBySlug = (moduleSlug: string, lessonSlug: string) => {
  const mod = getModuleBySlug(moduleSlug);
  return mod?.lessons.find((l) => l.slug === lessonSlug);
};

export const totalLessonCount = modules.reduce((sum, m) => sum + m.lessons.length, 0);
