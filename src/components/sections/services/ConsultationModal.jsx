import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2 } from 'lucide-react'
import { CLOSING_CTA } from '../../../data/services'

/**
 * ConsultationModal — Contact inquiry modal with Name, Phone, Business Type dropdown, and Message.
 */
export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: CLOSING_CTA.serviceOptions[0],
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission handler
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
      setFormData({
        name: '',
        phone: '',
        serviceType: CLOSING_CTA.serviceOptions[0],
        message: '',
      })
    }, 2200)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040711]/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative w-full max-w-lg rounded-[24px] bg-[#0A1124] border border-[#FFB547]/40 shadow-[0_24px_70px_rgba(7,11,26,0.95),0_0_30px_rgba(255,181,71,0.2)] p-6 sm:p-8 z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-[#0E162B] text-[#8A93B2] hover:text-[#E8ECF8] border border-[#14F1D9]/20 hover:border-[#14F1D9] transition-colors"
          >
            <X size={18} />
          </button>

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#14F1D9]/20 border border-[#14F1D9] flex items-center justify-center text-[#14F1D9] mb-4 shadow-[0_0_20px_#14F1D9]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-2xl text-[#E8ECF8] mb-2">
                Consultation Request Received
              </h3>
              <p className="font-sans text-sm text-[#8A93B2] max-w-sm">
                Our enterprise software architect will contact you within 2 business hours.
              </p>
            </div>
          ) : (
            <>
              {/* Modal Header */}
              <div className="mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFB547] block mb-1">
                  Direct Architecture Consultation
                </span>
                <h3
                  id="modal-title"
                  className="font-['Space_Grotesk',sans-serif] font-bold text-2xl sm:text-3xl text-[#E8ECF8]"
                >
                  Request a Free Consultation
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#8A93B2] mt-1">
                  Discuss your physical floor workflows, POS till counts, and ERP requirements with our lead engineers.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-[#E8ECF8] mb-1.5 uppercase">
                    Your Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma / James Vance"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-[#14F1D9]/30 text-sm text-[#E8ECF8] placeholder-[#8A93B2]/50 focus:outline-none focus:border-[#14F1D9] focus:ring-1 focus:ring-[#14F1D9]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-mono text-xs text-[#E8ECF8] mb-1.5 uppercase">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210 or +974 4400 0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-[#14F1D9]/30 text-sm text-[#E8ECF8] placeholder-[#8A93B2]/50 focus:outline-none focus:border-[#14F1D9] focus:ring-1 focus:ring-[#14F1D9]"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block font-mono text-xs text-[#E8ECF8] mb-1.5 uppercase">
                    Primary Operation Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-[#14F1D9]/30 text-sm text-[#E8ECF8] focus:outline-none focus:border-[#14F1D9] focus:ring-1 focus:ring-[#14F1D9]"
                  >
                    {CLOSING_CTA.serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0A1124] text-[#E8ECF8]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-[#E8ECF8] mb-1.5 uppercase">
                    Brief Operation Description (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your outlets, registers, or software pain points..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-[#14F1D9]/30 text-sm text-[#E8ECF8] placeholder-[#8A93B2]/50 focus:outline-none focus:border-[#14F1D9] focus:ring-1 focus:ring-[#14F1D9]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full font-['Space_Grotesk',sans-serif] font-bold text-sm text-[#070B1A] bg-gradient-to-r from-[#FFB547] to-[#FFA726] shadow-[0_0_20px_rgba(255,181,71,0.5)] hover:shadow-[0_0_30px_rgba(255,181,71,0.7)] hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Consultation Request</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
