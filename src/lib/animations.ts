import { Variants } from 'framer-motion';

/**
 * Animation Constants
 */
export const ANIMATION = {
  // Timing
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    slower: 0.8,
    slowest: 1.0,
  },
  
  // Easing
  ease: {
    smooth: [0.25, 0.1, 0.25, 1.0],
    bounce: [0.68, -0.55, 0.265, 1.55],
    out: [0.0, 0.0, 0.2, 1],
    in: [0.4, 0.0, 1, 1],
    inOut: [0.4, 0.0, 0.2, 1],
  },
  
  // Delays
  staggerChildren: 0.1,
  delayChildren: 0.2,
  
  // Viewport
  viewport: {
    once: true, // Only animate once when scrolling into view
    amount: 0.3, // Trigger when 30% of element is visible
  },
} as const;

/**
 * Reusable Animation Variants
 */

// Fade animations
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.smooth,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 30,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.smooth,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0,
    y: -30,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.smooth,
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.smooth,
    },
  },
};

// Stagger container for children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.staggerChildren,
      delayChildren: ANIMATION.delayChildren,
    },
  },
};

// Hero specific animations
export const heroHeadline: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.slower,
      ease: ANIMATION.ease.smooth,
    },
  },
};

export const heroContent: Variants = {
  hidden: { 
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.ease.smooth,
      delay: 0.2,
    },
  },
};

export const heroVideo: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION.duration.slower,
      ease: ANIMATION.ease.smooth,
      delay: 0.3,
    },
  },
};

// Card hover animation
export const cardHover = {
  scale: 1.02,
  y: -3,
  transition: {
    duration: ANIMATION.duration.fast,
    ease: ANIMATION.ease.smooth,
  },
};

// Button hover animation
export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: ANIMATION.duration.fast,
    ease: ANIMATION.ease.bounce,
  },
};

export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: ANIMATION.duration.fast,
    ease: ANIMATION.ease.smooth,
  },
};

// Slide animations
export const slideInLeft: Variants = {
  hidden: { 
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.smooth,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { 
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.smooth,
    },
  },
};

// Section reveal animation for scroll
export const sectionReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.ease.smooth,
    },
  },
};

// List item animation for staggered lists
export const listItem: Variants = {
  hidden: { 
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.smooth,
    },
  },
};

// Pill animation
export const pillAnimation: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.bounce,
      delay: i * 0.05, // Stagger each pill
    },
  }),
};

// Text reveal animation (word by word)
export const textReveal: Variants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const wordReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.fast,
      ease: ANIMATION.ease.smooth,
    },
  },
};
