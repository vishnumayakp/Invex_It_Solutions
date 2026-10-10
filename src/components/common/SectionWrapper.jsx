import { forwardRef } from 'react'

/**
 * SectionWrapper — Shared overlapping section container.
 * Features rounded 28px top corners, slight negative top margin overlap (-mt-8 to -mt-12),
 * and a subtle radial dual glow at its top center (blue on left, mint on right).
 */
const SectionWrapper = forwardRef(function SectionWrapper(
  {
    id,
    children,
    className = '',
    noOverlap = false,
    topGlow = true,
    style = {},
    ...props
  },
  ref
) {
  return (
    <section
      ref={ref}
      id={id}
      style={style}
      className={`
        relative z-10 overflow-hidden
        rounded-t-[28px] bg-[var(--base)]
        ${noOverlap ? '' : '-mt-8 sm:-mt-12'}
        section-glow-top
        ${className}
      `}
      {...props}
    >
      {/* Top Center Subtle Radial Dual-Glow (Blue left, Mint right) */}
      {topGlow && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] pointer-events-none -z-0 opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 35% 50%, var(--glow-blue) 0%, transparent 60%), radial-gradient(circle at 65% 50%, var(--glow-mint) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Section Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
})

export default SectionWrapper
