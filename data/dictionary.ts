import { Locale } from "@/lib/types";

interface DictionaryShape {
  siteName: string;
  siteTagline: string;
  nav: {
    home: string;
    modules: string;
    tools: string;
    resources: string;
    feedback: string;
    admin: string;
  };
  role: {
    label: string;
    admin: string;
    expert: string;
    learner: string;
  };
  lang: { vi: string; en: string };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaStart: string;
    ctaTools: string;
    statsModules: string;
    statsLessons: string;
    statsMinutes: string;
    whyTitle: string;
    why1Title: string;
    why1Body: string;
    why2Title: string;
    why2Body: string;
    why3Title: string;
    why3Body: string;
    modulesTitle: string;
    continueLearning: string;
  };
  lesson: {
    duration: string;
    level: { "co-ban": string; "trung-cap": string; "nang-cao": string };
    videoTitle: string;
    examplesTitle: string;
    takeawaysTitle: string;
    markComplete: string;
    completed: string;
    nextLesson: string;
    backToModule: string;
  };
  tools: { title: string; subtitle: string };
  resources: { title: string; subtitle: string; topicGeneral: string };
  admin: {
    title: string;
    subtitle: string;
    noAccessTitle: string;
    noAccessBody: string;
    addLesson: string;
    moduleLabel: string;
    titleLabel: string;
    noteLabel: string;
    save: string;
    savedNote: string;
    usersTitle: string;
    roleAdmin: string;
    roleExpert: string;
    roleLearner: string;
  };
  footer: { builtWith: string; extend: string };
  feedback: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitted: string;
    savedNote: string;
    listTitle: string;
    empty: string;
  };
  chatbot: {
    title: string;
    subtitle: string;
    placeholder: string;
    openLabel: string;
    noMatch: string;
    suggestedTitle: string;
  };
  common: { readMore: string; minutes: string; lessonsCount: string };
}

export const dictionary = {
  vi: {
    siteName: "AI Learning Hub",
    siteTagline: "Học Vibe Coding & AI Automation cho Corporate Affairs",
    nav: {
      home: "Trang chủ",
      modules: "Bài học",
      tools: "Công cụ demo",
      resources: "Tài nguyên",
      feedback: "Góp ý",
      admin: "Quản trị",
    },
    role: {
      label: "Vai trò",
      admin: "Quản trị viên",
      expert: "Chuyên gia",
      learner: "Người học",
    },
    lang: { vi: "Tiếng Việt", en: "English" },
    home: {
      heroTitle: "Học AI để làm việc thông minh hơn, không phải để làm nhiều hơn",
      heroSubtitle:
        "Nền tảng tự học về Vibe Coding và AI Automation dành cho Corporate Affairs, HR/People Experience và Quản trị rủi ro doanh nghiệp — thiết kế cho cả người mới và chuyên gia.",
      ctaStart: "Bắt đầu học",
      ctaTools: "Thử công cụ demo",
      statsModules: "chuyên đề",
      statsLessons: "bài học",
      statsMinutes: "phút nội dung",
      whyTitle: "Vì sao học ở đây?",
      why1Title: "Nội dung đáng tin cậy",
      why1Body: "Tổng hợp từ HBR, McKinsey, Deloitte, SHRM và tài liệu kỹ thuật chính thức về Claude.",
      why2Title: "Học đi đôi với hành",
      why2Body: "Mỗi bài học có ví dụ thực hành cụ thể, không chỉ lý thuyết suông.",
      why3Title: "Công cụ thử ngay",
      why3Body: "Trải nghiệm trực tiếp các công cụ demo minh hoạ khái niệm đã học.",
      modulesTitle: "Các chuyên đề",
      continueLearning: "Tiếp tục học",
    },
    lesson: {
      duration: "phút",
      level: { "co-ban": "Cơ bản", "trung-cap": "Trung cấp", "nang-cao": "Nâng cao" },
      videoTitle: "Video minh hoạ",
      examplesTitle: "Ví dụ thực hành",
      takeawaysTitle: "Điểm cần nhớ",
      markComplete: "Đánh dấu đã hoàn thành",
      completed: "Đã hoàn thành",
      nextLesson: "Bài tiếp theo",
      backToModule: "Quay lại chuyên đề",
    },
    tools: {
      title: "Công cụ demo",
      subtitle: "Trải nghiệm trực tiếp các ý tưởng đã học qua công cụ tương tác nhỏ, chạy hoàn toàn trong trình duyệt của bạn.",
    },
    resources: {
      title: "Tài nguyên tham khảo",
      subtitle: "Nguồn tổng hợp đáng tin cậy để đào sâu thêm sau khi học, chia theo từng chuyên đề.",
      topicGeneral: "Tổng quan & liên chuyên đề",
    },
    admin: {
      title: "Bảng quản trị nội dung",
      subtitle: "Chỉ quản trị viên và chuyên gia mới thấy được khu vực này — minh hoạ hệ thống phân quyền nội dung.",
      noAccessTitle: "Bạn cần quyền cao hơn",
      noAccessBody: "Hãy chuyển vai trò sang \"Quản trị viên\" hoặc \"Chuyên gia\" ở góc trên bên phải để xem khu vực này.",
      addLesson: "Thêm ghi chú bài học mới",
      moduleLabel: "Chuyên đề",
      titleLabel: "Tiêu đề",
      noteLabel: "Ghi chú nội dung",
      save: "Lưu (demo cục bộ)",
      savedNote: "Đã lưu vào trình duyệt của bạn (localStorage). Trong triển khai thật, dữ liệu này sẽ được gửi tới hệ thống quản trị nội dung / CMS trung tâm.",
      usersTitle: "Người dùng minh hoạ",
      roleAdmin: "Toàn quyền: thêm/sửa/xoá nội dung, quản lý người dùng, xem báo cáo.",
      roleExpert: "Có thể đề xuất/biên tập nội dung chuyên môn, không quản lý người dùng.",
      roleLearner: "Chỉ xem nội dung và dùng công cụ demo, theo dõi tiến độ cá nhân.",
    },
    footer: {
      builtWith: "Xây dựng với Claude — dễ dàng mở rộng thêm chuyên đề và tích hợp mới.",
      extend: "Mở rộng dự án",
    },
    feedback: {
      title: "Góp ý cải thiện website",
      subtitle: "Bạn thấy nội dung nào cần bổ sung, hoặc gặp lỗi gì trên trang? Hãy cho chúng tôi biết.",
      nameLabel: "Tên của bạn (không bắt buộc)",
      namePlaceholder: "Ví dụ: Lan",
      emailLabel: "Email liên hệ (không bắt buộc)",
      emailPlaceholder: "ban@congty.com",
      messageLabel: "Nội dung góp ý",
      messagePlaceholder: "Mô tả góp ý, đề xuất hoặc lỗi bạn gặp phải...",
      submit: "Gửi góp ý",
      submitted: "Đã ghi nhận góp ý của bạn, cảm ơn bạn!",
      savedNote: "Góp ý được lưu trong trình duyệt của bạn (localStorage) vì trang chưa có máy chủ backend. Trong triển khai thật, góp ý này sẽ được gửi tới hệ thống quản trị nội dung hoặc email quản trị viên.",
      listTitle: "Góp ý đã gửi từ trình duyệt này",
      empty: "Chưa có góp ý nào được gửi từ trình duyệt này.",
    },
    chatbot: {
      title: "Trợ lý học tập",
      subtitle: "Hỏi nhanh về các khái niệm trong khoá học (bản demo FAQ cục bộ)",
      placeholder: "Nhập câu hỏi của bạn...",
      openLabel: "Mở trợ lý học tập",
      noMatch: "Mình chưa có câu trả lời sẵn cho câu hỏi này trong bản demo. Hãy thử một trong các câu hỏi gợi ý bên dưới, hoặc xem trực tiếp trong các bài học liên quan.",
      suggestedTitle: "Câu hỏi gợi ý",
    },
    common: {
      readMore: "Xem chi tiết",
      minutes: "phút",
      lessonsCount: "bài học",
    },
  },
  en: {
    siteName: "AI Learning Hub",
    siteTagline: "Learn Vibe Coding & AI Automation for Corporate Affairs",
    nav: {
      home: "Home",
      modules: "Lessons",
      tools: "Demo Tools",
      resources: "Resources",
      feedback: "Feedback",
      admin: "Admin",
    },
    role: {
      label: "Role",
      admin: "Admin",
      expert: "Expert",
      learner: "Learner",
    },
    lang: { vi: "Tiếng Việt", en: "English" },
    home: {
      heroTitle: "Learn AI to work smarter, not just harder",
      heroSubtitle:
        "A self-paced learning platform on Vibe Coding and AI Automation for Corporate Affairs, HR/People Experience, and Enterprise Risk Management — built for beginners and experts alike.",
      ctaStart: "Start learning",
      ctaTools: "Try demo tools",
      statsModules: "modules",
      statsLessons: "lessons",
      statsMinutes: "minutes of content",
      whyTitle: "Why learn here?",
      why1Title: "Trustworthy content",
      why1Body: "Synthesized from HBR, McKinsey, Deloitte, SHRM, and official Claude technical documentation.",
      why2Title: "Learn by doing",
      why2Body: "Every lesson includes a concrete practical example, not just theory.",
      why3Title: "Try it now",
      why3Body: "Interact directly with demo tools that illustrate the concepts you just learned.",
      modulesTitle: "Modules",
      continueLearning: "Continue learning",
    },
    lesson: {
      duration: "min",
      level: { "co-ban": "Beginner", "trung-cap": "Intermediate", "nang-cao": "Advanced" },
      videoTitle: "Video walkthrough",
      examplesTitle: "Practical examples",
      takeawaysTitle: "Key takeaways",
      markComplete: "Mark as complete",
      completed: "Completed",
      nextLesson: "Next lesson",
      backToModule: "Back to module",
    },
    tools: {
      title: "Demo Tools",
      subtitle: "Try the concepts you just learned through small interactive tools that run entirely in your browser.",
    },
    resources: {
      title: "Reference Resources",
      subtitle: "Trustworthy sources to go deeper after each lesson, grouped by topic.",
      topicGeneral: "General & cross-topic",
    },
    admin: {
      title: "Content Admin Panel",
      subtitle: "Only admins and experts can see this area — illustrating the content permission system.",
      noAccessTitle: "You need a higher role",
      noAccessBody: "Switch your role to \"Admin\" or \"Expert\" in the top-right corner to view this area.",
      addLesson: "Add a new lesson note",
      moduleLabel: "Module",
      titleLabel: "Title",
      noteLabel: "Content note",
      save: "Save (local demo)",
      savedNote: "Saved to your browser (localStorage). In a real deployment, this would be sent to a central content management system / CMS.",
      usersTitle: "Sample users",
      roleAdmin: "Full access: add/edit/delete content, manage users, view reports.",
      roleExpert: "Can propose/edit subject-matter content, cannot manage users.",
      roleLearner: "View content and use demo tools only, tracks personal progress.",
    },
    footer: {
      builtWith: "Built with Claude — easy to extend with new modules and integrations.",
      extend: "Extend this project",
    },
    feedback: {
      title: "Suggest an improvement",
      subtitle: "Spot missing content or a bug on the site? Let us know.",
      nameLabel: "Your name (optional)",
      namePlaceholder: "e.g. Lan",
      emailLabel: "Contact email (optional)",
      emailPlaceholder: "you@company.com",
      messageLabel: "Your feedback",
      messagePlaceholder: "Describe your suggestion, request, or the bug you ran into...",
      submit: "Send feedback",
      submitted: "Thanks — your feedback has been recorded!",
      savedNote: "Feedback is saved in your browser (localStorage) since this site has no backend server yet. In a real deployment, this would be routed to a content management system or the admin's email.",
      listTitle: "Feedback sent from this browser",
      empty: "No feedback has been sent from this browser yet.",
    },
    chatbot: {
      title: "Learning Assistant",
      subtitle: "Quick answers to course concepts (local FAQ demo)",
      placeholder: "Type your question...",
      openLabel: "Open learning assistant",
      noMatch: "I don't have a ready answer for that in this demo. Try one of the suggested questions below, or check the related lessons directly.",
      suggestedTitle: "Suggested questions",
    },
    common: {
      readMore: "Read more",
      minutes: "min",
      lessonsCount: "lessons",
    },
  },
} satisfies Record<Locale, DictionaryShape>;

export type Dictionary = DictionaryShape;
