import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, FolderGit2, Database, Store, Wrench, AlertCircle } from 'lucide-react'
import useReducedMotion from '../../hooks/useReducedMotion'

/* The 4 options specified exactly in the prompt */
const PROJECT_TYPES = [
  { value: 'ERP', label: 'ERP (Enterprise Resource Planning)', icon: Database },
  { value: 'POS', label: 'POS (Point of Sale Systems)', icon: Store },
  { value: 'Custom Dev', label: 'Custom Dev (Web & Mobile Engineering)', icon: FolderGit2 },
  { value: 'AMC', label: 'AMC (Annual Maintenance Contract)', icon: Wrench },
]

export default function ProjectTypeSelect({
  id = 'project-type',
  name = 'projectType',
  label = 'Project Type',
  value = '',
  onChange,
  onBlur,
  error = null,
  required = true,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const listboxRef = useRef(null)
  const reduced = useReducedMotion()

  const selectedOption = PROJECT_TYPES.find((opt) => opt.value === value)
  const isFilled = Boolean(value)
  const isFloating = isOpen || isFilled

  /* Keep activeIndex aligned with currently selected value */
  useEffect(() => {
    if (value) {
      const idx = PROJECT_TYPES.findIndex((opt) => opt.value === value)
      if (idx !== -1) setActiveIndex(idx)
    }
  }, [value])

  /* Outside click listener */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (isOpen) {
          setIsOpen(false)
          onBlur?.()
        }
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [isOpen, onBlur])

  const selectOption = useCallback(
    (opt) => {
      onChange?.(opt.value)
      setIsOpen(false)
      triggerRef.current?.focus()
    },
    [onChange]
  )

  /* Keyboard Navigation (Enter, Space, Arrows, Home, End, Escape, Type-ahead) */
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        setIsOpen(true)
      }
      return
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        triggerRef.current?.focus()
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        selectOption(PROJECT_TYPES[activeIndex])
        break
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex((prev) => (prev + 1) % PROJECT_TYPES.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex((prev) => (prev - 1 + PROJECT_TYPES.length) % PROJECT_TYPES.length)
        break
      case 'Home':
        e.preventDefault()
        setActiveIndex(0)
        break
      case 'End':
        e.preventDefault()
        setActiveIndex(PROJECT_TYPES.length - 1)
        break
      default:
        // Single character type-ahead
        if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
          const char = e.key.toLowerCase()
          const matchIndex = PROJECT_TYPES.findIndex((opt) =>
            opt.label.toLowerCase().startsWith(char) || opt.value.toLowerCase().startsWith(char)
          )
          if (matchIndex !== -1) {
            e.preventDefault()
            setActiveIndex(matchIndex)
          }
        }
        break
    }
  }

  const ActiveIcon = selectedOption ? selectedOption.icon : FolderGit2

  return (
    <div ref={containerRef} className={`relative flex flex-col ${className}`}>
      {/* Combobox Trigger Button */}
      <div
        ref={triggerRef}
        id={id}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-activedescendant={isOpen ? `${id}-opt-${activeIndex}` : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={`
          relative flex items-center rounded-2xl cursor-pointer select-none
          transition-all duration-300 outline-none
          border ${
            error
              ? 'border-[var(--accent-blue)] ring-1 ring-[var(--accent-blue)]/40'
              : isOpen
              ? 'border-[var(--accent-mint)] ring-2 ring-[var(--glow-mint)]/30'
              : 'border-[var(--glass-border)] hover:border-[var(--border-strong)]'
          }
        `}
        style={{
          backgroundColor: 'var(--surface-raised)',
          boxShadow: isOpen
            ? '0 0 20px -4px var(--glow-mint, rgba(140, 196, 138, 0.2))'
            : '0 4px 16px -2px var(--glass-shadow, rgba(0, 0, 0, 0.15))',
        }}
      >
        {/* Leading Icon Tile */}
        <div
          className={`
            shrink-0 m-3 w-10 h-10 rounded-xl flex items-center justify-center
            transition-all duration-300
            ${isOpen || isFilled ? 'brain-gradient-bg shadow-sm' : ''}
          `}
          style={{
            backgroundColor: isOpen || isFilled ? 'transparent' : 'var(--surface)',
            color: isOpen || isFilled ? 'var(--base)' : 'var(--text-muted)',
            border: isOpen || isFilled ? 'none' : '1px solid var(--border-subtle)',
          }}
          aria-hidden="true"
        >
          <ActiveIcon size={18} strokeWidth={2} />
        </div>

        {/* Content & Floating Label */}
        <div className="relative flex-1 min-w-0 pr-10">
          <label
            id={`${id}-label`}
            className={`
              absolute pointer-events-none transition-all duration-200 ease-out font-medium
              ${
                isFloating
                  ? 'top-2.5 text-[11px] font-mono tracking-wider uppercase'
                  : 'top-4 text-sm'
              }
            `}
            style={{
              left: 0,
              color: isOpen
                ? 'var(--accent-mint)'
                : error
                ? 'var(--text-primary)'
                : 'var(--text-muted)',
            }}
          >
            {label}
            {required && (
              <span className="ml-1" style={{ color: 'var(--accent-mint)' }}>
                *
              </span>
            )}
          </label>

          {/* Render selected option text */}
          <div className="pt-7 pb-2.5 text-sm truncate font-body" style={{ color: 'var(--text-primary)' }}>
            {selectedOption ? selectedOption.value : <span className="opacity-0">Placeholder</span>}
          </div>
        </div>

        {/* Trailing Chevron Icon */}
        <div className="absolute right-3.5 top-4.5 flex items-center gap-1.5 pointer-events-none">
          {error ? (
            <AlertCircle size={15} style={{ color: 'var(--accent-blue)' }} aria-hidden="true" />
          ) : (
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ color: 'var(--text-muted)' }}
              aria-hidden="true"
            >
              <ChevronDown size={18} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Floating Glass Dropdown Listbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={listboxRef}
            id={`${id}-listbox`}
            role="listbox"
            aria-labelledby={`${id}-label`}
            tabIndex={-1}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl border p-2 shadow-2xl overflow-hidden backdrop-blur-xl"
            style={{
              backgroundColor: 'var(--surface-raised)',
              borderColor: 'var(--glass-border)',
              maxHeight: '260px',
              overflowY: 'auto',
            }}
          >
            {PROJECT_TYPES.map((opt, idx) => {
              const isSelected = value === opt.value
              const isItemActive = activeIndex === idx
              const OptIcon = opt.icon

              return (
                <li
                  key={opt.value}
                  id={`${id}-opt-${idx}`}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectOption(opt)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`
                    relative flex items-center justify-between px-3.5 py-3 rounded-xl cursor-pointer text-sm font-medium
                    transition-all duration-150 select-none
                    ${isItemActive ? 'brain-gradient-bg' : ''}
                  `}
                  style={{
                    color: isItemActive ? 'var(--base)' : 'var(--text-primary)',
                    backgroundColor: isItemActive ? undefined : isSelected ? 'var(--glass-bg)' : 'transparent',
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: isItemActive ? 'rgba(255,255,255,0.2)' : 'var(--surface)',
                        borderColor: isItemActive ? 'transparent' : 'var(--border-subtle)',
                        color: isItemActive ? 'var(--base)' : 'var(--accent-mint)',
                      }}
                    >
                      <OptIcon size={14} />
                    </div>
                    <span className="truncate">{opt.label}</span>
                  </div>

                  {isSelected && (
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: isItemActive ? 'var(--base)' : 'var(--glass-bg)',
                        color: isItemActive ? 'var(--accent-mint)' : 'var(--accent-mint)',
                        border: '1px solid var(--accent-mint)',
                      }}
                    >
                      <Check size={11} strokeWidth={3} />
                    </div>
                  )}
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Inline Error Message */}
      <div className="min-h-[22px] px-2 pt-1 text-xs">
        {error && (
          <p
            id={`${id}-error`}
            role="alert"
            className="flex items-center gap-1 font-medium font-mono text-[11px]"
            style={{ color: 'var(--accent-blue-light, var(--accent-blue))' }}
          >
            <span>{error}</span>
          </p>
        )}
      </div>
    </div>
  )
}
