import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counter — Animated count-up that triggers when scrolled into view.
 */
export default function Counter({ value, suffix = '', duration = 2, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const start = 0
    const end = value
    const startTime = Date.now()
    const ms = duration * 1000

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / ms, 1)
      /* Ease-out cubic */
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + (end - start) * eased)
      setDisplay(current)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value, duration])

  const formatted = value >= 1000
    ? display.toLocaleString()
    : Number.isInteger(value)
      ? display.toString()
      : display.toFixed(2)

  return (
    <span ref={ref} className={className}>
      {formatted}{suffix}
    </span>
  )
}
