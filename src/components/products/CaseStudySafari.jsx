import { useRef, useEffect, useState, useMemo } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'
import SectionWrapper from '../common/SectionWrapper'
import SpotlightCard from '../common/SpotlightCard'
import Reveal from '../common/Reveal'
import { TRANSITION_EASE } from '../../utils/motionVariants'
import safariVisual from '../../assets/images/erp.png'

/* ── UptimeCounter: Animated count-up for decimal value (e.g. 99.9%) ── */
function UptimeCounter({ value = 99.9, suffix = '%', duration = 2, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(reduced ? value : 0)

  useEffect(() => {
    if (!isInView || reduced) {
      if (reduced) setDisplay(value)
      return
    }
    const startTime = Date.now()
    const ms = duration * 1000
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / ms, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(parseFloat((value * eased).toFixed(1)))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value, duration, reduced])

  return (
    <span ref={ref} className={className}>
      {display.toFixed(1)}{suffix}
    </span>
  )
}

/* ── Copy (word-for-word from spec) ── */
const STEPS = [
  {
    label: 'Problem',
    copy: 'Managing massive inventory, multi-point checkouts, and mall operations across the Middle East required a unified, fail-proof system.',
  },
  {
    label: 'Solution',
    copy: 'Invex developed a custom Retail ERP and high-speed POS system with automated checkout integrations.',
  },
  {
    label: 'Result',
    copy: 'reduced checkout queues by 99.9%, and real-time global inventory tracking.', // prefix rendered separately with Counter
    highlight: true,
  },
]

/* ── Timeline node component ── */
function TimelineNode({ step, index, scrollProgress, total, reduced }) {
  const nodeRef = useRef(null)
  const nodeInView = useInView(nodeRef, { once: true, amount: 0.3 })

  /* Card entrance stagger */
  const delay = 0.2 + index * 0.15

  /* Determine if this node has been "activated" by the fill line */
  const threshold = (index + 0.5) / total
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (reduced) {
      setIsActive(true)
      return
    }
    const unsubscribe = scrollProgress.on('change', (v) => {
      if (v >= threshold) setIsActive(true)
    })
    return unsubscribe
  }, [scrollProgress, threshold, reduced])

  const isResult = step.highlight

  return (
    <div ref={nodeRef} className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
      {/* ── Node + connecting stem ── */}
      <div className="flex flex-col items-center shrink-0 z-10">
        {/* Node circle */}
        <motion.div
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
          style={{
            borderColor: isActive ? 'var(--accent-mint)' : 'var(--border-subtle)',
            background: isActive ? 'var(--surface-raised)' : 'var(--surface)',
            boxShadow: isActive ? '0 0 12px var(--glow-mint)' : 'none',
            transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {isActive && (
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--accent-mint)' }}
            />
          )}
        </motion.div>

        {/* Connecting stem (hidden on last) */}
        {index < total - 1 && (
          <div
            className="w-px flex-1 min-h-[40px]"
            style={{
              background: 'var(--border-subtle)',
            }}
          />
        )}
      </div>

      {/* ── Card ── */}
      <Reveal from="left" delay={delay} className="flex-1 min-w-0">
        {isResult ? (
          /* Gradient border wrapper for the Result card (borderImage doesn't work with border-radius) */
          <div
            className="rounded-3xl p-[1px]"
            style={{
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
              boxShadow: '0 0 24px var(--glow-mint), 0 0 48px var(--glow-blue)',
            }}
          >
            <SpotlightCard
              cursorLabel="EXPLORE"
              className="p-5 sm:p-6"
              style={{ background: 'var(--surface)' }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest mb-3 inline-block"
                style={{ color: 'var(--accent-mint)' }}
              >
                {step.label}
              </span>
              <div>
                <div className="text-4xl sm:text-5xl font-display font-bold mb-3 brain-gradient">
                  <UptimeCounter value={99.9} suffix="%" duration={2} className="brain-gradient" />
                </div>
                <p style={{ color: 'var(--text-secondary)' }} className="text-sm sm:text-base leading-relaxed">
                  uptime, {step.copy}
                </p>
                {/* TODO: Replace "X%" with real number when available */}
              </div>
            </SpotlightCard>
          </div>
        ) : (
          <SpotlightCard
            cursorLabel="EXPLORE"
            className="p-5 sm:p-6"
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 inline-block"
              style={{ color: 'var(--accent-blue)' }}
            >
              {step.label}
            </span>
            <p style={{ color: 'var(--text-secondary)' }} className="text-sm sm:text-base leading-relaxed">
              {step.copy}
            </p>
          </SpotlightCard>
        )}
      </Reveal>
    </div>
  )
}

/* ── Floating 3D Visual Frame ── */
function VisualFrame({ reduced }) {
  const frameRef = useRef(null)
  const inView = useInView(frameRef, { once: false, amount: 0.1 })
  const [isHovered, setIsHovered] = useState(false)

  /* Floating idle animation */
  const floatingVariants = {
    idle: {
      y: [0, -8, 0],
      rotateY: 4,
      transition: {
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        rotateY: { duration: 0.6, ease: TRANSITION_EASE },
      },
    },
    hovered: {
      y: 0,
      rotateY: 0,
      transition: { duration: 0.5, ease: TRANSITION_EASE },
    },
    stopped: {},
  }

  const currentVariant = useMemo(() => {
    if (reduced || !inView) return 'stopped'
    if (isHovered) return 'hovered'
    return 'idle'
  }, [reduced, inView, isHovered])

  return (
    <motion.div
      ref={frameRef}
      className="relative w-full"
      style={{ perspective: 800 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={floatingVariants}
        animate={currentVariant}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow behind frame */}
        <div
          className="absolute -inset-4 rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, var(--glow-blue) 0%, transparent 70%)',
            opacity: 0.15,
            filter: 'blur(32px)',
          }}
          aria-hidden="true"
        />

        {/* Frame border glow */}
        <div
          className="relative rounded-2xl p-[1px]"
          style={{
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
          }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--surface)' }}
          >
            <img
              src={safariVisual}
              alt="Safari Group Retail ERP and POS system"
              loading="eager"
              decoding="async"
              draggable={false}
              className={`w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-[left_top] block transition-transform duration-500 ease-out ${!reduced && isHovered ? 'scale-[1.03]' : 'scale-100'
                }`}
              style={{
                imageRendering: '-webkit-optimize-contrast',
              }}
            />
          </div>
        </div>

        {/* Label badge */}
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-muted)',
            backdropFilter: 'blur(12px)',
          }}
        >
          Retail ERP + POS
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Main Section ── */
export default function CaseStudySafari() {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const reduced = useReducedMotion()

  /* Scroll progress for the timeline fill line */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.5'],
  })

  /* Map scroll to 0–100% height for the glowing fill line */
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <SectionWrapper id="case-study-safari" className="pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28 lg:pb-36">
      <div className="container-wide">
        {/* Section heading */}
        <Reveal from="bottom" className="mb-12 md:mb-16">
          <h2
            className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Case Study 1:{' '}
            <span className="brain-gradient">Safari Group</span>{' '}
            Hypermarket Transformation
          </h2>
        </Reveal>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* ── LEFT: Timeline ── */}
          <div ref={timelineRef} className="relative flex-1 min-w-0 lg:max-w-[55%]">
            {/* Glowing fill line (behind nodes) */}
            <div
              className="absolute left-[10px] top-0 bottom-0 w-px pointer-events-none z-0"
              style={{ background: 'var(--border-subtle)', opacity: 0.3 }}
              aria-hidden="true"
            />
            {!reduced && (
              <motion.div
                className="absolute left-[10px] top-0 w-px pointer-events-none z-0"
                style={{
                  height: fillHeight,
                  background: 'linear-gradient(180deg, var(--accent-blue), var(--accent-mint))',
                  boxShadow: '0 0 8px var(--glow-mint)',
                }}
                aria-hidden="true"
              />
            )}
            {reduced && (
              <div
                className="absolute left-[10px] top-0 bottom-0 w-px pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(180deg, var(--accent-blue), var(--accent-mint))',
                }}
                aria-hidden="true"
              />
            )}

            {/* Timeline nodes */}
            {STEPS.map((step, i) => (
              <TimelineNode
                key={step.label}
                step={step}
                index={i}
                scrollProgress={scrollYProgress}
                total={STEPS.length}
                reduced={reduced}
              />
            ))}
          </div>

          {/* ── RIGHT: Visual (sticky on desktop) ── */}
          <Reveal from="right" className="flex-1 min-w-0 lg:sticky lg:top-32 lg:self-start">
            <VisualFrame reduced={reduced} />
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
