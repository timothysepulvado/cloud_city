# BrandStudios.AI Design System Documentation

## 📐 Design Philosophy

### Core Principles
- **Human-Centered**: Approachable, warm design that emphasizes the human element in AI-powered marketing
- **Clarity First**: Clean, uncluttered interfaces with clear visual hierarchy
- **Brand Expression**: Vibrant gradients and modern aesthetics that reflect innovation
- **Responsive by Default**: Mobile-first approach ensuring seamless experience across devices

## 🎨 Color System

### Primary Brand Colors
```css
--violet: #8c6eff    /* Primary brand color */
--rose: #ff7aa2      /* Secondary accent */
--mint: #57d9a3      /* Success/positive states */
--sun: #ffcb6b       /* Warning/highlight */
```

### Base Colors
```css
--bg: #fafafa        /* Primary background */
--bg-2: #ffffff      /* Secondary background */
--ink: #1c1c1e       /* Primary text */
--muted: #5f6571     /* Secondary text */
--line: rgba(0, 0, 0, 0.08) /* Borders and dividers */
```

### Gradients
```css
/* Primary gradient - used for CTAs and hero elements */
.gradient-violet-rose {
  background: linear-gradient(90deg, var(--violet), var(--rose));
}

/* Card gradient - subtle depth */
.gradient-card {
  background: linear-gradient(180deg, #ffffff, #f9f9fb);
}

/* Logo gradient - brand identity */
.gradient-logo {
  background: conic-gradient(from 180deg, var(--violet), var(--rose), var(--mint));
}
```

## 📏 Typography

### Font Families
- **Sans (Inter)**: Body text, UI elements
  - Weights: 300 (light), 400 (regular), 600 (semibold), 800 (extrabold)
- **Heading (Poppins)**: Headlines, emphasis
  - Weights: 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)

### Type Scale
```css
/* Headlines */
h1: clamp(28px, 4vw, 48px)    /* Hero headlines */
h2: clamp(24px, 3vw, 36px)    /* Section titles */
h3: clamp(18px, 2vw, 22px)    /* Card titles */

/* Body Text */
body: 16px / 1.6               /* Regular content */
small: 14px                    /* Secondary text */
xs: 12px                       /* Labels, eyebrows */

/* Special */
.eyebrow: 12px, uppercase, tracking: 0.3px
.tagline: 14px, muted color
```

## 🔲 Spacing System

### Base Unit
- **1 unit = 4px**
- Use multiples: 2, 3, 4, 6, 7, 10, 12, 14, 18

### Common Spacing
```css
--pad: 24px           /* Standard padding */
--gap: 18px           /* Grid/flex gaps */
--section-spacing: 28px (7 units)
--card-padding: 24px
--button-padding: 10px 14px (md), 12px 24px (lg)
```

## 🎭 Component Patterns

### Cards
- **Background**: White with subtle gradient
- **Border Radius**: 18px (--radius)
- **Padding**: 24px
- **Shadow**: 0 8px 28px rgba(0, 0, 0, 0.06)
- **Hover State**: Shadow increases, slight scale (1.02)

### Buttons

#### Primary Button
```css
- Background: gradient-violet-rose
- Text: white, font-bold
- Border Radius: full (999px)
- Shadow: 0 8px 24px rgba(140, 110, 255, 0.3)
- Hover: scale(1.02), increased shadow
- Active: scale(0.98)
```

#### Secondary Button
```css
- Background: white
- Border: 1px solid var(--violet)
- Text: var(--violet)
- Hover: bg-violet/5
```

### Badges
- **Gradient Badge**: violet-to-rose gradient, white text
- **Solid Badge**: Single color background
- **Border Radius**: 999px
- **Padding**: 2px 8px

### Pills
- **Default**: Light background, muted text
- **Violet**: Violet background, white text
- **Border Radius**: 999px
- **Padding**: 6px 12px

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Mobile-First Approach
- Default styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets (min 44px)

## 🎬 Animations & Transitions

### Standard Transitions
```css
/* Default transition */
transition: all 0.2s ease;

/* Hover effects */
transition: all 0.2s ease;

/* Modal/drawer animations */
transition: transform 0.3s ease-out;
```

### Micro-Interactions
- **Button hover**: Scale + shadow enhancement
- **Card hover**: Subtle lift with shadow
- **Link hover**: Color change + underline
- **Menu toggle**: 90° rotation animation
- **Modal entrance**: Fade in + zoom in (scale 0.95 → 1)

## 🏗 Layout System

### Container
```css
max-width: 1140px
padding: 0 16px (mobile), 0 24px (desktop)
margin: 0 auto
```

### Grid System
- **Core Capabilities**: 1 col (mobile) → 3 cols (desktop)
- **Features**: 1 col (mobile) → 2 cols (tablet) → 4 cols (desktop)
- **Showcase**: 2x2 grid (all sizes)
- **Comparison Table**: Responsive table with sticky header

### Section Spacing
- **Between sections**: 28px (7 units)
- **Within sections**: 18px (gap)
- **Card spacing**: 18px gap

## ♿ Accessibility Guidelines

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--violet);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Color Contrast
- **Text on white**: #1c1c1e (AAA compliant)
- **Muted text**: #5f6571 (AA compliant)
- **White on gradients**: Ensures 4.5:1 minimum

### Interactive Elements
- **Minimum touch target**: 44x44px
- **Keyboard navigation**: All interactive elements accessible
- **ARIA labels**: Descriptive labels for all buttons/links
- **Screen reader support**: Semantic HTML, proper headings

## 🎯 UI States

### Form Elements
```css
/* Default */
border: 1px solid var(--line)
border-radius: 8px
padding: 8px 16px

/* Focus */
outline: none
ring: 2px var(--violet)
border-color: transparent

/* Error */
border-color: var(--rose)
background: var(--rose)/5

/* Success */
border-color: var(--mint)
background: var(--mint)/5
```

### Loading States
- **Skeleton screens**: Animated gradient placeholders
- **Spinners**: Violet rotating circle
- **Progress bars**: Gradient fill

### Empty States
- **Illustration**: Light, friendly graphics
- **Message**: Clear explanation
- **CTA**: Action to resolve

## 🎪 Special Effects

### Backdrop Blur
```css
backdrop-blur: 12px (heavy), 8px (medium), 4px (light)
backdrop-saturate: 140%
```

### Glass Morphism (Header)
```css
background: white/80
backdrop-blur: 12px
backdrop-saturate: 140%
border: 1px solid var(--line)
```

### Shadows
```css
--shadow: 0 8px 28px rgba(0, 0, 0, 0.06)       /* Default */
--shadow-hover: 0 12px 34px rgba(0, 0, 0, 0.08) /* Hover */
--shadow-modal: 0 20px 50px rgba(0, 0, 0, 0.15) /* Modal */
```

## 📦 Component Library

### Core UI Components
1. **Button** - Primary/Secondary variants, 3 sizes
2. **Card** - Container with optional gradient
3. **Badge** - Status/category indicators
4. **Pill** - Tag-like elements
5. **Modal** - Overlay dialog system

### Layout Components
1. **Header** - Sticky navigation with glass effect
2. **Footer** - Minimal with tagline
3. **Section** - Consistent spacing wrapper

### Form Components
1. **Input** - Text input with focus states
2. **Select** - Dropdown with custom styling
3. **Textarea** - Multi-line input
4. **Form** - Complete form with validation

### Content Components
1. **Hero** - Large headline with pills
2. **CoreCapabilities** - 3-card feature grid
3. **Features** - Icon + text list
4. **Showcase** - Video grid
5. **Comparison** - Responsive table
6. **Outcomes** - Stats display
7. **Security** - List + pills
8. **ContactCTA** - Call-to-action card

## 🚀 Implementation Notes

### CSS Architecture
- **Tailwind v4**: Utility-first with custom properties
- **CSS Variables**: Centralized theming
- **Component Classes**: Minimal custom CSS

### Performance Considerations
- **Lazy loading**: Images and videos
- **Code splitting**: Route-based chunks
- **Optimized fonts**: Display swap, preload
- **Minimal CSS**: Purged unused styles

### Browser Support
- **Modern browsers**: Last 2 versions
- **CSS Grid**: With flexbox fallbacks
- **Custom Properties**: With fallback values
- **Progressive Enhancement**: Core functionality first

---

## 🔄 Version History
- **v1.0.0** - Initial design system
- Last updated: September 2025
- Maintained in: `/docs/DESIGN-SYSTEM.md`
