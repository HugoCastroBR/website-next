'use client'

import React from 'react'
import CustomText from '../atoms/customText'
import { Button } from '@mantine/core';
import CustomModal from '../atoms/customModal';
import useStore from '@/hooks/useStore';
import { SetNewItemModal } from '@/store/actions';

interface AdminCrudHeaderProps {
  title: string
  children: React.ReactNode
  actionName?: string
}

const AdminCrudHeader = (
  {
    title,
    children,
    actionName,
  }: AdminCrudHeaderProps
) => {

  const { states, dispatch } = useStore()


  return (
    <div className='flex flex-col'>
      <div className='flex w-full justify-between items-center'>
        <CustomText
          className='text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
          text={title} />
        {actionName && <Button onClick={() => {
          dispatch(SetNewItemModal(true))
        }}>{actionName}</Button>}
      </div>
      <div>
        <CustomModal
          title={title}
        >
          {children}
        </CustomModal>
      </div>
    </div>
  )
}

export default AdminCrudHeader