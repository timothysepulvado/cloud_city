import React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export const ContactCTA: React.FC<SectionProps> = ({ className }) => {
  return (
    <Card 
      className={cn('mt-7', className)}
      id="contact"
    >
      <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
        {CONTACT.eyebrow}
      </div>
      
      <h3 className="font-heading font-semibold text-[clamp(18px,2vw,22px)] text-ink my-2">
        {CONTACT.title}
      </h3>
      
      <p className="text-muted my-[10px]">
        {CONTACT.description}
      </p>
      
      <Button
        href={CONTACT.cta.href}
        variant="primary"
        size="md"
      >
        {CONTACT.cta.label}
      </Button>
    </Card>
  )
}

ContactCTA.displayName = 'ContactCTA'
