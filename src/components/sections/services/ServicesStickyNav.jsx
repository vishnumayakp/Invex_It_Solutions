// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { SERVICES_HERO } from '../../../data/services'
// import useReducedMotion from '../../../hooks/useReducedMotion'

// /**
//  * ServicesStickyNav — Pill-style sticky nav that highlights active section on scroll.
//  * Theme-aware: uses CSS variable --bp-* tokens.
//  */
// export default function ServicesStickyNav() {
//   const [activeId, setActiveId] = useState('retail')
//   const reduced = useReducedMotion()
//   const navItems = SERVICES_HERO.sectionNav

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 200
//       for (let i = navItems.length - 1; i >= 0; i--) {
//         const item = navItems[i]
//         const element = document.getElementById(item.id)
//         if (element) {
//           const top = element.offsetTop
//           if (scrollPosition >= top) {
//             setActiveId(item.id)
//             break
//           }
//         }
//       }
//     }
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     handleScroll()
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [navItems])

//   const scrollToSection = (e, id) => {
//     e.preventDefault()
//     const target = document.getElementById(id)
//     if (target) {
//       const offset = 100
//       const bodyRect = document.body.getBoundingClientRect().top
//       const elementRect = target.getBoundingClientRect().top
//       const offsetPosition = elementRect - bodyRect - offset
//       window.scrollTo({ top: offsetPosition, behavior: reduced ? 'auto' : 'smooth' })
//       setActiveId(id)
//     }
//   }

//   return (
//     <div className="sticky top-20 sm:top-24 z-30 w-full flex justify-center px-4 py-3 pointer-events-none">
//       <nav
//         aria-label="Services Navigation"
//         className="pointer-events-auto inline-flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full backdrop-blur-xl shadow-[0_8px_32px_var(--bp-shadow),0_0_18px_rgba(20,241,217,0.12)] overflow-x-auto max-w-full no-scrollbar transition-colors duration-300"
//         style={{
//           backgroundColor: 'var(--bp-nav-bg)',
//           border: '1px solid rgba(20,241,217,0.25)',
//         }}
//       >
//         {navItems.map((item) => {
//           const isActive = activeId === item.id
//           return (
//             <button
//               key={item.id}
//               onClick={(e) => scrollToSection(e, item.id)}
//               className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors duration-300 shrink-0 ${
//                 isActive
//                   ? 'text-[#070B1A] font-bold'
//                   : 'font-medium hover:text-[#14F1D9]'
//               }`}
//               style={{ color: isActive ? '#070B1A' : 'var(--bp-muted)' }}
//             >
//               {isActive && (
//                 <motion.div
//                   layoutId="active-nav-pill"
//                   transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                   className="absolute inset-0 rounded-full bg-gradient-to-r from-[#14F1D9] to-[#14F1D9]/90 shadow-[0_0_14px_rgba(20,241,217,0.6)]"
//                 />
//               )}
//               <span className="relative z-10">{item.label}</span>
//             </button>
//           )
//         })}
//       </nav>
//     </div>
//   )
// }


import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SERVICES_HERO } from '../../../data/services'
import useReducedMotion from '../../../hooks/useReducedMotion'

/* ── Home-page palette (green + black) ── */
const MINT = 'var(--accent-mint, #BFE0B8)'
const BLUE = 'var(--accent-blue, #6E8DA6)'
const INK = '#050806' // near-black with a green tint
const mint = (pct) => `color-mix(in srgb, ${MINT} ${pct}%, transparent)`

const NAV_BG = 'color-mix(in srgb, var(--base, #050806) 85%, #BFE0B8 4%)'

/**
 * ServicesStickyNav — Pill-style sticky nav that highlights active section on scroll.
 * Theme-aware: uses the home page CSS variable tokens.
 */
export default function ServicesStickyNav() {
  const [activeId, setActiveId] = useState('retail')
  const reduced = useReducedMotion()
  const navItems = SERVICES_HERO.sectionNav

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i]
        const element = document.getElementById(item.id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveId(item.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = target.getBoundingClientRect().top
      const offsetPosition = elementRect - bodyRect - offset
      window.scrollTo({ top: offsetPosition, behavior: reduced ? 'auto' : 'smooth' })
      setActiveId(id)
    }
  }

  return (
    <div className="sticky top-20 sm:top-24 z-30 w-full flex justify-center px-4 py-3 pointer-events-none">
      <nav
        aria-label="Services Navigation"
        className="pointer-events-auto inline-flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full backdrop-blur-xl overflow-x-auto max-w-full no-scrollbar transition-colors duration-300"
        style={{
          backgroundColor: NAV_BG,
          border: `1px solid ${mint(25)}`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 18px ${mint(12)}`,
        }}
      >
        {navItems.map((item) => {
          const isActive = activeId === item.id
          return (
            <button
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors duration-300 shrink-0 ${isActive
                ? 'font-bold'
                : 'font-medium hover:text-[var(--accent-mint)]'
                }`}
              style={{ color: isActive ? INK : 'var(--text-muted)' }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${MINT}, ${BLUE})`,
                    boxShadow: `0 0 14px ${mint(50)}`,
                  }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}