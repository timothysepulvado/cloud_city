import React from 'react'
import { FOOTER } from '@/lib/constants'

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t border-dashed border-[var(--line)]">
      <div className="max-w-[var(--max-width)] mx-auto px-4 text-center text-[13px] text-muted">
        {FOOTER.copyright}
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'
