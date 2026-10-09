import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Server, Headphones, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { SERVICES_OVERVIEW, SOLUTION_BLOCKS } from '../../data/content'
import Section from '../common/Section'
import Reveal from '../common/Reveal'
import { Link } from '../../router/Router'
import Button from '../common/Button'

const iconMap = {
  code: Code,
  server: Server,
  headset: Headphones,
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredSolutions = activeTab === 'all'
    ? SOLUTION_BLOCKS
    : SOLUTION_BLOCKS.filter(s => s.filter.toLowerCase() === activeTab.toLowerCase())

  return (
    <Section id="services" className="relative bg-[var(--surface)]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fade">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-raised)] text-xs font-mono text-[var(--accent-blue-light)] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-mint)]" />
              SOLUTIONS & CAPABILITIES
            </div>
          </Reveal>
          <Reveal variant="slideUp" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-6">
              Engineered For Scalable Impact
            </h2>
          </Reveal>
          <Reveal variant="slideUp" delay={0.2}>
            <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
              From high-traffic retail hypermarkets to distributed enterprise logistics, we architect battle-tested digital infrastructure.
            </p>
          </Reveal>
        </div>

        {/* 3 Overview Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SERVICES_OVERVIEW.map((item, idx) => {
            const Icon = iconMap[item.icon] || Code
            return (
              <Reveal key={item.title} variant="slideUp" delay={0.1 * idx}>
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between group hover:border-[var(--accent-blue)]/40 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--accent-blue-light)] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-mint)] hover:text-white transition-colors group/link"
                  >
                    Explore details
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Solution Grid Filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {['all', 'retail', 'business', 'service', 'enterprise'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeTab === tab
                  ? 'bg-[var(--accent-blue)] text-white border-[var(--accent-blue)] shadow-lg shadow-[var(--glow-blue)]'
                  : 'bg-[var(--surface-raised)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSolutions.map((sol) => (
              <motion.div
                key={sol.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-md bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--accent-mint)]">
                      {sol.filter}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {sol.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {sol.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-mint)] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-blue-light)] hover:text-white transition-colors"
                  >
                    Request Demo / Specs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
