import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import ScrollRevealText from '../common/ScrollRevealText'
import Reveal from '../common/Reveal'
import EclipseRing from '../common/EclipseRing'
import useReducedMotion from '../../hooks/useReducedMotion'
import { TRANSITION_EASE } from '../../utils/motionVariants'
import { RetailERPMockup, SalonPOSMockup, QueueDisplayMockup } from './DemoMockups'
import { ArrowRight } from 'lucide-react'
import Button from '../common/Button'

/* ─── Demos List ─── */
const DEMOS = [
  {
    id: 'retail-erp',
    label: 'Retail ERP',
    description: 'Enterprise inventory orchestration, store analytics, and real-time replenishment.',
    Component: RetailERPMockup,
  },
  {
    id: 'salon-pos',
    label: 'Salon POS',
    description: 'High-touch service ticketing, fast cart operations, and streamlined checkout.',
    Component: SalonPOSMockup,
  },
  {
    id: 'queue-display',
    label: 'Queue Management Display',
    description: 'Wall-mounted public terminal with automated token callouts and counter routing.',
    Component: QueueDisplayMockup,
  },
]

export default function DemoGallery() {
  const containerRef = useRef(null)
  const frameRef = useRef(null)
  const tabRefs = useRef([])
  const lastActiveElementRef = useRef(null)
  const modalCloseBtnRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  const reduced = useReducedMotion()
  const inView = useInView(containerRef, { once: false, amount: 0.15 })

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  /* Handle Tab selection via click or keyboard */
  const handleSelectTab = useCallback(
    (index) => {
      if (index === activeIndex) return
      setDirection(index > activeIndex ? 1 : -1)
      setActiveIndex(index)
    },
    [activeIndex]
  )

  /* Keyboard navigation for WAI-ARIA tablist */
  const handleKeyDown = (e, index) => {
    let next = index
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      next = (index + 1) % DEMOS.length
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      next = (index - 1 + DEMOS.length) % DEMOS.length
    } else if (e.key === 'Home') {
      e.preventDefault()
      next = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      next = DEMOS.length - 1
    }

    if (next !== index) {
      handleSelectTab(next)
      tabRefs.current[next]?.focus()
    }
  }

  /* Desktop gentle hover parallax without re-renders (via CSS variables) */
  const handleMouseMove = (e) => {
    if (reduced || isMobile || !frameRef.current) return
    const rect = frameRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    frameRef.current.style.setProperty('--mouse-x', x.toFixed(4))
    frameRef.current.style.setProperty('--mouse-y', y.toFixed(4))
  }

  const handleMouseLeave = () => {
    if (!frameRef.current) return
    frameRef.current.style.setProperty('--mouse-x', '0')
    frameRef.current.style.setProperty('--mouse-y', '0')
  }

  /* Lightbox open / close & focus management */
  const openLightbox = (index) => {
    lastActiveElementRef.current = document.activeElement
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
    if (lastActiveElementRef.current) {
      lastActiveElementRef.current.focus()
    }
  }, [])

  /* Lightbox Escape key and Focus Trap */
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDownModal = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'Tab') {
        const modal = document.getElementById('demo-lightbox-dialog')
        if (!modal) return
        const focusable = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDownModal)
    const timer = setTimeout(() => {
      modalCloseBtnRef.current?.focus()
    }, 50)

    return () => {
      window.removeEventListener('keydown', handleKeyDownModal)
      clearTimeout(timer)
    }
  }, [lightboxIndex, closeLightbox])

  const ActiveComponent = DEMOS[activeIndex].Component

  /* 3D Directional Slide Variants: Previous exits left, Next enters right with 3D tilt settling to 0 */
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      rotateY: dir > 0 ? 8 : -8,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: reduced ? 0 : 0.65,
        ease: TRANSITION_EASE,
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      rotateY: dir > 0 ? -8 : 8,
      scale: 0.98,
      transition: {
        duration: reduced ? 0 : 0.45,
        ease: TRANSITION_EASE,
      },
    }),
  }

  return (
    <SectionWrapper id="demo-gallery" className="pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28 lg:pb-20">
      <div ref={containerRef} className="container-wide">
        {/* Section Heading with Scroll-linked Word Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* <Reveal from="bottom">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-block"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                color: 'var(--accent-mint)',
              }}
            >
              Interactive Showcase
            </span>
          </Reveal> */}

          <ScrollRevealText
            text="Where Ideas Go Live"
            as="h2"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
          />

          <Reveal from="bottom" delay={0.15}>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Examine live system blueprints, responsive point-of-sale views, and synchronized queue terminals.
            </p>
          </Reveal>
        </div>

        {/* ── Mode 1: Mobile & Reduced Motion (Stacked, No Pinning) ── */}
        {(isMobile || reduced) ? (
          <div className="flex flex-col gap-12 sm:gap-16">
            {DEMOS.map((demo, idx) => {
              const Mockup = demo.Component
              return (
                <div key={demo.id} className="flex flex-col gap-4">
                  {/* Item Label & Eyebrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-xs font-bold px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: 'var(--surface-raised)',
                          color: 'var(--accent-blue)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <h3
                        className="font-display font-bold text-xl sm:text-2xl"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {demo.label}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => openLightbox(idx)}
                      className="text-xs font-mono px-3 py-1.5 rounded-full border flex items-center gap-1.5 cursor-pointer"
                      style={{
                        backgroundColor: 'var(--surface-raised)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-muted)',
                      }}
                      aria-label={`Open ${demo.label} in fullscreen lightbox`}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
                        <path d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4" />
                      </svg>
                      <span>Expand</span>
                    </button>
                  </div>

                  {/* Device Window Frame */}
                  <div
                    onClick={() => openLightbox(idx)}
                    className="group relative rounded-2xl p-[1px] cursor-pointer transition-all duration-300 hover:shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        openLightbox(idx)
                      }
                    }}
                    aria-label={`Click to expand ${demo.label}`}
                  >
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{ backgroundColor: 'var(--surface)' }}
                    >
                      {/* Browser Window Header */}
                      <div
                        className="flex items-center justify-between px-4 py-2 border-b"
                        style={{
                          backgroundColor: 'var(--surface-raised)',
                          borderColor: 'var(--border-subtle)',
                        }}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                          <span
                            className="ml-3 text-[11px] font-mono"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            invex://app/{demo.id}
                          </span>
                        </div>
                      </div>

                      <Mockup />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* ── Mode 2: Desktop Cinematic Showcase ── */
          <div className="relative flex flex-col items-center">
            {/* Decorative Background Glowing EclipseRing & Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0">
              <EclipseRing size={680} className="opacity-40" />
              <div
                className="w-[720px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 40% 50%, var(--glow-blue) 0%, transparent 60%), radial-gradient(ellipse at 60% 50%, var(--glow-mint) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Central Browser Device Frame */}
            <div
              ref={frameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => openLightbox(activeIndex)}
              className="group relative w-full max-w-5xl rounded-2xl p-[1px] cursor-pointer transition-shadow duration-500 hover:shadow-2xl z-10"
              style={{
                background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
                perspective: 1200,
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(activeIndex)
                }
              }}
              aria-label={`Current demo: ${DEMOS[activeIndex].label}. Click to open full-screen lightbox.`}
              data-cursor="EXPAND"
            >
              <div
                className="rounded-2xl overflow-hidden transition-transform duration-200"
                style={{
                  backgroundColor: 'var(--surface)',
                  transform:
                    'translate3d(calc(var(--mouse-x, 0) * 8px), calc(var(--mouse-y, 0) * 8px), 0)',
                }}
              >
                {/* Browser Window Bar with Three Dots and glowing gradient edge */}
                <div
                  className="flex items-center justify-between px-4 py-2.5 border-b"
                  style={{
                    backgroundColor: 'var(--surface-raised)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <div
                      className="ml-3 px-3 py-0.5 rounded-md text-[11px] font-mono border"
                      style={{
                        backgroundColor: 'var(--base)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      invex://preview/{DEMOS[activeIndex].id}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-[11px] font-mono flex items-center gap-1.5 px-2.5 py-1 rounded-full border group-hover:border-[var(--accent-mint)] transition-colors"
                      style={{
                        backgroundColor: 'var(--glass-bg)',
                        borderColor: 'var(--glass-border)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4" />
                      </svg>
                      <span>Click to Expand</span>
                    </span>
                  </div>
                </div>

                {/* Active Demo Canvas Stage */}
                <div
                  id={`demo-panel-${activeIndex}`}
                  role="tabpanel"
                  aria-labelledby={`demo-tab-${activeIndex}`}
                  className="relative overflow-hidden min-h-[400px] sm:min-h-[460px] md:min-h-[500px]"
                >
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={DEMOS[activeIndex].id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <ActiveComponent />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* ── Accessible Tab Bar Controls ── */}
            <div className="mt-8 flex flex-col items-center gap-3 z-10">
              <div
                role="tablist"
                aria-label="Screenshots & Demos tabs"
                className="inline-flex items-center gap-2 p-1.5 rounded-full border"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  borderColor: 'var(--glass-border)',
                  boxShadow: '0 8px 30px -5px var(--glass-shadow, rgba(0,0,0,0.25))',
                }}
              >
                {DEMOS.map((demo, idx) => {
                  const isActive = activeIndex === idx
                  return (
                    <button
                      key={demo.id}
                      ref={(el) => (tabRefs.current[idx] = el)}
                      id={`demo-tab-${idx}`}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`demo-panel-${idx}`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => handleSelectTab(idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      className={`
                        relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold
                        transition-all duration-300 cursor-pointer select-none
                        outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)]
                        ${isActive ? 'brain-gradient-bg shadow-md' : 'hover:text-[var(--text-primary)]'}
                      `}
                      style={{
                        color: isActive ? 'var(--base)' : 'var(--text-muted)',
                      }}
                    >
                      {demo.label}
                    </button>
                  )
                })}
              </div>

              {/* Thin Progress Indicator Line */}
              <div
                className="w-48 h-[2px] rounded-full overflow-hidden"
                style={{ backgroundColor: 'var(--border-subtle)' }}
                aria-hidden="true"
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-mint))',
                  }}
                  animate={{
                    width: `${((activeIndex + 1) / DEMOS.length) * 100}%`,
                  }}
                  transition={{ duration: 0.35, ease: TRANSITION_EASE }}
                />
              </div>
            </div>
          </div>
        )}


        {/* ── Request a Live Demo CTA ── */}
        <Reveal from="bottom" delay={0.1}>
          <div className="mt-14 sm:mt-20 flex flex-col items-center gap-4 text-center">
            <p
              className="text-sm sm:text-base max-w-md"
              style={{ color: 'var(--text-muted)' }}
            >
              {/* TODO: replace this line if the client supplies wording */}
              Want to see it running on your own data?
            </p>

            <Button
              href="/contact"
              variant="cta"
              iconRight={ArrowRight}
              magnetic
              data-cursor="DEMO"
            >
              Request a Live Demo
            </Button>
          </div>
        </Reveal>
      </div>


      {/* ─────────────────────────────────────────────────────────────
       * Lightbox Fullscreen Modal (Rendered via React Portal)
       * Accessible glass modal with focus trap, Escape to close,
       * and focus restoration.
       * ───────────────────────────────────────────────────────────── */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {lightboxIndex !== null && (
              <div
                id="demo-lightbox-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="lightbox-title"
                className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-10"
              >
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeLightbox}
                  className="absolute inset-0 backdrop-blur-xl"
                  style={{
                    backgroundColor: 'rgba(7, 11, 20, 0.88)',
                  }}
                />

                {/* Modal Dialog Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 16 }}
                  transition={{ duration: 0.3, ease: TRANSITION_EASE }}
                  className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border flex flex-col shadow-2xl z-10"
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--glass-border)',
                  }}
                >
                  {/* Modal Top Bar */}
                  <div
                    className="flex items-center justify-between px-5 sm:px-6 py-4 border-b shrink-0"
                    style={{
                      backgroundColor: 'var(--surface-raised)',
                      borderColor: 'var(--border-subtle)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: 'var(--glass-bg)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--accent-mint)',
                        }}
                      >
                        DEMO 0{lightboxIndex + 1}
                      </span>
                      <h3
                        id="lightbox-title"
                        className="font-display font-bold text-lg sm:text-xl"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {DEMOS[lightboxIndex].label}
                      </h3>
                    </div>

                    {/* Close Button */}
                    <button
                      ref={modalCloseBtnRef}
                      type="button"
                      onClick={closeLightbox}
                      className="p-2 rounded-full border transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)]"
                      style={{
                        backgroundColor: 'var(--surface)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                      aria-label="Close lightbox"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                        <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Content Scroll Area */}
                  <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                    {(() => {
                      const LightboxComponent = DEMOS[lightboxIndex].Component
                      return <LightboxComponent />
                    })()}
                  </div>

                  {/* Modal Footer Controls */}
                  <div
                    className="px-6 py-3 border-t flex items-center justify-between text-xs font-mono shrink-0"
                    style={{
                      backgroundColor: 'var(--surface-raised)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <span>Press ESC to exit</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setLightboxIndex((lightboxIndex - 1 + DEMOS.length) % DEMOS.length)}
                        className="px-3 py-1 rounded border hover:text-[var(--text-primary)] cursor-pointer"
                        style={{ borderColor: 'var(--border-subtle)' }}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={() => setLightboxIndex((lightboxIndex + 1) % DEMOS.length)}
                        className="px-3 py-1 rounded border hover:text-[var(--text-primary)] cursor-pointer"
                        style={{ borderColor: 'var(--border-subtle)' }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </SectionWrapper>
  )
}
