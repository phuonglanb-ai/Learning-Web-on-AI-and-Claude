"use client";

import { useLanguage } from "@/context/AppProviders";
import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";

export default function ModulesPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-ink-900">{t.nav.modules}</h1>
        <p className="mt-3 text-ink-600">{t.home.heroSubtitle}</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m) => (
          <ModuleCard key={m.slug} module={m} />
        ))}
      </div>
    </div>
  );
}
