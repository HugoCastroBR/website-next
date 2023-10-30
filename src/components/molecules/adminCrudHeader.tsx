'use client'

import React, { useEffect } from 'react'
import CustomText from '../atoms/customText'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Select } from '@mantine/core';
import CustomModal from '../atoms/customModal';
import useStore from '@/hooks/useStore';
import { SetNewItemModal } from '@/store/actions';
import { Capitalize } from '@/utils/others';

interface AdminCrudHeaderProps {

  title: string
  children: React.ReactNode
  actionName?: string
  forceClose?: boolean
}



const AdminCrudHeader = (
  {
    title,
    children,
    actionName,
  }: AdminCrudHeaderProps
) => {

  const { states, dispatch } = useStore()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  useEffect(() => {
    console.log('abrindo')
    setIsModalOpen(states.App.newItemModalIsOpen)
  }, [
    states.App.newItemModalIsOpen
  ])


  

  return (
    <div className='flex flex-col'>
      <div className='flex w-full justify-between items-center'>
        <CustomText
          className='text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
          text={title} />
        {actionName && <Button onClick={() => {
          console.log('open')
          dispatch(SetNewItemModal(true))
        }}>{actionName}</Button>}
      </div>
      <div>
        <CustomModal
          title={title}
          isOpen={isModalOpen}
        >
          {children}
        </CustomModal>
      </div>
    </div>
  )
}

export default AdminCrudHeader