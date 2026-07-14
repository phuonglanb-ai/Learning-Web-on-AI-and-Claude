"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { dictionary, Dictionary } from "@/data/dictionary";
import { Locale, Role } from "@/lib/types";

const LOCALE_KEY = "ai-hub-locale";
const ROLE_KEY = "ai-hub-role";
const PROGRESS_KEY = "ai-hub-progress";

// ---------- Language ----------

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within AppProviders");
  return ctx;
}

// ---------- Role ----------

interface RoleContextValue {
  role: Role;
  setRole: (r: Role) => void;
  canManageContent: boolean;
}

const RoleContext = createContext<RoleContextValue | null>(null);

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used within AppProviders");
  return ctx;
}

// ---------- Progress ----------

interface ProgressContextValue {
  completedLessons: string[];
  isComplete: (lessonKey: string) => boolean;
  toggleComplete: (lessonKey: string) => void;
  progressCount: number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within AppProviders");
  return ctx;
}

// ---------- Provider ----------

export function AppProviders({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");
  const [role, setRoleState] = useState<Role>("learner");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(LOCALE_KEY) as Locale | null;
    const storedRole = window.localStorage.getItem(ROLE_KEY) as Role | null;
    const storedProgress = window.localStorage.getItem(PROGRESS_KEY);
    if (storedLocale === "vi" || storedLocale === "en") setLocaleState(storedLocale);
    if (storedRole === "admin" || storedRole === "expert" || storedRole === "learner") {
      setRoleState(storedRole);
    }
    if (storedProgress) {
      try {
        const parsed = JSON.parse(storedProgress);
        if (Array.isArray(parsed)) setCompletedLessons(parsed);
      } catch {
        // ignore malformed local storage
      }
    }
    setHydrated(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(LOCALE_KEY, l);
  }, []);

  const setRole = useCallback((r: Role) => {
    setRoleState(r);
    window.localStorage.setItem(ROLE_KEY, r);
  }, []);

  const toggleComplete = useCallback((lessonKey: string) => {
    setCompletedLessons((prev) => {
      const next = prev.includes(lessonKey)
        ? prev.filter((k) => k !== lessonKey)
        : [...prev, lessonKey];
      window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isComplete = useCallback(
    (lessonKey: string) => completedLessons.includes(lessonKey),
    [completedLessons]
  );

  const languageValue = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: dictionary[locale] }),
    [locale, setLocale]
  );

  const roleValue = useMemo<RoleContextValue>(
    () => ({ role, setRole, canManageContent: role === "admin" || role === "expert" }),
    [role, setRole]
  );

  const progressValue = useMemo<ProgressContextValue>(
    () => ({
      completedLessons,
      isComplete,
      toggleComplete,
      progressCount: completedLessons.length,
    }),
    [completedLessons, isComplete, toggleComplete]
  );

  // Avoid hydration flash by rendering children only once local storage has
  // been read; the app shell itself is static so this is a very short delay.
  if (!hydrated) {
    return (
      <LanguageContext.Provider value={languageValue}>
        <RoleContext.Provider value={roleValue}>
          <ProgressContext.Provider value={progressValue}>{children}</ProgressContext.Provider>
        </RoleContext.Provider>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={languageValue}>
      <RoleContext.Provider value={roleValue}>
        <ProgressContext.Provider value={progressValue}>{children}</ProgressContext.Provider>
      </RoleContext.Provider>
    </LanguageContext.Provider>
  );
}
