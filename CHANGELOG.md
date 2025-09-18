# Changelog

All notable changes to the BrandStudios.AI Landing Page project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### To Be Added
- Framer Motion animations for page transitions and scroll effects
- Analytics tracking (Google Analytics or similar)
- Vercel deployment configuration
- Loading states and error boundaries
- Performance optimizations for images and bundle size
- Enhanced accessibility features for WCAG compliance
- 404 and custom error pages
- API integration for form submissions (replace mailto)
- SEO optimization with meta tags and structured data
- Unit and integration testing setup

## [0.2.1] - 2025-09-18

### Changed
- **Layout Improvements**:
  - Added video placement in Hero section with responsive grid layout (1 column mobile, 2 columns desktop)
  - Resized Showcase videos to be more compact (2x2 on mobile, 4x1 on desktop)
  - Added hover effects on Showcase videos with violet ring highlight
  - Hero video includes subtle glow effect for visual enhancement

### Technical Updates
- Updated Hero.tsx to support video display with responsive grid
- Modified Showcase.tsx for compact video grid layout  
- Extended HERO constant in constants.ts with video configuration

## [0.2.0] - 2025-09-18

### Added
- Mobile menu functionality with slide-in drawer
  - Hamburger to X icon animation
  - Smooth slide-in from right (280px width)
  - Overlay backdrop with body scroll lock
  - ESC key support for closing
  - Auto-close on window resize
- Demo request modal system
  - Global modal context provider
  - Reusable Modal component
  - DemoRequestForm with validation
  - Form fields: name, email, company, role, message
  - Success state with checkmark animation
  - Currently using mailto: for form submission
- Comprehensive documentation
  - DESIGN-SYSTEM.md - Complete design tokens and visual guidelines
  - UI-PATTERNS.md - Interaction patterns and behaviors
  - COMPONENT-REFERENCE.md - Quick component usage guide
  - Documentation maintenance rules in RULES.md
  - This CHANGELOG.md file

### Changed
- Updated Button component to handle demo modal triggers
- Enhanced Header component with mobile menu state management
- Modified app layout to include ClientLayout provider
- Updated TypeScript types for new props
- Improved README.md with documentation links
- Fixed Card component ID prop issues in multiple sections

### Fixed
- Build errors related to component prop types
- Card component accepting ID props incorrectly
- Mobile menu button visibility and positioning
- Form field focus states and accessibility

## [0.1.0] - 2025-09-17

### Added
- Initial project setup with Next.js 14, TypeScript, and Tailwind CSS v4
- Complete landing page with 9 sections:
  - Hero section with main value proposition
  - Core Capabilities (Create, Syndicate, Measure)
  - Outcomes with productivity metrics
  - Video Showcase section (4 Cloudinary videos)
  - Features for creative teams
  - Security & compliance information
  - Comparison table against competitors
  - Contact CTA section
- Custom design system implementation:
  - Brand colors (violet: #8c6eff, rose: #ff7aa2, mint: #57d9a3)
  - Gradient effects throughout
  - Custom fonts (Inter for body, Poppins for headings)
  - Responsive typography with clamp()
- Component library:
  - Reusable UI components (Button, Card, Badge, Pill)
  - Layout components (Header, Footer)
  - Section components for each page section
- Centralized content management in constants.ts
- Git repository initialization
- Project documentation (CONTEXT.md, RULES.md)

### Project Information
- **Version**: 0.2.0
- **Tech Stack**: Next.js 14, TypeScript, Tailwind CSS v4
- **Node Version**: 18+
- **Package Manager**: npm
- **Primary Contact**: russ.barnett@icloud.com

---

## Version Guidelines

### Version Numbering
- **Major (X.0.0)**: Breaking changes, major redesigns, framework changes
- **Minor (0.X.0)**: New features, sections, or capabilities
- **Patch (0.0.X)**: Bug fixes, small improvements, documentation updates

### Release Process
1. Update version in package.json
2. Update CHANGELOG.md with all changes
3. Commit with message: `chore: release v[VERSION]`
4. Tag release: `git tag v[VERSION]`
5. Push tags: `git push --tags`
