/* ─── Navigation Links ─── */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
]

/* ─── Company Info ─── */
export const COMPANY = {
  name: 'INVEX',
  suffix: 'IT SOLUTIONS',
  legal: 'Invex IT Solutions India Private Limited',
  tagline: 'Innovation Vertex',
  description: 'We are Innovation Vertex (Invex IT)—the core development engine powering world-class retail, trading, and enterprise software solutions across the Middle East and beyond.',
}

/* ─── Home Page ─── */
export const HOME_HERO = {
  headline: ['Engineering the Future of', 'Enterprise Retail and', 'Business Automation.'],
  highlightWords: ['Future', 'Enterprise Retail', 'Business Automation'],
  subCopy: 'We are Innovation Vertex (Invex IT)—the core development engine powering world-class retail, trading, and enterprise software solutions across the Middle East and beyond.',
  ctaPrimary: { label: 'Explore Our Solutions', href: '/services' },
  ctaSecondary: { label: 'Talk to an Expert', href: '/contact' },
  liveStats: [
    { label: 'Transactions/sec', value: 12847, suffix: '' },
    { label: 'Uptime', value: 99.98, suffix: '%' },
    { label: 'Active Tills', value: 342, suffix: '' },
  ],
}

export const TRUST_CLIENTS = [
  'Safari Group of Companies',
  'Safari Hypermarkets',
  'Safari Trading Division',
  'Safari Real Estate',
  'Simple Logic IT',
  'Safari Mall Management',
  'Safari Export Division',
]

export const WHY_PARTNER = {
  headline: 'Why Partner With Invex IT?',
  body: "Backed by the massive infrastructure of the Safari Group of Companies and Simple Logic IT, we don't just write code; we build battle-tested systems. From managing complex hypermarket retail divisions to scaling operations for multi-national exports, our software handles millions of transactions effortlessly.",
  cards: [
    {
      title: 'Enterprise-Grade Reliability',
      description: 'Proven across massive hypermarket chains and malls in the Middle East.',
      icon: 'shield',
      accent: 'blue',
    },
    {
      title: 'End-to-End Innovation',
      description: 'Dedicated R&D teams building futuristic tech using C#, React, and Node.js.',
      icon: 'cpu',
      accent: 'mint',
    },
    {
      title: 'Global Footprint',
      description: 'Development rooted in Mumbai and Kerala, with an expansive footprint across Qatar, the UAE, Turkey, and China.',
      icon: 'globe',
      accent: 'both',
      locations: [
        { name: 'Mumbai', x: 62, y: 42 },
        { name: 'Kerala', x: 61, y: 52 },
        { name: 'Qatar', x: 48, y: 38 },
        { name: 'UAE', x: 50, y: 40 },
        { name: 'Turkey', x: 42, y: 30 },
        { name: 'China', x: 72, y: 35 },
      ],
    },
  ],
}

export const SERVICES_OVERVIEW = [
  {
    title: 'Custom Software Development',
    description: 'Tailor-made web and application development engineered to solve complex business logic.',
    icon: 'code',
    href: '/services',
    checklist: ['Web development', 'Application development', 'Built for complex business logic'],
  },
  {
    title: 'Enterprise Products',
    description: 'Ready-to-deploy, highly scalable POS, ERP, and Queue Management systems.',
    icon: 'server',
    href: '/services',
    checklist: ['POS', 'ERP', 'Queue Management'],
  },
  {
    title: 'IT Consulting & AMC',
    description: 'Comprehensive maintenance and IT infrastructure support backed by our Middle East backbone, Simple Logic IT.',
    icon: 'headset',
    href: '/services',
    checklist: ['Maintenance', 'IT infrastructure support', 'Backed by Simple Logic IT'],
  },
]

export const METRICS = [
  { value: 20, suffix: '+', label: 'Years of Combined Domain Expertise' },
  { value: 1500, suffix: '+', label: 'Regional Deployments (via Simple Logic IT)' },
]

export const TESTIMONIAL = {
  quote: "Invex IT's robust development backbone ensures our retail and POS operations across the Middle East never miss a beat. They are the true innovation vertex of our technology stack.",
  /* TODO: Replace placeholder with real name and title once available */
  author: '[Name, Title, Safari Group / Simple Logic IT]',
  company: 'Safari Group / Simple Logic IT',
}

/* ─── Footer ─── */
export const OFFICES = [
  { city: 'Mumbai', label: 'HQ', country: 'India' },
  { city: 'Edappal', label: 'Development Hub', country: 'Kerala, India' },
  { city: 'Doha', label: 'Operations', country: 'Qatar' },
  { city: 'Dubai', label: 'Operations', country: 'UAE' },
]

export const CLOSING_CTA = {
  /* TODO: Replace placeholder heading with client-approved copy */
  headline: "Let's build your next vertex.",
  buttons: {
    primary: { label: 'Explore Our Solutions', href: '/services' },
    secondary: { label: 'Talk to an Expert', href: '/contact' },
  },
}
