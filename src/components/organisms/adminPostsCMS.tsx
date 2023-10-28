'use client'

import React from 'react'
import ContainerBox from '../atoms/containerBox'
import PostsTable from '../molecules/postsTable';
import AdminCrudHeader from '../molecules/adminCrudHeader';
import PostsForm from '../molecules/postsForm';
import CustomModal from '../atoms/customModal';
import useStore from '@/hooks/useStore'
import { PostCancelEditItem, PostSetIsLoading, SetNewItemModal } from '@/store/actions';
import { deletePost } from '@/api';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Posts = () => {

  
  const { states, dispatch } = useStore()

  

  const HandlerDelete = async (id: number) => {
    console.log(id)
    await dispatch(PostSetIsLoading(true))
    await deletePost(id)
    await dispatch(PostSetIsLoading(false))
  }

  interface modalProps {
    children: React.ReactNode
    title: string
  }

  let [opened, { open, toggle,close }] = useDisclosure(false);
  const AdminPostModal = ({children,title}:modalProps) => {
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


  const HandlerCloseModal = async (editMode?:boolean) => {
    if(editMode){
      toggle()
      await dispatch(PostCancelEditItem())
      await dispatch(PostSetIsLoading(false))
    }else{
      dispatch(SetNewItemModal(false))

    }
    
  }

  const handlerOpenModal = () => {
    open()
  }

 

  return (
    <div className='pl-2 pr-3'>

      <ContainerBox className='flex flex-col w-full'>
        <AdminPostModal title='Edit Post' >
          <PostsForm
            onClose={HandlerCloseModal}
          />
        </AdminPostModal>
        <AdminCrudHeader
          actionName='New Post'
          title='Posts'
        >
          <PostsForm
            onClose={HandlerCloseModal}
          />
        </AdminCrudHeader>
        <PostsTable
          onClickEdit={handlerOpenModal}
          onClickDelete={HandlerDelete}
        />
      </ContainerBox>
    </div>

  )
}

export default Posts