import { useRef, useEffect, useState, useMemo } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'
import SectionWrapper from '../common/SectionWrapper'
import SpotlightCard from '../common/SpotlightCard'
import Reveal from '../common/Reveal'
import { TRANSITION_EASE } from '../../utils/motionVariants'
import hrVisual from '../../assets/images/hrdemo.png'

/* ── Copy (word-for-word from spec) ── */
const STEPS = [
  {
    label: 'Problem',
    copy: 'UAE and Qatar businesses needed localized, compliant HRMS and token management systems.',
  },
  {
    label: 'Solution',
    copy: 'We engineered a modular HR & Payroll system and a smart Queue Management software suite deployed via Simple Logic IT.',
  },
  {
    label: 'Result',
    copy: 'Adopted by hundreds of businesses, streamlining workforce management and customer flow.',
    highlight: true,
  },
]

/* ── Timeline node component ── */
function TimelineNode({ step, index, scrollProgress, total, reduced }) {
  const nodeRef = useRef(null)
  const nodeInView = useInView(nodeRef, { once: true, amount: 0.3 })
  const delay = 0.2 + index * 0.15

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

        {index < total - 1 && (
          <div
            className="w-px flex-1 min-h-[40px]"
            style={{ background: 'var(--border-subtle)' }}
          />
        )}
      </div>

      {/* ── Card (enters from RIGHT since timeline is on the right) ── */}
      <Reveal from="right" delay={delay} className="flex-1 min-w-0">
        <SpotlightCard
          cursorLabel="EXPLORE"
          className={`p-5 sm:p-6 ${isResult ? 'border border-transparent' : ''}`}
          style={isResult ? {
            borderImage: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint)) 1',
            boxShadow: '0 0 24px var(--glow-mint), 0 0 48px var(--glow-blue)',
          } : {}}
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest mb-3 inline-block"
            style={{ color: isResult ? 'var(--accent-mint)' : 'var(--accent-blue)' }}
          >
            {step.label}
          </span>

          <p style={{ color: 'var(--text-secondary)' }} className="text-sm sm:text-base leading-relaxed">
            {step.copy}
          </p>
        </SpotlightCard>
      </Reveal>
    </div>
  )
}

/* ── Floating 3D Visual Frame (HR & Payroll System) ── */
function VisualFrame({ reduced }) {
  const frameRef = useRef(null)
  const inView = useInView(frameRef, { once: false, amount: 0.1 })
  const [isHovered, setIsHovered] = useState(false)

  const floatingVariants = {
    idle: {
      y: [0, -8, 0],
      rotateY: -4,
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
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow behind frame */}
        <div
          className="absolute -inset-4 rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, var(--glow-mint) 0%, transparent 70%)',
            opacity: 0.15,
            filter: 'blur(32px)',
          }}
          aria-hidden="true"
        />

        {/* Frame border glow */}
        <div
          className="relative rounded-2xl p-[1px]"
          style={{ background: 'linear-gradient(135deg, var(--accent-mint), var(--accent-blue))' }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--surface)' }}
          >
            <img
              src={hrVisual}
              alt="Simple Logic IT HR and Payroll System"
              loading="eager"
              decoding="async"
              draggable={false}
              className={`w-full h-auto object-contain block transition-transform duration-500 ease-out ${!reduced && isHovered ? 'scale-[1.02]' : 'scale-100'
                }`}
              style={{
                imageRendering: '-webkit-optimize-contrast',
              }}
            />
          </div>
        </div>

        {/* Badge */}
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider z-10"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-muted)',
            backdropFilter: 'blur(12px)',
          }}
        >
          HR &amp; Payroll System
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Main Section ── */
export default function CaseStudySimpleLogic() {
  const timelineRef = useRef(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.5'],
  })

  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <SectionWrapper id="case-study-simple-logic" className="pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28 lg:pb-36">
      <div className="container-wide">
        {/* Section heading */}
        <Reveal from="bottom" className="mb-12 md:mb-16">
          <h2
            className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Case Study 2:{' '}
            <span className="brain-gradient">Simple Logic IT</span>{' '}
            — Queue &amp; HR Systems
          </h2>
        </Reveal>

        {/* Mirrored two-column: Visual LEFT, Timeline RIGHT */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-start">
          {/* ── RIGHT: Timeline ── */}
          <div ref={timelineRef} className="relative flex-1 min-w-0 lg:max-w-[55%]">
            {/* Background fill line */}
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

          {/* ── LEFT: Visual (sticky on desktop) ── */}
          <Reveal from="left" className="flex-1 min-w-0 lg:sticky lg:top-32 lg:self-start">
            <VisualFrame reduced={reduced} />
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
