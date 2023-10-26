'use client'
import { postType } from '@/types'
import { Pagination, Table, Group,Button,Modal } from '@mantine/core'
import React from 'react'

const Posts:postType[] = [
  {
    content: 'content',
    authorId: 1,
    createdAt: 'createdAt',
    id: 1,
    title: 'title',
    updatedAt : 'updatedAt',
    subTitle: 'subTitle',
    authorName: 'authorName',
  }
]

interface Props {
  isEdit?: boolean
  editData?: postType
  onClickEdit: (id:number) => void
}
const UsersTable = ({
  editData,
  isEdit,
  onClickEdit
}:Props) => {

  const [isDelete, setIsDelete] = React.useState(false)
  const [deleteItemId, setDeleteItemId] = React.useState<undefined | number>(undefined)

  const HandlerDelete = (id:number) => {
    setDeleteItemId(id)
    setIsDelete(true)
  }

  const HandlerConfirmDelete = () => {
    console.log('delete',deleteItemId)
    setIsDelete(false)
  }

  const handlerCancelDelete = () => {
    setDeleteItemId(undefined)
    setIsDelete(false)
  }
  const rows = Posts.map((post) => (
    <Table.Tr key={post.id}>
      <Table.Td>{post.id}</Table.Td>
      <Table.Td>{post.title}</Table.Td>
      <Table.Td>{post.createdAt}</Table.Td>
      <Table.Td>{post.updatedAt}</Table.Td>
      <Table.Td>
        <div className='w-full flex justify-around'>
          <Button size='xs' onClick={
            () => onClickEdit(post.id)
          } >
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
  ));

  return (
    <div className='border-2 rounded
    dark:border-gray-700 border-gray-300 my-2' 
    >
      <Modal opened={isDelete} onClose={() => {setIsDelete(false)}} title="Delete Confirm">
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
          <Table.Th>Id</Table.Th>
          <Table.Th>Title</Table.Th>
          <Table.Th>Created At</Table.Th>
          <Table.Th>Updated At</Table.Th>
          <Table.Th 
            w={130}
          >Options</Table.Th>
        </Table.Thead>
        <Table.Tbody>
          {rows}
        </Table.Tbody>
      </Table>
      <div className='flex justify-end p-2'>
        <Pagination.Root total={10} onChange={
          (currentPage) => console.log(currentPage)
        }>
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

export default UsersTable