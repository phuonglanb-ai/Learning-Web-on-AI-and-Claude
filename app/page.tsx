"use client";

import Link from "next/link";
import { ArrowRight, BookOpenCheck, Wrench, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/AppProviders";
import { modules, totalLessonCount } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";

export default function HomePage() {
  const { t } = useLanguage();
  const totalMinutes = modules.reduce(
    (sum, m) => sum + m.lessons.reduce((s, l) => s + l.durationMin, 0),
    0
  );

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-500 to-accent-400">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cta-500 px-3 py-1 text-xs font-semibold text-white">
              {t.siteTagline}
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-brand-100 sm:text-lg">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/modules"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-7 py-3 text-sm font-bold text-white shadow-floating hover:bg-cta-600"
              >
                {t.home.ctaStart}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/tools"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                {t.home.ctaTools}
              </Link>
            </div>

            <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4 text-center">
              <Stat value={modules.length} label={t.home.statsModules} />
              <Stat value={totalLessonCount} label={t.home.statsLessons} />
              <Stat value={totalMinutes} label={t.home.statsMinutes} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading className="text-center">{t.home.whyTitle}</SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <WhyCard
            icon={<BookOpenCheck size={22} />}
            title={t.home.why1Title}
            body={t.home.why1Body}
          />
          <WhyCard icon={<Wrench size={22} />} title={t.home.why2Title} body={t.home.why2Body} />
          <WhyCard
            icon={<ShieldCheck size={22} />}
            title={t.home.why3Title}
            body={t.home.why3Body}
          />
        </div>
      </section>

      <section className="border-t border-ink-100 bg-ink-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading>{t.home.modulesTitle}</SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <ModuleCard key={m.slug} module={m} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-ink-900">{children}</h2>
      <div
        className={`mt-3 h-1 w-14 rounded-full bg-cta-500 ${className?.includes("text-center") ? "mx-auto" : ""}`}
      />
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-brand-100">{label}</p>
    </div>
  );
}

function WhyCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl2 border border-ink-100 bg-white p-6 shadow-card">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
        {icon}
      </span>
      <h3 className="mt-4 font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p>
    </div>
  );
}
