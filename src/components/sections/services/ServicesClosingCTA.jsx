// import { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Phone, ArrowRight } from 'lucide-react'
// import { CLOSING_CTA } from '../../../data/services'
// import useReducedMotion from '../../../hooks/useReducedMotion'

// export default function ServicesClosingCTA({ onOpenModal }) {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '-80px' })
//   const reduced = useReducedMotion()

//   return (
//     <section
//       ref={ref}
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

//       {/* Ambient Amber Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#FFB547]/15 blur-[140px] pointer-events-none" />

//       <div className="container-wide relative z-10">
//         <motion.div
//           initial={reduced ? {} : { opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 40 })}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="relative rounded-[28px] p-8 sm:p-12 lg:p-16 backdrop-blur-2xl border-2 border-[#FFB547]/60 text-center max-w-5xl mx-auto overflow-hidden"
//           style={{
//             backgroundColor: 'var(--bp-card)',
//             boxShadow: '0 24px 70px var(--bp-shadow), 0 0 40px rgba(255,181,71,0.25)',
//           }}
//         >
//           {/* Top Gradient Line */}
//           <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFB547] to-transparent" />

//           {/* Kicker */}
//           <motion.span
//             initial={reduced ? {} : { opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 20 })}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFB547]/40 text-xs font-mono uppercase tracking-widest text-[#FFB547] mb-6 shadow-sm shadow-[rgba(255,181,71,0.3)]"
//             style={{ backgroundColor: 'var(--bp-card-inner)' }}
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-[#FFB547]" />
//             Direct Software Architecture Engagement
//           </motion.span>

//           {/* Heading */}
//           <motion.h2
//             initial={reduced ? {} : { opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 20 })}
//             transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
//             className="font-['Space_Grotesk',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight max-w-4xl mx-auto leading-[1.12]"
//             style={{ color: 'var(--bp-text)' }}
//           >
//             {CLOSING_CTA.headline}
//           </motion.h2>

//           {/* Subline */}
//           <motion.p
//             initial={reduced ? {} : { opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 20 })}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
//             className="font-sans text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
//             style={{ color: 'var(--bp-muted)' }}
//           >
//             {CLOSING_CTA.subline}
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={reduced ? {} : { opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : (reduced ? {} : { opacity: 0, y: 20 })}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
//             className="flex flex-wrap justify-center items-center gap-4 sm:gap-5"
//           >
//             <button
//               onClick={onOpenModal}
//               className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-['Space_Grotesk',sans-serif] font-bold text-sm tracking-wide text-[#070B1A] bg-gradient-to-r from-[#FFB547] to-[#FFA726] shadow-[0_0_28px_rgba(255,181,71,0.5)] hover:shadow-[0_0_40px_rgba(255,181,71,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
//             >
//               <span>{CLOSING_CTA.primaryButton}</span>
//               <ArrowRight size={17} />
//             </button>

//             <a
//               href={`tel:${CLOSING_CTA.phone.replace(/[^0-9+]/g, '')}`}
//               className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-medium text-sm tracking-wide border border-[#14F1D9]/40 hover:border-[#14F1D9] hover:text-[#14F1D9] hover:bg-[#14F1D9]/10 transition-all duration-300 cursor-pointer"
//               style={{ color: 'var(--bp-text)', backgroundColor: 'var(--bp-card-inner)' }}
//             >
//               <Phone size={16} className="text-[#14F1D9]" />
//               <span>{CLOSING_CTA.callButton}</span>
//             </a>
//           </motion.div>

//           {/* Bottom accents */}
//           <div className="mt-10 pt-6 border-t flex flex-wrap items-center justify-center gap-6 text-xs font-mono" style={{ borderColor: 'rgba(20,241,217,0.15)', color: 'var(--bp-muted)' }}>
//             <span className="flex items-center gap-1.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9]" />
//               Zero Lock-In Architecture
//             </span>
//             <span className="flex items-center gap-1.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#FFB547]" />
//               Guaranteed Production SLAs
//             </span>
//             <span className="flex items-center gap-1.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#14F1D9]" />
//               On-Site Commissioning
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { CLOSING_CTA } from '../../../data/services'
import useReducedMotion from '../../../hooks/useReducedMotion'
import Button from '../../common/Button'

/* helper: translucent version of a theme colour */
const tint = (cssVar, pct) =>
  `color-mix(in srgb, var(${cssVar}) ${pct}%, transparent)`

export default function ServicesClosingCTA({ onOpenModal }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  const fadeUp = (duration, delay = 0) => ({
    initial: reduced ? {} : { opacity: 0, y: 30, filter: 'blur(10px)' },
    animate: inView
      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
      : reduced ? {} : { opacity: 0, y: 30, filter: 'blur(10px)' },
    transition: reduced
      ? { duration: 0 }
      : { duration, delay, ease: [0.22, 1, 0.36, 1] },
  })

  /* highlight the last word of the headline with the Hero gradient */
  const words = CLOSING_CTA.headline.split(' ')
  const lastWord = words.pop()

  return (
    <section
      ref={ref}
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

      {/* Ambient glows: blue left, mint right (matches Hero's two-sided nodes) */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: tint('--accent-blue', 22) }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: tint('--accent-mint', 18) }}
        aria-hidden="true"
      />

      {/* Edge fades, same as Hero */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--base)] via-transparent to-[var(--base)] opacity-60" />

      <div className="container-wide relative z-10">
        <motion.div
          {...fadeUp(0.8)}
          className="relative rounded-[28px] p-8 sm:p-12 lg:p-16 backdrop-blur-2xl border text-center max-w-5xl mx-auto overflow-hidden"
          style={{
            backgroundColor: tint('--base', 55),
            borderColor: tint('--accent-blue', 45),
            boxShadow: `0 24px 70px rgba(0,0,0,0.25), 0 0 40px ${tint('--accent-blue', 20)}`,
          }}
        >
          {/* Top gradient line */}
          <div
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{
              background:
                'linear-gradient(to right, transparent, var(--accent-blue), var(--accent-mint), transparent)',
            }}
          />

          {/* Kicker */}
          <motion.span
            {...fadeUp(0.6, 0.15)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono uppercase tracking-widest mb-6"
            style={{
              color: 'var(--accent-mint)',
              borderColor: tint('--accent-mint', 40),
              backgroundColor: tint('--accent-mint', 8),
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
            Direct Software Architecture Engagement
          </motion.span>

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.65, 0.25)}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight max-w-4xl mx-auto leading-[1.1]"
            style={{ color: 'var(--text-primary)' }}
          >
            {words.join(' ')} <span className="brain-gradient">{lastWord}</span>
          </motion.h2>

          {/* Subline */}
          <motion.p
            {...fadeUp(0.6, 0.35)}
            className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
            style={{ color: 'var(--text-muted)' }}
          >
            {CLOSING_CTA.subline}
          </motion.p>

          {/* Buttons: same Button component/variants as Hero */}
          <motion.div
            {...fadeUp(0.6, 0.45)}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-5"
          >
            <Button
              variant="cta"
              iconRight={ArrowRight}
              magnetic
              className="pulse-glow-once"
              onClick={onOpenModal}
            >
              {CLOSING_CTA.primaryButton}
            </Button>

            <Button
              variant="secondary"
              href={`tel:${CLOSING_CTA.phone.replace(/[^0-9+]/g, '')}`}
            >
              <span className="inline-flex items-center gap-2">
                <Phone size={16} className="text-[var(--accent-mint)]" />
                {CLOSING_CTA.callButton}
              </span>
            </Button>
          </motion.div>

          {/* Bottom accents */}
          <div
            className="mt-10 pt-6 border-t flex flex-wrap items-center justify-center gap-6 text-xs font-mono"
            style={{ borderColor: tint('--accent-blue', 25), color: 'var(--text-muted)' }}
          >
            {[
              ['Zero Lock-In Architecture', '--accent-mint'],
              ['Guaranteed Production SLAs', '--accent-blue'],
              ['On-Site Commissioning', '--accent-mint'],
            ].map(([label, c]) => (
              <span key={label} className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: `var(${c})` }}
                />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}