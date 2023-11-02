/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { getCommentsByUserId, commentType, getUserByToken } from '@/api'
import useStore from '@/hooks/useStore'
import { CommentSetComments, CommentSetCurrentPage, CommentSetEditItem, CommentSetIsLoading, CommentSetTotalPages } from '@/store/actions'
import { Pagination, Table, Group, Button, Modal } from '@mantine/core'
import React, { useEffect } from 'react'
import RowsPerPageSelect from './rowsPerPageSelect'
import CustomText from '../atoms/customText'

interface Props {
  onClickEdit: () => void
  onClickDelete: (id: number) => void
}
const CommentsTable = (
  {
    onClickEdit,
    onClickDelete
  }: Props
) => {

  const [isDelete, setIsDelete] = React.useState(false)
  const [deleteItemId, setDeleteItemId] = React.useState<undefined | number>(undefined)
  const [pageComments, setPageComments] = React.useState<commentType[]>([])
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const { states, dispatch } = useStore()

  const HandlerDelete = (id: number) => {
    setDeleteItemId(id)
    setIsDelete(true)
  }

  const HandlerConfirmDelete = () => {
    
    if (!!deleteItemId && deleteItemId !== undefined) {
      
      onClickDelete(deleteItemId)
      setIsDelete(false)
    }
  }

  const handlerCancelDelete = () => {
    setDeleteItemId(undefined)
    setIsDelete(false)
  }

  const HandlerChangePage = (page: number) => {
    dispatch(CommentSetCurrentPage(page))
  }

  const handlerEdit = (comment: commentType) => {
    onClickEdit()
    dispatch(CommentSetIsLoading(true))
    dispatch(CommentSetEditItem(comment))
  }

  const getUserId = async () => {
    const res = await getUserByToken()
    return res.data.id
  }

  const resetGetData = async () => {
    const res = await getCommentsByUserId(states.Auth.user.id, {
      itemsPerPage: 10,
      page: 1,
      orderBy: orderBy,
      order: order as "desc" | "asc" | undefined,
      search: ''
    })
    dispatch(CommentSetComments(res.data))
  }

  const getCommentsData = async () => {
    try {
      const UserId = await getUserId()
      const res = await getCommentsByUserId(UserId, {
        itemsPerPage: rowsPerPage,
        page: states.Comment.currentPage,
        orderBy: orderBy,
        order: order as "desc" | "asc" | undefined
      })
      dispatch(CommentSetComments(res.data))
      dispatch(CommentSetTotalPages(res.totalPages))
      setPageComments(res.data)
    } catch (error) {
      
      await resetGetData()
    }
    dispatch(CommentSetIsLoading(false))
  }

  useEffect(() => {
    dispatch(CommentSetIsLoading(true))
    dispatch(CommentSetCurrentPage(1))
  }, [])
  useEffect(() => { getCommentsData() }, [states.Comment.currentPage])
  useEffect(() => { getCommentsData() }, [states.Comment.isLoading])
  useEffect(() => { getCommentsData() }, [rowsPerPage])

  const row = (comment: commentType) => {
    return (
      <Table.Tr key={comment.id}>
        <Table.Td>{comment.id}</Table.Td>
        <Table.Td>{comment.content}</Table.Td>
        <Table.Td>{new Date(comment.createdAt).toLocaleDateString()}</Table.Td>
        <Table.Td>{new Date(comment.updatedAt).toLocaleDateString()}</Table.Td>
        <Table.Td>
          <div className='w-full flex justify-around'>
            <Button 
              size='xs' 
              color='blue'
              className='bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out' 
              onClick={
                () => handlerEdit(comment)
              }
            >
              <span className='i-mdi-edit text-lg'></span>
            </Button>
            <Button 
              size='xs' 
              color='red' 
              className='bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out'
              onClick={
                () => HandlerDelete(comment.id)
              }
            >
              <span className='i-mdi-delete text-lg'></span>
            </Button>
          </div>
        </Table.Td>
      </Table.Tr>
    )
  }

  const generateRows = () => {
    return pageComments.map((comment) => {
      return row(comment)
    })
  }


  const [orderBy, setOrderBy] = React.useState('id')
  const [order, setOrder] = React.useState('asc')
  useEffect(() => { getCommentsData() }, [orderBy, order])
  const generateOrderIcon = () => {
    if (order === 'asc') {
      return <span className='i-mdi-sort-ascending text-lg'></span>
    }
    else {
      return <span className='i-mdi-sort-descending text-lg'></span>
    }
  }
  const NoFilterComponent = () => {
    return (
      <span className='i-mdi-sort text-lg'></span>
    )
  }

  if (pageComments?.length === 0) return (
    <div className=' my-2 py-6 w-full
      flex flex-col justify-center items-center  
      
    '
    >
      <span className='i-mdi-comment-remove-outline text-6xl text-gray-800 dark:text-gray-200'></span>
      <CustomText
        className='text-center text-lg font-bold text-gray-800 dark:text-gray-200'
        text='No Comments'
      />
    </div>
  )

  return (
    <div className='border-2 rounded
    dark:border-gray-700 border-gray-300 my-2'
    >
      <Modal opened={isDelete} onClose={() => { setIsDelete(false) }} title="Delete Confirm">
        <div>
          <p>Are you sure you want to delete this comment?</p>
          <div className='flex justify-end mt-4'>
            <Button 
              onClick={handlerCancelDelete} 
              className='m-2 bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out' 
            >
              Cancel
            </Button>
            <Button 
              color='red' 
              onClick={HandlerConfirmDelete} 
              className='m-2 bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out'
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <Table
        striped
        highlightOnHover
        withColumnBorders
      >
        <Table.Thead>
          <Table.Th>
            <div className='flex justify-between items-center cursor-pointer'
              onClick={() => {
                setOrderBy('id')
                setOrder(order === 'asc' ? 'desc' : 'asc')
              }}
            >
              <CustomText
                className='text-start  text-base font-mono font-bold'
                text='Id' />
              {orderBy === 'id' ? generateOrderIcon() : <NoFilterComponent />}
            </div>
          </Table.Th>
          <Table.Th>
            <div className='flex justify-between items-center cursor-pointer'
              onClick={() => {
                setOrderBy('content')
                setOrder(order === 'asc' ? 'desc' : 'asc')
              }}
            >
              <CustomText
                className='text-start  text-base font-mono font-bold'
                text='Content' />
              {orderBy === 'content' ? generateOrderIcon() : <NoFilterComponent />}
            </div>
          </Table.Th>
          <Table.Th>
            <div className='flex justify-between items-center cursor-pointer'
              onClick={() => {
                setOrderBy('createdAt')
                setOrder(order === 'asc' ? 'desc' : 'asc')
              }}
            >
              <CustomText
                className='text-start  text-base font-mono font-bold'
                text='Created At' />
              {orderBy === 'createdAt' ? generateOrderIcon() : <NoFilterComponent />}
            </div>
          </Table.Th>
          <Table.Th>
            <div className='flex justify-between items-center cursor-pointer'
              onClick={() => {
                setOrderBy('updatedAt')
                setOrder(order === 'asc' ? 'desc' : 'asc')
              }}
            >
              <CustomText
                className='text-start  text-base font-mono font-bold'
                text='Updated At' />
              {orderBy === 'updatedAt' ? generateOrderIcon() : <NoFilterComponent />}
            </div>
          </Table.Th>
          <Table.Th
            w={130}
          >Options</Table.Th>
        </Table.Thead>
        <Table.Tbody>
          {generateRows()}
        </Table.Tbody>
      </Table>
      <div className='flex justify-between items-end p-2 mt-4'>
        <RowsPerPageSelect handlerRowsPerPage={setRowsPerPage} />
        <Pagination.Root total={states.Comment.totalPages} onChange={HandlerChangePage}>
          <Group gap={2} justify="center">
            <Pagination.Previous />
            <Pagination.Items
            />
            <Pagination.Next
            />
          </Group>
        </Pagination.Root>
      </div>
    </div>
  )
}

export default CommentsTable