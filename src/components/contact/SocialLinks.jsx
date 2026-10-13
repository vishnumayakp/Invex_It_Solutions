import Reveal from '../common/Reveal'

/* Custom SVG Brand Icons (crisp vector glyphs using currentColor) */
function LinkedInIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function TwitterIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

export default function SocialLinks() {
  const socialNetworks = [
    {
      name: 'LinkedIn',
      /* TODO: Add real profile URLs */
      url: '#',
      icon: LinkedInIcon,
      label: 'Invex IT on LinkedIn (opens in a new tab)',
      cursorLabel: 'LINKEDIN',
    },
    {
      name: 'GitHub',
      /* TODO: Add real profile URLs */
      url: '#',
      icon: GitHubIcon,
      label: 'Invex IT on GitHub (opens in a new tab)',
      cursorLabel: 'GITHUB',
    },
    {
      name: 'Twitter/X',
      /* TODO: Add real profile URLs */
      url: '#',
      icon: TwitterIcon,
      label: 'Invex IT on Twitter/X (opens in a new tab)',
      cursorLabel: 'TWITTER',
    },
  ]

  return (
    <div className="pb-12 md:pb-12">
      {/* Screen Reader Semantic Heading */}
      <h2 className="sr-only">Social Links</h2>

      <div className="container-wide flex flex-col items-center">
        <Reveal from="bottom">
          <p
            className="text-xs font-mono uppercase tracking-widest mb-6 text-center"
            style={{ color: 'var(--text-muted)' }}
          >
            Engineering Networks & Ecosystem
          </p>
        </Reveal>

        {/* Three Glass Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {socialNetworks.map((s, idx) => {
            const Icon = s.icon
            return (
              <Reveal key={s.name} from="bottom" delay={0.08 * idx}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-cursor={s.cursorLabel}
                  className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] hover:border-[var(--accent-mint)]"
                  style={{
                    backgroundColor: 'var(--glass-bg)',
                    borderColor: 'var(--glass-border)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 4px 20px -2px var(--glass-shadow, rgba(0,0,0,0.15))',
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-colors group-hover:brain-gradient-bg"
                    style={{
                      backgroundColor: 'var(--surface)',
                      color: 'var(--accent-mint)',
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  <span
                    className="text-xs sm:text-sm font-semibold tracking-wide transition-colors group-hover:text-[var(--text-primary)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {s.name}
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
