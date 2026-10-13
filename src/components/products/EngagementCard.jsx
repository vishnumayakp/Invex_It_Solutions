import Reveal from '../common/Reveal'
import SpotlightCard from '../common/SpotlightCard'
import Button from '../common/Button'

/**
 * EngagementCard.jsx
 * Reusable tall glass card for Engagement Models.
 * Features:
 * - Directional Reveal entrance (left, bottom, right)
 * - Cursor Spotlight effect & hover lift 4px
 * - Gradient icon tile, title, exact prompt description
 * - Visual illustration slot
 * - Muted "[Pricing on request]" placeholder with TODO
 * - "Talk to an Expert" button linked to /contact
 * - NO "Recommended" or "Popular" badges (no invented claims)
 */
export default function EngagementCard({
  icon: Icon,
  title,
  description,
  image,
  visual: Visual,
  from = 'bottom',
  delay = 0,
}) {
  return (
    <Reveal from={from} delay={delay} className="flex-1 min-w-0 flex">
      <SpotlightCard
        cursorLabel="EXPLORE"
        className="w-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden group hover:border-[var(--accent-blue)]"
        style={{
          backgroundColor: 'var(--glass-bg)',
          borderColor: 'var(--glass-border)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 16px 40px -10px var(--glass-shadow, rgba(0,0,0,0.25))',
        }}
      >
        {/* Top-edge subtle highlight glow */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(90deg, transparent 10%, var(--accent-blue) 40%, var(--accent-mint) 60%, transparent 90%)',
          }}
          aria-hidden="true"
        />

        {/* Card Header & Content */}
        <div>
          {/* Gradient-filled Icon Tile */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
              color: 'var(--base)',
            }}
          >
            {Icon && <Icon size={22} strokeWidth={2.2} />}
          </div>

          {/* Title */}
          <h3
            className="font-display font-bold text-xl sm:text-2xl tracking-tight mb-3 transition-colors duration-300 group-hover:text-[var(--accent-mint)]"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h3>

          {/* Prompt Description */}
          <p
            className="text-sm sm:text-base leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            {description}
          </p>

          {/* Visual Representation Slot */}
          {/* Image / Visual Slot */}
          <div className="mb-6">
            {image ? (
              <div
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <img
                  src={image.src}
                  alt={image.alt || title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Soft bottom fade so the image blends into the glass card */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, var(--glass-bg) 0%, transparent 40%)',
                  }}
                  aria-hidden="true"
                />
              </div>
            ) : (
              Visual && <Visual />
            )}
          </div>
        </div>

        {/* Card Footer: Pricing placeholder & Action */}
        <div className="pt-6 border-t flex flex-col gap-4 mt-auto" style={{ borderColor: 'var(--border-subtle)' }}>
          {/* TODO: Replace placeholder pricing with approved model rates if supplied */}
          {/* <div className="flex items-center justify-between text-xs font-mono">
            <span style={{ color: 'var(--text-muted)' }}>Investment:</span>
            <span
              className="px-2.5 py-0.5 rounded border"
              style={{
                backgroundColor: 'var(--surface-raised)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-muted)',
              }}
            >
              [Pricing on request]
            </span>
          </div> */}

          {/* Talk to an Expert Button */}
          <Button
            href="/contact"
            variant="secondary"
            className="w-full justify-center text-xs sm:text-sm py-3 transition-all duration-300 group-hover:border-[var(--accent-mint)]"
          >
            Talk to an Expert
          </Button>
        </div>
      </SpotlightCard>
    </Reveal>
  )
}
