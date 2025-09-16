import React from 'react'
import { cn } from '@/lib/utils'
import type { CardProps } from '@/types'

export const Card: React.FC<CardProps> = ({ 
  className, 
  children, 
  gradient = true, 
  hover = true 
}) => {
  return (
    <article 
      className={cn(
        'rounded-[var(--radius)] p-[var(--pad)] shadow-[var(--shadow)] border border-[var(--line)] transition-all duration-200 ease-out',
        gradient && 'gradient-card',
        hover && 'hover:-translate-y-[3px] hover:shadow-[var(--shadow-hover)]',
        className
      )}
    >
      {children}
    </article>
  )
}

Card.displayName = 'Card'
