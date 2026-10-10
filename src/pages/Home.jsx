import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import CircuitDivider from '../components/common/CircuitDivider'
import {
  ClientMarquee,
  ValueProposition,
  ServicesOverview,
  KeyMetrics,
  TestimonialSection,
  ClosingCTA,
} from '../components/sections/HomeSections'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Section 2.1: Client Marquee directly under Hero */}
        <ClientMarquee />

        {/* Transition: CircuitDivider drawing in between Marquee and Bento */}
        <CircuitDivider className="container-wide" />

        {/* Section 2.2: Why Partner With Invex IT (Bento Grid) */}
        <ValueProposition />

        {/* Section 2.3: Services & Products Overview (Pinned Tabbed Showcase) */}
        <ServicesOverview />

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 2.4: Key Metrics (3-Card Row with Middle Raised 16px) */}
        <KeyMetrics />

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 2.5: Testimonial */}
        <TestimonialSection />

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 2.6: Closing CTA (Transform Your Work Block) */}
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  )
}
