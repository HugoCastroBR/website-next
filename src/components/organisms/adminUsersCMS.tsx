'use client'

import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import AdminCrudHeader from '../molecules/adminCrudHeader';
import PostsTable from '../molecules/postsTable';
import UsersTable from '../molecules/usersTable';
import UserForm from '../molecules/userForm';
import CustomModal from '../atoms/customModal';

const Users = () => {

  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false)


  return (
    <div className='pl-2 pr-3'>
    <ContainerBox className='flex flex-col w-full'>
      <CustomModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title='Edit User'
      >
        <UserForm/>
      </CustomModal>
      <AdminCrudHeader title='Users' actionName='New User' >
        <UserForm/>
      </AdminCrudHeader>
      <UsersTable
        onClickEdit={
          (id:number) => {
            console.log('edit',id)
            setIsEditModalOpen(true)
          }
        }
      />
    </ContainerBox>
    </div>
    
  )
}

export default Users