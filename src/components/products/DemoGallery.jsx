import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import ScrollRevealText from '../common/ScrollRevealText'
import Reveal from '../common/Reveal'
import EclipseRing from '../common/EclipseRing'
import Button from '../common/Button'
import VideoCard from './VideoCard'
import { TRANSITION_EASE } from '../../utils/motionVariants'

// Video assets
import erpVideo from '../../assets/videos/erpdemo.mp4'
import hrVideo from '../../assets/videos/HRdemo.mp4'

/* ─── Demo Videos Configuration ─── */
const VIDEOS = [
  {
    id: 'retail-erp',
    badge: 'ERP DEMO',
    title: 'Retail ERP System',
    description:
      'End-to-end inventory, purchasing, billing and reporting for multi-branch retail.',
    src: erpVideo,
    ariaLabel: 'Play Retail ERP system demo video',
  },
  {
    id: 'hr-payroll',
    badge: 'HR & PAYROLL DEMO',
    title: 'HR & Payroll System',
    description:
      'Employee management, attendance, leave and payroll in one platform.',
    src: hrVideo,
    ariaLabel: 'Play HR & Payroll system demo video',
  },
]

export default function DemoGallery() {
  const containerRef = useRef(null)
  const lastActiveElementRef = useRef(null)
  const modalCloseBtnRef = useRef(null)

  const [playingId, setPlayingId] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  /* Lightbox open / close & focus management */
  const openLightbox = (index) => {
    // Pause any inline video when opening lightbox
    setPlayingId(null)
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
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), video'
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

  return (
    <SectionWrapper id="demo-gallery" className="pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28 lg:pb-20">
      <div ref={containerRef} className="container-wide relative">
        {/* Decorative Background Glowing EclipseRing & Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0">
          <EclipseRing size={680} className="opacity-25" />
          <div
            className="w-[720px] h-[420px] rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 40% 50%, var(--glow-blue) 0%, transparent 60%), radial-gradient(ellipse at 60% 50%, var(--glow-mint) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Section Heading with Scroll-linked Word Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative z-10">
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

        {/* ── Demo Video Cards Grid (2 Columns on Desktop, Stacked on Mobile) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch relative z-10 max-w-6xl mx-auto">
          {VIDEOS.map((video, idx) => (
            <Reveal
              key={video.id}
              from={idx === 0 ? 'left' : 'right'}
              delay={0.2 + idx * 0.1}
              duration={0.8}
              className="h-full flex flex-col"
            >
              <VideoCard
                video={video}
                isPlaying={playingId === video.id}
                onPlay={() => setPlayingId(video.id)}
                onPause={() => {
                  if (playingId === video.id) setPlayingId(null)
                }}
                onEnded={() => {
                  if (playingId === video.id) setPlayingId(null)
                }}
                onExpand={() => openLightbox(idx)}
              />
            </Reveal>
          ))}
        </div>

        {/* ── Request a Live Demo CTA ── */}
        <Reveal from="bottom" delay={0.1}>
          <div className="mt-14 sm:mt-20 flex flex-col items-center gap-4 text-center relative z-10">
            <p
              className="text-sm sm:text-base max-w-md"
              style={{ color: 'var(--text-muted)' }}
            >
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
                  className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl border flex flex-col shadow-2xl z-10"
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
                        {VIDEOS[lightboxIndex].badge}
                      </span>
                      <h3
                        id="lightbox-title"
                        className="font-display font-bold text-lg sm:text-xl"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {VIDEOS[lightboxIndex].title}
                      </h3>
                    </div>

                    {/* Close Button */}
                    <button
                      ref={modalCloseBtnRef}
                      type="button"
                      onClick={closeLightbox}
                      className="p-2 rounded-full border transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] hover:text-[var(--text-primary)]"
                      style={{
                        backgroundColor: 'var(--surface)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-muted)',
                      }}
                      aria-label="Close lightbox"
                    >
                      <X size={18} aria-hidden="true" />
                    </button>
                  </div>

                  {/* Modal Video Area */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col items-center justify-center bg-black/60 overflow-hidden">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                      <video
                        key={VIDEOS[lightboxIndex].id}
                        src={`${VIDEOS[lightboxIndex].src}#t=0.001`}
                        title={`${VIDEOS[lightboxIndex].title} full demo`}
                        aria-label={`${VIDEOS[lightboxIndex].title} full demo`}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
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
                        onClick={() =>
                          setLightboxIndex(
                            (lightboxIndex - 1 + VIDEOS.length) % VIDEOS.length
                          )
                        }
                        className="px-3 py-1 rounded border hover:text-[var(--text-primary)] cursor-pointer transition-colors"
                        style={{ borderColor: 'var(--border-subtle)' }}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxIndex((lightboxIndex + 1) % VIDEOS.length)
                        }
                        className="px-3 py-1 rounded border hover:text-[var(--text-primary)] cursor-pointer transition-colors"
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
