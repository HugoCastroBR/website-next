'use client'

import React from 'react'
import ContainerBox from '../atoms/containerBox'
import PostsTable from '../molecules/postsTable';
import AdminCrudHeader from '../molecules/adminCrudHeader';
import PostsForm from '../molecules/postsForm';
import CustomModal from '../atoms/customModal';

const Posts = () => {

  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false)

  return (
    <div className='pl-2 pr-3'>
      <ContainerBox className='flex flex-col w-full'>
        <CustomModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title='Edit Post'
        >
          <PostsForm/>
        </CustomModal>
        <AdminCrudHeader 
          actionName='New Post'
          title='Posts'
        >
          <PostsForm/>
        </AdminCrudHeader>
      <PostsTable
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

export default Posts