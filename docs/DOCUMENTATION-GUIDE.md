# Documentation Update Guide

## 📋 When Adding a New Framework/Library

### Example: Adding Framer Motion

When adding a new framework like Framer Motion, update the following:

#### 1. **package.json**
```json
{
  "dependencies": {
    "framer-motion": "^10.x.x"
  }
}
```

#### 2. **README.md**
- Add to Tech Stack section
- Update installation instructions if needed
- Add any new environment variables

#### 3. **CHANGELOG.md**
```markdown
### Added
- Framer Motion for animations and page transitions
  - Scroll-triggered animations
  - Page transition effects
  - Micro-interactions on components
```

#### 4. **DESIGN-SYSTEM.md**
If the framework affects visual design:
```markdown
## 🎬 Animations & Transitions

### Framer Motion Animations
- Entry animations: fadeIn, slideUp, scaleIn
- Exit animations: fadeOut, slideDown, scaleOut
- Scroll triggers: whileInView with 0.1 threshold
- Spring physics: stiffness: 100, damping: 15
```

#### 5. **UI-PATTERNS.md**
Document new interaction patterns:
```markdown
### Scroll Animations (Framer Motion)
- Fade in on scroll: opacity 0→1, y: 20→0
- Stagger children: 0.1s delay between items
- Parallax effects: slower scroll speed for backgrounds
```

#### 6. **COMPONENT-REFERENCE.md**
Add usage examples:
```typescript
// With Framer Motion
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <Card>Content</Card>
</motion.div>
```

## 📝 Documentation Update Checklist

### For New Features
- [ ] Update CHANGELOG.md with version and description
- [ ] Add to README.md if it affects setup/usage
- [ ] Document in COMPONENT-REFERENCE.md if new component
- [ ] Add to UI-PATTERNS.md if new interaction pattern
- [ ] Update DESIGN-SYSTEM.md if visual changes
- [ ] Create migration guide if breaking changes

### For Bug Fixes
- [ ] Update CHANGELOG.md under "Fixed"
- [ ] Add comments in code explaining the fix
- [ ] Update relevant documentation if behavior changed

### For Dependencies
- [ ] Update README.md tech stack
- [ ] Document in CHANGELOG.md
- [ ] Add setup instructions if needed
- [ ] Update .env.example if new variables

### For Design Changes
- [ ] Update DESIGN-SYSTEM.md with new tokens
- [ ] Update UI-PATTERNS.md if interactions change
- [ ] Update component examples
- [ ] Add migration notes if breaking

## 📂 Documentation Structure

```
docs/
├── CONTEXT.md              # Business requirements (rarely changes)
├── RULES.md                # Development standards (update with new patterns)
├── DESIGN-SYSTEM.md        # Visual design (update with style changes)
├── UI-PATTERNS.md          # Interactions (update with new behaviors)
├── COMPONENT-REFERENCE.md  # Components (update with new components)
└── DOCUMENTATION-GUIDE.md  # This file (how to maintain docs)

Root/
├── README.md               # Project overview (update with major changes)
└── CHANGELOG.md            # Version history (update with ALL changes)
```

## 🔄 Version Management

### When to Bump Versions

#### Patch (0.0.X)
- Bug fixes
- Documentation updates
- Small UI tweaks
- Dependency updates (non-breaking)

#### Minor (0.X.0)
- New features
- New components
- New sections
- Framework additions (non-breaking)
- Performance improvements

#### Major (X.0.0)
- Breaking changes
- Framework replacements
- Major redesigns
- API changes
- File structure reorganization

## 📊 Change Impact Matrix

| Change Type | README | CHANGELOG | DESIGN-SYSTEM | UI-PATTERNS | COMPONENT-REF | Version |
|------------|---------|-----------|---------------|-------------|---------------|---------|
| New Component | ○ | ✓ | ○ | ○ | ✓ | Minor |
| New Framework | ✓ | ✓ | ? | ? | ? | Minor/Major |
| Bug Fix | ○ | ✓ | ○ | ○ | ○ | Patch |
| Design Token | ○ | ✓ | ✓ | ○ | ○ | Patch |
| New Pattern | ○ | ✓ | ○ | ✓ | ○ | Minor |
| Breaking Change | ✓ | ✓ | ? | ? | ? | Major |
| Performance | ○ | ✓ | ○ | ○ | ○ | Patch |
| Accessibility | ○ | ✓ | ✓ | ✓ | ○ | Patch |

Legend: ✓ = Must update, ? = Update if affected, ○ = Optional

## 🎯 Example: Framer Motion Addition

Here's what would need updating when adding Framer Motion:

### 1. Install and Setup
```bash
npm install framer-motion
```

### 2. Update Files

**CHANGELOG.md:**
```markdown
## [0.3.0] - 2025-09-XX

### Added
- Framer Motion animations
  - Scroll-triggered animations on all sections
  - Stagger effects for list items
  - Page transition animations
  - Button hover/tap animations
```

**README.md:**
```markdown
## Tech Stack
- Animation: Framer Motion
```

**DESIGN-SYSTEM.md:**
```markdown
### Animation Timing
- Fast: 0.2s
- Normal: 0.3s
- Slow: 0.5s

### Easing
- Default: [0.4, 0, 0.2, 1]
- Spring: { stiffness: 100, damping: 15 }
```

**UI-PATTERNS.md:**
```markdown
### Scroll Animations
\`\`\`typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, margin: "-100px" }
}
\`\`\`
```

**COMPONENT-REFERENCE.md:**
```markdown
### Animated Components
All section components now accept motion props:
\`\`\`typescript
<Hero
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
/>
\`\`\`
```

### 3. Commit
```bash
git add .
git commit -m "feat: add Framer Motion for animations

- Added scroll-triggered animations
- Implemented page transitions
- Enhanced micro-interactions
- Updated documentation"
```

## 🔍 Documentation Review Process

Before merging any PR:

1. **Check Changed Files** - What was modified?
2. **Identify Impact** - Use the impact matrix above
3. **Update Docs** - Make necessary updates
4. **Update CHANGELOG** - Always document changes
5. **Bump Version** - If releasing
6. **Review** - Ensure docs match implementation

## 💡 Tips for Good Documentation

1. **Be Specific** - Include version numbers, exact values
2. **Show Examples** - Code snippets > descriptions
3. **Explain Why** - Document reasoning for patterns
4. **Stay Current** - Update immediately, not later
5. **Cross-Reference** - Link between related docs
6. **Test Instructions** - Ensure they actually work

## 🚨 Red Flags

Watch for these signs that docs are out of sync:

- Components in code but not in COMPONENT-REFERENCE.md
- Dependencies in package.json but not in README.md
- Patterns in use but not in UI-PATTERNS.md
- No CHANGELOG entry for recent commits
- Design tokens in CSS but not in DESIGN-SYSTEM.md

## 📅 Regular Maintenance

### Weekly
- Review recent commits for undocumented changes
- Check for outdated examples

### Monthly
- Audit all documentation for accuracy
- Update dependency versions
- Review and consolidate patterns

### Quarterly
- Major documentation review
- Reorganize if needed
- Archive deprecated content
