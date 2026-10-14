import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Briefcase,
    MapPin,
    Mail,
    ChevronDown,
    ArrowUpRight,
    CheckCircle2,
    Code2,
    Server,
    Rocket,
    Users,
    Layers,
    Sparkles,
} from 'lucide-react'
/* Adjust these paths if your folders differ */
import SectionWrapper from '../components/common/SectionWrapper'
import Reveal from '../components/common/Reveal'
import SpotlightCard from '../components/common/SpotlightCard'
import useReducedMotion from '../hooks/useReducedMotion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

/* ───────────────────────── Editable content ───────────────────────── */

const CAREERS_EMAIL = 'hello@invex.it' // TODO: replace with a dedicated careers@ address if you have one

const LOCATIONS = ['Mumbai', 'Kerala']

/* TODO: these are sample roles built from your tech stack. Edit, add or delete freely. */
const ROLES = [
    {
        id: 'dotnet-senior',
        title: 'Senior .NET Developer',
        subtitle: 'C# / ASP.NET MVC',
        locations: ['Mumbai'],
        type: 'Full-time',
        team: 'Enterprise Products',
        stack: ['C#', '.NET Core', 'ASP.NET MVC', 'SQL Server'],
        summary:
            'Own core modules of our POS and ERP engines that run across hypermarket and mall operations in the Middle East.',
        responsibilities: [
            'Design and build features for enterprise POS, ERP and queue-management products',
            'Write clean, well-tested C# that holds up under heavy transaction load',
            'Design and tune SQL Server schemas and queries',
            'Review code and mentor developers on the team',
        ],
        requirements: [
            'Strong C#, .NET and ASP.NET MVC experience',
            'Solid SQL Server skills',
            'Experience with retail, POS or ERP systems is a big plus',
            'Clear communication and ownership of what you ship',
        ],
    },
    {
        id: 'fullstack',
        title: 'Full-Stack Developer',
        subtitle: 'React / Node.js',
        locations: ['Kerala'],
        type: 'Full-time',
        team: 'Innovation Lab',
        stack: ['React', 'Node.js', 'REST APIs', 'Tailwind'],
        summary:
            'Build future-ready modules end to end, from APIs and microservices to polished React interfaces.',
        responsibilities: [
            'Build and ship full-stack features with React and Node.js',
            'Design REST APIs and cloud microservices',
            'Turn product ideas from the Innovation Lab into working software',
            'Work closely with the .NET team on shared platforms',
        ],
        requirements: [
            'Strong React and Node.js fundamentals',
            'Experience building and consuming REST APIs',
            'Comfort with modern tooling, Git and code review',
            'Curiosity about AI, computer vision or IoT is a plus',
        ],
    },
    {
        id: 'frontend',
        title: 'Frontend Engineer',
        subtitle: 'React',
        locations: ['Kerala', 'Mumbai'],
        type: 'Full-time',
        team: 'Product Experience',
        stack: ['React', 'Tailwind', 'Framer Motion', 'Accessibility'],
        summary:
            'Craft fast, accessible and beautiful interfaces for dashboards, POS screens and customer-facing products.',
        responsibilities: [
            'Build responsive, accessible React interfaces',
            'Turn designs into pixel-accurate, performant components',
            'Create smooth, purposeful motion and interactions',
            'Support light and dark themes across the product',
        ],
        requirements: [
            'Strong React and modern CSS skills',
            'An eye for detail, layout and typography',
            'Understanding of web performance and accessibility',
            'A portfolio or past work you can walk us through',
        ],
    },
    {
        id: 'backend-node',
        title: 'Backend Engineer',
        subtitle: 'Node.js',
        locations: ['Mumbai', 'Kerala'],
        type: 'Full-time',
        team: 'Platform & Cloud',
        stack: ['Node.js', 'Microservices', 'Cloud', 'APIs'],
        summary:
            'Build the services and integrations that connect our retail, trading and automation products.',
        responsibilities: [
            'Build reliable Node.js services and APIs',
            'Integrate with POS, ERP and third-party systems',
            'Improve performance, monitoring and reliability',
            'Contribute to architecture decisions',
        ],
        requirements: [
            'Strong Node.js and API design experience',
            'Familiarity with databases and cloud deployment',
            'Care for security, reliability and clean code',
            'Ability to work across teams and time zones',
        ],
    },
]

const STATS = [
    { value: '2', label: 'Hubs', sub: 'Mumbai & Kerala' },
    { value: '3', label: 'Core Technologies', sub: 'C#, React, Node.js' },
    { value: '20+', label: 'Years Combined Expertise', sub: 'Across our team' },
]

const CULTURE = [
    {
        icon: Rocket,
        title: 'Build at real scale',
        text: 'Your code runs in hypermarkets, malls and trading operations, handling millions of transactions every day.',
        accent: 'var(--accent-mint)',
    },
    {
        icon: Layers,
        title: 'Two stacks, one team',
        text: 'React and Node.js developers work side by side with .NET and C# experts, so you learn from both worlds.',
        accent: 'var(--accent-blue)',
    },
    {
        icon: Sparkles,
        title: 'Room to innovate',
        text: 'The Innovation Lab explores AI forecasting, computer-vision checkouts and IoT. Bring ideas, we build them.',
        accent: 'var(--accent-mint)',
    },
    {
        icon: Users,
        title: 'Backed by a strong group',
        text: 'Work with the backing of the Safari Group of Companies and Simple Logic IT, with real clients and real impact.',
        accent: 'var(--accent-blue)',
    },
]

/* TODO: adjust to match your real hiring process */
const PROCESS = [
    { step: '01', title: 'Apply', text: 'Send your resume and a few lines about what you have built.' },
    { step: '02', title: 'Intro chat', text: 'A relaxed conversation about your experience and what you want next.' },
    { step: '03', title: 'Technical round', text: 'A practical discussion with the team about real engineering problems.' },
    { step: '04', title: 'Offer', text: 'We move quickly and make the next steps clear.' },
]

const mix = (color, pct) => `color-mix(in srgb, ${color} ${pct}%, transparent)`

const applyHref = (role) =>
    `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${role.title}`)}`

/* ───────────────────────── Small pieces ───────────────────────── */

function SectionHeading({ kicker, title, text }) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <Reveal from="bottom">
                <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 inline-block"
                    style={{
                        backgroundColor: 'var(--glass-bg)',
                        borderColor: 'var(--glass-border)',
                        color: 'var(--accent-mint)',
                    }}
                >
                    {kicker}
                </span>
            </Reveal>
            <Reveal from="bottom" delay={0.1}>
                <h2
                    className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4"
                    style={{ color: 'var(--text-primary)' }}
                >
                    {title}
                </h2>
            </Reveal>
            {text && (
                <Reveal from="bottom" delay={0.2}>
                    <p
                        className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        {text}
                    </p>
                </Reveal>
            )}
        </div>
    )
}

function Chip({ children, accent = 'var(--accent-mint)' }) {
    return (
        <span
            className="px-2.5 py-1 rounded-full border font-mono text-[10.5px]"
            style={{
                color: 'var(--text-secondary)',
                borderColor: 'var(--border-subtle)',
                backgroundColor: mix(accent, 8),
            }}
        >
            {children}
        </span>
    )
}

function RoleCard({ role, isOpen, onToggle, reduced }) {
    return (
        <div
            className="rounded-3xl border overflow-hidden transition-all duration-300"
            style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: isOpen ? 'var(--accent-mint)' : 'var(--glass-border)',
                backdropFilter: 'blur(16px)',
                boxShadow: isOpen
                    ? `0 18px 40px -12px var(--glass-shadow, rgba(0,0,0,0.3)), 0 0 30px ${mix('var(--accent-mint)', 12)}`
                    : '0 8px 24px -8px var(--glass-shadow, rgba(0,0,0,0.2))',
            }}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-mint)] rounded-3xl"
            >
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                            className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                            style={{
                                color: 'var(--accent-blue)',
                                borderColor: mix('var(--accent-blue)', 35),
                                backgroundColor: mix('var(--accent-blue)', 10),
                            }}
                        >
                            {role.team}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                            {role.type}
                        </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {role.title}
                    </h3>
                    <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--accent-mint)' }}>
                        {role.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin size={13} />
                            {role.locations.join(' / ')}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <Briefcase size={13} />
                            {role.type}
                        </span>
                    </div>
                </div>

                <span
                    className="shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-transform duration-300"
                    style={{
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--accent-mint)',
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                    }}
                    aria-hidden="true"
                >
                    <ChevronDown size={18} />
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={reduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                        exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                            <p className="text-sm sm:text-base leading-relaxed mt-4 mb-5" style={{ color: 'var(--text-secondary)' }}>
                                {role.summary}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {role.stack.map((t) => (
                                    <Chip key={t}>{t}</Chip>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-mono text-[11px] uppercase tracking-widest mb-3" style={{ color: 'var(--accent-mint)' }}>
                                        What you will do
                                    </h4>
                                    <ul className="space-y-2">
                                        {role.responsibilities.map((item) => (
                                            <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                                <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--accent-mint)' }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-mono text-[11px] uppercase tracking-widest mb-3" style={{ color: 'var(--accent-blue)' }}>
                                        What we look for
                                    </h4>
                                    <ul className="space-y-2">
                                        {role.requirements.map((item) => (
                                            <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                                <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--accent-blue)' }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <a
                                href={applyHref(role)}
                                className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                                style={{
                                    color: 'var(--base)',
                                    backgroundImage: 'linear-gradient(to right, var(--accent-mint), var(--accent-blue))',
                                    boxShadow: `0 0 24px ${mix('var(--accent-mint)', 30)}`,
                                }}
                            >
                                Apply for this role
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

/* ───────────────────────── Page ───────────────────────── */

export default function Careers() {
    const reduced = useReducedMotion()
    const [filter, setFilter] = useState('All')
    const [openId, setOpenId] = useState(ROLES[0].id)

    const filters = ['All', ...LOCATIONS]
    const visibleRoles = filter === 'All' ? ROLES : ROLES.filter((r) => r.locations.includes(filter))

    const scrollToRoles = (e) => {
        e.preventDefault()
        document.getElementById('open-roles')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    }

    return (

        <div className="min-h-screen flex flex-col bg-[var(--base)]">
            <Navbar />
            <main className="flex-1 flex flex-col">
                {/* ── Hero ── */}
                <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
                    {/* ambient glows */}
                    <div
                        className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full blur-[130px] pointer-events-none"
                        sty le={{ backgroundColor: mix('var(--accent-mint)', 14) }}
                        aria-hidden="true"
                    />
                    <div
                        className="absolute top-1/3 right-0 w-[460px] h-[460px] rounded-full blur-[140px] pointer-events-none"
                        style={{ backgroundColor: mix('var(--accent-blue)', 14) }}
                        aria-hidden="true"
                    />

                    <div className="container-wide relative z-10 text-center">
                        <Reveal from="top" delay={0.05}>
                            <div
                                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6"
                                style={{
                                    color: 'var(--accent-mint)',
                                    backgroundColor: 'var(--glass-bg)',
                                    borderColor: mix('var(--accent-mint)', 30),
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-mint)' }} />
                                Careers at Invex IT
                            </div>
                        </Reveal>

                        <Reveal from="bottom" delay={0.12}>
                            <h1
                                className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight max-w-4xl mx-auto mb-6"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                Build software that powers <span className="brain-gradient">retail at scale</span>
                            </h1>
                        </Reveal>

                        <Reveal from="bottom" delay={0.2}>
                            <p
                                className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                We are always looking for brilliant C#, React, and Node.js developers in Mumbai and Kerala. Join a team
                                that builds software powering the largest retail chains in the Middle East.
                            </p>
                        </Reveal>

                        {/* <Reveal from="bottom" delay={0.28}>
                            <div className="flex flex-wrap items-center justify-center gap-3 mb-9">
                                {['C#', 'React', 'Node.js'].map((t) => (
                                    <Chip key={t}>{t}</Chip>
                                ))}
                                {LOCATIONS.map((l) => (
                                    <span
                                        key={l}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[10.5px]"
                                        style={{
                                            color: 'var(--accent-blue)',
                                            borderColor: mix('var(--accent-blue)', 35),
                                            backgroundColor: mix('var(--accent-blue)', 8),
                                        }}
                                    >
                                        <MapPin size={11} />
                                        {l}
                                    </span>
                                ))}
                            </div>
                        </Reveal> */}

                        <Reveal from="bottom" delay={0.34}>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="#open-roles"
                                    onClick={scrollToRoles}
                                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-display font-bold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                                    style={{
                                        color: 'var(--base)',
                                        backgroundImage: 'linear-gradient(to right, var(--accent-mint), var(--accent-blue))',
                                        boxShadow: `0 0 28px ${mix('var(--accent-mint)', 30)}`,
                                    }}
                                >
                                    View open roles
                                    <ChevronDown size={17} />
                                </a>
                                <a
                                    href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Career enquiry')}`}
                                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide border transition-colors duration-300 hover:text-[var(--accent-mint)] hover:border-[var(--accent-mint)]"
                                    style={{
                                        color: 'var(--text-primary)',
                                        backgroundColor: 'var(--glass-bg)',
                                        borderColor: 'var(--glass-border)',
                                    }}
                                >
                                    <Mail size={16} />
                                    Send your resume
                                </a>
                            </div>
                        </Reveal>

                        {/* Stats */}
                        {/* <Reveal from="bottom" delay={0.42}>
                            <div
                                className="mt-14 sm:mt-16 max-w-3xl mx-auto rounded-3xl border p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 sm:divide-x"
                                style={{
                                    backgroundColor: 'var(--glass-bg)',
                                    borderColor: 'var(--glass-border)',
                                    backdropFilter: 'blur(16px)',
                                    boxShadow: '0 16px 40px -12px var(--glass-shadow, rgba(0,0,0,0.25))',
                                }}
                            >
                                {STATS.map((s) => (
                                    <div key={s.label} className="px-4 text-center" style={{ borderColor: 'var(--border-subtle)' }}>
                                        <div className="font-display font-bold text-3xl sm:text-4xl brain-gradient inline-block">{s.value}</div>
                                        <div className="font-semibold text-sm mt-1" style={{ color: 'var(--text-primary)' }}>
                                            {s.label}
                                        </div>
                                        <div className="font-mono text-[10px] uppercase tracking-wider mt-0.5" style={{ color: 'var(--text-muted)' }}>
                                            {s.sub}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal> */}
                    </div>
                </section>

                {/* ── Culture ── */}
                <SectionWrapper id="culture" className="py-12 md:py-16">
                    <div className="container-wide">
                        <SectionHeading
                            kicker="Our Culture"
                            title="Why engineers join Invex"
                            text="A team that cares about the craft, ships real products and keeps learning across stacks."
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {CULTURE.map((c, idx) => {
                                const Icon = c.icon
                                return (
                                    <Reveal key={c.title} from="bottom" delay={0.06 * idx} className="h-full">
                                        <SpotlightCard
                                            cursorLabel="CULTURE"
                                            className="h-full p-6 border rounded-3xl transition-colors"
                                            style={{
                                                backgroundColor: 'var(--glass-bg)',
                                                borderColor: 'var(--glass-border)',
                                                backdropFilter: 'blur(16px)',
                                            }}
                                        >
                                            <div
                                                className="w-11 h-11 rounded-xl flex items-center justify-center border mb-5"
                                                style={{
                                                    color: c.accent,
                                                    backgroundColor: mix(c.accent, 12),
                                                    borderColor: mix(c.accent, 35),
                                                }}
                                            >
                                                <Icon size={20} strokeWidth={2.1} />
                                            </div>
                                            <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                                                {c.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                                {c.text}
                                            </p>
                                        </SpotlightCard>
                                    </Reveal>
                                )
                            })}
                        </div>
                    </div>
                </SectionWrapper>

                {/* ── Open roles ── */}
                <SectionWrapper id="open-roles" className="py-12 md:py-16">
                    <div className="container-wide">
                        <SectionHeading
                            kicker="Open Roles"
                            title="Find your place on the team"
                            text="Pick a role to see what you would work on. Do not see a perfect match? Send us your resume anyway."
                        />

                        {/* Location filter */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="group" aria-label="Filter roles by location">
                            {filters.map((f) => {
                                const on = filter === f
                                return (
                                    <button
                                        key={f}
                                        type="button"
                                        onClick={() => setFilter(f)}
                                        aria-pressed={on}
                                        className="px-4 py-1.5 rounded-full border font-mono text-xs transition-colors duration-300"
                                        style={{
                                            color: on ? 'var(--text-primary)' : 'var(--text-muted)',
                                            borderColor: on ? 'var(--accent-mint)' : 'var(--glass-border)',
                                            backgroundColor: on ? mix('var(--accent-mint)', 16) : 'transparent',
                                        }}
                                    >
                                        {f}
                                    </button>
                                )
                            })}
                        </div>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {visibleRoles.length > 0 ? (
                                visibleRoles.map((role, idx) => (
                                    <Reveal key={role.id} from="bottom" delay={0.05 * idx}>
                                        <RoleCard
                                            role={role}
                                            reduced={reduced}
                                            isOpen={openId === role.id}
                                            onToggle={() => setOpenId(openId === role.id ? null : role.id)}
                                        />
                                    </Reveal>
                                ))
                            ) : (
                                <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
                                    No open roles in this location right now. Send us your resume and we will be in touch.
                                </p>
                            )}
                        </div>
                    </div>
                </SectionWrapper>

                {/* ── Hiring process ── */}
                <SectionWrapper id="process" className="py-16 md:py-24">
                    <div className="container-wide">
                        <SectionHeading kicker="How We Hire" title="A simple, respectful process" />

                        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {PROCESS.map((p, idx) => (
                                <Reveal key={p.step} from="bottom" delay={0.07 * idx} className="h-full">
                                    <div
                                        className="relative h-full rounded-3xl border p-6"
                                        style={{
                                            backgroundColor: 'var(--glass-bg)',
                                            borderColor: 'var(--glass-border)',
                                            backdropFilter: 'blur(16px)',
                                        }}
                                    >
                                        <div className="font-mono text-3xl font-bold brain-gradient inline-block mb-3">{p.step}</div>
                                        <h3 className="font-display font-bold text-lg mb-1.5" style={{ color: 'var(--text-primary)' }}>
                                            {p.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                            {p.text}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                {/* ── Closing CTA ── */}
                <SectionWrapper id="careers-cta" className="pt-8 md:pt-12 pb-20 md:pb-28">
                    <div className="container-wide">
                        <Reveal from="bottom">
                            <div
                                className="relative overflow-hidden rounded-[28px] border-2 text-center max-w-4xl mx-auto p-8 sm:p-12 lg:p-14"
                                style={{
                                    backgroundColor: 'var(--glass-bg)',
                                    borderColor: mix('var(--accent-mint)', 55),
                                    backdropFilter: 'blur(20px)',
                                    boxShadow: `0 24px 70px -16px var(--glass-shadow, rgba(0,0,0,0.35)), 0 0 40px ${mix('var(--accent-mint)', 14)}`,
                                }}
                            >
                                <div
                                    className="absolute inset-x-0 top-0 h-[2px]"
                                    style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--accent-mint), transparent)' }}
                                />
                                <div className="flex items-center justify-center gap-2 mb-3" style={{ color: 'var(--accent-mint)' }}>
                                    <Code2 size={18} />
                                    <Server size={18} />
                                </div>
                                <h2
                                    className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Do not see your role?
                                </h2>
                                <p
                                    className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    We are always looking for brilliant developers. Tell us what you build and where you would like to
                                    work, in Mumbai or Kerala.
                                </p>
                                <a
                                    href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Open application')}`}
                                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-display font-bold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                                    style={{
                                        color: 'var(--base)',
                                        backgroundImage: 'linear-gradient(to right, var(--accent-mint), var(--accent-blue))',
                                        boxShadow: `0 0 28px ${mix('var(--accent-mint)', 35)}`,
                                    }}
                                >
                                    <Mail size={17} />
                                    Send your resume
                                </a>
                                <p className="font-mono text-xs mt-5" style={{ color: 'var(--text-muted)' }}>
                                    {CAREERS_EMAIL}
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </SectionWrapper>
            </main>
        </div>
    )
}