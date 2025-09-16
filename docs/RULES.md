# Development Rules & Standards

## 🎯 Core Principles

1. **Clarity over cleverness** - Write code that's easy to understand
2. **Consistency is key** - Follow established patterns throughout
3. **Component reusability** - Build once, use many times
4. **Performance matters** - Every millisecond counts
5. **Accessibility first** - Design for everyone

## 📝 Coding Standards

### TypeScript

```typescript
// ✅ GOOD - Explicit types, clear naming
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// ❌ BAD - Using 'any', unclear naming
interface BtnProps {
  v: any;
  c: any;
  click?: any;
}
```

### React Components

```typescript
// ✅ GOOD - Functional component with proper typing
export const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </article>
  );
};

// ❌ BAD - No typing, inconsistent structure
export function card(props) {
  return <div>{props.title}</div>
}
```

### File Naming

- **Components**: PascalCase (e.g., `Hero.tsx`, `ContactForm.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `validateEmail.ts`)
- **Constants**: SCREAMING_SNAKE_CASE in files (e.g., `API_ENDPOINTS`)
- **Styles**: kebab-case for CSS classes (e.g., `hero-section`, `cta-button`)

## 🏗 Component Structure

### Standard Component Template

```typescript
// 1. Imports
import React from 'react';
import { cn } from '@/lib/utils';

// 2. Types/Interfaces
interface ComponentNameProps {
  className?: string;
  // other props...
}

// 3. Component
export const ComponentName: React.FC<ComponentNameProps> = ({ 
  className,
  ...props 
}) => {
  // 4. Hooks (if needed)
  
  // 5. Event handlers (if needed)
  
  // 6. Render
  return (
    <div className={cn('default-styles', className)}>
      {/* Component content */}
    </div>
  );
};

// 7. Display name (for debugging)
ComponentName.displayName = 'ComponentName';
```

## 🎨 Styling Rules

### Tailwind CSS

1. **Use Tailwind utilities first** - Only write custom CSS when necessary
2. **Responsive design** - Mobile-first approach (`sm:`, `md:`, `lg:`, `xl:`)
3. **Dark mode ready** - Use `dark:` variants even if not implemented yet
4. **Component variants** - Use `cn()` utility for conditional classes

```typescript
// ✅ GOOD
<div className="p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-900">

// ❌ BAD
<div style={{ padding: '16px', background: 'white' }}>
```

### Custom CSS (when needed)

```css
/* ✅ GOOD - CSS custom properties for theming */
:root {
  --color-primary: theme('colors.violet.600');
  --radius-card: 1.125rem;
}

/* ❌ BAD - Hard-coded values */
.card {
  background: #8c6eff;
  border-radius: 18px;
}
```

## 📁 File Organization

### Import Order

```typescript
// 1. React/Next.js imports
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 2. Third-party imports
import { motion } from 'framer-motion';

// 3. Local components
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';

// 4. Utilities and constants
import { cn } from '@/lib/utils';
import { BRAND_COPY } from '@/lib/constants';

// 5. Types
import type { SectionProps } from '@/types';

// 6. Styles (if any)
import styles from './Component.module.css';
```

## 🔒 Security

1. **No secrets in code** - Use environment variables
2. **Sanitize user input** - Always validate and sanitize
3. **HTTPS only** - Never use HTTP in production
4. **Content Security Policy** - Implement CSP headers

## ♿ Accessibility

1. **Semantic HTML** - Use proper HTML elements
2. **ARIA labels** - Add where semantics aren't enough
3. **Keyboard navigation** - Everything must be keyboard accessible
4. **Color contrast** - WCAG AA minimum (4.5:1 for text)
5. **Alt text** - All images need descriptive alt text

```typescript
// ✅ GOOD
<button 
  aria-label="Get a demo of BrandStudios.AI"
  className="cta-button"
>
  Get Demo
</button>

// ❌ BAD
<div onClick={handleClick}>Get Demo</div>
```

## 🚀 Performance

1. **Lazy load images** - Use Next.js Image component
2. **Code splitting** - Dynamic imports for heavy components
3. **Minimize re-renders** - Use React.memo, useMemo, useCallback
4. **Bundle size** - Monitor and optimize bundle size

```typescript
// ✅ GOOD - Dynamic import
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
});

// ❌ BAD - Import everything
import HeavyComponent from './HeavyComponent';
```

## 🧪 Testing Guidelines

1. **Component testing** - Test user interactions
2. **Unit testing** - Test utilities and helpers
3. **Accessibility testing** - Use axe-core
4. **Performance testing** - Lighthouse CI

## 📈 Git Workflow

### Commit Messages

```bash
# ✅ GOOD
feat: add video showcase section
fix: resolve mobile navigation overflow
docs: update deployment instructions
style: format code with prettier
refactor: extract Card component

# ❌ BAD
updated stuff
fix
changes
```

### Branch Naming

```bash
# ✅ GOOD
feature/video-showcase
bugfix/mobile-nav
hotfix/cta-button

# ❌ BAD
my-branch
test
new-stuff
```

## 🔄 Code Review Checklist

- [ ] TypeScript types are explicit and accurate
- [ ] Component is reusable and follows DRY
- [ ] Responsive design works on all breakpoints
- [ ] Accessibility requirements met
- [ ] No console.logs in production code
- [ ] Performance impact considered
- [ ] Documentation updated if needed

## 🚫 Don'ts

1. **Don't use `any` type** - Always define proper types
2. **Don't ignore linting errors** - Fix them properly
3. **Don't copy-paste code** - Extract to utilities/components
4. **Don't hardcode values** - Use constants/config
5. **Don't skip error handling** - Handle edge cases
6. **Don't forget loading states** - Always show feedback
7. **Don't use inline styles** - Use Tailwind classes

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Patterns](https://reactpatterns.com/)
- [Web.dev Performance](https://web.dev/performance/)

---

**Remember**: These rules exist to maintain quality and consistency. When in doubt, prioritize readability and maintainability over clever optimizations.
