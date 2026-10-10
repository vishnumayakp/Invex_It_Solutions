import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * useLenis — smooth scrolling hook powered by Lenis.
 * Lerp ~0.09. Respects prefers-reduced-motion. Retains native scrolling on touch devices.
 */
export default function useLenis() {
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

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return lenisRef
}
