'use client'

import React from 'react'
import ContainerBox from '../atoms/containerBox'
import AdminCrudHeader from '../molecules/adminCrudHeader';
import UsersTable from '../molecules/usersTable';
import UserForm from '../molecules/userForm';
import CustomModal from '../atoms/customModal';
import { deleteUser } from '@/api';
import { UserCancelEditItem, UserSetIsLoading } from '@/store/actions';
import useStore from '@/hooks/useStore';

const Users = () => {

  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false)
  const { states, dispatch } = useStore()

  const HandlerCloseModal = async () => {
    console.log("wtf")
    setIsEditModalOpen(false)
    await dispatch(UserCancelEditItem())
    await dispatch(UserSetIsLoading(false))
  }

  const HandlerDelete = async (id:number) => {
    console.log(id)
    await dispatch(UserSetIsLoading(true))
    await deleteUser(id)
    await dispatch(UserSetIsLoading(false))
  }

  return (
    <div className='pl-2 pr-3'>
    <ContainerBox className='flex flex-col w-full'>
      <CustomModal
        isOpen={isEditModalOpen}
        onClose={HandlerCloseModal}
        title='Edit User'
      >
        <UserForm
          onClose={HandlerCloseModal}
        />
      </CustomModal>
      <AdminCrudHeader 
        title='Users' 
        actionName='New User'
        forceClose={isEditModalOpen}
       >
        <UserForm
          onClose={HandlerCloseModal}
        />
      </AdminCrudHeader>
      <UsersTable
        onClickEdit={
          () => {
            setIsEditModalOpen(true)
          }
        }
        onClickDelete={HandlerDelete}
      />
    </ContainerBox>
    </div>
    
  )
}

export default Users