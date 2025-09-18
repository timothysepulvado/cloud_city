'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { Pill } from '@/components/ui/Pill'
import { HERO } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useDemoModal } from '@/contexts/DemoModalContext'
import type { SectionProps } from '@/types'
import { 
  staggerContainer,
  heroHeadline,
  heroContent,
  heroVideo,
  pillAnimation 
} from '@/lib/animations'

export const Hero: React.FC<SectionProps> = ({ className }) => {
  const { openModal } = useDemoModal();
  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
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
      
      <div className="relative z-10">
        {/* Banner Headline - Full Width */}
        <motion.div 
          variants={heroHeadline}
          className="text-center mb-8 lg:mb-12"
        >
          <h1 className="font-heading font-extrabold text-[clamp(36px,5vw,64px)] text-ink leading-[1.1]">
            {HERO.headline.prefix}
            <motion.span 
              className="bg-gradient-to-r from-[var(--violet)] to-[var(--rose)] bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              {HERO.headline.highlight}
            </motion.span>
            {HERO.headline.suffix}
          </h1>
        </motion.div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div variants={heroContent}>
            <p className="text-muted text-[clamp(16px,1.8vw,19px)] max-w-[860px] leading-relaxed">
              {HERO.subheadline}
            </p>
            
            <motion.div 
              className="flex gap-2 flex-wrap mt-4"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {HERO.pills.map((pill, index) => (
                <motion.div
                  key={pill}
                  custom={index}
                  variants={pillAnimation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Pill variant="violet">
                    {pill}
                  </Pill>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {HERO.video && (
            <motion.div 
              className="relative"
              variants={heroVideo}
            >
              <video
                className="w-full aspect-video rounded-[16px] bg-gray-100 border border-[var(--line)] shadow-[var(--shadow-lg)] object-cover"
                controls
                preload="metadata"
                aria-label={HERO.video.ariaLabel}
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
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  )
}

Hero.displayName = 'Hero'
