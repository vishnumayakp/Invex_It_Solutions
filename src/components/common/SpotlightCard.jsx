import { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

/**
 * SpotlightCard — Glass card with pointer-tracking radial highlight.
 * Sets --mx / --my on mousemove (no React re-render). Desktop (hover:hover) only.
 */
export default function SpotlightCard({ children, className = '', cursorLabel, ...props }) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])

  const handleEnter = useCallback(() => {
    cardRef.current?.classList.add('spotlight-active')
  }, [])

  const handleLeave = useCallback(() => {
    cardRef.current?.classList.remove('spotlight-active')
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className={`spotlight-card glass rounded-3xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      data-cursor={cursorLabel}
      {...props}
    >
      {children}
    </motion.div>
  )
}
