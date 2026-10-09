import { useState, useEffect, useCallback, createContext, useContext } from 'react'

const RouterContext = createContext({ path: '/', navigate: () => {} })

export function Router({ children }) {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to) => {
    if (to === path) return
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [path])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function Link({ href, children, className = '', onClick, ...props }) {
  const { navigate } = useRouter()

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return
    e.preventDefault()
    if (onClick) onClick(e)
    navigate(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  )
}

export function useRouter() {
  return useContext(RouterContext)
}

export default Router
