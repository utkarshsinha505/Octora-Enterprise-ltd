import { cn } from "@/lib/utils";

/**
 * Vector redraw of the UPÉ wordmark (original artwork: /public/brand/upe-logo.png).
 * Letters use currentColor so the logo adapts to dark and light themes; the É accent stays gold.
 */
export function Logo({ className, showSubline = false }: { className?: string; showSubline?: boolean }) {
  return (
    <svg
      viewBox={showSubline ? "220 150 1580 560" : "230 155 1550 415"}
      className={cn("h-auto", className)}
      role="img"
      aria-label="UPÉ Synthetic Limited"
    >
      <g fill="currentColor">
        {/* U */}
        <path d="M240 265 300 310v110c0 60 56 85 143 85s143-25 143-85V310l60-45v165c0 90-90 130-203 130S240 520 240 430Z" />
        {/* P */}
        <path d="M717 265h473c70 0 110 40 110 87s-40 88-110 88H790v120h-62V390h462c30 0 50-18 50-38s-20-32-50-32H765Z" />
        {/* E */}
        <path d="M1378 265h390l-56 55h-274v65h304l-52 53h-252v69h327l-53 53h-334Z" />
      </g>
      {/* É accent */}
      <path d="M1525 248 1612 165h85l-87 83Z" fill="#d4a72c" />
      {showSubline && (
        <g>
          <rect x="207" y="657" width="144" height="7" rx="3.5" fill="#d4a72c" />
          <rect x="1640" y="657" width="140" height="7" rx="3.5" fill="#d4a72c" />
          <text
            x="1000"
            y="678"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="var(--font-inter), sans-serif"
            fontSize="64"
            letterSpacing="38"
            opacity="0.85"
          >
            SYNTHETIC LIMITED
          </text>
        </g>
      )}
    </svg>
  );
}
