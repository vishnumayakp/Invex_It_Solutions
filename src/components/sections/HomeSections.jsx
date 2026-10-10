import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Cpu,
  Globe,
  ArrowRight,
  Quote,
  Activity,
  CheckCircle2,
  Code,
  Server,
  Headset,
  Check,
  Terminal,
} from 'lucide-react'
import SpotlightCard from '../common/SpotlightCard'
import ScrollRevealText from '../common/ScrollRevealText'
import Reveal from '../common/Reveal'
import CircuitDivider from '../common/CircuitDivider'
import EclipseRing from '../common/EclipseRing'
import Button from '../common/Button'
import BrainMark from '../../lib/BrainMark'
import useReducedMotion from '../../hooks/useReducedMotion'

/* ═══════════════════════════════════════════════════════
   SECTION 1: CLIENT MARQUEE (directly under the Hero)
   ═══════════════════════════════════════════════════════ */

export function ClientMarquee() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { amount: 0.1 })
  const reduced = useReducedMotion()

  /* TODO: Replace text wordmarks with real SVG/PNG logos when supplied by the client */
  const partners = [
    {
      name: 'Safari Group',
      subs: ['Hypermarkets', 'Trading', 'Real Estate'],
    },
    {
      name: 'Simple Logic IT',
      subs: ['Enterprise Solutions'],
    },
    {
      name: 'UAE & Qatar Clients',
      subs: ['Regional Retail Networks'],
    },
    {
      name: 'Safari Hypermarkets',
      subs: ['Multi-Branch Operations'],
    },
    {
      name: 'Safari Trading Division',
      subs: ['Global Logistics & Import'],
    },
  ]

  const shouldAnimate = !reduced && isInView

  return (
    <section
      ref={containerRef}
      className="relative z-10 -mt-10 sm:-mt-14 rounded-t-[28px] bg-[var(--base)] section-glow-top section-radial-glow pt-14 pb-8 overflow-hidden"
      aria-labelledby="marquee-heading"
    >
      {/* Hidden semantic heading */}
      <h2 id="marquee-heading" className="sr-only">
        Our Partners &amp; Clients
      </h2>

      {/* Small centered caption */}
      <div className="container-wide mb-6 text-center">
        {/* TODO: replace if the client supplies wording */}
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] opacity-90 inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" aria-hidden="true" />
          Our Partners &amp; Clients
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" aria-hidden="true" />
        </p>
      </div>

      {/* Infinite horizontal marquee with edge fade masks */}
      <div
        className="relative overflow-hidden group/marquee"
        role="region"
        aria-label="Client logos marquee"
      >
        {/* Left edge fade mask */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--base), transparent)' }}
          aria-hidden="true"
        />

        {/* Right edge fade mask */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--base), transparent)' }}
          aria-hidden="true"
        />

        {/* Scrolling track */}
        <div
          className="flex gap-8 sm:gap-14 whitespace-nowrap py-2 items-center"
          style={{
            animation: shouldAnimate ? 'marqueeScroll 26s linear infinite' : 'none',
            animationPlayState: 'running',
            width: 'max-content',
          }}
        >
          {/* Two identical sets for seamless continuous marquee loop */}
          {[0, 1].map((copyIdx) => (
            <div key={copyIdx} className="flex gap-8 sm:gap-14 items-center shrink-0">
              {partners.map((partner, pIdx) => (
                <div
                  key={`${copyIdx}-${pIdx}-${partner.name}`}
                  className="flex flex-col items-center justify-center gap-1.5 px-6 py-2 rounded-xl transition-all duration-300 opacity-50 hover:opacity-100 hover:scale-105 cursor-default select-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)]"
                  tabIndex={0}
                >
                  {/* TODO: Swap in real logos */}
                  <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] tracking-tight">
                    {partner.name}
                  </span>
                  {partner.subs && (
                    <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                      {partner.subs.join(' · ')}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 2: WHY PARTNER WITH INVEX IT (Bento Grid)
   ═══════════════════════════════════════════════════════ */

function TwinkleStar({ className = '', delay = 0, size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        animation: `twinkle 3s ease-in-out infinite ${delay}s`,
      }}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
        fill="var(--accent-mint)"
        opacity="0.85"
      />
    </svg>
  )
}

function FunnelGraphic({ inView }) {
  const reduced = useReducedMotion()
  const active = inView && !reduced

  return (
    <div
      className="relative w-full h-[210px] sm:h-[230px] my-4 flex flex-col items-center justify-between overflow-hidden"
      aria-hidden="true"
    >
      <TwinkleStar className="top-2 left-6 text-[var(--accent-mint)]" delay={0.2} size={14} />
      <TwinkleStar className="top-8 right-8 text-[var(--accent-blue)]" delay={1.4} size={16} />
      <TwinkleStar className="bottom-12 left-10 text-[var(--accent-mint)]" delay={2.1} size={12} />
      <TwinkleStar className="bottom-8 right-10 text-[var(--accent-mint)]" delay={0.8} size={18} />

      <div className="w-full flex justify-between items-center px-4 sm:px-8 z-10 pt-1">
        <div className="px-3 py-1 rounded-full glass border border-[var(--accent-blue)]/40 shadow-sm shadow-[var(--glow-blue)] text-xs font-mono font-semibold text-[var(--accent-blue)] tracking-wider">
          C#
        </div>
        <div className="px-3 py-1 rounded-full glass border border-[var(--accent-mint)]/40 shadow-sm shadow-[var(--glow-mint)] text-xs font-mono font-semibold text-[var(--accent-mint)] tracking-wider">
          React
        </div>
        <div className="px-3 py-1 rounded-full glass border border-[var(--accent-mint)]/40 shadow-sm shadow-[var(--glow-mint)] text-xs font-mono font-semibold text-[var(--accent-mint)] tracking-wider">
          Node.js
        </div>
      </div>

      <svg
        viewBox="0 0 300 130"
        className="w-full h-[120px] pointer-events-none z-0"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="beam-left-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="beam-center-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-mint)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="beam-right-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-mint)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          d="M 40,5 Q 75,55 145,110"
          fill="none"
          stroke="url(#beam-left-grad)"
          strokeWidth="2"
          strokeDasharray="140"
          strokeDashoffset={active ? '0' : '140'}
          className={active ? 'animate-beam' : ''}
        />
        <path
          d="M 40,5 Q 75,55 145,110"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.3"
        />

        <path
          d="M 150,5 L 150,110"
          fill="none"
          stroke="url(#beam-center-grad)"
          strokeWidth="2.5"
          strokeDasharray="140"
          strokeDashoffset={active ? '0' : '140'}
          className={active ? 'animate-beam' : ''}
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d="M 150,5 L 150,110"
          fill="none"
          stroke="var(--accent-mint)"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.35"
        />

        <path
          d="M 260,5 Q 225,55 155,110"
          fill="none"
          stroke="url(#beam-right-grad)"
          strokeWidth="2"
          strokeDasharray="140"
          strokeDashoffset={active ? '0' : '140'}
          className={active ? 'animate-beam' : ''}
          style={{ animationDelay: '0.8s' }}
        />
        <path
          d="M 260,5 Q 225,55 155,110"
          fill="none"
          stroke="var(--accent-mint)"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.3"
        />
      </svg>

      <div className="relative z-10 flex items-center justify-center">
        <div className="relative p-2 sm:p-2.5 rounded-2xl glass border border-[var(--accent-blue)]/30 shadow-[0_0_24px_var(--glow-blue)] bg-[var(--surface-raised)]/90 flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <BrainMark size={36} />
        </div>
      </div>
    </div>
  )
}

function UptimeSparklineVisual({ inView }) {
  const reduced = useReducedMotion()
  const active = inView && !reduced

  return (
    <div className="w-full my-4 flex flex-col gap-3" aria-hidden="true">
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full glass border border-[var(--accent-mint)]/30 text-[var(--accent-mint)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-mint)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-mint)]" />
          </span>
          <span className="font-semibold">99.99% UPTIME</span>
        </div>
        <span className="text-[var(--text-muted)] flex items-center gap-1">
          <Activity size={13} className="text-[var(--accent-blue)]" />
          Continuous SLA
        </span>
      </div>

      <div className="relative w-full h-[80px] rounded-xl overflow-hidden glass border border-[var(--border-subtle)] p-2">
        <svg viewBox="0 0 240 60" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sparkline-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-mint)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="sparkline-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-blue)" />
              <stop offset="100%" stopColor="var(--accent-mint)" />
            </linearGradient>
          </defs>

          <line x1="0" y1="15" x2="240" y2="15" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="0" y1="35" x2="240" y2="35" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="3 3" />

          <polygon
            points="0,55 0,38 25,32 50,36 75,26 100,28 125,20 150,22 175,18 200,16 225,12 240,14 240,55"
            fill="url(#sparkline-fill)"
          />

          <path
            d="M 0,38 Q 25,32 50,36 T 100,28 T 150,22 T 200,16 T 225,12 L 240,14"
            fill="none"
            stroke="url(#sparkline-stroke)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle cx="236" cy="14" r="3.5" fill="var(--accent-mint)" />
          {active && (
            <circle cx="236" cy="14" r="6" fill="none" stroke="var(--accent-mint)" strokeWidth="1" opacity="0.6">
              <animate attributeName="r" values="3.5;7.5;3.5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>
      </div>
    </div>
  )
}

function RegionalMap({ inView }) {
  const locations = [
    { name: 'Mumbai', cx: 65.5, cy: 48, labelX: 68, labelY: 46 },
    { name: 'Kerala', cx: 63, cy: 56, labelX: 66, labelY: 58 },
    { name: 'Qatar', cx: 44, cy: 42, labelX: 40, labelY: 39 },
    { name: 'UAE', cx: 47, cy: 44, labelX: 50, labelY: 47 },
    { name: 'Turkey', cx: 38, cy: 32, labelX: 34, labelY: 29 },
    { name: 'China', cx: 76, cy: 36, labelX: 79, labelY: 34 },
  ]

  const arcs = [
    [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3],
  ]

  const [hoveredIdx, setHoveredIdx] = useState(null)
  const reduced = useReducedMotion()
  const active = inView && !reduced

  return (
    <div className="relative w-full mt-4" aria-hidden="true">
      <svg
        viewBox="0 0 100 80"
        className="w-full h-auto min-h-[200px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <g opacity="0.14" stroke="var(--text-muted)" strokeWidth="0.35" fill="none" strokeDasharray="1 1.5">
          <path d="M25,25 Q30,20 38,22 L42,28 Q44,32 42,36 L38,40 Q35,42 32,40 L28,36 Q25,32 25,25Z" />
          <path d="M42,36 Q44,38 48,40 L52,42 Q54,46 58,48 L62,46 Q66,44 68,40 L70,36 Q72,32 74,30 L78,28 Q80,30 82,34 L80,38 Q78,42 74,44 L70,46 Q66,50 62,52 L58,56 Q54,58 50,56 L46,52 Q44,48 42,44 L42,36Z" />
          <path d="M70,28 Q74,24 78,22 L82,24 Q86,28 88,32 L86,38 Q84,42 80,44 L76,42 Q72,38 70,34 L70,28Z" />
        </g>

        {arcs.map(([fromIdx, toIdx], i) => {
          const from = locations[fromIdx]
          const to = locations[toIdx]
          const midX = (from.cx + to.cx) / 2
          const midY = Math.min(from.cy, to.cy) - 8
          return (
            <path
              key={i}
              d={`M${from.cx},${from.cy} Q${midX},${midY} ${to.cx},${to.cy}`}
              fill="none"
              stroke="var(--accent-mint)"
              strokeWidth="0.45"
              strokeDasharray="2 2"
              opacity="0.4"
            >
              {active && (
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-6"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              )}
            </path>
          )
        })}

        {locations.map((loc, i) => (
          <g
            key={loc.name}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="cursor-pointer"
          >
            <circle cx={loc.cx} cy={loc.cy} r="2.8" fill="none" stroke="var(--accent-mint)" strokeWidth="0.5" opacity="0.4">
              {active && (
                <animate attributeName="r" values="2.5;3.6;2.5" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
              )}
            </circle>
            <circle cx={loc.cx} cy={loc.cy} r="1.3" fill="var(--accent-mint)" opacity="0.95" />
            {hoveredIdx === i && (
              <g>
                <rect
                  x={loc.labelX - 1}
                  y={loc.labelY - 3.8}
                  width={loc.name.length * 3 + 4}
                  height="5.4"
                  rx="1.2"
                  fill="var(--surface-raised)"
                  stroke="var(--accent-mint)"
                  strokeWidth="0.4"
                  opacity="0.95"
                />
                <text
                  x={loc.labelX + loc.name.length * 1.5 + 1}
                  y={loc.labelY - 0.2}
                  textAnchor="middle"
                  fill="var(--text-primary)"
                  fontSize="2.8"
                  fontFamily="var(--font-body)"
                  fontWeight="600"
                >
                  {loc.name}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

function LiveTransactionScaleCard({ inView }) {
  const reduced = useReducedMotion()
  const active = inView && !reduced

  return (
    <SpotlightCard
      cursorLabel="SCALE"
      className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-[var(--border-subtle)] hover:border-[var(--accent-blue)]/40 transition-colors"
    >
      <div className="flex-1 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[var(--accent-blue)]/30 text-xs font-mono text-[var(--accent-blue)] mb-3">
          <CheckCircle2 size={13} className="text-[var(--accent-mint)]" />
          <span>High-Volume Throughput</span>
        </div>
        <h3 className="font-display font-semibold text-xl sm:text-2xl text-[var(--text-primary)] mb-2">
          Effortless Transaction Velocity
        </h3>
        <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
          Handling millions of transactions effortlessly across enterprise retail divisions daily.
        </p>
      </div>

      <div className="w-full md:w-auto shrink-0 flex items-center gap-4 p-4 rounded-2xl glass border border-[var(--border-subtle)]">
        <div className="text-right">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Peak Load</div>
          <div className="font-display font-bold text-xl sm:text-2xl brain-gradient">12,800+ TPS</div>
        </div>

        <div className="flex items-end gap-1.5 h-10 px-2" aria-hidden="true">
          {[4, 7, 5, 9, 6, 8, 10, 6, 7].map((val, idx) => (
            <div
              key={idx}
              className="w-1.5 rounded-full brain-gradient-bg"
              style={{
                height: `${val * 3.5}px`,
                opacity: 0.85,
                animation: active ? `pulse 1.8s ease-in-out infinite ${idx * 0.15}s` : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </SpotlightCard>
  )
}

export function ValueProposition() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section
      ref={sectionRef}
      id="why-partner"
      className="relative z-10 py-16 md:py-24 overflow-hidden"
      aria-labelledby="why-partner-heading"
    >
      <div className="container-wide">
        <ScrollRevealText
          as="h2"
          text="Why Partner With Invex IT?"
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-[var(--text-primary)]"
        />

        <Reveal delay={0.15}>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-12 sm:mb-16 leading-relaxed font-normal text-[var(--text-secondary)]">
            Backed by the massive infrastructure of the Safari Group of Companies and Simple Logic IT, we don&apos;t just write code; we build battle-tested systems. From managing complex hypermarket retail divisions to scaling operations for multi-national exports, our software handles millions of transactions effortlessly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.15} variant="scale" className="flex-1">
              <SpotlightCard
                cursorLabel="EXPLORE"
                className="h-full p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-blue)]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl glass border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)] shadow-md shadow-[var(--glow-blue)]">
                      <Shield size={24} />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-[var(--text-primary)] mb-3">
                    Enterprise-Grade Reliability
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-4">
                    Proven across massive hypermarket chains and malls in the Middle East.
                  </p>
                </div>
                <UptimeSparklineVisual inView={isInView} />
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.25} variant="scale" className="flex-1">
              <SpotlightCard
                cursorLabel="EXPLORE"
                className="h-full p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-mint)]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl glass border border-[var(--accent-mint)]/30 flex items-center justify-center text-[var(--accent-mint)] shadow-md shadow-[var(--glow-mint)]">
                      <Cpu size={24} />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-[var(--text-primary)] mb-3">
                    End-to-End Innovation
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-2">
                    Dedicated R&amp;D teams building futuristic tech using C#, React, and Node.js.
                  </p>
                </div>
                <FunnelGraphic inView={isInView} />
              </SpotlightCard>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2} variant="scale" className="h-full">
              <SpotlightCard
                cursorLabel="GLOBAL"
                className="h-full p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--accent-mint)]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl glass border border-[var(--accent-mint)]/30 flex items-center justify-center text-[var(--accent-mint)] shadow-md shadow-[var(--glow-mint)]">
                      <Globe size={24} />
                    </div>
                    <span className="text-xs font-mono text-[var(--accent-mint)] glass px-3 py-1 rounded-full border border-[var(--accent-mint)]/20">
                      6 Strategic Regions
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-[var(--text-primary)] mb-3">
                    Global Footprint
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed max-w-xl">
                    Development rooted in Mumbai and Kerala, with an expansive footprint across Qatar, the UAE, Turkey, and China.
                  </p>
                </div>
                <RegionalMap inView={isInView} />
              </SpotlightCard>
            </Reveal>
          </div>

          <div className="lg:col-span-12">
            <Reveal delay={0.3} variant="scale">
              <LiveTransactionScaleCard inView={isInView} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export const WhyPartner = ValueProposition

/* ═══════════════════════════════════════════════════════
   SECTION 3: SERVICES & PRODUCTS OVERVIEW (PINNED TABBED SHOWCASE)
   ═══════════════════════════════════════════════════════ */

/* ── Visual 1: Custom Software Development (Floating Code Window) ── */
function CustomSoftwareVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto p-4 sm:p-6 rounded-3xl glass border border-[var(--border-subtle)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Window Controls */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
        </div>
        <div className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5">
          <Terminal size={12} className="text-[var(--accent-blue)]" />
          <span>CoreEngine.cs</span>
        </div>
      </div>

      {/* Code Snippets */}
      <div className="font-mono text-xs sm:text-[13px] leading-relaxed text-[var(--text-muted)] space-y-1.5 select-none overflow-x-auto">
        <div className="text-[var(--accent-blue)] font-medium">// Invex Custom Architecture Engine</div>
        <div>
          <span className="text-[var(--accent-mint)]">namespace</span>{' '}
          <span className="text-[var(--text-primary)]">Invex.Core.Engine</span>
        </div>
        <div>
          <span className="text-[var(--accent-mint)]">public class</span>{' '}
          <span className="text-[var(--text-primary)] font-semibold">BusinessLogicRouter</span>
        </div>
        <div className="pl-4">
          <span className="text-[var(--accent-mint)]">public async</span> Task{' '}
          <span className="text-[var(--accent-blue)]">ProcessStream</span>() &#123;
        </div>
        <div className="pl-8 text-[var(--hero-subcopy)]">
          <span className="text-[var(--accent-mint)]">await</span> Cluster.OptimizeNodes();
        </div>
        <div className="pl-8 text-[var(--accent-mint)]">
          return Solution.Deploy();
        </div>
        <div className="pl-4">&#125;</div>
      </div>

      {/* Floating Architecture Node Badges */}
      <div className="flex flex-wrap gap-2 pt-5 mt-4 border-t border-[var(--border-subtle)]">
        <span className="px-2.5 py-1 rounded-md glass border border-[var(--accent-blue)]/30 text-[11px] font-mono text-[var(--accent-blue)]">
          C# .NET
        </span>
        <span className="px-2.5 py-1 rounded-md glass border border-[var(--accent-mint)]/30 text-[11px] font-mono text-[var(--accent-mint)]">
          React
        </span>
        <span className="px-2.5 py-1 rounded-md glass border border-[var(--accent-mint)]/30 text-[11px] font-mono text-[var(--accent-mint)]">
          Node.js
        </span>
      </div>
    </div>
  )
}

/* ── Visual 2: Enterprise Products (3D Tilted POS & ERP Dashboard) ── */
function EnterpriseProductsVisual() {
  return (
    <div
      className="relative w-full max-w-md mx-auto p-5 sm:p-7 rounded-3xl glass border border-[var(--accent-blue)]/30 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
      style={{
        transform: 'perspective(1000px) rotateY(-4deg) rotateX(4deg)',
        transition: 'transform 0.4s ease-out',
      }}
    >
      {/* Header with Status */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">
            Invex Retail POS v4.2
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full glass border border-[var(--accent-mint)]/30 text-[10px] font-mono text-[var(--accent-mint)]">
          TILL #04 ACTIVE
        </span>
      </div>

      {/* Transaction Summary Screen */}
      <div className="p-4 rounded-2xl bg-[var(--surface-raised)]/90 border border-[var(--border-subtle)] mb-4 shadow-inner">
        <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">
          Synchronized Cart Total
        </div>
        <div className="font-display font-bold text-2xl sm:text-3xl brain-gradient tabular-nums">
          AED 1,429.50
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
          <span>Hypermarket Checkout</span>
          <span className="text-[var(--accent-mint)] font-medium">ERP Synced</span>
        </div>
      </div>

      {/* ERP & Queue Management Badges */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl glass border border-[var(--border-subtle)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Queue System</div>
          <div className="font-bold text-sm text-[var(--text-primary)] mt-0.5">Token #A-142</div>
        </div>
        <div className="p-3 rounded-xl glass border border-[var(--border-subtle)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Multi-Branch</div>
          <div className="font-bold text-sm text-[var(--accent-mint)] mt-0.5">Real-Time ERP</div>
        </div>
      </div>
    </div>
  )
}

/* ── Visual 3: IT Consulting & AMC (Server Rack with Status Lights) ── */
function ConsultingVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto p-5 sm:p-7 rounded-3xl glass border border-[var(--accent-mint)]/30 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-5">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-[var(--accent-mint)]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">
            Infrastructure AMC
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full glass border border-[var(--accent-mint)]/30 text-[10px] font-mono text-[var(--accent-mint)]">
          24/7 SUPPORT
        </span>
      </div>

      {/* Server Rack Blades */}
      <div className="space-y-3 mb-5">
        {[
          { name: 'Core Hypermarket Clusters', status: 'Optimal', delay: '0s' },
          { name: 'Middle East Backbone Gateway', status: 'Active', delay: '0.4s' },
          { name: 'Simple Logic IT Failover', status: 'Online', delay: '0.8s' },
        ].map((blade, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl glass border border-[var(--border-subtle)] flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-mint)]" />
              <span className="font-mono text-xs text-[var(--text-primary)]">{blade.name}</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--accent-mint)] uppercase tracking-wider">
              {blade.status}
            </span>
          </div>
        ))}
      </div>

      {/* Backbone SLA Badge */}
      <div className="p-3.5 rounded-2xl bg-[var(--surface-raised)]/90 border border-[var(--border-subtle)] flex items-center justify-between">
        <div className="text-xs">
          <div className="font-semibold text-[var(--text-primary)]">Guaranteed SLA</div>
          <div className="text-[11px] text-[var(--text-muted)]">Simple Logic IT Integration</div>
        </div>
        <div className="font-display font-bold text-lg brain-gradient">99.98%</div>
      </div>
    </div>
  )
}

/* ── Pinned Tabbed Showcase (Section 2.3) ── */
export function ServicesOverview() {
  const sectionRef = useRef(null)
  const tabRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const reduced = useReducedMotion()
  const isInView = useInView(sectionRef, { amount: 0.1 })

  // Content definition matching verbatim
  const servicesData = [
    {
      title: 'Custom Software Development',
      description: 'Tailor-made web and application development engineered to solve complex business logic.',
      icon: Code,
      checklist: [
        'Web development',
        'Application development',
        'Built for complex business logic',
      ],
      VisualComponent: CustomSoftwareVisual,
    },
    {
      title: 'Enterprise Products',
      description: 'Ready-to-deploy, highly scalable POS, ERP, and Queue Management systems.',
      icon: Server,
      checklist: ['POS', 'ERP', 'Queue Management'],
      VisualComponent: EnterpriseProductsVisual,
    },
    {
      title: 'IT Consulting & AMC',
      description: 'Comprehensive maintenance and IT infrastructure support backed by our Middle East backbone, Simple Logic IT.',
      icon: Headset,
      checklist: [
        'Maintenance',
        'IT infrastructure support',
        'Backed by Simple Logic IT',
      ],
      VisualComponent: ConsultingVisual,
    },
  ]

  // Track scroll position across the 300vh section for tab switching
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    if (reduced) return
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (progress < 0.333) {
        setActiveIndex(0)
      } else if (progress < 0.666) {
        setActiveIndex(1)
      } else {
        setActiveIndex(2)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, reduced])

  // Click navigation: smooth scroll to that third of the section
  const handleTabClick = (idx) => {
    setActiveIndex(idx)
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const sectionTop = rect.top + scrollTop
    const sectionHeight = rect.height
    const viewportHeight = window.innerHeight

    const targetY = sectionTop + (idx / 2.7) * (sectionHeight - viewportHeight)
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  // Keyboard navigation for tablist
  const handleKeyDown = (e, idx) => {
    let nextIdx = null
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      nextIdx = (idx + 1) % 3
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      nextIdx = (idx - 1 + 3) % 3
    } else if (e.key === 'Home') {
      nextIdx = 0
    } else if (e.key === 'End') {
      nextIdx = 2
    }

    if (nextIdx !== null) {
      e.preventDefault()
      handleTabClick(nextIdx)
      tabRefs.current[nextIdx]?.focus()
    }
  }

  const activeService = servicesData[activeIndex]
  const ActiveVisual = activeService.VisualComponent

  return (
    <>
      <CircuitDivider className="container-wide" />
      <section
        ref={sectionRef}
        id="services-overview"
        className={`relative z-10 -mt-10 sm:-mt-14 rounded-t-[28px] bg-[var(--base)] section-glow-top section-radial-glow ${reduced ? 'py-20 md:py-28' : 'lg:h-[300vh] py-20 lg:py-0'
          }`}
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" className="sr-only">
          Services and Products Overview
        </h2>

        {/* ── DESKTOP PINNED STAGE (Sticky 100vh) ── */}
        <div className={`${reduced ? 'hidden' : 'hidden lg:flex'} sticky top-0 h-screen w-full flex-col justify-center overflow-hidden`}>
          <div className="container-wide w-full">
            <div className="grid grid-cols-12 gap-12 items-center">
              {/* Left Column: Active Service Details & Checklist */}
              <div
                className="col-span-6 flex flex-col justify-center min-h-[480px]"
                role="tabpanel"
                id={`service-panel-${activeIndex}`}
                aria-labelledby={`service-tab-${activeIndex}`}
              >
                <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-[var(--accent-mint)]/30 text-xs font-mono text-[var(--accent-mint)] w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
                  Powerful Solutions
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl text-[var(--text-primary)] mb-5 tracking-tight leading-tight">
                      {activeService.title}
                    </h3>

                    <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-lg">
                      {activeService.description}
                    </p>

                    {/* Checklist with gradient checkmark tiles */}
                    <div className="space-y-3.5 mb-8">
                      {activeService.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-md brain-gradient-bg flex items-center justify-center shrink-0 shadow-sm shadow-[var(--glow-blue)] text-[var(--base)]">
                            <Check size={13} strokeWidth={3} />
                          </div>
                          <span className="text-sm sm:text-base font-medium text-[var(--text-secondary)]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button href="/services" variant="cta" iconRight={ArrowRight} magnetic>
                      Learn more
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Stacked Glass Tab Rows + Rotating Eclipse Ring + Visual Stage */}
              <div className="col-span-6 relative flex flex-col items-center justify-center min-h-[520px]">
                {/* Rotating Eclipse Ring behind the showcase */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                  <EclipseRing size={520} className="opacity-60" />
                </div>

                {/* Active Floating Visual Tile */}
                <div className="relative z-10 w-full mb-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full"
                    >
                      <ActiveVisual inView={isInView} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Vertical Stack of Three Glass Tab Rows with Progress Indicator */}
                <div
                  className="relative z-20 w-full max-w-md flex items-stretch gap-4"
                  role="tablist"
                  aria-orientation="vertical"
                  aria-label="Services showcase tabs"
                >
                  {/* Vertical Progress Bar Track */}
                  <div className="w-1 rounded-full bg-[var(--border-subtle)] overflow-hidden relative self-stretch">
                    <motion.div
                      className="w-full brain-gradient-bg rounded-full"
                      style={{
                        height: '33.33%',
                        transform: `translateY(${activeIndex * 100}%)`,
                        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                  </div>

                  {/* Tab Rows */}
                  <div className="flex-1 space-y-2.5">
                    {servicesData.map((service, idx) => {
                      const IconComponent = service.icon
                      const isActive = activeIndex === idx

                      return (
                        <button
                          key={service.title}
                          ref={(el) => (tabRefs.current[idx] = el)}
                          role="tab"
                          id={`service-tab-${idx}`}
                          aria-selected={isActive}
                          aria-controls={`service-panel-${idx}`}
                          tabIndex={isActive ? 0 : -1}
                          onClick={() => handleTabClick(idx)}
                          onKeyDown={(e) => handleKeyDown(e, idx)}
                          className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl glass transition-all duration-300 text-left focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] focus-visible:outline-none ${isActive
                            ? 'opacity-100 border-[var(--accent-mint)]/40 shadow-lg shadow-[var(--glow-blue)] scale-[1.02]'
                            : 'opacity-40 hover:opacity-75 border-transparent'
                            }`}
                        >
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
                              ? 'brain-gradient-bg text-[var(--base)] shadow-md shadow-[var(--glow-blue)]'
                              : 'glass text-[var(--text-muted)] border border-[var(--border-subtle)]'
                              }`}
                          >
                            <IconComponent size={18} />
                          </div>
                          <span
                            className={`font-display text-sm font-semibold transition-colors duration-200 ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'
                              }`}
                          >
                            {service.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE & REDUCED MOTION: THREE STACKED CARDS ── */}
        <div className={`${reduced ? 'block' : 'block lg:hidden'} container-wide`}>
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-[var(--accent-mint)]/30 text-xs font-mono text-[var(--accent-mint)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" />
              Powerful Solutions
            </div>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Services &amp; Products
            </h3>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {servicesData.map((service) => {
              const IconComp = service.icon
              const VisualComp = service.VisualComponent

              return (
                <SpotlightCard
                  key={service.title}
                  cursorLabel="EXPLORE"
                  className="p-6 sm:p-8 flex flex-col gap-6 border border-[var(--border-subtle)] hover:border-[var(--accent-blue)]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl brain-gradient-bg text-[var(--base)] flex items-center justify-center shadow-md shadow-[var(--glow-blue)]">
                      <IconComp size={20} />
                    </div>
                    <h4 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                      {service.title}
                    </h4>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="w-full my-2">
                    <VisualComp inView={isInView} />
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-[var(--border-subtle)]">
                    {service.checklist.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded brain-gradient-bg flex items-center justify-center shrink-0 text-[var(--base)]">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button href="/services" variant="cta" iconRight={ArrowRight}>
                      Learn more
                    </Button>
                  </div>
                </SpotlightCard>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 4: KEY METRICS (Inspired by 3-Card Pricing Row)
   ═══════════════════════════════════════════════════════ */

/* Corner Node-Mesh Graphic for Metric Cards */
function CornerNodeMesh() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-20"
      aria-hidden="true"
    >
      <circle cx="90" cy="10" r="3" fill="var(--accent-blue)" />
      <circle cx="50" cy="20" r="2.5" fill="var(--accent-mint)" />
      <circle cx="75" cy="55" r="2" fill="var(--accent-blue)" />
      <line x1="90" y1="10" x2="50" y2="20" stroke="var(--accent-blue)" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="50" y1="20" x2="75" y2="55" stroke="var(--accent-mint)" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="90" y1="10" x2="75" y2="55" stroke="var(--accent-blue)" strokeWidth="0.8" strokeDasharray="3 3" />
    </svg>
  )
}

function MetricCounter({ target, suffix = '', inView, reduced }) {
  const [count, setCount] = useState(reduced ? target : 0)

  useEffect(() => {
    if (!inView || reduced) return

    const duration = 1800
    const startTime = Date.now()
    let frameId

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(target * eased))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        setCount(target)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [inView, target, reduced])

  return (
    <span>
      {target >= 1000 ? count.toLocaleString() : count}
      {suffix}
    </span>
  )
}

export function KeyMetrics() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 })
  const reduced = useReducedMotion()

  return (
    <section
      ref={sectionRef}
      id="key-metrics"
      className="relative z-10 -mt-10 sm:-mt-14 rounded-t-[28px] bg-[var(--base)] section-glow-top section-radial-glow py-20 md:py-28 overflow-hidden"
      aria-labelledby="metrics-heading"
    >
      <h2 id="metrics-heading" className="sr-only">
        Key Performance Metrics
      </h2>

      <div className="container-wide">
        {/* Section Pill Kicker */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] glass px-3.5 py-1.5 rounded-full border border-[var(--accent-mint)]/30 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" aria-hidden="true" />
            Battle-Tested Metrics
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" aria-hidden="true" />
          </span>
        </div>

        {/* 3-Card Row (Middle raised 16px on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Card 1: 20+ Years */}
          <Reveal delay={0.1} variant="slideUp" className="h-full">
            <SpotlightCard
              cursorLabel="EXPERTISE"
              className="relative p-8 sm:p-10 h-full flex flex-col justify-between rounded-3xl border border-[var(--border-subtle)] hover:border-[var(--accent-blue)]/40 transition-all shadow-xl"
            >
              <CornerNodeMesh />
              <div>
                <div className="w-10 h-10 rounded-xl glass border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)] mb-6 shadow-sm shadow-[var(--glow-blue)]">
                  <Activity size={20} />
                </div>
                <div className="font-display font-black text-5xl sm:text-6xl text-[var(--text-primary)] mb-4 tracking-tight tabular-nums">
                  <MetricCounter target={20} suffix="+" inView={isInView} reduced={reduced} />
                </div>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-muted)] font-medium leading-relaxed">
                Years of Combined Domain Expertise
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: 1,500+ Regional Deployments (Middle Highlighted & Raised 16px) */}
          <Reveal delay={0.2} variant="scale" className="h-full">
            <SpotlightCard
              cursorLabel="DEPLOYMENTS"
              className="relative p-8 sm:p-10 h-full flex flex-col justify-between rounded-3xl border-2 border-[var(--accent-mint)]/60 shadow-[0_0_40px_var(--glow-blue)] md:-translate-y-4 transition-all"
            >
              <CornerNodeMesh />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl brain-gradient-bg text-[var(--base)] flex items-center justify-center shadow-md shadow-[var(--glow-blue)]">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="px-3 py-1 rounded-full brain-gradient-bg text-[var(--base)] text-[10px] font-mono font-bold tracking-wider uppercase">
                    Battle-Tested Scale
                  </span>
                </div>
                <div className="font-display font-black text-5xl sm:text-6xl brain-gradient mb-4 tracking-tight tabular-nums">
                  <MetricCounter target={1500} suffix="+" inView={isInView} reduced={reduced} />
                </div>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                Regional Deployments (via Simple Logic IT)
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Card 3: Millions Secure Transactions */}
          <Reveal delay={0.3} variant="slideUp" className="h-full">
            <SpotlightCard
              cursorLabel="VELOCITY"
              className="relative p-8 sm:p-10 h-full flex flex-col justify-between rounded-3xl border border-[var(--border-subtle)] hover:border-[var(--accent-blue)]/40 transition-all shadow-xl"
            >
              <CornerNodeMesh />
              <div>
                <div className="w-10 h-10 rounded-xl glass border border-[var(--accent-mint)]/30 flex items-center justify-center text-[var(--accent-mint)] mb-6 shadow-sm shadow-[var(--glow-mint)]">
                  <Shield size={20} />
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight">
                    Millions
                  </span>
                  {/* Tiny live bar ticker */}
                  <div className="flex items-end gap-1 h-6" aria-hidden="true">
                    {[3, 6, 4, 7, 5].map((val, idx) => (
                      <div
                        key={idx}
                        className="w-1 rounded-full brain-gradient-bg"
                        style={{
                          height: `${val * 3}px`,
                          animation: !reduced && isInView ? `pulse 1.6s ease-in-out infinite ${idx * 0.15}s` : 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-muted)] font-medium leading-relaxed">
                Secure Transactions Processed Daily
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SECTION 5: TESTIMONIAL
   ═══════════════════════════════════════════════════════ */

export function TestimonialSection() {
  const quoteRef = useRef(null)
  const quoteText =
    "Invex IT's robust development backbone ensures our retail and POS operations across the Middle East never miss a beat. They are the true innovation vertex of our technology stack."

  return (
    <section
      ref={quoteRef}
      id="testimonial"
      className="relative z-10 -mt-10 sm:-mt-14 rounded-t-[28px] bg-[var(--base)] section-glow-top section-radial-glow py-24 md:py-32 overflow-hidden"
      aria-labelledby="testimonial-heading"
    >
      <h2 id="testimonial-heading" className="sr-only">
        Executive Testimonial
      </h2>

      <div className="container-wide relative flex items-center justify-center">
        {/* Faint rotating eclipse ring glow behind the card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
          <EclipseRing size={460} className="opacity-40" />
        </div>

        {/* Centered Glass Quote Card */}
        <Reveal variant="scale" className="relative z-10 max-w-4xl w-full mx-auto">
          <SpotlightCard
            cursorLabel="PARTNER"
            className="p-8 sm:p-12 lg:p-16 text-center rounded-3xl border border-[var(--border-subtle)] shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          >
            <Quote
              size={48}
              className="text-[var(--accent-blue)] opacity-40 mx-auto mb-8"
              aria-hidden="true"
            />

            {/* Word fade on scroll */}
            <blockquote className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[2rem] text-[var(--text-primary)] leading-relaxed font-medium mb-10 tracking-tight">
              &ldquo;{quoteText}&rdquo;
            </blockquote>

            {/* Attribution Placeholder */}
            {/* TODO: Replace placeholder with real name and title once available */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-display font-semibold text-base sm:text-lg text-[var(--text-primary)] tracking-wide">
                [Name, Title, Safari Group / Simple Logic IT]
              </span>
              <span className="font-mono text-xs text-[color:var(--text-muted)] uppercase tracking-widest">
                Safari Group &middot; Simple Logic IT
              </span>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}

/* Backward-compatible alias */
export const SocialProof = TestimonialSection

/* ═══════════════════════════════════════════════════════
   SECTION 6: CLOSING CTA (Transform Your Work Block)
   ═══════════════════════════════════════════════════════ */

/* Floating Glass Dashboard Mock */
function FloatingDashboardMock() {
  return (
    <div
      className="relative w-full max-w-md mx-auto p-6 rounded-3xl glass border border-[var(--border-subtle)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-4"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">
            Invex Enterprise Engine
          </span>
        </div>
        <span className="text-[10px] font-mono text-[var(--accent-mint)] glass px-2 py-0.5 rounded-full">
          LIVE
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-2xl bg-[var(--surface-raised)]/90 border border-[var(--border-subtle)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Active Tills</div>
          <div className="font-display font-bold text-lg text-[var(--text-primary)]">1,500+</div>
        </div>
        <div className="p-3 rounded-2xl bg-[var(--surface-raised)]/90 border border-[var(--border-subtle)]">
          <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Uptime</div>
          <div className="font-display font-bold text-lg text-[var(--accent-mint)]">99.99%</div>
        </div>
      </div>

      <div className="p-3.5 rounded-2xl glass border border-[var(--border-subtle)] flex items-center justify-between">
        <span className="text-xs font-mono text-[var(--text-muted)]">Core Engine Sync</span>
        <span className="text-xs font-mono text-[var(--accent-blue)] font-semibold">Operational</span>
      </div>
    </div>
  )
}

export function ClosingCTA() {
  return (
    <section
      id="closing-cta"
      className="relative z-10 -mt-10 sm:-mt-14 rounded-t-[28px] bg-[var(--base)] section-glow-top section-radial-glow py-20 md:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="container-wide">
        <Reveal variant="scale">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden glass border border-[var(--border-subtle)] shadow-[0_24px_70px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-7">
                {/* TODO: Replace placeholder heading with client-approved copy */}
                <h2
                  id="cta-heading"
                  className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] mb-6 leading-tight tracking-tight"
                >
                  Let&apos;s build your next vertex.
                </h2>

                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
                  Partner with the core development engine behind the Middle East&apos;s most reliable retail, ERP, and enterprise software systems.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button href="/services" variant="cta" iconRight={ArrowRight} magnetic>
                    Explore Our Solutions
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Talk to an Expert
                  </Button>
                </div>
              </div>

              {/* Right Column: Floating Glass Dashboard Mock */}
              <div className="lg:col-span-5">
                <FloatingDashboardMock />
              </div>
            </div>

            {/* Glowing blue-to-mint line sitting along the bottom edge, pulsing slowly */}
            <div
              className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-[var(--accent-mint)] animate-pulse pointer-events-none"
              style={{ animationDuration: '3s' }}
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

