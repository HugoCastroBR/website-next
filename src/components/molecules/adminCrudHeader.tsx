'use client'

import React, { useEffect } from 'react'
import CustomText from '../atoms/customText'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import CustomModal from '../atoms/customModal';

interface AdminCrudHeaderProps {
  
  title:string
  children:React.ReactNode
  actionName:string
  forceClose?: boolean
}



const AdminCrudHeader = (
  {
    title,
    children,
    actionName,
    forceClose,
  }:AdminCrudHeaderProps
) => {

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if(forceClose) close()
  }, [close, forceClose])

  return (
    <div>
        <div className='flex w-full justify-between items-center'>
          <CustomText
            className='text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
            text={title} />
          <Button onClick={open}>{actionName}</Button>
        </div>
        <div>
          <CustomModal
            isOpen={opened}
            onClose={close}
            title={title}
          >
            {children}
          </CustomModal>
        </div>
    </div>
  )
}

export default AdminCrudHeader