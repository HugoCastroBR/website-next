/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { getComments,getCommentsByUserId,commentType } from '@/api'
import page from '@/app/[lang]/profile/page'
import useStore from '@/hooks/useStore'
import { CommentSetComments, CommentSetCurrentPage, CommentSetEditItem, CommentSetIsLoading, CommentSetTotalPages } from '@/store/actions'
import { Pagination, Table, Group,Button,Modal } from '@mantine/core'
import React,{useEffect } from 'react'
import RowsPerPageSelect from './rowsPerPageSelect'

interface Props{
  onClickEdit: () => void
  onClickDelete: (id:number) => void
}
const CommentsTable = (
  {
    onClickEdit,
    onClickDelete
  }:Props
) => {

  const [isDelete, setIsDelete] = React.useState(false)
  const [deleteItemId, setDeleteItemId] = React.useState<undefined | number>(undefined)
  const [pageComments, setPageComments] = React.useState<commentType[]>([])
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const { states, dispatch } = useStore()

  const HandlerDelete = (id:number) => {
    setDeleteItemId(id)
    setIsDelete(true)
  }

  const HandlerConfirmDelete = () => {
    console.log('delete',deleteItemId)
    if(!!deleteItemId && deleteItemId !== undefined){
      console.log("uai")
      onClickDelete(deleteItemId)
      setIsDelete(false)
  }}

  const handlerCancelDelete = () => {
    setDeleteItemId(undefined)
    setIsDelete(false)
  }

  const HandlerChangePage = (page:number) => {
    dispatch(CommentSetCurrentPage(page))
  }

  const handlerEdit = (comment:commentType) => {
    onClickEdit()
    dispatch(CommentSetIsLoading(true))
    dispatch(CommentSetEditItem(comment))
  }

  const getUserId = async () => {
    return await states.Auth.user.id
  }
  const getCommentsData = async () => {
    try {
      const UserId = await getUserId()
      const res = await getCommentsByUserId(states.Comment.currentPage,UserId,rowsPerPage)
      dispatch(CommentSetComments(res.data))
      dispatch(CommentSetTotalPages(res.totalPages))
      setPageComments(res.data)
    } catch (error) {
      console.log(error)
    }
    dispatch(CommentSetIsLoading(false))
  }

  useEffect(() => {
    dispatch(CommentSetIsLoading(true))
    dispatch(CommentSetCurrentPage(1))
  }, [])
  useEffect(() => {getCommentsData()}, [states.Comment.currentPage])
  useEffect(() => {getCommentsData()}, [states.Comment.isLoading])
  useEffect(() => {getCommentsData()}, [rowsPerPage])

  const row = (comment:commentType) => {
    return (
      <Table.Tr key={comment.id}>
          <Table.Td>{comment.id}</Table.Td>
          <Table.Td>{comment.content}</Table.Td>
          <Table.Td>{new Date(comment.createdAt).toLocaleDateString()}</Table.Td>
          <Table.Td>{new Date(comment.updatedAt).toLocaleDateString()}</Table.Td>
          <Table.Td>
            <div className='w-full flex justify-around'>
              <Button size='xs' onClick={
                () => handlerEdit(comment)
              }>
                <span className='i-mdi-edit text-lg'></span>
              </Button>
              <Button size='xs' color='red' onClick={
                () => HandlerDelete(comment.id)
              }>
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

  return (
    <div className='border-2 rounded
    dark:border-gray-700 border-gray-300 my-2' 
    >
      <Modal opened={isDelete} onClose={() => {setIsDelete(false)}} title="Delete Confirm">
        <div>
          <p>Are you sure you want to delete this comment?</p>
          <div className='flex justify-end mt-4'>
            <Button onClick={handlerCancelDelete} className='m-2'>
              Cancel
            </Button>
            <Button color='red' onClick={HandlerConfirmDelete} className='m-2'>
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
          <Table.Th>Id</Table.Th>
          <Table.Th>Content</Table.Th>
          <Table.Th>Created At</Table.Th>
          <Table.Th>Updated At</Table.Th>
          <Table.Th 
            w={130}
          >Options</Table.Th>
        </Table.Thead>
        <Table.Tbody>
          {generateRows()}
        </Table.Tbody>
      </Table>
      <div className='flex justify-between items-end p-2 mt-4'>
        <RowsPerPageSelect handlerRowsPerPage={setRowsPerPage}/>
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