import React from 'react'
import { Pill } from '@/components/ui/Pill'
import { HERO } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export const Hero: React.FC<SectionProps> = ({ className }) => {
  return (
    <section 
      className={cn(
        'mt-5 p-8 md:p-12 lg:p-16 rounded-[var(--radius)] gradient-card shadow-[var(--shadow)] relative overflow-hidden',
        className
      )}
      id="top"
    >
      {/* Background gradient effect */}
      <div 
        className="absolute inset-auto -right-[15%] -bottom-[25%] w-[520px] h-[520px] blur-[24px]"
        style={{
          background: 'radial-gradient(closest-side, rgba(140,110,255,0.12), transparent 60%)'
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h1 className="font-heading font-extrabold text-[clamp(36px,5vw,64px)] text-ink mt-2 mb-4 leading-[1.1]">
            {HERO.headline}
          </h1>
          
          <p className="text-muted text-[clamp(16px,1.8vw,19px)] max-w-[860px] leading-relaxed">
            {HERO.subheadline}
          </p>
          
          <div className="flex gap-2 flex-wrap mt-4">
            {HERO.pills.map((pill) => (
              <Pill key={pill} variant="violet">
                {pill}
              </Pill>
            ))}
          </div>
        </div>
        
        {HERO.video && (
          <div className="relative">
            <video
              className="w-full aspect-video rounded-[16px] bg-gray-100 border border-[var(--line)] shadow-[var(--shadow-lg)] object-cover"
              controls
              preload="metadata"
              aria-label={HERO.video.ariaLabel}
              poster=""
            >
              <source src={HERO.video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle glow effect for the video */}
            <div 
              className="absolute inset-0 -z-10 blur-2xl opacity-30"
              style={{
                background: 'linear-gradient(135deg, var(--violet), var(--rose))'
              }}
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </section>
  )
}

Hero.displayName = 'Hero'
