import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * EclipseRing — Decorative glowing arc ring with brain-gradient stroke.
 * Slowly rotates (40s per revolution). Pauses when off-screen.
 */
export default function EclipseRing({ size = 400, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.1 })
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <motion.div
      ref={ref}
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      animate={!reduced && inView ? { rotate: 360 } : {}}
      transition={!reduced ? { duration: 40, repeat: Infinity, ease: 'linear' } : {}}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="eclipse-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-mint)" />
          </linearGradient>
          <filter id="eclipse-blur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        {/* Glow layer */}
        <circle
          cx="200" cy="200" r="175"
          fill="none" stroke="url(#eclipse-g)" strokeWidth="2"
          strokeDasharray="250 880" opacity="0.25" filter="url(#eclipse-blur)"
        />
        {/* Crisp arc */}
        <circle
          cx="200" cy="200" r="175"
          fill="none" stroke="url(#eclipse-g)" strokeWidth="1.5"
          strokeDasharray="280 850" opacity="0.4"
        />
        {/* Thin inner ring */}
        <circle
          cx="200" cy="200" r="155"
          fill="none" stroke="url(#eclipse-g)" strokeWidth="0.5" opacity="0.12"
        />
      </svg>
    </motion.div>
  )
}
