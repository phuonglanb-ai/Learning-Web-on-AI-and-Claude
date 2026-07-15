"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Module } from "@/lib/types";
import { useLanguage, useProgress } from "@/context/AppProviders";
import { pick } from "@/lib/utils";
import { moduleColorStyles } from "@/lib/colors";
import { ModuleIcon } from "@/components/icon-map";
import { cn } from "@/lib/utils";

export function ModuleCard({ module }: { module: Module }) {
  const { locale, t } = useLanguage();
  const { isComplete } = useProgress();
  const styles = moduleColorStyles[module.color];
  const completedCount = module.lessons.filter((l) => isComplete(`${module.slug}/${l.slug}`)).length;
  const totalMinutes = module.lessons.reduce((sum, l) => sum + l.durationMin, 0);

  return (
    <Link
      href={`/modules/${module.slug}`}
      className={cn(
        "group focus-ring flex flex-col rounded-xl2 border bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-floating",
        styles.border
      )}
    >
      <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg", styles.iconBg)}>
        <ModuleIcon name={module.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink-900">{pick(module.title, locale)}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{pick(module.description, locale)}</p>

      <div className="mt-5 flex items-center justify-between text-xs text-ink-500">
        <span>
          {module.lessons.length} {t.common.lessonsCount} · {totalMinutes} {t.common.minutes}
        </span>
        {completedCount > 0 && (
          <span className={cn("rounded-full px-2 py-0.5 font-medium", styles.badge)}>
            {completedCount}/{module.lessons.length}
          </span>
        )}
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
        <div
          className={cn("h-full rounded-full transition-all", styles.bgSolid)}
          style={{ width: `${(completedCount / module.lessons.length) * 100}%` }}
        />
      </div>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:gap-2 transition-all">
        {t.common.readMore}
        <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
