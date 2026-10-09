import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Reveal — Wraps children with a scroll-triggered entrance animation.
 * @param {'fade'|'slideUp'|'slideLeft'|'slideRight'|'scale'} variant
 * @param {number} delay — stagger delay in seconds
 */
const animations = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function Reveal({
  children,
  variant = 'slideUp',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  threshold = 0.2,
  as = 'div',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animations[variant] || animations.slideUp}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
