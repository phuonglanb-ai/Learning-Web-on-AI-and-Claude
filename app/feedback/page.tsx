"use client";

import { useEffect, useState, FormEvent } from "react";
import { MessageSquarePlus, Trash2 } from "lucide-react";
import { useLanguage } from "@/context/AppProviders";
import { FeedbackItem } from "@/lib/types";
import { PageHeroHeader } from "@/components/PageHeroHeader";

const STORAGE_KEY = "ai-hub-feedback";

export default function FeedbackPage() {
  const { t, locale } = useLanguage();
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        // ignore malformed local storage
      }
    }
  }, []);

  function persist(next: FeedbackItem[]) {
    setItems(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    const entry: FeedbackItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toLocaleString(locale === "vi" ? "vi-VN" : "en-US"),
    };
    persist([entry, ...items]);
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  }

  function handleDelete(id: string) {
    persist(items.filter((i) => i.id !== id));
  }

  return (
    <div>
      <PageHeroHeader title={t.feedback.title} subtitle={t.feedback.subtitle} />
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 rounded-xl2 border border-ink-200 bg-white p-6 shadow-card"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-ink-500">{t.feedback.nameLabel}</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.feedback.namePlaceholder}
              className="focus-ring mt-1 block w-full rounded-md border border-ink-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink-500">{t.feedback.emailLabel}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.feedback.emailPlaceholder}
              className="focus-ring mt-1 block w-full rounded-md border border-ink-200 px-3 py-2 text-sm"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-ink-500">{t.feedback.messageLabel}</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.feedback.messagePlaceholder}
            rows={5}
            className="focus-ring mt-1 block w-full rounded-md border border-ink-200 px-3 py-2 text-sm"
          />
        </div>
        <button
          type="submit"
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-cta-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cta-600"
        >
          <MessageSquarePlus size={16} />
          {t.feedback.submit}
        </button>
        {submitted && <p className="text-sm font-medium text-accent-600">{t.feedback.submitted}</p>}
        <p className="text-xs text-ink-400">{t.feedback.savedNote}</p>
      </form>

      <section className="mt-8">
        <h2 className="font-semibold text-ink-900">{t.feedback.listTitle}</h2>
        {items.length === 0 ? (
          <p className="mt-2 text-sm text-ink-500">{t.feedback.empty}</p>
        ) : (
          <div className="mt-3 space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-ink-100 bg-white p-4 shadow-card"
              >
                <div className="min-w-0">
                  <p className="text-sm text-ink-800">{item.message}</p>
                  <p className="mt-1 text-xs text-ink-400">
                    {item.name || "—"} · {item.createdAt}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="focus-ring shrink-0 rounded p-1.5 text-ink-400 hover:bg-ink-100 hover:text-rose-600"
                  aria-label="Delete"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
      </div>
    </div>
  );
}
