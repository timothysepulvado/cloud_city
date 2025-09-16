/**
 * Utility function to concatenate class names
 * Simple implementation for now - can be enhanced with clsx + tailwind-merge later
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format email link with subject
 */
export function formatEmailLink(email: string, subject?: string) {
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${email}${subjectParam}`
}
