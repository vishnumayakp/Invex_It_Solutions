// import { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Ticket, Users, Clock, ShieldCheck, Fingerprint, Activity } from 'lucide-react'
// import { ENTERPRISE_MANAGEMENT } from '../../../data/services'
// import useReducedMotion from '../../../hooks/useReducedMotion'

// function QueueManagementVisual() {
//   const reduced = useReducedMotion()
//   return (
//     <div
//       className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border p-4 sm:p-6 flex items-center justify-center select-none transition-colors duration-300"
//       aria-hidden="true"
//       style={{ backgroundColor: 'var(--bp-card)', borderColor: 'rgba(20,241,217,0.30)', boxShadow: '0 16px 50px var(--bp-shadow)' }}
//     >
//       <div className="absolute inset-0 bg-radial from-[#14F1D9]/15 to-transparent blur-2xl pointer-events-none" />
//       <motion.div
//         animate={reduced ? {} : { y: [-4, 6, -4] }}
//         transition={reduced ? {} : { duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
//         className="relative w-full h-full flex items-center justify-center"
//       >
//         <svg viewBox="0 0 520 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//           <defs>
//             <linearGradient id="queue-screen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#142340" />
//               <stop offset="100%" stopColor="#0B1322" />
//             </linearGradient>
//           </defs>
//           <polygon points="260,60 470,185 260,310 50,185" fill="#070C1A" stroke="#14F1D9" strokeWidth="1.2" strokeOpacity="0.7" />
//           <g transform="translate(140, 200)">
//             <polygon points="0,-40 30,-22 0,-5 -30,-22" fill="#0F1B34" stroke="#14F1D9" strokeWidth="1" />
//             <polygon points="-30,-22 0,-5 0,55 -30,37" fill="#080E1D" stroke="#14F1D9" strokeWidth="0.8" />
//             <polygon points="0,-5 30,-22 30,37 0,55" fill="#0B1428" stroke="#14F1D9" strokeWidth="0.8" />
//             <polygon points="-18,-35 18,-45 18,-15 -18,-5" fill="#070C18" stroke="#FFB547" strokeWidth="1.2" />
//             <text x="0" y="-18" fill="#FFB547" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TOUCH KIOSK</text>
//             <text x="0" y="-8" fill="#14F1D9" fontSize="6.5" fontFamily="monospace" textAnchor="middle">GET TICKET</text>
//           </g>
//           <g transform="translate(320, 115)">
//             <rect x="-95" y="-45" width="190" height="90" rx="12" fill="url(#queue-screen-grad)" stroke="#14F1D9" strokeWidth="1.4" />
//             <text x="-80" y="-25" fill="#8A93B2" fontSize="7.5" fontFamily="monospace">HALL COUNTER DISPLAY</text>
//             <line x1="-80" y1="-18" x2="80" y2="-18" stroke="#14F1D9" strokeWidth="0.8" opacity="0.4" />
//             <text x="-80" y="2" fill="#E8ECF8" fontSize="13" fontFamily="monospace" fontWeight="bold">TICKET A-104</text>
//             <rect x="25" y="-10" width="55" height="18" rx="4" fill="#14F1D9" fillOpacity="0.15" stroke="#14F1D9" strokeWidth="0.8" />
//             <text x="52" y="3" fill="#14F1D9" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">COUNTER 01</text>
//             <text x="-80" y="24" fill="#E8ECF8" fontSize="13" fontFamily="monospace" fontWeight="bold">TICKET B-082</text>
//             <rect x="25" y="12" width="55" height="18" rx="4" fill="#FFB547" fillOpacity="0.15" stroke="#FFB547" strokeWidth="0.8" />
//             <text x="52" y="25" fill="#FFB547" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">COUNTER 03</text>
//           </g>
//           <g transform="translate(370, 245)">
//             <rect x="-65" y="-35" width="130" height="70" rx="12" fill="#091122" stroke="#FFB547" strokeWidth="1.2" />
//             <circle cx="-48" cy="-18" r="4" fill="#FFB547" />
//             <text x="-38" y="-15" fill="#E8ECF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Mobile Ticket Sync</text>
//             <text x="-48" y="5" fill="#8A93B2" fontSize="7" fontFamily="sans-serif">Your turn in approx 4 mins</text>
//             <rect x="-48" y="14" width="96" height="10" rx="3" fill="#14F1D9" fillOpacity="0.2" />
//             <text x="0" y="22" fill="#14F1D9" fontSize="6.5" fontFamily="monospace" textAnchor="middle">EST. WAIT: 3m 42s</text>
//           </g>
//           <path d="M 170,175 Q 240,140 280,160" fill="none" stroke="#14F1D9" strokeWidth="1.2" strokeDasharray="3 3" />
//           <path d="M 330,165 Q 350,200 370,215" fill="none" stroke="#FFB547" strokeWidth="1.2" strokeDasharray="3 3" />
//         </svg>
//       </motion.div>
//     </div>
//   )
// }

// function BiometricPayrollVisual() {
//   const reduced = useReducedMotion()
//   return (
//     <div
//       className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border p-4 sm:p-6 flex items-center justify-center select-none transition-colors duration-300"
//       aria-hidden="true"
//       style={{ backgroundColor: 'var(--bp-card)', borderColor: 'rgba(20,241,217,0.30)', boxShadow: '0 16px 50px var(--bp-shadow)' }}
//     >
//       <div className="absolute inset-0 bg-radial from-[#14F1D9]/15 to-transparent blur-2xl pointer-events-none" />
//       <motion.div
//         animate={reduced ? {} : { y: [-5, 5, -5] }}
//         transition={reduced ? {} : { duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
//         className="relative w-full h-full flex items-center justify-center"
//       >
//         <svg viewBox="0 0 520 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//           <defs>
//             <linearGradient id="bio-scan-line" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#14F1D9" stopOpacity="0" />
//               <stop offset="50%" stopColor="#14F1D9" stopOpacity="0.9" />
//               <stop offset="100%" stopColor="#14F1D9" stopOpacity="0" />
//             </linearGradient>
//           </defs>
//           <polygon points="260,50 480,180 260,310 40,180" fill="#070C1A" stroke="#14F1D9" strokeWidth="1.2" strokeOpacity="0.75" />
//           <g transform="translate(150, 185)">
//             <polygon points="0,-45 35,-25 0,-5 -35,-25" fill="#0E1932" stroke="#14F1D9" strokeWidth="1" />
//             <polygon points="-35,-25 0,-5 0,65 -35,45" fill="#070D1B" stroke="#14F1D9" strokeWidth="0.8" />
//             <polygon points="0,-5 35,-25 35,45 0,65" fill="#0B1327" stroke="#14F1D9" strokeWidth="0.8" />
//             <g transform="translate(0, -35)">
//               {!reduced && (
//                 <circle cx="0" cy="0" r="26" fill="none" stroke="#14F1D9" strokeWidth="0.8" opacity="0.6">
//                   <animate attributeName="r" values="18;34;18" dur="2.4s" repeatCount="indefinite" />
//                   <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" />
//                 </circle>
//               )}
//               <rect x="-18" y="-22" width="36" height="44" rx="8" fill="#060B18" stroke="#14F1D9" strokeWidth="1.5" />
//               <circle cx="0" cy="-2" r="12" fill="#0B1B36" stroke="#14F1D9" strokeWidth="1" />
//               <path d="M -6,-5 Q 0,-9 6,-5 M -8,0 Q 0,-5 8,0 M -7,5 Q 0,1 7,5" fill="none" stroke="#14F1D9" strokeWidth="1" strokeLinecap="round" />
//               <circle cx="0" cy="14" r="2.5" fill="#14F1D9" />
//             </g>
//             <text x="0" y="55" fill="#14F1D9" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BIOMETRIC TERMINAL</text>
//           </g>
//           <g transform="translate(350, 155)">
//             <rect x="-105" y="-65" width="210" height="130" rx="14" fill="#081022" stroke="#14F1D9" strokeWidth="1.4" />
//             <text x="-90" y="-42" fill="#E8ECF8" fontSize="8.5" fontFamily="monospace" fontWeight="bold">ENTERPRISE HR &amp; PAYROLL</text>
//             <line x1="-90" y1="-34" x2="90" y2="-34" stroke="#14F1D9" strokeWidth="0.8" opacity="0.3" />
//             <text x="-90" y="-18" fill="#8A93B2" fontSize="7.5" fontFamily="monospace">SYNC STATUS</text>
//             <text x="-90" y="-4" fill="#14F1D9" fontSize="12" fontFamily="monospace" fontWeight="bold">100% CAPTURED</text>
//             <text x="15" y="-18" fill="#8A93B2" fontSize="7.5" fontFamily="monospace">OVERTIME ENGINE</text>
//             <text x="15" y="-4" fill="#FFB547" fontSize="12" fontFamily="monospace" fontWeight="bold">AUTO CALCULATED</text>
//             <g transform="translate(-90, 12)">
//               <rect x="0" y="0" width="180" height="14" rx="3" fill="#0E1933" />
//               <text x="8" y="10" fill="#E8ECF8" fontSize="7" fontFamily="monospace">EMP #2841 • Shift A • 08:02 IN</text>
//               <circle cx="168" cy="7" r="3" fill="#14F1D9" />
//               <rect x="0" y="18" width="180" height="14" rx="3" fill="#0B132A" />
//               <text x="8" y="28" fill="#E8ECF8" fontSize="7" fontFamily="monospace">EMP #1905 • Shift B • 08:14 IN</text>
//               <circle cx="168" cy="25" r="3" fill="#14F1D9" />
//             </g>
//             <rect x="-90" y="48" width="180" height="10" rx="2" fill="#FFB547" fillOpacity="0.15" />
//             <text x="0" y="55.5" fill="#FFB547" fontSize="6.5" fontFamily="monospace" textAnchor="middle">DIRECT WAGE PROTECTION (WPS) EXPORT READY</text>
//           </g>
//           <path d="M 185,165 Q 240,210 270,185 Q 295,160 350,165" fill="none" stroke="#14F1D9" strokeWidth="1.5" strokeDasharray="4 4" />
//         </svg>
//       </motion.div>
//     </div>
//   )
// }

// export default function EnterpriseManagementSection() {
//   const rows = ENTERPRISE_MANAGEMENT.rows
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-80px' })
//   const reduced = useReducedMotion()

//   return (
//     <section
//       id="enterprise"
//       ref={ref}
//       aria-labelledby="enterprise-title"
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

//       <div className="container-wide relative z-10">
//         {/* Header */}
//         <motion.div
//           className="max-w-3xl mb-16 sm:mb-20"
//           initial={reduced ? {} : { opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#14F1D9] mb-4 border" style={{ backgroundColor: 'var(--bp-card-inner)', borderColor: 'rgba(20,241,217,0.30)' }}>
//             <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9]" />
//             {ENTERPRISE_MANAGEMENT.label}
//           </div>
//           <h2 id="enterprise-title" className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4" style={{ color: 'var(--bp-text)' }}>
//             {ENTERPRISE_MANAGEMENT.title}
//           </h2>
//           <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: 'var(--bp-muted)' }}>
//             {ENTERPRISE_MANAGEMENT.description}
//           </p>
//         </motion.div>

//         {/* Row A: Queue (image left / text right) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-28">
//           <motion.div
//             className="lg:col-span-6"
//             initial={reduced ? {} : { opacity: 0, x: -40 }}
//             animate={inView ? { opacity: 1, x: 0 } : (reduced ? {} : { opacity: 0, x: -40 })}
//             transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//           >
//             <QueueManagementVisual />
//           </motion.div>

//           <motion.div
//             className="lg:col-span-6"
//             initial={reduced ? {} : { opacity: 0, x: 40 }}
//             animate={inView ? { opacity: 1, x: 0 } : (reduced ? {} : { opacity: 0, x: 40 })}
//             transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//           >
//             <span className="inline-block font-mono text-xs uppercase tracking-wider text-[#14F1D9] mb-2 px-3 py-1 rounded-full bg-[#14F1D9]/10 border border-[#14F1D9]/25">
//               {rows[0].badge}
//             </span>
//             <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-2xl sm:text-3xl mb-2 tracking-tight" style={{ color: 'var(--bp-text)' }}>
//               {rows[0].title}
//             </h3>
//             <p className="font-sans text-sm sm:text-base text-[#14F1D9] mb-4 font-medium">{rows[0].subtitle}</p>
//             <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: 'var(--bp-muted)' }}>{rows[0].description}</p>

//             <div className="space-y-4">
//               {rows[0].highlights.map((h, i) => (
//                 <div
//                   key={i}
//                   className="p-4 rounded-xl border flex items-start gap-3.5 transition-colors duration-300"
//                   style={{ backgroundColor: 'var(--bp-card)', borderColor: 'rgba(20,241,217,0.20)' }}
//                 >
//                   <div className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 text-[#14F1D9] mt-0.5" style={{ backgroundColor: 'var(--bp-card-inner)', borderColor: 'rgba(20,241,217,0.40)' }}>
//                     {i === 0 && <Ticket size={16} />}
//                     {i === 1 && <Users size={16} />}
//                     {i === 2 && <Clock size={16} />}
//                   </div>
//                   <div>
//                     <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-sm mb-0.5" style={{ color: 'var(--bp-text)' }}>{h.title}</h4>
//                     <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--bp-muted)' }}>{h.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Row B: Biometric HR (text left / image right) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           <motion.div
//             className="lg:col-span-6 order-2 lg:order-1"
//             initial={reduced ? {} : { opacity: 0, x: -40 }}
//             animate={inView ? { opacity: 1, x: 0 } : (reduced ? {} : { opacity: 0, x: -40 })}
//             transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
//           >
//             <span className="inline-block font-mono text-xs uppercase tracking-wider text-[#FFB547] mb-2 px-3 py-1 rounded-full bg-[#FFB547]/10 border border-[#FFB547]/25">
//               {rows[1].badge}
//             </span>
//             <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-2xl sm:text-3xl mb-2 tracking-tight" style={{ color: 'var(--bp-text)' }}>
//               {rows[1].title}
//             </h3>
//             <p className="font-sans text-sm sm:text-base text-[#FFB547] mb-4 font-medium">{rows[1].subtitle}</p>
//             <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: 'var(--bp-muted)' }}>{rows[1].description}</p>

//             <div className="space-y-4">
//               {rows[1].highlights.map((h, i) => (
//                 <div
//                   key={i}
//                   className="p-4 rounded-xl border flex items-start gap-3.5 transition-colors duration-300"
//                   style={{ backgroundColor: 'var(--bp-card)', borderColor: 'rgba(255,181,71,0.20)' }}
//                 >
//                   <div className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 text-[#FFB547] mt-0.5" style={{ backgroundColor: 'var(--bp-card-inner)', borderColor: 'rgba(255,181,71,0.40)' }}>
//                     {i === 0 && <Fingerprint size={16} />}
//                     {i === 1 && <Activity size={16} />}
//                     {i === 2 && <ShieldCheck size={16} />}
//                   </div>
//                   <div>
//                     <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-sm mb-0.5" style={{ color: 'var(--bp-text)' }}>{h.title}</h4>
//                     <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--bp-muted)' }}>{h.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             className="lg:col-span-6 order-1 lg:order-2"
//             initial={reduced ? {} : { opacity: 0, x: 40 }}
//             animate={inView ? { opacity: 1, x: 0 } : (reduced ? {} : { opacity: 0, x: 40 })}
//             transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
//           >
//             <BiometricPayrollVisual />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Ticket, Users, Clock, ShieldCheck, Fingerprint, Activity } from 'lucide-react'
import { ENTERPRISE_MANAGEMENT } from '../../../data/services'
import useReducedMotion from '../../../hooks/useReducedMotion'
import payrollImg from '../../../assets/images/hr.png'
import queueImg from '../../../assets/images/queue.png'


/* helper: translucent version of a theme colour */
const tint = (cssVar, pct) =>
  `color-mix(in srgb, var(${cssVar}) ${pct}%, transparent)`

/* ── SVG palette (all derived from Hero tokens, so it follows light/dark) ── */
const MINT = 'var(--accent-mint)'
const BLUE = 'var(--accent-blue)'
const BASE = 'var(--base)'
const TXT = 'var(--text-primary)'
const MUTED = 'var(--text-muted)'
const surface = (pct) => `color-mix(in srgb, var(--accent-blue) ${pct}%, var(--base))`

/* ── Shared frame for both illustrations ── */
function VisualFrame({ accent, floatY, duration, children }) {
  const reduced = useReducedMotion()
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border select-none transition-colors duration-300"
      style={{
        backgroundColor: tint('--base', 55),
        borderColor: tint(accent, 35),
        boxShadow: `0 16px 50px rgba(0,0,0,0.25), 0 0 40px ${tint(accent, 12)}`,
      }}
    >
      <motion.div
        animate={reduced ? {} : { y: floatY }}
        transition={reduced ? {} : { duration, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full"
      >
        {children}
      </motion.div>

      {/* subtle accent tint over the image, matches the theme */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${tint(accent, 14)}, transparent 50%)` }}
      />
    </div>
  )
}

function QueueManagementVisual() {
  return (
    <VisualFrame accent="--accent-mint" floatY={[-4, 6, -4]} duration={5.8}>
      <img
        src={queueImg}
        alt="Queue management system with kiosk and counter display"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </VisualFrame>
  )
}

function BiometricPayrollVisual() {
  return (
    <VisualFrame accent="--accent-blue" floatY={[-5, 5, -5]} duration={6.2}>
      <img
        src={payrollImg}
        alt="Biometric attendance terminal with HR and payroll dashboard"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </VisualFrame>
  )
}
/* ── One text column (badge, title, subtitle, description, highlights) ── */
function RowContent({ row, accent, icons }) {
  return (
    <>
      <span
        className="inline-block font-mono text-xs uppercase tracking-wider mb-2 px-3 py-1 rounded-full border"
        style={{
          color: `var(${accent})`,
          backgroundColor: tint(accent, 10),
          borderColor: tint(accent, 30),
        }}
      >
        {row.badge}
      </span>
      <h3
        className="font-display font-bold text-2xl sm:text-3xl mb-2 tracking-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {row.title}
      </h3>
      <p
        className="text-sm sm:text-base mb-4 font-medium"
        style={{ color: `var(${accent})` }}
      >
        {row.subtitle}
      </p>
      <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
        {row.description}
      </p>

      <div className="space-y-4">
        {row.highlights.map((h, i) => {
          const Icon = icons[i]
          return (
            <div
              key={i}
              className="p-4 rounded-xl border flex items-start gap-3.5 backdrop-blur-xl transition-colors duration-300"
              style={{
                backgroundColor: tint('--base', 55),
                borderColor: tint(accent, 25),
              }}
            >
              <div
                className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  color: `var(${accent})`,
                  backgroundColor: tint(accent, 10),
                  borderColor: tint(accent, 40),
                }}
              >
                {Icon && <Icon size={16} />}
              </div>
              <div>
                <h4
                  className="font-display font-bold text-sm mb-0.5"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {h.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {h.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default function EnterpriseManagementSection() {
  const rows = ENTERPRISE_MANAGEMENT.rows
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  /* Hero-style blur-in; x = 0 gives a plain fade-up */
  const reveal = (duration, delay = 0, x = 0, y = 30) => ({
    initial: reduced ? {} : { opacity: 0, x, y: x ? 0 : y, filter: 'blur(10px)' },
    animate: inView
      ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }
      : reduced ? {} : { opacity: 0, x, y: x ? 0 : y, filter: 'blur(10px)' },
    transition: reduced
      ? { duration: 0 }
      : { duration, delay, ease: [0.22, 1, 0.36, 1] },
  })

  /* highlight the last word of the title with the Hero gradient */
  const titleWords = ENTERPRISE_MANAGEMENT.title.split(' ')
  const lastWord = titleWords.pop()

  return (
    <section
      id="enterprise"
      ref={ref}
      aria-labelledby="enterprise-title"
      className="relative pt-8 md:pt-12 lg:pt-16 pb-10 md:pb-14 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--base)', color: 'var(--text-primary)' }}
    >
      {/* Circuit-style grid (blue accent) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, ${tint('--accent-blue', 18)} 1px, transparent 1px), linear-gradient(to bottom, ${tint('--accent-blue', 18)} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Edge fades, same as Hero */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--base)] via-transparent to-[var(--base)] opacity-60" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div className="max-w-3xl mb-16 sm:mb-20" {...reveal(0.85)}>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4 border"
            style={{
              color: 'var(--accent-mint)',
              backgroundColor: tint('--accent-mint', 8),
              borderColor: tint('--accent-mint', 40),
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
            {ENTERPRISE_MANAGEMENT.label}
          </div>
          <h2
            id="enterprise-title"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {titleWords.join(' ')} <span className="brain-gradient">{lastWord}</span>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed font-normal"
            style={{ color: 'var(--text-muted)' }}
          >
            {ENTERPRISE_MANAGEMENT.description}
          </p>
        </motion.div>

        {/* Row A: Queue (image left / text right), mint accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-28">
          <motion.div className="lg:col-span-6" {...reveal(0.85, 0.1, -90)}>
            <QueueManagementVisual />
          </motion.div>

          <motion.div className="lg:col-span-6" {...reveal(0.85, 0.2, 90)}>
            <RowContent row={rows[0]} accent="--accent-mint" icons={[Ticket, Users, Clock]} />
          </motion.div>
        </div>

        {/* Row B: Biometric HR (text left / image right), blue accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div className="lg:col-span-6 order-2 lg:order-1" {...reveal(0.85, 0.3, -90)}>
            <RowContent row={rows[1]} accent="--accent-blue" icons={[Fingerprint, Activity, ShieldCheck]} />
          </motion.div>

          <motion.div className="lg:col-span-6 order-1 lg:order-2" {...reveal(0.85, 0.4, 90)}>
            <BiometricPayrollVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}