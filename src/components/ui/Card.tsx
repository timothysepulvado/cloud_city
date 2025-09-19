'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { CardProps } from '@/types'

export const Card: React.FC<CardProps> = ({ 
  className, 
  children, 
  gradient = true, 
  hover = true 
}) => {
  return (
    <motion.article 
      className={cn(
        'rounded-[var(--radius)] p-[var(--pad)] shadow-[var(--shadow)] border-2 border-[var(--line)] transition-all duration-300 ease-out',
        gradient && 'gradient-card',
        hover && 'hover:border-[var(--violet)] hover:shadow-[0_12px_32px_rgba(140,110,255,0.3)]',
        className
      )}
      whileHover={hover ? { 
        y: -3,
        transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }
      } : undefined}
    >
      {children}
    </motion.article>
  )
}

Card.displayName = 'Card'
