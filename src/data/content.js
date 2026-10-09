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
      description: 'Proven across massive hypermarket chains and malls in the Middle East. Our systems handle peak retail traffic without breaking a sweat.',
      icon: 'shield',
      accent: 'blue',
    },
    {
      title: 'End-to-End Innovation',
      description: 'Dedicated R&D teams building futuristic tech using C#, React, and Node.js. From concept to deployment, we own the entire stack.',
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
  },
  {
    title: 'Enterprise Products',
    description: 'Ready-to-deploy, highly scalable POS, ERP, and Queue Management systems.',
    icon: 'server',
    href: '/services',
  },
  {
    title: 'IT Consulting & AMC',
    description: 'Comprehensive maintenance and IT infrastructure support backed by our Middle East backbone, Simple Logic IT.',
    icon: 'headset',
    href: '/services',
  },
]

export const METRICS = [
  { value: 20, suffix: '+', label: 'Years of Combined Domain Expertise' },
  { value: 1500, suffix: '+', label: 'Regional Deployments via Simple Logic IT' },
  { value: 5, suffix: 'M+', label: 'Secure Transactions Processed Daily' },
]

export const TESTIMONIAL = {
  quote: "Invex IT's robust development backbone ensures our retail and POS operations across the Middle East never miss a beat. They are the true innovation vertex of our technology stack.",
  author: 'Senior Operations Director',
  company: 'Safari Group / Simple Logic IT',
}

/* ─── About Page ─── */
export const ABOUT_HERO = {
  headline: ['The Innovation', 'Vertex'],
  subCopy: 'Where enterprise-grade engineering meets relentless innovation.',
}

export const ABOUT_MISSION = {
  title: 'Our Mission',
  text: 'To empower global enterprises with scalable, innovative, and robust software architecture.',
}

export const ABOUT_VISION = {
  title: 'Our Vision',
  text: "To be the apex of technological innovation ('Innovation Vertex'), seamlessly bridging complex business requirements with cutting-edge software solutions.",
}

export const ABOUT_PROBLEM = {
  title: 'The Problem We Solve',
  text: 'We eliminate operational bottlenecks in retail, HR, real estate, and waste management by providing centralized, highly integrated digital ecosystems.',
}

export const BRAND_STORY = {
  title: 'The Invex Journey',
  intro: 'Born as the dedicated development and innovation hub for the esteemed Safari Group of Companies, Invex IT Solutions was built to handle immense scale.',
  milestones: [
    {
      year: '2003',
      title: 'Foundation',
      description: 'Established as the core technology engine for the Safari Group of Companies, taking on the challenge of digitizing massive hypermarket operations.',
    },
    {
      year: '2010',
      title: 'Expansion',
      description: 'Scaled operations across the Middle East, engineering core ERP and mall management software for vast hypermarkets in Qatar and the UAE.',
    },
    {
      year: '2018',
      title: 'Strategic Partnership',
      description: 'Became the technology backbone for Simple Logic IT, securing dominant market share in Queue Management and HR/Payroll solutions across the Gulf region.',
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Operating from headquarters in Mumbai and our specialized hub in Edappal, Kerala, while actively bringing world-class software to new global clients.',
    },
  ],
}

export const TEAM = [
  {
    name: 'Technical Director',
    role: 'Architecture & Cloud',
    bio: 'Leading the architectural vision with over 15 years in enterprise software and cloud deployment.',
  },
  {
    name: 'Lead Full-Stack Engineer',
    role: 'React / Node.js',
    bio: 'Driving front-end innovation and API architecture for retail-scale applications.',
  },
  {
    name: 'Senior .NET Architect',
    role: 'C# / ASP.NET MVC',
    bio: 'Engineering robust back-end systems that power hypermarket-grade transactional workloads.',
  },
  {
    name: 'The Innovation Hub',
    role: 'R&D Team',
    bio: 'A dedicated team of Full-Stack (React/Node.js) and .NET (C#/MVC) experts pushing the boundaries of enterprise software.',
    isTeam: true,
  },
]

export const ACHIEVEMENTS = [
  'Developed the comprehensive infrastructure managing Safari Group\'s hypermarkets.',
  'Successfully integrated automated checkout POS systems across high-footfall retail environments.',
  'Strategic tech partner to Simple Logic IT, securing a dominant market share in Qatar and UAE for Queue Management and HR/Payroll solutions.',
]

/* ─── Services Page ─── */
export const SERVICES_HERO = {
  headline: ['Solutions That', 'Scale'],
  subCopy: 'Enterprise-grade software engineered for the demands of modern retail, business operations, and service industries.',
  filters: ['Retail', 'Business', 'Service', 'Enterprise'],
}

export const SOLUTION_BLOCKS = [
  {
    id: 'retail',
    filter: 'Retail',
    title: 'Retail & Hypermarket Solutions',
    description: 'End-to-end Retail ERP and POS systems supporting multi-location inventory, automated checkouts, and real-time mall management.',
    features: [
      'Multi-location Inventory Management',
      'Automated Checkout POS',
      'Real-time Mall Management',
      'Sales Analytics Dashboard',
      'Supply Chain Integration',
    ],
    accent: 'blue',
  },
  {
    id: 'business',
    filter: 'Business',
    title: 'Specialized Business Software',
    description: 'Custom systems for Trading Divisions, Waste Management, Real-Estate ERPs, and Export Management handling logistics across India, Turkey, and China.',
    features: [
      'Trading Division Management',
      'Waste Management Systems',
      'Real-Estate ERP',
      'Export & Logistics Management',
      'Multi-currency Operations',
    ],
    accent: 'mint',
  },
  {
    id: 'service',
    filter: 'Service',
    title: 'Service Industry SaaS',
    description: 'Plug-and-play, high-efficiency software for Laundries, Salons, and Gyms.',
    features: [
      'Appointment & Booking Engine',
      'POS & Billing',
      'Customer CRM',
      'Inventory Tracking',
      'Multi-branch Dashboard',
    ],
    accent: 'blue',
  },
  {
    id: 'enterprise',
    filter: 'Enterprise',
    title: 'Enterprise Management',
    description: 'Intelligent Queue/Token Management Systems and comprehensive HR & Payroll suites integrated with biometric endpoints.',
    features: [
      'Queue / Token Management',
      'HR & Payroll Suite',
      'Biometric Integration',
      'Employee Self-Service Portal',
      'Compliance Reporting',
    ],
    accent: 'mint',
  },
]

export const TECH_STACK = {
  backend: {
    label: 'Backend & Core Logic',
    hemisphere: 'left',
    items: ['C#', 'ASP.NET MVC', 'Node.js'],
  },
  frontend: {
    label: 'Frontend & UI',
    hemisphere: 'right',
    items: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  infrastructure: {
    label: 'Database & Cloud',
    hemisphere: 'trunk',
    items: ['SQL Server', 'MongoDB', 'AWS / Azure'],
  },
}

export const DEV_PROCESS = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Deep-dive analysis of your operational pain points and business requirements.',
  },
  {
    step: 2,
    title: 'Architecture & Design',
    description: 'Prototyping intuitive UI/UX and designing scalable database structures.',
  },
  {
    step: 3,
    title: 'Agile Development',
    description: 'Rapid, iterative coding using our core tech stack — React, Node.js, and C#.',
  },
  {
    step: 4,
    title: 'Rigorous Testing',
    description: 'Stress-testing software to match hypermarket-level traffic and peak loads.',
  },
  {
    step: 5,
    title: 'Deployment & AMC',
    description: 'Seamless rollout, training, and ongoing Annual Maintenance Contracts.',
  },
]

/* ─── Footer ─── */
export const OFFICES = [
  { city: 'Mumbai', label: 'HQ', country: 'India' },
  { city: 'Edappal', label: 'Development Hub', country: 'Kerala, India' },
  { city: 'Doha', label: 'Operations', country: 'Qatar' },
  { city: 'Dubai', label: 'Operations', country: 'UAE' },
]
