import { Link } from '../../router/Router'
import { COMPANY, NAV_LINKS, OFFICES } from '../../data/content'
import BrainMark from '../../lib/BrainMark'
import CircuitDivider from '../common/CircuitDivider'
import Reveal from '../common/Reveal'

export default function Footer() {
  const currentYear = 2026

  return (
    <footer className="relative bg-[var(--surface)] border-t border-[var(--border-subtle)] overflow-hidden">
      {/* Background Top Subtle Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-[var(--glow-blue)]/10 to-transparent pointer-events-none blur-3xl -z-0"
        aria-hidden="true"
      />

      <div className="container-wide py-16 md:py-24 relative z-10">
        {/* Large Decorative Wordmark / Heading */}
        <div className="mb-14 select-none overflow-hidden" aria-hidden="true">
          <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[var(--text-primary)]/5 leading-none uppercase">
            INVEX IT SOLUTIONS
          </div>
        </div>

        {/* Main Grid Columns */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            {/* Brand Column (Col 1-4) */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3.5 mb-6 group" data-cursor="HOME">
                <BrainMark size={44} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[var(--text-primary)] font-display font-bold text-xl tracking-wider">
                    INVEX
                  </span>
                  <span className="text-[var(--text-muted)] text-[10px] font-semibold tracking-[0.2em] uppercase">
                    IT Solutions
                  </span>
                </div>
              </Link>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-sm mb-6">
                The core development engine powering world-class retail, trading, and enterprise software solutions across the Middle East and beyond.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[var(--accent-mint)]/30 text-xs font-mono text-[var(--accent-mint)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" />
                Innovation Vertex
              </div>
            </div>

            {/* Main Pages Navigation (Col 5-7) */}
            <div className="lg:col-span-3">
              <h3 className="text-[var(--text-primary)] font-display font-semibold text-xs font-mono uppercase tracking-widest mb-5">
                Main Pages
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors duration-200 text-sm font-medium inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)] group-hover:bg-[var(--accent-mint)] transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regional Offices (Col 8-12) */}
            <div className="lg:col-span-5">
              <h3 className="text-[var(--text-primary)] font-display font-semibold text-xs font-mono uppercase tracking-widest mb-5">
                Regional Offices
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="p-3.5 rounded-2xl glass border border-[var(--border-subtle)] flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full brain-gradient-bg mt-1.5 shrink-0" />
                    <div>
                      <p className="text-[var(--text-primary)] font-semibold text-sm">{office.city}</p>
                      <p className="text-[var(--text-muted)] text-xs font-mono mt-0.5">
                        {office.label} · {office.country}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <CircuitDivider className="mb-8" />

        {/* Bottom Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            &copy; {currentYear} {COMPANY.legal}. All rights reserved.
          </p>
          <p className="font-mono text-[11px]">
            Innovation Vertex &mdash; Enterprise Software &middot; Middle East Backbone
          </p>
        </div>
      </div>
    </footer>
  )
}
