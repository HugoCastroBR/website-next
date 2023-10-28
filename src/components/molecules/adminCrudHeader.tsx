'use client'

import React, { useEffect } from 'react'
import CustomText from '../atoms/customText'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import CustomModal from '../atoms/customModal';
import useStore from '@/hooks/useStore';
import { SetNewItemModal } from '@/store/actions';

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
  }:AdminCrudHeaderProps
) => {

  const {states,dispatch} = useStore()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  useEffect(()=>{
    console.log('abrindo')
    setIsModalOpen(states.App.newItemModalIsOpen)
  },[
    states.App.newItemModalIsOpen
  ])
  

  return (
    <div>
        <div className='flex w-full justify-between items-center'>
          <CustomText
            className='text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
            text={title} />
          <Button onClick={()=> {
            console.log('open')
            dispatch(SetNewItemModal(true))
          }}>{actionName}</Button>
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