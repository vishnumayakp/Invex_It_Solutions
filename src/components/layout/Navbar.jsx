import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Sun, Moon, Menu, X } from 'lucide-react'
import { Link, useRouter } from '../../router/Router'
import { useTheme } from '../../hooks/useTheme.jsx'
import { NAV_LINKS } from '../../data/content'
import BrainMark from '../../lib/BrainMark'

export default function Navbar() {
  const { path } = useRouter()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* Close mobile on route change */
  useEffect(() => {
    setMobileOpen(false)
  }, [path])

  const isActive = (href) => {
    if (href === '/') return path === '/'
    return path.startsWith(href)
  }

  return (
    <>
      <motion.header
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-[100]
          transition-all duration-500 ease-out
          ${scrolled
            ? 'w-[calc(100%-2rem)] max-w-4xl glass rounded-full py-2 px-4 md:px-6'
            : 'w-[calc(100%-2rem)] max-w-7xl py-3 px-4 md:px-6 bg-transparent'
          }
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            data-cursor="HOME"
            aria-label="Invex IT Home"
          >
            <BrainMark size={36} />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[var(--text-primary)] font-display font-bold text-lg tracking-wider">
                INVEX
              </span>
              <span className="text-[var(--text-muted)] text-[9px] font-semibold tracking-[0.2em] uppercase">
                IT Solutions
              </span>
            </div>
          </Link>

          {/* ── Desktop Links ── */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-full
                    transition-colors duration-300
                    ${isActive(link.href)
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }
                  `}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-[var(--surface-raised)] -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop Right Side ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-raised)] transition-colors duration-300"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full brain-gradient-bg text-[var(--base)] text-sm font-semibold transition-shadow duration-300 hover:shadow-lg hover:shadow-[var(--glow-blue)]"
              >
                Talk to an Expert
                <ChevronRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile Menu Button ── */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-muted)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full text-[var(--text-primary)]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-[var(--base)] flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`
                      text-3xl font-display font-bold transition-colors duration-300
                      ${isActive(link.href)
                        ? 'brain-gradient'
                        : 'text-[var(--text-primary)] hover:text-[var(--accent-blue)]'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.4 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full brain-gradient-bg text-[var(--base)] text-lg font-semibold"
                >
                  Talk to an Expert
                  <ChevronRight size={18} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
