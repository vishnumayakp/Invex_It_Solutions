import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'

/**
 * CircuitDivider — A horizontal divider styled as a circuit trace with ring-terminal nodes.
 * Draws in smoothly as it enters the viewport.
 */
export default function CircuitDivider({ className = '', variant = 'horizontal' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const reduced = useReducedMotion()

  if (variant === 'vertical') {
    return (
      <div ref={ref} className={`flex flex-col items-center ${className}`}>
        <svg width="3" height="100%" viewBox="0 0 3 100" preserveAspectRatio="none" className="h-full" aria-hidden="true">
          <line
            x1="1.5"
            y1="0"
            x2="1.5"
            y2="100"
            stroke="var(--border-subtle)"
            strokeWidth="1"
            strokeDasharray="100"
            strokeDashoffset={reduced || isInView ? 0 : 100}
            style={{ transition: reduced ? 'none' : 'stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1)' }}
          />
        </svg>
      </div>
    )
  }

  return (
    <div ref={ref} className={`w-full flex items-center justify-center my-6 sm:my-8 overflow-hidden ${className}`}>
      <svg viewBox="0 0 600 12" className="w-full max-w-5xl h-3" preserveAspectRatio="none" aria-hidden="true">
        {/* Left terminal node */}
        <motion.circle
          cx="6"
          cy="6"
          r="3"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="1.2"
          initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.8, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        {/* Left trace line drawing to center */}
        <line
          x1="12"
          y1="6"
          x2="290"
          y2="6"
          stroke="var(--border-subtle)"
          strokeWidth="1"
          strokeDasharray="300"
          strokeDashoffset={reduced || isInView ? 0 : 300}
          style={{
            transition: reduced ? 'none' : 'stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
          }}
        />

        {/* Center dual-accent node */}
        <motion.circle
          cx="300"
          cy="6"
          r="3.5"
          fill="var(--base)"
          stroke="var(--accent-mint)"
          strokeWidth="1.5"
          initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        />
        <motion.circle
          cx="300"
          cy="6"
          r="1.2"
          fill="var(--accent-mint)"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        />

        {/* Right trace line drawing from center */}
        <line
          x1="310"
          y1="6"
          x2="588"
          y2="6"
          stroke="var(--border-subtle)"
          strokeWidth="1"
          strokeDasharray="300"
          strokeDashoffset={reduced || isInView ? 0 : 300}
          style={{
            transition: reduced ? 'none' : 'stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1) 0.25s',
          }}
        />

        {/* Right terminal node */}
        <motion.circle
          cx="594"
          cy="6"
          r="3"
          fill="none"
          stroke="var(--accent-mint)"
          strokeWidth="1.2"
          initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.8, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </svg>
    </div>
  )
}
