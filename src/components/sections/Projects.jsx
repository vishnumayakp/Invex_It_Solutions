import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle2, Building2, ShoppingCart, Users, Layers } from 'lucide-react'
import Section from '../common/Section'
import Reveal from '../common/Reveal'
import { Link } from '../../router/Router'

const CASE_STUDIES = [
  {
    title: 'Safari Hypermarket Ecosystem',
    category: 'Retail & Multi-Location POS',
    desc: 'Centralized high-concurrency retail engine powering automated billing, real-time stock sync, and multi-mall operations across the Gulf.',
    metrics: '12,000+ tx/min',
    icon: ShoppingCart,
    tag: 'Flagship Enterprise',
  },
  {
    title: 'Simple Logic Queue Infrastructure',
    category: 'Smart Queue Management',
    desc: 'Government & commercial queue orchestration system deployed across thousands of service centers with biometric integration.',
    metrics: '1,500+ locations',
    icon: Users,
    tag: 'Gov & Enterprise',
  },
  {
    title: 'Middle East Real Estate & Mall ERP',
    category: 'Real Estate Automation',
    desc: 'Complex lease management, automated invoicing, tenant portals, and facility maintenance modules for commercial retail centers.',
    metrics: 'Multi-Country',
    icon: Building2,
    tag: 'Commercial ERP',
  },
]

export default function Projects() {
  return (
    <Section id="projects" className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fade">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-raised)] text-xs font-mono text-[var(--accent-mint)] mb-4">
              <Layers className="w-3.5 h-3.5" />
              DEPLOYMENT FOOTPRINT
            </div>
          </Reveal>
          <Reveal variant="slideUp" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-6">
              Battle-Tested Deployments
            </h2>
          </Reveal>
          <Reveal variant="slideUp" delay={0.2}>
            <p className="text-base md:text-lg text-[var(--text-muted)]">
              Real-world systems engineered for resilience under peak consumer and enterprise loads.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((item, idx) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} variant="slideUp" delay={0.15 * idx}>
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between group hover:border-[var(--accent-mint)]/40 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-[var(--accent-mint)] group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--surface-raised)] text-[var(--accent-blue-light)] border border-[var(--border-subtle)]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-2">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-[var(--accent-mint)] mb-4">
                      {item.category}
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--text-secondary)]">
                      Scale: <span className="text-white font-semibold">{item.metrics}</span>
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-mono text-[var(--accent-blue-light)] hover:text-white flex items-center gap-1"
                    >
                      Case details &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
