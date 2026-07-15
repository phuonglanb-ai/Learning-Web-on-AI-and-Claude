"use client";

import Link from "next/link";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Lesson } from "@/lib/types";
import { useLanguage, useProgress } from "@/context/AppProviders";
import { pick, cn } from "@/lib/utils";

export function LessonListItem({ moduleSlug, lesson }: { moduleSlug: string; lesson: Lesson }) {
  const { locale, t } = useLanguage();
  const { isComplete } = useProgress();
  const done = isComplete(`${moduleSlug}/${lesson.slug}`);

  return (
    <Link
      href={`/modules/${moduleSlug}/${lesson.slug}`}
      className="focus-ring group flex items-start gap-3 rounded-lg border border-ink-100 bg-white p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
    >
      <span className="mt-0.5 shrink-0 text-ink-400 group-hover:text-brand-500">
        {done ? <CheckCircle2 className="text-accent-500" size={20} /> : <Circle size={20} />}
      </span>
      <span className="flex-1">
        <span className="block font-medium text-ink-900">{pick(lesson.title, locale)}</span>
        <span className="mt-1 block text-sm text-ink-500">{pick(lesson.summary, locale)}</span>
        <span className="mt-2 flex flex-wrap items-center gap-3 text-xs text-ink-400">
          <span className="inline-flex items-center gap-1">
            <Clock size={13} aria-hidden="true" />
            {lesson.durationMin} {t.lesson.duration}
          </span>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 font-medium",
              lesson.level === "co-ban" && "bg-accent-100 text-accent-700",
              lesson.level === "trung-cap" && "bg-amber-100 text-amber-700",
              lesson.level === "nang-cao" && "bg-rose-100 text-rose-700"
            )}
          >
            {t.lesson.level[lesson.level]}
          </span>
        </span>
      </span>
    </Link>
  );
}
