import { Locale, Localized, LocalizedList } from "./types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function pick(value: Localized, locale: Locale): string {
  return value[locale];
}

export function pickList(value: LocalizedList, locale: Locale): string[] {
  return value[locale];
}
