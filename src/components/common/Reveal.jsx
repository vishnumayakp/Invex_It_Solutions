import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Reveal — Wraps children with a scroll-triggered entrance animation.
 * Default variant is now 'blurUp' (opacity + y + blur), matching the reference design.
 * @param {'fade'|'slideUp'|'blurUp'|'slideLeft'|'slideRight'|'scale'} variant
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
  blurUp: {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
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
  variant = 'blurUp',
  delay = 0,
  duration = 0.9,
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
      variants={animations[variant] || animations.blurUp}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
