'use client'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

import React, { useEffect } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title: string
  forceClose?: boolean
}

const CustomModal = (
  {
    isOpen,
    onClose,
    children,
    title,
    forceClose
  }:Props
) => {

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if(forceClose) close()
  }, [close, forceClose])

  return (
    <div>
          <Modal opened={opened} onClose={close} title={title} 
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