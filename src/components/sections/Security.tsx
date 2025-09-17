import React from 'react'
import { Card } from '@/components/ui/Card'
import { Pill } from '@/components/ui/Pill'
import { SECURITY, TECH_STACK } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export const Security: React.FC<SectionProps> = ({ className }) => {
  return (
    <section id="security" className={className}>
      {/* Security & Compliance */}
      <Card>
        <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
          {SECURITY.eyebrow}
        </div>
        
        <h3 className="font-heading font-semibold text-[clamp(18px,2vw,22px)] text-ink my-2">
          {SECURITY.title}
        </h3>
        
        <ul className="list-none p-0 mt-[10px]">
          {SECURITY.items.map((item, index) => (
            <li 
              key={index}
              className="py-2 border-t border-dashed border-[var(--line)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Card>

      {/* Tech Stack */}
      <Card className="mt-7">
        <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
          {TECH_STACK.eyebrow}
        </div>
        
        <div className="flex gap-2 flex-wrap mt-2">
          {TECH_STACK.pills.map((pill) => (
            <Pill key={pill} variant="violet">
              {pill}
            </Pill>
          ))}
        </div>
      </Card>
    </section>
  )
}

Security.displayName = 'Security'
