'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { sectionReveal, ANIMATION } from '@/lib/animations';
import type { Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
  delay?: number;
  threshold?: number;
}

/**
 * Wrapper component that adds scroll-triggered animations to sections
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  id,
  variants = sectionReveal,
  delay = 0,
  threshold = ANIMATION.viewport.amount,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    once: ANIMATION.viewport.once, 
    amount: threshold 
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible?.transition,
            delay: delay + (variants.visible?.transition?.delay || 0),
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
};

AnimatedSection.displayName = 'AnimatedSection';
