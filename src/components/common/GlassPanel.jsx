import { motion } from 'framer-motion'

export default function GlassPanel({ children, className = '', hover = false, ...props }) {
  const Component = hover ? motion.div : 'div'
  const hoverProps = hover ? {
    whileHover: { y: -4, boxShadow: '0 20px 60px var(--glass-shadow)' },
    transition: { duration: 0.3 },
  } : {}

  return (
    <Component
      className={`glass rounded-2xl p-6 md:p-8 ${className}`}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  )
}

export function MetalPanel({ children, className = '', ...props }) {
  return (
    <div className={`metal rounded-2xl p-6 md:p-8 ${className}`} {...props}>
      {children}
    </div>
  )
}
