import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'

/**
 * EngagementVisuals.jsx
 * Three code-built, theme-aware visuals for the Engagement Models:
 * 1. TeamConstellationVisual (Dedicated Development Team)
 * 2. ScopeBlueprintVisual (Custom Project, Fixed-Cost)
 * 3. LicenseAMCVisual (Enterprise Licensing & AMC)
 *
 * Rules:
 * - Theme tokens only, no hardcoded hex, no orange
 * - Both themes supported: Dark (glass/glow), Light (paper-white, soft shadows)
 * - aria-hidden="true" on all decorative visuals
 * - Loops pause when off-screen via useInView
 * - Static final state under prefers-reduced-motion
 * - Visible TODO comments on each visual
 */

/* ─────────────────────────────────────────────────────────────
 * 1. TeamConstellationVisual
 * Glowing core node ringed by abstract glass avatar nodes connected
 * by thin lines with traveling light pulses and exclusive lock ring.
 * ───────────────────────────────────────────────────────────── */
export function TeamConstellationVisual({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const reduced = useReducedMotion()

  /* 6 Outer Avatar Node coordinates around center (130, 110) with r = 70 */
  const nodes = [
    { cx: 130 + 70 * Math.cos(0), cy: 110 + 70 * Math.sin(0) },
    { cx: 130 + 70 * Math.cos(Math.PI / 3), cy: 110 + 70 * Math.sin(Math.PI / 3) },
    { cx: 130 + 70 * Math.cos((2 * Math.PI) / 3), cy: 110 + 70 * Math.sin((2 * Math.PI) / 3) },
    { cx: 130 + 70 * Math.cos(Math.PI), cy: 110 + 70 * Math.sin(Math.PI) },
    { cx: 130 + 70 * Math.cos((4 * Math.PI) / 3), cy: 110 + 70 * Math.sin((4 * Math.PI) / 3) },
    { cx: 130 + 70 * Math.cos((5 * Math.PI) / 3), cy: 110 + 70 * Math.sin((5 * Math.PI) / 3) },
  ]

  return (
    /* TODO: Swap for custom illustration if the client supplies one */
    <div
      ref={ref}
      className={`relative w-full h-52 flex items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border-subtle)',
      }}
      aria-hidden="true"
    >
      {/* Background radial glow */}
      <div
        className="absolute w-44 h-44 rounded-full pointer-events-none opacity-20 blur-2xl"
        style={{ background: 'var(--glow-blue)' }}
      />

      <svg viewBox="0 0 260 220" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="team-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.8" />
          </linearGradient>
          <filter id="team-glow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Orbit track ring */}
        <circle
          cx="130"
          cy="110"
          r="70"
          stroke="var(--border-subtle)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Connecting Lines with Traveling Light Pulses */}
        {nodes.map((node, i) => (
          <g key={i}>
            <line
              x1="130"
              y1="110"
              x2={node.cx}
              y2={node.cy}
              stroke="var(--border-subtle)"
              strokeWidth="1"
            />
            {/* Animated traveling pulse dot */}
            {!reduced && inView && (
              <motion.circle
                r="2.5"
                fill="var(--accent-mint)"
                animate={{
                  cx: [130, node.cx],
                  cy: [110, node.cy],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: 'easeInOut',
                }}
              />
            )}
          </g>
        ))}

        {/* Outer Rotating Group containing Nodes */}
        <motion.g
          animate={!reduced && inView ? { rotate: 360 } : {}}
          transition={!reduced ? { duration: 45, repeat: Infinity, ease: 'linear' } : {}}
          style={{ originX: '130px', originY: '110px' }}
        >
          {nodes.map((node, i) => (
            <g key={i} transform={`translate(${node.cx}, ${node.cy})`}>
              {/* Outer Avatar Glass Node */}
              <circle
                r="13"
                fill="var(--surface-raised)"
                stroke="var(--border-strong)"
                strokeWidth="1"
              />
              {/* Abstract Person Glyph: Head */}
              <circle cx="0" cy="-3.5" r="3" fill="var(--accent-blue)" />
              {/* Abstract Person Glyph: Shoulders */}
              <path
                d="M -5 6 C -5 2, 5 2, 5 6"
                stroke="var(--accent-blue)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          ))}
        </motion.g>

        {/* Center Exclusive Core Node */}
        {/* Exclusive Ring / Lock Halo */}
        <circle
          cx="130"
          cy="110"
          r="26"
          stroke="url(#team-line-grad)"
          strokeWidth="1.5"
          strokeDasharray="6 3"
          opacity="0.8"
        />
        {/* Core background */}
        <circle
          cx="130"
          cy="110"
          r="20"
          fill="var(--surface-raised)"
          stroke="var(--accent-mint)"
          strokeWidth="1.5"
        />
        {/* Exclusive Lock Icon at Core Center */}
        <g transform="translate(130, 110)">
          {/* Lock Shackle */}
          <path
            d="M -4 -1.5 V -5 C -4 -7.2, 4 -7.2, 4 -5 V -1.5"
            stroke="var(--accent-mint)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Lock Body */}
          <rect
            x="-6"
            y="-1.5"
            width="12"
            height="10"
            rx="2"
            fill="var(--glass-bg)"
            stroke="var(--accent-mint)"
            strokeWidth="1.2"
          />
          {/* Keyhole dot */}
          <circle cx="0" cy="3.5" r="1.2" fill="var(--accent-mint)" />
        </g>
      </svg>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
 * 2. ScopeBlueprintVisual
 * Blueprint-style boundary box containing web window and mobile
 * frame, with horizontal milestone track filling on view.
 * ───────────────────────────────────────────────────────────── */
export function ScopeBlueprintVisual({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const reduced = useReducedMotion()

  const milestones = [
    { label: 'Scope', completed: true },
    { label: 'Build', completed: true },
    { label: 'QA', completed: true },
    { label: 'Deploy', completed: true },
  ]

  return (
    /* TODO: Swap for custom illustration if the client supplies one */
    <div
      ref={ref}
      className={`relative w-full h-52 flex flex-col justify-between p-3.5 overflow-hidden rounded-2xl border transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border-subtle)',
      }}
      aria-hidden="true"
    >
      {/* Background blueprint subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            'radial-gradient(var(--accent-blue) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* ── Defined Boundary Box (Dashed Blueprint Perimeter) ── */}
      <div
        className="relative flex-1 rounded-xl p-2.5 border border-dashed flex items-center justify-around gap-2"
        style={{
          borderColor: 'var(--accent-blue)',
          backgroundColor: 'var(--glass-bg)',
        }}
      >
        {/* Blueprint Boundary Tag */}
        <div
          className="absolute -top-2 left-3 px-2 py-0.2 rounded text-[9px] font-mono tracking-wider uppercase border"
          style={{
            backgroundColor: 'var(--surface-raised)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--accent-mint)',
          }}
        >
          Defined Scope Perimeter
        </div>

        {/* Mini Web Window Skeleton */}
        <div
          className="w-32 h-20 rounded-lg border flex flex-col overflow-hidden"
          style={{
            backgroundColor: 'var(--surface-raised)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          {/* Browser header */}
          <div
            className="flex items-center gap-1 px-1.5 py-1 border-b"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-mint)' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--text-muted)', opacity: 0.4 }} />
          </div>
          {/* Skeleton Body */}
          <div className="p-2 flex flex-col gap-1.5">
            <div className="w-16 h-1.5 rounded-full" style={{ backgroundColor: 'var(--text-primary)', opacity: 0.6 }} />
            <div className="w-24 h-1.5 rounded-full" style={{ backgroundColor: 'var(--text-muted)', opacity: 0.3 }} />
            <div className="flex gap-1 mt-1">
              <div className="flex-1 h-6 rounded border" style={{ backgroundColor: 'var(--base)', borderColor: 'var(--border-subtle)' }} />
              <div className="flex-1 h-6 rounded border" style={{ backgroundColor: 'var(--base)', borderColor: 'var(--border-subtle)' }} />
            </div>
          </div>
        </div>

        {/* Mini Mobile Phone Frame Skeleton */}
        <div
          className="w-14 h-22 rounded-xl border p-1 flex flex-col items-center justify-between"
          style={{
            backgroundColor: 'var(--surface-raised)',
            borderColor: 'var(--border-strong)',
          }}
        >
          {/* Camera notch */}
          <div className="w-4 h-1 rounded-full" style={{ backgroundColor: 'var(--border-subtle)' }} />
          {/* App skeleton cards */}
          <div className="w-full flex flex-col gap-1 my-1">
            <div className="w-full h-4 rounded border" style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--border-subtle)' }} />
            <div className="w-full h-7 rounded border" style={{ backgroundColor: 'var(--base)', borderColor: 'var(--border-subtle)' }} />
          </div>
          {/* Home indicator */}
          <div className="w-5 h-0.5 rounded-full" style={{ backgroundColor: 'var(--text-muted)', opacity: 0.5 }} />
        </div>
      </div>

      {/* ── Horizontal Milestone Track ── */}
      <div className="mt-3 px-2">
        <div className="relative flex items-center justify-between">
          {/* Milestone Background Track Line */}
          <div
            className="absolute left-2 right-2 h-0.5 -z-0"
            style={{ backgroundColor: 'var(--border-subtle)' }}
          />

          {/* Animated Brain Gradient Fill Line */}
          <motion.div
            className="absolute left-2 h-0.5 -z-0"
            style={{
              background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-mint))',
            }}
            initial={{ width: reduced ? '100%' : '0%' }}
            animate={inView ? { width: 'calc(100% - 16px)' } : { width: reduced ? '100%' : '0%' }}
            transition={{ duration: reduced ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Milestone Nodes */}
          {milestones.map((m, i) => {
            const isLast = i === milestones.length - 1
            return (
              <div key={i} className="flex flex-col items-center z-10">
                <motion.div
                  className="w-5 h-5 rounded-full flex items-center justify-center border font-mono text-[9px] font-bold"
                  style={{
                    backgroundColor: 'var(--surface-raised)',
                    borderColor: 'var(--accent-mint)',
                    color: 'var(--text-primary)',
                  }}
                  initial={{ scale: reduced ? 1 : 0.8 }}
                  animate={inView ? { scale: 1 } : { scale: reduced ? 1 : 0.8 }}
                  transition={{ delay: reduced ? 0 : 0.25 * i, duration: 0.4 }}
                >
                  {isLast ? (
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="var(--accent-mint)" strokeWidth="2" strokeLinecap="round">
                      <path d="M2 5l2.5 2.5L8 2.5" />
                    </svg>
                  ) : (
                    <span style={{ color: 'var(--accent-blue)' }}>{i + 1}</span>
                  )}
                </motion.div>
                <span className="text-[8px] font-mono mt-1" style={{ color: 'var(--text-muted)' }}>
                  {m.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
 * 3. LicenseAMCVisual
 * Glass ERP/POS tile inside a slowly rotating circular renewal ring
 * with arrows, shield badge, and update glyph.
 * ───────────────────────────────────────────────────────────── */
export function LicenseAMCVisual({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const reduced = useReducedMotion()

  return (
    /* TODO: Swap for custom illustration if the client supplies one */
    <div
      ref={ref}
      className={`relative w-full h-52 flex items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border-subtle)',
      }}
      aria-hidden="true"
    >
      {/* Background glow */}
      <div
        className="absolute w-44 h-44 rounded-full pointer-events-none opacity-20 blur-2xl"
        style={{ background: 'var(--glow-mint)' }}
      />

      <svg viewBox="0 0 260 220" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="amc-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-mint)" />
          </linearGradient>
        </defs>

        {/* ── Slowly Rotating Circular "Renewal" Ring with Arrows ── */}
        <motion.g
          animate={!reduced && inView ? { rotate: 360 } : {}}
          transition={!reduced ? { duration: 32, repeat: Infinity, ease: 'linear' } : {}}
          style={{ originX: '130px', originY: '110px' }}
        >
          {/* Arc 1 */}
          <path
            d="M 130 35 A 75 75 0 0 1 205 110"
            stroke="url(#amc-ring-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Arrow 1 */}
          <polygon
            points="205,106 205,115 212,110"
            fill="var(--accent-mint)"
          />

          {/* Arc 2 */}
          <path
            d="M 130 185 A 75 75 0 0 1 55 110"
            stroke="url(#amc-ring-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Arrow 2 */}
          <polygon
            points="55,114 55,105 48,110"
            fill="var(--accent-blue)"
          />

          {/* Subtle dashed guide circle */}
          <circle
            cx="130"
            cy="110"
            r="75"
            stroke="var(--border-subtle)"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
        </motion.g>

        {/* ── Left Side Badge: Security Shield ── */}
        <g transform="translate(42, 60)">
          <circle cx="0" cy="0" r="14" fill="var(--surface-raised)" stroke="var(--border-subtle)" strokeWidth="1" />
          {/* Shield Icon */}
          <path
            d="M 0 -6 L 6 -3 V 1 C 6 5, 0 8, 0 8 C 0 8, -6 5, -6 1 V -3 Z"
            fill="var(--glass-bg)"
            stroke="var(--accent-blue)"
            strokeWidth="1.2"
          />
          <path d="M -2 1 L -0.5 2.5 L 2.5 -0.5" stroke="var(--accent-mint)" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* ── Right Side Badge: Update / Sync Glyph ── */}
        <g transform="translate(218, 160)">
          <circle cx="0" cy="0" r="14" fill="var(--surface-raised)" stroke="var(--border-subtle)" strokeWidth="1" />
          {/* Circular Update Arrow */}
          <path
            d="M -4 -3 A 5 5 0 1 1 -5 1"
            stroke="var(--accent-mint)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="-5,-4 -5,0 -1,-2" fill="var(--accent-mint)" />
        </g>

        {/* ── Centre Glass ERP / POS Tile ── */}
        <g transform="translate(95, 75)">
          {/* Card background */}
          <rect
            x="0"
            y="0"
            width="70"
            height="70"
            rx="12"
            fill="var(--surface-raised)"
            stroke="var(--glass-border)"
            strokeWidth="1.5"
          />
          {/* Terminal Screen inside card */}
          <rect
            x="8"
            y="8"
            width="54"
            height="32"
            rx="6"
            fill="var(--base)"
            stroke="var(--border-subtle)"
            strokeWidth="1"
          />
          {/* Screen mini sparkline */}
          <path
            d="M 14 26 Q 24 16, 34 22 T 54 14"
            stroke="var(--accent-mint)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* POS keyboard/action dots */}
          <circle cx="18" cy="52" r="3" fill="var(--border-subtle)" />
          <circle cx="28" cy="52" r="3" fill="var(--border-subtle)" />
          <circle cx="38" cy="52" r="3" fill="var(--border-subtle)" />
          {/* Pulsing Active SLA dot */}
          <circle cx="52" cy="52" r="3.5" fill="var(--accent-mint)" />
        </g>
      </svg>
    </div>
  )
}
