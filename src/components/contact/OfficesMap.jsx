import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building, MapPin, Navigation } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import Reveal from '../common/Reveal'
import SpotlightCard from '../common/SpotlightCard'
import useReducedMotion from '../../hooks/useReducedMotion'

export default function OfficesMap() {
  const [activeNode, setActiveNode] = useState(null)
  const mapRef = useRef(null)
  const inView = useInView(mapRef, { once: false, amount: 0.2 })
  const reduced = useReducedMotion()

  const offices = [
    {
      id: 'mumbai',
      city: 'Mumbai',
      tag: 'India Headquarters',
      /* TODO: replace with the real address */
      address: '[Full Mumbai Address]',
      icon: Building,
      coords: { x: 270, y: 140 },
      from: 'left',
    },
    {
      id: 'edappal',
      city: 'Edappal, Kerala',
      tag: 'Kerala Development Center',
      /* TODO: replace with the real address */
      address: '[Full Edappal Address]',
      icon: MapPin,
      coords: { x: 260, y: 270 },
      from: 'right',
    },
  ]

  return (
    <SectionWrapper id="offices-map" className="pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-20 lg:pb-20">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal from="bottom">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 inline-block"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                color: 'var(--accent-mint)',
              }}
            >
              Strategic Footprint
            </span>
          </Reveal>

          <Reveal from="bottom" delay={0.1}>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Our Offices
            </h2>
          </Reveal>

          <Reveal from="bottom" delay={0.2}>
            <p
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Engineering hubs anchored in India, with continuous delivery networks servicing enterprises across the Middle East.
            </p>
          </Reveal>
        </div>

        {/* ── Main Map & Office Cards Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* ── Left Card: Mumbai India Headquarters (Enters from Left) ── */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Reveal from="left">
              <SpotlightCard
                cursorLabel="MUMBAI"
                onMouseEnter={() => setActiveNode('mumbai')}
                onMouseLeave={() => setActiveNode(null)}
                onFocus={() => setActiveNode('mumbai')}
                onBlur={() => setActiveNode(null)}
                tabIndex={0}
                className={`p-6 border transition-all duration-300 relative group rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] ${activeNode === 'mumbai'
                  ? 'border-[var(--accent-blue)] shadow-lg shadow-[var(--glow-blue)]/20 scale-[1.02]'
                  : 'hover:border-[var(--accent-blue)]/60'
                  }`}
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: activeNode === 'mumbai' ? 'var(--accent-blue)' : 'var(--glass-border)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
                      color: 'var(--base)',
                    }}
                  >
                    <Building size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider block font-semibold"
                      style={{ color: 'var(--accent-blue)' }}
                    >
                      India Headquarters
                    </span>
                    <h3
                      className="font-display font-bold text-lg sm:text-xl"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Mumbai
                    </h3>
                  </div>
                </div>

                {/* TODO: Replace with the real address */}
                <p
                  className="font-mono text-xs sm:text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--accent-blue-light, var(--accent-blue))' }}
                >
                  [Full Mumbai Address]
                </p>

                {/* Get Directions Button (Disabled with TODO) */}
                {/* TODO: Enable directions link once final address is confirmed */}
                <button
                  type="button"
                  disabled
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-medium border flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                  style={{
                    backgroundColor: 'var(--surface-raised)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-muted)',
                  }}
                  title="Directions link will be activated upon final address confirmation"
                >
                  <Navigation size={13} />
                  <span>Get Directions</span>
                </button>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* ── Central Glass Panel: Stylized Dotted Map (Scales in Centre) ── */}
          <div ref={mapRef} className="lg:col-span-6 order-1 lg:order-2">
            <Reveal from="bottom">
              <div
                className="relative w-full rounded-3xl p-4 sm:p-6 border overflow-hidden select-none transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: 'var(--glass-border)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 50px -10px var(--glass-shadow, rgba(0,0,0,0.3))',
                }}
              >
                {/* Top Subtle Label */}
                <div className="flex items-center justify-between mb-2 px-2 text-[11px] font-mono text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-mint)' }} />
                    Active Hubs
                  </span>
                  <span>Direct Delivery Traces</span>
                </div>

                {/* Stylized SVG Map of Indian West Coast & Peninsula */}
                <svg
                  viewBox="0 0 540 360"
                  className="w-full h-auto overflow-visible"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="map-hub-arc" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent-blue)" />
                      <stop offset="100%" stopColor="var(--accent-mint)" />
                    </linearGradient>
                    <linearGradient id="gulf-trace" x1="0%" y1="0%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="var(--accent-mint)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* ── Regional Dotted Grid (Peninsula and Coastline representation) ── */}
                  {[
                    // North / Northwest
                    { x: 230, y: 70 }, { x: 255, y: 70 }, { x: 280, y: 70 }, { x: 305, y: 70 },
                    { x: 215, y: 95 }, { x: 240, y: 95 }, { x: 265, y: 95 }, { x: 290, y: 95 }, { x: 315, y: 95 },
                    // Gujarat / Maharashtra Coast
                    { x: 220, y: 120 }, { x: 245, y: 120 }, { x: 270, y: 120 }, { x: 295, y: 120 }, { x: 320, y: 120 }, { x: 345, y: 120 },
                    // Mumbai Latitude
                    { x: 245, y: 145 }, { x: 270, y: 145 }, { x: 295, y: 145 }, { x: 320, y: 145 }, { x: 345, y: 145 },
                    // Central West Coast / Goa / Karnataka
                    { x: 250, y: 170 }, { x: 275, y: 170 }, { x: 300, y: 170 }, { x: 325, y: 170 },
                    { x: 250, y: 195 }, { x: 275, y: 195 }, { x: 300, y: 195 }, { x: 325, y: 195 },
                    { x: 255, y: 220 }, { x: 280, y: 220 }, { x: 305, y: 220 },
                    // Malabar Coast / Kerala Latitude
                    { x: 240, y: 245 }, { x: 265, y: 245 }, { x: 290, y: 245 },
                    { x: 235, y: 270 }, { x: 260, y: 270 }, { x: 285, y: 270 },
                    // Southern Tip / Cape
                    { x: 250, y: 295 }, { x: 275, y: 295 },
                    { x: 265, y: 320 },
                  ].map((dot, i) => (
                    <circle
                      key={i}
                      cx={dot.x}
                      cy={dot.y}
                      r="1.8"
                      fill="var(--border-strong)"
                      opacity="0.35"
                    />
                  ))}

                  {/* ── Secondary Subtle Connection: Middle East Partner Nodes ── */}
                  {/* Qatar & UAE Nodes (West of Arabian Sea) */}
                  <g opacity="0.75">
                    {/* Qatar Node */}
                    <circle cx="85" cy="115" r="3.5" fill="var(--surface-raised)" stroke="var(--border-strong)" strokeWidth="1" />
                    <circle cx="85" cy="115" r="1.5" fill="var(--accent-blue)" />
                    <text x="85" y="104" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5" fontFamily="monospace">
                      QATAR
                    </text>

                    {/* UAE Node */}
                    <circle cx="125" cy="130" r="3.5" fill="var(--surface-raised)" stroke="var(--border-strong)" strokeWidth="1" />
                    <circle cx="125" cy="130" r="1.5" fill="var(--accent-mint)" />
                    <text x="125" y="146" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5" fontFamily="monospace">
                      UAE
                    </text>

                    {/* Partner Label */}
                    <text x="105" y="160" textAnchor="middle" fill="var(--accent-mint)" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                      Simple Logic IT
                    </text>

                    {/* Dashed Cross-Sea Gulf Arc to Mumbai */}
                    <path
                      d="M 125 130 Q 195 125 270 140"
                      stroke="url(#gulf-trace)"
                      strokeWidth="1.2"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </g>

                  {/* ── Main Connecting Arc: Mumbai (270, 140) to Edappal (260, 270) ── */}
                  <path
                    d="M 270 140 Q 225 205 260 270"
                    stroke="url(#map-hub-arc)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Traveling Light Pulse along India Arc */}
                  {!reduced && inView && (
                    <motion.circle
                      r="3.5"
                      fill="var(--accent-mint)"
                      filter="drop-shadow(0 0 6px var(--glow-mint))"
                      animate={{
                        cx: [270, 240, 260],
                        cy: [140, 205, 270],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}

                  {/* ── Node 1: Mumbai HQ (270, 140) ── */}
                  <g
                    transform="translate(270, 140)"
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveNode('mumbai')}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Pulsing rings */}
                    {!reduced && inView && (
                      <motion.circle
                        r="18"
                        stroke="var(--accent-blue)"
                        strokeWidth="1.2"
                        fill="none"
                        animate={{ r: [10, 24], opacity: [0.8, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                    <circle
                      r={activeNode === 'mumbai' ? 9 : 7}
                      fill="var(--surface-raised)"
                      stroke="var(--accent-blue)"
                      strokeWidth={activeNode === 'mumbai' ? 3 : 2}
                      className="transition-all duration-200"
                    />
                    <circle r="3" fill="var(--accent-blue)" />

                    {/* Node Tag */}
                    <g transform="translate(14, -2)">
                      <rect
                        x="0"
                        y="-12"
                        width="118"
                        height="24"
                        rx="6"
                        fill="var(--surface-raised)"
                        stroke={activeNode === 'mumbai' ? 'var(--accent-blue)' : 'var(--border-subtle)'}
                        strokeWidth="1"
                      />
                      <text x="8" y="0" fill="var(--text-primary)" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
                        Mumbai
                      </text>
                      <text x="8" y="9" fill="var(--text-muted)" fontSize="7" fontFamily="monospace">
                        India Headquarters
                      </text>
                    </g>
                  </g>

                  {/* ── Node 2: Edappal, Kerala (260, 270) ── */}
                  <g
                    transform="translate(260, 270)"
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveNode('edappal')}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Pulsing rings */}
                    {!reduced && inView && (
                      <motion.circle
                        r="18"
                        stroke="var(--accent-mint)"
                        strokeWidth="1.2"
                        fill="none"
                        animate={{ r: [10, 24], opacity: [0.8, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: 0.6, ease: 'easeOut' }}
                      />
                    )}
                    <circle
                      r={activeNode === 'edappal' ? 9 : 7}
                      fill="var(--surface-raised)"
                      stroke="var(--accent-mint)"
                      strokeWidth={activeNode === 'edappal' ? 3 : 2}
                      className="transition-all duration-200"
                    />
                    <circle r="3" fill="var(--accent-mint)" />

                    {/* Node Tag */}
                    <g transform="translate(14, -2)">
                      <rect
                        x="0"
                        y="-12"
                        width="132"
                        height="24"
                        rx="6"
                        fill="var(--surface-raised)"
                        stroke={activeNode === 'edappal' ? 'var(--accent-mint)' : 'var(--border-subtle)'}
                        strokeWidth="1"
                      />
                      <text x="8" y="0" fill="var(--text-primary)" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
                        Edappal, Kerala
                      </text>
                      <text x="8" y="9" fill="var(--accent-mint)" fontSize="7" fontFamily="monospace">
                        Kerala Dev Center
                      </text>
                    </g>
                  </g>
                </svg>
              </div>
            </Reveal>
          </div>

          {/* ── Right Card: Edappal Kerala Hub (Enters from Right) ── */}
          <div className="lg:col-span-3 order-3">
            <Reveal from="right">
              <SpotlightCard
                cursorLabel="EDAPPAL"
                onMouseEnter={() => setActiveNode('edappal')}
                onMouseLeave={() => setActiveNode(null)}
                onFocus={() => setActiveNode('edappal')}
                onBlur={() => setActiveNode(null)}
                tabIndex={0}
                className={`p-6 border transition-all duration-300 relative group rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] ${activeNode === 'edappal'
                  ? 'border-[var(--accent-mint)] shadow-lg shadow-[var(--glow-mint)]/20 scale-[1.02]'
                  : 'hover:border-[var(--accent-mint)]/60'
                  }`}
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: activeNode === 'edappal' ? 'var(--accent-mint)' : 'var(--glass-border)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-mint), var(--accent-blue))',
                      color: 'var(--base)',
                    }}
                  >
                    <MapPin size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider block font-semibold"
                      style={{ color: 'var(--accent-mint)' }}
                    >
                      Kerala Dev Center
                    </span>
                    <h3
                      className="font-display font-bold text-lg sm:text-xl"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Edappal
                    </h3>
                  </div>
                </div>

                {/* TODO: Replace with the real address */}
                <p
                  className="font-mono text-xs sm:text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--accent-blue-light, var(--accent-blue))' }}
                >
                  [Full Edappal Address]
                </p>

                {/* Get Directions Button (Disabled with TODO) */}
                {/* TODO: Enable directions link once final address is confirmed */}
                <button
                  type="button"
                  disabled
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-medium border flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                  style={{
                    backgroundColor: 'var(--surface-raised)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-muted)',
                  }}
                  title="Directions link will be activated upon final address confirmation"
                >
                  <Navigation size={13} />
                  <span>Get Directions</span>
                </button>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
