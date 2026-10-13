import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, AlertCircle } from 'lucide-react'
import useReducedMotion from '../../hooks/useReducedMotion'

/**
 * FormField.jsx
 * Reusable animated input/textarea with:
 * - Floating label (glides up and shrinks on focus or when filled)
 * - Leading icon tile that fills with brain-gradient on focus
 * - 16px rounded hairline border with glow ring on focus
 * - Valid checkmark tile / calm AA-compliant inline error message
 * - Transform-only gentle shake on error (disabled under reduced motion)
 * - Auto-growing textarea within fixed max-height (internal scroll, no page jumps)
 * - Live character counter for textarea
 */
export default function FormField({
  id,
  name,
  label,
  type = 'text',
  value = '',
  onChange,
  onBlur,
  error = null,
  isValid = false,
  required = false,
  autoComplete,
  icon: Icon,
  maxLength = 1000,
  isTextarea = false,
  className = '',
  placeholder = '',
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef(null)
  const reduced = useReducedMotion()

  const isFilled = Boolean(value && String(value).trim().length > 0)
  const isFloating = isFocused || isFilled

  /* Auto-grow textarea within fixed max-height */
  useEffect(() => {
    if (isTextarea && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      const newHeight = Math.min(textareaRef.current.scrollHeight, 180)
      textareaRef.current.style.height = `${Math.max(newHeight, 100)}px`
    }
  }, [value, isTextarea])

  /* Transform-only gentle shake animation variants on error */
  const shakeVariants = {
    idle: { x: 0 },
    shake: {
      x: reduced ? 0 : [0, -6, 6, -4, 4, 0],
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  }

  return (
    <motion.div
      variants={shakeVariants}
      animate={error ? 'shake' : 'idle'}
      className={`relative flex flex-col ${className}`}
    >
      {/* Outer Field Container with hairline border & focus glow */}
      <div
        className={`
          relative flex items-start rounded-2xl transition-all duration-300
          border ${
            error
              ? 'border-[var(--accent-blue)] ring-1 ring-[var(--accent-blue)]/40'
              : isFocused
              ? 'border-[var(--accent-mint)] ring-2 ring-[var(--glow-mint)]/30'
              : 'border-[var(--glass-border)] hover:border-[var(--border-strong)]'
          }
        `}
        style={{
          backgroundColor: 'var(--surface-raised)',
          boxShadow: isFocused
            ? '0 0 20px -4px var(--glow-mint, rgba(140, 196, 138, 0.2))'
            : '0 4px 16px -2px var(--glass-shadow, rgba(0, 0, 0, 0.15))',
        }}
      >
        {/* Leading Icon Tile */}
        {Icon && (
          <div
            className={`
              shrink-0 m-3 w-10 h-10 rounded-xl flex items-center justify-center
              transition-all duration-300
              ${isFocused ? 'brain-gradient-bg shadow-sm' : ''}
            `}
            style={{
              backgroundColor: isFocused ? 'transparent' : 'var(--surface)',
              color: isFocused ? 'var(--base)' : 'var(--text-muted)',
              border: isFocused ? 'none' : '1px solid var(--border-subtle)',
            }}
            aria-hidden="true"
          >
            <Icon size={18} strokeWidth={2} />
          </div>
        )}

        {/* Input & Floating Label Area */}
        <div className="relative flex-1 min-w-0 pr-10">
          {/* Floating Label */}
          <label
            htmlFor={id}
            className={`
              absolute pointer-events-none transition-all duration-200 ease-out select-none font-medium
              ${
                isFloating
                  ? 'top-2.5 text-[11px] font-mono tracking-wider uppercase'
                  : 'top-4 text-sm'
              }
            `}
            style={{
              left: 0,
              color: isFocused
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

          {/* Form Control (Input or Textarea) */}
          {isTextarea ? (
            <textarea
              ref={textareaRef}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                setIsFocused(false)
                onBlur?.(e)
              }}
              required={required}
              maxLength={maxLength}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? `${id}-error` : undefined}
              className="w-full bg-transparent pt-7 pb-3 pr-2 text-sm leading-relaxed outline-none resize-none transition-colors"
              style={{
                color: 'var(--text-primary)',
                minHeight: '100px',
                maxHeight: '180px',
              }}
              placeholder={isFocused ? placeholder : ''}
              {...props}
            />
          ) : (
            <input
              id={id}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                setIsFocused(false)
                onBlur?.(e)
              }}
              required={required}
              autoComplete={autoComplete}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? `${id}-error` : undefined}
              className="w-full bg-transparent pt-7 pb-2.5 text-sm outline-none transition-colors font-body"
              style={{
                color: 'var(--text-primary)',
              }}
              placeholder={isFocused ? placeholder : ''}
              {...props}
            />
          )}
        </div>

        {/* Validation Feedback Indicators (Checkmark or Error Dot) */}
        <div className="absolute right-3.5 top-4 flex items-center gap-1.5 pointer-events-none">
          <AnimatePresence>
            {isValid && !error && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  border: '1px solid var(--accent-mint)',
                  color: 'var(--accent-mint)',
                }}
                aria-label="Valid entry"
              >
                <Check size={13} strokeWidth={2.5} />
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--accent-blue)',
                  color: 'var(--accent-blue-light, var(--accent-blue))',
                }}
                aria-hidden="true"
              >
                <AlertCircle size={14} strokeWidth={2.2} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Info: Live Character Counter for Textarea / Error Message */}
      <div className="flex items-center justify-between min-h-[22px] px-2 pt-1 text-xs">
        {/* Calm Inline Error Message */}
        {error ? (
          <p
            id={`${id}-error`}
            role="alert"
            className="flex items-center gap-1 font-medium font-mono text-[11px]"
            style={{ color: 'var(--accent-blue-light, var(--accent-blue))' }}
          >
            <span>{error}</span>
          </p>
        ) : (
          <span />
        )}

        {/* Textarea Live Character Counter */}
        {isTextarea && (
          <span
            className="font-mono text-[10px] ml-auto transition-colors"
            style={{
              color:
                value.length > maxLength * 0.9
                  ? 'var(--accent-blue)'
                  : 'var(--text-muted)',
            }}
            aria-live="polite"
          >
            {value.length} / {maxLength}
          </span>
        )}
      </div>
    </motion.div>
  )
}
