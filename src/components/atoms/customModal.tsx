import { Modal } from '@mantine/core'
import React from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title: string
}

const CustomModal = (
  {
    isOpen,
    onClose,
    children,
    title
  }:Props
) => {
  return (
    <div>
          <Modal opened={isOpen} onClose={onClose} title={title} 
          size="80%" 
          transitionProps={{
            transition: 'slide-up',
            duration: 500,
          }} 
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 6,
          }}
          >
            {children}
          </Modal>
        </div>
  )
}

export default CustomModal