import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'

/**
 * FAQVisuals.jsx
 * Code-built, theme-aware visuals for the FAQ answers:
 * 1. IPTransferVisual (Q1: IP Ownership Transfer)
 * 2. AMCSupportVisual (Q2: Post-launch AMC & Scaling)
 * 3. RegionalComplianceVisual (Q3: UAE & Qatar Compliances)
 *
 * Rules:
 * - Theme tokens only, no hardcoded hex, no orange
 * - Dark (glass/glow), Light (paper-white, soft tinted shadow)
 * - aria-hidden="true" on all decorative visuals
 * - Loops pause when off-screen via useInView
 * - Static final state under prefers-reduced-motion
 */

/* ─────────────────────────────────────────────────────────────
 * 1. IPTransferVisual (Q1: Who owns the IP?)
 * Glass code window sliding across to a key/shield tile (ownership transfer).
 * ───────────────────────────────────────────────────────────── */
export function IPTransferVisual({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const reduced = useReducedMotion()

  return (
    <div
      ref={ref}
      className={`relative w-full h-48 sm:h-56 flex items-center justify-around p-4 rounded-2xl border overflow-hidden select-none transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border-subtle)',
      }}
      aria-hidden="true"
    >
      {/* Background ambient glow */}
      <div
        className="absolute w-36 h-36 rounded-full pointer-events-none opacity-20 blur-2xl"
        style={{ background: 'var(--glow-blue)' }}
      />

      {/* ── Left: Source Code Window ── */}
      <motion.div
        className="w-28 sm:w-32 h-32 sm:h-36 rounded-xl border flex flex-col p-2.5 z-10"
        style={{
          backgroundColor: 'var(--surface-raised)',
          borderColor: 'var(--border-strong)',
          boxShadow: '0 8px 24px -6px var(--glass-shadow, rgba(0,0,0,0.25))',
        }}
        animate={!reduced && inView ? { x: [0, 4, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Window controls */}
        <div className="flex items-center gap-1 mb-2 pb-1.5 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-mint)' }} />
          <span className="text-[8px] font-mono ml-1" style={{ color: 'var(--text-muted)' }}>
            src.zip
          </span>
        </div>
        {/* Code Lines */}
        <div className="flex flex-col gap-1.5 flex-1 justify-center">
          <div className="w-16 h-1 rounded-full" style={{ backgroundColor: 'var(--accent-blue)', opacity: 0.7 }} />
          <div className="w-20 h-1 rounded-full" style={{ backgroundColor: 'var(--accent-mint)', opacity: 0.7 }} />
          <div className="w-12 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)', opacity: 0.4 }} />
          <div className="w-18 h-1 rounded-full" style={{ backgroundColor: 'var(--accent-blue)', opacity: 0.6 }} />
        </div>
      </motion.div>

      {/* ── Middle: Animated Transfer Arrow & Light Pulse ── */}
      <div className="flex flex-col items-center justify-center relative w-16 sm:w-20">
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
          <line
            x1="0"
            y1="10"
            x2="50"
            y2="10"
            stroke="var(--border-subtle)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          {/* Animated beam travelling across */}
          {!reduced && inView && (
            <motion.circle
              r="3"
              fill="var(--accent-mint)"
              animate={{ cx: [0, 50], opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              cy="10"
            />
          )}
          {/* Directional arrow head */}
          <polygon points="50,6 58,10 50,14" fill="var(--accent-mint)" />
        </svg>
        <span className="text-[9px] font-mono tracking-wider mt-1 text-center" style={{ color: 'var(--text-muted)' }}>
          TRANSFER
        </span>
      </div>

      {/* ── Right: Destination Ownership Key & Shield Tile ── */}
      <motion.div
        className="w-28 sm:w-32 h-32 sm:h-36 rounded-xl border flex flex-col items-center justify-center p-3 z-10"
        style={{
          backgroundColor: 'var(--surface-raised)',
          borderColor: 'var(--accent-mint)',
          boxShadow: '0 0 20px var(--glow-mint)',
        }}
        animate={!reduced && inView ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
          style={{
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
            color: 'var(--base)',
          }}
        >
          {/* Key & Shield SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <circle cx="12" cy="10" r="2" />
            <path d="M12 12v3" />
          </svg>
        </div>
        <span className="text-[10px] font-mono font-bold tracking-wider" style={{ color: 'var(--text-primary)' }}>
          100% IP CLIENT
        </span>
        <span className="text-[8px] font-mono" style={{ color: 'var(--accent-mint)' }}>
          Rights Assigned
        </span>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
 * 2. AMCSupportVisual (Q2: Post-launch support?)
 * Glass app tile with a circular update arrow and rising scale bars.
 * ───────────────────────────────────────────────────────────── */
export function AMCSupportVisual({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const reduced = useReducedMotion()

  return (
    <div
      ref={ref}
      className={`relative w-full h-48 sm:h-56 flex items-center justify-around p-4 rounded-2xl border overflow-hidden select-none transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border-subtle)',
      }}
      aria-hidden="true"
    >
      {/* Background glow */}
      <div
        className="absolute w-40 h-40 rounded-full pointer-events-none opacity-20 blur-2xl"
        style={{ background: 'var(--glow-mint)' }}
      />

      {/* ── Left: Glass App Tile with Circular Continuous Update Arrow ── */}
      <div className="relative flex flex-col items-center">
        <div
          className="w-24 sm:w-28 h-24 sm:h-28 rounded-2xl border flex flex-col items-center justify-center p-3 relative"
          style={{
            backgroundColor: 'var(--surface-raised)',
            borderColor: 'var(--border-strong)',
          }}
        >
          {/* App Core Icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-1.5"
            style={{
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
              color: 'var(--base)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <span className="text-[9px] font-mono font-bold" style={{ color: 'var(--text-primary)' }}>
            Core Platform
          </span>

          {/* Rotating Circular Update Arrow Ring */}
          <motion.div
            className="absolute -inset-3.5 pointer-events-none"
            animate={!reduced && inView ? { rotate: 360 } : {}}
            transition={!reduced ? { duration: 18, repeat: Infinity, ease: 'linear' } : {}}
          >
            <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
              <circle
                cx="70"
                cy="70"
                r="60"
                stroke="var(--accent-mint)"
                strokeWidth="1.5"
                strokeDasharray="50 140"
                strokeLinecap="round"
              />
              <circle
                cx="70"
                cy="70"
                r="60"
                stroke="var(--accent-blue)"
                strokeWidth="1.5"
                strokeDasharray="50 140"
                strokeDashoffset="95"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
        <span className="text-[9px] font-mono mt-3" style={{ color: 'var(--accent-mint)' }}>
          Continuous Maintenance
        </span>
      </div>

      {/* ── Right: Rising Scale Bars ── */}
      <div
        className="w-32 sm:w-36 h-28 sm:h-32 rounded-xl border p-3 flex flex-col justify-between"
        style={{
          backgroundColor: 'var(--surface-raised)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            Scale Adaptation
          </span>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-mint)' }} />
        </div>

        {/* 5 Rising Bars */}
        <div className="flex items-end justify-between h-14 px-1">
          {[35, 50, 68, 85, 100].map((height, i) => (
            <motion.div
              key={i}
              className="w-3.5 rounded-t-sm"
              style={{
                background:
                  i === 4
                    ? 'linear-gradient(180deg, var(--accent-mint), var(--accent-blue))'
                    : 'var(--accent-blue)',
                opacity: 0.6 + i * 0.1,
              }}
              initial={{ height: reduced ? `${height}%` : '20%' }}
              animate={inView ? { height: `${height}%` } : { height: reduced ? `${height}%` : '20%' }}
              transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : i * 0.1, ease: 'easeOut' }}
            />
          ))}
        </div>

        <div className="flex justify-between text-[8px] font-mono border-t pt-1" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
          <span>v1.0</span>
          <span>Scaling & OS Updates</span>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
 * 3. RegionalComplianceVisual (Q3: UAE/Qatar compliances?)
 * Dotted regional map reusing Home pattern with glowing UAE & Qatar
 * nodes and a shield tick. No other regions.
 * ───────────────────────────────────────────────────────────── */
export function RegionalComplianceVisual({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const reduced = useReducedMotion()

  return (
    <div
      ref={ref}
      className={`relative w-full h-48 sm:h-56 flex items-center justify-center p-4 rounded-2xl border overflow-hidden select-none transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border-subtle)',
      }}
      aria-hidden="true"
    >
      {/* Background radial glow */}
      <div
        className="absolute w-44 h-44 rounded-full pointer-events-none opacity-20 blur-2xl"
        style={{ background: 'var(--glow-mint)' }}
      />

      <svg viewBox="0 0 280 180" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="gulf-link-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-mint)" />
          </linearGradient>
        </defs>

        {/* Abstract Regional Map Dots Matrix (Only UAE & Qatar quadrant) */}
        {[
          { x: 50, y: 40 }, { x: 75, y: 40 }, { x: 100, y: 40 }, { x: 125, y: 40 },
          { x: 40, y: 65 }, { x: 65, y: 65 }, { x: 90, y: 65 }, { x: 115, y: 65 }, { x: 140, y: 65 },
          { x: 55, y: 90 }, { x: 80, y: 90 }, { x: 105, y: 90 }, { x: 130, y: 90 }, { x: 155, y: 90 },
          { x: 70, y: 115 }, { x: 95, y: 115 }, { x: 120, y: 115 }, { x: 145, y: 115 }, { x: 170, y: 115 },
          { x: 85, y: 140 }, { x: 110, y: 140 }, { x: 135, y: 140 }, { x: 160, y: 140 },
        ].map((pt, idx) => (
          <circle
            key={idx}
            cx={pt.x}
            cy={pt.y}
            r="1.8"
            fill="var(--border-strong)"
            opacity="0.4"
          />
        ))}

        {/* Interconnection Line between UAE (160, 95) and Qatar (105, 80) */}
        <line
          x1="105"
          y1="80"
          x2="160"
          y2="95"
          stroke="url(#gulf-link-grad)"
          strokeWidth="2"
          strokeDasharray="4 3"
        />

        {/* ── Qatar Node (105, 80) ── */}
        <g transform="translate(105, 80)">
          {/* Pulsing halo */}
          {!reduced && inView && (
            <motion.circle
              r="14"
              stroke="var(--accent-blue)"
              strokeWidth="1"
              fill="none"
              animate={{ r: [8, 16], opacity: [0.8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
          <circle r="7" fill="var(--surface-raised)" stroke="var(--accent-blue)" strokeWidth="2" />
          <circle r="3" fill="var(--accent-blue)" />
          {/* Label pill */}
          <rect x="-22" y="-22" width="44" height="14" rx="4" fill="var(--surface-raised)" stroke="var(--border-subtle)" strokeWidth="0.8" />
          <text x="0" y="-12" textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontFamily="monospace" fontWeight="bold">
            QATAR
          </text>
        </g>

        {/* ── UAE Node (160, 95) ── */}
        <g transform="translate(160, 95)">
          {/* Pulsing halo */}
          {!reduced && inView && (
            <motion.circle
              r="14"
              stroke="var(--accent-mint)"
              strokeWidth="1"
              fill="none"
              animate={{ r: [8, 16], opacity: [0.8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.5, ease: 'easeOut' }}
            />
          )}
          <circle r="7" fill="var(--surface-raised)" stroke="var(--accent-mint)" strokeWidth="2" />
          <circle r="3" fill="var(--accent-mint)" />
          {/* Label pill */}
          <rect x="-18" y="-22" width="36" height="14" rx="4" fill="var(--surface-raised)" stroke="var(--border-subtle)" strokeWidth="0.8" />
          <text x="0" y="-12" textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontFamily="monospace" fontWeight="bold">
            UAE
          </text>
        </g>

        {/* ── Compliance Shield Tick Badge (225, 85) ── */}
        <g transform="translate(225, 85)">
          <circle r="22" fill="var(--surface-raised)" stroke="var(--accent-mint)" strokeWidth="1.5" />
          {/* Shield */}
          <path
            d="M 0 -10 L 9 -5 V 2 C 9 8, 0 12, 0 12 C 0 12, -9 8, -9 2 V -5 Z"
            fill="var(--glass-bg)"
            stroke="var(--accent-mint)"
            strokeWidth="1.5"
          />
          {/* Tick */}
          <path
            d="M -3.5 1 L -1 3.5 L 4.5 -2"
            stroke="var(--accent-mint)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="0" y="24" textAnchor="middle" fill="var(--text-secondary)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
            LOCALIZED
          </text>
        </g>
      </svg>
    </div>
  )
}
