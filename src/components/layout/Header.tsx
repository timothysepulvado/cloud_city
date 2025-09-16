'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { NAVIGATION, SITE_META } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const Header: React.FC = () => {
  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-lg backdrop-saturate-[140%] bg-white/80 border-b border-[var(--line)]"
      aria-label="Site header"
    >
      <nav className="max-w-[var(--max-width)] mx-auto px-4 py-3 flex items-center gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-[10px] font-extrabold no-underline hover:no-underline">
          <div 
            className="w-9 h-9 rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
            style={{
              background: 'conic-gradient(from 180deg, var(--violet), var(--rose), var(--mint))'
            }}
            aria-hidden="true"
          />
          <span className="text-ink">BrandStudios.AI</span>
        </Link>

        {/* Navigation Links */}
        <div className="ml-auto hidden md:flex gap-4 flex-wrap" role="navigation">
          {NAVIGATION.links.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="font-semibold text-ink hover:text-violet transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          href={NAVIGATION.cta.href}
          variant="primary"
          size="md"
          ariaLabel={NAVIGATION.cta.ariaLabel}
        >
          {NAVIGATION.cta.label}
        </Button>

        {/* Mobile Menu Button (placeholder for future enhancement) */}
        <button 
          className="md:hidden p-2 text-ink"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

Header.displayName = 'Header'
