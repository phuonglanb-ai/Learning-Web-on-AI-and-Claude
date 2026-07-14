"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/AppProviders";
import { getModuleBySlug } from "@/data/modules";
import { pick, cn } from "@/lib/utils";
import { moduleColorStyles } from "@/lib/colors";
import { ModuleIcon } from "@/components/icon-map";
import { LessonListItem } from "@/components/LessonListItem";

export default function ModuleDetailPage({ params }: { params: { module: string } }) {
  const { t, locale } = useLanguage();
  const mod = getModuleBySlug(params.module);

  if (!mod) return notFound();

  const styles = moduleColorStyles[mod.color];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/modules"
        className="focus-ring inline-flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-800"
      >
        <ArrowLeft size={15} />
        {t.nav.modules}
      </Link>

      <div className="mt-6 flex items-start gap-4">
        <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-xl2", styles.iconBg)}>
          <ModuleIcon name={mod.icon} className="h-7 w-7" />
        </span>
        <div>
          <h1 className="text-2xl font-bold text-ink-900 sm:text-3xl">{pick(mod.title, locale)}</h1>
          <p className="mt-2 text-ink-600">{pick(mod.description, locale)}</p>
        </div>
      </div>

      <div className="mt-10 space-y-3">
        {mod.lessons.map((lesson) => (
          <LessonListItem key={lesson.slug} moduleSlug={mod.slug} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
