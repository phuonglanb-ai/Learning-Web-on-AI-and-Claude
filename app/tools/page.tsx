"use client";

import { useLanguage } from "@/context/AppProviders";
import { PromptPlayground } from "@/components/tools/PromptPlayground";
import { RiskMatrixTool } from "@/components/tools/RiskMatrixTool";
import { ChecklistTool } from "@/components/tools/ChecklistTool";
import { allChecklists } from "@/data/tools";
import { PageHeroHeader } from "@/components/PageHeroHeader";

export default function ToolsPage() {
  const { t } = useLanguage();
  return (
    <div>
      <PageHeroHeader title={t.tools.title} subtitle={t.tools.subtitle} />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <PromptPlayground />
          <RiskMatrixTool />
          {allChecklists.map((c) => (
            <ChecklistTool key={c.storageKey} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
