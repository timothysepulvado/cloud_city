import React from 'react'
import { Card } from '@/components/ui/Card'
import { FEATURES, MEASUREMENT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export const Features: React.FC<SectionProps> = ({ className }) => {
  return (
    <>
      {/* Features & Integrations */}
      <section className={cn('grid grid-cols-1 md:grid-cols-2 gap-[18px] my-7', className)}>
        {/* Creative Features */}
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

        {/* Integrations */}
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
      </section>

      {/* Measurement */}
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
          ))}
        </ul>
      </Card>
    </>
  )
}

Features.displayName = 'Features'
