export type Locale = "vi" | "en";

export type Role = "admin" | "expert" | "learner";

export interface Localized {
  vi: string;
  en: string;
}

export interface LocalizedList {
  vi: string[];
  en: string[];
}

export interface Example {
  title: Localized;
  body: LocalizedList;
}

export interface Lesson {
  slug: string;
  title: Localized;
  summary: Localized;
  durationMin: number;
  level: "co-ban" | "trung-cap" | "nang-cao";
  body: LocalizedList;
  examples: Example[];
  keyTakeaways: LocalizedList;
  /** Optional public YouTube video ID for a lesson walkthrough/demo. */
  videoId?: string;
}

export interface Module {
  slug: string;
  icon: string;
  color: "brand" | "accent" | "amber" | "rose";
  title: Localized;
  description: Localized;
  lessons: Lesson[];
}

export type ResourceTopic =
  | "general"
  | "vibe-coding"
  | "corporate-affairs"
  | "hr-people-experience"
  | "quan-tri-rui-ro";

export interface Resource {
  organization: string;
  topic: ResourceTopic;
  title: Localized;
  type: Localized;
  note: Localized;
  url?: string;
}

export interface FaqItem {
  question: Localized;
  answer: Localized;
  tags: string[];
}

export interface FeedbackItem {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}
