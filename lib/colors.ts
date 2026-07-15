// Explicit class strings (not dynamically constructed) so Tailwind's
// content scanner can find and keep them in the production build.
export const moduleColorStyles = {
  brand: {
    bg: "bg-brand-50",
    bgSolid: "bg-brand-500",
    text: "text-brand-700",
    ring: "ring-brand-200",
    border: "border-brand-200",
    iconBg: "bg-brand-100 text-brand-600",
    badge: "bg-brand-100 text-brand-700",
  },
  accent: {
    bg: "bg-accent-50",
    bgSolid: "bg-accent-500",
    text: "text-accent-700",
    ring: "ring-accent-200",
    border: "border-accent-200",
    iconBg: "bg-accent-100 text-accent-600",
    badge: "bg-accent-100 text-accent-700",
  },
  amber: {
    bg: "bg-amber-50",
    bgSolid: "bg-amber-500",
    text: "text-amber-700",
    ring: "ring-amber-200",
    border: "border-amber-200",
    iconBg: "bg-amber-100 text-amber-600",
    badge: "bg-amber-100 text-amber-700",
  },
  rose: {
    bg: "bg-rose-50",
    bgSolid: "bg-rose-500",
    text: "text-rose-700",
    ring: "ring-rose-200",
    border: "border-rose-200",
    iconBg: "bg-rose-100 text-rose-600",
    badge: "bg-rose-100 text-rose-700",
  },
} as const;

export type ModuleColor = keyof typeof moduleColorStyles;
