# Component Reference Guide

## 📦 Quick Component Reference

### UI Components (`/src/components/ui/`)

#### Button
```typescript
import { Button } from '@/components/ui/Button'

// Props
interface ButtonProps {
  href?: string              // URL for link behavior
  onClick?: () => void       // Click handler
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  ariaLabel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

// Usage Examples
<Button variant="primary" size="lg" href="#contact">
  Get a demo
</Button>

<Button variant="secondary" onClick={handleClick}>
  Learn more
</Button>

<Button type="submit" disabled={isSubmitting}>
  {isSubmitting ? 'Sending...' : 'Submit'}
</Button>
```

#### Card
```typescript
import { Card } from '@/components/ui/Card'

// Props
interface CardProps {
  gradient?: boolean      // Apply gradient background
  hover?: boolean        // Enable hover effects
  className?: string
  children: React.ReactNode
}

// Usage Examples
<Card hover gradient>
  <h3>Title</h3>
  <p>Content</p>
</Card>

<Card className="mt-4">
  <Badge>NEW</Badge>
  <p>Announcement</p>
</Card>
```

#### Badge
```typescript
import { Badge } from '@/components/ui/Badge'

// Props
interface BadgeProps {
  variant?: 'gradient' | 'solid'
  className?: string
  children: React.ReactNode
}

// Usage Examples
<Badge variant="gradient">CREATE</Badge>
<Badge variant="solid">BETA</Badge>
```

#### Pill
```typescript
import { Pill } from '@/components/ui/Pill'

// Props
interface PillProps {
  variant?: 'violet' | 'default'
  className?: string
  children: React.ReactNode
}

// Usage Examples
<Pill variant="violet">React</Pill>
<Pill>Optional</Pill>
```

#### Modal
```typescript
import { Modal } from '@/components/ui/Modal'

// Props
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  className?: string
  children: React.ReactNode
}

// Usage Example
const [isOpen, setIsOpen] = useState(false)

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <p>Are you sure?</p>
  <Button onClick={confirm}>Confirm</Button>
</Modal>
```

### Layout Components (`/src/components/layout/`)

#### Header
```typescript
import { Header } from '@/components/layout/Header'

// No props - uses constants from lib/constants.ts
// Features:
- Sticky positioning
- Glass morphism effect
- Mobile menu (< 768px)
- Desktop navigation (≥ 768px)

// Usage
<Header />
```

#### Footer
```typescript
import { Footer } from '@/components/layout/Footer'

// No props - uses constants from lib/constants.ts
// Displays: Tagline + Copyright

// Usage
<Footer />
```

#### ClientLayout
```typescript
import { ClientLayout } from '@/components/layout/ClientLayout'

// Wraps app with providers (DemoModal context)
// Used in app/layout.tsx

// Usage
<ClientLayout>
  {children}
</ClientLayout>
```

### Section Components (`/src/components/sections/`)

#### Hero
```typescript
import { Hero } from '@/components/sections/Hero'

// Props
interface SectionProps {
  className?: string
  id?: string
  ariaLabel?: string
}

// Features:
- Large headline
- Subheadline
- Category pills

// Usage
<Hero className="mt-8" />
```

#### CoreCapabilities
```typescript
import { CoreCapabilities } from '@/components/sections/CoreCapabilities'

// Displays 3 cards: Create, Syndicate, Measure
// Responsive: 1 col → 3 cols

// Usage
<CoreCapabilities />
```

#### Features
```typescript
import { Features } from '@/components/sections/Features'

// Props: SectionProps
// Displays intelligence features in grid

// Usage
<Features id="intelligence" />
```

#### Showcase
```typescript
import { Showcase } from '@/components/sections/Showcase'

// 2x2 video grid
// Videos from Cloudinary
// Autoplay on hover

// Usage
<Showcase />
```

#### Comparison
```typescript
import { Comparison } from '@/components/sections/Comparison'

// Comparison table vs "Company J"
// Responsive with horizontal scroll

// Usage
<Comparison id="compare" />
```

#### Outcomes
```typescript
import { Outcomes } from '@/components/sections/Outcomes'

// Statistics display
// 3 key metrics

// Usage
<Outcomes />
```

#### Security
```typescript
import { Security } from '@/components/sections/Security'

// Two cards:
1. Security & compliance list
2. Tech stack pills

// Usage
<Security id="security" />
```

#### ContactCTA
```typescript
import { ContactCTA } from '@/components/sections/ContactCTA'

// Final CTA section
// Triggers demo modal

// Usage
<ContactCTA id="contact" />
```

### Form Components (`/src/components/forms/`)

#### DemoRequestForm
```typescript
import { DemoRequestForm } from '@/components/forms/DemoRequestForm'

// Props
interface DemoRequestFormProps {
  onSuccess?: () => void
  onClose?: () => void
}

// Fields:
- name* (required)
- email* (required)
- company* (required)
- role (select)
- message (textarea)

// Usage
<DemoRequestForm 
  onSuccess={handleSuccess}
  onClose={closeModal}
/>
```

### Context Providers (`/src/contexts/`)

#### DemoModalContext
```typescript
import { DemoModalProvider, useDemoModal } from '@/contexts/DemoModalContext'

// Provider Usage (in layout)
<DemoModalProvider>
  {children}
</DemoModalProvider>

// Hook Usage (in components)
const { isOpen, openModal, closeModal } = useDemoModal()

// Example
<Button onClick={openModal}>
  Open Demo Form
</Button>
```

## 🎯 Common Patterns

### Responsive Grid
```typescript
// 1 → 2 → 3 columns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// 1 → 3 columns
className="grid grid-cols-1 md:grid-cols-3 gap-4"

// 2x2 grid
className="grid grid-cols-2 gap-3"
```

### Conditional Styling
```typescript
import { cn } from '@/lib/utils'

className={cn(
  'base-classes',
  condition && 'conditional-classes',
  className // Allow override
)}
```

### Gradient Backgrounds
```typescript
// Inline style for complex gradients
style={{
  background: 'linear-gradient(90deg, var(--violet), var(--rose))'
}}

// Utility class
className="gradient-violet-rose"
```

### Hover Effects
```typescript
// Scale + shadow
className="hover:scale-[1.02] hover:shadow-lg transition-all"

// Color change
className="hover:text-violet transition-colors"

// Background change
className="hover:bg-violet/5 transition-colors"
```

### Focus States
```typescript
// Accessible focus
className="focus-visible:outline-2 focus-visible:outline-violet focus-visible:outline-offset-2"

// Remove default outline
className="focus:outline-none focus:ring-2 focus:ring-violet"
```

## 📱 Responsive Utilities

### Breakpoint Prefixes
```typescript
// Mobile first approach
'text-sm'        // All sizes
'md:text-base'   // 768px and up
'lg:text-lg'     // 1024px and up
'xl:text-xl'     // 1280px and up

// Show/Hide
'hidden md:block'  // Hide mobile, show desktop
'md:hidden'        // Show mobile, hide desktop
```

### Container
```typescript
// Centered container with padding
className="max-w-[var(--max-width)] mx-auto px-4"
```

### Flex Utilities
```typescript
// Common patterns
'flex items-center justify-between'
'flex flex-col md:flex-row gap-4'
'flex-1' // Fill available space
```

## 🔧 Utility Functions

### cn() - Class Name Merger
```typescript
import { cn } from '@/lib/utils'

// Merges classes, handles conflicts
cn('p-4 text-black', 'text-white') // => 'p-4 text-white'

// Conditional classes
cn('base', {
  'active': isActive,
  'disabled': isDisabled
})
```

### Constants
```typescript
import { 
  SITE_META,
  NAVIGATION,
  HERO,
  CORE_CAPABILITIES,
  FEATURES,
  SHOWCASE,
  COMPARISON,
  OUTCOMES,
  SECURITY,
  TECH_STACK,
  CONTACT,
  FOOTER
} from '@/lib/constants'
```

## 📝 TypeScript Types

### Base Types
```typescript
import type {
  BaseComponentProps,
  SectionProps,
  NavLink,
  Stat,
  Feature,
  Video,
  ComparisonRow,
  CardProps,
  BadgeProps,
  ButtonProps,
  PillProps
} from '@/types'
```

### Component Props Pattern
```typescript
interface ComponentProps extends BaseComponentProps {
  // Component specific props
  customProp?: string
}

// With children
interface ComponentProps {
  children: React.ReactNode
  className?: string
}
```

## 🚀 Quick Start Templates

### New Page Component
```typescript
import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PageName() {
  return (
    <>
      <Header />
      <main className="max-w-[var(--max-width)] mx-auto px-4 py-8">
        {/* Page content */}
      </main>
      <Footer />
    </>
  )
}
```

### New Section Component
```typescript
import React from 'react'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export const SectionName: React.FC<SectionProps> = ({ 
  className,
  id,
  ariaLabel 
}) => {
  return (
    <section 
      id={id}
      className={cn('default-styles', className)}
      aria-label={ariaLabel}
    >
      {/* Section content */}
    </section>
  )
}

SectionName.displayName = 'SectionName'
```

### New UI Component
```typescript
'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ComponentNameProps {
  variant?: 'default' | 'special'
  className?: string
  children: React.ReactNode
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  variant = 'default',
  className,
  children
}) => {
  return (
    <div 
      className={cn(
        'base-styles',
        variant === 'special' && 'special-styles',
        className
      )}
    >
      {children}
    </div>
  )
}

ComponentName.displayName = 'ComponentName'
```

## 🔍 Component Location Map

```
src/
├── app/
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Homepage with all sections
│   └── globals.css     # Global styles & Tailwind
├── components/
│   ├── ui/             # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── Pill.tsx
│   ├── layout/         # Layout components
│   │   ├── ClientLayout.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/       # Page sections
│   │   ├── Comparison.tsx
│   │   ├── ContactCTA.tsx
│   │   ├── CoreCapabilities.tsx
│   │   ├── Features.tsx
│   │   ├── Hero.tsx
│   │   ├── Outcomes.tsx
│   │   ├── Security.tsx
│   │   └── Showcase.tsx
│   └── forms/          # Form components
│       └── DemoRequestForm.tsx
├── contexts/           # React contexts
│   └── DemoModalContext.tsx
├── lib/                # Utilities & constants
│   ├── constants.ts
│   └── utils.ts
└── types/              # TypeScript definitions
    └── index.ts
```

---

## 📚 Additional Resources
- [Design System](/docs/DESIGN-SYSTEM.md)
- [UI Patterns](/docs/UI-PATTERNS.md)
- [Development Rules](/docs/RULES.md)
- [Project Context](/docs/CONTEXT.md)
