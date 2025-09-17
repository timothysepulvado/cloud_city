// Component Props Types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface SectionProps extends BaseComponentProps {
  id?: string
  ariaLabel?: string
}

// Navigation Types
export interface NavLink {
  href: string
  label: string
  ariaLabel?: string
}

// Content Types
export interface Stat {
  value: string
  label: string
}

export interface Feature {
  title?: string | null
  description: string
}

export interface Video {
  src: string
  ariaLabel: string
  poster?: string
}

export interface ComparisonRow {
  dimension: string
  brandstudios: string
  competitor: string
}

// Card Types
export interface CardProps extends BaseComponentProps {
  gradient?: boolean
  hover?: boolean
}

// Badge Types
export interface BadgeProps extends BaseComponentProps {
  variant?: 'gradient' | 'solid'
}

// Button Types
export interface ButtonProps extends BaseComponentProps {
  href?: string
  onClick?: (e?: React.MouseEvent) => void
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  ariaLabel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

// Pill Types
export interface PillProps extends BaseComponentProps {
  variant?: 'violet' | 'default'
}
