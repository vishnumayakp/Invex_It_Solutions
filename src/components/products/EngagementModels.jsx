import { Users, Compass, ShieldCheck } from 'lucide-react'
import SectionWrapper from '../common/SectionWrapper'
import ScrollRevealText from '../common/ScrollRevealText'
import Reveal from '../common/Reveal'
import EngagementCard from './EngagementCard'
import {
  TeamConstellationVisual,
  ScopeBlueprintVisual,
  LicenseAMCVisual,
} from './EngagementVisuals'
import team from '../../assets/images/service-des3.png'
import project from '../../assets/images/service-des2.png'
import service from '../../assets/images/service-des1.png'


/* ─── Engagement Models Data (Prompt copy word-for-word) ─── */
const MODELS = [
  {
    id: 'dedicated-team',
    title: 'Dedicated Development Team',
    description:
      'Hire our core innovative team to work exclusively on your proprietary software or long-term projects.',
    icon: Users,
    visual: TeamConstellationVisual,
    from: 'left',
    delay: 0,
    image: { src: team, alt: 'Dedicated development team collaborating' },
  },
  {
    id: 'custom-project',
    title: 'Custom Project (Fixed-Cost)',
    description:
      'End-to-end development based on a clearly defined scope—perfect for specific web or mobile application builds.',
    icon: Compass,
    visual: ScopeBlueprintVisual,
    from: 'bottom',
    delay: 0.05,
    image: { src: project, alt: 'Fixed-cost custom project delivery' },
  },
  {
    id: 'enterprise-licensing',
    title: 'Enterprise Licensing & AMC',
    description:
      'Implement our ready-made ERPs or POS systems with an Annual Maintenance Contract for continuous support and updates.',
    icon: ShieldCheck,
    visual: LicenseAMCVisual,
    from: 'right',
    delay: 0.1,
    image: { src: service, alt: 'Enterprise licensing and maintenance' },
  },
]
export default function EngagementModels() {
  return (
    <SectionWrapper id="engagement-models" className="pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28 lg:pb-20">
      <div className="container-wide">
        {/* Section Heading & Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          {/* <Reveal from="bottom">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-block"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                color: 'var(--accent-blue)',
              }}
            >
              Collaboration Frameworks
            </span>
          </Reveal> */}

          <ScrollRevealText
            text="Engagement Models"
            as="h2"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
          />

          {/* TODO: Add approved sub-line copy if supplied by the client */}
          <Reveal from="bottom" delay={0.15}>
            <p
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Select the structure best suited for your engineering velocity, architectural requirements, and budget predictability.
            </p>
          </Reveal>
        </div>

        {/* ── Three Cards Row (Converging entrances: Left, Bottom, Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {MODELS.map((model) => (
            <EngagementCard
              key={model.id}
              icon={model.icon}
              title={model.title}
              description={model.description}
              visual={model.visual}
              from={model.from}
              delay={model.delay}
              image={model.image}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
