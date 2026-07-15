"use client";

import { useEffect, useState } from "react";
import { ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/context/AppProviders";
import { Localized } from "@/lib/types";
import { pick, cn } from "@/lib/utils";

interface ChecklistToolProps {
  storageKey: string;
  title: Localized;
  subtitle: Localized;
  items: Localized[];
}

export function ChecklistTool({ storageKey, title, subtitle, items }: ChecklistToolProps) {
  const { locale } = useLanguage();
  const fullKey = `ai-hub-checklist-${storageKey}`;
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    const stored = window.localStorage.getItem(fullKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length === items.length) setChecked(parsed);
      } catch {
        // ignore malformed local storage
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullKey]);

  function toggle(idx: number) {
    setChecked((prev) => {
      const next = prev.map((v, i) => (i === idx ? !v : v));
      window.localStorage.setItem(fullKey, JSON.stringify(next));
      return next;
    });
  }

  const doneCount = checked.filter(Boolean).length;

  return (
    <div className="rounded-xl2 border border-ink-200 bg-white p-6 shadow-card">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
          <ClipboardCheck size={20} aria-hidden="true" />
        </span>
        <div className="flex-1">
          <h3 className="font-semibold text-ink-900">{pick(title, locale)}</h3>
          <p className="text-sm text-ink-500">{pick(subtitle, locale)}</p>
        </div>
        <span className="shrink-0 rounded-full bg-ink-100 px-2 py-1 text-xs font-medium text-ink-600">
          {doneCount}/{items.length}
        </span>
      </div>

      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>
            <label
              className={cn(
                "focus-ring flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 text-sm transition-colors",
                checked[idx]
                  ? "border-accent-200 bg-accent-50 text-ink-500 line-through"
                  : "border-ink-100 text-ink-700 hover:border-accent-200"
              )}
            >
              <input
                type="checkbox"
                checked={checked[idx]}
                onChange={() => toggle(idx)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-accent-500"
              />
              {pick(item, locale)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
