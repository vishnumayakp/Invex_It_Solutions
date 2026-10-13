import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock } from 'lucide-react'
import Reveal from '../common/Reveal'
import ScrollRevealText from '../common/ScrollRevealText'
import EclipseRing from '../common/EclipseRing'
import useReducedMotion from '../../hooks/useReducedMotion'

export default function ResponseExpectation() {
  const cardRef = useRef(null)
  const inView = useInView(cardRef, { once: true, amount: 0.3 })
  const reduced = useReducedMotion()

  return (
    <div className="relative pt-0 pb-8 md:pb-12 overflow-x-clip">
      {/* Decorative EclipseRing Glow behind centered card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0 opacity-40">
        <EclipseRing size={520} />
      </div>

      <div className="container-wide relative z-10 max-w-4xl mx-auto">
        <Reveal from="bottom">
          <div
            ref={cardRef}
            className="relative rounded-3xl p-8 sm:p-12 md:p-14 text-center border overflow-hidden shadow-2xl transition-colors duration-300"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 24px 60px -15px var(--glass-shadow, rgba(0,0,0,0.3))',
            }}
          >
            {/* Top Eyebrow Tag */}
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-6 inline-block"
              style={{
                backgroundColor: 'var(--surface-raised)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--accent-mint)',
              }}
            >
              Response Expectations
            </span>

            {/* Accessible Heading */}
            <h2 className="sr-only">Response Expectations</h2>

            {/* Decorative Clock / 24h Progress Ring Graphic */}
            <div className="flex items-center justify-center mb-8" aria-hidden="true">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                  {/* Track ring */}
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="var(--border-subtle)"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  {/* Animated Progress Ring */}
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="url(#response-ring-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 28}
                    initial={{ strokeDashoffset: reduced ? 0 : 2 * Math.PI * 28 }}
                    animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: reduced ? 0 : 2 * Math.PI * 28 }}
                    transition={{ duration: reduced ? 0 : 1.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <defs>
                    <linearGradient id="response-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent-blue)" />
                      <stop offset="100%" stopColor="var(--accent-mint)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center Clock Icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ color: 'var(--accent-mint)' }}
                >
                  <Clock size={22} strokeWidth={2.2} />
                </div>
              </div>
            </div>

            {/* Exact Word-for-Word Quote with ScrollRevealText */}
            <div className="max-w-2xl mx-auto">
              <ScrollRevealText
                text="Our technical consultants review all inquiries and respond within 24 hours to schedule a discovery call."
                as="p"
                className="font-display font-medium text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
