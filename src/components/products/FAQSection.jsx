import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Shield, RefreshCw, Globe } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import ScrollRevealText from '../common/ScrollRevealText'
import Reveal from '../common/Reveal'
import useReducedMotion from '../../hooks/useReducedMotion'
import { TRANSITION_EASE } from '../../utils/motionVariants'
import {
  IPTransferVisual,
  AMCSupportVisual,
  RegionalComplianceVisual,
} from './FAQVisuals'

/* ─── FAQ Items (Word-for-word copy from prompt) ─── */
const FAQS = [
  {
    id: 'faq-1',
    question: 'Who owns the Intellectual Property (IP)?',
    answer:
      'For custom projects, upon final payment, complete IP rights and source code are transferred to the client.',
    icon: Shield,
    Visual: IPTransferVisual,
  },
  {
    id: 'faq-2',
    question: 'Do you provide post-launch support?',
    answer:
      'Yes, we offer extensive AMC packages ensuring your software adapts to OS updates and scaling demands.',
    icon: RefreshCw,
    Visual: AMCSupportVisual,
  },
  {
    id: 'faq-3',
    question: 'Can your software handle UAE/Qatar specific compliances?',
    answer:
      'Absolutely. Through our partnership with Simple Logic IT, our HR and ERP systems are fully localized for Middle Eastern regulations.',
    icon: Globe,
    Visual: RegionalComplianceVisual,
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0) // First item open by default
  const headerRefs = useRef([])
  const reduced = useReducedMotion()

  /* Keyboard Navigation for Accordion Headers */
  const handleHeaderKeyDown = (e, idx) => {
    let nextIdx = idx
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      nextIdx = (idx + 1) % FAQS.length
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      nextIdx = (idx - 1 + FAQS.length) % FAQS.length
    } else if (e.key === 'Home') {
      e.preventDefault()
      nextIdx = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      nextIdx = FAQS.length - 1
    }

    if (nextIdx !== idx) {
      headerRefs.current[nextIdx]?.focus()
    }
  }

  const toggleItem = (idx) => {
    // Only one item is open at a time; clicking open item leaves it or toggles
    setOpenIndex(openIndex === idx ? null : idx)
  }

  /* JSON-LD Structured Data for FAQPage */
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const ActiveDesktopVisual = openIndex !== null ? FAQS[openIndex].Visual : FAQS[0].Visual

  return (
    <SectionWrapper id="faq-section" className="pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28 lg:pb-20">
      {/* FAQ Schema Inject */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ── Left Column: Directional entrance from the LEFT (Sticky on Desktop) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal from="left">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-block"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: 'var(--glass-border)',
                  color: 'var(--accent-mint)',
                }}
              >
                Inquiries & Standards
              </span>
            </Reveal>

            {/* TODO: Heading wording is a placeholder, replace if client supplies wording */}
            <ScrollRevealText
              text="FAQ"
              as="h2"
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
            />

            <Reveal from="left" delay={0.1}>
              <p
                className="text-base sm:text-lg leading-relaxed mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                Direct answers on intellectual property governance, post-deployment maintenance, and regional compliance frameworks.
              </p>
            </Reveal>

            {/* Desktop Floating Glass Visual (Changes with open question) */}
            <div className="hidden lg:block relative mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={openIndex !== null ? openIndex : 'fallback'}
                  initial={reduced ? {} : { opacity: 0, x: -16, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={reduced ? {} : { opacity: 0, x: 16, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: TRANSITION_EASE }}
                  className="rounded-2xl p-[1px] shadow-xl"
                  style={{
                    background:
                      openIndex !== null
                        ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))'
                        : 'var(--border-subtle)',
                  }}
                >
                  <ActiveDesktopVisual />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Right Column: Accordion (Directional entrance from the RIGHT) ── */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx
              const Icon = faq.icon
              const MobileVisual = faq.Visual

              return (
                <Reveal key={faq.id} from="right" delay={idx * 0.1}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 relative overflow-hidden group ${isOpen
                      ? 'shadow-lg shadow-[var(--glow-blue)]/20'
                      : 'hover:border-[var(--accent-blue)]/60'
                      }`}
                    style={{
                      backgroundColor: 'var(--glass-bg)',
                      borderColor: isOpen ? 'var(--accent-blue)' : 'var(--glass-border)',
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    {/* Top edge subtle highlight */}
                    {isOpen && (
                      <div
                        className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(90deg, transparent 10%, var(--accent-blue) 40%, var(--accent-mint) 60%, transparent 90%)',
                        }}
                        aria-hidden="true"
                      />
                    )}

                    {/* Accordion Header Button */}
                    <button
                      ref={(el) => (headerRefs.current[idx] = el)}
                      id={`faq-header-${idx}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      onClick={() => toggleItem(idx)}
                      onKeyDown={(e) => handleHeaderKeyDown(e, idx)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] rounded-2xl"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 flex-1 pr-4">
                        {/* Icon Tile */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'brain-gradient-bg shadow-sm' : 'border'
                            }`}
                          style={{
                            backgroundColor: isOpen ? 'transparent' : 'var(--surface-raised)',
                            borderColor: isOpen ? 'transparent' : 'var(--border-subtle)',
                            color: isOpen ? 'var(--base)' : 'var(--accent-blue)',
                          }}
                        >
                          <Icon size={18} strokeWidth={2.2} />
                        </div>

                        {/* Question Text */}
                        <span
                          className="font-display font-bold text-base sm:text-lg tracking-tight transition-colors duration-200"
                          style={{
                            color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)',
                          }}
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* Rotating Plus / Close Icon */}
                      <div
                        className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300"
                        style={{
                          backgroundColor: 'var(--surface-raised)',
                          borderColor: isOpen ? 'var(--accent-mint)' : 'var(--border-subtle)',
                          color: isOpen ? 'var(--accent-mint)' : 'var(--text-muted)',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                        aria-hidden="true"
                      >
                        <Plus size={16} strokeWidth={2.5} />
                      </div>
                    </button>

                    {/* Accordion Smooth Height Expanding Answer Panel */}
                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-header-${idx}`}
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                      }}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t flex flex-col gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
                          <motion.p
                            initial={{ opacity: 0, filter: 'blur(3px)' }}
                            animate={
                              isOpen
                                ? { opacity: 1, filter: 'blur(0px)' }
                                : { opacity: 0, filter: 'blur(3px)' }
                            }
                            transition={{ duration: 0.25, ease: TRANSITION_EASE }}
                            className="text-sm sm:text-base leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {faq.answer}
                          </motion.p>

                          {/* Mobile-only In-Card Visual */}
                          <div className="block lg:hidden mt-2">
                            <MobileVisual />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
