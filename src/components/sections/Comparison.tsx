import React from 'react'
import { COMPARISON, FIT } from '@/lib/constants'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export const Comparison: React.FC<SectionProps> = ({ className }) => {
  return (
    <>
      {/* Comparison Table */}
      <section 
        className={cn('mt-5 rounded-[var(--radius)] overflow-hidden shadow-[var(--shadow)]', className)}
        id="compare"
      >
        <table 
          className="w-full border-collapse text-[14px]"
          aria-label={COMPARISON.ariaLabel}
        >
          <thead>
            <tr>
              {COMPARISON.headers.map((header, index) => (
                <th 
                  key={header}
                  className={cn(
                    "p-[14px_12px] border-b border-[var(--line)] bg-violet/[0.06] text-left font-semibold",
                    index === 1 && "text-violet"
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.rows.map((row, index) => (
              <tr key={index}>
                <td className="p-[14px_12px] border-b border-[var(--line)] bg-white font-semibold">
                  {row.dimension}
                </td>
                <td className="p-[14px_12px] border-b border-[var(--line)] bg-gradient-to-r from-violet/[0.02] to-transparent">
                  {row.brandstudios}
                </td>
                <td className="p-[14px_12px] border-b border-[var(--line)] bg-white text-muted">
                  {row.competitor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Fit Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-7">
        {/* Where BrandStudios.AI fits */}
        <Card>
          <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
            {FIT.brandstudios.eyebrow}
          </div>
          
          <ul className="list-none p-0 mt-[10px]">
            {FIT.brandstudios.items.map((item, index) => (
              <li 
                key={index}
                className="py-2 border-t border-dashed border-[var(--line)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* Where others fit */}
        <Card>
          <div className="text-[12px] font-semibold uppercase tracking-[0.3px] text-muted mb-[6px]">
            {FIT.others.eyebrow}
          </div>
          
          <ul className="list-none p-0 mt-[10px]">
            {FIT.others.items.map((item, index) => (
              <li 
                key={index}
                className="py-2 border-t border-dashed border-[var(--line)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </>
  )
}

Comparison.displayName = 'Comparison'
