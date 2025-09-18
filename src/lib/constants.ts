export const SITE_META = {
  title: "BrandStudios.AI — Create • Syndicate • Measure",
  description: "BrandStudios.AI — a kinder, designer‑friendly platform to create, syndicate, and measure with Marketing Automation + Human Intelligence.",
  tagline: "Marketing Automation with Human Intelligence™",
  email: "russ.barnett@icloud.com",
}

export const NAVIGATION = {
  links: [
    { href: "#create", label: "Create" },
    { href: "#syndicate", label: "Syndicate" },
    { href: "#measure", label: "Measure" },
    { href: "#intelligence", label: "Intelligence" },
    { href: "#security", label: "Security" },
    { href: "#compare", label: "Compare" },
  ],
  cta: {
    href: "#contact",
    label: "Get a demo",
    ariaLabel: "Get a demo of BrandStudios.AI",
  },
}

export const HERO = {
  headline: "Every great brand begins with a human spark.",
  subheadline: "We help that spark grow into momentum. With seamless automation, flowing workflows, and insights you can trust, BrandStudios.ai gives you room to do what matters most: shaping stories, building relationships, and creating lasting impact. Think of it less as a tool, more as a creative partner built around your brand, your voice, your vision.",
  pills: ["Create", "Syndicate", "Measure"],
  video: {
    src: "https://res.cloudinary.com/dbhzrfwvx/video/upload/v1754939611/huqmuvbvm923ndwytszv.mp4",
    ariaLabel: "BrandStudios.AI Platform Overview",
  },
}

export const CORE_CAPABILITIES = {
  create: {
    badge: "CREATE",
    eyebrow: "Generative production",
    title: "Smart assets, crafted at scale",
    description: "Images, video, copy, and ads — ready for your review and refinement.",
  },
  syndicate: {
    badge: "SYNDICATE",
    eyebrow: "Native distribution",
    title: "Publish everywhere with ease",
    description: "Direct connectors, email built‑in, approvals, drafts, and simple scheduling you control.",
  },
  measure: {
    badge: "MEASURE",
    eyebrow: "Unified analytics",
    title: "Clarity on what's working",
    description: "Campaign rollups, cross‑channel KPIs, CSV export, and next‑step suggestions.",
  },
}

export const OUTCOMES = {
  eyebrow: "Productivity & Continuity Outcomes*",
  stats: [
    { value: "70%", label: "Lower production costs" },
    { value: "50%", label: "Faster time to launch" },
    { value: "3×", label: "More content throughput" },
    { value: "Consistent", label: "Brand voice across channels" },
  ],
  disclaimer: "*Results vary by baseline workflows, templates, and volume.",
}

export const BRAND_INTELLIGENCE = {
  eyebrow: "Intelligence & Governance",
  title: "Brand Intelligence Core",
  features: [
    {
      title: "Brand DNA models",
      description: "trained on your voice, visuals, and rules.",
    },
    {
      title: null,
      description: "Locked templates, brand tokens, automated pre‑flight checks + human QA.",
    },
    {
      title: null,
      description: "Versioning, rollbacks, approvals, and audit trails.",
    },
  ],
}

export const SHOWCASE = {
  eyebrow: "Showcase",
  title: "See it in motion",
  subtitle: "Content optimized for every platform",
  videos: [
    {
      src: "https://res.cloudinary.com/dbhzrfwvx/video/upload/v1754939611/huqmuvbvm923ndwytszv.mp4",
      ariaLabel: "TikTok Reel Example",
      platform: "tiktok",
      format: "9:16", // Vertical video
    },
    {
      src: "https://res.cloudinary.com/dbhzrfwvx/video/upload/v1754939733/ndwqzyuyujlp9lbd3vvp.mp4",
      ariaLabel: "Instagram Reel Example",
      platform: "instagram-reel",
      format: "9:16", // Vertical video
    },
    {
      src: "https://res.cloudinary.com/dbhzrfwvx/video/upload/v1757959292/s5xqh6rfdhrbp9ilcnu4.mp4",
      ariaLabel: "Instagram Post Example",
      platform: "instagram-post",
      format: "1:1", // Square video
    },
    {
      src: "https://res.cloudinary.com/dbhzrfwvx/video/upload/v1757959481/gzs6cxvu254gksckvh5h.mp4",
      ariaLabel: "YouTube Short Example",
      platform: "youtube-short",
      format: "9:16", // Vertical video
    },
  ],
  note: "Note: Videos stream from Cloudinary; replace sources if you have final cuts.",
}

export const FEATURES = {
  creative: {
    eyebrow: "Key Features for Brands",
    title: "Creative Team Enhancement",
    items: [
      "Manage logos, colors, fonts, visuals, voice & tone.",
      "Rapid image & copy generation — assistive, not replacement.",
      "Easy versioning, rollbacks, and approvals.",
    ],
  },
  integrations: {
    eyebrow: "Native Integrations",
    title: "MCP‑first connectors",
    items: [
      "Direct API connections for reliability and security.",
      "Email + dozens of platforms supported natively.",
      "Track posts, media, KPIs, and status in one place.",
    ],
  },
}

export const MEASUREMENT = {
  eyebrow: "Measurement",
  title: "Key Reporting Features",
  items: [
    "Normalize metrics by platform (impressions, views, clicks, engagement).",
    "Per‑campaign and per‑asset breakdowns with CSV export.",
    "Recommendations for next iterations.",
  ],
}

export const SECURITY = {
  eyebrow: "Security & Compliance",
  title: "Direct connections for greater security and reliability",
  items: [
    "Encryption in transit & at rest; per‑tenant isolation & logs.",
    "RBAC + MFA; SSO (OIDC/SAML) on Enterprise.",
    "SOC 2‑aligned controls today; Type II certification on the roadmap.",
    "Data residency options available (Enterprise).",
  ],
}

export const TECH_STACK = {
  eyebrow: "Proprietary Tech — Geek Out",
  pills: [
    "Coordinator",
    "Guardrails",
    "Agents",
    "RLS",
    "HTTP/HTTPS Bridge",
    "Per‑tenant storage",
    "CDN",
    "Audit",
  ],
}

export const COMPARISON = {
  title: "Comparison",
  ariaLabel: "Comparison table",
  headers: ["Dimension", "BrandStudios.AI", "Company J"],
  rows: [
    {
      dimension: "Scope",
      brandstudios: "End‑to‑end lifecycle: Create → Syndicate → Measure (single surface).",
      competitor: "Creation workspace; distribution via paired tools.",
    },
    {
      dimension: "Publishing & Scheduling",
      brandstudios: "Native Tier‑1 connectors, approvals, drafts, built‑in scheduling.",
      competitor: "Often pairs with external schedulers; creation‑first.",
    },
    {
      dimension: "Analytics",
      brandstudios: "Unified cross‑channel KPIs and campaign rollups.",
      competitor: "Cross‑channel analytics handled via external tools.",
    },
    {
      dimension: "Brand Governance",
      brandstudios: "Locked templates, tokens, automated pre‑flight + human QA.",
      competitor: "Focus on copy tone & style.",
    },
    {
      dimension: "Integrations",
      brandstudios: "MCP‑first connectors; HTTP/HTTPS Bridge; CDN; per‑tenant storage.",
      competitor: "Broad app connectivity via APIs.",
    },
    {
      dimension: "Security/Enterprise",
      brandstudios: "SOC‑aligned controls; RBAC/MFA; SSO; private‑cloud path.",
      competitor: "Business/Enterprise: SSO, API, governance features.",
    },
  ],
}

export const FIT = {
  brandstudios: {
    eyebrow: "Where BrandStudios.AI fits",
    items: [
      "On‑brand image + copy kits.",
      "Native publishing across Tier‑1 channels from one place.",
      "Unified KPI dashboard (campaign & asset rollups).",
      "Security, reliability, and direct connections.",
    ],
  },
  others: {
    eyebrow: "Where others fit",
    items: [
      "Copy‑first templates & collaboration take priority.",
      "Existing scheduler/analytics stack stays in place.",
      "Distribution/measurement live in third‑party tools.",
    ],
  },
}

export const CONTACT = {
  eyebrow: "Next step",
  title: "Want a friendly walkthrough?",
  description: "Share a link to your brand guide and we'll set up a short demo using your voice, visuals, and channels.",
  cta: {
    label: "Request a demo",
    href: `mailto:${SITE_META.email}?subject=BrandStudios%20Demo`,
  },
}

export const FOOTER = {
  copyright: "© BrandStudios.AI • Built for creative humans. • Marketing Automation with Human Intelligence™",
}
