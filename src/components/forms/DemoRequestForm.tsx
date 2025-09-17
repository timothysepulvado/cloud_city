'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { SITE_META } from '@/lib/constants'

interface DemoRequestFormProps {
  onSuccess?: () => void
  onClose?: () => void
}

interface FormData {
  name: string
  email: string
  company: string
  role: string
  message: string
}

export const DemoRequestForm: React.FC<DemoRequestFormProps> = ({
  onSuccess,
  onClose
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In production, this would send to your API endpoint
    try {
      // For now, we'll open the user's email client with pre-filled data
      const subject = encodeURIComponent(`Demo Request from ${formData.name}`)
      const body = encodeURIComponent(
        `New demo request from BrandStudios.AI website:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n` +
        `Role: ${formData.role}\n` +
        `Message: ${formData.message}\n\n` +
        `Please follow up with this request.`
      )
      
      // Open mailto link
      window.location.href = `mailto:${SITE_META.email}?subject=${subject}&body=${body}`
      
      // Show success message
      setShowSuccess(true)
      
      // Reset form after 2 seconds and close
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          message: ''
        })
        setShowSuccess(false)
        onSuccess?.()
        onClose?.()
      }, 2000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <div className="py-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-mint/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-mint" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-ink mb-2">Thank you!</h3>
        <p className="text-muted">We'll be in touch soon to schedule your demo.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-muted mb-6">
        Get a personalized demo and see how BrandStudios.AI can transform your marketing workflow.
      </p>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all"
          placeholder="John Smith"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all"
          placeholder="john@company.com"
        />
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-ink mb-2">
          Company *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all"
          placeholder="Acme Inc."
        />
      </div>

      {/* Role Field */}
      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-ink mb-2">
          Your Role
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all bg-white"
        >
          <option value="">Select your role</option>
          <option value="marketing-manager">Marketing Manager</option>
          <option value="brand-manager">Brand Manager</option>
          <option value="cmo">CMO / VP Marketing</option>
          <option value="content-creator">Content Creator</option>
          <option value="agency">Agency</option>
          <option value="founder">Founder / CEO</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
          How can we help? (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your marketing needs..."
        />
      </div>

      {/* Submit Buttons */}
      <div className="flex gap-3 pt-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="flex-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Request Demo'}
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          onClick={onClose}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>

      <p className="text-xs text-center text-muted pt-2">
        By submitting, you agree to receive marketing communications from BrandStudios.AI
      </p>
    </form>
  )
}

DemoRequestForm.displayName = 'DemoRequestForm'
