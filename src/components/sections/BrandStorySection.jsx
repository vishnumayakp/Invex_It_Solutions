import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Building2, Layers, MapPin, Globe } from 'lucide-react'
import SpotlightCard from '../common/SpotlightCard'
import Reveal from '../common/Reveal'
import ScrollRevealText from '../common/ScrollRevealText'
import EclipseRing from '../common/EclipseRing'
import useReducedMotion from '../../hooks/useReducedMotion'
import logo from '../../assets/images/invex-logo3.png'

/**
 * Chapter 01 Graphic: Safari Group node → Invex logo node with connecting arrow
 */
function OriginGraphic({ active }) {
  return (
    <div className="w-full mt-5 pt-4 border-t border-[var(--border-subtle)]" aria-hidden="true">
      <svg viewBox="0 0 360 84" className="w-full h-18 sm:h-20" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="origin-arrow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-mint)" />
          </linearGradient>
        </defs>

        {/* Safari Group Node */}
        <g>
          <rect x="8" y="18" width="120" height="48" rx="12" fill="var(--surface-raised)" stroke="var(--border-subtle)" strokeWidth="1" />
          <circle cx="28" cy="42" r="8" fill="var(--base)" stroke="var(--accent-blue)" strokeWidth="1.2" />
          <path d="M 28,37 L 33,42 L 28,47 L 23,42 Z" fill="none" stroke="var(--accent-blue)" strokeWidth="1" />
          <text x="44" y="38" fill="var(--text-primary)" fontSize="11" fontFamily="monospace" fontWeight="600">Safari Group</text>
          <text x="44" y="52" fill="var(--text-muted)" fontSize="8.5" fontFamily="monospace">Enterprise Heritage</text>
        </g>

        {/* Connecting Arrow Line */}
        <g>
          <line x1="134" y1="42" x2="216" y2="42" stroke="url(#origin-arrow-grad)" strokeWidth="1.6" strokeDasharray="4 4" />
          <path d="M 212,37 L 220,42 L 212,47" fill="none" stroke="var(--accent-mint)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {active && (
            <circle cx="175" cy="42" r="2" fill="var(--accent-mint)">
              <animate attributeName="cx" values="134;216" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </g>

        {/* Invex Node */}
        <g>
          <rect x="224" y="18" width="128" height="48" rx="12" fill="var(--surface-raised)" stroke="var(--accent-mint)" strokeWidth="1.2" opacity="0.95" />
          <image href={logo} x="234" y="32" width="20" height="20" preserveAspectRatio="xMidYMid meet" />
          <text x="261" y="38" fill="var(--text-primary)" fontSize="11" fontFamily="monospace" fontWeight="bold">Invex IT</text>
          <text x="261" y="52" fill="var(--accent-mint)" fontSize="8.5" fontFamily="monospace">Innovation Hub</text>
        </g>
      </svg>
    </div>
  )
}

/**
 * Chapter 02 Graphic: Tiny stack of 3 glass bars labelled ERP / Mall Mgmt / POS
 */
function FoundationGraphic() {
  const bars = [
    { label: 'ERP Systems', sub: 'Core Enterprise Architecture', accent: 'var(--accent-mint)' },
    { label: 'Mall Management', sub: 'Multi-Tenant Commercial Logic', accent: 'var(--accent-blue)' },
    { label: 'Hypermarket POS', sub: 'High-Volume Transaction Engine', accent: 'var(--accent-mint)' },
  ]

  return (
    <div className="w-full mt-5 pt-4 border-t border-[var(--border-subtle)] space-y-2" aria-hidden="true">
      {bars.map((bar, idx) => (
        <div
          key={bar.label}
          className="px-3.5 py-2 rounded-xl glass border border-[var(--border-subtle)] flex items-center justify-between text-xs transition-colors hover:border-[var(--accent-mint)]/40"
          style={{ borderLeftColor: bar.accent, borderLeftWidth: '3px' }}
        >
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] text-[var(--text-muted)]">0{idx + 1}</span>
            <span className="font-display font-medium text-[var(--text-primary)]">{bar.label}</span>
          </div>
          <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
            {bar.sub}
          </span>
        </div>
      ))}
    </div>
  )
}

/**
 * Chapter 03 Graphic: Simplified dotted world strip with pulsing pins at
 * Mumbai, Edappal, Qatar, UAE and dashed arcs from Mumbai & Edappal to Qatar and UAE
 */
function WhereWeOperateGraphic({ active }) {
  const pins = [
    { name: 'Mumbai', label: 'HQ', cx: 65, cy: 38, isHub: true },
    { name: 'Edappal', label: 'Tech Hub', cx: 63, cy: 56, isHub: true },
    { name: 'Qatar', label: 'Operations', cx: 37, cy: 32, isHub: false },
    { name: 'UAE', label: 'Operations', cx: 44, cy: 36, isHub: false },
  ]

  const arcs = [
    { from: pins[0], to: pins[2] }, // Mumbai -> Qatar
    { from: pins[0], to: pins[3] }, // Mumbai -> UAE
    { from: pins[1], to: pins[2] }, // Edappal -> Qatar
    { from: pins[1], to: pins[3] }, // Edappal -> UAE
  ]

  return (
    <div className="w-full mt-5 pt-4 border-t border-[var(--border-subtle)]" aria-hidden="true">
      <div className="w-full h-28 sm:h-32 rounded-xl bg-[var(--base)]/60 border border-[var(--border-subtle)]/70 p-2 overflow-hidden">
        <svg viewBox="0 0 100 70" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="map-arc-grad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Dotted Continental Grid Outline */}
          <g opacity="0.12" stroke="var(--text-muted)" strokeWidth="0.4" fill="none" strokeDasharray="1 1.5">
            <path d="M 24,18 Q 30,14 36,16 L 40,22 Q 42,26 40,30 L 36,34 Q 32,36 28,32 Z" />
            <path d="M 38,28 Q 42,30 46,32 L 50,34 Q 54,38 58,40 L 62,38 Q 66,36 68,32 L 70,28 Q 72,24 74,22 L 76,28 L 72,36 L 66,42 L 60,46 Q 54,50 50,48 L 44,42 L 38,36 Z" />
          </g>

          {/* Connecting Arcs */}
          {arcs.map((arc, i) => {
            const midX = (arc.from.cx + arc.to.cx) / 2
            const midY = Math.min(arc.from.cy, arc.to.cy) - 6
            return (
              <path
                key={i}
                d={`M ${arc.from.cx},${arc.from.cy} Q ${midX},${midY} ${arc.to.cx},${arc.to.cy}`}
                fill="none"
                stroke="url(#map-arc-grad)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                opacity="0.55"
              >
                {active && (
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-8"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                )}
              </path>
            )
          })}

          {/* Pins */}
          {pins.map((pin) => (
            <g key={pin.name}>
              {pin.isHub && active && (
                <circle cx={pin.cx} cy={pin.cy} r="4" fill="none" stroke="var(--accent-mint)" strokeWidth="0.3" opacity="0.4">
                  <animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                cx={pin.cx}
                cy={pin.cy}
                r={pin.isHub ? '2.2' : '1.8'}
                fill={pin.isHub ? 'var(--accent-mint)' : 'var(--accent-blue)'}
              />
              <circle
                cx={pin.cx}
                cy={pin.cy}
                r={pin.isHub ? '3.2' : '2.6'}
                fill="none"
                stroke={pin.isHub ? 'var(--accent-mint)' : 'var(--accent-blue)'}
                strokeWidth="0.4"
                opacity="0.8"
              />
              <text
                x={pin.cx}
                y={pin.cy > 45 ? pin.cy + 5.5 : pin.cy - 4}
                fill={pin.isHub ? 'var(--text-primary)' : 'var(--text-secondary)'}
                fontSize="4"
                fontFamily="monospace"
                fontWeight={pin.isHub ? 'bold' : 'normal'}
                textAnchor="middle"
              >
                {pin.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

/**
 * Chapter 04 Graphic: The same pins fading outward into more unlit dots,
 * with a "New global clients" label.
 */
function WhatsNextGraphic({ active }) {
  const currentPins = [
    { cx: 65, cy: 38 },
    { cx: 63, cy: 56 },
    { cx: 37, cy: 32 },
    { cx: 44, cy: 36 },
  ]

  const emergingDots = [
    { cx: 20, cy: 25 },
    { cx: 28, cy: 48 },
    { cx: 80, cy: 26 },
    { cx: 86, cy: 44 },
    { cx: 52, cy: 18 },
    { cx: 72, cy: 58 },
  ]

  return (
    <div className="w-full mt-5 pt-4 border-t border-[var(--border-subtle)]" aria-hidden="true">
      <div className="w-full h-28 sm:h-32 rounded-xl bg-[var(--base)]/60 border border-[var(--border-subtle)]/70 p-2 overflow-hidden flex flex-col justify-between">
        <svg viewBox="0 0 100 52" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Radiating outward wave lines */}
          <circle cx="50" cy="34" r="28" fill="none" stroke="var(--accent-mint)" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.25" />
          <circle cx="50" cy="34" r="42" fill="none" stroke="var(--accent-blue)" strokeWidth="0.3" strokeDasharray="2 4" opacity="0.18" />

          {/* Current Established Core Pins */}
          {currentPins.map((p, i) => (
            <g key={i}>
              <circle cx={p.cx} cy={p.cy} r="1.8" fill="var(--accent-mint)" opacity="0.9" />
              <line x1="50" y1="34" x2={p.cx} y2={p.cy} stroke="var(--accent-mint)" strokeWidth="0.3" opacity="0.3" />
            </g>
          ))}

          {/* Emerging Unlit Global Nodes */}
          {emergingDots.map((d, i) => (
            <g key={`emerge-${i}`}>
              <circle cx={d.cx} cy={d.cy} r="1.4" fill="none" stroke="var(--text-muted)" strokeWidth="0.5" opacity="0.45" strokeDasharray="1 1" />
              <line x1="50" y1="34" x2={d.cx} y2={d.cy} stroke="var(--accent-blue)" strokeWidth="0.25" strokeDasharray="1 2" opacity="0.2" />
              {active && (
                <circle cx={d.cx} cy={d.cy} r="0.8" fill="var(--accent-blue)" opacity="0.5">
                  <animate attributeName="opacity" values="0.1;0.7;0.1" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          ))}
        </svg>

        {/* Badge Label */}
        <div className="flex items-center justify-between px-2 pt-1 border-t border-[var(--border-subtle)]/50">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--accent-mint)] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
            New global clients
          </span>
          <span className="font-mono text-[9px] text-[var(--text-muted)]">Worldwide Expansion</span>
        </div>
      </div>
    </div>
  )
}

/**
 * ChapterItem — Individual timeline chapter row with responsive desktop alternation
 * and unified mobile alignment.
 */
function ChapterItem({ chapter, isEven, reduced }) {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { amount: 0.35 })
  const isActive = reduced || isInView
  const Icon = chapter.icon

  return (
    <div ref={itemRef} className="relative w-full my-12 sm:my-16 lg:my-20">
      {/* ── SPINE NODE MARKER ── */}
      {/* Desktop (center): left-1/2 -translate-x-1/2 | Mobile: left-6 -translate-x-1/2 */}
      <div className="absolute top-8 left-6 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <div
          className={`relative w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${isActive
            ? 'bg-[var(--accent-mint)] shadow-[0_0_16px_var(--glow-mint)]'
            : 'bg-[var(--surface-raised)] border border-[var(--border-subtle)]'
            }`}
        >
          {/* Pulse ring when active & not reduced motion */}
          {!reduced && isActive && (
            <span className="absolute -inset-1 rounded-full border border-[var(--accent-mint)]/70 animate-ping" />
          )}
          <span
            className={`w-2 h-2 rounded-full ${isActive ? 'bg-[var(--base)]' : 'bg-[var(--text-muted)]'
              }`}
          />
        </div>
      </div>

      {/* ── CARD LAYOUT (ALTERNATING DESKTOP, RIGHT-ALIGNED MOBILE) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* On desktop: Even items go to right (col 8-12), Odd items go to left (col 1-5) */}
        <div
          className={`pl-14 sm:pl-16 lg:pl-0 ${isEven
            ? 'lg:col-start-8 lg:col-span-5 lg:ml-auto w-full'
            : 'lg:col-start-1 lg:col-span-5 lg:mr-auto w-full'
            }`}
        >
          <Reveal from={isEven ? 'right' : 'left'} delay={0.15} rotate>
            <SpotlightCard
              cursorLabel={`CHAPTER ${chapter.number}`}
              className="p-6 sm:p-8 border border-[var(--border-subtle)] hover:border-[var(--accent-mint)]/40 transition-colors"
            >
              {/* Header: Mono Number + Icon + Chapter Kicker */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass border border-[var(--accent-mint)]/30 flex items-center justify-center text-[var(--accent-mint)] shadow-sm shadow-[var(--glow-mint)] bg-[var(--surface-raised)]/80">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--accent-mint)] font-semibold">
                      Chapter {chapter.number}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
                      {chapter.title}
                    </h3>
                  </div>
                </div>

                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[var(--border-strong)]/80 select-none">
                  {chapter.number}
                </span>
              </div>

              {/* Verbatim Text Copy */}
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                {chapter.text}
              </p>

              {/* Illustrative SVG for this chapter */}
              {chapter.renderGraphic(isActive)}
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

/**
 * BrandStorySection — Scroll-driven journey timeline showcasing Invex IT's growth.
 * Includes vertical glowing spine, progress fill, 4 chapter cards, and custom SVGs.
 */
export function BrandStorySection() {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()

  // Track scroll progress across the section for spine fill
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.6'],
  })

  // Spine fill scale
  const spineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const chapters = [
    {
      number: '01',
      title: 'Origin',
      icon: Building2,
      text: 'Born as the dedicated development and innovation hub for the esteemed Safari Group of Companies, Invex IT Solutions was built to handle immense scale.',
      renderGraphic: (active) => <OriginGraphic active={active} />,
    },
    {
      number: '02',
      title: 'The Foundation',
      icon: Layers,
      text: 'We began by engineering the core ERP and mall management software for vast hypermarkets across the Middle East.',
      renderGraphic: () => <FoundationGraphic />,
    },
    {
      number: '03',
      title: 'Where We Operate',
      icon: MapPin,
      text: 'Today, operating from our headquarters in Mumbai and our specialized hub in Edappal, we serve as the backbone for Simple Logic IT in Qatar and the UAE,',
      renderGraphic: (active) => <WhereWeOperateGraphic active={active} />,
    },
    {
      number: '04',
      title: "What's Next",
      icon: Globe,
      text: 'while actively bringing our world-class software to new global clients.',
      renderGraphic: (active) => <WhatsNextGraphic active={active} />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="brand-story"
      aria-labelledby="brand-story-heading"
      className="relative z-10 -mt-10 sm:-mt-14 rounded-t-[28px] bg-[var(--base)] section-radial-glow pt-3 md:pt-5 pb-20 md:pb-28 overflow-hidden overflow-x-clip"
    >
      {/* Decorative ambient background: faint EclipseRing at 30% opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30 -z-0">
        <EclipseRing size={680} className="w-[520px] h-[520px] sm:w-[680px] sm:h-[680px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal from="top" delay={0.1}>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] glass px-3.5 py-1.5 rounded-full border border-[var(--accent-mint)]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] shadow-[0_0_8px_var(--glow-mint)]" />
              The Invex Journey
            </div>
          </Reveal>

          <Reveal from="center" delay={0.2} className="w-full">
            <ScrollRevealText
              as="h2"
              text="Built to handle immense scale."
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[var(--text-primary)] [&>span:nth-of-type(4)>span:last-child]:brain-gradient [&>span:nth-of-type(5)>span:last-child]:brain-gradient"
            />
          </Reveal>
        </div>

        {/* ── TIMELINE SPINE & CHAPTERS ── */}
        <div className="relative w-full">
          {/* Vertical Track Background Line (1px gradient line, mint→blue) */}
          {/* Desktop: center | Mobile: left edge */}
          <div
            className="absolute top-6 bottom-6 left-6 lg:left-1/2 -translate-x-1/2 w-[1px] bg-[var(--border-subtle)] z-0"
            aria-hidden="true"
          >
            {/* Animated Progress Fill (uses useScroll scaleY) */}
            <motion.div
              className="w-full h-full origin-top bg-gradient-to-b from-[var(--accent-mint)] via-[var(--accent-blue)] to-[var(--accent-mint)] shadow-[0_0_8px_var(--glow-mint)]"
              style={{
                scaleY: reduced ? 1 : spineScaleY,
              }}
            />
          </div>

          {/* Chapters List */}
          <div className="relative z-10">
            {chapters.map((chapter, idx) => (
              <ChapterItem
                key={chapter.number}
                chapter={chapter}
                isEven={idx % 2 === 1}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* Named export aliases and default export */
export { BrandStorySection as BrandStory }
export default BrandStorySection
