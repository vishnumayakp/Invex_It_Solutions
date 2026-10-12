import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquareText } from 'lucide-react'
import useReducedMotion from '../../../hooks/useReducedMotion'

/**
 * FloatingEnquireButton — Floating quick inquiry button at bottom-right, visible after hero scroll.
 */
export default function FloatingEnquireButton({ onOpenModal }) {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: 15 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 15 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {/* <button
            onClick={onOpenModal}
            aria-label="Enquire about software services"
            className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0A1124] text-[#E8ECF8] border border-[#FFB547]/50 shadow-[0_10px_30px_rgba(7,11,26,0.9),0_0_20px_rgba(255,181,71,0.4)] hover:shadow-[0_0_28px_rgba(255,181,71,0.65)] hover:border-[#FFB547] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB547] shadow-[0_0_8px_#FFB547]" />
              {!reduced && (
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#FFB547] opacity-75" />
              )}
            </div>
            <span className="font-['Space_Grotesk',sans-serif] font-bold text-xs uppercase tracking-wider text-[#FFB547]">
              Enquire
            </span>
            <MessageSquareText size={16} className="text-[#E8ECF8] group-hover:text-[#FFB547] transition-colors" />
          </button> */}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
