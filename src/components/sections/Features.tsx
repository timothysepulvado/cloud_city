'use client';

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { FEATURES, MEASUREMENT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'
import { staggerContainer, fadeInUp, listItem, ANIMATION } from '@/lib/animations'

export const Features: React.FC<SectionProps> = ({ className }) => {
  const featuresRef = useRef<HTMLElement>(null)
  const measurementRef = useRef<HTMLDivElement>(null)
  const featuresInView = useInView(featuresRef, { once: ANIMATION.viewport.once, amount: ANIMATION.viewport.amount })
  const measurementInView = useInView(measurementRef, { once: ANIMATION.viewport.once, amount: ANIMATION.viewport.amount })
  
  return (
    <>
      {/* Features & Integrations */}
      <motion.section 
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className={cn('grid grid-cols-1 md:grid-cols-2 gap-[18px] my-7', className)}
      >
        {/* Creative Features */}
        <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
          <Card>
          <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
            {FEATURES.creative.eyebrow}
          </div>
          
          <h3 className="font-heading font-semibold text-[clamp(18px,2vw,22px)] text-ink my-2">
            {FEATURES.creative.title}
          </h3>
          
          <ul className="list-none p-0 mt-[10px]">
            {FEATURES.creative.items.map((item, index) => (
              <li 
                key={index}
                className="py-2 border-t border-dashed border-[var(--line)]"
              >
                {item}
              </li>
            ))}
          </ul>
          </Card>
        </motion.div>

        {/* Integrations */}
        <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
          <Card>
          <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
            {FEATURES.integrations.eyebrow}
          </div>
          
          <h3 className="font-heading font-semibold text-[clamp(18px,2vw,22px)] text-ink my-2">
            {FEATURES.integrations.title}
          </h3>
          
          <ul className="list-none p-0 mt-[10px]">
            {FEATURES.integrations.items.map((item, index) => (
              <li 
                key={index}
                className="py-2 border-t border-dashed border-[var(--line)]"
              >
                {item}
              </li>
            ))}
          </ul>
          </Card>
        </motion.div>
      </motion.section>

      {/* Measurement */}
      <motion.div
        ref={measurementRef}
        initial="hidden"
        animate={measurementInView ? "visible" : "hidden"}
        variants={fadeInUp}
        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      >
        <Card className={className}>
        <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
          {MEASUREMENT.eyebrow}
        </div>
        
        <h3 className="font-heading font-semibold text-[clamp(18px,2vw,22px)] text-ink my-2">
          {MEASUREMENT.title}
        </h3>
        
        <ul className="list-none p-0 mt-[10px]">
          {MEASUREMENT.items.map((item, index) => (
            <li 
              key={index}
              className="py-2 border-t border-dashed border-[var(--line)]"
            >
              {item}
            </li>
          )          )}
        </ul>
        </Card>
      </motion.div>
    </>
  )
}

Features.displayName = 'Features'
