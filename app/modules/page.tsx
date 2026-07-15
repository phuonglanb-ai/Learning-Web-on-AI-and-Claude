"use client";

import { useLanguage } from "@/context/AppProviders";
import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";
import { PageHeroHeader } from "@/components/PageHeroHeader";

export default function ModulesPage() {
  const { t } = useLanguage();
  return (
    <div>
      <PageHeroHeader title={t.nav.modules} subtitle={t.home.heroSubtitle} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <ModuleCard key={m.slug} module={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
