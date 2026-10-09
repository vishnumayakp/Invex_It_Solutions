import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import Section from '../common/Section'
import Reveal from '../common/Reveal'
import Button from '../common/Button'
import { OFFICES } from '../../data/content'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fade">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-raised)] text-xs font-mono text-[var(--accent-mint)] mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              COMMENCE CONVERSATION
            </div>
          </Reveal>
          <Reveal variant="slideUp" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-6">
              Ready to Build Your Next Solution?
            </h2>
          </Reveal>
          <Reveal variant="slideUp" delay={0.2}>
            <p className="text-base md:text-lg text-[var(--text-muted)]">
              Partner with Invex IT Solutions for high-performance software architecture, enterprise POS, and bespoke engineering.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Global Footprint */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal variant="slideLeft" delay={0.1}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-6">
                  Global Development Hubs
                </h3>
                <div className="space-y-4">
                  {OFFICES.map((office) => (
                    <div key={office.city} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[var(--surface-raised)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-mint)] flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[var(--text-primary)]">
                          {office.city}{' '}
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--accent-blue-light)]">
                            {office.label}
                          </span>
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-0.5">{office.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="slideLeft" delay={0.2}>
              <div className="glass-card p-6 rounded-2xl border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <Mail className="w-4 h-4 text-[var(--accent-mint)]" />
                  <span>solutions@invexit.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <Phone className="w-4 h-4 text-[var(--accent-blue-light)]" />
                  <span>Enterprise Support & AMC Enquiries</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal variant="slideRight" delay={0.15}>
              <div className="glass-card p-8 md:p-10 rounded-2xl relative">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--accent-mint)]/20 border border-[var(--accent-mint)] flex items-center justify-center text-[var(--accent-mint)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
                      Thank you for contacting Invex IT Solutions. Our engineering leads will review your requirements and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                          Your Name
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-mint)] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                          Work Email
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-mint)] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Organization / Enterprise
                      </label>
                      <input
                        type="text"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        placeholder="Company name or group"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-mint)] transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Project Scope or Challenge
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about the systems you need to build, scale, or modernize..."
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent-mint)] transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl brain-gradient-bg text-[var(--base)] font-display font-semibold hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Architecture Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
