'use client'
import { Avatar, Button } from '@mantine/core'
import React from 'react'
import CustomText from '../atoms/customText'
import { getOnlyInitials } from '@/utils/textHandlers'
import Link from 'next/link'
import { getUser } from '@/api'
import useStore from '@/hooks/useStore'
import { Logout } from '@/store/actions'



const UserSide = ({
  name,
  isAdmin,
}: getUser) => {

  const { dispatch } = useStore()

  const HandlerLogout = () => {
    localStorage.removeItem('token')
    dispatch(Logout())

  }

  return (
    <div className='flex flex-col justify-start items-center'>

      <div className="flex items-center justify-start w-full">
        <Avatar color='blue' radius='xl' size='lg'>
          {getOnlyInitials(name)}
        </Avatar>
        <div className="flex flex-col justify-start items-start
          ml-4"
        >
          <CustomText
            className='text-lg font-semibold'
            text={name}
          />
          <CustomText
            className='text-sm font-light italic'
            text={`Role: ${isAdmin ? 'Admin' : 'User'}`}
          />
        </div>
      </div>
      <div className="flex justify-end items-center w-full my-5">
        <div className='mx-2'>
          <Link href='/en/admin/dashboard'>
            <Button
              color='blue'
              className='bg-blue-500 hover:bg-blue-700'
            >
              <CustomText
                className='text-sm font-medium '
                text='Dashboard'
              />
            </Button>
          </Link>
        </div>
        <div className='mx-2'>
          <Link href='/'>
            <Button 
              onClick={HandlerLogout} 
              color='red' 
              className='bg-red-500 hover:bg-red-700'  
            >
              <CustomText
                className='text-sm font-medium '
                text='Logout'
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserSide