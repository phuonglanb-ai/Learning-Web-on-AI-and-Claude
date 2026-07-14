"use client";

import Link from "next/link";
import { useLanguage } from "@/context/AppProviders";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-ink-500 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>{t.footer.builtWith}</p>
          <div className="flex gap-4">
            <Link href="/modules" className="focus-ring rounded hover:text-ink-800">
              {t.nav.modules}
            </Link>
            <Link href="/resources" className="focus-ring rounded hover:text-ink-800">
              {t.nav.resources}
            </Link>
            <Link href="/admin" className="focus-ring rounded hover:text-ink-800">
              {t.footer.extend}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
