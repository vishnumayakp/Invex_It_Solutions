import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { TRUST_CLIENTS } from '../../data/content'
import Section from '../common/Section'

export default function TrustMarquee() {
  return (
    <Section noPadding className="py-12 md:py-16 border-y border-[var(--border-subtle)] bg-[var(--surface)]">
      <div className="container-wide mb-6">
        <p className="text-[var(--text-muted)] text-xs uppercase tracking-[0.25em] font-semibold text-center">
          Trusted By Industry Leaders
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--surface)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--surface)] to-transparent z-10" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...TRUST_CLIENTS, ...TRUST_CLIENTS].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center gap-3 group cursor-default"
            >
              {/* Circuit node marker */}
              <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0">
                <circle cx="6" cy="6" r="4" fill="none" stroke="var(--accent-blue)" strokeWidth="1" className="group-hover:stroke-[var(--accent-mint)] transition-colors duration-300" />
                <circle cx="6" cy="6" r="1.5" fill="var(--accent-blue)" className="group-hover:fill-[var(--accent-mint)] transition-colors duration-300" />
              </svg>
              <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </Section>
  )
}
