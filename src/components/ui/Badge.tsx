import React from 'react'
import { cn } from '@/lib/utils'
import type { BadgeProps } from '@/types'

export const Badge: React.FC<BadgeProps> = ({ 
  className, 
  children, 
  variant = 'gradient' 
}) => {
  return (
    <span 
      className={cn(
        'inline-block text-[11px] text-white px-[10px] py-[4px] rounded-full font-bold mb-[10px]',
        variant === 'gradient' && 'gradient-violet-rose',
        variant === 'solid' && 'bg-violet',
        className
      )}
    >
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'
