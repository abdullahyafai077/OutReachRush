export const siteConfig = {
  name: "OutreachRush",
  legalName: "Outreach Rush",
  url: "https://outreachrush.com",
  email: "contact@outreachrush.com",
  locale: "en_US",
  defaultOgImage: "/og-outreachrush.jpg",
  /** Static year for prerender-safe footer; update annually or via CI */
  copyrightYear: 2026,
} as const;

export const homeSeo = {
  title: "White-Hat Link Building for SEO and AI Search Visibility | OutreachRush",
  description:
    "OutreachRush helps SaaS, B2B, technology, and growing brands earn relevant backlinks through strategic digital outreach, editorial content, and relationship-driven link acquisition.",
  keywords: [
    "white hat link building",
    "SaaS link building",
    "link building agency",
    "guest posting service",
    "niche edits",
    "digital PR link building",
    "white label link building",
    "SEO backlinks",
  ],
  canonicalPath: "/",
} as const;

export const heroContent = {
  kicker: "OUTREACHRUSH",
  h1: "White-Hat Link Building",
  h1Accent: "for SEO, AI Search Visibility",
  intro:
    "OutreachRush helps SaaS, B2B, technology, and growing brands earn relevant backlinks through strategic digital outreach, editorial content, and relationship-driven link acquisition.",
  support:
    "We're not chasing link quantity. We build a stronger web presence for your brand — from relevant placements and genuinely helpful content to the authority signals that matter in traditional search engines and AI-powered search surfaces alike.",
  primaryCta: { label: "Start Ranking Today", href: "#contact" },
  microProof: "Real relationships. Relevant placements.",
  bottomStrip: [
    { label: "FOCUS", value: "SaaS · B2B · Technology" },
    { label: "APPROACH", value: "Research · Relationships · Relevance" },
    { label: "BUILT FOR", value: "Search · Authority · Discovery" },
  ],
} as const;

export type DrTierId = "dr40" | "dr50" | "dr60" | "dr70";
export type NicheId = "saas" | "fintech" | "ecommerce" | "b2b";

export const pricingConfig = {
  drTiers: [
    { id: "dr40" as const, label: "DR 40+", basePerLink: 95, description: "Growing authority sites" },
    { id: "dr50" as const, label: "DR 50+", basePerLink: 135, description: "Established industry blogs" },
    { id: "dr60" as const, label: "DR 60+", basePerLink: 195, description: "High-traffic publications" },
    { id: "dr70" as const, label: "DR 70+", basePerLink: 285, description: "Top-tier editorial domains" },
  ],
  niches: [
    { id: "saas" as const, label: "SaaS", multiplier: 1 },
    { id: "fintech" as const, label: "Fintech", multiplier: 1.15 },
    { id: "ecommerce" as const, label: "eCommerce", multiplier: 1.08 },
    { id: "b2b" as const, label: "B2B", multiplier: 1.05 },
  ],
  volume: { min: 3, max: 30, default: 8, step: 1 },
  deliverables: [
    "Manual editorial outreach & personalized pitches",
    "Contextual in-content link placement",
    "Anchor strategy aligned to search intent",
    "Monthly live link report with DR & traffic metrics",
    "Dedicated campaign manager",
  ],
  floorMonthly: 100,
} as const;

export const navLinks = {
  services: [
    {
      label: "SaaS Link Building",
      href: "/saas-link-building-agency",
      slug: "saas-link-building",
    },
    { label: "Guest Posting", href: "/#services", slug: "guest-posting" },
    {
      label: "White Label Link Building",
      href: "/white-label-link-building",
      slug: "white-label",
    },
    // { label: "Niche Edits", href: "/#services", slug: "niche-edits" },
    // { label: "Listicles", href: "/#services", slug: "listicles" },
  ],
  main: [
    { label: "Pricing", href: "/#pricing" },
    { label: "About us", href: "/#about" },
    { label: "Contact us", href: "/#contact" },
  ],
} as const;

export const services = [
  {
    id: "saas",
    title: "SaaS Link Building",
    description:
      "Editorial backlinks from business and software publications that compound product-led growth and category authority.",
    icon: "Layers",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "guest",
    title: "High-Authority Guest Posting",
    description:
      "Original articles pitched to editors at leading sites in your niche—not cookie-cutter guest post farms.",
    icon: "PenLine",
    span: "",
  },
  {
    id: "niche",
    title: "Niche Edits / Link Insertions",
    description:
      "Contextual placements inside existing ranking content for fast authority lifts without new pages.",
    icon: "Link2",
    span: "",
  },
  {
    id: "pr",
    title: "Digital PR & HARO",
    description:
      "Journalist outreach and news mentions that earn links from central editorial and syndication networks.",
    icon: "Newspaper",
    span: "lg:col-span-2",
  },
  {
    id: "local",
    title: "Local Link Building",
    description:
      "Region-specific citations and partnerships that strengthen local pack visibility and geo relevance.",
    icon: "MapPin",
    span: "",
  },
  {
    id: "white-label",
    title: "White-Label Link Building",
    description:
      "Agency-ready fulfillment with branded reporting, SLAs, and scalable capacity for client campaigns.",
    icon: "Briefcase",
    span: "",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We map your business goals, audit your backlink profile, and surface quick-win authority gaps.",
  },
  {
    step: "02",
    title: "Competitor Gap Analysis",
    description:
      "We identify who links to competitors and which content formats earn the most editorial pickups.",
  },
  {
    step: "03",
    title: "Keyword & Anchor Strategy",
    description:
      "Natural, intent-driven anchors—no stuffing—aligned to pages you want to rank.",
  },
  {
    step: "04",
    title: "Manual Editorial Outreach",
    description:
      "Personalized pitches to real editors; no mass blasts or automated spam tools.",
  },
  {
    step: "05",
    title: "Live Link Placement",
    description:
      "You see every live URL, domain metrics, and placement context before we invoice the next cycle.",
  },
  {
    step: "06",
    title: "Monthly Reporting",
    description:
      "DR, traffic, anchor mix, and pipeline visibility—with ongoing optimization as rankings shift.",
  },
] as const;

export const caseStudies = [
  {
    client: "SaaS Founder",
    industry: "B2B Software",
    metrics: [
      { label: "Domain Rating", before: "38", after: "56", delta: "+18" },
      { label: "Organic Traffic", before: "4.2k/mo", after: "11.8k/mo", delta: "+181%" },
      { label: "Top-3 Keywords", before: "12", after: "41", delta: "+29" },
    ],
    quote:
      "They secured DR 70+ placements on a tight timeline so our team could focus on product—not outreach.",
    author: "Mark T., SaaS Founder",
  },
  {
    client: "E-commerce Brand",
    industry: "Retail",
    metrics: [
      { label: "Domain Rating", before: "32", after: "49", delta: "+17" },
      { label: "Organic Traffic", before: "8.1k/mo", after: "19.4k/mo", delta: "+139%" },
      { label: "Top-3 Keywords", before: "22", after: "58", delta: "+36" },
    ],
    quote:
      "Niche-relevant links that moved rankings within quarters—not years of low-quality directory links.",
    author: "Lena R., E-commerce Lead",
  },
  {
    client: "SEO Agency Partner",
    industry: "White Label",
    metrics: [
      { label: "Client Retention", before: "72%", after: "94%", delta: "+22pts" },
      { label: "Avg. DR of Placements", before: "42", after: "61", delta: "+19" },
      { label: "Reporting NPS", before: "7.1", after: "9.2", delta: "+2.1" },
    ],
    quote:
      "Reliable white-label fulfillment with transparent metrics—our go-to partner for over a year.",
    author: "Derek S., Agency Owner",
  },
] as const;

export const faqs = [
  {
    question: "What is link building?",
    answer:
      "Link building is earning links from other websites to yours. Quality backlinks signal trust to search engines, helping rankings and organic traffic grow sustainably.",
  },
  {
    question: "How much does link building cost?",
    answer:
      "Pricing depends on DR tier, niche competitiveness, and monthly volume. OutreachRush packages start from $100/month; use the calculator above for a tailored estimate.",
  },
  {
    question: "Why is link building important for SEO?",
    answer:
      "Backlinks remain a core ranking signal. Editorial links from relevant, high-authority sites reinforce expertise and help content compete in competitive SERPs.",
  },
  {
    question: "What link building services does OutreachRush offer?",
    answer:
      "SaaS link building, guest posting, niche edits, digital PR & HARO, local link building, and white-label fulfillment—all strictly white-hat and manually vetted.",
  },
  {
    question: "Do you use PBNs or automated outreach?",
    answer:
      "Never. Every placement comes from real sites with organic traffic, vetted via DR, relevance, and indexation checks—following Google Webmaster Guidelines.",
  },
  {
    question: "How long until we see SEO results?",
    answer:
      "Most campaigns show traction in 8–16 weeks depending on niche difficulty, current authority, and content readiness. We report leading indicators monthly, not vanity metrics.",
  },
] as const;

export const footerForm = {
  title: "Get Your Free Link Audit",
  description:
      "Share your domain and goals—we'll review your backlink profile and outline a white-hat growth plan.",
  submitLabel: "Request Free Audit",
  fields: {
    name: "Full name",
    email: "Work email",
    website: "Website URL",
    message: "Growth goals (optional)",
  },
} as const;
