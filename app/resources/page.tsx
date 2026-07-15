"use client";

import { ExternalLink, Landmark } from "lucide-react";
import { useLanguage } from "@/context/AppProviders";
import { resources } from "@/data/resources";
import { modules } from "@/data/modules";
import { pick } from "@/lib/utils";
import { ResourceTopic } from "@/lib/types";
import { PageHeroHeader } from "@/components/PageHeroHeader";

export default function ResourcesPage() {
  const { t, locale } = useLanguage();

  const topicOrder: ResourceTopic[] = [
    "general",
    ...modules.map((m) => m.slug as ResourceTopic),
  ];

  const topicLabel = (topic: ResourceTopic): string => {
    if (topic === "general") return t.resources.topicGeneral;
    const mod = modules.find((m) => m.slug === topic);
    return mod ? pick(mod.title, locale) : topic;
  };

  return (
    <div>
      <PageHeroHeader title={t.resources.title} subtitle={t.resources.subtitle} />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {topicOrder.map((topic) => {
            const items = resources.filter((r) => r.topic === topic);
            if (items.length === 0) return null;
            return (
              <section key={topic}>
                <h2 className="text-lg font-bold text-ink-900">{topicLabel(topic)}</h2>
                <div className="mt-4 space-y-4">
                  {items.map((r, idx) => (
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
                        <h3 className="mt-1 font-semibold text-ink-900">{pick(r.title, locale)}</h3>
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
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
