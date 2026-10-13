/**
 * services.js — Single source of truth for all Services page copy and content.
 * Easy to edit, update, or expand without touching UI components.
 */

export const SERVICES_HERO = {
  headline: "Software Built for the Way Your Business Actually Runs.",
  subline: "From hypermarkets to salons, we design, build and maintain systems that handle real-world traffic.",
  ctaPrimary: {
    label: "Discuss Your Project",
    href: "/contact",
  },
  ctaSecondary: {
    label: "Explore Services",
    href: "#retail",
  },
  stats: [
    {
      value: 3,
      suffix: "",
      label: "Countries Supported",
      sub: "India, Turkey & China",
      isNumeric: true,
    },
    {
      value: 120,
      suffix: "+",
      label: "Clients Globally",
      sub: "Across Middle East & Asia",
      isNumeric: true,
    },
    {
      value: 450,
      suffix: "+",
      label: "Systems Delivered",
      sub: "Enterprise POS & ERP",
      isNumeric: true,
    },
    {
      value: 24,
      suffix: "/7",
      label: "Mission-Critical Support",
      sub: "Real-time production SLAs",
      isNumeric: true,
    },
  ],
  sectionNav: [
    { id: "retail", label: "Retail", active: true },
    { id: "business-software", label: "Business Software", active: false },
    { id: "saas", label: "Service SaaS", active: false },
    { id: "enterprise", label: "Enterprise", active: false },
    { id: "tech", label: "Tech", active: false },
    { id: "process", label: "Process", active: false },
  ],
}

export const RETAIL_SOLUTIONS = {
  label: "RETAIL",
  title: "Run Every Aisle, Every Outlet, From One Screen.",
  description: "End-to-end Retail ERP and POS systems supporting multi-location inventory, automated checkouts and real-time mall management.",
  features: [
    {
      id: "retail-erp",
      title: "Retail ERP",
      description: "Centralized merchandise planning, supplier procurement, multi-tier pricing, and automated gross margin accounting.",
      tag: "Core Backbone",
      icon: "Layers",
    },
    {
      id: "fast-pos",
      title: "Fast POS & Automated Checkout",
      description: "Sub-second till processing, contactless payment integration, barcode acceleration, and offline queue resilience.",
      tag: "High Footfall",
      icon: "Zap",
    },
    {
      id: "multi-inventory",
      title: "Multi-Location Inventory",
      description: "Real-time SKU visibility across central warehouses and hypermarket branches with automated reorder triggers.",
      tag: "Multi-Branch",
      icon: "Boxes",
    },
    {
      id: "mall-management",
      title: "Real-Time Mall Management",
      description: "Multi-tenant tenant utility metering, revenue share reconciliations, foot-traffic heatmaps, and lease billing.",
      tag: "Commercial Hub",
      icon: "Building2",
    },
  ],
  flowSteps: [
    { id: "supplier", label: "Supplier", detail: "PO Dispatch & Inbound Goods" },
    { id: "warehouse", label: "Warehouse", detail: "Batching & Cross-Docking" },
    { id: "store", label: "Store", detail: "Shelf & Aisle Allocation" },
    { id: "checkout", label: "Checkout", detail: "Instant Till Verification" },
    { id: "reports", label: "Reports", detail: "Live Financial Audits" },
  ],
}

export const BUSINESS_SOFTWARE = {
  label: "CUSTOM SYSTEMS",
  title: "Custom-Built for Industries Others Overlook.",
  description: "Custom systems for Trading Divisions, Waste Management, Real-Estate ERPs and Export Management.",
  bentoTiles: [
    {
      id: "trading",
      title: "Trading Division System",
      category: "Wholesale & Distribution",
      description: "Multi-currency order orchestration, automated credit limit checks, and high-speed B2B catalog quotation pipelines.",
      extraDetail: "Automates multi-warehouse lot tracking, tiered volume discounts, supplier payment reconciliation, and customs clearance paperwork.",
      techBadge: "B2B Ledger Engine",
      gridSpan: "col-span-1 md:col-span-6 lg:col-span-6",
    },
    {
      id: "waste-mgmt",
      title: "Waste Management System",
      category: "Municipal & Environmental Logistics",
      description: "Smart fleet dispatch routing, weighbridge IoT automation, and certified regulatory environmental compliance logging.",
      extraDetail: "Includes live bin level sensors, automated driver trip manifest tracking, hazardous materials auditing, and billing by metric tonnage.",
      techBadge: "IoT Telemetry & Fleet",
      gridSpan: "col-span-1 md:col-span-6 lg:col-span-6",
    },
    {
      id: "real-estate",
      title: "Real-Estate ERP",
      category: "Commercial Property & Assets",
      description: "End-to-end tenant lifecycle management, automated escalation lease billing, and preventative maintenance ticketing.",
      extraDetail: "Tracks vacancy rates, automated utility invoicing, digital contract renewals, and vendor work-order dispute resolutions.",
      techBadge: "Lease Engine & Yield",
      gridSpan: "col-span-1 md:col-span-5 lg:col-span-5",
    },
    {
      id: "export-mgmt",
      title: "Export Management",
      category: "International Multimodal Supply Chain",
      description: "Cross-border container scheduling, customs clearance documentation, bonded warehousing, and multi-port consignment tracking.",
      extraDetail: "Real-time vessel milestone tracking, automated bills of lading, currency hedging tariffs, and instant multi-hub inventory allocation across regional trading nodes.",
      caption: "Logistics across India, Turkey & China",
      techBadge: "Global Transit Network",
      isLarge: true,
      gridSpan: "col-span-1 md:col-span-7 lg:col-span-7",
    },
  ],
}

export const SERVICE_SAAS = {
  label: "PLUG & PLAY",
  title: "Open Your Doors Tomorrow. Software Is Already Ready.",
  description: "Plug-and-play, high-efficiency software for Laundries, Salons and Gyms.",
  cards: [
    {
      id: "laundry",
      title: "Laundry Management",
      tag: "Ready to deploy",
      accent: "teal",
      accentColor: "#14F1D9",
      glowColor: "rgba(20, 241, 217, 0.4)",
      description: "Industrial barcode tracking, express processing queues, automated driver pickup/delivery dispatch, and integrated garment care billing.",
      bullets: [
        "Barcode & QR tag tracking per garment batch",
        "Automated driver route pickup & delivery",
        "POS counter billing with instant SMS receipts",
      ],
      metrics: "Sub-Second Bag Tagging",
    },
    {
      id: "salon",
      title: "Salon Management",
      tag: "Ready to deploy",
      accent: "amber",
      accentColor: "#FFB547",
      glowColor: "rgba(255, 181, 71, 0.4)",
      description: "Intuitive appointment calendars, automated stylist commissions, recurring VIP memberships, and multi-chair retail checkout.",
      bullets: [
        "Online booking calendar & chair scheduling",
        "Automated stylist split commission calculations",
        "VIP loyalty passes & package renewal billing",
      ],
      metrics: "Zero Double-Bookings",
    },
    {
      id: "gym",
      title: "Gym Management",
      tag: "Ready to deploy",
      accent: "purple",
      accentColor: "#C084FC",
      glowColor: "rgba(192, 132, 252, 0.4)",
      description: "RFID turnstile gate control, automated recurring subscription renewals, personal trainer schedules, and locker allocation.",
      bullets: [
        "Turnstile & biometrics biometric gate check-in",
        "Recurring membership auto-debit & freeze logic",
        "Personal trainer session logs & client progress",
      ],
      metrics: "Automated Access Gates",
    },
  ],
}

export const ENTERPRISE_MANAGEMENT = {
  label: "ENTERPRISE",
  title: "Order, People and Flow — Under Control.",
  description: "Intelligent Queue/Token Management Systems and comprehensive HR & Payroll suites integrated with biometric endpoints.",
  rows: [
    {
      id: "queue-management",
      title: "Intelligent Queue & Token Management",
      subtitle: "Smart Customer Flow & Multi-Counter Routing",
      description: "Eliminate crowded waiting areas with digital kiosk self-service, synchronized ceiling LED displays, and automated SMS queue tickets.",
      highlights: [
        { title: "Smart Token Kiosk", desc: "Touchscreen ticket dispensing with multi-service categorisation." },
        { title: "Live Hall Counters", desc: "High-visibility digital audio-visual screens calling next tickets." },
        { title: "Wait-Time Analytics", desc: "Live bottleneck detection, counter throughput SLAs, and supervisor alerts." },
      ],
      badge: "Customer Flow Engine",
    },
    {
      id: "hr-payroll",
      title: "HR & Payroll with Biometric Integration",
      subtitle: "Precision Workforce Attendance & Automated Salaries",
      description: "Seamlessly bind physical biometric face/fingerprint terminals into cloud payroll ledgers, shift rotations, and statutory labor compliance.",
      highlights: [
        { title: "Biometric Hardware Sync", desc: "Real-time timestamp capture from optical & facial hardware scanners." },
        { title: "Dynamic Shift Rotations", desc: "Multi-branch roster scheduling, overtime calculations, and leave workflows." },
        { title: "Automated Payroll Execution", desc: "One-click pay slip generation with regional deductions and direct bank WPS files." },
      ],
      badge: "Enterprise Workforce",
    },
  ],
}

export const TECH_STACK = {
  title: "Engineered on Proven, Scalable Technology.",
  description: "Built for zero downtime and hypermarket-grade transaction throughput with modern, enterprise-approved frameworks.",
  categories: [
    {
      group: "Backend Engineering",
      color: "#14F1D9",
      technologies: [
        { name: "C#", role: "High-Throughput Core", detail: "Thread-safe transaction speed" },
        { name: "ASP.NET MVC", role: "Enterprise Architecture", detail: "Robust MVC modular backend" },
        { name: "Node.js", role: "Event-Driven Services", detail: "Asynchronous microservices" },
      ],
    },
    {
      group: "Frontend & Interfaces",
      color: "#FFB547",
      technologies: [
        { name: "React.js", role: "Dynamic POS UI", detail: "Sub-second reactive state rendering" },
        { name: "Tailwind CSS", role: "Design Token System", detail: "Low-overhead design system" },
        { name: "Framer Motion", role: "Micro-Interactions", detail: "Hardware-accelerated animations" },
      ],
    },
    {
      group: "Database & Cloud Infrastructure",
      color: "#C084FC",
      technologies: [
        { name: "Microsoft SQL Server", role: "Relational ACID Ledger", detail: "High-concurrency data safety" },
        { name: "MongoDB", role: "Flexible Document Store", detail: "Telemetry & unstructured logs" },
        { name: "Microsoft Azure", role: "Enterprise Cloud", detail: "Geographically redundant clusters" },
        { name: "Amazon Web Services", role: "Cloud Scalability", detail: "Auto-scaling serverless pipelines" },
      ],
    },
  ],
}

export const DEVELOPMENT_PROCESS = {
  label: "HOW WE WORK",
  title: "From First Call to Go-Live and Beyond.",
  description: "A disciplined 5-stage deployment methodology honed over hundreds of enterprise production launches.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      headline: "Operational Bottleneck Deep-Dive",
      description: "We analyze your physical floor plans, cashier flows, supplier friction points, and existing legacy software bottlenecks.",
      icon: "Search",
    },
    {
      number: "02",
      title: "Architecture & Design",
      headline: "Scalable Data Schema & Intuitive UX",
      description: "We prototype intuitive high-speed touch interfaces and architect normalized database schemas designed for high-concurrency scale.",
      icon: "Layout",
    },
    {
      number: "03",
      title: "Agile Development",
      headline: "Iterative Engineering in React & C#",
      description: "Rapid fortnightly sprints with modular code delivery, automated CI/CD builds, and continuous client test access.",
      icon: "Code2",
    },
    {
      number: "04",
      title: "Rigorous Testing",
      headline: "Hypermarket-Level Stress Simulation",
      description: "We simulate simultaneous black-Friday traffic across hundreds of tills to guarantee zero data loss during network dropouts.",
      icon: "ShieldAlert",
    },
    {
      number: "05",
      title: "Deployment & AMC",
      headline: "On-Site Rollout & 24/7 SLA Support",
      description: "Complete hardware commissioning, staff training, and ongoing Annual Maintenance Contracts with guaranteed sub-hour SLA response.",
      icon: "Headphones",
    },
  ],
}

export const CLOSING_CTA = {
  headline: "Have an Operation That Needs Better Software? Let's Map It Out.",
  subline: "Schedule a direct consultation with our solution architects to design an automated ecosystem tailored to your industry.",
  primaryButton: "Request a Free Consultation",
  callButton: "Call Us: +91 98765 43210",
  phone: "+91 98765 43210",
  serviceOptions: [
    "Retail ERP & Automated POS",
    "Trading Division Management",
    "Waste Management Logistics",
    "Real-Estate ERP & Tenant Portals",
    "Export Management & Multi-Port Transit",
    "Laundry Management SaaS",
    "Salon & Spa Management SaaS",
    "Gym & Fitness Center SaaS",
    "Intelligent Queue / Token Management",
    "HR & Payroll with Biometric Devices",
    "Custom Enterprise Software",
  ],
}
