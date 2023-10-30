/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { getPosts, getPostsType } from '@/api'
import page from '@/app/[lang]/profile/page'
import useStore from '@/hooks/useStore'
import { AddPosts, PostSetCurrentPage, PostSetEditItem, PostSetIsLoading, PostSetTotalPages } from '@/store/actions'
import { postType } from '@/types'
import { Pagination, Table, Group, Button, Modal, Select } from '@mantine/core'
import React, { useEffect } from 'react'
import CustomText from '../atoms/customText'
import RowsPerPageSelect from './rowsPerPageSelect'

interface Props {
  onClickEdit: () => void
  onClickDelete: (id: number) => void
}
const PostsTable = (
  {
    onClickEdit,
    onClickDelete
  }: Props
) => {

  const [isDelete, setIsDelete] = React.useState(false)
  const [deleteItemId, setDeleteItemId] = React.useState<undefined | number>(undefined)
  const [pagePosts, setPagePosts] = React.useState<getPostsType[]>([])
  const [rowsPerPage, setRowsPerPage] = React.useState(10)


  const { states, dispatch } = useStore()

  const HandlerDelete = (id: number) => {
    setDeleteItemId(id)
    setIsDelete(true)
  }

  const HandlerConfirmDelete = () => {
    console.log('delete', deleteItemId)
    if (!!deleteItemId && deleteItemId !== undefined) {
      console.log("uai")
      onClickDelete(deleteItemId)
      setIsDelete(false)
    }
  }

  const handlerCancelDelete = () => {
    setDeleteItemId(undefined)
    setIsDelete(false)
  }

  const HandlerChangePage = (page: number) => {
    dispatch(PostSetCurrentPage(page))
  }

  const handlerEdit = (post: getPostsType) => {
    onClickEdit()
    dispatch(PostSetIsLoading(true))
    dispatch(PostSetEditItem(post))
  }

  const getPostsData = async () => {
    try {
      const res = await getPosts(states.Post.currentPage, rowsPerPage)
      dispatch(AddPosts(res.data))
      dispatch(PostSetTotalPages(res.totalPages))
      setPagePosts(res.data)
    } catch (error) {
      console.log(error)
    }
    dispatch(PostSetIsLoading(false))
  }

  useEffect(() => {
    dispatch(PostSetIsLoading(true))
    dispatch(PostSetCurrentPage(1))
  }, [])
  useEffect(() => { getPostsData() }, [states.Post.currentPage])
  useEffect(() => { getPostsData() }, [states.Post.isLoading])
  useEffect(() => { getPostsData() }, [rowsPerPage])

  const row = (post: getPostsType) => {
    return (
      <Table.Tr key={post.id}>
        <Table.Td>{post.id}</Table.Td>
        <Table.Td>{post.title}</Table.Td>
        <Table.Td>{new Date(post.createdAt).toLocaleDateString()}</Table.Td>
        <Table.Td>{new Date(post.updatedAt).toLocaleDateString()}</Table.Td>
        <Table.Td>
          <div className='w-full flex justify-around'>
            <Button size='xs' onClick={
              () => handlerEdit(post)
            }>
              <span className='i-mdi-edit text-lg'></span>
            </Button>
            <Button size='xs' color='red' onClick={
              () => HandlerDelete(post.id)
            }>
              <span className='i-mdi-delete text-lg'></span>
            </Button>
          </div>
        </Table.Td>
      </Table.Tr>
    )
  }

  const generateRows = () => {
    return pagePosts.map((post) => {
      return row(post)
    })
  }



  const [orderBy, setOrderBy] = React.useState('id')
  const [order, setOrder] = React.useState('ASC')
  const generateOrderIcon = () => {
    if (order === 'ASC') {
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




  return (
    <div className='border-2 rounded
    dark:border-gray-700 border-gray-300 my-2'
    >
      <Modal opened={isDelete} onClose={() => { setIsDelete(false) }} title="Delete Confirm">
        <div>
          <p>Are you sure you want to delete this post?</p>
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
          <Table.Th>
            <div className='flex justify-between items-center cursor-pointer'
              onClick={() => {
                setOrderBy('id')
                setOrder(order === 'ASC' ? 'DESC' : 'ASC')
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
                setOrderBy('title')
                setOrder(order === 'ASC' ? 'DESC' : 'ASC')
              }}
            >
              <CustomText
                className='text-start  text-base font-mono font-bold'
                text='Tittle' />
              {orderBy === 'title' ? generateOrderIcon() : <NoFilterComponent />}
            </div>
          </Table.Th>
          <Table.Th>
          <div className='flex justify-between items-center cursor-pointer'
            onClick={() => {
              setOrderBy('CreatedAt')
              setOrder(order === 'ASC' ? 'DESC' : 'ASC')
            }}
          >
            <CustomText
              className='text-start  text-base font-mono font-bold'
              text='Created At' />
            {orderBy === 'CreatedAt' ? generateOrderIcon() : <NoFilterComponent />}
          </div>
          </Table.Th>
          <Table.Th>
          <div className='flex justify-between items-center cursor-pointer'
            onClick={() => {
              setOrderBy('UpdatedAt')
              setOrder(order === 'ASC' ? 'DESC' : 'ASC')
            }}
          >
            <CustomText
              className='text-start  text-base font-mono font-bold'
              text='Updated At' />
            {orderBy === 'UpdatedAt' ? generateOrderIcon() : <NoFilterComponent />}
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
        <Pagination.Root total={states.Post.totalPages} onChange={HandlerChangePage}>
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

export default PostsTable