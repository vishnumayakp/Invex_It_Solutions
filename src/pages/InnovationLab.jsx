import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, Cpu, Eye, Recycle, Sparkles } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/common/Button'
import Reveal from '../components/common/Reveal'
import EclipseRing from '../components/common/EclipseRing'
import useReducedMotion from '../hooks/useReducedMotion'
import { TRANSITION_EASE } from '../utils/motionVariants'

const FOCUS_CHIPS = [
  { label: 'AI-driven inventory forecasting', icon: Cpu },
  { label: 'Computer vision for automated checkouts', icon: Eye },
  { label: 'IoT-enabled waste management', icon: Recycle },
]

export default function InnovationLab() {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()
  const inView = useInView(containerRef, { amount: 0.1 })
  const active = inView && !reduced

  useEffect(() => {
    document.title = 'Innovation Lab | Invex IT Solutions'
    const metaDesc = document.querySelector('meta[name="description"]')
    const descContent = 'The Invex Innovation Lab explores the next frontier of retail tech—from AI-driven inventory forecasting and computer vision for automated checkouts to IoT-enabled waste management systems.'
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = descContent
      document.head.appendChild(meta)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[var(--base)]">
      <Navbar />

      <main className="flex-1 flex flex-col justify-center">
        {/* Single Hero Section */}
        <section
          ref={containerRef}
          aria-label="Innovation Lab Hero"
          className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 select-none"
          style={{ backgroundColor: 'var(--base)' }}
        >
          {/* Ambient Background & Grid */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Subtle Dot Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(var(--border-strong) 1px, transparent 1.5px)',
                backgroundSize: '32px 32px',
                opacity: 0.45,
                WebkitMaskImage: 'radial-gradient(ellipse 65% 60% at 50% 50%, #000 20%, transparent 80%)',
                maskImage: 'radial-gradient(ellipse 65% 60% at 50% 50%, #000 20%, transparent 80%)',
              }}
            />

            {/* Ambient Radial Glow Blobs */}
            <motion.div
              className="absolute top-[12%] -left-20 w-[460px] h-[360px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, var(--glow-blue), transparent 70%)',
                opacity: 0.22,
                filter: 'blur(60px)',
              }}
              animate={active ? { x: [0, 40, 0], y: [0, 25, 0] } : {}}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-[8%] -right-20 w-[500px] h-[380px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, var(--glow-mint), transparent 70%)',
                opacity: 0.2,
                filter: 'blur(60px)',
              }}
              animate={active ? { x: [0, -40, 0], y: [0, -25, 0] } : {}}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Central EclipseRing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-30">
              <EclipseRing size={600} />
            </div>

            {/* Glowing horizon line */}
            <div
              className="absolute inset-x-0 bottom-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent 5%, var(--accent-blue) 35%, var(--accent-mint) 65%, transparent 95%)',
                opacity: 0.4,
              }}
            />
          </div>

          {/* Main Hero Content */}
          <div className="container-wide relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 sm:px-6">
            {/* Eyebrow Pill */}
            <Reveal from="bottom" delay={0.05}>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs font-semibold uppercase tracking-widest glass"
                style={{
                  borderColor: 'var(--glass-border)',
                  color: 'var(--accent-mint)',
                }}
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-[var(--accent-mint)]" aria-hidden="true" />
                <span>Innovation Lab</span>
              </div>
            </Reveal>

            {/* Single H1 Heading */}
            <Reveal from="bottom" delay={0.15}>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] mb-6 text-[var(--text-primary)]">
                Invex Innovation <span className="brain-gradient">Lab</span>
              </h1>
            </Reveal>

            {/* Body Copy (Word for Word) */}
            <Reveal from="bottom" delay={0.25}>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--text-secondary)] mb-4 font-normal">
                The Invex Innovation Lab explores the next frontier of retail tech—from AI-driven inventory forecasting and computer vision for automated checkouts to IoT-enabled waste management systems.
              </p>
            </Reveal>

            {/* Supporting Line (Word for Word) */}
            <Reveal from="bottom" delay={0.32}>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[var(--text-muted)] mb-8 font-medium">
                Our core innovative team develops solutions for any kind of future requirement.
              </p>
            </Reveal>

            {/* Three Focus Chips */}
            <Reveal from="bottom" delay={0.4} className="w-full mb-10">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto" role="list" aria-label="Innovation Lab Focus Areas">
                {FOCUS_CHIPS.map((chip, idx) => {
                  const Icon = chip.icon
                  return (
                    <div
                      key={idx}
                      role="listitem"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass border border-[var(--border-subtle)] text-xs sm:text-sm font-medium text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent-mint)]/40 hover:shadow-[0_0_15px_var(--glow-mint)]"
                    >
                      <Icon className="w-4 h-4 text-[var(--accent-mint)] shrink-0" aria-hidden="true" />
                      <span>{chip.label}</span>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            {/* CTA Button */}
            <Reveal from="bottom" delay={0.48}>
              <Button
                variant="primary"
                href="/contact"
                iconRight={ChevronRight}
                aria-label="Talk to an Expert about our Innovation Lab"
              >
                Talk to an Expert
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
