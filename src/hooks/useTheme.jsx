import { useState, useEffect, useCallback, createContext, useContext } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} })

/* Inline script to prevent flash — paste into index.html <head> */
export const THEME_INIT_SCRIPT = `
  (function(){
    try {
      var t = localStorage.getItem('invex-theme');
      if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', t);
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('invex-theme')
      if (stored) return stored
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light'
      }
    } catch {
      // storage unavailable
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('invex-theme', theme)
    } catch {
      // storage unavailable
    }
  }, [theme])

  /* Respect OS preference changes */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const handler = (e) => {
      try {
        if (!localStorage.getItem('invex-theme')) {
          setTheme(e.matches ? 'light' : 'dark')
        }
      } catch {
        setTheme(e.matches ? 'light' : 'dark')
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default useTheme
