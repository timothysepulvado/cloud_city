'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useDemoModal } from '@/contexts/DemoModalContext'
import { buttonHover, buttonTap } from '@/lib/animations'
import type { ButtonProps } from '@/types'

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  children, 
  href, 
  onClick,
  variant = 'primary',
  size = 'md',
  ariaLabel,
  type = 'button',
  disabled = false
}) => {
  const { openModal } = useDemoModal()
  
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-shadow duration-200',
    variant === 'primary' && 'gradient-violet-rose text-white shadow-[0_8px_24px_rgba(140,110,255,0.3)] hover:shadow-[0_12px_32px_rgba(140,110,255,0.4)]',
    variant === 'secondary' && 'bg-white border border-violet text-violet hover:bg-violet/5',
    size === 'sm' && 'px-3 py-2 text-sm',
    size === 'md' && 'px-[14px] py-[10px]',
    size === 'lg' && 'px-6 py-3 text-lg',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  // Handle demo request buttons
  const handleClick = (e?: React.MouseEvent) => {
    if (href === '#contact') {
      e?.preventDefault()
      openModal()
    } else if (onClick) {
      onClick(e)
    }
  }

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

    // Handle internal links and demo buttons
    if (href === '#contact') {
      return (
        <motion.button
          whileHover={!disabled ? buttonHover : undefined}
          whileTap={!disabled ? buttonTap : undefined}
          onClick={handleClick}
          className={baseClasses}
          aria-label={ariaLabel}
          disabled={disabled}
          type={type}
        >
          {children}
        </motion.button>
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
    <motion.button
      whileHover={!disabled ? buttonHover : undefined}
      whileTap={!disabled ? buttonTap : undefined}
      onClick={handleClick}
      className={baseClasses}
      aria-label={ariaLabel}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  )
}

Button.displayName = 'Button'
