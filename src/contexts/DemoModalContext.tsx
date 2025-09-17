'use client'

import React, { createContext, useContext, useState } from 'react'

interface DemoModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined)

export const DemoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <DemoModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </DemoModalContext.Provider>
  )
}

export const useDemoModal = () => {
  const context = useContext(DemoModalContext)
  if (context === undefined) {
    throw new Error('useDemoModal must be used within a DemoModalProvider')
  }
  return context
}
