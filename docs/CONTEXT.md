# Project Context & Decision Log

## 🎯 Project Purpose

Building a modern, visually stunning landing page for BrandStudios.AI - a marketing automation platform that combines AI with human intelligence to help brands create, syndicate, and measure their content.

## 👤 Client Information

- **Contact**: russ.barnett@icloud.com
- **Company**: BrandStudios.AI
- **Tagline**: Marketing Automation with Human Intelligence™
- **Core Value Props**: Create • Syndicate • Measure

## 🏗 Initial Setup Context

### Date: September 16, 2025

#### Requirements Received:
1. Convert existing HTML landing page to modern stack
2. Keep ALL copy/content (can be removed later)
3. Needs to be easy to maintain but visually stunning
4. Best practices for file structure required
5. Solid documentation foundation
6. System to track context across conversations

#### Tech Stack Decision:
**Chosen: Next.js 14 + TypeScript + Tailwind CSS**

**Reasoning:**
- **Next.js**: Industry standard, great DX, excellent docs, SEO-optimized
- **TypeScript**: Better maintainability, catches errors early
- **Tailwind CSS**: Rapid styling, consistent design system, perfect for gradients/effects
- **Easy + Stunning**: This combo provides both requirements

**Alternatives Considered:**
- Astro (great for static, but less ecosystem)
- SvelteKit (performant, but smaller community)
- Vite + React (more config needed)

## 📋 Content Sections

### Extracted from Original HTML:
1. **Hero Section**
   - Headline: "Every great brand begins with a human spark."
   - Subtext about helping sparks grow into momentum
   - Three core pillars: Create, Syndicate, Measure

2. **Core Capabilities**
   - **CREATE**: Smart assets, crafted at scale
   - **SYNDICATE**: Publish everywhere with ease
   - **MEASURE**: Clarity on what's working

3. **Outcomes Section**
   - 70% lower production costs
   - 50% faster time to launch
   - 3× more content throughput
   - Consistent brand voice

4. **Brand Intelligence Core**
   - Brand DNA models
   - Locked templates
   - Versioning and audit trails

5. **Video Showcase**
   - 4 Cloudinary-hosted videos showing platform in action

6. **Features & Integrations**
   - Creative Team Enhancement
   - MCP-first connectors
   - Direct API connections

7. **Security & Compliance**
   - SOC 2-aligned controls
   - RBAC + MFA
   - Encryption standards

8. **Comparison Table**
   - vs "Company J" (likely Jasper.ai)
   - Highlighting end-to-end lifecycle advantage

## 🎨 Design System Extracted

### Color Palette:
```css
--violet: #8c6eff  /* Primary brand color */
--rose: #ff7aa2    /* Secondary accent */
--mint: #57d9a3    /* Tertiary accent */
--sun: #ffcb6b     /* Quaternary accent */
--ink: #1c1c1e    /* Primary text */
--muted: #5f6571   /* Secondary text */
```

### Typography:
- **Headings**: Poppins (weights: 600, 700, 800)
- **Body**: Inter (weights: 300, 400, 600, 800)
- **Responsive**: Using clamp() for fluid typography

### Visual Effects:
- Gradient backgrounds (135deg, fafafa to fff)
- Gradient badges (90deg, violet to rose)
- Card hover: translateY(-3px) lift
- Box shadows with transparency
- Backdrop blur on sticky header

## 🔄 Development Progress

### Session 1: September 16, 2025
- [x] Analyzed requirements and existing HTML
- [x] Selected tech stack (Next.js + TypeScript + Tailwind)
- [x] Created project structure
- [x] Set up comprehensive documentation
- [ ] Extract all copy to constants
- [ ] Build components
- [ ] Implement sections
- [ ] Add animations

## 💡 Important Decisions

### 1. Component Architecture
**Decision**: Separate by type (layout/sections/ui)
**Reason**: Clear separation of concerns, easy to find components

### 2. Copy Management
**Decision**: Centralize all text in constants.ts
**Reason**: Easy to update, version control friendly, reusable

### 3. Video Hosting
**Decision**: Keep Cloudinary URLs for now
**Reason**: Already optimized, CDN delivery, no need to self-host

### 4. Styling Approach
**Decision**: Tailwind-first with minimal custom CSS
**Reason**: Consistency, rapid development, maintainability

## 🔮 Future Considerations

1. **Analytics Integration**
   - Consider GA4, Plausible, or PostHog
   - Track demo requests and engagement

2. **Animation Library**
   - Framer Motion for advanced animations
   - AOS for simple scroll animations

3. **Form Handling**
   - Demo request form integration
   - Consider Formspree, Netlify Forms, or custom API

4. **Performance Optimizations**
   - Image optimization with next/image
   - Font subsetting
   - Critical CSS inlining

5. **A/B Testing**
   - Consider tools like Optimizely or Google Optimize
   - Test different CTAs and headlines

## 🐛 Known Issues

None yet - fresh project

## 📝 Notes for Next Session

When continuing development:
1. Check this file first for context
2. Review TODO.md for current tasks
3. Follow RULES.md for coding standards
4. All copy is in src/lib/constants.ts
5. Videos are Cloudinary-hosted (URLs in code)

## 🔗 External Resources

- **Cloudinary Videos**: Currently using res.cloudinary.com/dbhzrfwvx/
- **Font Sources**: Google Fonts (Inter, Poppins)
- **Original HTML**: Preserved in initial conversation

---

**Last Updated**: September 16, 2025, Initial Setup
