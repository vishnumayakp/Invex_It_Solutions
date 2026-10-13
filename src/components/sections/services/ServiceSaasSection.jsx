// import { useState, useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Check, ArrowRight } from 'lucide-react'
// import { SERVICE_SAAS } from '../../../data/services'
// import useReducedMotion from '../../../hooks/useReducedMotion'

// function LaundryIsometricVisual() {
//   return (
//     <div className="relative w-full h-36 rounded-2xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300" aria-hidden="true"
//       style={{ backgroundColor: 'var(--bp-surface)', borderColor: 'rgba(20,241,217,0.25)' }}>
//       <div className="absolute inset-0 bg-radial from-[#14F1D9]/15 to-transparent blur-xl pointer-events-none" />
//       <svg viewBox="0 0 240 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//         <polygon points="120,20 170,45 120,70 70,45" fill="#0E1B33" stroke="#14F1D9" strokeWidth="1.2" />
//         <polygon points="70,45 120,70 120,95 70,70" fill="#080F1F" stroke="#14F1D9" strokeWidth="0.8" />
//         <polygon points="120,70 170,45 170,70 120,95" fill="#0B152A" stroke="#14F1D9" strokeWidth="0.8" />
//         <circle cx="120" cy="58" r="14" fill="#070C1A" stroke="#14F1D9" strokeWidth="1.5" />
//         <circle cx="120" cy="58" r="8" fill="none" stroke="#14F1D9" strokeWidth="0.8" strokeDasharray="3 2" />
//         <g transform="translate(180, 50)">
//           <rect x="-14" y="-18" width="28" height="36" rx="4" fill="#0A1428" stroke="#14F1D9" strokeWidth="1" />
//           <line x1="-8" y1="-10" x2="8" y2="-10" stroke="#14F1D9" strokeWidth="1.5" />
//           <rect x="-8" y="-3" width="7" height="7" fill="#14F1D9" opacity="0.8" />
//           <line x1="2" y1="-1" x2="8" y2="-1" stroke="#8A93B2" strokeWidth="1" />
//           <line x1="2" y1="3" x2="8" y2="3" stroke="#8A93B2" strokeWidth="1" />
//           <text x="0" y="14" fill="#14F1D9" fontSize="5.5" fontFamily="monospace" textAnchor="middle">BARCODE</text>
//         </g>
//         <path d="M 60,65 Q 90,85 120,85 Q 150,85 180,65" fill="none" stroke="#14F1D9" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
//         <circle cx="60" cy="65" r="3" fill="#14F1D9" />
//         <text x="60" y="78" fill="#8A93B2" fontSize="6.5" fontFamily="monospace" textAnchor="middle">PICKUP</text>
//       </svg>
//     </div>
//   )
// }

// function SalonIsometricVisual() {
//   return (
//     <div className="relative w-full h-36 rounded-2xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300" aria-hidden="true"
//       style={{ backgroundColor: 'var(--bp-surface)', borderColor: 'rgba(255,181,71,0.25)' }}>
//       <div className="absolute inset-0 bg-radial from-[#FFB547]/15 to-transparent blur-xl pointer-events-none" />
//       <svg viewBox="0 0 240 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//         <polygon points="120,18 175,44 120,70 65,44" fill="#1C1824" stroke="#FFB547" strokeWidth="1.2" />
//         <polygon points="65,44 120,70 120,95 65,69" fill="#100C16" stroke="#FFB547" strokeWidth="0.8" />
//         <polygon points="120,70 175,44 175,69 120,95" fill="#16111F" stroke="#FFB547" strokeWidth="0.8" />
//         <g transform="translate(75, 42)">
//           <rect x="-18" y="-22" width="36" height="44" rx="4" fill="#140F1E" stroke="#FFB547" strokeWidth="1" />
//           <line x1="-12" y1="-14" x2="12" y2="-14" stroke="#FFB547" strokeWidth="1.2" />
//           <circle cx="-6" cy="-4" r="2.5" fill="#FFB547" />
//           <circle cx="4" cy="-4" r="2.5" fill="#14F1D9" />
//           <circle cx="-6" cy="6" r="2.5" fill="#FFB547" opacity="0.6" />
//           <circle cx="4" cy="6" r="2.5" fill="#FFB547" />
//           <text x="0" y="18" fill="#FFB547" fontSize="5.5" fontFamily="monospace" textAnchor="middle">BOOKING</text>
//         </g>
//         <g transform="translate(165, 42)">
//           <circle cx="0" cy="-6" r="10" fill="#1A1324" stroke="#FFB547" strokeWidth="1" />
//           <path d="M -5,-6 L 0,-1 L 6,-8" fill="none" stroke="#FFB547" strokeWidth="1.5" />
//           <text x="0" y="16" fill="#E8ECF8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">COMMISSION</text>
//           <text x="0" y="24" fill="#FFB547" fontSize="6" fontFamily="monospace" textAnchor="middle">AUTO SPLIT</text>
//         </g>
//       </svg>
//     </div>
//   )
// }

// function GymIsometricVisual() {
//   return (
//     <div className="relative w-full h-36 rounded-2xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300" aria-hidden="true"
//       style={{ backgroundColor: 'var(--bp-surface)', borderColor: 'rgba(192,132,252,0.25)' }}>
//       <div className="absolute inset-0 bg-radial from-[#C084FC]/15 to-transparent blur-xl pointer-events-none" />
//       <svg viewBox="0 0 240 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//         <polygon points="120,20 170,45 120,70 70,45" fill="#171126" stroke="#C084FC" strokeWidth="1.2" />
//         <polygon points="70,45 120,70 120,95 70,70" fill="#0C0816" stroke="#C084FC" strokeWidth="0.8" />
//         <polygon points="120,70 170,45 170,70 120,95" fill="#110C1E" stroke="#C084FC" strokeWidth="0.8" />
//         <g transform="translate(120, 52)">
//           <circle cx="0" cy="0" r="14" fill="#11091F" stroke="#C084FC" strokeWidth="1.2" />
//           <circle cx="0" cy="0" r="8" fill="none" stroke="#C084FC" strokeWidth="1" strokeDasharray="3 3" />
//           <circle cx="0" cy="0" r="3" fill="#14F1D9" />
//           <text x="0" y="28" fill="#C084FC" fontSize="6.5" fontFamily="monospace" textAnchor="middle">RFID TURNSTILE</text>
//         </g>
//         <g transform="translate(180, 36)">
//           <rect x="-14" y="-12" width="28" height="24" rx="3" fill="#130922" stroke="#C084FC" strokeWidth="0.9" />
//           <text x="0" y="-1" fill="#E8ECF8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">ACTIVE</text>
//           <text x="0" y="7" fill="#14F1D9" fontSize="6" fontFamily="monospace" textAnchor="middle">RENEWED</text>
//         </g>
//       </svg>
//     </div>
//   )
// }

// function ServiceSaasCard({ card, delay = 0 }) {
//   const [isHovered, setIsHovered] = useState(false)
//   const reduced = useReducedMotion()
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-60px' })

//   return (
//     <motion.div
//       ref={ref}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       whileHover={reduced ? {} : { y: -6, transition: { duration: 0.3 } }}
//       initial={reduced ? {} : { opacity: 0, y: 35 }}
//       animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 35 })}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
//       style={{
//         boxShadow: isHovered
//           ? `0 20px 45px var(--bp-shadow), 0 0 35px ${card.glowColor}`
//           : '0 12px 35px var(--bp-shadow)',
//         borderColor: isHovered ? card.accentColor : 'rgba(20, 241, 217, 0.2)',
//         backgroundColor: 'var(--bp-card)',
//       }}
//       className="relative rounded-[22px] p-6 sm:p-8 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 h-full"
//     >
//       <div>
//         <div className="flex items-center justify-between gap-2 mb-4">
//           <span
//             className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold border"
//             style={{ color: card.accentColor, backgroundColor: `${card.accentColor}15`, borderColor: `${card.accentColor}35` }}
//           >
//             {card.tag}
//           </span>
//           <span className="font-mono text-[10.5px]" style={{ color: 'var(--bp-muted)' }}>{card.metrics}</span>
//         </div>

//         <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-2xl mb-3 tracking-tight" style={{ color: 'var(--bp-text)' }}>
//           {card.title}
//         </h3>

//         <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--bp-muted)' }}>
//           {card.description}
//         </p>

//         <motion.div
//           animate={isHovered && !reduced ? { y: -4, scale: 1.02 } : { y: 0, scale: 1 }}
//           transition={{ duration: 0.3 }}
//           className="mb-6"
//         >
//           {card.id === 'laundry' && <LaundryIsometricVisual />}
//           {card.id === 'salon' && <SalonIsometricVisual />}
//           {card.id === 'gym' && <GymIsometricVisual />}
//         </motion.div>

//         <div className="space-y-2.5 pt-2">
//           {card.bullets.map((bullet, idx) => (
//             <div key={idx} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--bp-text)' }}>
//               <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${card.accentColor}25` }}>
//                 <Check size={11} style={{ color: card.accentColor }} />
//               </span>
//               <span className="font-sans leading-snug">{bullet}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-8 pt-5 border-t border-[#14F1D9]/15 flex items-center justify-between">
//         <span className="font-mono text-xs" style={{ color: 'var(--bp-muted)' }}>Instant Turnkey Module</span>
//         <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-all duration-300" style={{ color: card.accentColor }}>
//           <span>Launch SaaS</span>
//           <ArrowRight size={14} />
//         </a>
//       </div>
//     </motion.div>
//   )
// }

// export default function ServiceSaasSection() {
//   const cards = SERVICE_SAAS.cards
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-80px' })
//   const reduced = useReducedMotion()

//   return (
//     <section
//       id="saas"
//       ref={ref}
//       aria-labelledby="saas-title"
//       className="relative py-20 md:py-28 overflow-hidden transition-colors duration-300"
//       style={{ backgroundColor: 'var(--bp-base)', color: 'var(--bp-text)' }}
//     >
//       <div
//         className="absolute inset-0 pointer-events-none opacity-30"
//         style={{
//           backgroundImage: `linear-gradient(to right, var(--bp-grid-stroke) 1px, transparent 1px), linear-gradient(to bottom, var(--bp-grid-stroke) 1px, transparent 1px)`,
//           backgroundSize: '48px 48px',
//         }}
//         aria-hidden="true"
//       />
//       <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[#C084FC]/10 blur-[130px] pointer-events-none" />

//       <div className="container-wide relative z-10">
//         <motion.div
//           className="max-w-3xl mb-12 sm:mb-16"
//           initial={reduced ? {} : { opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#14F1D9] mb-4 border" style={{ backgroundColor: 'var(--bp-card-inner)', borderColor: 'rgba(20,241,217,0.30)' }}>
//             <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9]" />
//             {SERVICE_SAAS.label}
//           </div>
//           <h2 id="saas-title" className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4" style={{ color: 'var(--bp-text)' }}>
//             {SERVICE_SAAS.title}
//           </h2>
//           <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: 'var(--bp-muted)' }}>
//             {SERVICE_SAAS.description}
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
//           {cards.map((card, idx) => (
//             <ServiceSaasCard key={card.id} card={card} delay={idx * 0.1} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { SERVICE_SAAS } from '../../../data/services'
import useReducedMotion from '../../../hooks/useReducedMotion'

/* ── Home-page palette (green + black, yellow used sparingly) ── */
const MINT = 'var(--accent-mint, #BFE0B8)'
const BLUE = 'var(--accent-blue, #6E8DA6)'
const YELLOW = '#E8C547' // small highlights only
const INK = '#050806' // near-black with a green tint
const TEXT_SVG = '#E8F0E6'
const MUTED_SVG = '#8FA39A'
const mix = (color, pct) => `color-mix(in srgb, ${color} ${pct}%, transparent)`
const mint = (pct) => mix(MINT, pct)

const PANEL_BG = 'color-mix(in srgb, var(--base, #050806) 88%, #BFE0B8 4%)'
const INNER_BG = 'color-mix(in srgb, var(--base, #050806) 92%, #BFE0B8 6%)'
const VISUAL_BG = 'color-mix(in srgb, var(--base, #050806) 94%, #000 6%)'

/* Per-card accent overrides (replaces the colours coming from the data file) */
const CARD_ACCENTS = {
  laundry: MINT,
  salon: YELLOW,
  gym: BLUE,
}
const accentFor = (card) => CARD_ACCENTS[card.id] || MINT

function LaundryIsometricVisual() {
  const sMint = { stroke: MINT }
  const fMint = { fill: MINT }
  return (
    <div className="relative w-full h-36 rounded-2xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300" aria-hidden="true"
      style={{ backgroundColor: VISUAL_BG, borderColor: mint(25) }}>
      <div className="absolute inset-0 blur-xl pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, ${mint(15)}, transparent 70%)` }} />
      <svg viewBox="0 0 240 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <polygon points="120,20 170,45 120,70 70,45" fill="#0C1710" strokeWidth="1.2" style={sMint} />
        <polygon points="70,45 120,70 120,95 70,70" fill="#060C08" strokeWidth="0.8" style={sMint} />
        <polygon points="120,70 170,45 170,70 120,95" fill="#09120C" strokeWidth="0.8" style={sMint} />
        <circle cx="120" cy="58" r="14" fill={INK} strokeWidth="1.5" style={sMint} />
        <circle cx="120" cy="58" r="8" fill="none" strokeWidth="0.8" strokeDasharray="3 2" style={sMint} />
        <g transform="translate(180, 50)">
          <rect x="-14" y="-18" width="28" height="36" rx="4" fill="#08110B" strokeWidth="1" style={sMint} />
          <line x1="-8" y1="-10" x2="8" y2="-10" strokeWidth="1.5" style={sMint} />
          <rect x="-8" y="-3" width="7" height="7" opacity="0.8" style={fMint} />
          <line x1="2" y1="-1" x2="8" y2="-1" stroke={MUTED_SVG} strokeWidth="1" />
          <line x1="2" y1="3" x2="8" y2="3" stroke={MUTED_SVG} strokeWidth="1" />
          <text x="0" y="14" fontSize="5.5" fontFamily="monospace" textAnchor="middle" style={fMint}>BARCODE</text>
        </g>
        <path d="M 60,65 Q 90,85 120,85 Q 150,85 180,65" fill="none" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" style={sMint} />
        <circle cx="60" cy="65" r="3" style={fMint} />
        <text x="60" y="78" fill={MUTED_SVG} fontSize="6.5" fontFamily="monospace" textAnchor="middle">PICKUP</text>
      </svg>
    </div>
  )
}

function SalonIsometricVisual() {
  const sY = { stroke: YELLOW }
  return (
    <div className="relative w-full h-36 rounded-2xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300" aria-hidden="true"
      style={{ backgroundColor: VISUAL_BG, borderColor: mix(YELLOW, 25) }}>
      <div className="absolute inset-0 blur-xl pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, ${mix(YELLOW, 12)}, transparent 70%)` }} />
      <svg viewBox="0 0 240 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <polygon points="120,18 175,44 120,70 65,44" fill="#12140C" strokeWidth="1.2" style={sY} />
        <polygon points="65,44 120,70 120,95 65,69" fill="#0A0B06" strokeWidth="0.8" style={sY} />
        <polygon points="120,70 175,44 175,69 120,95" fill="#0E1009" strokeWidth="0.8" style={sY} />
        <g transform="translate(75, 42)">
          <rect x="-18" y="-22" width="36" height="44" rx="4" fill="#0B0D07" strokeWidth="1" style={sY} />
          <line x1="-12" y1="-14" x2="12" y2="-14" strokeWidth="1.2" style={sY} />
          <circle cx="-6" cy="-4" r="2.5" fill={YELLOW} />
          <circle cx="4" cy="-4" r="2.5" style={{ fill: MINT }} />
          <circle cx="-6" cy="6" r="2.5" fill={YELLOW} opacity="0.6" />
          <circle cx="4" cy="6" r="2.5" fill={YELLOW} />
          <text x="0" y="18" fill={YELLOW} fontSize="5.5" fontFamily="monospace" textAnchor="middle">BOOKING</text>
        </g>
        <g transform="translate(165, 42)">
          <circle cx="0" cy="-6" r="10" fill="#0D0F08" strokeWidth="1" style={sY} />
          <path d="M -5,-6 L 0,-1 L 6,-8" fill="none" strokeWidth="1.5" style={sY} />
          <text x="0" y="16" fill={TEXT_SVG} fontSize="6.5" fontFamily="monospace" textAnchor="middle">COMMISSION</text>
          <text x="0" y="24" fill={YELLOW} fontSize="6" fontFamily="monospace" textAnchor="middle">AUTO SPLIT</text>
        </g>
      </svg>
    </div>
  )
}

function GymIsometricVisual() {
  const sB = { stroke: BLUE }
  return (
    <div className="relative w-full h-36 rounded-2xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300" aria-hidden="true"
      style={{ backgroundColor: VISUAL_BG, borderColor: mix(BLUE, 30) }}>
      <div className="absolute inset-0 blur-xl pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, ${mix(BLUE, 15)}, transparent 70%)` }} />
      <svg viewBox="0 0 240 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <polygon points="120,20 170,45 120,70 70,45" fill="#0A1114" strokeWidth="1.2" style={sB} />
        <polygon points="70,45 120,70 120,95 70,70" fill="#05090B" strokeWidth="0.8" style={sB} />
        <polygon points="120,70 170,45 170,70 120,95" fill="#080E10" strokeWidth="0.8" style={sB} />
        <g transform="translate(120, 52)">
          <circle cx="0" cy="0" r="14" fill="#060B0D" strokeWidth="1.2" style={sB} />
          <circle cx="0" cy="0" r="8" fill="none" strokeWidth="1" strokeDasharray="3 3" style={sB} />
          <circle cx="0" cy="0" r="3" style={{ fill: MINT }} />
          <text x="0" y="28" fontSize="6.5" fontFamily="monospace" textAnchor="middle" style={{ fill: BLUE }}>RFID TURNSTILE</text>
        </g>
        <g transform="translate(180, 36)">
          <rect x="-14" y="-12" width="28" height="24" rx="3" fill="#070C0E" strokeWidth="0.9" style={sB} />
          <text x="0" y="-1" fill={TEXT_SVG} fontSize="6.5" fontFamily="monospace" textAnchor="middle">ACTIVE</text>
          <text x="0" y="7" fontSize="6" fontFamily="monospace" textAnchor="middle" style={{ fill: MINT }}>RENEWED</text>
        </g>
      </svg>
    </div>
  )
}

function ServiceSaasCard({ card, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const accent = accentFor(card)

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={reduced ? {} : { y: -6, transition: { duration: 0.3 } }}
      initial={reduced ? {} : { opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 35 })}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      style={{
        boxShadow: isHovered
          ? `0 20px 45px rgba(0,0,0,0.45), 0 0 35px ${mix(accent, 25)}`
          : '0 12px 35px rgba(0,0,0,0.35)',
        borderColor: isHovered ? accent : mint(20),
        backgroundColor: PANEL_BG,
      }}
      className="relative rounded-[22px] p-6 sm:p-8 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 h-full"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold border"
            style={{ color: accent, backgroundColor: mix(accent, 10), borderColor: mix(accent, 30) }}
          >
            {card.tag}
          </span>
          <span className="font-mono text-[10.5px]" style={{ color: 'var(--text-muted)' }}>{card.metrics}</span>
        </div>

        <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-2xl mb-3 tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {card.title}
        </h3>

        <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
          {card.description}
        </p>

        <motion.div
          animate={isHovered && !reduced ? { y: -4, scale: 1.02 } : { y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          {card.id === 'laundry' && <LaundryIsometricVisual />}
          {card.id === 'salon' && <SalonIsometricVisual />}
          {card.id === 'gym' && <GymIsometricVisual />}
        </motion.div>

        <div className="space-y-2.5 pt-2">
          {card.bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-primary)' }}>
              <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: mix(accent, 15) }}>
                <Check size={11} style={{ color: accent }} />
              </span>
              <span className="font-sans leading-snug">{bullet}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-5 border-t flex items-center justify-between" style={{ borderColor: mint(15) }}>
        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>Instant Turnkey Module</span>
        <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-all duration-300" style={{ color: accent }}>
          <span>Launch SaaS</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  )
}

export default function ServiceSaasSection() {
  const cards = SERVICE_SAAS.cards
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <section
      id="saas"
      ref={ref}
      aria-labelledby="saas-title"
      className="relative pt-8 pb-10 md:pt-12 md:pb-14 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--base)', color: 'var(--text-primary)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, ${mint(10)} 1px, transparent 1px), linear-gradient(to bottom, ${mint(10)} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-[130px] pointer-events-none" style={{ backgroundColor: mix(BLUE, 10) }} />

      <div className="container-wide relative z-10">
        <motion.div
          className="max-w-3xl mb-12 sm:mb-16"
          initial={reduced ? {} : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4 border"
            style={{ color: MINT, backgroundColor: INNER_BG, borderColor: mint(30) }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: MINT }} />
            {SERVICE_SAAS.label}
          </div>
          <h2 id="saas-title" className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {SERVICE_SAAS.title}
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {SERVICE_SAAS.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, idx) => (
            <ServiceSaasCard key={card.id} card={card} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}