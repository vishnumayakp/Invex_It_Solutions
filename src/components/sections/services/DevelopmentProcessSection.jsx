// import { useState, useRef } from 'react'
// import { motion, useScroll, useTransform, useInView } from 'framer-motion'
// import { Search, Layout, Code2, ShieldAlert, Headphones } from 'lucide-react'
// import { DEVELOPMENT_PROCESS } from '../../../data/services'
// import useReducedMotion from '../../../hooks/useReducedMotion'

// function StepIcon({ icon, size = 18 }) {
//   switch (icon) {
//     case 'Search': return <Search size={size} className="text-[#14F1D9]" />
//     case 'Layout': return <Layout size={size} className="text-[#14F1D9]" />
//     case 'Code2': return <Code2 size={size} className="text-[#FFB547]" />
//     case 'ShieldAlert': return <ShieldAlert size={size} className="text-[#14F1D9]" />
//     case 'Headphones': return <Headphones size={size} className="text-[#FFB547]" />
//     default: return <Search size={size} className="text-[#14F1D9]" />
//   }
// }

// export default function DevelopmentProcessSection() {
//   const [activeStep, setActiveStep] = useState(null)
//   const containerRef = useRef(null)
//   const reduced = useReducedMotion()
//   const steps = DEVELOPMENT_PROCESS.steps
//   const inView = useInView(containerRef, { once: true, margin: '-80px' })

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start 0.8', 'end 0.6'],
//   })

//   const progressFill = useTransform(scrollYProgress, [0, 1], [0, 1])

//   return (
//     <section
//       ref={containerRef}
//       id="process"
//       aria-labelledby="process-title"
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
//           className="max-w-3xl mb-16 sm:mb-20"
//           initial={reduced ? {} : { opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#14F1D9] mb-4 border" style={{ backgroundColor: 'var(--bp-card-inner)', borderColor: 'rgba(20,241,217,0.30)' }}>
//             <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9]" />
//             {DEVELOPMENT_PROCESS.label}
//           </div>
//           <h2 id="process-title" className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4" style={{ color: 'var(--bp-text)' }}>
//             {DEVELOPMENT_PROCESS.title}
//           </h2>
//           <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: 'var(--bp-muted)' }}>
//             {DEVELOPMENT_PROCESS.description}
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Desktop Horizontal Track */}
//           <div className="hidden lg:block absolute top-10 left-12 right-12 h-[2px] z-0" style={{ backgroundColor: 'rgba(20,241,217,0.20)' }} aria-hidden="true">
//             <motion.div
//               style={{ scaleX: reduced ? 1 : progressFill, transformOrigin: 'left' }}
//               className="w-full h-full bg-gradient-to-r from-[#14F1D9] via-[#FFB547] to-[#14F1D9] shadow-[0_0_12px_#14F1D9]"
//             />
//           </div>

//           {/* Mobile Vertical Track */}
//           <div className="block lg:hidden absolute top-8 bottom-8 left-6 w-[2px] z-0" style={{ backgroundColor: 'rgba(20,241,217,0.20)' }} aria-hidden="true">
//             <motion.div
//               style={{ scaleY: reduced ? 1 : progressFill, transformOrigin: 'top' }}
//               className="w-full h-full bg-gradient-to-b from-[#14F1D9] via-[#FFB547] to-[#14F1D9] shadow-[0_0_12px_#14F1D9]"
//             />
//           </div>

//           {/* 5 Step Nodes */}
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
//             {steps.map((step, idx) => {
//               const isExpanded = activeStep === idx
//               return (
//                 <motion.div
//                   key={step.number}
//                   initial={reduced ? {} : { opacity: 0, y: 30 }}
//                   animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 30 })}
//                   transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
//                   onMouseEnter={() => setActiveStep(idx)}
//                   onMouseLeave={() => setActiveStep(null)}
//                   onClick={() => setActiveStep(isExpanded ? null : idx)}
//                   className="pl-14 lg:pl-0 flex flex-col justify-between group cursor-pointer"
//                 >
//                   {/* Node indicator */}
//                   <div className="relative flex lg:flex-col items-center lg:items-start mb-4">
//                     <div
//                       className="absolute -left-14 lg:static w-10 h-10 rounded-full border-2 border-[#14F1D9] group-hover:border-[#FFB547] group-hover:shadow-[0_0_18px_rgba(255,181,71,0.5)] flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_rgba(20,241,217,0.35)] shrink-0 z-10"
//                       style={{ backgroundColor: 'var(--bp-card)' }}
//                     >
//                       <StepIcon icon={step.icon} size={18} />
//                     </div>
//                     <div className="lg:mt-3 flex items-center gap-2">
//                       <span className="font-mono text-xs font-bold text-[#14F1D9] group-hover:text-[#FFB547] transition-colors">
//                         STAGE {step.number}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Card */}
//                   <motion.div
//                     animate={isExpanded && !reduced ? { y: -4 } : { y: 0 }}
//                     className={`rounded-[18px] p-5 sm:p-6 backdrop-blur-xl border transition-all duration-300 flex-1 flex flex-col justify-between`}
//                     style={{
//                       backgroundColor: 'var(--bp-card)',
//                       borderColor: isExpanded ? '#FFB547' : 'rgba(20,241,217,0.20)',
//                       boxShadow: isExpanded
//                         ? '0 12px 36px rgba(255,181,71,0.25)'
//                         : '0 8px 24px var(--bp-shadow)',
//                     }}
//                   >
//                     <div>
//                       <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-lg mb-1 group-hover:text-[#14F1D9] transition-colors" style={{ color: 'var(--bp-text)' }}>
//                         {step.title}
//                       </h3>
//                       <h4 className="font-mono text-[10.5px] uppercase tracking-wider text-[#FFB547] mb-2 font-semibold">
//                         {step.headline}
//                       </h4>
//                       <p className="font-sans text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--bp-muted)' }}>
//                         {step.description}
//                       </p>
//                     </div>
//                     <div className="mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono" style={{ borderColor: 'rgba(20,241,217,0.10)', color: 'var(--bp-muted)' }}>
//                       <span className="group-hover:text-[var(--bp-text)] transition-colors">SLA Guaranteed</span>
//                       <span className="text-[#14F1D9] font-bold">0{idx + 1}</span>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Search, Layout, Code2, ShieldAlert, Headphones } from 'lucide-react'
import { DEVELOPMENT_PROCESS } from '../../../data/services'
import useReducedMotion from '../../../hooks/useReducedMotion'

/* helper: translucent version of a theme colour */
const tint = (cssVar, pct) =>
  `color-mix(in srgb, var(${cssVar}) ${pct}%, transparent)`

const ICONS = { Search, Layout, Code2, ShieldAlert, Headphones }
/* which Hero accent each step icon uses (replaces the old teal/amber) */
const ICON_ACCENT = {
  Search: '--accent-mint',
  Layout: '--accent-mint',
  Code2: '--accent-blue',
  ShieldAlert: '--accent-mint',
  Headphones: '--accent-blue',
}

function StepIcon({ icon, size = 18 }) {
  const Icon = ICONS[icon] || Search
  return <Icon size={size} style={{ color: `var(${ICON_ACCENT[icon] || '--accent-mint'})` }} />
}

export default function DevelopmentProcessSection() {
  const [activeStep, setActiveStep] = useState(null)
  const containerRef = useRef(null)
  const reduced = useReducedMotion()
  const steps = DEVELOPMENT_PROCESS.steps
  const inView = useInView(containerRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.6'],
  })

  const progressFill = useTransform(scrollYProgress, [0, 1], [0, 1])

  const fadeUp = (duration, delay = 0) => ({
    initial: reduced ? {} : { opacity: 0, y: 30, filter: 'blur(10px)' },
    animate: inView
      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
      : reduced ? {} : { opacity: 0, y: 30, filter: 'blur(10px)' },
    transition: reduced
      ? { duration: 0 }
      : { duration, delay, ease: [0.22, 1, 0.36, 1] },
  })

  /* highlight the last word of the title with the Hero gradient */
  const titleWords = DEVELOPMENT_PROCESS.title.split(' ')
  const lastWord = titleWords.pop()

  const trackGradient = (dir) =>
    `linear-gradient(${dir}, var(--accent-mint), var(--accent-blue), var(--accent-mint))`

  return (
    <section
      ref={containerRef}
      id="process"
      aria-labelledby="process-title"
      className="relative pt-8 md:pt-12 lg:pt-16 pb-10 md:pb-14  overflow-hidden transition-colors duration-300"
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
        <motion.div className="max-w-3xl mb-16 sm:mb-20" {...fadeUp(0.85)}>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-4 border"
            style={{
              color: 'var(--accent-mint)',
              backgroundColor: tint('--accent-mint', 8),
              borderColor: tint('--accent-mint', 40),
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
            {DEVELOPMENT_PROCESS.label}
          </div>
          <h2
            id="process-title"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {titleWords.join(' ')} <span className="brain-gradient">{lastWord}</span>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed font-normal"
            style={{ color: 'var(--text-muted)' }}
          >
            {DEVELOPMENT_PROCESS.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Horizontal Track */}
          <div
            className="hidden lg:block absolute top-10 left-12 right-12 h-[2px] z-0"
            style={{ backgroundColor: tint('--accent-blue', 22) }}
            aria-hidden="true"
          >
            <motion.div
              style={{
                scaleX: reduced ? 1 : progressFill,
                transformOrigin: 'left',
                background: trackGradient('to right'),
                boxShadow: `0 0 12px ${tint('--accent-mint', 60)}`,
              }}
              className="w-full h-full"
            />
          </div>

          {/* Mobile Vertical Track */}
          <div
            className="block lg:hidden absolute top-8 bottom-8 left-6 w-[2px] z-0"
            style={{ backgroundColor: tint('--accent-blue', 22) }}
            aria-hidden="true"
          >
            <motion.div
              style={{
                scaleY: reduced ? 1 : progressFill,
                transformOrigin: 'top',
                background: trackGradient('to bottom'),
                boxShadow: `0 0 12px ${tint('--accent-mint', 60)}`,
              }}
              className="w-full h-full"
            />
          </div>

          {/* 5 Step Nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const isExpanded = activeStep === idx
              return (
                <motion.div
                  key={step.number}
                  {...fadeUp(0.85, idx * 0.1)}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setActiveStep(isExpanded ? null : idx)}
                  className="pl-14 lg:pl-0 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Node indicator */}
                  <div className="relative flex lg:flex-col items-center lg:items-start mb-4">
                    <div
                      className="absolute -left-14 lg:static w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0 z-10"
                      style={{
                        backgroundColor: tint('--base', 90),
                        borderColor: isExpanded ? 'var(--accent-blue)' : 'var(--accent-mint)',
                        boxShadow: isExpanded
                          ? `0 0 18px ${tint('--accent-blue', 50)}`
                          : `0 0 12px ${tint('--accent-mint', 35)}`,
                      }}
                    >
                      <StepIcon icon={step.icon} size={18} />
                    </div>
                    <div className="lg:mt-3 flex items-center gap-2">
                      <span
                        className="font-mono text-xs font-bold transition-colors duration-300"
                        style={{
                          color: isExpanded ? 'var(--accent-blue)' : 'var(--accent-mint)',
                        }}
                      >
                        STAGE {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    animate={isExpanded && !reduced ? { y: -4 } : { y: 0 }}
                    className="rounded-[18px] p-5 sm:p-6 backdrop-blur-xl border transition-all duration-300 flex-1 flex flex-col justify-between"
                    style={{
                      backgroundColor: tint('--base', 55),
                      borderColor: isExpanded ? 'var(--accent-blue)' : tint('--accent-blue', 30),
                      boxShadow: isExpanded
                        ? `0 12px 36px ${tint('--accent-blue', 25)}`
                        : '0 8px 24px rgba(0,0,0,0.2)',
                    }}
                  >
                    <div>
                      <h3
                        className="font-display font-bold text-lg mb-1 transition-colors duration-300"
                        style={{
                          color: isExpanded ? 'var(--accent-mint)' : 'var(--text-primary)',
                        }}
                      >
                        {step.title}
                      </h3>
                      <h4
                        className="font-mono text-[10.5px] uppercase tracking-wider mb-2 font-semibold"
                        style={{ color: 'var(--accent-blue)' }}
                      >
                        {step.headline}
                      </h4>
                      <p
                        className="text-xs sm:text-sm leading-relaxed"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {step.description}
                      </p>
                    </div>
                    {/* <div
                      className="mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono"
                      style={{ borderColor: tint('--accent-blue', 20), color: 'var(--text-muted)' }}
                    >
                      <span
                        className="transition-colors duration-300"
                        style={{ color: isExpanded ? 'var(--text-primary)' : undefined }}
                      >
                        SLA Guaranteed
                      </span>
                      <span className="font-bold" style={{ color: 'var(--accent-mint)' }}>
                        0{idx + 1}
                      </span>
                    </div> */}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}