import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import Reveal from '../common/Reveal'
import MagneticButton from '../common/MagneticButton'
import useReducedMotion from '../../hooks/useReducedMotion'
import { RetailERPMockup } from './DemoMockups'

function ArrowRightIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export default function DemoCTA() {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: false, amount: 0.15 })
  const reduced = useReducedMotion()

  return (
    <SectionWrapper id="demo-cta" className="pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28 lg:pb-36">
      <div className="container-wide">
        {/* ── Main Glass Panel ── */}
        <div
          ref={containerRef}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden border transition-colors duration-300"
          style={{
            backgroundColor: 'var(--glass-bg)',
            borderColor: 'var(--glass-border)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 24px 60px -15px var(--glass-shadow, rgba(0,0,0,0.3))',
          }}
        >
          {/* Top Radial Glow inside the card (blue on left, mint on right) */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none opacity-20 blur-3xl"
            style={{
              background:
                'radial-gradient(ellipse at 35% 50%, var(--glow-blue) 0%, transparent 60%), radial-gradient(ellipse at 65% 50%, var(--glow-mint) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* ── Left Column: Directional entrance from the left ── */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Reveal from="left">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-6 inline-block"
                  style={{
                    backgroundColor: 'var(--surface-raised)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--accent-blue)',
                  }}
                >
                  Tailored Deployments
                </span>
              </Reveal>

              {/* TODO: Replace CTA heading placeholder with approved copy */}
              <Reveal from="left" delay={0.1}>
                <h2
                  className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  [CTA heading placeholder]
                </h2>
              </Reveal>

              <Reveal from="left" delay={0.2}>
                <p
                  className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Connect directly with our engineering team to review system requirements, view live modules, and map out your deployment timeline.
                </p>
              </Reveal>

              {/* Live Demo CTA Button */}
              <Reveal from="left" delay={0.3}>
                <MagneticButton
                  href="/contact"
                  variant="cta"
                  iconRight={ArrowRightIcon}
                  className="px-8 py-4 text-base font-semibold shadow-xl"
                  data-cursor="CLICK"
                >
                  Request a Live Demo
                </MagneticButton>
              </Reveal>
            </div>

            {/* ── Right Column: Floating Dashboard Mockup from the right ── */}
            <div className="lg:col-span-5 relative" style={{ perspective: 1000 }}>
              <Reveal from="right" delay={0.2}>
                <motion.div
                  className="relative rounded-2xl p-[1px] shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
                    transformStyle: 'preserve-3d',
                  }}
                  animate={
                    !reduced && inView
                      ? {
                        y: [0, -10, 0],
                        rotateY: [2, -2, 2],
                      }
                      : {}
                  }
                  transition={
                    !reduced
                      ? {
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                      : {}
                  }
                >
                  {/* Backdrop glow behind floating mockup */}
                  <div
                    className="absolute -inset-4 rounded-3xl pointer-events-none opacity-25 blur-2xl -z-10"
                    style={{
                      background: 'radial-gradient(circle, var(--glow-blue) 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />

                  <div
                    className="rounded-2xl overflow-hidden scale-95 sm:scale-100"
                    style={{ backgroundColor: 'var(--surface)' }}
                  >
                    <RetailERPMockup />
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>

          {/* ── Glowing Blue-to-Mint Line along panel's bottom edge that pulses slowly ── */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, var(--accent-blue) 25%, var(--accent-mint) 75%, transparent 100%)',
            }}
            animate={
              !reduced && inView
                ? {
                  opacity: [0.35, 1, 0.35],
                  boxShadow: [
                    '0 0 8px var(--glow-blue)',
                    '0 0 20px var(--glow-mint)',
                    '0 0 8px var(--glow-blue)',
                  ],
                }
                : { opacity: 0.7 }
            }
            transition={
              !reduced
                ? {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
                : {}
            }
            aria-hidden="true"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
