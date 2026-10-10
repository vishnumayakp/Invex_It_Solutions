import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'

/**
 * ScrollRevealText — scroll-linked text reveal.
 * Words start at muted color / low opacity and shift to primary color as the element crosses the viewport.
 */
function ScrollWord({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.35, 1])

  return (
    <span className="relative inline-block mr-[0.25em]">
      {/* Background muted word */}
      <span className="text-[var(--text-muted)] select-none opacity-40">{word}</span>
      {/* Foreground primary highlighted word */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-[var(--text-primary)]"
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function ScrollRevealText({
  text = '',
  className = '',
  as = 'h2',
}) {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.35'],
  })

  const words = typeof text === 'string' ? text.split(' ') : []
  const Component = as

  if (reduced) {
    return (
      <Component ref={containerRef} className={`${className} text-[var(--text-primary)]`}>
        {text}
      </Component>
    )
  }

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return (
          <ScrollWord
            key={`${word}-${i}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </Component>
  )
}
