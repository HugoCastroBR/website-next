'use client'

import React from 'react'
import CustomText from '../atoms/customText'
import { Button } from '@mantine/core';
import CustomModal from '../atoms/customModal';
import useStore from '@/hooks/useStore';
import { CommentSetSearchText, PostSetSearchText, SetNewItemModal, UserSetSearchText } from '@/store/actions';
import CustomInput from '../atoms/customInput';
import SearchInput from './searchInput';

interface AdminCrudHeaderProps {
  title: string
  children: React.ReactNode
  actionName?: string
  searchBar?: boolean
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
        <SearchInput
          handlerSearchChange={(value) => {
            switch (title) {
              case 'Posts':
                dispatch(PostSetSearchText(value))
                break;
              case 'Users':
                dispatch(UserSetSearchText(value))
                break;
              case 'Comments':
                dispatch(CommentSetSearchText(value))
                break;
              default:
                break;
            }
          }}
        />
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