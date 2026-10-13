import { useEffect, lazy, Suspense } from 'react'
import { motion, useScroll } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CircuitDivider from '../components/common/CircuitDivider'
import ProductsHero from '../components/products/ProductsHero'
import CaseStudySafari from '../components/products/CaseStudySafari'
import CaseStudySimpleLogic from '../components/products/CaseStudySimpleLogic'

/* Lazy-load sections for code-splitting and rapid initial rendering */
const DemoGallery = lazy(() => import('../components/products/DemoGallery'))
const EngagementModels = lazy(() => import('../components/products/EngagementModels'))
const FAQSection = lazy(() => import('../components/products/FAQSection'))
const DemoCTA = lazy(() => import('../components/products/DemoCTA'))

/* Stable skeleton placeholder to prevent layout shifts during lazy load */
function SectionSkeleton({ height = 'min-h-[600px]' }) {
  return (
    <div
      className={`w-full ${height} flex items-center justify-center container-wide my-12`}
      aria-hidden="true"
    >
      <div
        className="w-full h-80 rounded-3xl border animate-pulse opacity-40"
        style={{
          backgroundColor: 'var(--surface-raised)',
          borderColor: 'var(--border-subtle)',
        }}
      />
    </div>
  )
}

/**
 * Products Page — Portfolio, Enterprise Case Studies & Delivery Frameworks.
 * Composition order:
 * ProductsHero → CircuitDivider → CaseStudySafari → CircuitDivider →
 * CaseStudySimpleLogic → CircuitDivider → DemoGallery → CircuitDivider →
 * EngagementModels → CircuitDivider → FAQSection → CircuitDivider →
 * DemoCTA → Footer
 */
export default function Products() {
  const { scrollYProgress } = useScroll()

  /* TODO: Replace page title and meta description placeholders with final approved SEO metadata */
  useEffect(() => {
    // TODO: Update page title with final marketing title
    document.title = 'Products & Case Studies | Invex IT Solutions'

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    // TODO: Update meta description placeholder with final approved copy
    metaDesc.content =
      'Explore real-world projects by Invex IT Solutions: Retail ERP, POS, Queue Management, HR & Payroll systems deployed across the Middle East.'
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
        {/* Section 1: Products Hero */}
        <ProductsHero />

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 2: Case Study — Safari Group */}
        <CaseStudySafari />

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 3: Case Study — Simple Logic IT */}
        <CaseStudySimpleLogic />

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 4: Screenshots / Demos Showcase */}
        <Suspense fallback={<SectionSkeleton height="min-h-[800px]" />}>
          <DemoGallery />
        </Suspense>

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 5: Engagement Models */}
        <Suspense fallback={<SectionSkeleton height="min-h-[640px]" />}>
          <EngagementModels />
        </Suspense>

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 6: FAQ Section */}
        <Suspense fallback={<SectionSkeleton height="min-h-[580px]" />}>
          <FAQSection />
        </Suspense>

        {/* Transition */}
        <CircuitDivider className="container-wide" />

        {/* Section 7: Live Demo Call to Action */}
        {/* <Suspense fallback={<SectionSkeleton height="min-h-[480px]" />}>
          <DemoCTA />
        </Suspense> */}
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
