import { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ServicesHero from '../components/sections/services/ServicesHero'
import ServicesStickyNav from '../components/sections/services/ServicesStickyNav'
import RetailSection from '../components/sections/services/RetailSection'
import BusinessSoftwareSection from '../components/sections/services/BusinessSoftwareSection'
import ServiceSaasSection from '../components/sections/services/ServiceSaasSection'
import EnterpriseManagementSection from '../components/sections/services/EnterpriseManagementSection'
import TechStackSection from '../components/sections/services/TechStackSection'
import DevelopmentProcessSection from '../components/sections/services/DevelopmentProcessSection'
import ServicesClosingCTA from '../components/sections/services/ServicesClosingCTA'
import ConsultationModal from '../components/sections/services/ConsultationModal'
import FloatingEnquireButton from '../components/sections/services/FloatingEnquireButton'

/**
 * Services Page — "Midnight Blueprint" architecture showcasing:
 * 1. Hero (Floating Mall, Dual CTAs, Live Stats)
 * 2. Retail & Hypermarket Solutions (id="retail")
 * 3. Specialized Business Software (id="business-software")
 * 4. Service Industry SaaS (id="saas")
 * 5. Enterprise Management (id="enterprise")
 * 6. Tech Stack (id="tech")
 * 7. Development Process (id="process")
 * 8. Closing CTA with Free Consultation Modal
 */
export default function Services() {
  const [modalOpen, setModalOpen] = useState(false)

  // SEO: Update page title and meta description dynamically
  useEffect(() => {
    document.title = 'Enterprise ERP, POS & Business Automation Software | Invex IT Solutions'

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'End-to-end retail hypermarket ERP, fast automated POS, custom business software, biometric HR/Payroll, and queue management systems across India, Turkey, and China.'
  }, [])

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#14F1D9]/30 selection:text-[#14F1D9]" style={{ backgroundColor: 'var(--bp-base)', color: 'var(--bp-text)' }}>
      {/* Shared Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero with Isometric Mall, Dual CTAs & Live Stats */}
        <ServicesHero />

        {/* Sticky Section Nav (pill style) */}
        <ServicesStickyNav />

        {/* Section 2: Retail & Hypermarket Solutions (id="retail") */}
        <RetailSection />

        {/* Section 3: Specialized Business Software (id="business-software") */}
        <BusinessSoftwareSection />

        {/* Section 4: Service Industry SaaS (id="saas") */}
        <ServiceSaasSection />

        {/* Section 5: Enterprise Management (id="enterprise") */}
        <EnterpriseManagementSection />

        {/* Section 6: Tech Stack (id="tech") */}
        <TechStackSection />

        {/* Section 7: Development Process (id="process") */}
        <DevelopmentProcessSection />

        {/* Section 8: Closing CTA Banner */}
        <ServicesClosingCTA onOpenModal={() => setModalOpen(true)} />
      </main>

      {/* Floating Enquire Quick-Action Button */}
      <FloatingEnquireButton onOpenModal={() => setModalOpen(true)} />

      {/* Consultation Request Modal */}
      {/* <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> */}

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
