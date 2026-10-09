import { Link } from '../../router/Router'
import { COMPANY, NAV_LINKS, OFFICES } from '../../data/content'
import BrainMark from '../../lib/BrainMark'
import CircuitDivider from '../common/CircuitDivider'
import Reveal from '../common/Reveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[var(--surface)] border-t border-[var(--border-subtle)]">
      <div className="container-wide py-16 md:py-20">
        {/* Top Row */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <BrainMark size={44} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[var(--text-primary)] font-display font-bold text-xl tracking-wider">INVEX</span>
                  <span className="text-[var(--text-muted)] text-[10px] font-semibold tracking-[0.2em] uppercase">IT Solutions</span>
                </div>
              </Link>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
                The core development engine powering world-class retail, trading, and enterprise software solutions.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[var(--text-primary)] font-display font-semibold text-sm uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div className="lg:col-span-2">
              <h4 className="text-[var(--text-primary)] font-display font-semibold text-sm uppercase tracking-wider mb-4">
                Our Offices
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {OFFICES.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full brain-gradient-bg mt-1.5 shrink-0" />
                    <div>
                      <p className="text-[var(--text-primary)] font-medium text-sm">{office.city}</p>
                      <p className="text-[var(--text-muted)] text-xs">{office.label} · {office.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <CircuitDivider className="mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-xs">
            © {year} {COMPANY.legal}. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] text-xs">
            Innovation Vertex — Engineering the future.
          </p>
        </div>
      </div>
    </footer>
  )
}
