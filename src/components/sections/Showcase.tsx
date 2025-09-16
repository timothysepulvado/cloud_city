import React from 'react'
import { Card } from '@/components/ui/Card'
import { SHOWCASE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export const Showcase: React.FC<SectionProps> = ({ className }) => {
  return (
    <Card className={className}>
      <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
        {SHOWCASE.eyebrow}
      </div>
      
      <h2 className="font-heading font-bold text-[clamp(24px,3.2vw,36px)] text-ink my-2">
        {SHOWCASE.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-3">
        {SHOWCASE.videos.map((video, index) => (
          <video
            key={index}
            className="aspect-video w-full rounded-[16px] bg-gray-100 border border-[var(--line)] shadow-[var(--shadow)] object-cover"
            controls
            preload="metadata"
            aria-label={video.ariaLabel}
            poster=""
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      
      <p className="text-muted text-[12px] mt-2">
        {SHOWCASE.note}
      </p>
    </Card>
  )
}

Showcase.displayName = 'Showcase'
