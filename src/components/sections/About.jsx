import { motion } from 'framer-motion'
import { Shield, Cpu, Globe, CheckCircle2, TrendingUp, Award, Layers } from 'lucide-react'
import { WHY_PARTNER, METRICS } from '../../data/content'
import Section from '../common/Section'
import Reveal from '../common/Reveal'
import Counter from '../common/Counter'
import CircuitDivider from '../common/CircuitDivider'

const iconMap = {
  shield: Shield,
  cpu: Cpu,
  globe: Globe,
}

export default function About() {
  return (
    <Section id="about" className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Reveal variant="fade">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-raised)] text-xs font-mono text-[var(--accent-mint)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
              THE ENTERPRISE ADVANTAGE
            </div>
          </Reveal>
          <Reveal variant="slideUp" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-6">
              {WHY_PARTNER.headline}
            </h2>
          </Reveal>
          <Reveal variant="slideUp" delay={0.2}>
            <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
              {WHY_PARTNER.body}
            </p>
          </Reveal>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {WHY_PARTNER.cards.map((card, idx) => {
            const Icon = iconMap[card.icon] || Shield
            const isBlue = card.accent === 'blue'
            const isMint = card.accent === 'mint'

            return (
              <Reveal key={card.title} variant="slideUp" delay={0.15 * (idx + 1)}>
                <div className="glass-card relative p-8 rounded-2xl h-full flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${
                      isBlue
                        ? 'border-[var(--accent-blue)] bg-[var(--accent-blue)]/10 text-[var(--accent-blue-light)]'
                        : isMint
                        ? 'border-[var(--accent-mint)] bg-[var(--accent-mint)]/10 text-[var(--accent-mint)]'
                        : 'border-[var(--border-strong)] bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-mint)]/20 text-[var(--accent-mint)]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {card.locations && (
                    <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
                      <div className="flex flex-wrap gap-2">
                        {card.locations.map(loc => (
                          <span
                            key={loc.name}
                            className="px-2.5 py-1 text-xs font-mono rounded-md bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                          >
                            {loc.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        <CircuitDivider className="my-16" />

        {/* Metrics Counter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {METRICS.map((metric, idx) => (
            <Reveal key={metric.label} variant="scale" delay={0.1 * idx}>
              <div className="p-6 rounded-2xl bg-[var(--surface-raised)]/40 border border-[var(--border-subtle)]">
                <div className="text-4xl md:text-5xl font-display font-bold brain-gradient-text mb-2">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-xs md:text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
