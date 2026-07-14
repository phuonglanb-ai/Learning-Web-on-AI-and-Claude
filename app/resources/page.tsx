"use client";

import { ExternalLink, Landmark } from "lucide-react";
import { useLanguage } from "@/context/AppProviders";
import { resources } from "@/data/resources";
import { pick } from "@/lib/utils";

export default function ResourcesPage() {
  const { t, locale } = useLanguage();
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-ink-900">{t.resources.title}</h1>
      <p className="mt-3 max-w-2xl text-ink-600">{t.resources.subtitle}</p>

      <div className="mt-10 space-y-4">
        {resources.map((r, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 rounded-xl2 border border-ink-200 bg-white p-5 shadow-card"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
              <Landmark size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                {r.organization}
              </p>
              <h2 className="mt-1 font-semibold text-ink-900">{pick(r.title, locale)}</h2>
              <p className="mt-1 text-sm text-ink-500">{pick(r.type, locale)}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{pick(r.note, locale)}</p>
              {r.url && (
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  {r.url.replace("https://", "")}
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
