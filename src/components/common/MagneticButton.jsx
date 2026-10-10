import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from '../../router/Router'
import useReducedMotion from '../../hooks/useReducedMotion'
import { TRANSITION_EASE } from '../../utils/motionVariants'

/**
 * MagneticButton — interactive CTA button with magnetic pointer pull,
 * arrow nudge on hover, and soft glow pulse.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'cta',
  className = '',
  icon: Icon,
  iconRight: IconRight,
  pullStrength = 0.25,
  ...props
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 18, stiffness: 220, mass: 0.2 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = useCallback((e) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = (e.clientX - centerX) * pullStrength
    const distanceY = (e.clientY - centerY) * pullStrength
    x.set(distanceX)
    y.set(distanceY)
  }, [reduced, pullStrength, x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  const variantClasses = {
    cta: 'brain-gradient-bg text-[var(--base)] shadow-lg shadow-[var(--glow-blue)] hover:shadow-[0_0_28px_var(--glow-blue)]',
    primary: 'brain-gradient-bg text-[var(--base)] hover:shadow-lg hover:shadow-[var(--glow-blue)]',
    secondary: 'border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] bg-[var(--surface)]/40',
  }

  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
    font-semibold text-sm tracking-wide cursor-pointer select-none
    transition-all duration-300
    ${variantClasses[variant] || variantClasses.cta}
    ${className}
  `.trim()

  const content = (
    <>
      {Icon && <Icon size={18} className="shrink-0" />}
      <span>{children}</span>
      {IconRight && (
        <motion.span
          className="inline-flex shrink-0"
          variants={{
            rest: { x: 0 },
            hover: { x: 4, transition: { duration: 0.25, ease: TRANSITION_EASE } },
          }}
        >
          <IconRight size={16} />
        </motion.span>
      )}
    </>
  )

  const motionWrapperProps = {
    ref,
    style: reduced ? {} : { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    initial: "rest",
    whileHover: "hover",
    whileTap: { scale: 0.97 },
    className: "inline-block",
  }

  if (href) {
    return (
      <motion.div {...motionWrapperProps}>
        <Link href={href} className={baseClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button {...motionWrapperProps} onClick={onClick} className={baseClasses} {...props}>
      {content}
    </motion.button>
  )
}
