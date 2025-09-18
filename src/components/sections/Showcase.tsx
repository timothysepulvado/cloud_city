'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { SHOWCASE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export const Showcase: React.FC<SectionProps> = ({ className }) => {
  // Track which video is active (hovered or playing)
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null)
  
  // Helper function to get aspect ratio classes
  const getAspectRatioClass = (format: string) => {
    switch (format) {
      case '9:16':
        return 'aspect-[9/16]' // Vertical (TikTok, Reels, Shorts)
      case '1:1':
        return 'aspect-square' // Square (Instagram Post)
      case '4:5':
        return 'aspect-[4/5]' // Portrait (Instagram Post alternative)
      default:
        return 'aspect-video' // Default 16:9
    }
  }

  // Helper function to get user-friendly format labels
  const getFormatLabel = (format: string) => {
    switch (format) {
      case '9:16':
        return 'Vertical'
      case '1:1':
        return 'Square'
      case '4:5':
        return 'Portrait'
      case '16:9':
        return 'Landscape'
      default:
        return 'Landscape'
    }
  }

  // Helper function to get platform label styling
  const getPlatformStyle = (platform: string) => {
    switch (platform) {
      case 'tiktok':
        return { 
          label: 'TikTok', 
          color: 'bg-black text-white',
          icon: '♪' // TikTok music note
        }
      case 'instagram-reel':
        return { 
          label: 'Instagram Reels', 
          color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white',
          icon: '▶' // Play icon
        }
      case 'instagram-post':
        return { 
          label: 'Instagram Post', 
          color: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
          icon: '□' // Square icon
        }
      case 'youtube-short':
        return { 
          label: 'YouTube Shorts', 
          color: 'bg-red-600 text-white',
          icon: '▶' // Play icon
        }
      default:
        return { 
          label: 'Video', 
          color: 'bg-gray-600 text-white',
          icon: '▶'
        }
    }
  }

  // Helper to determine video container size based on format
  const getVideoContainerClass = (format: string) => {
    switch (format) {
      case '9:16':
        // Vertical videos - responsive height
        return 'w-[200px] sm:w-[220px] md:w-[250px] lg:w-[280px]'
      case '1:1':
        // Square videos - responsive width/height
        return 'w-[200px] sm:w-[250px] md:w-[280px] lg:w-[320px]'
      default:
        // Standard videos
        return 'w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]'
    }
  }

  return (
    <Card className={className}>
      <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
        {SHOWCASE.eyebrow}
      </div>
      
      <h2 className="font-heading font-bold text-[clamp(24px,3.2vw,36px)] text-ink my-2">
        {SHOWCASE.title}
      </h2>

      {SHOWCASE.subtitle && (
        <p className="text-muted text-[16px] mb-8">
          {SHOWCASE.subtitle}
        </p>
      )}
      
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {SHOWCASE.videos.map((video, index) => {
          const platformStyle = getPlatformStyle(video.platform || '')
          const aspectClass = getAspectRatioClass(video.format || '16:9')
          const containerClass = getVideoContainerClass(video.format || '16:9')
          const isActive = activeVideoIndex === index
          
          return (
            <div 
              key={index} 
              className={cn(
                "flex flex-col items-center w-full max-w-[320px] relative transition-all duration-300",
                // Active video gets higher z-index and scales up slightly
                isActive && "z-50 scale-105"
              )}
              onMouseEnter={() => setActiveVideoIndex(index)}
              onMouseLeave={() => setActiveVideoIndex(null)}
            >
              {/* Platform Label with icon */}
              <div className={cn(
                "flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full mb-3",
                platformStyle.color,
                // Platform label also scales with video
                isActive && "scale-105"
              )}>
                <span className="text-[14px]" aria-hidden="true">{platformStyle.icon}</span>
                <span>{platformStyle.label}</span>
              </div>
              
              {/* Video Container */}
              <div className={cn(
                "relative group flex justify-center",
                containerClass,
                // Ensure active video is above others
                isActive ? "z-50" : "z-10"
              )}>
                <div className={cn(
                  "relative overflow-hidden rounded-[16px] bg-gray-100 border-2 border-[var(--line)] shadow-md transition-all duration-300 w-full",
                  // Enhanced hover state for active video
                  isActive ? "shadow-2xl border-[var(--violet)] scale-[1.02]" : "hover:shadow-xl hover:border-[var(--violet)/50]"
                )}>
                  <video
                    className={cn(
                      "w-full h-full object-cover",
                      aspectClass
                    )}
                    controls
                    preload="metadata"
                    aria-label={video.ariaLabel}
                    muted
                    loop
                    // Track when video is playing
                    onPlay={() => setActiveVideoIndex(index)}
                    onPause={() => {
                      // Only clear if this was the active video
                      if (activeVideoIndex === index) {
                        setActiveVideoIndex(null)
                      }
                    }}
                    onEnded={() => {
                      // Clear active state when video ends
                      if (activeVideoIndex === index) {
                        setActiveVideoIndex(null)
                      }
                    }}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Format indicator badge with user-friendly label */}
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-1 rounded-md">
                    {getFormatLabel(video.format || '16:9')}
                  </div>
                </div>
                
                {/* Glow effect on hover - more prominent for active video */}
                <div 
                  className={cn(
                    "absolute inset-0 -z-10 blur-xl transition-opacity duration-300 rounded-[16px]",
                    isActive ? "opacity-60" : "opacity-0 group-hover:opacity-50"
                  )}
                  style={{
                    background: 'linear-gradient(135deg, var(--violet), var(--rose))'
                  }}
                  aria-hidden="true"
                />
              </div>
              
              {/* Overlay for non-active videos when one is active */}
              {activeVideoIndex !== null && !isActive && (
                <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] rounded-[16px] z-20 pointer-events-none transition-all duration-300" />
              )}
            </div>
          )
        })}
      </div>
      
      <p className="text-muted text-[12px] mt-8 text-center">
        {SHOWCASE.note}
      </p>
    </Card>
  )
}

Showcase.displayName = 'Showcase'