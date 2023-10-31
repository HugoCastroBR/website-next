/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { getUsers, getUserType } from '@/api'
import { SetUsers, UserSetTotalPages, UserSetIsLoading,UserSetEditItem,UserSetCurrentPage } from '@/store/actions'
import { Pagination, Table, Group,Button,Modal } from '@mantine/core'
import React,{useEffect} from 'react'
import useStore from '@/hooks/useStore'
import RowsPerPageSelect from './rowsPerPageSelect'
import CustomText from '../atoms/customText'



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
    dispatch(UserSetCurrentPage(page))
  }

  const handlerEdit = (user:getUserType) => {
    onClickEdit()
    dispatch(UserSetIsLoading(true))
    dispatch(UserSetEditItem(user))
  }

  const getUsersData = async () => {
    try {
      const res = await getUsers({
        itemsPerPage: rowsPerPage,
        page: states.Users.currentPage,
        orderBy: orderBy,
        order: order as "desc" | "asc" | undefined
      })
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
  useEffect(() => {getUsersData()}, [rowsPerPage])


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


  const [orderBy, setOrderBy] = React.useState('id')
  const [order, setOrder] = React.useState('asc')
  useEffect(() => { getUsersData() }, [orderBy, order])
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

  if(pageUsers?.length === 0) return (
    <div className=' my-2 py-6 w-full
      flex flex-col justify-center items-center  
      
    ' 
    > 
      <span className='i-mdi-account-off-outline text-6xl text-gray-800 dark:text-gray-200'></span>
      <CustomText
        className='text-center text-lg font-bold text-gray-800 dark:text-gray-200'
        text='No Users'
      />
    </div>
  )

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
                setOrderBy('name')
                setOrder(order === 'asc' ? 'desc' : 'asc')
              }}
            >
              <CustomText
                className='text-start  text-base font-mono font-bold'
                text='Name' />
              {orderBy === 'name' ? generateOrderIcon() : <NoFilterComponent />}
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
      <RowsPerPageSelect handlerRowsPerPage={setRowsPerPage}/>
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