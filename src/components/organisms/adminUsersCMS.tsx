'use client'

import React from 'react'
import ContainerBox from '../atoms/containerBox'
import AdminCrudHeader from '../molecules/adminCrudHeader';
import UsersTable from '../molecules/usersTable';
import UserForm from '../molecules/userForm';
import { deleteUser } from '@/api';
import { SetNewItemModal, UserCancelEditItem, UserSetIsLoading } from '@/store/actions';
import useStore from '@/hooks/useStore';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Users = () => {

  const { dispatch } = useStore()

  const HandlerDelete = async (id: number) => {
    console.log(id)
    await dispatch(UserSetIsLoading(true))
    await deleteUser(id)
    await dispatch(UserSetIsLoading(false))
  }

  interface modalProps {
    children: React.ReactNode
    title: string
  }

  const [opened, { open, toggle }] = useDisclosure(false);
  const AdminUserModal = ({ children, title }: modalProps) => {
    return (
      <Modal opened={opened} onClose={toggle} title={title}
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
    )
  }

  const HandlerCloseModal = async (editMode?: boolean) => {
    if (editMode) {
      toggle()
      await dispatch(UserCancelEditItem())
      await dispatch(UserSetIsLoading(false))
    } else {
      dispatch(SetNewItemModal(false))
    }
  }

  const handlerOpenModal = () => {
    open()
  }

  return (
    <div className='pl-2 pr-3'>
      <ContainerBox className='flex flex-col w-full min-h-screen'>
        <AdminUserModal
          title='Edit User'
        >
          <UserForm
            onClose={HandlerCloseModal}
          />
        </AdminUserModal>
        <AdminCrudHeader
          title='Users'
          actionName='New User'
        >
          <UserForm
            onClose={HandlerCloseModal}
          />
        </AdminCrudHeader>
        <UsersTable
          onClickEdit={handlerOpenModal}
          onClickDelete={HandlerDelete}
        />
      </ContainerBox>
    </div>

  )
}

export default Users