import { RetailERPMockup, QueueDisplayMockup, SalonPOSMockup } from './DemoMockups'

/**
 * DemoImageSlot — Wrapper for backward compatibility with Case Studies.
 * Accepts `src` or renders the corresponding mockup from DemoMockups.
 */
export default function DemoImageSlot({ src, alt, variant = 'erp', className = '' }) {
  if (variant === 'queue') {
    return <QueueDisplayMockup src={src} alt={alt} className={className} />
  }

  if (variant === 'pos' || variant === 'salon') {
    return <SalonPOSMockup src={src} alt={alt} className={className} />
  }

  return <RetailERPMockup src={src} alt={alt} className={className} />
}

export { RetailERPMockup, SalonPOSMockup, QueueDisplayMockup }
