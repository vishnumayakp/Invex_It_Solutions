// import { useState, useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Server, Code, Database } from 'lucide-react'
// import { TECH_STACK } from '../../../data/services'
// import useReducedMotion from '../../../hooks/useReducedMotion'

// export default function TechStackSection() {
//   const [hoveredTech, setHoveredTech] = useState(null)
//   const reduced = useReducedMotion()
//   const categories = TECH_STACK.categories
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-80px' })

//   return (
//     <section
//       id="tech"
//       ref={ref}
//       aria-labelledby="tech-title"
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

//       {/* Orbit rings background */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20" aria-hidden="true">
//         <svg viewBox="0 0 400 400" className="w-full h-full">
//           <circle cx="200" cy="200" r="180" fill="none" stroke="#14F1D9" strokeWidth="1" strokeDasharray="6 6" />
//           <circle cx="200" cy="200" r="130" fill="none" stroke="#FFB547" strokeWidth="0.8" strokeDasharray="4 4" />
//           <polygon points="200,60 321,130 321,270 200,340 79,270 79,130" fill="none" stroke="#14F1D9" strokeWidth="0.8" opacity="0.4" />
//         </svg>
//       </div>

//       <div className="container-wide relative z-10">
//         {/* Header */}
//         <motion.div
//           className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
//           initial={reduced ? {} : { opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#14F1D9] mb-4 border" style={{ backgroundColor: 'var(--bp-card-inner)', borderColor: 'rgba(20,241,217,0.30)' }}>
//             <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9]" />
//             {TECH_STACK.label}
//           </div>
//           <h2 id="tech-title" className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4" style={{ color: 'var(--bp-text)' }}>
//             {TECH_STACK.title}
//           </h2>
//           <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: 'var(--bp-muted)' }}>
//             {TECH_STACK.description}
//           </p>
//         </motion.div>

//         {/* 3 Architecture Tiers */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
//           {categories.map((category, catIdx) => (
//             <motion.div
//               key={category.group}
//               initial={reduced ? {} : { opacity: 0, y: 35 }}
//               animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 35 })}
//               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: catIdx * 0.1 }}
//               className="rounded-[22px] p-6 sm:p-8 backdrop-blur-xl border flex flex-col justify-between transition-colors duration-300"
//               style={{
//                 backgroundColor: 'var(--bp-card)',
//                 borderColor: 'rgba(20,241,217,0.20)',
//                 boxShadow: '0 12px 40px var(--bp-shadow)',
//               }}
//             >
//               <div>
//                 {/* Group Header */}
//                 <div className="flex items-center gap-2.5 mb-6 pb-4 border-b" style={{ borderColor: 'rgba(20,241,217,0.15)' }}>
//                   <div
//                     className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-colors duration-300"
//                     style={{ backgroundColor: `${category.color}15`, borderColor: `${category.color}40`, color: category.color }}
//                   >
//                     {catIdx === 0 && <Server size={18} />}
//                     {catIdx === 1 && <Code size={18} />}
//                     {catIdx === 2 && <Database size={18} />}
//                   </div>
//                   <div>
//                     <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-lg" style={{ color: 'var(--bp-text)' }}>
//                       {category.group}
//                     </h3>
//                     <span className="font-mono text-[10.5px] uppercase tracking-wider" style={{ color: 'var(--bp-muted)' }}>
//                       Tier 0{catIdx + 1}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Floating Tech Chips */}
//                 <div className="space-y-3.5">
//                   {category.technologies.map((tech, techIdx) => {
//                     const isHovered = hoveredTech === tech.name
//                     return (
//                       <motion.div
//                         key={tech.name}
//                         onMouseEnter={() => setHoveredTech(tech.name)}
//                         onMouseLeave={() => setHoveredTech(null)}
//                         animate={
//                           reduced ? {} : { y: techIdx % 2 === 0 ? [-2, 2, -2] : [2, -2, 2] }
//                         }
//                         transition={{ duration: 4 + techIdx, repeat: Infinity, ease: 'easeInOut' }}
//                         style={{
//                           borderColor: isHovered ? '#14F1D9' : 'rgba(20, 241, 217, 0.2)',
//                           boxShadow: isHovered ? '0 0 24px rgba(20, 241, 217, 0.35)' : 'none',
//                           backgroundColor: 'var(--bp-base)',
//                         }}
//                         className="group p-4 rounded-xl border transition-all duration-300 cursor-default"
//                       >
//                         <div className="flex items-center justify-between mb-1">
//                           <span className="font-['Space_Grotesk',sans-serif] font-bold text-base group-hover:text-[#14F1D9] transition-colors" style={{ color: 'var(--bp-text)' }}>
//                             {tech.name}
//                           </span>
//                           <span
//                             className="font-mono text-[10px] px-2 py-0.5 rounded-full border"
//                             style={{ color: category.color, borderColor: `${category.color}35`, backgroundColor: `${category.color}10` }}
//                           >
//                             {tech.role}
//                           </span>
//                         </div>
//                         <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--bp-muted)' }}>
//                           {tech.detail}
//                         </p>
//                       </motion.div>
//                     )
//                   })}
//                 </div>
//               </div>

//               {/* Tier Footer */}
//               <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: 'rgba(20,241,217,0.10)', color: 'var(--bp-muted)' }}>
//                 <span>Zero Latency Architecture</span>
//                 <span style={{ color: category.color }}>Verified</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Server, Code, Database } from 'lucide-react'
import { TECH_STACK } from '../../../data/services'
import useReducedMotion from '../../../hooks/useReducedMotion'

/* helper: translucent version of a theme colour */
const tint = (cssVar, pct) =>
  `color-mix(in srgb, var(${cssVar}) ${pct}%, transparent)`

/* Tier accents alternate between the two Hero accent colours.
   This replaces category.color so the section stays on-theme. */
const TIER_ACCENTS = ['--accent-blue', '--accent-mint', '--accent-blue']

export default function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState(null)
  const reduced = useReducedMotion()
  const categories = TECH_STACK.categories
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (duration, delay = 0, y = 30) => ({
    initial: reduced ? {} : { opacity: 0, y, filter: 'blur(10px)' },
    animate: inView
      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
      : reduced ? {} : { opacity: 0, y, filter: 'blur(10px)' },
    transition: reduced
      ? { duration: 0 }
      : { duration, delay, ease: [0.22, 1, 0.36, 1] },
  })

  /* highlight the last word of the title with the Hero gradient */
  const titleWords = TECH_STACK.title.split(' ')
  const lastWord = titleWords.pop()

  return (
    <section
      id="tech"
      ref={ref}
      aria-labelledby="tech-title"
      className="relative py-20 md:py-28 overflow-hidden transition-colors duration-300"
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

      {/* Orbit rings background (blue + mint) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="180" fill="none" stroke="var(--accent-mint)" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="var(--accent-blue)" strokeWidth="0.8" strokeDasharray="4 4" />
          <polygon points="200,60 321,130 321,270 200,340 79,270 79,130" fill="none" stroke="var(--accent-mint)" strokeWidth="0.8" opacity="0.4" />
        </svg>
      </div>

      {/* Edge fades, same as Hero */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--base)] via-transparent to-[var(--base)] opacity-60" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          {...fadeUp(0.85)}
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4 border"
            style={{
              color: 'var(--accent-mint)',
              backgroundColor: tint('--accent-mint', 8),
              borderColor: tint('--accent-mint', 40),
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
            {TECH_STACK.label}
          </div>
          <h2
            id="tech-title"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {titleWords.join(' ')} <span className="brain-gradient">{lastWord}</span>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed font-normal"
            style={{ color: 'var(--text-muted)' }}
          >
            {TECH_STACK.description}
          </p>
        </motion.div>

        {/* 3 Architecture Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {categories.map((category, catIdx) => {
            const accent = TIER_ACCENTS[catIdx % TIER_ACCENTS.length]

            return (
              <motion.div
                key={category.group}
                {...fadeUp(0.85, catIdx * 0.12, 35)}
                className="rounded-[22px] p-6 sm:p-8 backdrop-blur-xl border flex flex-col justify-between transition-colors duration-300"
                style={{
                  backgroundColor: tint('--base', 55),
                  borderColor: tint('--accent-blue', 30),
                  boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                }}
              >
                <div>
                  {/* Group Header */}
                  <div
                    className="flex items-center gap-2.5 mb-6 pb-4 border-b"
                    style={{ borderColor: tint('--accent-blue', 25) }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-colors duration-300"
                      style={{
                        backgroundColor: tint(accent, 12),
                        borderColor: tint(accent, 40),
                        color: `var(${accent})`,
                      }}
                    >
                      {catIdx === 0 && <Server size={18} />}
                      {catIdx === 1 && <Code size={18} />}
                      {catIdx === 2 && <Database size={18} />}
                    </div>
                    <div>
                      <h3
                        className="font-display font-bold text-lg"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {category.group}
                      </h3>
                      <span
                        className="font-mono text-[10.5px] uppercase tracking-wider"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Tier 0{catIdx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Floating Tech Chips */}
                  <div className="space-y-3.5">
                    {category.technologies.map((tech, techIdx) => {
                      const isHovered = hoveredTech === tech.name
                      return (
                        <motion.div
                          key={tech.name}
                          onMouseEnter={() => setHoveredTech(tech.name)}
                          onMouseLeave={() => setHoveredTech(null)}
                          animate={
                            reduced ? {} : { y: techIdx % 2 === 0 ? [-2, 2, -2] : [2, -2, 2] }
                          }
                          transition={{ duration: 4 + techIdx, repeat: Infinity, ease: 'easeInOut' }}
                          style={{
                            borderColor: isHovered ? `var(${accent})` : tint('--accent-blue', 25),
                            boxShadow: isHovered ? `0 0 24px ${tint(accent, 35)}` : 'none',
                            backgroundColor: 'var(--base)',
                          }}
                          className="group p-4 rounded-xl border transition-all duration-300 cursor-default"
                        >
                          <div className="flex items-center justify-between mb-1 gap-2">
                            <span
                              className="font-display font-bold text-base transition-colors duration-300"
                              style={{ color: isHovered ? `var(${accent})` : 'var(--text-primary)' }}
                            >
                              {tech.name}
                            </span>
                            <span
                              className="font-mono text-[10px] px-2 py-0.5 rounded-full border shrink-0"
                              style={{
                                color: `var(${accent})`,
                                borderColor: tint(accent, 35),
                                backgroundColor: tint(accent, 10),
                              }}
                            >
                              {tech.role}
                            </span>
                          </div>
                          <p
                            className="text-xs leading-relaxed"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            {tech.detail}
                          </p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Tier Footer */}
                <div
                  className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono"
                  style={{ borderColor: tint('--accent-blue', 20), color: 'var(--text-muted)' }}
                >
                  <span>Zero Latency Architecture</span>
                  <span style={{ color: `var(${accent})` }}>Verified</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}