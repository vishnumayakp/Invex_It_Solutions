/**
 * Global Motion System Tokens and Variants
 * Standard expo-out easing: cubic-bezier(0.22, 1, 0.36, 1)
 */

export const TRANSITION_EASE = [0.22, 1, 0.36, 1]

export const TRANSITION_DEFAULTS = {
  duration: 0.9,
  ease: TRANSITION_EASE,
}

/* ── Directional Flowing Reveal Variants ── */
export const getDirectionalVariants = (from = 'bottom', { isMobile = false, rotate = false } = {}) => {
  const xDistance = isMobile ? 32 : 90
  const yDistance = 40

  switch (from) {
    case 'left':
      return {
        hidden: {
          opacity: 0,
          x: -xDistance,
          filter: 'blur(10px)',
          ...(rotate ? { rotateY: -4 } : {}),
        },
        visible: {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          ...(rotate ? { rotateY: 0 } : {}),
        },
      }
    case 'right':
      return {
        hidden: {
          opacity: 0,
          x: xDistance,
          filter: 'blur(10px)',
          ...(rotate ? { rotateY: 4 } : {}),
        },
        visible: {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          ...(rotate ? { rotateY: 0 } : {}),
        },
      }
    case 'top':
      return {
        hidden: {
          opacity: 0,
          y: -yDistance,
          filter: 'blur(8px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        },
      }
    case 'bottom':
      return {
        hidden: {
          opacity: 0,
          y: yDistance,
          filter: 'blur(8px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        },
      }
    case 'center':
      return {
        hidden: {
          opacity: 0,
          scale: 0.94,
          filter: 'blur(10px)',
        },
        visible: {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
        },
      }
    default:
      return {
        hidden: { opacity: 0, y: yDistance, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }
  }
}

/* ── Standard Reveal Variants (backwards compatible) ── */
export const revealVariants = {
  blurUp: {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: TRANSITION_EASE },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: TRANSITION_EASE },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: TRANSITION_EASE },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: TRANSITION_EASE },
    },
  },
}

/* ── Container Stagger Variants ── */
export const containerStagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

/* ── Headline Word Reveal Variants ── */
export const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: TRANSITION_EASE,
    },
  },
}

/* ── Button Arrow Transition ── */
export const arrowMotion = {
  rest: { x: 0 },
  hover: { x: 4, transition: { duration: 0.25, ease: TRANSITION_EASE } },
}
