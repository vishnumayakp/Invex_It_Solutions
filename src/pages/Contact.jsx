import { useEffect, lazy, Suspense } from 'react'
import { motion, useScroll } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CircuitDivider from '../components/common/CircuitDivider'
import SectionWrapper from '../components/common/SectionWrapper'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import DirectChannels from '../components/contact/DirectChannels'
import ResponseExpectation from '../components/contact/ResponseExpectation'
import SocialLinks from '../components/contact/SocialLinks'

/* Lazy-load OfficesMap showpiece to keep initial bundle lean */
const OfficesMap = lazy(() => import('../components/contact/OfficesMap'))

function MapSkeleton() {
  return (
    <div
      className="w-full min-h-[520px] flex items-center justify-center container-wide my-12"
      aria-hidden="true"
    >
      <div
        className="w-full h-[460px] rounded-3xl border animate-pulse opacity-40"
        style={{
          backgroundColor: 'var(--surface-raised)',
          borderColor: 'var(--border-subtle)',
        }}
      />
    </div>
  )
}

/**
 * Contact Us Page — Engineering Inquiry & Strategic Presence.
 * Composition order:
 * ContactHero → CircuitDivider → (ContactForm + DirectChannels side-by-side) →
 * CircuitDivider → OfficesMap → CircuitDivider → (ResponseExpectation + SocialLinks) →
 * CircuitDivider → Footer
 */
export default function Contact() {
  const { scrollYProgress } = useScroll()

  /* SEO: Page Title and Meta Description */
  useEffect(() => {
    document.title = 'Contact Us | Invex IT Solutions'

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    // TODO: Update meta description placeholder with approved copy
    metaDesc.content =
      'Connect directly with the engineering and consulting leads at Invex IT Solutions for retail ERP, POS, and custom cloud software deployments.'
  }, [])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--base)' }}>
      {/* Scroll Progress Bar (uses existing .scroll-progress CSS token) */}
      <motion.div
        className="scroll-progress w-full pointer-events-none"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      {/* Shared Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Contact Hero */}
        <ContactHero />

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 2: Contact Form & Direct Channels (Side-by-Side on Desktop, Stacked on Mobile) */}
        <SectionWrapper id="contact-channels" className="pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-20 lg:pb-20">
          <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Direct Channels */}
            <div className="lg:col-span-5">
              <DirectChannels />
            </div>
          </div>
        </SectionWrapper>

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 3: Offices Map (Showpiece) */}
        <Suspense fallback={<MapSkeleton />}>
          <OfficesMap />
        </Suspense>

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 4: Response Expectations & Social Links */}
        <SectionWrapper id="expectations-social" className="py-16 md:py-24">
          <ResponseExpectation />
          <SocialLinks />
        </SectionWrapper>
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
