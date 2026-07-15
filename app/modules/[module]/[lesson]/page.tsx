"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, Lightbulb, ListChecks, PlayCircle } from "lucide-react";
import { useLanguage, useProgress } from "@/context/AppProviders";
import { getModuleBySlug, getLessonBySlug } from "@/data/modules";
import { pick, pickList, cn } from "@/lib/utils";

export default function LessonPage({
  params,
}: {
  params: { module: string; lesson: string };
}) {
  const { t, locale } = useLanguage();
  const { isComplete, toggleComplete } = useProgress();
  const mod = getModuleBySlug(params.module);
  const lesson = getLessonBySlug(params.module, params.lesson);

  if (!mod || !lesson) return notFound();

  const lessonKey = `${mod.slug}/${lesson.slug}`;
  const done = isComplete(lessonKey);
  const currentIndex = mod.lessons.findIndex((l) => l.slug === lesson.slug);
  const nextLesson = mod.lessons[currentIndex + 1];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href={`/modules/${mod.slug}`}
        className="focus-ring inline-flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-800"
      >
        <ArrowLeft size={15} />
        {t.lesson.backToModule}
      </Link>

      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-ink-400">
          <span className="inline-flex items-center gap-1">
            <Clock size={13} />
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
        </div>
        <h1 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">{pick(lesson.title, locale)}</h1>
        <p className="mt-3 text-ink-600">{pick(lesson.summary, locale)}</p>

        <button
          type="button"
          onClick={() => toggleComplete(lessonKey)}
          className={cn(
            "focus-ring mt-5 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            done ? "bg-accent-100 text-accent-700" : "border border-ink-200 text-ink-600 hover:bg-ink-50"
          )}
        >
          {done ? <CheckCircle2 size={16} /> : <Circle size={16} />}
          {done ? t.lesson.completed : t.lesson.markComplete}
        </button>
      </div>

      <article className="prose-lesson mt-8 border-t border-ink-100 pt-8">
        {pickList(lesson.body, locale).map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </article>

      {lesson.videoId && (
        <section className="mt-8">
          <h2 className="flex items-center gap-2 font-semibold text-ink-800">
            <PlayCircle size={18} />
            {t.lesson.videoTitle}
          </h2>
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl2 border border-ink-200 shadow-card">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${lesson.videoId}`}
              title={pick(lesson.title, locale)}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {lesson.examples.length > 0 && (
        <section className="mt-8 rounded-xl2 border border-brand-200 bg-brand-50/60 p-6">
          <h2 className="flex items-center gap-2 font-semibold text-brand-800">
            <Lightbulb size={18} />
            {t.lesson.examplesTitle}
          </h2>
          <div className="mt-4 space-y-5">
            {lesson.examples.map((ex, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold text-ink-800">{pick(ex.title, locale)}</h3>
                <ul className="mt-2 space-y-1.5">
                  {pickList(ex.body, locale).map((line, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-8 rounded-xl2 border border-ink-200 bg-white p-6">
        <h2 className="flex items-center gap-2 font-semibold text-ink-800">
          <ListChecks size={18} />
          {t.lesson.takeawaysTitle}
        </h2>
        <ul className="mt-4 space-y-2">
          {pickList(lesson.keyTakeaways, locale).map((line, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-500" />
              {line}
            </li>
          ))}
        </ul>
      </section>

      {nextLesson && (
        <Link
          href={`/modules/${mod.slug}/${nextLesson.slug}`}
          className="focus-ring group mt-10 flex items-center justify-between rounded-xl2 border border-ink-200 bg-white p-5 shadow-card hover:border-brand-300"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
              {t.lesson.nextLesson}
            </p>
            <p className="mt-1 font-semibold text-ink-900">{pick(nextLesson.title, locale)}</p>
          </div>
          <ArrowRight size={20} className="shrink-0 text-brand-500 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
