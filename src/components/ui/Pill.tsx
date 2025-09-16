import React from 'react'
import { cn } from '@/lib/utils'
import type { PillProps } from '@/types'

export const Pill: React.FC<PillProps> = ({ 
  className, 
  children, 
  variant = 'violet' 
}) => {
  return (
    <div 
      className={cn(
        'px-[14px] py-[8px] rounded-full text-[13px] font-semibold',
        variant === 'violet' && 'bg-violet/[0.08] text-violet',
        variant === 'default' && 'bg-muted/10 text-muted',
        className
      )}
    >
      {children}
    </div>
  )
}

Pill.displayName = 'Pill'
