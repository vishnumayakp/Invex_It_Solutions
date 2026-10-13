// import { useRef } from 'react'
// import { motion, useInView, useScroll, useTransform } from 'framer-motion'
// import useReducedMotion from '../../hooks/useReducedMotion'
// import EclipseRing from '../common/EclipseRing'
// import SplitWords from '../common/SplitWords'
// import { TRANSITION_EASE } from '../../utils/motionVariants'

// /**
//  * ProductsHero — Full-viewport hero for the Products / Portfolio page.
//  * Features: eyebrow pill, word-by-word h1 reveal, EclipseRing glow,
//  * faint circuit-trace SVG background, parallax on scroll-out, scroll cue.
//  */
// export default function ProductsHero() {
//   const sectionRef = useRef(null)
//   const reduced = useReducedMotion()
//   const inView = useInView(sectionRef, { once: true, amount: 0.15 })

//   /* Parallax: content moves up subtly as user scrolls past hero */
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start start', 'end start'],
//   })
//   const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80])
//   const parallaxOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

//   /* Scroll cue bounce animation */
//   const scrollCueVariants = {
//     animate: {
//       y: [0, 10, 0],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: 'easeInOut',
//       },
//     },
//   }

//   return (
//     <section
//       ref={sectionRef}
//       id="products-hero"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{ background: 'var(--base)' }}
//     >
//       {/* ── Background: Faint circuit-trace pattern ── */}
//       <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
//         <svg
//           className="absolute inset-0 w-full h-full"
//           viewBox="0 0 1200 800"
//           fill="none"
//           preserveAspectRatio="xMidYMid slice"
//           style={{ opacity: 0.06 }}
//         >
//           {/* Horizontal traces */}
//           <line x1="0" y1="200" x2="1200" y2="200" stroke="var(--accent-blue)" strokeWidth="0.5" />
//           <line x1="0" y1="400" x2="1200" y2="400" stroke="var(--accent-blue)" strokeWidth="0.5" />
//           <line x1="0" y1="600" x2="1200" y2="600" stroke="var(--accent-mint)" strokeWidth="0.5" />

//           {/* Vertical traces */}
//           <line x1="300" y1="0" x2="300" y2="800" stroke="var(--accent-blue)" strokeWidth="0.5" />
//           <line x1="600" y1="0" x2="600" y2="800" stroke="var(--accent-mint)" strokeWidth="0.5" />
//           <line x1="900" y1="0" x2="900" y2="800" stroke="var(--accent-blue)" strokeWidth="0.5" />

//           {/* Circuit nodes */}
//           <circle cx="300" cy="200" r="4" fill="var(--accent-blue)" opacity="0.3" />
//           <circle cx="600" cy="400" r="4" fill="var(--accent-mint)" opacity="0.3" />
//           <circle cx="900" cy="200" r="4" fill="var(--accent-blue)" opacity="0.3" />
//           <circle cx="300" cy="600" r="4" fill="var(--accent-mint)" opacity="0.3" />
//           <circle cx="900" cy="600" r="4" fill="var(--accent-blue)" opacity="0.3" />

//           {/* Diagonal traces */}
//           <line x1="300" y1="200" x2="600" y2="400" stroke="var(--accent-blue)" strokeWidth="0.5" opacity="0.5" />
//           <line x1="600" y1="400" x2="900" y2="200" stroke="var(--accent-mint)" strokeWidth="0.5" opacity="0.5" />
//           <line x1="300" y1="600" x2="600" y2="400" stroke="var(--accent-mint)" strokeWidth="0.5" opacity="0.5" />
//           <line x1="600" y1="400" x2="900" y2="600" stroke="var(--accent-blue)" strokeWidth="0.5" opacity="0.5" />
//         </svg>
//       </div>

//       {/* ── EclipseRing glow behind heading ── */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
//         <EclipseRing size={580} className="opacity-40 md:opacity-50" />
//       </div>

//       {/* ── Central radial glow ── */}
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//         style={{
//           width: 800,
//           height: 500,
//           background: 'radial-gradient(ellipse at center, var(--glow-blue) 0%, transparent 60%)',
//           opacity: 0.12,
//           filter: 'blur(60px)',
//         }}
//         aria-hidden="true"
//       />

//       {/* ── Parallax content wrapper ── */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
//         style={reduced ? {} : { y: parallaxY, opacity: parallaxOpacity }}
//       >
//         {/* Eyebrow pill */}
//         <motion.div
//           initial={reduced ? {} : { opacity: 0, y: 20, filter: 'blur(6px)' }}
//           animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
//           transition={{ duration: 0.8, ease: TRANSITION_EASE, delay: 0.1 }}
//           className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-sm font-medium tracking-wide"
//           style={{
//             background: 'var(--glass-bg)',
//             border: '1px solid var(--glass-border)',
//             color: 'var(--text-muted)',
//             backdropFilter: 'blur(12px)',
//           }}
//         >
//           <span
//             className="w-2 h-2 rounded-full"
//             style={{ background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))' }}
//             aria-hidden="true"
//           />
//           Portfolio / Case Studies
//         </motion.div>

//         {/* h1: Word-by-word reveal */}
//         <SplitWords
//           text="Real-World Projects"
//           as="h1"
//           highlightWords={['Projects']}
//           stagger={0.1}
//           delay={0.3}
//           className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
//           style={{ color: 'var(--text-primary)' }}
//         />

//         {/* TODO: Add a sub-line here if needed */}
//       </motion.div>

//       {/* ── Scroll cue at bottom ── */}
//       {!reduced && (
//         <motion.div
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.8, delay: 1.2, ease: TRANSITION_EASE }}
//         >
//           <span
//             className="text-xs font-medium tracking-widest uppercase"
//             style={{ color: 'var(--text-muted)' }}
//           >
//             Scroll
//           </span>
//           <motion.div
//             variants={scrollCueVariants}
//             animate="animate"
//           >
//             <svg
//               width="20"
//               height="32"
//               viewBox="0 0 20 32"
//               fill="none"
//               aria-hidden="true"
//             >
//               <rect
//                 x="1"
//                 y="1"
//                 width="18"
//                 height="30"
//                 rx="9"
//                 stroke="var(--accent-blue)"
//                 strokeWidth="1.5"
//                 opacity="0.4"
//               />
//               <motion.circle
//                 cx="10"
//                 cy="10"
//                 r="3"
//                 fill="var(--accent-mint)"
//                 opacity="0.7"
//                 animate={{ cy: [10, 20, 10] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//               />
//             </svg>
//           </motion.div>
//         </motion.div>
//       )}

//       {/* Reduced motion: static scroll cue */}
//       {reduced && (
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
//           <span
//             className="text-xs font-medium tracking-widest uppercase"
//             style={{ color: 'var(--text-muted)' }}
//           >
//             Scroll
//           </span>
//           <svg width="20" height="32" viewBox="0 0 20 32" fill="none" aria-hidden="true">
//             <rect x="1" y="1" width="18" height="30" rx="9" stroke="var(--accent-blue)" strokeWidth="1.5" opacity="0.4" />
//             <circle cx="10" cy="14" r="3" fill="var(--accent-mint)" opacity="0.7" />
//           </svg>
//         </div>
//       )}
//     </section>
//   )
// }


import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import useReducedMotion from '../../hooks/useReducedMotion'
import EclipseRing from '../common/EclipseRing'
import SplitWords from '../common/SplitWords'
import Button from '../common/Button'
import { TRANSITION_EASE } from '../../utils/motionVariants'
import erp from '../../assets/images/dashboard ERp.png'
import pos from '../../assets/images/dashboard salon.png'
import queue from '../../assets/images/dashboard queue.png'

/**
 * ProductsHero: landing hero for the Products / Portfolio page.
 * Left: eyebrow, h1, sub-line placeholder, CTAs, product chips.
 * Right: floating glass stack of Retail ERP / Salon POS / Queue Management
 * windows (code-built, no invented numbers), EclipseRing, connecting lines,
 * pointer-depth parallax via CSS variables (no re-render).
 */

const PRODUCT_CHIPS = ['Retail ERP', 'Salon POS', 'Queue Management']
const HERO_IMAGES = {
  erp: { src: erp, alt: 'Retail ERP dashboard' },
  pos: { src: pos, alt: 'Salon POS interface' },
  queue: { src: queue, alt: 'Queue Management display screen' },
}

/* Skeleton bar used inside mockups (abstract, no fake data) */
function Bar({ w = '100%', accent = false, h = 6 }) {
  return (
    <span
      className="block rounded-full"
      style={{
        width: w,
        height: h,
        background: accent
          ? 'linear-gradient(90deg, var(--accent-blue), var(--accent-mint))'
          : 'var(--border-strong)',
        opacity: accent ? 0.9 : 0.7,
      }}
    />
  )
}

function WindowDots() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <span className="w-2 h-2 rounded-full" style={{ background: 'var(--border-strong)' }} />
      <span className="w-2 h-2 rounded-full" style={{ background: 'var(--border-strong)' }} />
      <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-mint)' }} />
    </div>
  )
}

/* ── Card 1: Retail ERP (largest, back) ── */
function ERPCard() {
  return (
    <div className="glass rounded-2xl overflow-hidden w-full">
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <WindowDots />
        <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
          Retail ERP
        </span>
      </div>

      <div className="flex gap-3 p-4">
        {/* Sidebar */}
        <div className="flex flex-col gap-2.5 pt-1 w-8 shrink-0" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="block w-8 h-8 rounded-lg"
              style={{
                background: i === 0 ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))' : 'var(--surface-raised)',
                border: '1px solid var(--border-subtle)',
                opacity: i === 0 ? 1 : 0.8,
              }}
            />
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 min-w-0 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Bar w="38%" h={8} />
            <span className="ml-auto"><Bar w="34px" accent /></span>
          </div>

          <svg viewBox="0 0 240 80" className="w-full h-[76px]" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="ph-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent-mint)" stopOpacity="0.32" />
                <stop offset="100%" stopColor="var(--accent-mint)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ph-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent-blue)" />
                <stop offset="100%" stopColor="var(--accent-mint)" />
              </linearGradient>
            </defs>
            <line x1="0" y1="26" x2="240" y2="26" stroke="var(--border-subtle)" strokeWidth="0.6" strokeDasharray="3 3" />
            <line x1="0" y1="52" x2="240" y2="52" stroke="var(--border-subtle)" strokeWidth="0.6" strokeDasharray="3 3" />
            <path d="M0,60 Q30,48 60,54 T120,36 T180,30 T240,14 L240,80 L0,80Z" fill="url(#ph-area)" />
            <path d="M0,60 Q30,48 60,54 T120,36 T180,30 T240,14" fill="none" stroke="url(#ph-line)" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <div className="flex items-end gap-1.5 h-9" aria-hidden="true">
            {[40, 65, 50, 80, 58, 90, 70, 55].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === 5 ? 'linear-gradient(180deg, var(--accent-mint), var(--accent-blue))' : 'var(--border-strong)',
                  opacity: i === 5 ? 1 : 0.55,
                }}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1" aria-hidden="true">
            <Bar w="92%" />
            <Bar w="78%" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Card 2: Salon POS (front-left) ── */
function POSCard() {
  return (
    <div className="glass rounded-2xl overflow-hidden w-full">
      <div
        className="flex items-center justify-between px-3.5 py-2 border-b"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
          Salon POS
        </span>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-mint)' }} aria-hidden="true" />
      </div>
      <div className="p-3.5 flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className="block h-9 rounded-lg"
              style={{
                background: i === 1 ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))' : 'var(--surface-raised)',
                border: '1px solid var(--border-subtle)',
                opacity: i === 1 ? 0.95 : 0.85,
              }}
            />
          ))}
        </div>
        <div
          className="h-8 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-mint))' }}
          aria-hidden="true"
        >
          <Bar w="40%" h={5} />
        </div>
      </div>
    </div>
  )
}

/* ── Card 3: Queue Management (front-right) ── */
function QueueCard() {
  return (
    <div className="glass rounded-2xl overflow-hidden w-full">
      <div
        className="flex items-center justify-between px-3.5 py-2 border-b"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
          Queue Management
        </span>
      </div>
      <div className="p-3.5 flex flex-col gap-3">
        <div
          className="rounded-xl py-3 flex flex-col items-center gap-1"
          style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-subtle)' }}
        >
          <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            Now Serving
          </span>
          <span className="font-display font-bold text-2xl brain-gradient" aria-hidden="true">
            &mdash;
          </span>
        </div>
        <div className="flex flex-col gap-2" aria-hidden="true">
          <Bar w="88%" />
          <Bar w="64%" />
        </div>
      </div>
    </div>
  )
}

/* Same glass frame as before. Body = real image if supplied, else skeleton mockup. */
function ShowcaseCard({ label, src, alt, aspect, dots = false, Fallback, priority = false }) {
  if (!src) return <Fallback />

  return (
    <div className="glass rounded-2xl overflow-hidden w-full">
      <div
        className="flex items-center justify-between px-3.5 py-2 border-b"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        {dots ? <WindowDots /> : null}
        <span
          className={`font-mono text-[10px] tracking-wider uppercase ${dots ? '' : 'mr-auto'}`}
          style={{ color: 'var(--text-muted)' }}
        >
          {label}
        </span>
        {!dots && (
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--accent-mint)' }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Fixed aspect ratio keeps every card the same size and prevents layout shift */}
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <img
          src={src}
          alt={alt}
          width={800}
          height={500}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding="async"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-top select-none"
        />
        {/* Soft top-edge sheen so the image blends into the glass */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

/* ── Hero visual: floating stack ── */
function HeroVisual({ active, reduced }) {
  const floatAnim = (dur, dist) =>
    active && !reduced
      ? { y: [0, -dist, 0], transition: { duration: dur, repeat: Infinity, ease: 'easeInOut' } }
      : {}

  const enter = (delay, x = 70) => ({
    initial: reduced ? false : { opacity: 0, x, filter: 'blur(10px)' },
    animate: active || reduced ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {},
    transition: { duration: 0.95, ease: TRANSITION_EASE, delay },
  })

  const layer = (depth) => ({
    transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px), 0)`,
    transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
  })

  return (
    <div className="relative w-full max-w-[540px] mx-auto aspect-square" aria-hidden="true">
      {/* Glow + ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <EclipseRing size={460} className="opacity-60" />
      </div>
      <div
        className="absolute inset-[8%] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 35% 40%, var(--glow-blue), transparent 60%), radial-gradient(circle at 70% 65%, var(--glow-mint), transparent 60%)',
          opacity: 0.35,
          filter: 'blur(50px)',
        }}
      />

      {/* Connecting lines */}
      <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
        <defs>
          <linearGradient id="ph-link" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-mint)" />
          </linearGradient>
        </defs>
        <path d="M190 262 C 170 320, 130 340, 112 372" stroke="url(#ph-link)" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.6">
          {active && !reduced && (
            <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
          )}
        </path>
        <path d="M350 262 C 380 310, 400 330, 412 364" stroke="url(#ph-link)" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.6">
          {active && !reduced && (
            <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.6s" repeatCount="indefinite" />
          )}
        </path>
        {[[190, 262], [350, 262]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="var(--accent-mint)" />
        ))}
      </svg>

      {/* Card 1: ERP */}
      {/* Card 1: ERP */}
      <div className="absolute left-[3%] top-[6%] w-[72%]" style={layer(10)}>
        <motion.div {...enter(0.5, 80)}>
          <motion.div animate={floatAnim(6, 8)}>
            <ShowcaseCard
              label="Retail ERP"
              dots
              aspect="19 / 10"
              priority
              src={HERO_IMAGES.erp.src}
              alt={HERO_IMAGES.erp.alt}
              Fallback={ERPCard}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Card 2: POS */}
      <div className="absolute left-[-2%] bottom-[5%] w-[46%]" style={layer(22)}>
        <motion.div {...enter(0.8, 60)}>
          <motion.div animate={floatAnim(5, 12)}>
            <ShowcaseCard
              label="Salon POS"
              aspect="3 / 2"
              src={HERO_IMAGES.pos.src}
              alt={HERO_IMAGES.pos.alt}
              Fallback={POSCard}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Card 3: Queue */}
      <div className="absolute right-[-2%] bottom-[14%] w-[46%]" style={layer(16)}>
        <motion.div {...enter(1.0, 90)}>
          <motion.div animate={floatAnim(7, 10)}>
            <ShowcaseCard
              label="Queue Management"
              aspect="3 / 2"
              src={HERO_IMAGES.queue.src}
              alt={HERO_IMAGES.queue.alt}
              Fallback={QueueCard}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Sparkles */}
      {[
        { t: '4%', l: '78%', s: 14, d: 0.2 },
        { t: '48%', l: '-4%', s: 10, d: 1.2 },
        { t: '88%', l: '58%', s: 12, d: 0.7 },
      ].map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="absolute"
          style={{
            top: p.t,
            left: p.l,
            width: p.s,
            height: p.s,
            animation: active && !reduced ? `twinkle 3s ease-in-out infinite ${p.d}s` : 'none',
          }}
        >
          <path d="M12 0C12 6.6 6.6 12 0 12c6.6 0 12 5.4 12 12 0-6.6 5.4-12 12-12-6.6 0-12-5.4-12-12Z" fill="var(--accent-mint)" opacity="0.85" />
        </svg>
      ))}
    </div>
  )
}

export default function ProductsHero() {
  const sectionRef = useRef(null)
  const visualWrapRef = useRef(null)
  const reduced = useReducedMotion()
  const inView = useInView(sectionRef, { once: true, amount: 0.1 })
  const onScreen = useInView(sectionRef, { amount: 0.05 }) // pauses loops when off-screen

  /* Scroll-out parallax: content drifts up slower, visual drifts a bit more */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.15])

  /* Pointer depth parallax via CSS variables (desktop, no re-render) */
  const handleMove = (e) => {
    if (reduced || !visualWrapRef.current) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const r = visualWrapRef.current.getBoundingClientRect()
    visualWrapRef.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    visualWrapRef.current.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }
  const handleLeave = () => {
    if (!visualWrapRef.current) return
    visualWrapRef.current.style.setProperty('--mx', '0')
    visualWrapRef.current.style.setProperty('--my', '0')
  }

  const scrollNext = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  const rise = (delay) => ({
    initial: reduced ? false : { opacity: 0, x: -70, filter: 'blur(10px)' },
    animate: inView || reduced ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {},
    transition: { duration: 0.9, ease: TRANSITION_EASE, delay },
  })

  return (
    <section
      ref={sectionRef}
      id="products-hero"
      className="relative min-h-screen flex items-center overflow-x-clip overflow-y-hidden pt-32 lg:pt-36 pb-20"
      style={{ background: 'var(--base)' }}
    >
      {/* Background: faint grid fading from the centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          opacity: 0.5,
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 60% 45%, #000 20%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 60% 45%, #000 20%, transparent 75%)',
        }}
      />

      {/* Background: circuit traces */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.08 }}
        aria-hidden="true"
      >
        <path d="M0 220 H260 L320 280 H620" stroke="var(--accent-blue)" strokeWidth="1" />
        <path d="M1200 600 H900 L840 540 H620" stroke="var(--accent-mint)" strokeWidth="1" />
        <path d="M300 800 V620 L360 560 V420" stroke="var(--accent-blue)" strokeWidth="1" />
        <circle cx="620" cy="280" r="4" fill="var(--accent-mint)" />
        <circle cx="620" cy="540" r="4" fill="var(--accent-blue)" />
        <circle cx="360" cy="420" r="4" fill="var(--accent-mint)" />
      </svg>

      {/* Background: soft ambient glows (blue left, mint right) */}
      <div
        className="absolute -top-24 left-[-10%] w-[520px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--glow-blue), transparent 70%)', opacity: 0.18, filter: 'blur(60px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-[-8%] w-[520px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--glow-mint), transparent 70%)', opacity: 0.16, filter: 'blur(60px)' }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          {/* ── LEFT: copy ── */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start"
            style={reduced ? {} : { y: contentY, opacity: fade }}
          >
            {/* Eyebrow pill */}
            <motion.div
              {...rise(0.1)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 font-mono text-xs uppercase tracking-widest"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--accent-mint)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-mint)' }} aria-hidden="true" />
              Portfolio / Case Studies
            </motion.div>

            {/* h1 */}
            <SplitWords
              text="Real-World Projects"
              as="h1"
              highlightWords={['Projects']}
              stagger={0.1}
              delay={0.3}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-left mb-6"
              style={{ color: 'var(--text-primary)' }}
            />

            {/* Sub-line placeholder
            <motion.p
              {...rise(0.7)}
              className="text-base sm:text-lg leading-relaxed max-w-lg mb-9"
              style={{ color: 'var(--text-muted)' }}
            >
              [Hero sub-line placeholder]
            </motion.p> */}

            {/* CTAs */}
            <motion.div {...rise(0.9)} className="flex flex-wrap items-center gap-4 mb-10">
              <Button href="/contact" variant="cta" iconRight={ArrowRight} magnetic>
                Request a Live Demo
              </Button>

              {/* TODO: confirm secondary CTA wording with client */}
              <button
                type="button"
                onClick={scrollNext}
                data-cursor="EXPLORE"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border cursor-pointer transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)]"
                style={{
                  background: 'var(--glass-bg)',
                  borderColor: 'var(--glass-border)',
                  color: 'var(--text-primary)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                View Case Studies
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </button>
            </motion.div>

            {/* Product chips */}
            <motion.ul
              {...rise(1.1)}
              className="flex flex-wrap gap-2.5"
              aria-label="Products featured"
            >
              {PRODUCT_CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border"
                  style={{
                    background: 'var(--surface-raised)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))' }}
                    aria-hidden="true"
                  />
                  {chip}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── RIGHT: floating product stack ── */}
          <motion.div
            ref={visualWrapRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="lg:col-span-6 w-full"
            style={reduced ? {} : { y: visualY }}
          >
            <HeroVisual active={inView && onScreen} reduced={reduced} />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" aria-hidden="true">
        <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
          Explore Our Products
        </span>
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="var(--accent-blue)" strokeWidth="1.5" opacity="0.4" />
          {reduced ? (
            <circle cx="10" cy="14" r="3" fill="var(--accent-mint)" opacity="0.8" />
          ) : (
            <motion.circle
              cx="10"
              cy="10"
              r="3"
              fill="var(--accent-mint)"
              opacity="0.8"
              animate={onScreen ? { cy: [10, 20, 10] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </svg>
      </div>
    </section>
  )
}