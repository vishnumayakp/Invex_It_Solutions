import { motion } from 'framer-motion'
import { Link } from '../../router/Router'

const variants = {
  primary: 'brain-gradient-bg text-[var(--base)] hover:shadow-lg hover:shadow-[var(--glow-blue)]',
  secondary: 'border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]',
  ghost: 'text-[var(--text-muted)] hover:text-[var(--text-primary)]',
  cta: 'brain-gradient-bg text-[var(--base)] shadow-lg shadow-[var(--glow-blue)]',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  icon: Icon,
  iconRight: IconRight,
  magnetic = false,
  ...props
}) {
  const baseClasses = `
    inline-flex items-center gap-2 px-6 py-3 rounded-full
    font-semibold text-sm tracking-wide
    transition-all duration-300 ease-out
    cursor-pointer select-none
    ${variants[variant] || variants.primary}
    ${className}
  `.trim()

  const content = (
    <>
      {Icon && <Icon size={18} />}
      {children}
      {IconRight && <IconRight size={16} />}
    </>
  )

  const motionProps = magnetic ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.97 },
  } : {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={baseClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button {...motionProps} className={baseClasses} {...props}>
      {content}
    </motion.button>
  )
}
