// import { useRef } from 'react'
// import { motion, useScroll, useTransform, useInView } from 'framer-motion'
// import { ChevronDown } from 'lucide-react'
// import EclipseRing from '../common/EclipseRing'
// import Reveal from '../common/Reveal'
// import useReducedMotion from '../../hooks/useReducedMotion'
// import { TRANSITION_EASE } from '../../utils/motionVariants'

// export default function ContactHero() {
//   const containerRef = useRef(null)
//   const inView = useInView(containerRef, { once: false, amount: 0.1 })
//   const reduced = useReducedMotion()

//   /* Soft parallax as the user scrolls away */
//   const { scrollY } = useScroll()
//   const y = useTransform(scrollY, [0, 500], [0, 90])
//   const opacity = useTransform(scrollY, [0, 400], [1, 0.3])

//   const words = ['Contact', 'Us']

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-[75vh] md:min-h-[82vh] flex flex-col justify-between overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 select-none"
//       style={{ backgroundColor: 'var(--base)' }}
//     >
//       {/* ── Background: Faint Node-Mesh & Rotating EclipseRing ── */}
//       <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
//         {/* Node-mesh SVG */}
//         <svg viewBox="0 0 1000 600" className="w-full h-full opacity-20" fill="none" aria-hidden="true">
//           <defs>
//             <linearGradient id="contact-mesh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="var(--accent-blue)" />
//               <stop offset="100%" stopColor="var(--accent-mint)" />
//             </linearGradient>
//           </defs>
//           {[
//             { cx: 200, cy: 150 }, { cx: 400, cy: 120 }, { cx: 600, cy: 160 }, { cx: 800, cy: 130 },
//             { cx: 250, cy: 300 }, { cx: 500, cy: 280 }, { cx: 750, cy: 320 },
//             { cx: 350, cy: 450 }, { cx: 650, cy: 420 },
//           ].map((pt, i) => (
//             <circle key={i} cx={pt.cx} cy={pt.cy} r="2" fill="var(--accent-blue)" opacity="0.4" />
//           ))}
//           <path
//             d="M 200 150 L 400 120 L 500 280 L 250 300 Z M 400 120 L 600 160 L 750 320 L 500 280 Z M 600 160 L 800 130 L 750 320 Z M 500 280 L 750 320 L 650 420 L 350 450 Z"
//             stroke="var(--border-subtle)"
//             strokeWidth="0.8"
//             opacity="0.3"
//           />
//         </svg>

//         {/* Center EclipseRing and Radial Ambient Dual Glow */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50">
//           <EclipseRing size={680} />
//           <div
//             className="w-[700px] h-[380px] rounded-full opacity-20 blur-3xl"
//             style={{
//               background:
//                 'radial-gradient(ellipse at 40% 50%, var(--glow-blue) 0%, transparent 60%), radial-gradient(ellipse at 60% 50%, var(--glow-mint) 0%, transparent 60%)',
//             }}
//           />
//         </div>
//       </div>

//       {/* ── Main Content Container with Parallax ── */}
//       <motion.div
//         style={reduced ? {} : { y, opacity }}
//         className="container-wide relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto"
//       >
//         {/* Eyebrow Pill */}
//         <Reveal from="bottom">
//           <div
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs font-semibold uppercase tracking-widest"
//             style={{
//               backgroundColor: 'var(--glass-bg)',
//               borderColor: 'var(--glass-border)',
//               color: 'var(--accent-mint)',
//               backdropFilter: 'blur(12px)',
//             }}
//           >
//             <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-mint)' }} />
//             <span>Contact Us</span>
//           </div>
//         </Reveal>

//         {/* h1: Word-by-word rise and de-blur reveal */}
//         <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-6 flex items-center justify-center gap-[0.35em]">
//           {words.map((word, i) => {
//             const isGradientWord = i === 1 // "Us" gets the brain-gradient
//             return (
//               <motion.span
//                 key={word}
//                 initial={
//                   reduced
//                     ? { opacity: 1 }
//                     : { opacity: 0, y: 35, filter: 'blur(8px)' }
//                 }
//                 animate={
//                   inView
//                     ? { opacity: 1, y: 0, filter: 'blur(0px)' }
//                     : reduced
//                     ? { opacity: 1 }
//                     : { opacity: 0, y: 35, filter: 'blur(8px)' }
//                 }
//                 transition={{
//                   duration: reduced ? 0 : 0.85,
//                   delay: reduced ? 0 : 0.15 + i * 0.12,
//                   ease: TRANSITION_EASE,
//                 }}
//                 className={`inline-block ${
//                   isGradientWord ? 'brain-gradient' : ''
//                 }`}
//                 style={!isGradientWord ? { color: 'var(--text-primary)' } : {}}
//               >
//                 {word}
//               </motion.span>
//             )
//           })}
//         </h1>

//         {/* Sub-line Placeholder */}
//         {/* TODO: Add approved hero subcopy if supplied by the client */}
//         <Reveal from="bottom" delay={0.35}>
//           <p
//             className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
//             style={{ color: 'var(--text-secondary)' }}
//           >
//             Direct collaboration with technical consultants and system architects for mission-critical deployments.
//           </p>
//         </Reveal>
//       </motion.div>

//       {/* ── Animated Scroll Cue ── */}
//       <div className="relative z-10 flex flex-col items-center justify-center pt-8">
//         <motion.div
//           animate={!reduced ? { y: [0, 6, 0] } : {}}
//           transition={!reduced ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' } : {}}
//           className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
//           aria-hidden="true"
//         >
//           <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
//             Explore Channels
//           </span>
//           <ChevronDown size={18} style={{ color: 'var(--accent-mint)' }} />
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import EclipseRing from '../common/EclipseRing'
import Reveal from '../common/Reveal'
import useReducedMotion from '../../hooks/useReducedMotion'
import { TRANSITION_EASE } from '../../utils/motionVariants'

const SPARKLES = [
  { top: '24%', left: '24%', s: 11, d: 0.2 },
  { top: '34%', left: '76%', s: 9, d: 1.4 },
  { top: '66%', left: '70%', s: 12, d: 0.8 },
]

export default function ContactHero() {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()

  /* Entrance plays once; loops run only while the hero is on screen */
  const revealed = useInView(containerRef, { once: true, amount: 0.1 })
  const onScreen = useInView(containerRef, { amount: 0.05 })
  const active = onScreen && !reduced

  /* Soft parallax as the user scrolls away */
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 90])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3])
  const bgY = useTransform(scrollY, [0, 500], [0, 40])

  const words = ['Contact', 'Us']

  return (
    <section
      ref={containerRef}
      className="relative min-h-[75vh] md:min-h-[82vh] flex flex-col justify-between overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 select-none"
      style={{ backgroundColor: 'var(--base)' }}
    >
      {/* ═══════════ BACKGROUND ═══════════ */}
      <motion.div
        style={reduced ? {} : { y: bgY }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* 1) Dot grid, fades out toward the edges and the top (keeps navbar clean) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(var(--border-strong) 1px, transparent 1.5px)',
            backgroundSize: '28px 28px',
            opacity: 0.55,
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 55% at 50% 55%, #000 25%, transparent 78%)',
            maskImage:
              'radial-gradient(ellipse 60% 55% at 50% 55%, #000 25%, transparent 78%)',
          }}
        />

        {/* 2) Two soft glows: blue left, mint right (transform-only drift) */}
        <motion.div
          className="absolute top-[10%] -left-24 w-[480px] h-[380px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, var(--glow-blue), transparent 70%)',
            opacity: 0.2,
            filter: 'blur(70px)',
          }}
          animate={active ? { x: [0, 50, 0], y: [0, 30, 0] } : {}}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[0%] -right-24 w-[520px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, var(--glow-mint), transparent 70%)',
            opacity: 0.18,
            filter: 'blur(70px)',
          }}
          animate={active ? { x: [0, -50, 0], y: [0, -30, 0] } : {}}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* 3) Centre: EclipseRing + one orbit with a travelling dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="opacity-40">
            <EclipseRing size={620} />
          </div>

          <motion.div
            className="absolute rounded-full"
            style={{
              width: 460,
              height: 460,
              border: '1px solid var(--border-subtle)',
            }}
            animate={active ? { rotate: 360 } : {}}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          >
            <span
              className="absolute left-1/2 -top-[4px] -translate-x-1/2 w-2 h-2 rounded-full"
              style={{
                background: 'var(--accent-mint)',
                boxShadow: '0 0 12px var(--glow-mint)',
              }}
            />
          </motion.div>

          <div
            className="absolute w-[620px] h-[320px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                'radial-gradient(ellipse at 40% 50%, var(--glow-blue) 0%, transparent 60%), radial-gradient(ellipse at 60% 50%, var(--glow-mint) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* 4) A few sparkles */}
        {SPARKLES.map((p, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="absolute"
            style={{
              top: p.top,
              left: p.left,
              width: p.s,
              height: p.s,
              animation: active ? `twinkle 3.4s ease-in-out infinite ${p.d}s` : 'none',
              opacity: active ? undefined : 0.5,
            }}
          >
            <path
              d="M12 0C12 6.6 6.6 12 0 12c6.6 0 12 5.4 12 12 0-6.6 5.4-12 12-12-6.6 0-12-5.4-12-12Z"
              fill="var(--accent-mint)"
              opacity="0.8"
            />
          </svg>
        ))}

        {/* 5) Glowing horizon line along the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-px" style={{
          background:
            'linear-gradient(90deg, transparent 5%, var(--accent-blue) 35%, var(--accent-mint) 65%, transparent 95%)',
          opacity: 0.45,
        }} />
        <motion.div
          className="absolute inset-x-[10%] bottom-0 h-24"
          style={{
            background:
              'radial-gradient(ellipse at 50% 100%, var(--glow-blue), transparent 70%)',
            opacity: 0.2,
          }}
          animate={active ? { opacity: [0.14, 0.3, 0.14] } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* 6) Soft centre vignette so the text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 50% 50%, var(--base) 0%, transparent 100%)',
            opacity: 0.5,
          }}
        />
      </motion.div>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <motion.div
        style={reduced ? {} : { y, opacity }}
        className="container-wide relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto my-auto"
      >
        {/* <Reveal from="bottom">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
              color: 'var(--accent-mint)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--accent-mint)' }}
              aria-hidden="true"
            />
            <span>Contact Us</span>
          </div>
        </Reveal> */}

        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight leading-[1.05] mb-6 flex items-center justify-center gap-[0.35em]">
          {words.map((word, i) => {
            const isGradientWord = i === 1
            return (
              <motion.span
                key={word}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 35, filter: 'blur(8px)' }}
                animate={
                  revealed || reduced
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: 35, filter: 'blur(8px)' }
                }
                transition={{
                  duration: reduced ? 0 : 0.85,
                  delay: reduced ? 0 : 0.15 + i * 0.12,
                  ease: TRANSITION_EASE,
                }}
                className={`inline-block ${isGradientWord ? 'brain-gradient' : ''}`}
                style={!isGradientWord ? { color: 'var(--text-primary)' } : {}}
              >
                {word}
              </motion.span>
            )
          })}
        </h1>

        {/* TODO: Add approved hero subcopy if supplied by the client */}
        <Reveal from="bottom" delay={0.35}>
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Direct collaboration with technical consultants and system architects for mission-critical deployments.
          </p>
        </Reveal>
      </motion.div>

      {/* ═══════════ SCROLL CUE ═══════════ */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8">
        <motion.div
          animate={active ? { y: [0, 6, 0] } : {}}
          transition={active ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' } : {}}
          className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            Explore Channels
          </span>
          <ChevronDown size={18} style={{ color: 'var(--accent-mint)' }} />
        </motion.div>
      </div>
    </section>
  )
}