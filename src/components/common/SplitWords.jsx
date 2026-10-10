import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { wordVariants } from '../../utils/motionVariants'

/**
 * SplitWords — splits a string into words, animating each word with
 * opacity 0->1, y 28->0, and blur(8px)->0 staggered.
 */
export default function SplitWords({
  text = '',
  className = '',
  stagger = 0.08,
  delay = 0,
  as = 'h2',
  highlightWords = [],
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const MotionTag = motion[as] || motion.div

  const words = typeof text === 'string' ? text.split(' ') : []

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {words.map((word, idx) => {
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase().includes(word.toLowerCase()) && word.length > 3
        )

        return (
          <motion.span
            key={`${word}-${idx}`}
            variants={wordVariants}
            className="inline-block whitespace-nowrap mr-[0.25em]"
          >
            {isHighlight ? (
              <span className="brain-gradient">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        )
      })}
    </MotionTag>
  )
}
