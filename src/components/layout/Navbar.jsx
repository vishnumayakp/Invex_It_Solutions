import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { Link, useRouter } from '@/router/Router';
import { useTheme } from '@/hooks/useTheme.jsx';
import { NAV_LINKS } from '@/data/content';
import logoLight from '@/assets/images/invex-logo3.png';

export function Logo({ onClick }) {
  const currentLogo = logoLight;

  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-3.5 sm:gap-4 group"
      data-cursor="HOME"
      aria-label="Invex IT Solutions Home"
    >
      <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-black/5 dark:border-white/20 bg-white shadow-md shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--accent-blue)] group-hover:shadow-[0_0_20px_var(--glow-blue)] p-1">
        <img
          src={currentLogo}
          alt="Invex IT Solutions Logo"
          className="w-full h-full object-contain rounded-xl transition-opacity duration-300"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="leading-tight flex flex-col justify-center">
        <div className="font-display font-bold text-[var(--text-primary)] text-lg sm:text-xl md:text-2xl tracking-tight">
          INVEX
        </div>
        <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)] font-semibold tracking-[0.2em] uppercase mt-0.5">
          IT Solutions
        </div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const { path } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  const isActive = (p) => (p === '/' ? path === '/' : path.startsWith(p));

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 transition-all duration-500"
      >
        <nav
          className={`flex items-center justify-between transition-all duration-500 ${scrolled
            ? 'glass rounded-full px-6 sm:px-8 py-3 sm:py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.3)] max-w-5xl w-full'
            : 'bg-transparent px-6 sm:px-8 py-4 sm:py-5 max-w-7xl w-full'
            }`}
          aria-label="Main Navigation"
        >
          <Logo />

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${isActive(link.href)
                  ? 'text-[var(--accent-mint)] bg-[var(--accent-mint)]/10'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-raised)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)]"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full brain-gradient-bg text-[var(--base)] px-5 py-2.5 text-xs font-bold transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-blue)] hover:scale-[1.03]"
            >
              Talk to an Expert
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-primary)] transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[var(--text-primary)] hover:text-[var(--accent-mint)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="absolute inset-0 bg-[var(--base)]/98 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />
        <div className="relative flex h-full flex-col items-center justify-center gap-6 px-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-center font-display text-3xl font-bold tracking-tight transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isActive(link.href) ? 'brain-gradient' : 'text-[var(--text-primary)]'}`}
              style={{ transitionDelay: `${mobileOpen ? i * 60 + 100 : 0}ms` }}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col items-center gap-4 mt-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full glass text-xs font-semibold text-[var(--text-primary)]"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-full brain-gradient-bg text-[var(--base)] px-7 py-3.5 text-base font-bold"
            >
              Talk to an Expert <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}