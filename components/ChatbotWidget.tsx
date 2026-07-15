"use client";

import { useState, useMemo, FormEvent } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useLanguage } from "@/context/AppProviders";
import { faqItems } from "@/data/faq";
import { pick, cn } from "@/lib/utils";

interface ChatMessage {
  role: "bot" | "user";
  text: string;
}

// Simple client-side keyword matcher against the local FAQ dataset.
// This stands in for a real AI-backed chatbot; swap `answerFor` for an
// API call to Claude when wiring up a live backend.
function answerFor(query: string, locale: "vi" | "en"): string | null {
  const normalized = query.toLowerCase();
  let best: { score: number; answer: string } | null = null;

  for (const item of faqItems) {
    const haystack = `${pick(item.question, locale)} ${item.tags.join(" ")}`.toLowerCase();
    const words = normalized.split(/\s+/).filter((w) => w.length > 2);
    const score = words.reduce((acc, w) => (haystack.includes(w) ? acc + 1 : acc), 0);
    if (score > 0 && (!best || score > best.score)) {
      best = { score, answer: pick(item.answer, locale) };
    }
  }

  return best?.answer ?? null;
}

export function ChatbotWidget() {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const suggested = useMemo(() => faqItems.slice(0, 4), []);

  function ask(question: string) {
    const answer = answerFor(question, locale) ?? t.chatbot.noMatch;
    setMessages((prev) => [...prev, { role: "user", text: question }, { role: "bot", text: answer }]);
    setInput("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    ask(input.trim());
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-xl2 border border-ink-200 bg-white shadow-floating">
          <div className="flex items-center justify-between border-b border-ink-100 bg-brand-500 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Bot size={18} aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold leading-tight">{t.chatbot.title}</p>
                <p className="text-[11px] leading-tight text-brand-100">{t.chatbot.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="focus-ring rounded p-1 hover:bg-brand-600"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.length === 0 && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                  {t.chatbot.suggestedTitle}
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  {suggested.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => ask(pick(item.question, locale))}
                      className="focus-ring rounded-lg border border-ink-200 px-3 py-2 text-left text-xs text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                    >
                      {pick(item.question, locale)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, idx) => (
              <div
                key={idx}
                className={cn("flex items-start gap-2", m.role === "user" && "flex-row-reverse")}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                    m.role === "bot" ? "bg-brand-100 text-brand-600" : "bg-ink-100 text-ink-600"
                  )}
                >
                  {m.role === "bot" ? <Bot size={13} /> : <User size={13} />}
                </span>
                <p
                  className={cn(
                    "max-w-[80%] rounded-lg px-3 py-2 text-xs leading-relaxed",
                    m.role === "bot" ? "bg-ink-100 text-ink-800" : "bg-brand-500 text-white"
                  )}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-ink-100 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chatbot.placeholder}
              className="focus-ring flex-1 rounded-md border border-ink-200 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-500 text-white hover:bg-brand-600"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-floating transition-transform hover:scale-105"
        aria-label={t.chatbot.openLabel}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
