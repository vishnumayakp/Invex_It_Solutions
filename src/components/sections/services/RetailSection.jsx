// import { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Layers, Zap, Boxes, Building2, CheckCircle2 } from 'lucide-react'
// import { RETAIL_SOLUTIONS } from '../../../data/services'
// import useReducedMotion from '../../../hooks/useReducedMotion'

// /** Shared fade-up helper */
// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
// })

// function FeatureIcon({ name, size = 20 }) {
//   switch (name) {
//     case 'Layers': return <Layers size={size} className="text-[#14F1D9]" />
//     case 'Zap': return <Zap size={size} className="text-[#FFB547]" />
//     case 'Boxes': return <Boxes size={size} className="text-[#14F1D9]" />
//     case 'Building2': return <Building2 size={size} className="text-[#FFB547]" />
//     default: return <Layers size={size} className="text-[#14F1D9]" />
//   }
// }

// function IsometricHypermarketImage() {
//   const reduced = useReducedMotion()
//   return (
//     <div
//       className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border p-4 sm:p-6 flex items-center justify-center select-none transition-colors duration-300"
//       aria-hidden="true"
//       style={{
//         backgroundColor: 'var(--bp-surface)',
//         borderColor: 'rgba(20,241,217,0.30)',
//         boxShadow: '0 16px 50px var(--bp-shadow)',
//       }}
//     >
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#14F1D9]/20 blur-[80px] pointer-events-none" />
//       <motion.div
//         animate={reduced ? {} : { y: [-5, 6, -5] }}
//         transition={reduced ? {} : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
//         className="relative w-full h-full flex items-center justify-center"
//       >
//         <svg viewBox="0 0 540 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//           <defs>
//             <linearGradient id="aisle-top" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#14213D" />
//               <stop offset="100%" stopColor="#0B1325" />
//             </linearGradient>
//             <linearGradient id="checkout-laser" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#14F1D9" />
//               <stop offset="100%" stopColor="#FFB547" />
//             </linearGradient>
//           </defs>
//           <path d="M 270,40 L 490,170 L 270,300 L 50,170 Z" fill="#070C1B" stroke="#14F1D9" strokeWidth="1.5" strokeOpacity="0.75" />
//           <path d="M 270,300 L 270,330 L 490,200 L 490,170 Z" fill="#040710" stroke="#14F1D9" strokeWidth="0.8" strokeOpacity="0.3" />
//           <path d="M 50,170 L 50,200 L 270,330 L 270,300 Z" fill="#060A14" stroke="#14F1D9" strokeWidth="0.8" strokeOpacity="0.3" />
//           {[
//             { x: 130, y: 150, label: 'AISLE 01 • DRY GOODS' },
//             { x: 175, y: 180, label: 'AISLE 02 • PERISHABLES' },
//             { x: 220, y: 210, label: 'AISLE 03 • ELECTRONICS' },
//           ].map((aisle, idx) => (
//             <g key={aisle.label} transform={`translate(${aisle.x}, ${aisle.y})`}>
//               <polygon points="0,-25 45,-1 0,23 -45,-1" fill="url(#aisle-top)" stroke="#14F1D9" strokeWidth="1" strokeOpacity="0.6" />
//               <polygon points="-45,-1 0,23 0,42 -45,18" fill="#091122" stroke="#14F1D9" strokeWidth="0.6" strokeOpacity="0.3" />
//               <polygon points="0,23 45,-1 45,18 0,42" fill="#0C172F" stroke="#14F1D9" strokeWidth="0.6" strokeOpacity="0.3" />
//               <circle cx="0" cy="-2" r="2.5" fill={idx === 1 ? '#FFB547' : '#14F1D9'} />
//             </g>
//           ))}
//           {[
//             { x: 340, y: 160, id: 'TILL-01', active: true },
//             { x: 385, y: 190, id: 'TILL-02', active: true },
//             { x: 430, y: 220, id: 'TILL-03', active: false },
//           ].map((pos) => (
//             <g key={pos.id} transform={`translate(${pos.x}, ${pos.y})`}>
//               <polygon points="0,-18 35,2 0,22 -35,2" fill="#0D162B" stroke="#14F1D9" strokeWidth="1" />
//               <polygon points="-35,2 0,22 0,38 -35,18" fill="#080E1C" stroke="#14F1D9" strokeWidth="0.6" opacity="0.5" />
//               <polygon points="0,22 35,2 35,18 0,38" fill="#0A1224" stroke="#14F1D9" strokeWidth="0.6" opacity="0.5" />
//               <rect x="-6" y="-30" width="12" height="15" rx="1.5" fill="#060B18" stroke={pos.active ? '#14F1D9' : '#8A93B2'} strokeWidth="1" />
//               <line x1="-3" y1="-23" x2="3" y2="-23" stroke={pos.active ? '#14F1D9' : '#8A93B2'} strokeWidth="1" />
//               {pos.active && !reduced && (
//                 <line x1="-12" y1="-8" x2="12" y2="-8" stroke="url(#checkout-laser)" strokeWidth="1.6">
//                   <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
//                 </line>
//               )}
//             </g>
//           ))}
//           <g transform="translate(270, 75)">
//             <rect x="-85" y="-22" width="170" height="44" rx="10" fill="#091224" fillOpacity="0.85" stroke="#14F1D9" strokeWidth="1.2" />
//             <circle cx="-68" cy="0" r="3.5" fill="#14F1D9" />
//             <text x="-56" y="-3" fill="#E8ECF8" fontSize="8.5" fontFamily="monospace" fontWeight="600">CENTRAL RETAIL ERP</text>
//             <text x="-56" y="10" fill="#14F1D9" fontSize="8" fontFamily="monospace">Real-Time Omnichannel Sync</text>
//           </g>
//         </svg>
//       </motion.div>
//     </div>
//   )
// }

// function FlowDiagram() {
//   const steps = RETAIL_SOLUTIONS.flowSteps
//   const reduced = useReducedMotion()
//   return (
//     <div
//       className="w-full mt-10 p-6 sm:p-8 rounded-[20px] backdrop-blur-xl border transition-colors duration-300"
//       style={{
//         backgroundColor: 'var(--bp-surface)',
//         borderColor: 'rgba(20,241,217,0.20)',
//         boxShadow: '0 10px 35px var(--bp-shadow)',
//       }}
//     >
//       <div className="flex items-center justify-between gap-3 mb-6">
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-[#14F1D9] shadow-[0_0_8px_#14F1D9]" />
//           <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-sm sm:text-base uppercase tracking-wider" style={{ color: 'var(--bp-text)' }}>
//             Operational Lifecycle Flow
//           </h4>
//         </div>
//         <span className="font-mono text-[10.5px] uppercase tracking-widest text-[#14F1D9]">
//           Continuous Integration Pipeline
//         </span>
//       </div>
//       <div className="relative">
//         <div className="hidden sm:block absolute top-6 left-8 right-8 h-[2px] z-0" style={{ backgroundColor: 'rgba(20,241,217,0.20)' }} aria-hidden="true">
//           {!reduced && (
//             <motion.div
//               className="absolute -top-[3px] w-2 h-2 rounded-full bg-[#14F1D9] shadow-[0_0_12px_#14F1D9]"
//               animate={{ left: ['0%', '100%'] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
//             />
//           )}
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10">
//           {steps.map((step, idx) => (
//             <div
//               key={step.id}
//               className="group p-3.5 sm:p-4 rounded-xl border hover:border-[#14F1D9]/60 transition-all duration-300 flex flex-col justify-between"
//               style={{
//                 backgroundColor: 'var(--bp-card-inner)',
//                 borderColor: 'rgba(20,241,217,0.20)',
//               }}
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <span
//                   className="w-5 h-5 rounded-full border flex items-center justify-center font-mono text-[10px] text-[#14F1D9] font-bold"
//                   style={{ backgroundColor: 'var(--bp-base)', borderColor: 'rgba(20,241,217,0.40)' }}
//                 >
//                   {idx + 1}
//                 </span>
//                 <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: 'var(--bp-muted)' }}>Stage</span>
//               </div>
//               <div>
//                 <div className="font-['Space_Grotesk',sans-serif] font-bold text-sm sm:text-base mb-0.5" style={{ color: 'var(--bp-text)' }}>
//                   {step.label}
//                 </div>
//                 <div className="font-sans text-[11px] leading-tight" style={{ color: 'var(--bp-muted)' }}>
//                   {step.detail}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function RetailSection() {
//   const reduced = useReducedMotion()
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-80px' })

//   return (
//     <section
//       id="retail"
//       ref={ref}
//       aria-labelledby="retail-title"
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
//           {...(reduced ? {} : fadeUp(0))}
//           animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//           className="max-w-3xl mb-12 sm:mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#14F1D9] mb-4 border" style={{ backgroundColor: 'var(--bp-card-inner)', borderColor: 'rgba(20,241,217,0.30)' }}>
//             <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9]" />
//             {RETAIL_SOLUTIONS.label}
//           </div>
//           <h2 id="retail-title" className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4" style={{ color: 'var(--bp-text)' }}>
//             {RETAIL_SOLUTIONS.title}
//           </h2>
//           <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: 'var(--bp-muted)' }}>
//             {RETAIL_SOLUTIONS.description}
//           </p>
//         </motion.div>

//         {/* Two-column layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
//           <motion.div
//             className="lg:col-span-5 flex flex-col justify-center"
//             initial={reduced ? {} : { opacity: 0, x: -40 }}
//             animate={inView ? { opacity: 1, x: 0 } : (reduced ? {} : { opacity: 0, x: -40 })}
//             transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//           >
//             <IsometricHypermarketImage />
//           </motion.div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
//             {RETAIL_SOLUTIONS.features.map((feature, idx) => (
//               <motion.div
//                 key={feature.id}
//                 whileHover={reduced ? {} : { y: -4, transition: { duration: 0.25 } }}
//                 initial={reduced ? {} : { opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + idx * 0.08 }}
//                 className="relative rounded-[20px] p-6 sm:p-7 backdrop-blur-xl border hover:border-[#14F1D9]/60 flex flex-col justify-between transition-colors duration-300"
//                 style={{
//                   backgroundColor: 'var(--bp-card)',
//                   borderColor: 'rgba(20,241,217,0.20)',
//                   boxShadow: '0 10px 30px var(--bp-shadow)',
//                 }}
//               >
//                 <div>
//                   <div className="flex items-center justify-between mb-5">
//                     <div className="w-11 h-11 rounded-xl border flex items-center justify-center shadow-sm shadow-[rgba(20,241,217,0.2)]" style={{ backgroundColor: 'var(--bp-card-inner)', borderColor: 'rgba(20,241,217,0.30)' }}>
//                       <FeatureIcon name={feature.icon} size={22} />
//                     </div>
//                     <span className="font-mono text-[10px] uppercase tracking-wider text-[#14F1D9] px-2.5 py-0.5 rounded-full bg-[#14F1D9]/10 border border-[#14F1D9]/25">
//                       {feature.tag}
//                     </span>
//                   </div>
//                   <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-xl mb-2.5 tracking-tight" style={{ color: 'var(--bp-text)' }}>
//                     {feature.title}
//                   </h3>
//                   <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--bp-muted)' }}>
//                     {feature.description}
//                   </p>
//                 </div>
//                 <div className="mt-5 pt-4 border-t border-[#14F1D9]/10 flex items-center gap-1.5 text-xs font-mono text-[#14F1D9]">
//                   <CheckCircle2 size={14} />
//                   <span>Production Ready</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Flow Diagram */}
//         <motion.div
//           initial={reduced ? {} : { opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
//         >
//           <FlowDiagram />
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Zap, Boxes, Building2, CheckCircle2 } from 'lucide-react'
import { RETAIL_SOLUTIONS } from '../../../data/services'
import useReducedMotion from '../../../hooks/useReducedMotion'
import retail from '../../../assets/images/bussiness.png'

/* ── Home-page palette (green + black, yellow used sparingly) ── */
const MINT = 'var(--accent-mint, #BFE0B8)'
const BLUE = 'var(--accent-blue, #6E8DA6)'
const YELLOW = '#E8C547' // small highlights only
const INK = '#050806' // near-black with a green tint
const TEXT_SVG = '#E8F0E6'
const MUTED_SVG = '#8FA39A'
const mint = (pct) => `color-mix(in srgb, ${MINT} ${pct}%, transparent)`

const PANEL_BG = 'color-mix(in srgb, var(--base, #050806) 88%, #BFE0B8 4%)'
const INNER_BG = 'color-mix(in srgb, var(--base, #050806) 92%, #BFE0B8 6%)'

/** Shared fade-up helper */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

function FeatureIcon({ name, size = 20 }) {
  switch (name) {
    case 'Layers': return <Layers size={size} style={{ color: MINT }} />
    case 'Zap': return <Zap size={size} style={{ color: YELLOW }} />
    case 'Boxes': return <Boxes size={size} style={{ color: MINT }} />
    case 'Building2': return <Building2 size={size} style={{ color: BLUE }} />
    default: return <Layers size={size} style={{ color: MINT }} />
  }
}

function RetailImage() {
  const reduced = useReducedMotion()
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border transition-colors duration-300"
      style={{
        backgroundColor: PANEL_BG,
        borderColor: mint(30),
        boxShadow: '0 16px 50px rgba(0,0,0,0.4)',
      }}
    >
      {/* soft mint glow behind the image */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
        style={{ backgroundColor: mint(16) }}
        aria-hidden="true"
      />
      <motion.img
        src={retail}
        alt="Retail and hypermarket management solution preview"
        loading="lazy"
        decoding="async"
        draggable={false}
        className="relative w-full h-full object-cover select-none"
        animate={reduced ? {} : { y: [-5, 6, -5] }}
        transition={reduced ? {} : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function FlowDiagram() {
  const steps = RETAIL_SOLUTIONS.flowSteps
  const reduced = useReducedMotion()
  return (
    <div
      className="w-full mt-10 p-6 sm:p-8 rounded-[20px] backdrop-blur-xl border transition-colors duration-300"
      style={{
        backgroundColor: PANEL_BG,
        borderColor: mint(20),
        boxShadow: '0 10px 35px rgba(0,0,0,0.35)',
      }}
    >
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: MINT, boxShadow: `0 0 8px ${MINT}` }} />
          <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-sm sm:text-base uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
            Operational Lifecycle Flow
          </h4>
        </div>
        <span className="font-mono text-[10.5px] uppercase tracking-widest" style={{ color: MINT }}>
          Continuous Integration Pipeline
        </span>
      </div>
      <div className="relative">
        <div className="hidden sm:block absolute top-6 left-8 right-8 h-[2px] z-0" style={{ backgroundColor: mint(20) }} aria-hidden="true">
          {!reduced && (
            <motion.div
              className="absolute -top-[3px] w-2 h-2 rounded-full"
              style={{ backgroundColor: MINT, boxShadow: `0 0 12px ${MINT}` }}
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="group p-3.5 sm:p-4 rounded-xl border hover:border-[color-mix(in_srgb,var(--accent-mint)_60%,transparent)] transition-all duration-300 flex flex-col justify-between"
              style={{
                backgroundColor: INNER_BG,
                borderColor: mint(20),
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="w-5 h-5 rounded-full border flex items-center justify-center font-mono text-[10px] font-bold"
                  style={{ backgroundColor: 'var(--base)', borderColor: mint(40), color: MINT }}
                >
                  {idx + 1}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Stage</span>
              </div>
              <div>
                <div className="font-['Space_Grotesk',sans-serif] font-bold text-sm sm:text-base mb-0.5" style={{ color: 'var(--text-primary)' }}>
                  {step.label}
                </div>
                <div className="font-sans text-[11px] leading-tight" style={{ color: 'var(--text-muted)' }}>
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RetailSection() {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="retail"
      ref={ref}
      aria-labelledby="retail-title"
      className="relative pt-8 pb-10 md:pt-12 md:pb-14 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--base)', color: 'var(--text-primary)' }}
    >
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, ${mint(10)} 1px, transparent 1px), linear-gradient(to bottom, ${mint(10)} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          {...(reduced ? {} : fadeUp(0))}
          animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4 border"
            style={{ color: MINT, backgroundColor: INNER_BG, borderColor: mint(30) }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: MINT }} />
            {RETAIL_SOLUTIONS.label}
          </div>
          <h2 id="retail-title" className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {RETAIL_SOLUTIONS.title}
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {RETAIL_SOLUTIONS.description}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial={reduced ? {} : { opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : (reduced ? {} : { opacity: 0, x: -40 })}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <RetailImage />
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
            {RETAIL_SOLUTIONS.features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                whileHover={reduced ? {} : { y: -4, transition: { duration: 0.25 } }}
                initial={reduced ? {} : { opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + idx * 0.08 }}
                className="relative rounded-[20px] p-6 sm:p-7 backdrop-blur-xl border hover:border-[color-mix(in_srgb,var(--accent-mint)_60%,transparent)] flex flex-col justify-between transition-colors duration-300"
                style={{
                  backgroundColor: PANEL_BG,
                  borderColor: mint(20),
                  boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl border flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: INNER_BG, borderColor: mint(30), boxShadow: `0 1px 2px ${mint(20)}` }}
                    >
                      <FeatureIcon name={feature.icon} size={22} />
                    </div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                      style={{ color: MINT, backgroundColor: mint(10), borderColor: mint(25) }}
                    >
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-xl mb-2.5 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {feature.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {feature.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t flex items-center gap-1.5 text-xs font-mono" style={{ borderColor: mint(10), color: MINT }}>
                  <CheckCircle2 size={14} />
                  <span>Production Ready</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}