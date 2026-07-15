"use client";

import { useEffect, useState, FormEvent } from "react";
import { Lock, ShieldCheck, UserCog, GraduationCap, Trash2 } from "lucide-react";
import { useLanguage, useRole } from "@/context/AppProviders";
import { modules } from "@/data/modules";
import { pick } from "@/lib/utils";

interface ContentNote {
  id: string;
  moduleSlug: string;
  title: string;
  note: string;
  createdAt: string;
}

const STORAGE_KEY = "ai-hub-admin-notes";

export default function AdminPage() {
  const { t, locale } = useLanguage();
  const { role, canManageContent } = useRole();
  const [notes, setNotes] = useState<ContentNote[]>([]);
  const [moduleSlug, setModuleSlug] = useState(modules[0]?.slug ?? "");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setNotes(JSON.parse(stored));
      } catch {
        // ignore malformed local storage
      }
    }
  }, []);

  function persist(next: ContentNote[]) {
    setNotes(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim() || !note.trim()) return;
    const entry: ContentNote = {
      id: crypto.randomUUID(),
      moduleSlug,
      title: title.trim(),
      note: note.trim(),
      createdAt: new Date().toLocaleString(locale === "vi" ? "vi-VN" : "en-US"),
    };
    persist([entry, ...notes]);
    setTitle("");
    setNote("");
  }

  function handleDelete(id: string) {
    persist(notes.filter((n) => n.id !== id));
  }

  if (!canManageContent) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink-100 text-ink-500">
          <Lock size={24} />
        </span>
        <h1 className="mt-5 text-2xl font-bold text-ink-900">{t.admin.noAccessTitle}</h1>
        <p className="mt-2 text-ink-600">{t.admin.noAccessBody}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-ink-900">{t.admin.title}</h1>
      <p className="mt-3 max-w-2xl text-ink-600">{t.admin.subtitle}</p>

      <section className="mt-10 rounded-xl2 border border-ink-200 bg-white p-6 shadow-card">
        <h2 className="font-semibold text-ink-900">{t.admin.usersTitle}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <RoleCard icon={<ShieldCheck size={18} />} name={t.role.admin} desc={t.admin.roleAdmin} active={role === "admin"} />
          <RoleCard icon={<UserCog size={18} />} name={t.role.expert} desc={t.admin.roleExpert} active={role === "expert"} />
          <RoleCard icon={<GraduationCap size={18} />} name={t.role.learner} desc={t.admin.roleLearner} active={role === "learner"} />
        </div>
      </section>

      <section className="mt-8 rounded-xl2 border border-ink-200 bg-white p-6 shadow-card">
        <h2 className="font-semibold text-ink-900">{t.admin.addLesson}</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-xs font-medium text-ink-500">{t.admin.moduleLabel}</label>
            <select
              value={moduleSlug}
              onChange={(e) => setModuleSlug(e.target.value)}
              className="focus-ring mt-1 block w-full rounded-md border border-ink-200 px-3 py-2 text-sm"
            >
              {modules.map((m) => (
                <option key={m.slug} value={m.slug}>
                  {pick(m.title, locale)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-ink-500">{t.admin.titleLabel}</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="focus-ring mt-1 block w-full rounded-md border border-ink-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink-500">{t.admin.noteLabel}</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="focus-ring mt-1 block w-full rounded-md border border-ink-200 px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            className="focus-ring rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
          >
            {t.admin.save}
          </button>
        </form>
        <p className="mt-3 text-xs text-ink-400">{t.admin.savedNote}</p>
      </section>

      {notes.length > 0 && (
        <section className="mt-8 space-y-3">
          {notes.map((n) => (
            <div
              key={n.id}
              className="flex items-start justify-between gap-3 rounded-lg border border-ink-100 bg-white p-4 shadow-card"
            >
              <div>
                <p className="text-xs font-medium text-brand-600">{n.moduleSlug}</p>
                <p className="font-semibold text-ink-900">{n.title}</p>
                <p className="mt-1 text-sm text-ink-600">{n.note}</p>
                <p className="mt-1 text-xs text-ink-400">{n.createdAt}</p>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(n.id)}
                className="focus-ring shrink-0 rounded p-1.5 text-ink-400 hover:bg-ink-100 hover:text-rose-600"
                aria-label="Delete"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

function RoleCard({
  icon,
  name,
  desc,
  active,
}: {
  icon: React.ReactNode;
  name: string;
  desc: string;
  active: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 text-sm ${
        active ? "border-brand-300 bg-brand-50" : "border-ink-100"
      }`}
    >
      <div className="flex items-center gap-2 font-medium text-ink-800">
        {icon}
        {name}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-ink-500">{desc}</p>
    </div>
  );
}
