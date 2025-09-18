# BrandStudios.AI Landing Page

## 🚀 Overview

A modern, high-performance landing page for BrandStudios.AI - a marketing automation platform that combines AI with human intelligence to create, syndicate, and measure brand content.

## 🎯 Project Goals

1. **Easy to maintain** - Clean component structure, well-documented code
2. **Visually stunning** - Modern gradients, animations, responsive design
3. **Performance-focused** - Fast load times, optimized assets, SEO-ready
4. **Brand-aligned** - Consistent with BrandStudios.AI identity

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)
- **Package Manager**: npm

## 📁 Project Structure

```
brandstudios-landing/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx          # Root layout with global providers
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles and Tailwind directives
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx      # Navigation header with mobile menu
│   │   │   ├── Footer.tsx      # Footer component
│   │   │   └── ClientLayout.tsx # Client-side providers wrapper
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx        # Hero section with main value prop
│   │   │   ├── CoreCapabilities.tsx # Create/Syndicate/Measure cards
│   │   │   ├── Outcomes.tsx    # Productivity outcomes & intelligence
│   │   │   ├── Showcase.tsx    # Video showcase section
│   │   │   ├── Features.tsx    # Features & integrations
│   │   │   ├── Security.tsx    # Security & compliance info
│   │   │   ├── Comparison.tsx  # Comparison table
│   │   │   └── ContactCTA.tsx  # Contact/demo CTA section
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Card.tsx        # Card component with hover effects
│   │   │   ├── Badge.tsx       # Gradient badge component
│   │   │   ├── Button.tsx      # CTA button component
│   │   │   ├── Modal.tsx       # Modal dialog component
│   │   │   └── Pill.tsx        # Tag/pill component
│   │   └── forms/              # Form components
│   │       └── DemoRequestForm.tsx # Demo request form with fields
│   ├── contexts/               # React contexts
│   │   └── DemoModalContext.tsx # Global modal state management
│   ├── lib/
│   │   ├── constants.ts       # All copy/text content
│   │   └── utils.ts           # Utility functions
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── public/                     # Static assets
│   └── videos/                # Video assets (if local)
├── docs/                      # Documentation
│   ├── CONTEXT.md            # Business context & requirements
│   ├── RULES.md              # Coding standards & best practices
│   ├── DESIGN-SYSTEM.md      # Complete design system documentation
│   ├── UI-PATTERNS.md        # UI patterns & interactions guide
│   ├── COMPONENT-REFERENCE.md # Quick component usage reference
│   └── DOCUMENTATION-GUIDE.md # How to maintain documentation
├── CHANGELOG.md               # Version history and changes
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository (if applicable)
git clone [repository-url]

# Navigate to project
cd brandstudios-landing

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

### Development

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Format code
npm run format
```

## 🎨 Design System

### Colors
- **Primary Violet**: #8c6eff
- **Rose**: #ff7aa2
- **Mint**: #57d9a3
- **Sun**: #ffcb6b
- **Background**: #fafafa → #ffffff gradient
- **Ink (Text)**: #1c1c1e
- **Muted**: #5f6571

### Typography
- **Headings**: Poppins (600-800 weight)
- **Body**: Inter (300-600 weight)
- **Responsive sizing** with clamp() for fluid typography

### Components
- **Cards**: Gradient background, hover lift effect
- **Badges**: Gradient violet-to-rose
- **Pills**: Light violet background tags
- **CTAs**: Gradient buttons with shadow

## 🌐 Content Sections

1. **Hero** - Main value proposition
2. **Core Capabilities** - Create, Syndicate, Measure
3. **Outcomes** - Productivity metrics & Brand Intelligence
4. **Showcase** - Video demonstrations
5. **Features** - Key features for creative teams
6. **Integrations** - Native MCP-first connectors
7. **Security** - Security & compliance details
8. **Comparison** - Competitive comparison table
9. **Contact** - Demo request CTA

## 📝 Copy Management

All copy is centralized in `src/lib/constants.ts` for easy updates:
- Section headings
- Descriptions
- Feature lists
- Statistics
- CTAs

## 🔧 Environment Variables

Create a `.env.local` file:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id

# API endpoints (if needed)
NEXT_PUBLIC_API_URL=https://api.brandstudios.ai

# Video CDN
NEXT_PUBLIC_VIDEO_CDN=https://res.cloudinary.com/...
```

## 📊 Performance

- Lighthouse Score Target: 95+
- Core Web Vitals optimized
- Image optimization via Next.js
- Font optimization
- Code splitting

## 📚 Documentation

Comprehensive documentation is available in the `/docs` directory:

- **[Design System](/docs/DESIGN-SYSTEM.md)** - Complete design tokens, colors, typography, spacing
- **[UI Patterns](/docs/UI-PATTERNS.md)** - Interaction patterns, animations, responsive behaviors
- **[Component Reference](/docs/COMPONENT-REFERENCE.md)** - Quick guide for using all components
- **[Development Rules](/docs/RULES.md)** - Coding standards and best practices
- **[Documentation Guide](/docs/DOCUMENTATION-GUIDE.md)** - How to maintain and update documentation
- **[Project Context](/docs/CONTEXT.md)** - Business requirements and brand guidelines
- **[Changelog](/CHANGELOG.md)** - Version history and detailed change tracking

### 📝 Documentation Maintenance

When making changes, always:
1. Update relevant documentation files
2. Add entry to CHANGELOG.md
3. Follow the documentation guide for consistency
4. Bump version number for releases

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Other Platforms

The project exports a static site that can be deployed to:
- Netlify
- AWS S3 + CloudFront
- Google Cloud
- Any static hosting

## 📄 License

Proprietary - BrandStudios.AI

## 👥 Team

- Design: [Designer Name]
- Development: [Your Name]
- Content: [Content Team]

## 📞 Support

For questions or issues:
- Email: russ.barnett@icloud.com
- Documentation: See `/docs` folder

---

Last Updated: September 2025