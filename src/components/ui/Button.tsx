import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/types'

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  children, 
  href, 
  onClick,
  variant = 'primary',
  size = 'md',
  ariaLabel
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-200',
    variant === 'primary' && 'gradient-violet-rose text-white shadow-[0_8px_24px_rgba(140,110,255,0.3)] hover:shadow-[0_12px_32px_rgba(140,110,255,0.4)] hover:scale-105',
    variant === 'secondary' && 'bg-white border border-violet text-violet hover:bg-violet/5',
    size === 'sm' && 'px-3 py-2 text-sm',
    size === 'md' && 'px-[14px] py-[10px]',
    size === 'lg' && 'px-6 py-3 text-lg',
    className
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto')
    
    if (isExternal) {
      return (
        <a 
          href={href}
          className={baseClasses}
          aria-label={ariaLabel}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )
    }

    return (
      <Link 
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    )
  }

  return (
    <button 
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
