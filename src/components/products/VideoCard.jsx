import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, RotateCcw, Maximize2 } from 'lucide-react'
import useReducedMotion from '../../hooks/useReducedMotion'

/**
 * VideoCard — Interactive Click-to-Play Demo Card
 *
 * Features:
 * - Poster / first-frame preview with preload="metadata"
 * - Click-to-play with audio & native controls
 * - Glassmorphic pulsing play button (pulse disabled on reduced motion)
 * - Lazy mounting: src loads only when scrolled near the viewport
 * - Auto-pauses when scrolled out of view
 * - Fully accessible keyboard controls and WAI-ARIA labels
 * - Optional fullscreen lightbox expand trigger
 */
export default function VideoCard({
  video,
  isPlaying,
  onPlay,
  onPause,
  onEnded,
  onExpand,
}) {
  const cardRef = useRef(null)
  const videoRef = useRef(null)
  const [hasEnded, setHasEnded] = useState(false)

  const reduced = useReducedMotion()

  // Lazy mounting: load video src only when within 350px of the viewport
  const isNearViewport = useInView(cardRef, { margin: '350px 0px', once: true })

  // Strict viewport check: pause video if it scrolls out of view
  const isStrictlyVisible = useInView(cardRef, { amount: 0.15 })

  // Synchronize playing state with parent coordinator
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    if (isPlaying) {
      vid.muted = false
      const playPromise = vid.play()
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Fallback if browser blocks unmuted playback policy
          console.warn('Autoplay with sound prevented, playing muted:', err)
          vid.muted = true
          vid.play().catch(() => {})
        })
      }
    } else {
      if (!vid.paused) {
        vid.pause()
      }
    }
  }, [isPlaying])

  // Pause when scrolled out of view
  useEffect(() => {
    if (!isStrictlyVisible && isPlaying) {
      onPause?.()
    }
  }, [isStrictlyVisible, isPlaying, onPause])

  const handlePlayClick = (e) => {
    e.stopPropagation()
    setHasEnded(false)
    onPlay?.()
  }

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl sm:rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full"
      style={{
        backgroundColor: 'var(--surface-raised)',
        borderColor: 'var(--border-subtle)',
        boxShadow: '0 12px 35px -10px var(--glass-shadow, rgba(0,0,0,0.25))',
      }}
    >
      {/* Subtle border highlight on card hover */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-0"
        style={{
          boxShadow: 'inset 0 0 0 1px var(--accent-mint)',
        }}
        aria-hidden="true"
      />

      {/* Video Canvas Stage */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/40">
        {/* Video Element */}
        <video
          ref={videoRef}
          title={`${video.title} demonstration video`}
          aria-label={`${video.title} demonstration video`}
          preload="metadata"
          muted={!isPlaying}
          playsInline
          controls={isPlaying}
          poster={video.poster}
          src={isNearViewport ? `${video.src}#t=0.001` : undefined}
          onPlay={() => {
            if (!isPlaying) onPlay?.()
          }}
          onPause={() => {
            if (isPlaying) onPause?.()
          }}
          onEnded={() => {
            setHasEnded(true)
            onEnded?.()
          }}
          className="w-full h-full object-cover select-none"
        >
          {/* Include track only if captions are provided */}
          {video.captions && (
            <track
              kind="captions"
              src={video.captions}
              srcLang={video.captionsLang || 'en'}
              label={video.captionsLabel || 'English'}
              default
            />
          )}
        </video>

        {/* Small mono label chip in top corner */}
        <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 pointer-events-none">
          <span
            className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border inline-flex items-center gap-1.5"
            style={{
              backgroundColor: 'var(--glass-bg, rgba(15, 23, 42, 0.75))',
              borderColor: 'var(--glass-border, var(--border-subtle))',
              color: 'var(--accent-mint)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--accent-mint)' }}
            />
            {video.badge}
          </span>
        </div>

        {/* Optional Lightbox Expand Button in top-right corner */}
        {onExpand && (
          <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onExpand()
              }}
              className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-full border inline-flex items-center gap-1.5 cursor-pointer transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] hover:text-[var(--text-primary)]"
              style={{
                backgroundColor: 'var(--glass-bg, rgba(15, 23, 42, 0.75))',
                borderColor: 'var(--glass-border, var(--border-subtle))',
                color: 'var(--text-muted)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              aria-label={`Open ${video.title} in fullscreen lightbox`}
            >
              <Maximize2 size={12} aria-hidden="true" />
              <span className="hidden sm:inline">Expand</span>
            </button>
          </div>
        )}

        {/* Play Overlay (Visible when not playing) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 ${
            isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}
          onClick={handlePlayClick}
        >
          {/* Dark gradient overlay for contrast */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(7, 11, 20, 0.78) 0%, rgba(7, 11, 20, 0.3) 50%, rgba(7, 11, 20, 0.55) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Centered Play / Replay Button */}
          <div className="relative flex items-center justify-center">
            {/* Soft pulsing ring animation behind play button (disabled when reduced motion is preferred) */}
            {!reduced && (
              <motion.span
                className="absolute -inset-2.5 rounded-full pointer-events-none"
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{
                  scale: [1, 1.4, 1.45],
                  opacity: [0.7, 0.2, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                style={{
                  border: '2px solid var(--accent-mint)',
                  boxShadow: '0 0 18px var(--glow-mint, var(--accent-mint))',
                }}
                aria-hidden="true"
              />
            )}

            <button
              type="button"
              onClick={handlePlayClick}
              aria-label={
                hasEnded
                  ? `Replay ${video.title} demo video`
                  : video.ariaLabel || `Play ${video.title} demo video`
              }
              tabIndex={isPlaying ? -1 : 0}
              className="relative z-10 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full transition-all duration-300 group-hover:scale-110 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] cursor-pointer"
              style={{
                backgroundColor: 'var(--glass-bg, rgba(15, 23, 42, 0.65))',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--glass-border, var(--border-subtle))',
                boxShadow:
                  '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 24px var(--glow-mint, rgba(191, 224, 184, 0.25))',
              }}
            >
              {hasEnded ? (
                <RotateCcw
                  className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:rotate-[-45deg]"
                  style={{ color: 'var(--accent-mint)' }}
                  aria-hidden="true"
                />
              ) : (
                <Play
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ml-0.5 sm:ml-1 transition-transform group-hover:scale-105"
                  fill="currentColor"
                  style={{ color: 'var(--accent-mint)' }}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Card Details: Title & Description */}
      <div
        className="p-5 sm:p-6 flex flex-col gap-2 border-t flex-1"
        style={{
          borderColor: 'var(--border-subtle)',
          backgroundColor: 'var(--surface-raised)',
        }}
      >
        <h3
          className="font-display font-bold text-xl sm:text-2xl tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {video.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {video.description}
        </p>
      </div>
    </div>
  )
}
