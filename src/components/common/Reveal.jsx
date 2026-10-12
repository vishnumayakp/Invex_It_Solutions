import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'
import { getDirectionalVariants, TRANSITION_EASE } from '../../utils/motionVariants'

/**
 * Reveal — Directional Flowing Entrance Component
 * @param {'left'|'right'|'top'|'bottom'|'center'} from — Direction to enter from
 * @param {string} variant — Backwards-compatible variant mapping
 * @param {number} delay — Stagger delay in seconds
 * @param {number} duration — Animation duration (default 0.9s)
 * @param {number} stagger — Optional stagger for child elements
 * @param {boolean} rotate — Subtle 4deg 3D tilt for side-entering cards
 * @param {number} threshold — Viewport amount to trigger (default 0.2)
 * @param {boolean} once — Whether to trigger only once (default true)
 * @param {string} as — HTML tag to render as motion component (default 'div')
 */
export default function Reveal({
  children,
  from,
  variant,
  delay = 0,
  duration = 0.9,
  stagger,
  rotate = false,
  className = '',
  once = true,
  threshold = 0.2,
  as = 'div',
  style = {},
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const reduced = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [animating, setAnimating] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Resolve direction with backwards-compatible fallback for variant
  let resolvedFrom = from
  if (!resolvedFrom) {
    if (variant === 'scale') resolvedFrom = 'center'
    else if (variant === 'slideLeft') resolvedFrom = 'left'
    else if (variant === 'slideRight') resolvedFrom = 'right'
    else resolvedFrom = 'bottom'
  }

  const MotionTag = motion[as] || motion.div

  if (reduced) {
    return (
      <MotionTag ref={ref} className={className} style={style} {...props}>
        {children}
      </MotionTag>
    )
  }

  const variants = getDirectionalVariants(resolvedFrom, { isMobile, rotate })

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: TRANSITION_EASE,
        ...(stagger ? { staggerChildren: stagger } : {}),
      }}
      onAnimationComplete={() => setAnimating(false)}
      style={{
        ...style,
        willChange: animating && isInView ? 'transform, opacity, filter' : 'auto',
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
