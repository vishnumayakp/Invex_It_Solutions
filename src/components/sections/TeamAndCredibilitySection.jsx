import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Handshake, CheckCircle2, ArrowRight } from 'lucide-react'
import SpotlightCard from '../common/SpotlightCard'
import Reveal from '../common/Reveal'
import ScrollRevealText from '../common/ScrollRevealText'
import Button from '../common/Button'
import EclipseRing from '../common/EclipseRing'
import useReducedMotion from '../../hooks/useReducedMotion'
import logo from '../../assets/images/invex-logo3.png'

/**
 * Inline LinkedIn SVG icon (avoids missing brand icons in modern Lucide)
 */
function LinkedInIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

/**
 * Team Members Data Structure
 * Pluggable structure for leadership and core engineers.
 * // TODO: Replace placeholder names, photos, and years with production assets.
 */
const teamMembers = [
  {
    id: 'leader',
    name: '[Name]', // TODO: real name
    title: 'Technical Director',
    experience: 'X', // TODO: real years
    bio: 'Leading the architectural vision with over X years in enterprise software and cloud deployment.',
    photo: null, // TODO: import portrait photo
    linkedin: null, // TODO: add linkedin profile URL if available
  },
  {
    id: 'member-1',
    initials: 'FS',
    name: 'Full-Stack Lead', // TODO: add team member name
    role: 'React & Node.js Specialist',
    photo: null, // TODO: add team member photo
  },
  {
    id: 'member-2',
    initials: 'CS',
    name: '.NET Architect', // TODO: add team member name
    role: 'C# / Enterprise Logic',
    photo: null, // TODO: add team member photo
  },
  {
    id: 'member-3',
    initials: 'AP',
    name: 'Systems Architect', // TODO: add team member name
    role: 'High-Volume POS Systems',
    photo: null, // TODO: add team member photo
  },
  {
    id: 'member-4',
    initials: 'CL',
    name: 'Cloud Engineer', // TODO: add team member name
    role: 'Enterprise Infrastructure',
    photo: null, // TODO: add team member photo
  },
  {
    id: 'member-5',
    initials: 'DB',
    name: 'Data Platform Engineer', // TODO: add team member name
    role: 'ERP Modules & Schema',
    photo: null, // TODO: add team member photo
  },
]

/**
 * HypermarketGridVisual — Visual for achievement 1: Safari Group hypermarkets
 */
function HypermarketGridVisual() {
  return (
    <div className="w-full mt-5 pt-4 border-t border-[var(--border-subtle)]" aria-hidden="true">
      <div className="grid grid-cols-4 gap-1.5 p-2 rounded-xl bg-[var(--base)]/60 border border-[var(--border-subtle)]/70">
        {[
          { label: 'Hypermarket ERP', code: 'HM-01' },
          { label: 'Supply Chain', code: 'SC-02' },
          { label: 'Mall Management', code: 'MM-03' },
          { label: 'Wholesale Ops', code: 'WS-04' },
        ].map((item) => (
          <div
            key={item.code}
            className="p-2 rounded-lg glass border border-[var(--border-subtle)] text-center flex flex-col justify-between"
          >
            <span className="font-mono text-[9px] text-[var(--accent-mint)] font-bold">{item.code}</span>
            <span className="font-mono text-[8px] text-[var(--text-muted)] truncate mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * PosReceiptVisual — Visual for achievement 2: Automated checkout POS systems
 */
function PosReceiptVisual({ active }) {
  return (
    <div className="w-full mt-5 pt-4 border-t border-[var(--border-subtle)]" aria-hidden="true">
      <div className="relative w-full h-16 rounded-xl bg-[var(--base)]/60 border border-[var(--border-subtle)]/70 px-3 py-2 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg glass border border-[var(--accent-mint)]/40 flex items-center justify-center text-[var(--accent-mint)]">
            <ShoppingCart size={16} />
          </div>
          <div>
            <span className="block font-mono text-[10px] text-[var(--text-primary)] font-semibold">
              Automated POS Checkout
            </span>
            <span className="font-mono text-[8.5px] text-[var(--accent-mint)]">
              High-Footfall Retail Engine
            </span>
          </div>
        </div>

        {/* Barcode & Scanning Pulse Line */}
        <div className="relative flex items-center gap-0.5 h-7 px-2 glass rounded border border-[var(--border-subtle)]">
          <div className="w-0.5 h-5 bg-[var(--text-muted)] opacity-60" />
          <div className="w-1 h-5 bg-[var(--text-primary)]" />
          <div className="w-0.5 h-5 bg-[var(--text-muted)] opacity-40" />
          <div className="w-1.5 h-5 bg-[var(--text-primary)]" />
          <div className="w-0.5 h-5 bg-[var(--accent-mint)]" />
          <div className="w-1 h-5 bg-[var(--text-muted)] opacity-80" />

          {active && (
            <motion.div
              className="absolute inset-y-0 w-0.5 bg-[var(--accent-mint)] shadow-[0_0_8px_var(--glow-mint)]"
              animate={{ x: [0, 32, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * PartnerLinkVisual — Visual for achievement 3: Simple Logic IT partnership
 */
function PartnerLinkVisual() {
  return (
    <div className="w-full mt-5 pt-4 border-t border-[var(--border-subtle)] space-y-2" aria-hidden="true">
      <div className="p-2.5 rounded-xl bg-[var(--base)]/60 border border-[var(--border-subtle)]/70 flex flex-col gap-2">
        <div className="flex items-center justify-between text-[10px] font-mono">
          <span className="text-[var(--accent-mint)] font-bold">Invex IT</span>
          <span className="text-[var(--text-muted)]">⇄ Strategic Tech Partner ⇄</span>
          <span className="text-[var(--accent-blue)] font-bold">Simple Logic IT</span>
        </div>

        <div className="flex items-center justify-between gap-1.5 pt-1 border-t border-[var(--border-subtle)]/60 text-[9px] font-mono">
          <span className="px-2 py-0.5 rounded glass border border-[var(--accent-mint)]/30 text-[var(--accent-mint)]">
            Queue Management
          </span>
          <span className="px-2 py-0.5 rounded glass border border-[var(--accent-blue)]/30 text-[var(--accent-blue)]">
            HR & Payroll
          </span>
          <span className="px-1.5 py-0.5 rounded glass border border-[var(--border-subtle)] text-[var(--text-muted)] uppercase">
            Qatar • UAE
          </span>
        </div>
      </div>
    </div>
  )
}

/**
 * TeamAndCredibilitySection — Final About page section combining:
 * 1. Team & The Innovation Hub
 * 2. Credibility & Achievements
 * 3. Closing CTA with animated glow line
 */
export function TeamAndCredibilitySection() {
  const reduced = useReducedMotion()
  const leader = teamMembers[0]
  const engineers = teamMembers.slice(1)

  return (
    <section
      id="team-credibility"
      aria-labelledby="team-heading"
      className="relative z-10 -mt-10 sm:-mt-14 rounded-t-[28px] bg-[var(--base)] section-glow-top section-radial-glow py-20 md:py-28 overflow-hidden overflow-x-clip"
    >
      {/* Background: faint EclipseRing at 30% opacity */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30 -z-0">
        <EclipseRing size={680} className="w-[500px] h-[500px] sm:w-[680px] sm:h-[680px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* ══════════════════════════════════════════════════════════
            PART 1: TEAM (THE INNOVATION HUB)
        ══════════════════════════════════════════════════════════ */}
        <div className="mb-24 sm:mb-32">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <Reveal from="top" delay={0.08}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] glass px-3.5 py-1.5 rounded-full border border-[var(--accent-mint)]/30 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] shadow-[0_0_8px_var(--glow-mint)]" />
                The People Behind the Code
              </div>
            </Reveal>

            <Reveal from="center" delay={0.16} className="w-full">
              <ScrollRevealText
                as="h2"
                text="The Innovation Hub"
                className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--text-primary)]"
              />
            </Reveal>
          </div>

          {/* Two-Column Layout: Leader Card (Left) & Innovation Hub (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column (5 cols): Leader Card */}
            <Reveal from="left" delay={0.2} rotate className="lg:col-span-5 h-full">
              <SpotlightCard
                cursorLabel="LEADERSHIP"
                className="h-full p-7 sm:p-9 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-mint)]/40 transition-colors"
              >
                <div>
                  {/* Portrait Slot (4:5 ratio, rounded-3xl, glass frame, gradient ring, mint glow) */}
                  <div className="relative w-full aspect-[4/5] max-w-[280px] mx-auto mb-6 rounded-3xl overflow-hidden glass border-2 border-[var(--accent-mint)]/40 shadow-[0_0_30px_var(--glow-mint)] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[var(--surface-raised)] to-[var(--base)]">
                    {/* Watermark Logo */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                      <img src={logo} alt="" width={120} height={120} className="w-32 h-32 object-contain" />
                    </div>

                    {/* Gradient Ring Placeholder */}
                    <div className="relative z-10 w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-[var(--accent-blue)] via-[var(--accent-mint)] to-[var(--accent-blue)] shadow-lg shadow-[var(--glow-mint)] mb-4 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-[var(--surface-raised)] flex items-center justify-center">
                        <span className="font-mono text-xl font-bold text-[var(--accent-mint)]">TD</span>
                      </div>
                    </div>

                    <span className="relative z-10 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] glass px-3 py-1 rounded-full border border-[var(--border-subtle)]">
                      Photo coming soon
                    </span>
                  </div>

                  {/* Leader Info */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      {/* TODO: replace [Name] with actual name */}
                      <h3 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                        {leader.name}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-mint)] mt-0.5">
                        {leader.title}
                      </p>
                    </div>

                    {/* LinkedIn icon slot (hidden if no href) */}
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn Profile"
                        className="p-2 rounded-xl glass border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent-mint)] transition-colors"
                      >
                        <LinkedInIcon size={18} />
                      </a>
                    )}
                  </div>

                  {/* TODO: real name, photo and years */}
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>Architecture & Cloud</span>
                  <span className="text-[var(--accent-mint)]">Executive Leadership</span>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Right Column (7 cols): The Innovation Hub Card */}
            <Reveal from="right" delay={0.2} rotate className="lg:col-span-7 h-full">
              <SpotlightCard
                cursorLabel="INNOVATION"
                className="h-full p-7 sm:p-9 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-blue)]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)]">
                      Core R&amp;D Engine
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full glass border border-[var(--accent-blue)]/30 text-[10px] font-mono text-[var(--accent-blue)]">
                      Dual Tech Stack
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] mb-3 tracking-tight">
                    The Innovation Hub
                  </h3>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed mb-6">
                    Our core R&amp;D team consisting of Full-Stack Developers (React/Node.js) and .NET (C#/MVC) experts who build our future-ready modules.
                  </p>

                  {/* Two Stacked Glass Skill Clusters */}
                  <div className="space-y-4 mb-8">
                    {/* Cluster 1: FullStack.jsx */}
                    <div className="rounded-2xl glass border border-[var(--border-subtle)] p-4 bg-[var(--surface-raised)]/60">
                      <div className="flex items-center justify-between mb-3 border-b border-[var(--border-subtle)]/60 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400/80" />
                          <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                          <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                          <span className="ml-2 font-mono text-[11px] text-[var(--accent-mint)] font-medium">
                            FullStack.jsx
                          </span>
                        </div>
                        <span className="font-mono text-[9.5px] uppercase tracking-wider text-[var(--text-muted)]">
                          React / Node.js
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['React 19', 'Node.js', 'REST APIs', 'Cloud Microservices', 'Tailwind'].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full glass border border-[var(--border-subtle)] font-mono text-[10.5px] text-[var(--text-secondary)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Cluster 2: Core.cs */}
                    <div className="rounded-2xl glass border border-[var(--border-subtle)] p-4 bg-[var(--surface-raised)]/60">
                      <div className="flex items-center justify-between mb-3 border-b border-[var(--border-subtle)]/60 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400/80" />
                          <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                          <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                          <span className="ml-2 font-mono text-[11px] text-[var(--accent-blue)] font-medium">
                            Core.cs
                          </span>
                        </div>
                        <span className="font-mono text-[9.5px] uppercase tracking-wider text-[var(--text-muted)]">
                          .NET / C# MVC
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['C# / .NET Core', 'ASP.NET MVC', 'Enterprise POS Engine', 'SQL Server Architecture'].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full glass border border-[var(--border-subtle)] font-mono text-[10.5px] text-[var(--text-secondary)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Circular Avatar Slots Row */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                        Specialized Engineering Roster
                      </span>
                      {/* TODO: add team photos and names */}
                      <span className="font-mono text-[10px] text-[var(--accent-mint)]">
                        // R&amp;D Core Contributors
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {engineers.map((member) => (
                        <div
                          key={member.id}
                          className="group relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[var(--accent-blue)]/50 to-[var(--accent-mint)]/50 hover:scale-110 transition-transform cursor-pointer"
                          title={`${member.name} — ${member.role}`}
                        >
                          <div className="w-full h-full rounded-full bg-[var(--surface-raised)] flex items-center justify-center font-mono text-xs font-semibold text-[var(--text-primary)]">
                            {member.initials}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>Continuous Delivery</span>
                  <span className="text-[var(--accent-blue)]">Full Lifecycle Systems</span>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            PART 2: CREDIBILITY & ACHIEVEMENTS
        ══════════════════════════════════════════════════════════ */}
        <div className="mb-24 sm:mb-32">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <Reveal from="top" delay={0.08}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] glass px-3.5 py-1.5 rounded-full border border-[var(--accent-mint)]/30 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] shadow-[0_0_8px_var(--glow-mint)]" />
                Credibility &amp; Achievements
              </div>
            </Reveal>

            <Reveal from="center" delay={0.16} className="w-full">
              <ScrollRevealText
                as="h2"
                text="Credibility & Achievements"
                className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--text-primary)]"
              />
            </Reveal>
          </div>

          {/* Three SpotlightCards in a row (Middle one raised 16px on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Safari Group Hypermarkets (from LEFT) */}
            <Reveal from="left" delay={0.12} rotate className="h-full">
              <SpotlightCard
                cursorLabel="RETAIL"
                className="relative p-7 sm:p-8 h-full flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-blue)]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl glass border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)] shadow-sm shadow-[var(--glow-blue)] bg-[var(--surface-raised)]/80">
                      <Building2 size={22} />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass border border-[var(--accent-blue)]/30 text-[10px] font-mono text-[var(--accent-blue)]">
                      <CheckCircle2 size={13} />
                      Verified
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-[var(--text-primary)] font-medium leading-relaxed mb-2">
                    Developed the comprehensive infrastructure managing Safari Group&apos;s hypermarkets.
                  </p>
                </div>

                <HypermarketGridVisual />
              </SpotlightCard>
            </Reveal>

            {/* Card 2: Automated Checkout POS (Middle Raised 16px via md:-translate-y-4) (from BOTTOM) */}
            <Reveal from="bottom" delay={0.18} className="h-full">
              <SpotlightCard
                cursorLabel="CHECKOUT"
                className="relative p-7 sm:p-8 h-full flex flex-col justify-between border-2 border-[var(--accent-mint)]/60 shadow-[0_0_36px_var(--glow-mint)] md:-translate-y-4 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl brain-gradient-bg text-[var(--base)] flex items-center justify-center shadow-md shadow-[var(--glow-mint)]">
                      <ShoppingCart size={22} />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full brain-gradient-bg text-[var(--base)] text-[10px] font-mono font-bold uppercase tracking-wider">
                      <CheckCircle2 size={13} />
                      Core Platform
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-[var(--text-primary)] font-medium leading-relaxed mb-2">
                    Successfully integrated automated checkout POS systems across high-footfall retail environments.
                  </p>
                </div>

                <PosReceiptVisual active={!reduced} />
              </SpotlightCard>
            </Reveal>

            {/* Card 3: Strategic Tech Partner Simple Logic IT (from RIGHT) */}
            <Reveal from="right" delay={0.24} rotate className="h-full">
              <SpotlightCard
                cursorLabel="PARTNER"
                className="relative p-7 sm:p-8 h-full flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-mint)]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl glass border border-[var(--accent-mint)]/30 flex items-center justify-center text-[var(--accent-mint)] shadow-sm shadow-[var(--glow-mint)] bg-[var(--surface-raised)]/80">
                      <Handshake size={22} />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass border border-[var(--accent-mint)]/30 text-[10px] font-mono text-[var(--accent-mint)]">
                      <CheckCircle2 size={13} />
                      Strategic
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-[var(--text-primary)] font-medium leading-relaxed mb-2">
                    Strategic tech partner to Simple Logic IT, securing a dominant market share in Qatar and UAE for Queue Management and HR/Payroll solutions.
                  </p>
                </div>

                <PartnerLinkVisual />
              </SpotlightCard>
            </Reveal>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            PART 3: CLOSING CTA (Let's build your next vertex)
        ══════════════════════════════════════════════════════════ */}
        <Reveal from="bottom" delay={0.2} className="w-full">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden glass border border-[var(--border-subtle)] shadow-[0_24px_70px_rgba(0,0,0,0.6)] text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] glass px-3.5 py-1.5 rounded-full border border-[var(--accent-mint)]/30 mb-6">
              Next Steps
            </span>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] mb-6 leading-tight tracking-tight">
              Let&apos;s build your next vertex.
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl mx-auto">
              Partner with the core engineering engine behind scalable retail, trading, and enterprise software ecosystems.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <Button href="/contact" variant="cta" magnetic iconRight={ArrowRight}>
                Talk to an Expert
              </Button>
              <Button href="/services" variant="secondary">
                Explore Our Solutions
              </Button>
            </div>

            {/* Bottom glow line draws in from left to right */}
            <motion.div
              initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={reduced ? { duration: 0 } : { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              style={{ transformOrigin: 'left' }}
              className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-mint)] to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* Named export aliases and default export */
export { TeamAndCredibilitySection as TeamCredibility, TeamAndCredibilitySection as TeamAndCredibility }
export default TeamAndCredibilitySection
