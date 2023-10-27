'use client'

import React from 'react'
import ContainerBox from '../atoms/containerBox'
import PostsTable from '../molecules/postsTable';
import AdminCrudHeader from '../molecules/adminCrudHeader';
import PostsForm from '../molecules/postsForm';
import CustomModal from '../atoms/customModal';
import useStore from '@/hooks/useStore'
import { PostCancelEditItem, PostSetIsLoading } from '@/store/actions';
import { deletePost } from '@/api';

const Posts = () => {

  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false)
  const { states, dispatch } = useStore()

  const HandlerCloseModal = async () => {
    setIsEditModalOpen(false)
    await dispatch(PostCancelEditItem())
    await dispatch(PostSetIsLoading(false))
  }

  const HandlerDelete = async (id:number) => {
    console.log(id)
    await dispatch(PostSetIsLoading(true))
    await deletePost(id)
    await dispatch(PostSetIsLoading(false))
  }

  return (
    <div className='pl-2 pr-3'>

      <ContainerBox className='flex flex-col w-full'>
          <CustomModal
            isOpen={isEditModalOpen}
            onClose={HandlerCloseModal}
            title='Edit Post'
          >
            <PostsForm 
              onClose={HandlerCloseModal}
            />
          </CustomModal>
          <AdminCrudHeader
            actionName='New Post'
            title='Posts'
            forceClose={isEditModalOpen}
          >
            <PostsForm
              onClose={HandlerCloseModal}
            />
          </AdminCrudHeader>
          <PostsTable
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

export default Posts