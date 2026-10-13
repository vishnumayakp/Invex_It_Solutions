// import { useState, useRef } from 'react'
// import { motion, AnimatePresence, useInView } from 'framer-motion'
// import { ArrowRight } from 'lucide-react'
// import { BUSINESS_SOFTWARE } from '../../../data/services'
// import useReducedMotion from '../../../hooks/useReducedMotion'

// function WorldMapExportGraphic() {
//   const reduced = useReducedMotion()
//   const nodes = [
//     { name: 'India', hub: 'Mumbai', cx: 165, cy: 95, isCore: true },
//     { name: 'Turkey', hub: 'Istanbul', cx: 85, cy: 65, isCore: true },
//     { name: 'China', hub: 'Shanghai', cx: 245, cy: 75, isCore: true },
//   ]
//   const routes = [
//     { from: nodes[0], to: nodes[1] },
//     { from: nodes[0], to: nodes[2] },
//     { from: nodes[1], to: nodes[2] },
//   ]
//   return (
//     <div
//       className="relative w-full h-44 sm:h-52 rounded-xl border p-3 overflow-hidden select-none transition-colors duration-300"
//       aria-hidden="true"
//       style={{ backgroundColor: 'var(--bp-world-bg)', borderColor: 'rgba(20,241,217,0.25)' }}
//     >
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#14F1D9]/15 blur-[60px] pointer-events-none" />
//       <svg viewBox="0 0 320 150" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//         <defs>
//           <linearGradient id="route-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#14F1D9" />
//             <stop offset="100%" stopColor="#FFB547" />
//           </linearGradient>
//         </defs>
//         <g opacity="0.15" stroke="#8A93B2" strokeWidth="0.8" fill="none" strokeDasharray="2 2">
//           <path d="M 50,45 Q 70,30 95,35 L 115,55 Q 120,70 100,80 L 80,75 Z" />
//           <path d="M 140,75 L 175,75 L 180,110 L 150,115 Z" />
//           <path d="M 200,50 L 260,50 L 270,90 L 210,85 Z" />
//         </g>
//         {routes.map((route, i) => {
//           const midX = (route.from.cx + route.to.cx) / 2
//           const midY = Math.min(route.from.cy, route.to.cy) - 15
//           return (
//             <g key={i}>
//               <path d={`M ${route.from.cx},${route.from.cy} Q ${midX},${midY} ${route.to.cx},${route.to.cy}`} fill="none" stroke="url(#route-pulse)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.85" />
//               {!reduced && (
//                 <circle cx={midX} cy={midY + 5} r="2" fill="#14F1D9">
//                   <animate attributeName="opacity" values="0.2;1;0.2" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
//                 </circle>
//               )}
//             </g>
//           )
//         })}
//         {nodes.map((node) => (
//           <g key={node.name} transform={`translate(${node.cx}, ${node.cy})`}>
//             {!reduced && (
//               <circle cx="0" cy="0" r="8" fill="none" stroke="#14F1D9" strokeWidth="0.6" opacity="0.5">
//                 <animate attributeName="r" values="4;10;4" dur="2.8s" repeatCount="indefinite" />
//                 <animate attributeName="opacity" values="0.6;0;0.6" dur="2.8s" repeatCount="indefinite" />
//               </circle>
//             )}
//             <circle cx="0" cy="0" r="3.5" fill="#070B1A" stroke="#14F1D9" strokeWidth="1.8" />
//             <circle cx="0" cy="0" r="1.5" fill="#FFB547" />
//             <text x="0" y="-8" fill="#E8ECF8" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{node.name}</text>
//             <text x="0" y="12" fill="#14F1D9" fontSize="6.5" fontFamily="monospace" textAnchor="middle">{node.hub}</text>
//           </g>
//         ))}
//       </svg>
//       <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[10px] font-mono border-t border-[#14F1D9]/15 pt-2">
//         <span className="text-[#14F1D9] flex items-center gap-1.5 font-semibold">
//           <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9] animate-pulse" />
//           Logistics across India, Turkey &amp; China
//         </span>
//         <span style={{ color: 'var(--bp-muted)' }} className="hidden sm:inline">Bonded Transshipment</span>
//       </div>
//     </div>
//   )
// }

// function TileIsometricGraphic({ type }) {
//   const containerStyle = {
//     backgroundColor: 'var(--bp-world-bg)',
//     borderColor: 'rgba(20,241,217,0.20)',
//   }

//   if (type === 'trading') {
//     return (
//       <div className="relative w-full h-28 rounded-xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300" aria-hidden="true" style={containerStyle}>
//         <svg viewBox="0 0 200 80" className="w-full h-full">
//           <polygon points="100,10 160,35 100,60 40,35" fill="#0E1830" stroke="#14F1D9" strokeWidth="1" />
//           <polygon points="40,35 100,60 100,68 40,43" fill="#070C1B" stroke="#14F1D9" strokeWidth="0.6" />
//           <polygon points="100,60 160,35 160,43 100,68" fill="#0A1224" stroke="#14F1D9" strokeWidth="0.6" />
//           <circle cx="80" cy="35" r="7" fill="#070B1A" stroke="#FFB547" strokeWidth="1" />
//           <text x="80" y="38" fill="#FFB547" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">$</text>
//           <circle cx="120" cy="35" r="7" fill="#070B1A" stroke="#14F1D9" strokeWidth="1" />
//           <text x="120" y="38" fill="#14F1D9" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">€</text>
//           <text x="100" y="24" fill="#E8ECF8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">MULTI-CURRENCY B2B</text>
//         </svg>
//       </div>
//     )
//   }

//   if (type === 'waste-mgmt') {
//     return (
//       <div className="relative w-full h-28 rounded-xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300" aria-hidden="true" style={containerStyle}>
//         <svg viewBox="0 0 200 80" className="w-full h-full">
//           <polygon points="100,15 165,38 100,62 35,38" fill="#0C162D" stroke="#14F1D9" strokeWidth="1" />
//           <rect x="75" y="28" width="30" height="14" rx="2" fill="#070B1A" stroke="#FFB547" strokeWidth="1.2" />
//           <circle cx="82" cy="45" r="3" fill="#FFB547" />
//           <circle cx="98" cy="45" r="3" fill="#FFB547" />
//           <circle cx="140" cy="28" r="4" fill="none" stroke="#14F1D9" strokeWidth="1" />
//           <circle cx="140" cy="28" r="1.5" fill="#14F1D9" />
//           <text x="100" y="23" fill="#14F1D9" fontSize="6.5" fontFamily="monospace" textAnchor="middle">WEIGHBRIDGE IOT METRICS</text>
//         </svg>
//       </div>
//     )
//   }

//   return (
//     <div className="relative w-full h-28 rounded-xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300" aria-hidden="true" style={containerStyle}>
//       <svg viewBox="0 0 200 80" className="w-full h-full">
//         <polygon points="100,5 135,18 100,32 65,18" fill="#12203F" stroke="#14F1D9" strokeWidth="1" />
//         <polygon points="65,18 100,32 100,68 65,54" fill="#091022" stroke="#14F1D9" strokeWidth="0.6" />
//         <polygon points="100,32 135,18 135,54 100,68" fill="#0D1730" stroke="#14F1D9" strokeWidth="0.6" />
//         <circle cx="82" cy="38" r="1.5" fill="#FFB547" />
//         <circle cx="118" cy="38" r="1.5" fill="#14F1D9" />
//         <circle cx="82" cy="48" r="1.5" fill="#14F1D9" />
//         <circle cx="118" cy="48" r="1.5" fill="#FFB547" />
//         <text x="100" y="75" fill="#E8ECF8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">COMMERCIAL LEASE ENGINE</text>
//       </svg>
//     </div>
//   )
// }

// function BentoTileCard({ tile, delay = 0 }) {
//   const [isHovered, setIsHovered] = useState(false)
//   const reduced = useReducedMotion()
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-60px' })

//   return (
//     <motion.div
//       ref={ref}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       whileHover={reduced ? {} : { y: -4, transition: { duration: 0.25 } }}
//       initial={reduced ? {} : { opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//       transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
//       className={`relative rounded-[20px] p-6 sm:p-7 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 ${tile.gridSpan}`}
//       style={{
//         backgroundColor: 'var(--bp-card)',
//         borderColor: isHovered ? 'rgba(20,241,217,0.80)' : 'rgba(20,241,217,0.25)',
//         boxShadow: '0 12px 36px var(--bp-shadow)',
//       }}
//     >
//       <div>
//         <div className="flex items-center justify-between gap-2 mb-4">
//           <span className="font-mono text-[10px] uppercase tracking-wider text-[#14F1D9] px-2.5 py-0.5 rounded-full bg-[#14F1D9]/10 border border-[#14F1D9]/25">
//             {tile.category}
//           </span>
//           <span className="font-mono text-[10px]" style={{ color: 'var(--bp-muted)' }}>
//             {tile.techBadge}
//           </span>
//         </div>

//         <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-xl sm:text-2xl mb-2 tracking-tight" style={{ color: 'var(--bp-text)' }}>
//           {tile.title}
//         </h3>

//         <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'var(--bp-muted)' }}>
//           {tile.description}
//         </p>

//         <div className="my-3">
//           {tile.isLarge ? <WorldMapExportGraphic /> : <TileIsometricGraphic type={tile.id} />}
//         </div>

//         <AnimatePresence>
//           {isHovered && tile.extraDetail && (
//             <motion.div
//               initial={reduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
//               animate={reduced ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
//               exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
//               transition={{ duration: 0.25 }}
//               className="mt-3 p-3 rounded-xl border text-xs font-sans leading-relaxed overflow-hidden transition-colors duration-300"
//               style={{
//                 backgroundColor: 'var(--bp-base)',
//                 borderColor: 'rgba(20,241,217,0.20)',
//                 color: 'var(--bp-text)',
//               }}
//             >
//               <div className="font-mono text-[9.5px] uppercase tracking-wider text-[#FFB547] mb-1 font-semibold">
//                 Architecture Specs
//               </div>
//               {tile.extraDetail}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <div className="mt-5 pt-4 border-t border-[#14F1D9]/10 flex items-center justify-between">
//         <span className="text-xs font-mono" style={{ color: 'var(--bp-muted)' }}>
//           {isHovered ? 'Details Unlocked' : 'Explore Modules'}
//         </span>
//         <div className={`flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 ${isHovered ? 'text-[#14F1D9] translate-x-1' : ''}`}
//           style={{ color: isHovered ? '#14F1D9' : 'var(--bp-muted)' }}>
//           <span>Learn more</span>
//           <ArrowRight size={14} />
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default function BusinessSoftwareSection() {
//   const tiles = BUSINESS_SOFTWARE.bentoTiles
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-80px' })
//   const reduced = useReducedMotion()

//   return (
//     <section
//       id="business-software"
//       ref={ref}
//       aria-labelledby="business-software-title"
//       className="relative py-20 md:py-28 overflow-hidden transition-colors duration-300"
//       style={{ backgroundColor: 'var(--bp-base)', color: 'var(--bp-text)' }}
//     >
//       {/* Blueprint Grid */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-30"
//         style={{
//           backgroundImage: `linear-gradient(to right, var(--bp-grid-stroke) 1px, transparent 1px), linear-gradient(to bottom, var(--bp-grid-stroke) 1px, transparent 1px)`,
//           backgroundSize: '48px 48px',
//         }}
//         aria-hidden="true"
//       />

//       <div className="container-wide relative z-10">
//         {/* Header */}
//         <motion.div
//           className="max-w-3xl mb-12 sm:mb-16"
//           initial={reduced ? {} : { opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#14F1D9] mb-4 border" style={{ backgroundColor: 'var(--bp-card-inner)', borderColor: 'rgba(20,241,217,0.30)' }}>
//             <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9]" />
//             {BUSINESS_SOFTWARE.label}
//           </div>
//           <h2 id="business-software-title" className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4" style={{ color: 'var(--bp-text)' }}>
//             {BUSINESS_SOFTWARE.title}
//           </h2>
//           <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: 'var(--bp-muted)' }}>
//             {BUSINESS_SOFTWARE.description}
//           </p>
//         </motion.div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
//           {tiles.map((tile, idx) => (
//             <BentoTileCard key={tile.id} tile={tile} delay={idx * 0.08} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BUSINESS_SOFTWARE } from '../../../data/services'
import useReducedMotion from '../../../hooks/useReducedMotion'

/* ── Home-page palette (green + black, yellow used sparingly) ── */
const MINT = 'var(--accent-mint, #BFE0B8)'
const BLUE = 'var(--accent-blue, #6E8DA6)'
const YELLOW = '#E8C547' // small highlights only
const INK = '#050806' // near-black with a green tint
const mint = (pct) => `color-mix(in srgb, ${MINT} ${pct}%, transparent)`

const PANEL_BG = 'color-mix(in srgb, var(--base, #050806) 88%, #BFE0B8 4%)'
const GRAPHIC_BG = 'color-mix(in srgb, var(--base, #050806) 94%, #000 6%)'

function WorldMapExportGraphic() {
  const reduced = useReducedMotion()
  const nodes = [
    { name: 'India', hub: 'Mumbai', cx: 165, cy: 95 },
    { name: 'Turkey', hub: 'Istanbul', cx: 85, cy: 65 },
    { name: 'China', hub: 'Shanghai', cx: 245, cy: 75 },
  ]
  const routes = [
    { from: nodes[0], to: nodes[1] },
    { from: nodes[0], to: nodes[2] },
    { from: nodes[1], to: nodes[2] },
  ]
  return (
    <div
      className="relative w-full h-44 sm:h-52 rounded-xl border p-3 overflow-hidden select-none transition-colors duration-300"
      aria-hidden="true"
      style={{ backgroundColor: GRAPHIC_BG, borderColor: mint(25) }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[60px] pointer-events-none"
        style={{ backgroundColor: mint(14) }}
      />
      <svg viewBox="0 0 320 150" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="route-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: MINT }} />
            <stop offset="100%" style={{ stopColor: BLUE }} />
          </linearGradient>
        </defs>
        <g opacity="0.18" strokeWidth="0.8" fill="none" strokeDasharray="2 2" style={{ stroke: BLUE }}>
          <path d="M 50,45 Q 70,30 95,35 L 115,55 Q 120,70 100,80 L 80,75 Z" />
          <path d="M 140,75 L 175,75 L 180,110 L 150,115 Z" />
          <path d="M 200,50 L 260,50 L 270,90 L 210,85 Z" />
        </g>
        {routes.map((route, i) => {
          const midX = (route.from.cx + route.to.cx) / 2
          const midY = Math.min(route.from.cy, route.to.cy) - 15
          return (
            <g key={i}>
              <path
                d={`M ${route.from.cx},${route.from.cy} Q ${midX},${midY} ${route.to.cx},${route.to.cy}`}
                fill="none"
                stroke="url(#route-pulse)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.85"
              />
              {!reduced && (
                <circle cx={midX} cy={midY + 5} r="2" style={{ fill: MINT }}>
                  <animate attributeName="opacity" values="0.2;1;0.2" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          )
        })}
        {nodes.map((node) => (
          <g key={node.name} transform={`translate(${node.cx}, ${node.cy})`}>
            {!reduced && (
              <circle cx="0" cy="0" r="8" fill="none" strokeWidth="0.6" opacity="0.5" style={{ stroke: MINT }}>
                <animate attributeName="r" values="4;10;4" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2.8s" repeatCount="indefinite" />
              </circle>
            )}
            <circle cx="0" cy="0" r="3.5" fill={INK} strokeWidth="1.8" style={{ stroke: MINT }} />
            <circle cx="0" cy="0" r="1.5" fill={YELLOW} />
            <text x="0" y="-8" fill="#E8F0E6" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{node.name}</text>
            <text x="0" y="12" fontSize="6.5" fontFamily="monospace" textAnchor="middle" style={{ fill: MINT }}>{node.hub}</text>
          </g>
        ))}
      </svg>
      <div
        className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[10px] font-mono border-t pt-2"
        style={{ borderColor: mint(15) }}
      >
        <span className="flex items-center gap-1.5 font-semibold" style={{ color: MINT }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: MINT }} />
          Logistics across India, Turkey &amp; China
        </span>
        <span style={{ color: 'var(--text-muted)' }} className="hidden sm:inline">Bonded Transshipment</span>
      </div>
    </div>
  )
}

function TileIsometricGraphic({ type }) {
  const containerStyle = { backgroundColor: GRAPHIC_BG, borderColor: mint(20) }
  const wrap = 'relative w-full h-28 rounded-xl border p-2 flex items-center justify-center overflow-hidden transition-colors duration-300'
  const strokeMint = { stroke: MINT }
  const fillMint = { fill: MINT }

  if (type === 'trading') {
    return (
      <div className={wrap} aria-hidden="true" style={containerStyle}>
        <svg viewBox="0 0 200 80" className="w-full h-full">
          <polygon points="100,10 160,35 100,60 40,35" fill="#0A130E" strokeWidth="1" style={strokeMint} />
          <polygon points="40,35 100,60 100,68 40,43" fill="#050806" strokeWidth="0.6" style={strokeMint} />
          <polygon points="100,60 160,35 160,43 100,68" fill="#08100B" strokeWidth="0.6" style={strokeMint} />
          <circle cx="80" cy="35" r="7" fill={INK} stroke={YELLOW} strokeWidth="1" />
          <text x="80" y="38" fill={YELLOW} fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">$</text>
          <circle cx="120" cy="35" r="7" fill={INK} strokeWidth="1" style={strokeMint} />
          <text x="120" y="38" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold" style={fillMint}>€</text>
          <text x="100" y="24" fill="#E8F0E6" fontSize="6.5" fontFamily="monospace" textAnchor="middle">MULTI-CURRENCY B2B</text>
        </svg>
      </div>
    )
  }

  if (type === 'waste-mgmt') {
    return (
      <div className={wrap} aria-hidden="true" style={containerStyle}>
        <svg viewBox="0 0 200 80" className="w-full h-full">
          <polygon points="100,15 165,38 100,62 35,38" fill="#09120D" strokeWidth="1" style={strokeMint} />
          <rect x="75" y="28" width="30" height="14" rx="2" fill={INK} strokeWidth="1.2" style={{ stroke: BLUE }} />
          <circle cx="82" cy="45" r="3" style={fillMint} />
          <circle cx="98" cy="45" r="3" style={fillMint} />
          <circle cx="140" cy="28" r="4" fill="none" stroke={YELLOW} strokeWidth="1" />
          <circle cx="140" cy="28" r="1.5" fill={YELLOW} />
          <text x="100" y="23" fontSize="6.5" fontFamily="monospace" textAnchor="middle" style={fillMint}>WEIGHBRIDGE IOT METRICS</text>
        </svg>
      </div>
    )
  }

  return (
    <div className={wrap} aria-hidden="true" style={containerStyle}>
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <polygon points="100,5 135,18 100,32 65,18" fill="#0E1A13" strokeWidth="1" style={strokeMint} />
        <polygon points="65,18 100,32 100,68 65,54" fill="#050A07" strokeWidth="0.6" style={strokeMint} />
        <polygon points="100,32 135,18 135,54 100,68" fill="#09130D" strokeWidth="0.6" style={strokeMint} />
        <circle cx="82" cy="38" r="1.5" style={fillMint} />
        <circle cx="118" cy="38" r="1.5" style={{ fill: BLUE }} />
        <circle cx="82" cy="48" r="1.5" style={{ fill: BLUE }} />
        <circle cx="118" cy="48" r="1.5" fill={YELLOW} />
        <text x="100" y="75" fill="#E8F0E6" fontSize="6.5" fontFamily="monospace" textAnchor="middle">COMMERCIAL LEASE ENGINE</text>
      </svg>
    </div>
  )
}

function BentoTileCard({ tile, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={reduced ? {} : { y: -4, transition: { duration: 0.25 } }}
      initial={reduced ? {} : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={`relative rounded-[20px] p-6 sm:p-7 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 ${tile.gridSpan}`}
      style={{
        backgroundColor: PANEL_BG,
        borderColor: isHovered ? mint(75) : mint(22),
        boxShadow: isHovered
          ? `0 12px 36px rgba(0,0,0,0.45), 0 0 0 1px ${mint(20)}`
          : '0 12px 36px rgba(0,0,0,0.35)',
      }}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
            style={{ color: MINT, backgroundColor: mint(10), borderColor: mint(25) }}
          >
            {tile.category}
          </span>
          <span className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>
            {tile.techBadge}
          </span>
        </div>

        <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {tile.title}
        </h3>

        <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
          {tile.description}
        </p>

        <div className="my-3">
          {tile.isLarge ? <WorldMapExportGraphic /> : <TileIsometricGraphic type={tile.id} />}
        </div>

        <AnimatePresence>
          {isHovered && tile.extraDetail && (
            <motion.div
              initial={reduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 p-3 rounded-xl border text-xs font-sans leading-relaxed overflow-hidden transition-colors duration-300"
              style={{
                backgroundColor: 'var(--base)',
                borderColor: mint(20),
                color: 'var(--text-primary)',
              }}
            >
              <div className="font-mono text-[9.5px] uppercase tracking-wider mb-1 font-semibold" style={{ color: YELLOW }}>
                Architecture Specs
              </div>
              {tile.extraDetail}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: mint(12) }}>
        <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
          {isHovered ? 'Details Unlocked' : 'Explore Modules'}
        </span>
        <div
          className={`flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
          style={{ color: isHovered ? MINT : 'var(--text-muted)' }}
        >
          <span>Learn more</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  )
}

export default function BusinessSoftwareSection() {
  const tiles = BUSINESS_SOFTWARE.bentoTiles
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <section
      id="business-software"
      ref={ref}
      aria-labelledby="business-software-title"
      className="relative pt-8 pb-10 md:pt-12 md:pb-14 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--base)', color: 'var(--text-primary)' }}
    >
      {/* Circuit-style grid (matches hero) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, ${mint(10)} 1px, transparent 1px), linear-gradient(to bottom, ${mint(10)} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      {/* Soft green glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: mint(8) }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl sm:mb-16"
          initial={reduced ? {} : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4 border"
            style={{ color: MINT, backgroundColor: mint(8), borderColor: mint(30) }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: MINT }} />
            {BUSINESS_SOFTWARE.label}
          </div>
          <h2
            id="business-software-title"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {BUSINESS_SOFTWARE.title}
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {BUSINESS_SOFTWARE.description}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {tiles.map((tile, idx) => (
            <BentoTileCard key={tile.id} tile={tile} delay={idx * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}