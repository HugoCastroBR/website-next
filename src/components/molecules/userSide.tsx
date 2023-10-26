'use client'
import { Avatar, Button } from '@mantine/core'
import React from 'react'
import CustomText from '../atoms/customText'
import { userType } from '@/types'
import { getOnlyInitials } from '@/utils/textHandlers'
import Link from 'next/link'



const UserSide = ({
  id,
  name,
  email,
  password,
  createdAt,
  updatedAt,
  isAdmin,
}:userType) => {

  

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
      <div className="flex justify-evenly items-center w-full my-2">
        <div>
          <Button>
            <CustomText
              className='text-sm font-medium '
              text='Edit Profile'
            />
          </Button>
        </div>
        {isAdmin && 
        <div>
          <Link href='/en/admin/dashboard'>
            <Button>
              <CustomText
                className='text-sm font-medium '
                text='Dashboard'
              />
            </Button>
          </Link>
        </div>}
      </div>
    </div>
  )
}

export default UserSide