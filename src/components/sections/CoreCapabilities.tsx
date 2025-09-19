'use client';

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { CORE_CAPABILITIES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'
import { staggerContainer, fadeInUp, ANIMATION } from '@/lib/animations'

export const CoreCapabilities: React.FC<SectionProps> = ({ className }) => {
  const capabilities = Object.values(CORE_CAPABILITIES)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    once: ANIMATION.viewport.once, 
    amount: ANIMATION.viewport.amount 
  })

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={cn('grid grid-cols-1 md:grid-cols-3 gap-[18px] my-7', className)}
      aria-label="Core capabilities"
    >
      {capabilities.map((capability, index) => (
        <motion.div 
          key={capability.badge} 
          id={capability.badge.toLowerCase()}
          variants={fadeInUp}
          custom={index}
        >
          <Card>
            <Badge variant="gradient">{capability.badge}</Badge>
            
            <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
              {capability.eyebrow}
            </div>
            
            <h3 className="font-heading font-semibold text-[clamp(18px,2vw,22px)] text-ink my-2">
              {capability.title}
            </h3>
            
            <p className="text-muted">
              {capability.description}
            </p>
          </Card>
        </motion.div>
      ))}
    </motion.section>
  )
}

CoreCapabilities.displayName = 'CoreCapabilities'
