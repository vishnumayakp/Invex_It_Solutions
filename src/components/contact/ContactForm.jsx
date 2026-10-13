import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, MessageSquare, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react'
import Reveal from '../common/Reveal'
import FormField from './FormField'
import ProjectTypeSelect from './ProjectTypeSelect'
import MagneticButton from '../common/MagneticButton'
import useReducedMotion from '../../hooks/useReducedMotion'
import { TRANSITION_EASE } from '../../utils/motionVariants'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneWhatsApp: '',
    projectType: '',
    requirements: '',
    honeypot: '', // Hidden honeypot field
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [anyFocused, setAnyFocused] = useState(false)

  const successRef = useRef(null)
  const reduced = useReducedMotion()

  /* Validation logic */
  const validateField = (field, value) => {
    switch (field) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required.'
        if (value.trim().length < 2) return 'Please enter your full name.'
        return null
      case 'workEmail':
        if (!value.trim()) return 'Work Email is required.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return 'Please enter a valid business email address.'
        return null
      case 'phoneWhatsApp':
        if (value.trim() && !/^[0-9+\-\s()]{7,20}$/.test(value.trim()))
          return 'Please enter a valid phone number (digits, +, -, spaces).'
        return null
      case 'projectType':
        if (!value) return 'Please select a Project Type.'
        return null
      case 'requirements':
        if (!value.trim()) return 'Please tell us about your requirements.'
        if (value.trim().length < 10)
          return 'Please provide at least 10 characters detailing your scope.'
        return null
      default:
        return null
    }
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      const err = validateField(field, value)
      setErrors((prev) => ({ ...prev, [field]: err }))
    }
  }

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const err = validateField(field, formData[field])
    setErrors((prev) => ({ ...prev, [field]: err }))
  }

  /* Focus management for accessibility on submit */
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Bot detection check
    if (formData.honeypot) {
      console.warn('Bot submission blocked.')
      return
    }

    // Validate all fields
    const newErrors = {}
    const fields = ['fullName', 'workEmail', 'phoneWhatsApp', 'projectType', 'requirements']
    fields.forEach((f) => {
      const err = validateField(f, formData[f])
      if (err) newErrors[f] = err
    })

    setErrors(newErrors)
    setTouched({
      fullName: true,
      workEmail: true,
      phoneWhatsApp: true,
      projectType: true,
      requirements: true,
    })

    if (Object.keys(newErrors).length > 0) {
      // Focus the first invalid field
      const firstInvalid = fields.find((f) => newErrors[f])
      if (firstInvalid) {
        const el = document.getElementById(
          firstInvalid === 'projectType' ? 'project-type' : firstInvalid
        )
        el?.focus()
      }
      return
    }

    /* ─── Submit Function (Separated Async Stub) ─── */
    /* TODO: Connect to the real endpoint (email service / API).
     * Currently running in test mode: simulates a 1-second transmission delay
     * and displays the confirmed success state without claiming premature delivery.
     */
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setTimeout(() => {
        successRef.current?.focus()
      }, 50)
    } catch (err) {
      setErrors({ form: 'An unexpected transmission issue occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      phoneWhatsApp: '',
      projectType: '',
      requirements: '',
      honeypot: '',
    })
    setErrors({})
    setTouched({})
    setIsSuccess(false)
  }

  return (
    <Reveal from="left" className="w-full">
      <div
        onFocus={() => setAnyFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setAnyFocused(false)
          }
        }}
        className="relative rounded-3xl p-6 sm:p-9 md:p-11 border transition-all duration-500 overflow-hidden"
        style={{
          backgroundColor: 'var(--glass-bg)',
          borderColor: anyFocused ? 'var(--accent-mint)' : 'var(--glass-border)',
          backdropFilter: 'blur(20px)',
          boxShadow: anyFocused
            ? '0 0 35px -5px var(--glow-mint, rgba(140, 196, 138, 0.25)), 0 24px 60px -15px var(--glass-shadow, rgba(0,0,0,0.3))'
            : '0 20px 50px -10px var(--glass-shadow, rgba(0,0,0,0.25))',
        }}
      >
        {/* Top-edge Highlight that brightens on focus */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none transition-opacity duration-500 ${
            anyFocused ? 'opacity-100' : 'opacity-40'
          }`}
          style={{
            background:
              'linear-gradient(90deg, transparent 10%, var(--accent-blue) 40%, var(--accent-mint) 60%, transparent 90%)',
          }}
          aria-hidden="true"
        />

        {/* Accessible Section Heading */}
        {/* TODO: Heading wording placeholder */}
        <h2 className="sr-only">Interactive Contact Form</h2>

        {/* Live Announcer for Screen Readers */}
        <div aria-live="polite" className="sr-only">
          {Object.values(errors).filter(Boolean).join('. ')}
        </div>

        {/* ── State 1: Success State Card ── */}
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success-card"
              ref={successRef}
              tabIndex={-1}
              role="status"
              aria-live="polite"
              initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: TRANSITION_EASE }}
              className="py-12 px-4 sm:px-8 text-center flex flex-col items-center justify-center outline-none"
            >
              {/* Animated Gradient Check Ring */}
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--accent-blue), var(--accent-mint))',
                    padding: '2px',
                  }}
                  animate={!reduced ? { rotate: 360 } : {}}
                  transition={!reduced ? { duration: 12, repeat: Infinity, ease: 'linear' } : {}}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{ backgroundColor: 'var(--surface-raised)' }}
                  />
                </motion.div>

                <motion.div
                  initial={reduced ? { scale: 1 } : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 220, damping: 18 }}
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center brain-gradient-bg shadow-lg shadow-[var(--glow-mint)]/40"
                  style={{ color: 'var(--base)' }}
                >
                  <CheckCircle2 size={30} strokeWidth={2.4} />
                </motion.div>
              </div>

              {/* Success Heading */}
              <h3
                className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Thank you.
              </h3>

              {/* Exact Response Expectation Sentence */}
              <p
                className="text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                Our technical consultants review all inquiries and respond within 24 hours to schedule a discovery call.
              </p>

              {/* Reset / Send another message text button */}
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase font-semibold cursor-pointer py-2 px-4 rounded-full border transition-all duration-200 hover:border-[var(--accent-mint)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)]"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--accent-mint)',
                }}
              >
                <RotateCcw size={13} />
                <span>Send another message</span>
              </button>
            </motion.div>
          ) : (
            /* ── State 2: Active Contact Form ── */
            <motion.form
              key="contact-form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-1 sm:gap-2"
            >
              {/* Form Eyebrow & Intro */}
              <div className="mb-4">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 inline-block"
                  style={{
                    backgroundColor: 'var(--surface-raised)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--accent-mint)',
                  }}
                >
                  Direct Inquiry
                </span>
                <p className="text-xs sm:text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                  Submit project scopes, RFP documents, or technical staffing requests.
                </p>
              </div>

              {/* Hidden Honeypot Input for basic anti-spam protection */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website-url">Website</label>
                <input
                  id="website-url"
                  name="honeypot"
                  type="text"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={(e) => handleChange('honeypot', e.target.value)}
                  autoComplete="off"
                />
              </div>

              {/* Field 1: Full Name */}
              <FormField
                id="fullName"
                name="fullName"
                label="Full Name"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                error={touched.fullName ? errors.fullName : null}
                isValid={touched.fullName && !errors.fullName}
                required
                autoComplete="name"
                icon={User}
              />

              {/* Field 2: Work Email */}
              <FormField
                id="workEmail"
                name="workEmail"
                label="Work Email"
                type="email"
                value={formData.workEmail}
                onChange={(e) => handleChange('workEmail', e.target.value)}
                onBlur={() => handleBlur('workEmail')}
                error={touched.workEmail ? errors.workEmail : null}
                isValid={touched.workEmail && !errors.workEmail}
                required
                autoComplete="email"
                icon={Mail}
              />

              {/* Field 3: Phone/WhatsApp */}
              <FormField
                id="phoneWhatsApp"
                name="phoneWhatsApp"
                label="Phone/WhatsApp"
                type="tel"
                value={formData.phoneWhatsApp}
                onChange={(e) => handleChange('phoneWhatsApp', e.target.value)}
                onBlur={() => handleBlur('phoneWhatsApp')}
                error={touched.phoneWhatsApp ? errors.phoneWhatsApp : null}
                isValid={touched.phoneWhatsApp && !errors.phoneWhatsApp && Boolean(formData.phoneWhatsApp)}
                autoComplete="tel"
                icon={Phone}
                placeholder="+91 / +974 / +971"
              />

              {/* Field 4: Project Type (Custom Dropdown) */}
              <ProjectTypeSelect
                id="projectType"
                name="projectType"
                label="Project Type"
                value={formData.projectType}
                onChange={(val) => handleChange('projectType', val)}
                onBlur={() => handleBlur('projectType')}
                error={touched.projectType ? errors.projectType : null}
                required
              />

              {/* Field 5: Tell us about your requirements (Textarea) */}
              <FormField
                id="requirements"
                name="requirements"
                label="Tell us about your requirements"
                isTextarea
                maxLength={1200}
                value={formData.requirements}
                onChange={(e) => handleChange('requirements', e.target.value)}
                onBlur={() => handleBlur('requirements')}
                error={touched.requirements ? errors.requirements : null}
                isValid={touched.requirements && !errors.requirements}
                required
                icon={MessageSquare}
                placeholder="Describe your architectural scope, target platforms, or deployment timelines..."
              />

              {/* Submit Button */}
              <div className="mt-4 pt-2">
                <MagneticButton
                  type="submit"
                  variant="cta"
                  iconRight={isSubmitting ? null : ArrowRight}
                  disabled={isSubmitting}
                  className={`w-full py-4 text-sm font-bold tracking-wide uppercase shadow-xl ${
                    isSubmitting ? 'opacity-80 cursor-wait' : ''
                  }`}
                  data-cursor="SUBMIT"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      <span>Transmitting...</span>
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </MagneticButton>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}
