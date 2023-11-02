/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { getPosts, getPostsType } from '@/api'
import useStore from '@/hooks/useStore'
import { AddPosts, PostSetCurrentPage, PostSetEditItem, PostSetIsLoading, PostSetSearchText, PostSetTotalPages } from '@/store/actions'
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
    dispatch(PostSetCurrentPage(page))
  }

  const handlerEdit = (post: getPostsType) => {
    onClickEdit()
    dispatch(PostSetIsLoading(true))
    dispatch(PostSetEditItem(post))
  }

  const getPostsData = async () => {
    try {
      const res = await getPosts({
        page: states.Post.currentPage,
        itemsPerPage: rowsPerPage,
        orderBy: orderBy,
        order: order as "desc" | "asc" | undefined,
        search: states.Post.searchText
      })
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
    dispatch(PostSetSearchText(''))
  }, [])
  useEffect(() => { getPostsData() }, [states.Post.currentPage])
  useEffect(() => { getPostsData() }, [states.Post.isLoading])
  useEffect(() => { getPostsData() }, [rowsPerPage])
  useEffect(() => { getPostsData() }, [states.Post.searchText])


  const row = (post: getPostsType) => {
    return (
      <Table.Tr key={post.id}>
        <Table.Td>{post.id}</Table.Td>
        <Table.Td>{post.title}</Table.Td>
        <Table.Td>{new Date(post.createdAt).toLocaleDateString()}</Table.Td>
        <Table.Td>{new Date(post.updatedAt).toLocaleDateString()}</Table.Td>
        <Table.Td>
          <div className='w-full flex justify-around'>
            <Button 
              size='xs'
              color='blue'
              className='bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out' 
              onClick={
                () => handlerEdit(post)
              }
            >
              <span className='i-mdi-edit text-lg'></span>
            </Button>
              <Button 
                size='xs' 
                color='red' 
                className='bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out'
                onClick={
                  () => HandlerDelete(post.id)
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
    return pagePosts.map((post) => {
      return row(post)
    })
  }



  const [orderBy, setOrderBy] = React.useState('id')
  const [order, setOrder] = React.useState('asc')
  useEffect(() => { getPostsData() }, [orderBy, order])
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


  if (pagePosts?.length === 0) return (
    <div className=' my-2 py-6 w-full
      flex flex-col justify-center items-center  
      
    '
    >
      <span className='i-mdi-note-off-outline text-6xl text-gray-800 dark:text-gray-200'></span>
      <CustomText
        className='text-center text-lg font-bold text-gray-800 dark:text-gray-200'
        text='No Posts'
      />
    </div>
  )


  return (
    <div className='border-2 rounded
    dark:border-gray-700 border-gray-300 my-2'
    >
      <Modal opened={isDelete} onClose={() => { setIsDelete(false) }} title="Delete Confirm">
        <div>
          <p>Are you sure you want to delete this post?</p>
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
                setOrderBy('title')
                setOrder(order === 'asc' ? 'desc' : 'asc')
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