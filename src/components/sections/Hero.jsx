// import { useRef, useEffect, useState, useCallback } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { ArrowRight, ChevronDown } from 'lucide-react'
// import { HOME_HERO } from '../../data/content'
// import useReducedMotion from '../../hooks/useReducedMotion'
// import Button from '../common/Button'
// import GlassPanel from '../common/GlassPanel'

// /* ── Animated Canvas Background ── */
// function HeroCanvas() {
//   const canvasRef = useRef(null)
//   const animRef = useRef(null)
//   const nodesRef = useRef([])
//   const mouseRef = useRef({ x: 0, y: 0 })
//   const prefersReduced = useRef(
//     typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
//   )

//   const initNodes = useCallback((w, h) => {
//     const count = Math.min(Math.floor((w * h) / 12000), 80)
//     const nodes = []
//     for (let i = 0; i < count; i++) {
//       nodes.push({
//         x: Math.random() * w,
//         y: Math.random() * h,
//         vx: (Math.random() - 0.5) * 0.3,
//         vy: (Math.random() - 0.5) * 0.3,
//         r: Math.random() * 2.5 + 1,
//         side: i < count / 2 ? 'blue' : 'mint',
//       })
//     }
//     nodesRef.current = nodes
//   }, [])

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext('2d')
//     const dpr = Math.min(window.devicePixelRatio || 1, 2)

//     const resize = () => {
//       const w = canvas.parentElement.clientWidth
//       const h = canvas.parentElement.clientHeight
//       canvas.width = w * dpr
//       canvas.height = h * dpr
//       canvas.style.width = w + 'px'
//       canvas.style.height = h + 'px'
//       ctx.scale(dpr, dpr)
//       initNodes(w, h)
//     }

//     const onMouse = (e) => {
//       const rect = canvas.getBoundingClientRect()
//       mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
//     }

//     resize()
//     window.addEventListener('resize', resize)
//     window.addEventListener('mousemove', onMouse)

//     if (prefersReduced.current) {
//       /* Static fallback: draw once */
//       const w = canvas.parentElement.clientWidth
//       const h = canvas.parentElement.clientHeight
//       drawFrame(ctx, w, h, nodesRef.current, mouseRef.current, false)
//       return () => {
//         window.removeEventListener('resize', resize)
//         window.removeEventListener('mousemove', onMouse)
//       }
//     }

//     const animate = () => {
//       const w = canvas.parentElement.clientWidth
//       const h = canvas.parentElement.clientHeight
//       drawFrame(ctx, w, h, nodesRef.current, mouseRef.current, true)
//       animRef.current = requestAnimationFrame(animate)
//     }
//     animRef.current = requestAnimationFrame(animate)

//     return () => {
//       cancelAnimationFrame(animRef.current)
//       window.removeEventListener('resize', resize)
//       window.removeEventListener('mousemove', onMouse)
//     }
//   }, [initNodes])

//   return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
// }

// function drawFrame(ctx, w, h, nodes, mouse, animated) {
//   ctx.clearRect(0, 0, w, h)

//   const blueColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-blue').trim() || '#6E8DA6'
//   const mintColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-mint').trim() || '#BFE0B8'

//   /* Update & draw nodes */
//   for (let i = 0; i < nodes.length; i++) {
//     const n = nodes[i]
//     if (animated) {
//       n.x += n.vx
//       n.y += n.vy
//       if (n.x < 0 || n.x > w) n.vx *= -1
//       if (n.y < 0 || n.y > h) n.vy *= -1

//       /* Mouse repulsion */
//       const dx = n.x - mouse.x
//       const dy = n.y - mouse.y
//       const dist = Math.sqrt(dx * dx + dy * dy)
//       if (dist < 150 && dist > 0) {
//         const force = (150 - dist) / 150 * 0.5
//         n.x += (dx / dist) * force
//         n.y += (dy / dist) * force
//       }
//     }

//     const color = n.side === 'blue' ? blueColor : mintColor
//     /* Ring terminal node */
//     ctx.beginPath()
//     ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
//     ctx.strokeStyle = color
//     ctx.globalAlpha = 0.6
//     ctx.lineWidth = 1
//     ctx.stroke()

//     /* Draw connections */
//     for (let j = i + 1; j < nodes.length; j++) {
//       const m = nodes[j]
//       const ddx = n.x - m.x
//       const ddy = n.y - m.y
//       const d = Math.sqrt(ddx * ddx + ddy * ddy)
//       if (d < 120) {
//         ctx.beginPath()
//         ctx.moveTo(n.x, n.y)
//         /* 90° bend circuit trace */
//         if (Math.abs(ddx) > Math.abs(ddy)) {
//           ctx.lineTo(m.x, n.y)
//           ctx.lineTo(m.x, m.y)
//         } else {
//           ctx.lineTo(n.x, m.y)
//           ctx.lineTo(m.x, m.y)
//         }
//         ctx.strokeStyle = n.side === 'blue' ? blueColor : mintColor
//         ctx.globalAlpha = (1 - d / 120) * 0.35
//         ctx.lineWidth = 1
//         ctx.stroke()
//       }
//     }
//   }
//   ctx.globalAlpha = 1
// }

// /* ── Live Stats Ticker ── */
// function LiveStats({ stats }) {
//   const [values, setValues] = useState(() => stats.map(() => 0))
//   const [countedUp, setCountedUp] = useState(false)

//   useEffect(() => {
//     const duration = 1200
//     const startTime = Date.now()
//     let frameId

//     const tick = () => {
//       const elapsed = Date.now() - startTime
//       const progress = Math.min(elapsed / duration, 1)
//       const eased = 1 - Math.pow(1 - progress, 3)

//       setValues(stats.map(s => {
//         const val = s.value * eased
//         return s.suffix === '%' ? Number(val.toFixed(2)) : Math.floor(val)
//       }))

//       if (progress < 1) {
//         frameId = requestAnimationFrame(tick)
//       } else {
//         setCountedUp(true)
//       }
//     }

//     const timeout = setTimeout(() => {
//       frameId = requestAnimationFrame(tick)
//     }, 1200)

//     return () => {
//       clearTimeout(timeout)
//       if (frameId) cancelAnimationFrame(frameId)
//     }
//   }, [stats])

//   useEffect(() => {
//     if (!countedUp) return
//     const interval = setInterval(() => {
//       setValues(prev => prev.map((v, i) => {
//         const base = stats[i].value
//         const jitter = stats[i].suffix === '%' ? (Math.random() - 0.5) * 0.02 : Math.floor((Math.random() - 0.5) * base * 0.05)
//         return stats[i].suffix === '%' ? Math.min(100, Math.max(99.9, base + jitter)) : Math.max(0, Math.floor(base + jitter))
//       }))
//     }, 2000)
//     return () => clearInterval(interval)
//   }, [countedUp, stats])

//   return (
//     <GlassPanel className="inline-flex flex-wrap gap-6 md:gap-10 !py-4 !px-6">
//       <span className="flex items-center gap-2 text-xs text-[var(--accent-mint)] font-mono">
//         <span className="w-2 h-2 rounded-full bg-[var(--accent-mint)] animate-pulse" />
//         LIVE
//       </span>
//       {stats.map((stat, i) => (
//         <div key={stat.label} className="text-center">
//           <div className="text-[var(--text-primary)] font-display font-bold text-lg tabular-nums">
//             {stat.suffix === '%' ? values[i].toFixed(2) : values[i].toLocaleString()}{stat.suffix}
//           </div>
//           <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider">{stat.label}</div>
//         </div>
//       ))}
//     </GlassPanel>
//   )
// }

// /* ── Main Hero ── */
// export default function Hero() {
//   const heroRef = useRef(null)
//   const prefersReduced = useReducedMotion()
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768)
//     }
//     checkMobile()
//     window.addEventListener('resize', checkMobile, { passive: true })
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ['start start', 'end start'],
//   })

//   const contentY = useTransform(scrollYProgress, [0, 1], prefersReduced ? ['0%', '0%'] : ['0%', '40%'])
//   const contentScale = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [1, 0.94])
//   const contentOpacity = useTransform(scrollYProgress, [0, 0.85, 1], prefersReduced ? [1, 1, 1] : [1, 0.5, 0.2])
//   const canvasY = useTransform(scrollYProgress, [0, 1], prefersReduced ? ['0%', '0%'] : ['0%', '20%'])

//   const leftX = isMobile ? -32 : -90
//   const rightX = isMobile ? 32 : 90

//   return (
//     <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-x-clip overflow-hidden" id="hero">
//       {/* Full-screen wake-up overlay (0.00 -> 0.9s) */}
//       <motion.div
//         aria-hidden="true"
//         className="fixed inset-0 pointer-events-none z-50 bg-[var(--base)]"
//         initial={{ opacity: 1 }}
//         animate={{ opacity: 0 }}
//         transition={prefersReduced ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//       />

//       {/* Canvas Background (0.25 -> 1.2s) */}
//       <motion.div
//         style={{ y: canvasY }}
//         initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={prefersReduced ? { duration: 0 } : { duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
//         className="absolute inset-0"
//       >
//         <HeroCanvas />
//         {/* Radial fade */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[var(--base)] via-transparent to-[var(--base)] opacity-60" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[var(--base)] via-transparent to-[var(--base)] opacity-40" />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
//         className="relative container-wide pt-32 pb-20"
//       >
//         <div className="max-w-4xl">
//           {/* Headline (0.35s entrance from LEFT) */}
//           <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
//             {HOME_HERO.headline.map((line, i) => (
//               <motion.span
//                 key={i}
//                 className="block"
//                 initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: leftX, filter: 'blur(10px)' }}
//                 animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
//                 transition={
//                   prefersReduced
//                     ? { duration: 0 }
//                     : { duration: 0.85, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }
//                 }
//               >
//                 {line.split(' ').map((word, j) => {
//                   const isHighlight = HOME_HERO.highlightWords.some(hw =>
//                     hw.toLowerCase().includes(word.toLowerCase()) && word.length > 3
//                   )
//                   return (
//                     <span key={j}>
//                       {isHighlight ? (
//                         <span className="brain-gradient">{word}</span>
//                       ) : (
//                         <span className="text-[var(--text-primary)]">{word}</span>
//                       )}
//                       {' '}
//                     </span>
//                   )
//                 })}
//               </motion.span>
//             ))}
//           </h1>

//           {/* Sub-copy (0.80s entrance from LEFT) */}
//           <motion.p
//             className="text-base sm:text-lg md:text-lg text-[color:var(--text-muted)] max-w-2xl mb-10 leading-relaxed font-normal transition-colors duration-300"
//             initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: leftX, filter: 'blur(10px)' }}
//             animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
//             transition={
//               prefersReduced
//                 ? { duration: 0 }
//                 : { duration: 0.85, delay: 0.8, ease: [0.22, 1, 0.36, 1] }
//             }
//           >
//             {HOME_HERO.subCopy}
//           </motion.p>

//           {/* CTAs (1.00s entrance from LEFT) */}
//           <motion.div
//             className="flex flex-wrap gap-4 mb-12"
//             initial={prefersReduced ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: leftX, scale: 0.96, filter: 'blur(10px)' }}
//             animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
//             transition={
//               prefersReduced
//                 ? { duration: 0 }
//                 : { duration: 0.85, delay: 1.0, ease: [0.22, 1, 0.36, 1] }
//             }
//           >
//             <Button
//               href={HOME_HERO.ctaPrimary.href}
//               variant="cta"
//               iconRight={ArrowRight}
//               magnetic
//               className="pulse-glow-once"
//             >
//               {HOME_HERO.ctaPrimary.label}
//             </Button>
//             <Button href={HOME_HERO.ctaSecondary.href} variant="secondary">
//               {HOME_HERO.ctaSecondary.label}
//             </Button>
//           </motion.div>

//           {/* Live Stats (0.60s entrance from RIGHT) */}
//           <motion.div
//             initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: rightX, filter: 'blur(10px)' }}
//             animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
//             transition={
//               prefersReduced
//                 ? { duration: 0 }
//                 : { duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }
//             }
//           >
//             <LiveStats stats={HOME_HERO.liveStats} />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll Indicator (1.50s entrance from BOTTOM) */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
//         initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={prefersReduced ? { duration: 0 } : { duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
//       >
//         <motion.div
//           animate={prefersReduced ? {} : { y: [0, 8, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
//         >
//           <ChevronDown size={20} className="text-[var(--accent-blue)]" />
//         </motion.div>
//         <svg width="3" height="24" viewBox="0 0 3 24">
//           <line x1="1.5" y1="0" x2="1.5" y2="20" stroke="var(--accent-blue)" strokeWidth="1" strokeLinecap="round" />
//           <circle cx="1.5" cy="22" r="1.5" fill="none" stroke="var(--accent-mint)" strokeWidth="1" />
//         </svg>
//       </motion.div>
//     </section>
//   )
// }



import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HOME_HERO } from '../../data/content'
import useReducedMotion from '../../hooks/useReducedMotion'
import Button from '../common/Button'
import GlassPanel from '../common/GlassPanel'
/* Hero visual (replace the filename with your actual image) */
import heroVisual from '../../assets/images/hero_img.png'

/* ── Animated Canvas Background ── */
function HeroCanvas() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const nodesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const prefersReduced = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  const initNodes = useCallback((w, h) => {
    const count = Math.min(Math.floor((w * h) / 12000), 80)
    const nodes = []
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2.5 + 1,
        side: i < count / 2 ? 'blue' : 'mint',
      })
    }
    nodesRef.current = nodes
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const w = canvas.parentElement.clientWidth
      const h = canvas.parentElement.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.scale(dpr, dpr)
      initNodes(w, h)
    }

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse)

    if (prefersReduced.current) {
      /* Static fallback: draw once */
      const w = canvas.parentElement.clientWidth
      const h = canvas.parentElement.clientHeight
      drawFrame(ctx, w, h, nodesRef.current, mouseRef.current, false)
      return () => {
        window.removeEventListener('resize', resize)
        window.removeEventListener('mousemove', onMouse)
      }
    }

    const animate = () => {
      const w = canvas.parentElement.clientWidth
      const h = canvas.parentElement.clientHeight
      drawFrame(ctx, w, h, nodesRef.current, mouseRef.current, true)
      animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [initNodes])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

function drawFrame(ctx, w, h, nodes, mouse, animated) {
  ctx.clearRect(0, 0, w, h)

  const blueColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-blue').trim() || '#6E8DA6'
  const mintColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-mint').trim() || '#BFE0B8'

  /* Update & draw nodes */
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i]
    if (animated) {
      n.x += n.vx
      n.y += n.vy
      if (n.x < 0 || n.x > w) n.vx *= -1
      if (n.y < 0 || n.y > h) n.vy *= -1

      /* Mouse repulsion */
      const dx = n.x - mouse.x
      const dy = n.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 150 && dist > 0) {
        const force = (150 - dist) / 150 * 0.5
        n.x += (dx / dist) * force
        n.y += (dy / dist) * force
      }
    }

    const color = n.side === 'blue' ? blueColor : mintColor
    /* Ring terminal node */
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
    ctx.strokeStyle = color
    ctx.globalAlpha = 0.6
    ctx.lineWidth = 1
    ctx.stroke()

    /* Draw connections */
    for (let j = i + 1; j < nodes.length; j++) {
      const m = nodes[j]
      const ddx = n.x - m.x
      const ddy = n.y - m.y
      const d = Math.sqrt(ddx * ddx + ddy * ddy)
      if (d < 120) {
        ctx.beginPath()
        ctx.moveTo(n.x, n.y)
        /* 90° bend circuit trace */
        if (Math.abs(ddx) > Math.abs(ddy)) {
          ctx.lineTo(m.x, n.y)
          ctx.lineTo(m.x, m.y)
        } else {
          ctx.lineTo(n.x, m.y)
          ctx.lineTo(m.x, m.y)
        }
        ctx.strokeStyle = n.side === 'blue' ? blueColor : mintColor
        ctx.globalAlpha = (1 - d / 120) * 0.35
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }
  }
  ctx.globalAlpha = 1
}

/* ── Live Stats Ticker ── */
function LiveStats({ stats }) {
  const [values, setValues] = useState(() => stats.map(() => 0))
  const [countedUp, setCountedUp] = useState(false)

  useEffect(() => {
    const duration = 1200
    const startTime = Date.now()
    let frameId

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setValues(stats.map(s => {
        const val = s.value * eased
        return s.suffix === '%' ? Number(val.toFixed(2)) : Math.floor(val)
      }))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        setCountedUp(true)
      }
    }

    const timeout = setTimeout(() => {
      frameId = requestAnimationFrame(tick)
    }, 1200)

    return () => {
      clearTimeout(timeout)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [stats])

  useEffect(() => {
    if (!countedUp) return
    const interval = setInterval(() => {
      setValues(prev => prev.map((v, i) => {
        const base = stats[i].value
        const jitter = stats[i].suffix === '%' ? (Math.random() - 0.5) * 0.02 : Math.floor((Math.random() - 0.5) * base * 0.05)
        return stats[i].suffix === '%' ? Math.min(100, Math.max(99.9, base + jitter)) : Math.max(0, Math.floor(base + jitter))
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [countedUp, stats])

  // return (
  //   <GlassPanel className="inline-flex flex-wrap gap-6 md:gap-10 !py-4 !px-6">
  //     <span className="flex items-center gap-2 text-xs text-[var(--accent-mint)] font-mono">
  //       <span className="w-2 h-2 rounded-full bg-[var(--accent-mint)] animate-pulse" />
  //       LIVE
  //     </span>
  //     {stats.map((stat, i) => (
  //       <div key={stat.label} className="text-center">
  //         <div className="text-[var(--text-primary)] font-display font-bold text-lg tabular-nums">
  //           {stat.suffix === '%' ? values[i].toFixed(2) : values[i].toLocaleString()}{stat.suffix}
  //         </div>
  //         <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider">{stat.label}</div>
  //       </div>
  //     ))}
  //   </GlassPanel>
  // )
}

/* ── Main Hero ── */
export default function Hero() {
  const heroRef = useRef(null)
  const prefersReduced = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], prefersReduced ? ['0%', '0%'] : ['0%', '40%'])
  const contentScale = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [1, 0.94])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85, 1], prefersReduced ? [1, 1, 1] : [1, 0.5, 0.2])
  const canvasY = useTransform(scrollYProgress, [0, 1], prefersReduced ? ['0%', '0%'] : ['0%', '20%'])

  const leftX = isMobile ? -32 : -90
  const rightX = isMobile ? 32 : 90

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-x-clip overflow-hidden" id="hero">
      {/* Full-screen wake-up overlay (0.00 -> 0.9s) */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-50 bg-[var(--base)]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Canvas Background (0.25 -> 1.2s) */}
      <motion.div
        style={{ y: canvasY }}
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <HeroCanvas />
        {/* Radial fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--base)] via-transparent to-[var(--base)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--base)] via-transparent to-[var(--base)] opacity-40" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
        className="relative container-wide pt-32 pb-20"
      >
        {/* Hero visual: desktop (xl and up), sits in the blank right side */}
        <div className="hidden xl:block absolute right-0 top-[56%] -translate-y-1/2 w-[clamp(200px,20vw,360px)] pointer-events-none">
          <motion.div
            initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: rightX, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 0.85, delay: 0.7, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <motion.img
              src={heroVisual}
              alt="Invex IT Solutions platform preview"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain select-none"
              animate={prefersReduced ? {} : { y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              draggable={false}
            />
          </motion.div>
        </div>

        <div className="max-w-4xl">
          {/* Headline (0.35s entrance from LEFT) */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
            {HOME_HERO.headline.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: leftX, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : { duration: 0.85, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }
                }
              >
                {line.split(' ').map((word, j) => {
                  const isHighlight = HOME_HERO.highlightWords.some(hw =>
                    hw.toLowerCase().includes(word.toLowerCase()) && word.length > 3
                  )
                  return (
                    <span key={j}>
                      {isHighlight ? (
                        <span className="brain-gradient">{word}</span>
                      ) : (
                        <span className="text-[var(--text-primary)]">{word}</span>
                      )}
                      {' '}
                    </span>
                  )
                })}
              </motion.span>
            ))}
          </h1>

          {/* Sub-copy (0.80s entrance from LEFT) */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-[color:var(--text-muted)] max-w-2xl mb-10 leading-relaxed font-normal transition-colors duration-300"
            initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: leftX, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 0.85, delay: 0.8, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {HOME_HERO.subCopy}
          </motion.p>

          {/* CTAs (1.00s entrance from LEFT) */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={prefersReduced ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: leftX, scale: 0.96, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 0.85, delay: 1.0, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <Button
              href={HOME_HERO.ctaPrimary.href}
              variant="cta"
              iconRight={ArrowRight}
              magnetic
              className="pulse-glow-once"
            >
              {HOME_HERO.ctaPrimary.label}
            </Button>
            <Button href={HOME_HERO.ctaSecondary.href} variant="secondary">
              {HOME_HERO.ctaSecondary.label}
            </Button>
          </motion.div>

          {/* Live Stats (0.60s entrance from RIGHT) */}
          <motion.div
            initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: rightX, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <LiveStats stats={HOME_HERO.liveStats} />
          </motion.div>

          {/* Hero visual: below xl (phones and tablets), shown under the stats */}
          <motion.div
            className="xl:hidden mt-12 flex justify-center"
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 0.85, delay: 0.9, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <img
              src={heroVisual}
              alt="Invex IT Solutions platform preview"
              loading="lazy"
              decoding="async"
              className="w-[min(68vw,260px)] h-auto object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator (1.50s entrance from BOTTOM) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[var(--accent-blue)]" />
        </motion.div>
        <svg width="3" height="24" viewBox="0 0 3 24">
          <line x1="1.5" y1="0" x2="1.5" y2="20" stroke="var(--accent-blue)" strokeWidth="1" strokeLinecap="round" />
          <circle cx="1.5" cy="22" r="1.5" fill="none" stroke="var(--accent-mint)" strokeWidth="1" />
        </svg>
      </motion.div>
    </section>
  )
}