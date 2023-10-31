'use client'

import React from 'react'
import ContainerBox from '../atoms/containerBox'
import AdminCrudHeader from '../molecules/adminCrudHeader';
import CustomModal from '../atoms/customModal';
import useStore from '@/hooks/useStore'
import { CommentCancelEditItem, CommentSetIsLoading, SetNewItemModal } from '@/store/actions';
import { deleteComment } from '@/api';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CommentsTable from '../molecules/commentsTable';
import CommentsForm from '../molecules/commentForm';

const AdminComments = () => {

  
  const { states, dispatch } = useStore()

  

  const HandlerDelete = async (id: number) => {
    console.log(id)
    await dispatch(CommentSetIsLoading(true))
    await deleteComment(id)
    await dispatch(CommentSetIsLoading(false))
  }

  interface modalProps {
    children: React.ReactNode
    title: string
  }

  let [opened, { open, toggle,close }] = useDisclosure(false);
  const AdminCommentModal = ({children,title}:modalProps) => {
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
      await dispatch(CommentCancelEditItem())
      await dispatch(CommentSetIsLoading(false))
    }else{
      dispatch(SetNewItemModal(false))

    }
    
  }

  const handlerOpenModal = () => {
    open()
  }

 

  return (
    <div className='pl-2 pr-3'>

      <ContainerBox className='flex flex-col w-full min-h-screen'>
        <AdminCommentModal title='Edit Comment' >
          <CommentsForm
            onClose={HandlerCloseModal}
          />
        </AdminCommentModal>
        <AdminCrudHeader
          title='Comments'
        >
          <CommentsForm
            onClose={HandlerCloseModal}
          />
        </AdminCrudHeader>
        <CommentsTable
          onClickEdit={handlerOpenModal}
          onClickDelete={HandlerDelete}
        />
      </ContainerBox>
    </div>

  )
}

export default AdminComments