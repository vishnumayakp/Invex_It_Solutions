import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Telescope, ChevronDown, Layers, Sparkles, CheckCircle2 } from 'lucide-react'
import SpotlightCard from '../common/SpotlightCard'
import Reveal from '../common/Reveal'
import ScrollRevealText from '../common/ScrollRevealText'
import CircuitDivider from '../common/CircuitDivider'
import EclipseRing from '../common/EclipseRing'
import useReducedMotion from '../../hooks/useReducedMotion'
import logo from '../../assets/images/invex-logo3.png'
import problemImage from '../../assets/images/problem.png'

/**
 * SectorNode — Individual glass pill node representing industry sectors.
 */
function SectorNode({ label, accent = 'blue' }) {
  const isMint = accent === 'mint'
  return (
    <div
      className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full glass border ${isMint
        ? 'border-[var(--accent-mint)]/40 shadow-sm shadow-[var(--glow-mint)]'
        : 'border-[var(--accent-blue)]/40 shadow-sm shadow-[var(--glow-blue)]'
        } text-[10px] sm:text-xs font-mono font-medium text-[var(--text-secondary)] tracking-wider flex items-center gap-1.5 select-none`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${isMint ? 'bg-[var(--accent-mint)]' : 'bg-[var(--accent-blue)]'
          }`}
      />
      {label}
    </div>
  )
}

/**
 * VertexDiagram — The signature "Vertex" motif showing enterprise convergence.
 * Fanning down from Invex Apex to Retail, HR, Real Estate, Waste Management,
 * then converging into "Centralized Ecosystem".
 */
function VertexDiagram() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const reduced = useReducedMotion()
  const active = isInView && !reduced

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[500px] mx-auto py-4 flex flex-col items-center select-none"
      aria-hidden="true"
    >
      {/* Decorative ambient background radial glow for the diagram */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(ellipse_at_center,var(--glow-blue)_0%,transparent_70%)] opacity-35 blur-2xl pointer-events-none -z-10" />

      {/* APEX TIP: Invex Logo Node */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Pulsing halo aura (disabled on reduced motion) */}
        <motion.div
          className="absolute -inset-2.5 rounded-2xl bg-gradient-to-r from-[var(--accent-blue)]/30 to-[var(--accent-mint)]/30 blur-md pointer-events-none"
          animate={!reduced ? { scale: [1, 1.14, 1], opacity: [0.35, 0.75, 0.35] } : {}}
          transition={!reduced ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut' } : {}}
        />
        <div className="relative p-2.5 sm:p-3 rounded-2xl glass border border-[var(--accent-mint)]/50 shadow-[0_0_28px_var(--glow-mint)] bg-[var(--surface-raised)]/95 flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <img
            src={logo}
            alt="Invex IT Solutions Apex"
            width={48}
            height={48}
            loading="eager"
            decoding="async"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </div>
        <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--accent-mint)] font-semibold px-2 py-0.5 rounded-full glass border border-[var(--accent-mint)]/25">
          Apex • Innovation Vertex
        </span>
      </div>

      {/* SVG BEAMS & GEOMETRY (FANNING DOWN & CONVERGING) */}
      <div className="relative w-full h-[220px] sm:h-[240px] my-1 flex items-center justify-center">
        <svg
          viewBox="0 0 440 240"
          className="w-full h-full pointer-events-none z-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="vertex-apex-triangle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="beam-fan-1" x1="50%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="beam-fan-2" x1="50%" y1="0%" x2="30%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="beam-fan-3" x1="50%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-mint)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="beam-fan-4" x1="50%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-mint)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="beam-converge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.9" />
            </linearGradient>

            <filter id="vertex-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Background glowing triangle motif */}
          <polygon
            points="220,10 410,230 30,230"
            fill="none"
            stroke="url(#vertex-apex-triangle)"
            strokeWidth="1"
            strokeDasharray="6 8"
            opacity="0.22"
          />

          {/* TOP FANNING BEAMS: From Apex (220, 10) to 4 Sectors (55, 110), (165, 110), (275, 110), (385, 110) */}
          {/* Static dashed guidelines */}
          <path d="M 220,10 Q 130,50 55,105" fill="none" stroke="var(--accent-blue)" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
          <path d="M 220,10 Q 190,60 165,105" fill="none" stroke="var(--accent-blue)" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
          <path d="M 220,10 Q 250,60 275,105" fill="none" stroke="var(--accent-mint)" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
          <path d="M 220,10 Q 310,50 385,105" fill="none" stroke="var(--accent-mint)" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

          {/* Animated pulsing beams fanning out */}
          <path
            d="M 220,10 Q 130,50 55,105"
            fill="none"
            stroke="url(#beam-fan-1)"
            strokeWidth="2"
            strokeDasharray="160"
            strokeDashoffset={active ? '0' : '160'}
            className={active ? 'animate-beam' : ''}
            style={{ animationDelay: '0s' }}
          />
          <path
            d="M 220,10 Q 190,60 165,105"
            fill="none"
            stroke="url(#beam-fan-2)"
            strokeWidth="2"
            strokeDasharray="160"
            strokeDashoffset={active ? '0' : '160'}
            className={active ? 'animate-beam' : ''}
            style={{ animationDelay: '0.2s' }}
          />
          <path
            d="M 220,10 Q 250,60 275,105"
            fill="none"
            stroke="url(#beam-fan-3)"
            strokeWidth="2"
            strokeDasharray="160"
            strokeDashoffset={active ? '0' : '160'}
            className={active ? 'animate-beam' : ''}
            style={{ animationDelay: '0.4s' }}
          />
          <path
            d="M 220,10 Q 310,50 385,105"
            fill="none"
            stroke="url(#beam-fan-4)"
            strokeWidth="2"
            strokeDasharray="160"
            strokeDashoffset={active ? '0' : '160'}
            className={active ? 'animate-beam' : ''}
            style={{ animationDelay: '0.6s' }}
          />

          {/* BOTTOM CONVERGING BEAMS: From Sectors (55, 125), (165, 125), (275, 125), (385, 125) to Central Ecosystem (220, 220) */}
          {/* Static dashed guidelines */}
          <path d="M 55,125 Q 120,185 220,215" fill="none" stroke="var(--accent-blue)" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
          <path d="M 165,125 Q 190,175 220,215" fill="none" stroke="var(--accent-mint)" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
          <path d="M 275,125 Q 250,175 220,215" fill="none" stroke="var(--accent-mint)" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
          <path d="M 385,125 Q 320,185 220,215" fill="none" stroke="var(--accent-blue)" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

          {/* Animated pulsing beams converging */}
          <path
            d="M 55,125 Q 120,185 220,215"
            fill="none"
            stroke="url(#beam-converge-grad)"
            strokeWidth="2"
            strokeDasharray="160"
            strokeDashoffset={active ? '0' : '160'}
            className={active ? 'animate-beam' : ''}
            style={{ animationDelay: '0.7s' }}
          />
          <path
            d="M 165,125 Q 190,175 220,215"
            fill="none"
            stroke="url(#beam-converge-grad)"
            strokeWidth="2.2"
            strokeDasharray="160"
            strokeDashoffset={active ? '0' : '160'}
            className={active ? 'animate-beam' : ''}
            style={{ animationDelay: '0.9s' }}
          />
          <path
            d="M 275,125 Q 250,175 220,215"
            fill="none"
            stroke="url(#beam-converge-grad)"
            strokeWidth="2.2"
            strokeDasharray="160"
            strokeDashoffset={active ? '0' : '160'}
            className={active ? 'animate-beam' : ''}
            style={{ animationDelay: '1.1s' }}
          />
          <path
            d="M 385,125 Q 320,185 220,215"
            fill="none"
            stroke="url(#beam-converge-grad)"
            strokeWidth="2"
            strokeDasharray="160"
            strokeDashoffset={active ? '0' : '160'}
            className={active ? 'animate-beam' : ''}
            style={{ animationDelay: '1.3s' }}
          />

          {/* Central convergence node anchor glow */}
          <circle cx="220" cy="218" r="6" fill="var(--base)" stroke="var(--accent-mint)" strokeWidth="1.5" opacity="0.8" />
          <circle cx="220" cy="218" r="2.5" fill="var(--accent-mint)" />
        </svg>

        {/* 4 INDUSTRY NODES (FLOATING AT CENTER ROW) */}
        <div className="absolute top-[48%] -translate-y-1/2 inset-x-0 flex items-center justify-between px-1 sm:px-2 z-10 pointer-events-auto">
          <SectorNode label="Retail" accent="blue" />
          <SectorNode label="HR" accent="mint" />
          <SectorNode label="Real Estate" accent="blue" />
          <SectorNode label="Waste Mgmt" accent="mint" />
        </div>
      </div>

      {/* BOTTOM CONVERGED NODE: "Centralized Ecosystem" */}
      <div className="relative z-20 mt-1">
        <div className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl glass border border-[var(--accent-mint)]/50 shadow-[0_0_24px_var(--glow-mint)] bg-[var(--surface-raised)]/95 flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
          <span className="relative flex h-2.5 w-2.5">
            {!reduced && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-mint)] opacity-75" />
            )}
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent-mint)] shadow-[0_0_8px_var(--glow-mint)]" />
          </span>
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[var(--text-primary)]">
            Centralized Ecosystem
          </span>
          <CheckCircle2 size={15} className="text-[var(--accent-mint)] ml-0.5" />
        </div>
      </div>
    </div>
  )
}

/**
 * BeforeAfterStrip — Pure SVG diagram showing scattered bottlenecks converging
 * into one connected network.
 */
function BeforeAfterStrip() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const reduced = useReducedMotion()
  const active = isInView && !reduced

  return (
    <div
      ref={containerRef}
      className="w-full mt-6 pt-6 border-t border-[var(--border-subtle)]"
      aria-hidden="true"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 text-xs font-mono uppercase tracking-wider">
        <span className="flex items-center gap-2 text-[var(--text-muted)]">
          <span className="w-2 h-2 rounded-full bg-red-400/80 shadow-[0_0_8px_rgba(248,113,113,0.4)]" />
          Before: Fragmented Operational Bottlenecks
        </span>
        <span className="flex items-center gap-2 text-[var(--accent-mint)] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-mint)] shadow-[0_0_8px_var(--glow-mint)]" />
          After: Unified Centralized Network
        </span>
      </div>

      <div className="w-full h-[120px] sm:h-[135px] rounded-2xl bg-[var(--base)]/60 border border-[var(--border-subtle)]/70 p-2 sm:p-3 overflow-hidden">
        <svg
          viewBox="0 0 740 120"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="strip-arrow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-blue)" />
              <stop offset="100%" stopColor="var(--accent-mint)" />
            </linearGradient>

            <linearGradient id="connected-net-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* ── LEFT HALF: SCATTERED DISCONNECTED DOTS (BOTTLENECK) ── */}
          <g opacity="0.85">
            {/* Silo 1: Retail */}
            <circle cx="50" cy="40" r="7" fill="var(--surface-raised)" stroke="rgba(248,113,113,0.6)" strokeWidth="1.5" />
            <circle cx="50" cy="40" r="2.5" fill="rgba(248,113,113,0.8)" />
            <text x="50" y="58" fill="var(--text-muted)" fontSize="9" fontFamily="monospace" textAnchor="middle">Retail</text>

            {/* Silo 2: HR */}
            <circle cx="120" cy="85" r="7" fill="var(--surface-raised)" stroke="rgba(248,113,113,0.6)" strokeWidth="1.5" />
            <circle cx="120" cy="85" r="2.5" fill="rgba(248,113,113,0.8)" />
            <text x="120" y="103" fill="var(--text-muted)" fontSize="9" fontFamily="monospace" textAnchor="middle">HR</text>

            {/* Silo 3: Real Estate */}
            <circle cx="195" cy="35" r="7" fill="var(--surface-raised)" stroke="rgba(248,113,113,0.6)" strokeWidth="1.5" />
            <circle cx="195" cy="35" r="2.5" fill="rgba(248,113,113,0.8)" />
            <text x="195" y="53" fill="var(--text-muted)" fontSize="9" fontFamily="monospace" textAnchor="middle">Real Estate</text>

            {/* Silo 4: Waste Mgmt */}
            <circle cx="265" cy="80" r="7" fill="var(--surface-raised)" stroke="rgba(248,113,113,0.6)" strokeWidth="1.5" />
            <circle cx="265" cy="80" r="2.5" fill="rgba(248,113,113,0.8)" />
            <text x="265" y="98" fill="var(--text-muted)" fontSize="9" fontFamily="monospace" textAnchor="middle">Waste</text>

            {/* Broken, discontinuous friction traces (Bottlenecks) */}
            <path d="M 57,43 L 85,55" fill="none" stroke="rgba(248,113,113,0.4)" strokeWidth="1" strokeDasharray="3 4" />
            <path d="M 125,78 L 160,55" fill="none" stroke="rgba(248,113,113,0.4)" strokeWidth="1" strokeDasharray="3 4" />
            <path d="M 200,42 L 230,65" fill="none" stroke="rgba(248,113,113,0.4)" strokeWidth="1" strokeDasharray="3 4" />

            {/* Disconnect indicator marks */}
            <line x1="88" y1="52" x2="94" y2="58" stroke="rgba(248,113,113,0.8)" strokeWidth="1.5" />
            <line x1="94" y1="52" x2="88" y2="58" stroke="rgba(248,113,113,0.8)" strokeWidth="1.5" />
            <line x1="163" y1="52" x2="169" y2="58" stroke="rgba(248,113,113,0.8)" strokeWidth="1.5" />
            <line x1="169" y1="52" x2="163" y2="58" stroke="rgba(248,113,113,0.8)" strokeWidth="1.5" />
          </g>

          {/* ── CENTER TRANSITION: ARROW & INTEGRATION MOTIF ── */}
          <g>
            <rect x="330" y="44" width="80" height="26" rx="13" fill="var(--surface-raised)" stroke="url(#strip-arrow-grad)" strokeWidth="1" />
            <path
              d="M 345,57 L 390,57 M 382,51 L 391,57 L 382,63"
              fill="none"
              stroke="url(#strip-arrow-grad)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="370" y="36" fill="var(--accent-mint)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.1em" textAnchor="middle">
              INVEX CORE
            </text>
          </g>

          {/* ── RIGHT HALF: CENTRALIZED CONNECTED NETWORK ── */}
          <g>
            {/* Unified Central Hub Node */}
            <circle cx="580" cy="58" r="14" fill="var(--surface-raised)" stroke="url(#strip-arrow-grad)" strokeWidth="1.8" />
            <circle cx="580" cy="58" r="5" fill="var(--accent-mint)" />
            <circle cx="580" cy="58" r="22" fill="none" stroke="var(--accent-mint)" strokeWidth="0.7" opacity="0.3" strokeDasharray="4 4" />
            <text x="580" y="85" fill="var(--accent-mint)" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              Centralized Hub
            </text>

            {/* Synchronized Satellite Nodes */}
            {/* Retail */}
            <circle cx="480" cy="35" r="6" fill="var(--surface-raised)" stroke="var(--accent-blue)" strokeWidth="1.2" />
            <circle cx="480" cy="35" r="2" fill="var(--accent-blue)" />
            <text x="480" y="24" fill="var(--text-secondary)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Retail</text>

            {/* HR */}
            <circle cx="480" cy="85" r="6" fill="var(--surface-raised)" stroke="var(--accent-mint)" strokeWidth="1.2" />
            <circle cx="480" cy="85" r="2" fill="var(--accent-mint)" />
            <text x="480" y="103" fill="var(--text-secondary)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">HR</text>

            {/* Real Estate */}
            <circle cx="680" cy="35" r="6" fill="var(--surface-raised)" stroke="var(--accent-blue)" strokeWidth="1.2" />
            <circle cx="680" cy="35" r="2" fill="var(--accent-blue)" />
            <text x="680" y="24" fill="var(--text-secondary)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Real Estate</text>

            {/* Waste Mgmt */}
            <circle cx="680" cy="85" r="6" fill="var(--surface-raised)" stroke="var(--accent-mint)" strokeWidth="1.2" />
            <circle cx="680" cy="85" r="2" fill="var(--accent-mint)" />
            <text x="680" y="103" fill="var(--text-secondary)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Waste</text>

            {/* Integrated connecting traces */}
            <line x1="486" y1="37" x2="568" y2="54" stroke="url(#connected-net-grad)" strokeWidth="1.5" opacity="0.8" />
            <line x1="486" y1="83" x2="568" y2="62" stroke="url(#connected-net-grad)" strokeWidth="1.5" opacity="0.8" />
            <line x1="674" y1="37" x2="592" y2="54" stroke="url(#connected-net-grad)" strokeWidth="1.5" opacity="0.8" />
            <line x1="674" y1="83" x2="592" y2="62" stroke="url(#connected-net-grad)" strokeWidth="1.5" opacity="0.8" />

            {/* Active sync pulses traveling along traces */}
            {active && (
              <>
                <circle cx="525" cy="45" r="1.8" fill="var(--accent-mint)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="525" cy="73" r="1.8" fill="var(--accent-blue)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="635" cy="45" r="1.8" fill="var(--accent-blue)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="635" cy="73" r="1.8" fill="var(--accent-mint)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.5s" repeatCount="indefinite" />
                </circle>
              </>
            )}
          </g>
        </svg>
      </div>
    </div>
  )
}

/**
 * OurAimSection — The opening hero section of the About page: "Our Aim".
 * Features the signature "Innovation Vertex" motif, Mission pull-quote,
 * directional Reveal convergence, SpotlightCards, and pure SVG before/after strip.
 */
export function OurAimSection() {
  const reduced = useReducedMotion()

  return (
    <section
      id="our-aim"
      aria-labelledby="our-aim-heading"
      className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-[var(--base)] section-glow-top section-radial-glow overflow-hidden overflow-x-clip"
    >
      {/* Background: large slowly rotating EclipseRing centered behind content */}
      <div className="absolute top-1/4 sm:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-45 -z-0">
        <EclipseRing size={640} className="w-[500px] h-[500px] sm:w-[640px] sm:h-[640px]" />
      </div>

      {/* Semantic Accessible Heading for Screen Readers */}
      <h2 id="our-aim-heading" className="sr-only">
        Our Aim — Mission, Vision and Purpose of Invex IT Solutions
      </h2>

      <div className="container-wide relative z-10">
        {/* ── TOP HERO ROW: 12-COLUMN GRID (LEFT 7 COLS / RIGHT 5 COLS) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left 7 Columns: Kicker, H1, Sub-line, Mission pull-quote */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Kicker Pill */}
            <Reveal from="left" delay={0.1}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] glass px-3.5 py-1.5 rounded-full border border-[var(--accent-mint)]/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] shadow-[0_0_8px_var(--glow-mint)]" />
                About Invex IT
              </div>
            </Reveal>

            {/* Page H1: "The Innovation Vertex." */}
            <Reveal from="left" delay={0.2} className="w-full">
              <ScrollRevealText
                as="h1"
                text="The Innovation Vertex."
                className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-[var(--text-primary)] [&>span:nth-of-type(2)>span:last-child]:brain-gradient [&>span:nth-of-type(3)>span:last-child]:brain-gradient"
              />
            </Reveal>

            {/* Sub-line under H1 */}
            <Reveal from="left" delay={0.3}>
              <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] font-normal leading-relaxed mt-4 sm:mt-5 max-w-2xl">
                Where complex business meets cutting-edge software.
              </p>
            </Reveal>

            {/* Mission Statement as Large Pull-Quote with Mint Left Border */}
            {/* <Reveal from="left" delay={0.4} className="w-full">
              <div className="mt-8 sm:mt-10 pl-5 sm:pl-6 border-l-2 sm:border-l-[3px] border-[var(--accent-mint)] relative bg-[var(--accent-mint)]/[0.02] rounded-r-2xl py-3 pr-4">
                <span className="block font-mono text-[11px] uppercase tracking-widest text-[var(--accent-mint)] mb-2 font-semibold">
                  Mission Statement
                </span>
                <blockquote className="font-display font-medium text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed italic">
                  &ldquo;To empower global enterprises with scalable, innovative, and robust software architecture.&rdquo;
                </blockquote>
              </div>
            </Reveal> */}
          </div>

          {/* Right 5 Columns: The Vertex Diagram */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <Reveal from="right" delay={0.25} className="w-full">
              <VertexDiagram />
            </Reveal>
          </div>
        </div>

        {/* ── BOTTOM CARDS ROW: MISSION & VISION (SIDE-BY-SIDE) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Card 1: Our Mission (Enters from LEFT) */}
          <Reveal from="left" delay={0.2} rotate className="h-full">
            <SpotlightCard
              cursorLabel="MISSION"
              className="h-full p-7 sm:p-9 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-mint)]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl glass border border-[var(--accent-mint)]/30 flex items-center justify-center shadow-md shadow-[var(--glow-mint)] bg-[var(--surface-raised)]/80 text-[var(--accent-mint)]">
                    <Target size={24} />
                  </div>
                  {/* <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent-mint)] px-3 py-1 rounded-full glass border border-[var(--accent-mint)]/25">
                    Purpose
                  </span> */}
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] mb-3 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
                  To empower global enterprises with scalable, innovative, and robust software architecture.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <Sparkles size={14} className="text-[var(--accent-mint)]" />
                <span>Enterprise Architecture • Scalable Systems</span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Our Vision (Enters from RIGHT) */}
          <Reveal from="right" delay={0.2} rotate className="h-full">
            <SpotlightCard
              cursorLabel="VISION"
              className="h-full p-7 sm:p-9 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-blue)]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl glass border border-[var(--accent-blue)]/30 flex items-center justify-center shadow-md shadow-[var(--glow-blue)] bg-[var(--surface-raised)]/80 text-[var(--accent-blue)]">
                    <Telescope size={24} />
                  </div>
                  {/* <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent-blue)] px-3 py-1 rounded-full glass border border-[var(--accent-blue)]/25">
                    Horizon
                  </span> */}
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] mb-3 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
                  To be the apex of technological innovation (&ldquo;Innovation Vertex&rdquo;), seamlessly bridging complex business requirements with cutting-edge software solutions.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <Sparkles size={14} className="text-[var(--accent-blue)]" />
                <span>Apex Innovation • Strategic Convergence</span>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* ── FULL-WIDTH ROW: THE PROBLEM WE SOLVE (ENTERS FROM BOTTOM) ── */}
        {/* <Reveal from="bottom" delay={0.3} className="w-full">
          <SpotlightCard
            cursorLabel="SOLUTIONS"
            className="w-full p-7 sm:p-10 border border-[var(--border-subtle)] hover:border-[var(--accent-mint)]/35 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-2">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl glass border border-[var(--accent-mint)]/30 flex items-center justify-center shadow-sm shadow-[var(--glow-mint)] bg-[var(--surface-raised)]/80 text-[var(--accent-mint)]">
                    <Layers size={22} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] px-3 py-1 rounded-full glass border border-[var(--accent-mint)]/25">
                    Impact & Transformation
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] mb-3 tracking-tight">
                  The Problem We Solve
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-normal leading-relaxed">
                  We eliminate operational bottlenecks in retail, HR, real estate, and waste management by providing centralized, highly integrated digital ecosystems.
                </p>
              </div>

              <div className="hidden lg:flex flex-col items-end shrink-0">
                <div className="px-4 py-2 rounded-xl glass border border-[var(--border-subtle)] text-right">
                  <span className="block font-mono text-[10px] uppercase text-[var(--text-muted)]">Efficiency Multiplier</span>
                  <span className="font-display font-bold text-xl brain-gradient">Zero Bottlenecks</span>
                </div>
              </div>
            </div>


            <BeforeAfterStrip />
          </SpotlightCard>
        </Reveal> */}

        <Reveal from="bottom" delay={0.3} className="w-full">
          <SpotlightCard
            cursorLabel="SOLUTIONS"
            className="w-full p-7 sm:p-10 border border-[var(--border-subtle)] hover:border-[var(--accent-mint)]/35 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-2">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl glass border border-[var(--accent-mint)]/30 flex items-center justify-center shadow-sm shadow-[var(--glow-mint)] bg-[var(--surface-raised)]/80 text-[var(--accent-mint)]">
                    <Layers size={22} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] px-3 py-1 rounded-full glass border border-[var(--accent-mint)]/25">
                    Impact & Transformation
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] mb-3 tracking-tight">
                  The Problem We Solve
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-normal leading-relaxed">
                  We eliminate operational bottlenecks in retail, HR, real estate, and waste management by providing centralized, highly integrated digital ecosystems.
                </p>
              </div>

              {/* Image (replaces the old commented-out block) */}
              <div className="relative w-full lg:w-[380px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden glass border border-[var(--accent-mint)]/25 shadow-[0_0_30px_var(--glow-mint)]">
                <img
                  src={problemImage}
                  alt="Centralized, integrated digital ecosystem solving operational bottlenecks"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* subtle fade so the image blends with the dark theme */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, var(--base) 0%, transparent 45%)', opacity: 0.55 }}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Pure SVG Before→After transformation strip */}
            <BeforeAfterStrip />
          </SpotlightCard>
        </Reveal>

        {/* ── BOUNCING SCROLL INDICATOR (PAGE FLOWS INTO PART 2) ── */}
        <motion.div
          className="flex flex-col items-center justify-center gap-2 mt-12 sm:mt-16 pointer-events-none select-none"
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduced ? { duration: 0 } : { duration: 0.8, delay: 0.6 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
            Explore Our Journey
          </span>
          <motion.div
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={reduced ? {} : { repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-[var(--accent-mint)]" />
          </motion.div>
        </motion.div>

        {/* CircuitDivider along bottom edge */}
        <CircuitDivider className="container-wide mt-10 sm:mt-14" />
      </div>
    </section>
  )
}

/* Named export aliases and default export */
export { OurAimSection as OurAim, OurAimSection as AboutHero }
export default OurAimSection
