/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { getUsers, getUserType } from '@/api'
import { SetUsers, UserSetTotalPages, UserSetIsLoading,UserSetEditItem,UserSetCurrentPage } from '@/store/actions'
import { Pagination, Table, Group,Button,Modal } from '@mantine/core'
import React,{useEffect} from 'react'
import useStore from '@/hooks/useStore'



interface Props {
  onClickEdit: () => void
  onClickDelete: (id:number) => void
}
const UsersTable = ({
  onClickEdit,
  onClickDelete
}:Props) => {

  const [isDelete, setIsDelete] = React.useState(false)
  const [deleteItemId, setDeleteItemId] = React.useState<undefined | number>(undefined)
  const [pageUsers, setPageUsers] = React.useState<getUserType[]>([])

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
    dispatch(UserSetCurrentPage(page))
  }

  const handlerEdit = (user:getUserType) => {
    onClickEdit()
    dispatch(UserSetIsLoading(true))
    dispatch(UserSetEditItem(user))
  }

  const getUsersData = async () => {
    try {
      const res = await getUsers(states.Users.currentPage)
      dispatch(SetUsers(res.data))
      dispatch(UserSetTotalPages(res.totalPages))
      setPageUsers(res.data)
    } catch (error) {
      console.log(error)
    }
    dispatch(UserSetIsLoading(false))
  }

  useEffect(() => {getUsersData()}, [])
  useEffect(() => {getUsersData()}, [states.Users.currentPage])
  useEffect(() => {getUsersData()}, [states.Users.isLoading])


  const row = (user:getUserType) => {
    return (
      <Table.Tr key={user.id}>
          <Table.Td>{user.id}</Table.Td>
          <Table.Td>{user.name}</Table.Td>
          <Table.Td>{new Date(user.createdAt).toLocaleDateString()}</Table.Td>
          <Table.Td>{new Date(user.updatedAt).toLocaleDateString()}</Table.Td>
          <Table.Td>
            <div className='w-full flex justify-around'>
              <Button size='xs' onClick={
                () => handlerEdit(user)
              }>
                <span className='i-mdi-edit text-lg'></span>
              </Button>
              <Button size='xs' color='red' onClick={
                () => HandlerDelete(user.id)
              }>
                <span className='i-mdi-delete text-lg'></span>
              </Button>
            </div>
          </Table.Td>
        </Table.Tr>
    )
  }

  const generateRows = () => {
    return pageUsers.map((user) => {
      return row(user)
    })
  }

  return (
    <div className='border-2 rounded
    dark:border-gray-700 border-gray-300 my-2' 
    >
      <Modal opened={isDelete} onClose={() => {setIsDelete(false)}} title="Delete Confirm">
        <div>
          <p>Are you sure you want to delete this user?</p>
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
          <Table.Th>Name</Table.Th>
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
      <div className='flex justify-end p-2'>
      <Pagination.Root total={states.Users.totalPages} onChange={HandlerChangePage}>
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