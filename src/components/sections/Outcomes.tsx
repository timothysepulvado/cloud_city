import React from 'react'
import { Card } from '@/components/ui/Card'
import { OUTCOMES, BRAND_INTELLIGENCE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export const Outcomes: React.FC<SectionProps> = ({ className }) => {
  return (
    <section 
      className={cn('grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[18px] my-7', className)}
      id="intelligence"
    >
      {/* Outcomes Card */}
      <Card>
        <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
          {OUTCOMES.eyebrow}
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-[10px]">
          {OUTCOMES.stats.map((stat) => (
            <div 
              key={stat.label}
              className="p-[14px] rounded-[14px] bg-violet/[0.05] text-center"
            >
              <div className="font-extrabold text-[26px] text-violet">
                {stat.value}
              </div>
              <div className="text-[12px] text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-muted mt-[10px] text-[12px]">
          {OUTCOMES.disclaimer}
        </p>
      </Card>

      {/* Brand Intelligence Card */}
      <Card>
        <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
          {BRAND_INTELLIGENCE.eyebrow}
        </div>
        
        <h3 className="font-heading font-semibold text-[clamp(18px,2vw,22px)] text-ink my-2">
          {BRAND_INTELLIGENCE.title}
        </h3>
        
        <ul className="list-none p-0 mt-[10px]">
          {BRAND_INTELLIGENCE.features.map((feature, index) => (
            <li 
              key={index}
              className="py-2 border-t border-dashed border-[var(--line)]"
            >
              {feature.title ? (
                <>
                  <strong>{feature.title}</strong> {feature.description}
                </>
              ) : (
                feature.description
              )}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}

Outcomes.displayName = 'Outcomes'
