"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { useLanguage, useRole } from "@/context/AppProviders";
import { cn } from "@/lib/utils";
import { Role } from "@/lib/types";

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const { role, setRole } = useRole();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/modules", label: t.nav.modules },
    { href: "/tools", label: t.nav.tools },
    { href: "/resources", label: t.nav.resources },
    { href: "/feedback", label: t.nav.feedback },
    { href: "/admin", label: t.nav.admin },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-2 rounded-md">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
            <GraduationCap size={20} aria-hidden="true" />
          </span>
          <span className="font-semibold text-ink-900">{t.siteName}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-brand-50 text-brand-700" : "text-ink-600 hover:bg-ink-100 hover:text-ink-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <RoleSwitcher role={role} setRole={setRole} label={t.role} />
          <LanguageToggle locale={locale} setLocale={setLocale} labels={t.lang} />
        </div>

        <button
          type="button"
          className="focus-ring rounded-md p-2 text-ink-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-ink-100 pt-4">
            <RoleSwitcher role={role} setRole={setRole} label={t.role} />
            <LanguageToggle locale={locale} setLocale={setLocale} labels={t.lang} />
          </div>
        </div>
      )}
    </header>
  );
}

function RoleSwitcher({
  role,
  setRole,
  label,
}: {
  role: Role;
  setRole: (r: Role) => void;
  label: { label: string; admin: string; expert: string; learner: string };
}) {
  return (
    <label className="flex items-center gap-2 text-xs font-medium text-ink-600">
      <span className="sr-only">{label.label}</span>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as Role)}
        className="focus-ring rounded-md border border-ink-200 bg-white px-2 py-1.5 text-xs text-ink-700"
      >
        <option value="learner">{label.learner}</option>
        <option value="expert">{label.expert}</option>
        <option value="admin">{label.admin}</option>
      </select>
    </label>
  );
}

function LanguageToggle({
  locale,
  setLocale,
  labels,
}: {
  locale: "vi" | "en";
  setLocale: (l: "vi" | "en") => void;
  labels: { vi: string; en: string };
}) {
  return (
    <div className="flex items-center rounded-md border border-ink-200 p-0.5 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLocale("vi")}
        className={cn(
          "focus-ring rounded px-2 py-1 transition-colors",
          locale === "vi" ? "bg-brand-500 text-white" : "text-ink-600 hover:bg-ink-100"
        )}
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          "focus-ring rounded px-2 py-1 transition-colors",
          locale === "en" ? "bg-brand-500 text-white" : "text-ink-600 hover:bg-ink-100"
        )}
      >
        EN
      </button>
    </div>
  );
}
