"use client";

import { useLanguage } from "@/context/AppProviders";
import { PromptPlayground } from "@/components/tools/PromptPlayground";
import { RiskMatrixTool } from "@/components/tools/RiskMatrixTool";
import { ChecklistTool } from "@/components/tools/ChecklistTool";
import { allChecklists } from "@/data/tools";

export default function ToolsPage() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-ink-900">{t.tools.title}</h1>
      <p className="mt-3 max-w-2xl text-ink-600">{t.tools.subtitle}</p>

      <div className="mt-10 space-y-8">
        <PromptPlayground />
        <RiskMatrixTool />
        {allChecklists.map((c) => (
          <ChecklistTool key={c.storageKey} {...c} />
        ))}
      </div>
    </div>
  );
}
