'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { NAVIGATION, SITE_META } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
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

          {/* Navigation Links - Desktop */}
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

          {/* CTA Button - Desktop */}
          <Button
            href={NAVIGATION.cta.href}
            variant="primary"
            size="md"
            ariaLabel={NAVIGATION.cta.ariaLabel}
            className="hidden md:inline-flex"
          >
            {NAVIGATION.cta.label}
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-auto p-2 text-ink hover:text-violet transition-colors rounded-lg hover:bg-violet/5"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              className="transition-transform duration-200"
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMobileMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          aria-hidden="true"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden",
          "transform transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-[var(--line)]">
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-[10px]"
                style={{
                  background: 'conic-gradient(from 180deg, var(--violet), var(--rose), var(--mint))'
                }}
                aria-hidden="true"
              />
              <span className="font-bold text-ink">Menu</span>
            </div>
            <button
              className="p-2 text-muted hover:text-ink transition-colors rounded-lg hover:bg-violet/5"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 5l10 10M5 15L15 5" />
              </svg>
            </button>
          </div>

          {/* Menu Navigation */}
          <nav className="flex-1 overflow-y-auto p-4" role="navigation">
            <ul className="space-y-1">
              {NAVIGATION.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="block px-4 py-3 text-ink font-medium rounded-lg hover:bg-violet/5 hover:text-violet transition-all"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Footer with CTA */}
          <div className="p-4 border-t border-[var(--line)]">
            <Button
              href={NAVIGATION.cta.href}
              variant="primary"
              size="lg"
              ariaLabel={NAVIGATION.cta.ariaLabel}
              className="w-full justify-center"
              onClick={closeMobileMenu}
            >
              {NAVIGATION.cta.label}
            </Button>
            <p className="text-xs text-muted text-center mt-4">
              {SITE_META.tagline}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

Header.displayName = 'Header'
