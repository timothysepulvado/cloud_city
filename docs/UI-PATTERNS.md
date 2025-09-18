# UI Patterns & Component Usage Guide

## 🎯 Component Usage Guidelines

### Navigation Components

#### Header Navigation
**Purpose**: Primary navigation and branding
**Implementation**: `src/components/layout/Header.tsx`

```typescript
// Desktop behavior
- Sticky positioning with glass morphism effect
- Navigation links with hover state (violet color)
- CTA button always visible

// Mobile behavior  
- Hamburger menu (3 lines → X animation)
- Slide-in drawer from right (280px width)
- Full height overlay prevents body scroll
- ESC key closes menu
```

**States**:
- Default: Transparent background with blur
- Scrolled: Enhanced shadow
- Mobile Open: Body scroll locked

#### Mobile Menu
**Trigger**: Hamburger button (< 768px)
**Animation**: 
- Menu: translateX(100%) → translateX(0) with 300ms ease-out
- Icon: 90° rotation
- Overlay: Fade in with 200ms

**Interaction Flow**:
1. User taps hamburger → Menu slides in
2. Overlay appears → Prevents page interaction
3. User can: Navigate, tap overlay, tap X, or press ESC
4. Menu slides out → Body scroll restored

### Interactive Components

#### Demo Request Modal
**Purpose**: Lead capture for demo requests
**Trigger**: Any "Get a demo" button

```typescript
// Modal behavior
- Center positioned with backdrop
- ESC key closes
- Click outside closes
- Smooth zoom-in entrance (scale: 0.95 → 1)
```

**Form Flow**:
1. **Open State**: Modal appears with form
2. **Filling**: Real-time validation indicators
3. **Submit**: Loading state → Success message
4. **Success**: Checkmark animation → Auto-close after 2s

**Form Fields**:
- Name* (required)
- Email* (required, email validation)
- Company* (required)
- Role (dropdown, optional)
- Message (textarea, optional)

#### Buttons
**Primary Button Pattern**:
```typescript
// Visual hierarchy
- Gradient background (violet → rose)
- White text for contrast
- Shadow for depth
- Scale animation on interaction

// States
Default → Hover (scale: 1.02) → Active (scale: 0.98)
Disabled: opacity: 0.5, no hover effects
```

**Secondary Button Pattern**:
```typescript
// Visual hierarchy
- White background
- Violet border and text
- Minimal shadow

// States
Default → Hover (bg: violet/5) → Active (scale: 0.98)
```

### Content Display Patterns

#### Hero Section Layout
**Purpose**: Primary landing section with banner headline and two-column content
**Implementation**: `src/components/sections/Hero.tsx`

```typescript
// Banner Layout Structure
1. Full-width banner headline (center-aligned)
2. Two-column grid layout below (text left, video right)
3. Responsive grid: 1 column mobile → 2 columns desktop

// Typography Enhancement
- Gradient text treatment for highlighted words
- Uses bg-clip-text with violet-to-rose gradient
- Maintains semantic HTML with h1 tag
```

**Visual Hierarchy**:
- **Banner Headline**: Full-width, center-aligned, large typography
- **Left Column**: Descriptive text and action pills
- **Right Column**: Video content with glow effects
- **Responsive**: Stacks vertically on mobile devices

#### Card Component
**Purpose**: Content container with consistent styling
**Usage**: Features, capabilities, CTAs

```typescript
// Structure
<Card>
  <Badge />          // Optional category
  <Eyebrow />        // Small uppercase label
  <Title />          // Main heading
  <Description />    // Body text
  <Action />         // Optional CTA
</Card>
```

**Hover Behavior**:
- Shadow enhancement
- Slight scale (1.02)
- 200ms transition

#### Video Showcase Grid
**Layout**: Responsive grid (1 column mobile → 2 columns tablet → 4 columns desktop)
**Behavior**:
- Social media aspect ratios (9:16, 1:1, 4:5, 16:9)
- Platform-specific branding and labels
- Dynamic z-index management for active videos
- Accessible controls with proper ARIA attributes

```typescript
// Interaction pattern
1. Videos display with platform badges (TikTok, Instagram, YouTube)
2. Format labels show user-friendly names (Vertical, Square, Portrait)
3. Hover/play brings video to front (z-50) with scale animation
4. Enhanced visual feedback with border and shadow changes
5. State management tracks active video index

// Z-index layering
- Default state: z-10 for all videos
- Active state (hover/play): z-50 to bring forward
- Smooth transitions with 300ms duration
```

#### Comparison Table
**Purpose**: Feature comparison
**Mobile Strategy**: Horizontal scroll with sticky first column

```typescript
// Responsive behavior
Desktop: Full table view
Tablet: Slight compression
Mobile: Horizontal scroll with visual indicator
```

### Form Patterns

#### Input Field States
```typescript
// Visual feedback flow
Empty → Focus (violet ring) → Filled → Valid/Invalid

// Error handling
- Red border on error
- Error message below field
- Clear error on correction
```

#### Select Dropdown
```typescript
// Custom styling maintained
- Native select for accessibility
- Custom arrow icon
- Consistent with input styling
```

### Feedback Patterns

#### Success States
**Visual Language**:
- Mint color (#57d9a3)
- Checkmark icon
- Fade-in animation

**Implementation**:
```typescript
// Success feedback pattern
1. Action completed
2. Success icon appears (scale: 0 → 1)
3. Success message displays
4. Auto-dismiss or user action
```

#### Loading States
**Options**:
1. **Button Loading**: Text changes to "Loading..."
2. **Skeleton Screens**: For content areas
3. **Progress Indicators**: For multi-step processes

#### Error States
**Visual Language**:
- Rose color (#ff7aa2)
- X icon or error symbol
- Clear error message

**Recovery Flow**:
1. Error occurs → Clear message displayed
2. Suggested action provided
3. Easy retry mechanism
4. Maintain form data when possible

## 🔄 Animation Patterns

### Entrance Animations
```css
/* Fade In */
opacity: 0 → 1
duration: 200ms

/* Slide In */
transform: translateY(20px) → translateY(0)
opacity: 0 → 1
duration: 300ms

/* Zoom In */
transform: scale(0.95) → scale(1)
opacity: 0 → 1
duration: 200ms
```

### Micro-Interactions
```css
/* Button Press */
transform: scale(1) → scale(0.98) → scale(1)
duration: 150ms

/* Card Hover */
transform: translateY(0) → translateY(-2px)
shadow: increase
duration: 200ms

/* Link Hover */
color: change
text-decoration: underline
duration: 150ms
```

### Page Transitions (Future)
```css
/* Route Change */
1. Current page fades out (100ms)
2. New page fades in (200ms)
3. Scroll to top

/* Section Reveal */
Intersection Observer triggers
transform: translateY(30px) → translateY(0)
opacity: 0 → 1
stagger: 100ms between elements
```

## 📱 Responsive Patterns

### Breakpoint Strategy
```typescript
// Mobile First
Default: Mobile styles
@media (min-width: 768px): Tablet enhancements
@media (min-width: 1024px): Desktop layout
```

### Layout Shifts
```typescript
// Grid Transformations
Mobile: 1 column
Tablet: 2 columns
Desktop: 3-4 columns

// Navigation
Mobile: Hamburger menu
Desktop: Inline navigation

// CTAs
Mobile: Full width buttons
Desktop: Inline buttons
```

### Touch Optimization
- **Minimum tap target**: 44x44px
- **Touch-friendly spacing**: 8px minimum between targets
- **Swipe gestures**: Reserved for future enhancement
- **Long press**: No critical functionality

## 🎨 Theme Patterns

### Color Application
```typescript
// Primary Actions
- Buttons: Gradient (violet → rose)
- Links: Violet
- Focus: Violet outline

// Status Colors
- Success: Mint
- Error: Rose
- Warning: Sun
- Info: Violet

// Content Hierarchy
- Primary text: Ink (#1c1c1e)
- Secondary text: Muted (#5f6571)
- Borders: Line (rgba(0,0,0,0.08))
```

### Dark Mode (Future)
```typescript
// Planned implementation
- CSS variables switch
- System preference detection
- Manual toggle in header
- Smooth transition
```

## 🔍 Search & Filter Patterns (Future)

### Search Bar
```typescript
// Behavior
- Instant results (debounced 300ms)
- Highlight matches
- Recent searches
- Clear button when filled
```

### Filter System
```typescript
// Multi-select filters
- Checkbox groups
- Active filter pills
- Clear all option
- Result count update
```

## 📊 Data Display Patterns

### Statistics
```typescript
// Large numbers
<div class="stat">
  <div class="stat-value">99.9%</div>
  <div class="stat-label">Uptime</div>
</div>

// Animation: Count up on viewport entry
```

### Progress Indicators
```typescript
// Linear progress
<div class="progress-bar">
  <div class="progress-fill" style="width: 75%"></div>
</div>

// Circular progress (future)
SVG-based with animated stroke
```

## 🔐 Security Patterns

### Sensitive Data
- **Password fields**: Toggle visibility option
- **Data masking**: Show last 4 digits only
- **Copy protection**: Disabled for sensitive content
- **Session timeout**: Warning before expiry

### Trust Indicators
- **Security badges**: Visible placement
- **Encryption indicators**: Lock icons
- **Compliance logos**: Footer placement
- **Privacy controls**: Clear opt-in/out

## ⚡ Performance Patterns

### Lazy Loading
```typescript
// Images
loading="lazy" on all images below fold

// Videos
Intersection Observer at 50% visibility

// Components
Dynamic imports for heavy components
```

### Optimistic UI
```typescript
// Pattern
1. User takes action
2. UI updates immediately
3. API call in background
4. Rollback on error
```

### Caching Strategy
```typescript
// Static assets: Long cache (1 year)
// API responses: Short cache (5 minutes)
// User data: No cache
```

## 🎯 Conversion Patterns

### CTA Placement
```typescript
// Primary CTA
- Above fold in hero
- End of each section
- Sticky mobile button (future)

// Secondary CTA
- Navigation bar
- Mobile menu footer
- After content sections
```

### Social Proof (Future)
```typescript
// Testimonials
- Carousel with photos
- Company logos
- Star ratings

// Live Activity
- "X people viewing"
- Recent signups
- Usage statistics
```

## 📝 Form Optimization

### Multi-Step Forms (Future)
```typescript
// Progress indicator
Step 1 → Step 2 → Step 3 → Complete

// Navigation
- Previous/Next buttons
- Step indicators clickable
- Save progress locally
```

### Field Optimization
```typescript
// Auto-complete
- Smart suggestions
- Previous entries
- Common patterns

// Inline validation
- Check as you type
- Clear error messages
- Success indicators
```

---

## 📚 References
- Component Code: `/src/components/`
- Design Tokens: `/src/app/globals.css`
- Type Definitions: `/src/types/index.ts`
- Constants: `/src/lib/constants.ts`

## 🔄 Update Log
- Initial patterns documented: September 2025
- Animation patterns added: September 2025 (v0.2.4)
- Last updated: September 2025

---

## 🎬 Animation Patterns (v0.2.4)

### Core Animation System
**Location**: `src/lib/animations.ts`
**Purpose**: Centralized animation constants and reusable variants

```typescript
// Animation timing constants
export const ANIMATION = {
  duration: {
    fast: 0.2,    // Micro-interactions
    normal: 0.4,  // Standard transitions
    slow: 0.6,    // Section reveals
    slower: 0.8,  // Hero elements
  },
  ease: {
    smooth: [0.25, 0.1, 0.25, 1.0],  // Default easing
    bounce: [0.68, -0.55, 0.265, 1.55], // Playful elements
  },
  viewport: {
    once: true,   // Animate only on first view
    amount: 0.3,  // Trigger at 30% visible
  }
}
```

### Common Animation Patterns

#### 1. Scroll-Triggered Reveals
```tsx
const ref = useRef(null)
const isInView = useInView(ref, { 
  once: true, 
  amount: 0.3 
})

<motion.section
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={sectionReveal}
>
```

#### 2. Staggered Children
```tsx
<motion.div variants={staggerContainer}>
  {items.map((item, i) => (
    <motion.div 
      key={i}
      variants={fadeInUp}
      custom={i}  // For custom delays
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

#### 3. Button Micro-interactions
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
```

#### 4. Card Hover Effects
```tsx
<motion.div
  whileHover={{ 
    scale: 1.02,
    y: -3,
    transition: { duration: 0.2 }
  }}
>
```

### Section-Specific Animations

#### Hero Section
- **Headline**: Fade in with y: 20 → 0
- **Brand word**: Special scale animation with gradient
- **Pills**: Staggered bounce-in effect
- **Video**: Scale from 0.95 → 1 with fade

#### Showcase Section
- **Grid**: Staggered card entrance
- **Videos**: Scale on hover with z-index management
- **Active state**: 1.05x scale with enhanced shadow

#### Features Section
- **Cards**: Fade up on scroll
- **Lists**: Staggered item reveals
- **Hover**: Subtle scale transform

### Performance Guidelines

1. **GPU Acceleration**: Use transform and opacity for smooth 60fps
2. **Will-change**: Avoid overuse, apply only when needed
3. **Reduced Motion**: Respect user preferences
```tsx
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches
```

4. **Lazy Animation**: Use viewport detection to avoid unnecessary animations
5. **Batch Updates**: Use Framer Motion's layout animations for DOM changes
