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
}

export interface Module {
  slug: string;
  icon: string;
  color: "brand" | "accent" | "amber" | "rose";
  title: Localized;
  description: Localized;
  lessons: Lesson[];
}

export interface Resource {
  organization: string;
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
