import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * useSmoothScroll — initialises Lenis smooth scroll.
 * Disabled under prefers-reduced-motion. Touch devices keep native scroll.
 */
export default function useSmoothScroll() {
  const lenisRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      smoothTouch: false,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return lenisRef
}
