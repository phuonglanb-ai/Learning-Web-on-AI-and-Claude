import { Sparkles, Building2, Users, ShieldAlert, LucideIcon } from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Building2,
  Users,
  ShieldAlert,
};

export function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
