/**
 * Decorative circuit/node motif evoking AI & automation, tiled behind a
 * section's content. Purely visual — always aria-hidden and non-interactive.
 */
export function AiPatternBackground({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const stroke = variant === "dark" ? "rgba(255,255,255,0.35)" : "rgba(30,58,138,0.18)";
  const dot = variant === "dark" ? "rgba(255,255,255,0.55)" : "rgba(30,58,138,0.3)";
  const patternId = variant === "dark" ? "ai-circuit-dark" : "ai-circuit-light";

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={patternId} width="120" height="120" patternUnits="userSpaceOnUse">
          <path
            d="M10 10 H60 V50 H110 M60 10 V-10 M60 50 V90 H10 M60 90 V110"
            fill="none"
            stroke={stroke}
            strokeWidth="1"
          />
          <circle cx="10" cy="10" r="2.5" fill={dot} />
          <circle cx="60" cy="10" r="2.5" fill={dot} />
          <circle cx="60" cy="50" r="3.5" fill={dot} />
          <circle cx="110" cy="50" r="2.5" fill={dot} />
          <circle cx="10" cy="90" r="2.5" fill={dot} />
          <circle cx="60" cy="90" r="2.5" fill={dot} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
