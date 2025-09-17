'use client'

import React from 'react'
import { DemoModalProvider, useDemoModal } from '@/contexts/DemoModalContext'
import { Modal } from '@/components/ui/Modal'
import { DemoRequestForm } from '@/components/forms/DemoRequestForm'

const DemoModal: React.FC = () => {
  const { isOpen, closeModal } = useDemoModal()
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title="Request a Demo"
    >
      <DemoRequestForm onClose={closeModal} />
    </Modal>
  )
}

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DemoModalProvider>
      {children}
      <DemoModal />
    </DemoModalProvider>
  )
}

ClientLayout.displayName = 'ClientLayout'
