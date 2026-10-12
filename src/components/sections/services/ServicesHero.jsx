// import { useRef } from 'react'
// import { motion, useScroll, useTransform, useInView } from 'framer-motion'
// import { ArrowUpRight, ChevronDown } from 'lucide-react'
// import { SERVICES_HERO } from '../../../data/services'
// import Counter from '../../common/Counter'
// import useReducedMotion from '../../../hooks/useReducedMotion'

// /** Shared reveal animation helpers */
// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 28 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
// })

// /**
//  * FloatingIsometricMall — Pure vector isometric 3D illustration with neon edge-lighting.
//  */
// function FloatingIsometricMall() {
//   const reduced = useReducedMotion()

//   return (
//     <div className="relative w-full aspect-[4/3] max-w-[580px] mx-auto select-none" aria-hidden="true">
//       {/* Background Soft Radial Glows */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#14F1D9]/20 blur-[90px] pointer-events-none" />
//       <div className="absolute top-1/4 right-1/4 w-52 h-52 rounded-full bg-[#FFB547]/15 blur-[80px] pointer-events-none" />

//       <motion.div
//         animate={reduced ? {} : { y: [-6, 8, -6] }}
//         transition={reduced ? {} : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//         className="relative w-full h-full flex items-center justify-center"
//       >
//         <svg
//           viewBox="0 0 620 460"
//           className="w-full h-full filter drop-shadow-[0_20px_40px_rgba(7,11,26,0.9)]"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <linearGradient id="blueprint-line" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#14F1D9" stopOpacity="0.8" />
//               <stop offset="100%" stopColor="#070B1A" stopOpacity="0.1" />
//             </linearGradient>
//             <linearGradient id="neon-teal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#14F1D9" stopOpacity="0.9" />
//               <stop offset="100%" stopColor="#14F1D9" stopOpacity="0.2" />
//             </linearGradient>
//             <linearGradient id="amber-glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#FFB547" stopOpacity="0.95" />
//               <stop offset="100%" stopColor="#FFB547" stopOpacity="0.3" />
//             </linearGradient>
//             <linearGradient id="platform-top" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#0E172E" stopOpacity="0.85" />
//               <stop offset="100%" stopColor="#0A1022" stopOpacity="0.95" />
//             </linearGradient>
//             <linearGradient id="hologram-glass" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#14F1D9" stopOpacity="0.25" />
//               <stop offset="100%" stopColor="#070B1A" stopOpacity="0.65" />
//             </linearGradient>
//           </defs>

//           {/* ── BASE ISOMETRIC PLATFORM ── */}
//           <g transform="translate(310, 290)">
//             <path d="M 0,90 L -220,-20 L -220,5 L 0,115 L 220,5 L 220,-20 Z" fill="#060914" stroke="#14F1D9" strokeWidth="1" strokeOpacity="0.3" />
//             <path d="M 0,-130 L 220,-20 L 0,90 L -220,-20 Z" fill="url(#platform-top)" stroke="#14F1D9" strokeWidth="1.5" strokeOpacity="0.7" />
//             <path d="M -160,-20 L 0,60 L 160,-20 L 0,-100 Z" fill="none" stroke="#14F1D9" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.3" />
//             <path d="M -110,-20 L 0,35 L 110,-20 L 0,-75 Z" fill="none" stroke="#14F1D9" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.2" />
//             <circle cx="-220" cy="-20" r="4" fill="#070B1A" stroke="#14F1D9" strokeWidth="1.5" />
//             <circle cx="220" cy="-20" r="4" fill="#070B1A" stroke="#14F1D9" strokeWidth="1.5" />
//             <circle cx="0" cy="90" r="4.5" fill="#14F1D9" />
//             <circle cx="0" cy="-130" r="4.5" fill="#FFB547" />
//           </g>

//           {/* ── ISOMETRIC HYPERMARKET (LEFT) ── */}
//           <g transform="translate(195, 200)">
//             <path d="M 0,-60 L 70,-20 L 0,20 L -70,-20 Z" fill="#0D162B" stroke="#14F1D9" strokeWidth="1.2" strokeOpacity="0.8" />
//             <path d="M -70,-20 L 0,20 L 0,80 L -70,40 Z" fill="#091021" stroke="#14F1D9" strokeWidth="1" strokeOpacity="0.4" />
//             <path d="M 0,20 L 70,-20 L 70,40 L 0,80 Z" fill="#0E1933" stroke="#14F1D9" strokeWidth="1" strokeOpacity="0.5" />
//             <path d="M -25,45 L 25,18" stroke="#14F1D9" strokeWidth="2.5" strokeLinecap="round" />
//             <text x="0" y="3" fill="#14F1D9" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HYPERMARKET</text>
//             <g transform="translate(0, -35)">
//               <path d="M -30,-8 L 0,8 L 30,-8 L 0,-24 Z" fill="#111D38" stroke="#14F1D9" strokeWidth="0.8" strokeOpacity="0.6" />
//               <rect x="-18" y="-14" width="8" height="5" rx="1" fill="#FFB547" opacity="0.85" />
//               <rect x="-6" y="-18" width="8" height="5" rx="1" fill="#14F1D9" opacity="0.85" />
//               <rect x="6" y="-14" width="8" height="5" rx="1" fill="#14F1D9" opacity="0.75" />
//             </g>
//           </g>

//           {/* ── ISOMETRIC POS TERMINAL (CENTER-RIGHT) ── */}
//           <g transform="translate(370, 240)">
//             <path d="M -35,20 L 0,40 L 35,20 L 0,0 Z" fill="#0D172D" stroke="#14F1D9" strokeWidth="1" strokeOpacity="0.7" />
//             <path d="M -35,20 L -35,45 L 0,65 L 0,40 Z" fill="#070C1B" stroke="#14F1D9" strokeWidth="0.8" strokeOpacity="0.4" />
//             <path d="M 0,40 L 0,65 L 35,45 L 35,20 Z" fill="#0A1226" stroke="#14F1D9" strokeWidth="0.8" strokeOpacity="0.4" />
//             <g transform="translate(0, -10)">
//               <polygon points="-28,-35 28,-50 28,-10 -28,5" fill="#0A1329" stroke="#FFB547" strokeWidth="1.5" />
//               <line x1="-20" y1="-26" x2="18" y2="-38" stroke="#14F1D9" strokeWidth="1.2" />
//               <line x1="-20" y1="-18" x2="8" y2="-28" stroke="#E8ECF8" strokeWidth="1" opacity="0.8" />
//               <line x1="-20" y1="-10" x2="20" y2="-22" stroke="#FFB547" strokeWidth="1.2" />
//               <line x1="-24" y1="-4" x2="24" y2="-4" stroke="#14F1D9" strokeWidth="1.8" strokeDasharray="3 2" />
//             </g>
//             <text x="0" y="54" fill="#FFB547" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">POS TERMINAL</text>
//           </g>

//           {/* ── FLOATING HOLOGRAPHIC DASHBOARD ── */}
//           <g transform="translate(320, 100)">
//             <rect x="-105" y="-45" width="210" height="90" rx="14" fill="url(#hologram-glass)" stroke="#14F1D9" strokeWidth="1.2" />
//             <circle cx="-90" cy="-30" r="2.5" fill="#FFB547" />
//             <circle cx="-82" cy="-30" r="2.5" fill="#14F1D9" />
//             <circle cx="-74" cy="-30" r="2.5" fill="#14F1D9" opacity="0.5" />
//             <text x="-58" y="-27" fill="#E8ECF8" fontSize="9.5" fontFamily="monospace" fontWeight="600">Enterprise Omnichannel Sync</text>
//             <text x="-90" y="-4" fill="#8A93B2" fontSize="8" fontFamily="monospace">LIVE TILL TPS</text>
//             <text x="-90" y="16" fill="#14F1D9" fontSize="16" fontFamily="sans-serif" fontWeight="bold">12,840</text>
//             <text x="-32" y="15" fill="#14F1D9" fontSize="9" fontFamily="monospace">/sec</text>
//             <text x="15" y="-4" fill="#8A93B2" fontSize="8" fontFamily="monospace">BRANCH HEALTH</text>
//             <text x="15" y="16" fill="#FFB547" fontSize="16" fontFamily="sans-serif" fontWeight="bold">99.98%</text>
//             <g transform="translate(-90, 24)">
//               <rect x="0" y="6" width="6" height="10" rx="1" fill="#14F1D9" opacity="0.6" />
//               <rect x="10" y="2" width="6" height="14" rx="1" fill="#14F1D9" opacity="0.8" />
//               <rect x="20" y="0" width="6" height="16" rx="1" fill="#FFB547" />
//               <rect x="30" y="4" width="6" height="12" rx="1" fill="#14F1D9" opacity="0.9" />
//               <rect x="40" y="8" width="6" height="8" rx="1" fill="#14F1D9" opacity="0.5" />
//             </g>
//           </g>

//           {/* Connecting Circuit Data Traces */}
//           <g>
//             <path d="M 195,140 Q 220,110 260,110" fill="none" stroke="#14F1D9" strokeWidth="1.5" strokeDasharray="4 4" />
//             <path d="M 370,145 Q 410,170 375,225" fill="none" stroke="#FFB547" strokeWidth="1.5" strokeDasharray="4 4" />
//             <path d="M 370,305 Q 350,330 310,360" fill="none" stroke="#14F1D9" strokeWidth="1.2" strokeOpacity="0.7" />
//             {!reduced && (
//               <>
//                 <circle cx="215" cy="122" r="3" fill="#14F1D9">
//                   <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
//                 </circle>
//                 <circle cx="395" cy="175" r="3" fill="#FFB547">
//                   <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
//                 </circle>
//               </>
//             )}
//           </g>
//         </svg>
//       </motion.div>
//     </div>
//   )
// }

// /**
//  * ServicesHero — Theme-aware with CSS variable tokens and scroll-reveal animations.
//  */
// export default function ServicesHero() {
//   const containerRef = useRef(null)
//   const reduced = useReducedMotion()
//   const inView = useInView(containerRef, { once: true, margin: '-80px' })

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end start'],
//   })

//   const heroY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '20%'])

//   const scrollToRetail = (e) => {
//     e.preventDefault()
//     const target = document.getElementById('retail')
//     if (target) {
//       target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
//     }
//   }

//   return (
//     <section
//       ref={containerRef}
//       id="services-hero"
//       aria-labelledby="services-hero-title"
//       className="relative pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 overflow-hidden transition-colors duration-500"
//       style={{ backgroundColor: 'var(--bp-base)', color: 'var(--bp-text)' }}
//     >
//       {/* Blueprint Grid Overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-40"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, var(--bp-grid-stroke-hero) 1px, transparent 1px),
//             linear-gradient(to bottom, var(--bp-grid-stroke-hero) 1px, transparent 1px)
//           `,
//           backgroundSize: '48px 48px',
//         }}
//         aria-hidden="true"
//       />

//       {/* Radial Glows */}
//       <div className="absolute top-16 left-1/4 w-[500px] h-[500px] rounded-full bg-[#14F1D9]/15 blur-[120px] pointer-events-none" aria-hidden="true" />
//       <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-[#FFB547]/12 blur-[130px] pointer-events-none" aria-hidden="true" />

//       <motion.div style={{ y: heroY }} className="container-wide relative z-10">
//         {/* ── TWO-COLUMN HERO GRID ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 sm:mb-20">
//           {/* Left Column */}
//           <div className="lg:col-span-7 flex flex-col items-start">
//             {/* Kicker */}
//             <motion.div
//               {...(reduced ? {} : fadeUp(0))}
//               animate={inView ? (reduced ? {} : { opacity: 1, y: 0 }) : (reduced ? {} : { opacity: 0, y: 28 })}
//               className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#14F1D9] mb-6 shadow-[0_0_15px_rgba(20,241,217,0.15)] transition-colors duration-300"
//               style={{ backgroundColor: 'var(--bp-card-inner)', border: '1px solid rgba(20,241,217,0.30)' }}
//             >
//               <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9] shadow-[0_0_8px_#14F1D9]" />
//               Enterprise Architecture &amp; Automation
//             </motion.div>

//             {/* H1 */}
//             <motion.h1
//               id="services-hero-title"
//               {...(reduced ? {} : fadeUp(0.1))}
//               animate={inView ? (reduced ? {} : { opacity: 1, y: 0 }) : (reduced ? {} : { opacity: 0, y: 28 })}
//               className="font-['Space_Grotesk',sans-serif] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6"
//               style={{ color: 'var(--bp-text)' }}
//             >
//               Software Built for the{' '}
//               <span className="bg-gradient-to-r from-[#14F1D9] via-[#8EECE2] to-[#FFB547] bg-clip-text text-transparent">
//                 Way Your Business
//               </span>{' '}
//               Actually Runs.
//             </motion.h1>

//             {/* Subline */}
//             <motion.p
//               {...(reduced ? {} : fadeUp(0.2))}
//               animate={inView ? (reduced ? {} : { opacity: 1, y: 0 }) : (reduced ? {} : { opacity: 0, y: 28 })}
//               className="font-sans text-lg sm:text-xl max-w-2xl leading-relaxed mb-9"
//               style={{ color: 'var(--bp-muted)' }}
//             >
//               {SERVICES_HERO.subline}
//             </motion.p>

//             {/* Dual Buttons */}
//             <motion.div
//               {...(reduced ? {} : fadeUp(0.3))}
//               animate={inView ? (reduced ? {} : { opacity: 1, y: 0 }) : (reduced ? {} : { opacity: 0, y: 28 })}
//               className="flex flex-wrap items-center gap-4"
//             >
//               <a
//                 href={SERVICES_HERO.ctaPrimary.href}
//                 className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-[#070B1A] bg-gradient-to-r from-[#FFB547] to-[#FFA726] shadow-[0_0_24px_rgba(255,181,71,0.45)] hover:shadow-[0_0_35px_rgba(255,181,71,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer select-none"
//               >
//                 <span>{SERVICES_HERO.ctaPrimary.label}</span>
//                 <ArrowUpRight size={17} className="text-[#070B1A]" />
//               </a>

//               <button
//                 onClick={scrollToRetail}
//                 className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide border hover:text-[#14F1D9] hover:bg-[#14F1D9]/10 transition-all duration-300 cursor-pointer select-none"
//                 style={{
//                   color: 'var(--bp-text)',
//                   backgroundColor: 'color-mix(in srgb, var(--bp-card-inner) 70%, transparent)',
//                   borderColor: 'rgba(20,241,217,0.35)',
//                 }}
//               >
//                 <span>{SERVICES_HERO.ctaSecondary.label}</span>
//                 <ChevronDown size={17} className="text-[#14F1D9]" />
//               </button>
//             </motion.div>
//           </div>

//           {/* Right Column: Illustration */}
//           <motion.div
//             initial={reduced ? {} : { opacity: 0, x: 40 }}
//             animate={inView ? { opacity: 1, x: 0 } : (reduced ? {} : { opacity: 0, x: 40 })}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//             className="lg:col-span-5 w-full flex items-center justify-center"
//           >
//             <FloatingIsometricMall />
//           </motion.div>
//         </div>

//         {/* ── STATS STRIP ── */}
//         <motion.div
//           initial={reduced ? {} : { opacity: 0, y: 32 }}
//           animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 32 })}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
//           className="relative rounded-2xl p-6 sm:p-8 backdrop-blur-xl border shadow-[0_12px_40px_var(--bp-shadow),inset_0_1px_1px_rgba(20,241,217,0.15)] transition-all duration-300"
//           style={{
//             backgroundColor: 'var(--bp-surface-alt)',
//             borderColor: 'rgba(20,241,217,0.20)',
//           }}
//         >
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#14F1D9]/15">
//             {SERVICES_HERO.stats.map((stat, i) => (
//               <div
//                 key={stat.label}
//                 className={`flex flex-col justify-center ${i > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
//               >
//                 <div className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl text-[#14F1D9] mb-1 tracking-tight flex items-baseline">
//                   {stat.isNumeric ? (
//                     <Counter value={stat.value} suffix={stat.suffix} />
//                   ) : (
//                     <span>{stat.value}{stat.suffix}</span>
//                   )}
//                 </div>
//                 <div className="font-sans font-semibold text-xs sm:text-sm mb-0.5" style={{ color: 'var(--bp-text)' }}>
//                   {stat.label}
//                 </div>
//                 <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--bp-muted)' }}>
//                   {stat.sub}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }


import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { SERVICES_HERO } from '../../../data/services'
import Counter from '../../common/Counter'
import useReducedMotion from '../../../hooks/useReducedMotion'

/* ── Home-page palette (green + black, yellow used sparingly) ── */
const MINT = 'var(--accent-mint, #BFE0B8)'
const BLUE = 'var(--accent-blue, #6E8DA6)'
const YELLOW = '#E8C547' // small highlights only
const INK = '#050806' // near-black with a green tint
const TEXT_SVG = '#E8F0E6'
const MUTED_SVG = '#8FA39A'
const mint = (pct) => `color-mix(in srgb, ${MINT} ${pct}%, transparent)`
const yellow = (pct) => `color-mix(in srgb, ${YELLOW} ${pct}%, transparent)`

const PANEL_BG = 'color-mix(in srgb, var(--base, #050806) 88%, #BFE0B8 4%)'
const PILL_BG = 'color-mix(in srgb, var(--base, #050806) 90%, #BFE0B8 6%)'

/** Shared reveal animation helpers */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

/**
 * FloatingIsometricMall — Pure vector isometric 3D illustration with neon edge-lighting.
 */
function FloatingIsometricMall() {
  const reduced = useReducedMotion()
  const sMint = { stroke: MINT }
  const fMint = { fill: MINT }

  return (
    <div className="relative w-full aspect-[4/3] max-w-[580px] mx-auto select-none" aria-hidden="true">
      {/* Background Soft Radial Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[90px] pointer-events-none"
        style={{ backgroundColor: mint(18) }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-52 h-52 rounded-full blur-[80px] pointer-events-none"
        style={{ backgroundColor: yellow(8) }}
      />

      <motion.div
        animate={reduced ? {} : { y: [-6, 8, -6] }}
        transition={reduced ? {} : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 620 460"
          className="w-full h-full filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="blueprint-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopOpacity="0.8" style={{ stopColor: MINT }} />
              <stop offset="100%" stopColor={INK} stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="neon-teal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopOpacity="0.9" style={{ stopColor: MINT }} />
              <stop offset="100%" stopOpacity="0.2" style={{ stopColor: MINT }} />
            </linearGradient>
            <linearGradient id="amber-glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={YELLOW} stopOpacity="0.95" />
              <stop offset="100%" stopColor={YELLOW} stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="platform-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0C1510" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#080E0A" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="hologram-glass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopOpacity="0.22" style={{ stopColor: MINT }} />
              <stop offset="100%" stopColor={INK} stopOpacity="0.65" />
            </linearGradient>
          </defs>

          {/* ── BASE ISOMETRIC PLATFORM ── */}
          <g transform="translate(310, 290)">
            <path d="M 0,90 L -220,-20 L -220,5 L 0,115 L 220,5 L 220,-20 Z" fill="#050806" strokeWidth="1" strokeOpacity="0.3" style={sMint} />
            <path d="M 0,-130 L 220,-20 L 0,90 L -220,-20 Z" fill="url(#platform-top)" strokeWidth="1.5" strokeOpacity="0.7" style={sMint} />
            <path d="M -160,-20 L 0,60 L 160,-20 L 0,-100 Z" fill="none" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.3" style={sMint} />
            <path d="M -110,-20 L 0,35 L 110,-20 L 0,-75 Z" fill="none" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.2" style={sMint} />
            <circle cx="-220" cy="-20" r="4" fill={INK} strokeWidth="1.5" style={sMint} />
            <circle cx="220" cy="-20" r="4" fill={INK} strokeWidth="1.5" style={sMint} />
            <circle cx="0" cy="90" r="4.5" style={fMint} />
            <circle cx="0" cy="-130" r="4.5" fill={YELLOW} />
          </g>

          {/* ── ISOMETRIC HYPERMARKET (LEFT) ── */}
          <g transform="translate(195, 200)">
            <path d="M 0,-60 L 70,-20 L 0,20 L -70,-20 Z" fill="#0A130E" strokeWidth="1.2" strokeOpacity="0.8" style={sMint} />
            <path d="M -70,-20 L 0,20 L 0,80 L -70,40 Z" fill="#060B08" strokeWidth="1" strokeOpacity="0.4" style={sMint} />
            <path d="M 0,20 L 70,-20 L 70,40 L 0,80 Z" fill="#0B170F" strokeWidth="1" strokeOpacity="0.5" style={sMint} />
            <path d="M -25,45 L 25,18" strokeWidth="2.5" strokeLinecap="round" style={sMint} />
            <text x="0" y="3" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle" style={fMint}>HYPERMARKET</text>
            <g transform="translate(0, -35)">
              <path d="M -30,-8 L 0,8 L 30,-8 L 0,-24 Z" fill="#0E1B13" strokeWidth="0.8" strokeOpacity="0.6" style={sMint} />
              <rect x="-18" y="-14" width="8" height="5" rx="1" fill={YELLOW} opacity="0.85" />
              <rect x="-6" y="-18" width="8" height="5" rx="1" opacity="0.85" style={fMint} />
              <rect x="6" y="-14" width="8" height="5" rx="1" opacity="0.75" style={fMint} />
            </g>
          </g>

          {/* ── ISOMETRIC POS TERMINAL (CENTER-RIGHT) ── */}
          <g transform="translate(370, 240)">
            <path d="M -35,20 L 0,40 L 35,20 L 0,0 Z" fill="#0A140E" strokeWidth="1" strokeOpacity="0.7" style={sMint} />
            <path d="M -35,20 L -35,45 L 0,65 L 0,40 Z" fill="#050A07" strokeWidth="0.8" strokeOpacity="0.4" style={sMint} />
            <path d="M 0,40 L 0,65 L 35,45 L 35,20 Z" fill="#08110B" strokeWidth="0.8" strokeOpacity="0.4" style={sMint} />
            <g transform="translate(0, -10)">
              <polygon points="-28,-35 28,-50 28,-10 -28,5" fill="#08110B" strokeWidth="1.5" style={{ stroke: BLUE }} />
              <line x1="-20" y1="-26" x2="18" y2="-38" strokeWidth="1.2" style={sMint} />
              <line x1="-20" y1="-18" x2="8" y2="-28" stroke={TEXT_SVG} strokeWidth="1" opacity="0.8" />
              <line x1="-20" y1="-10" x2="20" y2="-22" strokeWidth="1.2" style={{ stroke: BLUE }} />
              <line x1="-24" y1="-4" x2="24" y2="-4" strokeWidth="1.8" strokeDasharray="3 2" style={sMint} />
            </g>
            <text x="0" y="54" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle" style={fMint}>POS TERMINAL</text>
          </g>

          {/* ── FLOATING HOLOGRAPHIC DASHBOARD ── */}
          <g transform="translate(320, 100)">
            <rect x="-105" y="-45" width="210" height="90" rx="14" fill="url(#hologram-glass)" strokeWidth="1.2" style={sMint} />
            <circle cx="-90" cy="-30" r="2.5" fill={YELLOW} />
            <circle cx="-82" cy="-30" r="2.5" style={fMint} />
            <circle cx="-74" cy="-30" r="2.5" opacity="0.5" style={fMint} />
            <text x="-58" y="-27" fill={TEXT_SVG} fontSize="9.5" fontFamily="monospace" fontWeight="600">Enterprise Omnichannel Sync</text>
            <text x="-90" y="-4" fill={MUTED_SVG} fontSize="8" fontFamily="monospace">LIVE TILL TPS</text>
            <text x="-90" y="16" fontSize="16" fontFamily="sans-serif" fontWeight="bold" style={fMint}>12,840</text>
            <text x="-32" y="15" fontSize="9" fontFamily="monospace" style={fMint}>/sec</text>
            <text x="15" y="-4" fill={MUTED_SVG} fontSize="8" fontFamily="monospace">BRANCH HEALTH</text>
            <text x="15" y="16" fontSize="16" fontFamily="sans-serif" fontWeight="bold" style={{ fill: BLUE }}>99.98%</text>
            <g transform="translate(-90, 24)">
              <rect x="0" y="6" width="6" height="10" rx="1" opacity="0.6" style={fMint} />
              <rect x="10" y="2" width="6" height="14" rx="1" opacity="0.8" style={fMint} />
              <rect x="20" y="0" width="6" height="16" rx="1" fill={YELLOW} />
              <rect x="30" y="4" width="6" height="12" rx="1" opacity="0.9" style={fMint} />
              <rect x="40" y="8" width="6" height="8" rx="1" opacity="0.5" style={fMint} />
            </g>
          </g>

          {/* Connecting Circuit Data Traces */}
          <g>
            <path d="M 195,140 Q 220,110 260,110" fill="none" strokeWidth="1.5" strokeDasharray="4 4" style={sMint} />
            <path d="M 370,145 Q 410,170 375,225" fill="none" strokeWidth="1.5" strokeDasharray="4 4" style={{ stroke: BLUE }} />
            <path d="M 370,305 Q 350,330 310,360" fill="none" strokeWidth="1.2" strokeOpacity="0.7" style={sMint} />
            {!reduced && (
              <>
                <circle cx="215" cy="122" r="3" style={fMint}>
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="395" cy="175" r="3" fill={YELLOW}>
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
                </circle>
              </>
            )}
          </g>
        </svg>
      </motion.div>
    </div>
  )
}

/**
 * ServicesHero — Theme-aware with CSS variable tokens and scroll-reveal animations.
 */
export default function ServicesHero() {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()
  const inView = useInView(containerRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '20%'])

  const scrollToRetail = (e) => {
    e.preventDefault()
    const target = document.getElementById('retail')
    if (target) {
      target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    }
  }

  return (
    <section
      ref={containerRef}
      id="services-hero"
      aria-labelledby="services-hero-title"
      className="relative pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: 'var(--base)', color: 'var(--text-primary)' }}
    >
      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${mint(10)} 1px, transparent 1px),
            linear-gradient(to bottom, ${mint(10)} 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Radial Glows */}
      <div className="absolute top-16 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: mint(12) }} aria-hidden="true" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none" style={{ backgroundColor: yellow(6) }} aria-hidden="true" />

      <motion.div style={{ y: heroY }} className="container-wide relative z-10">
        {/* ── TWO-COLUMN HERO GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 sm:mb-20">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Kicker */}
            <motion.div
              {...(reduced ? {} : fadeUp(0))}
              animate={inView ? (reduced ? {} : { opacity: 1, y: 0 }) : (reduced ? {} : { opacity: 0, y: 28 })}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-6 transition-colors duration-300"
              style={{
                color: MINT,
                backgroundColor: PILL_BG,
                border: `1px solid ${mint(30)}`,
                boxShadow: `0 0 15px ${mint(15)}`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: MINT, boxShadow: `0 0 8px ${MINT}` }} />
              Enterprise Architecture &amp; Automation
            </motion.div>

            {/* H1 */}
            <motion.h1
              id="services-hero-title"
              {...(reduced ? {} : fadeUp(0.1))}
              animate={inView ? (reduced ? {} : { opacity: 1, y: 0 }) : (reduced ? {} : { opacity: 0, y: 28 })}
              className="font-['Space_Grotesk',sans-serif] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Software Built for the{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${MINT}, ${BLUE})` }}
              >
                Way Your Business
              </span>{' '}
              Actually Runs.
            </motion.h1>

            {/* Subline */}
            <motion.p
              {...(reduced ? {} : fadeUp(0.2))}
              animate={inView ? (reduced ? {} : { opacity: 1, y: 0 }) : (reduced ? {} : { opacity: 0, y: 28 })}
              className="font-sans text-lg sm:text-xl max-w-2xl leading-relaxed mb-9"
              style={{ color: 'var(--text-muted)' }}
            >
              {SERVICES_HERO.subline}
            </motion.p>

            {/* Dual Buttons */}
            <motion.div
              {...(reduced ? {} : fadeUp(0.3))}
              animate={inView ? (reduced ? {} : { opacity: 1, y: 0 }) : (reduced ? {} : { opacity: 0, y: 28 })}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={SERVICES_HERO.ctaPrimary.href}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer select-none"
                style={{
                  color: INK,
                  backgroundImage: `linear-gradient(to right, ${MINT}, ${BLUE})`,
                  boxShadow: `0 0 24px ${mint(40)}`,
                }}
              >
                <span>{SERVICES_HERO.ctaPrimary.label}</span>
                <ArrowUpRight size={17} style={{ color: INK }} />
              </a>

              <button
                onClick={scrollToRetail}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide border hover:text-[var(--accent-mint)] hover:bg-[color-mix(in_srgb,var(--accent-mint)_10%,transparent)] transition-all duration-300 cursor-pointer select-none"
                style={{
                  color: 'var(--text-primary)',
                  backgroundColor: `color-mix(in srgb, ${PILL_BG} 70%, transparent)`,
                  borderColor: mint(35),
                }}
              >
                <span>{SERVICES_HERO.ctaSecondary.label}</span>
                <ChevronDown size={17} style={{ color: MINT }} />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Illustration */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : (reduced ? {} : { opacity: 0, x: 40 })}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 w-full flex items-center justify-center"
          >
            <FloatingIsometricMall />
          </motion.div>
        </div>

        {/* ── STATS STRIP ── */}
        {/* <motion.div
          initial={reduced ? {} : { opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 32 })}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="relative rounded-2xl p-6 sm:p-8 backdrop-blur-xl border transition-all duration-300"
          style={{
            backgroundColor: PANEL_BG,
            borderColor: mint(20),
            boxShadow: `0 12px 40px rgba(0,0,0,0.35), inset 0 1px 1px ${mint(15)}`,
          }}
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x"
            style={{ '--tw-divide-opacity': 1, borderColor: mint(15) }}
          >
            {SERVICES_HERO.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col justify-center ${i > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
                style={i > 0 ? { borderColor: mint(15) } : undefined}
              >
                <div className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl mb-1 tracking-tight flex items-baseline" style={{ color: MINT }}>
                  {stat.isNumeric ? (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value}{stat.suffix}</span>
                  )}
                </div>
                <div className="font-sans font-semibold text-xs sm:text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>
                  {stat.label}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  )
}