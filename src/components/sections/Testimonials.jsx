import { Quote } from 'lucide-react'
import { TESTIMONIAL, TRUST_CLIENTS } from '../../data/content'
import Section from '../common/Section'
import Reveal from '../common/Reveal'

export default function Testimonials() {
  return (
    <Section id="testimonials" className="relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <Reveal variant="scale">
          <div className="relative glass-card p-10 md:p-16 rounded-3xl border border-[var(--border-subtle)] text-center">
            <div className="w-14 h-14 mx-auto mb-8 rounded-2xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-mint)]">
              <Quote className="w-7 h-7" />
            </div>

            <blockquote className="text-xl md:text-3xl font-display font-medium text-[var(--text-primary)] leading-relaxed mb-8">
              "{TESTIMONIAL.quote}"
            </blockquote>

            <div>
              <div className="font-display font-semibold text-[var(--text-primary)]">
                {TESTIMONIAL.author}
              </div>
              <div className="text-sm font-mono text-[var(--accent-blue-light)]">
                {TESTIMONIAL.company}
              </div>
            </div>

            {/* Client Badges */}
            <div className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
              <div className="text-xs uppercase font-mono tracking-wider text-[var(--text-muted)] mb-4">
                Enterprise Infrastructure Trusted By
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {TRUST_CLIENTS.slice(0, 5).map((client) => (
                  <span
                    key={client}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
