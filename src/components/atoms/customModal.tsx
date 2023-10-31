/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import useStore from '@/hooks/useStore';
import { SetNewItemModal } from '@/store/actions';
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

import React, { useEffect } from 'react'

interface Props {
  children: React.ReactNode
  title: string
}

const CustomModal = (
  {
    children,
    title,
  }: Props
) => {

  let [opened, { open, close }] = useDisclosure(false);

  const { states, dispatch } = useStore()
  useEffect(() => {
    if (states.App.newItemModalIsOpen) {
      open()
    } else {
      close()
    }
  }, [
    states.App.newItemModalIsOpen
  ])

  const HandlerClose = () => {
    dispatch(SetNewItemModal(false))
    close()
  }

  return (
    <div>
      <Modal opened={opened} onClose={HandlerClose} title={title}
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