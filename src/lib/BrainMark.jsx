/**
 * BrainMark — Inline, theme-aware SVG recreation of the Invex IT brain-tree logo.
 * Simplified: trunk traces, ring nodes, two hemisphere outlines, ~10 key nodes per hemisphere.
 * Blue (left hemisphere) = logic/engineering, Mint (right hemisphere) = growth/innovation.
 */
export default function BrainMark({ size = 40, className = '', animated = false }) {
  const id = `brain-${Math.random().toString(36).slice(2, 8)}`

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-label="Invex IT Brain Tree Logo"
      role="img"
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="var(--accent-blue)" />
          <stop offset="100%" stopColor="var(--accent-mint)" />
        </linearGradient>
      </defs>

      {/* ── Trunk (center trace) ── */}
      <path
        d="M50 95 L50 60"
        stroke={`url(#${id}-grad)`}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        className={animated ? 'animate-draw' : ''}
        style={animated ? { strokeDasharray: 35, strokeDashoffset: 35, animation: 'draw 1s ease forwards 0.2s' } : {}}
      />
      {/* Trunk node (root) */}
      <circle cx="50" cy="95" r="2.5" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />

      {/* ── Branch splits ── */}
      <path
        d="M50 60 L35 48"
        stroke="var(--accent-blue)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        style={animated ? { strokeDasharray: 20, strokeDashoffset: 20, animation: 'draw 0.6s ease forwards 0.6s' } : {}}
      />
      <path
        d="M50 60 L65 48"
        stroke="var(--accent-mint)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        style={animated ? { strokeDasharray: 20, strokeDashoffset: 20, animation: 'draw 0.6s ease forwards 0.6s' } : {}}
      />

      {/* ═══ LEFT HEMISPHERE (Steel Blue — Logic/Engineering) ═══ */}
      <g stroke="var(--accent-blue)" strokeWidth="1" fill="none">
        {/* Network traces */}
        <path d="M35 48 L25 38" strokeLinecap="round" />
        <path d="M35 48 L30 35" strokeLinecap="round" />
        <path d="M25 38 L18 30" strokeLinecap="round" />
        <path d="M25 38 L20 42" strokeLinecap="round" />
        <path d="M30 35 L22 25" strokeLinecap="round" />
        <path d="M30 35 L35 28" strokeLinecap="round" />
        <path d="M18 30 L15 20" strokeLinecap="round" />
        <path d="M22 25 L18 15" strokeLinecap="round" />
        <path d="M35 28 L30 18" strokeLinecap="round" />
        <path d="M35 28 L42 22" strokeLinecap="round" />
        <path d="M30 18 L25 10" strokeLinecap="round" />
        <path d="M42 22 L38 12" strokeLinecap="round" />
      </g>
      {/* Left hemisphere ring-terminal nodes */}
      <g fill="none" stroke="var(--accent-blue)" strokeWidth="1.2">
        <circle cx="35" cy="48" r="2" />
        <circle cx="25" cy="38" r="2" />
        <circle cx="30" cy="35" r="1.8" />
        <circle cx="18" cy="30" r="1.8" />
        <circle cx="20" cy="42" r="1.5" />
        <circle cx="22" cy="25" r="1.8" />
        <circle cx="35" cy="28" r="2" />
        <circle cx="15" cy="20" r="1.5" />
        <circle cx="18" cy="15" r="1.5" />
        <circle cx="30" cy="18" r="1.8" />
        <circle cx="42" cy="22" r="1.8" />
        <circle cx="25" cy="10" r="1.5" />
        <circle cx="38" cy="12" r="1.5" />
      </g>

      {/* ═══ RIGHT HEMISPHERE (Mint Green — Growth/Innovation) ═══ */}
      <g stroke="var(--accent-mint)" strokeWidth="1" fill="none">
        {/* Network traces */}
        <path d="M65 48 L75 38" strokeLinecap="round" />
        <path d="M65 48 L70 35" strokeLinecap="round" />
        <path d="M75 38 L82 30" strokeLinecap="round" />
        <path d="M75 38 L80 42" strokeLinecap="round" />
        <path d="M70 35 L78 25" strokeLinecap="round" />
        <path d="M70 35 L65 28" strokeLinecap="round" />
        <path d="M82 30 L85 20" strokeLinecap="round" />
        <path d="M78 25 L82 15" strokeLinecap="round" />
        <path d="M65 28 L70 18" strokeLinecap="round" />
        <path d="M65 28 L58 22" strokeLinecap="round" />
        <path d="M70 18 L75 10" strokeLinecap="round" />
        <path d="M58 22 L62 12" strokeLinecap="round" />
      </g>
      {/* Right hemisphere ring-terminal nodes */}
      <g fill="none" stroke="var(--accent-mint)" strokeWidth="1.2">
        <circle cx="65" cy="48" r="2" />
        <circle cx="75" cy="38" r="2" />
        <circle cx="70" cy="35" r="1.8" />
        <circle cx="82" cy="30" r="1.8" />
        <circle cx="80" cy="42" r="1.5" />
        <circle cx="78" cy="25" r="1.8" />
        <circle cx="65" cy="28" r="2" />
        <circle cx="85" cy="20" r="1.5" />
        <circle cx="82" cy="15" r="1.5" />
        <circle cx="70" cy="18" r="1.8" />
        <circle cx="58" cy="22" r="1.8" />
        <circle cx="75" cy="10" r="1.5" />
        <circle cx="62" cy="12" r="1.5" />
      </g>

      {/* Center apex node */}
      <circle cx="50" cy="60" r="2.5" fill="none" stroke={`url(#${id}-grad)`} strokeWidth="1.5" />

      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  )
}
