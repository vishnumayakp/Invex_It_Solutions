
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'
import useReducedMotion from '../../hooks/useReducedMotion'
import hypermarket from '../../assets/images/company-logos/logo2.jpg'
import simpleIt from '../../assets/images/company-logos/logo6.jpg'
import safariTrading from '../../assets/images/company-logos/logo11.jpg'
import hiPower from '../../assets/images/company-logos/logo8.jpg'
import mobile from '../../assets/images/company-logos/logo3.jpg'
import optical from '../../assets/images/company-logos/logo4.jpg'
import powerwaste from '../../assets/images/company-logos/Power-waste.png'
import realestate from '../../assets/images/company-logos/realestate.jpg'
import bakery from '../../assets/images/company-logos/bakery.jpg'
import simpleLogicQatar from '../../assets/images/company-logos/simple-logic-qatar.jpg'
import retail from '../../assets/images/company-logos/safari.png'
import car from '../../assets/images/company-logos/car.png'
import simpleUAE from '../../assets/images/company-logos/simplelogicUAE.png'
import hilton from '../../assets/images/company-logos/hilton.jpeg'

const ourPartners = [
    { name: 'Simple Logic IT UAE', logo: simpleUAE },
    { name: 'Simple Logic IT Qatar', logo: simpleLogicQatar },
]

const partners = [
    {
        name: 'Safari Hypermarkets',
        subs: ['Safari Hypermarkets'],
        logo: hypermarket,
    },
    {
        name: 'Hi Power Engineering',
        subs: ['Hi Power Engineering'],
        logo: hiPower,
    },
    {
        name: 'Power Waste Management company',
        subs: ['Power Waste Management company'],
        logo: powerwaste,
    },
    {
        name: 'Safari Trading Est.',
        subs: ['Safari Trading Est.'],
        logo: safariTrading,
    },
    {
        name: 'Safari Real Estate',
        subs: ['Safari Real Estate'],
        logo: realestate,
    },
    {
        name: 'Safari Mobiles',
        subs: ['Safari Mobiles'],
        logo: mobile,
    },
    {
        name: 'Safari Bakery',
        subs: ['Safari Bakery'],
        logo: bakery,
    },
    {
        name: 'Safari Retail',
        subs: ['Safari Retail'],
        logo: retail,
    },
    {
        name: 'Safari Opticals',
        subs: ['Safari Opticals'],
        logo: optical,
    },
    {
        name: 'Safari E-Commerce',
        subs: ['Safari E-Commerce'],
        logo: retail,
    },
    {
        name: 'Hilton Impex India Private Limited',
        subs: ['Hilton Impex India Private Limited'],
        logo: hilton,
    },
    {
        name: 'Hi Power Rent A Car',
        subs: ['Hi Power Rent A Car'],
        logo: car,
    },
]

export function ClientMarquee({ headingId = 'marquee-heading', spacious = false }) {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { amount: 0.1 })
    const reduced = useReducedMotion()

    const shouldAnimate = !reduced && isInView

    return (
        <section
            ref={containerRef}
            className={`relative z-10 -mt-10 sm:-mt-14 rounded-t-[28px] bg-[var(--base)] section-glow-top section-radial-glow ${spacious ? 'pt-14 pb-20 sm:pb-24' : 'pt-14 pb-8'} overflow-x-clip overflow-hidden`}
            aria-labelledby={headingId}
        >
            {/* Hidden semantic headings */}
            <h2 id="partners-heading" className="sr-only">
                Our Partners
            </h2>
            <h2 id={headingId} className="sr-only">
                Our Sister &amp; Concerns
            </h2>

            {/* Our Partners caption (drops from TOP) */}
            <div className="container-wide mb-6 text-center">
                <Reveal from="top" delay={0.1}>
                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] opacity-90 inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" aria-hidden="true" />
                        Our Partners
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" aria-hidden="true" />
                    </p>
                </Reveal>
            </div>

            {/* Static Partners logos row */}
            <div className="container-wide mb-12 sm:mb-16">
                <Reveal from="center" delay={0.25}>
                    <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-20">
                        {ourPartners.map((partner) => (
                            <div
                                key={partner.name}
                                className="flex flex-col items-center justify-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 cursor-default select-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)]"
                                tabIndex={0}
                            >
                                {partner.logo ? (
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        height={48}
                                        loading="lazy"
                                        decoding="async"

                                        draggable={false}
                                        className={`h-10 sm:h-12 w-auto max-w-[180px] object-contain ${partner.invert ? 'brightness-0 invert' : ''}`}
                                    />
                                ) : (
                                    <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] tracking-tight">
                                        {partner.name}
                                    </span>
                                )}
                                {partner.logo && (
                                    <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                                        {partner.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* Small centered caption (drops from TOP) */}
            <div className="container-wide mb-6 text-center">
                <Reveal from="top" delay={0.1}>
                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-mint)] opacity-90 inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" aria-hidden="true" />
                        Our Sister Concerns
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)]" aria-hidden="true" />
                    </p>
                </Reveal>
            </div>

            {/* Infinite horizontal marquee with edge fade masks (fades in from CENTER) */}
            <Reveal from="center" delay={0.25} threshold={0.1}>
                <div
                    className="relative overflow-hidden group/marquee"
                    role="region"
                    aria-label="Client logos marquee"
                >
                    {/* Left edge fade mask */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, var(--base), transparent)' }}
                        aria-hidden="true"
                    />

                    {/* Right edge fade mask */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, var(--base), transparent)' }}
                        aria-hidden="true"
                    />

                    {/* Scrolling track */}
                    <div
                        className="flex gap-8 sm:gap-14 whitespace-nowrap py-2 items-center"
                        style={{
                            animation: shouldAnimate ? 'marqueeScroll 26s linear infinite' : 'none',
                            animationPlayState: 'running',
                            width: 'max-content',
                        }}
                    >
                        {/* Two identical sets for seamless continuous marquee loop */}
                        {[0, 1].map((copyIdx) => (
                            <div key={copyIdx} className="flex gap-8 sm:gap-14 items-center shrink-0">
                                {partners.map((partner, pIdx) => (
                                    <div
                                        key={`${copyIdx}-${pIdx}-${partner.name}`}
                                        className="flex flex-col items-center justify-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 cursor-default select-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)]"
                                        tabIndex={0}
                                    >
                                        {partner.logo ? (
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                height={48}
                                                loading="lazy"
                                                decoding="async"
                                                draggable={false}
                                                className={`h-10 sm:h-12 w-auto max-w-[180px] object-contain ${partner.invert ? 'brightness-0 invert' : ''}`}
                                            />
                                        ) : (
                                            <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] tracking-tight">
                                                {partner.name}
                                            </span>
                                        )}
                                        {partner.subs && (
                                            <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                                                {partner.subs.join(' · ')}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default ClientMarquee