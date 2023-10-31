'use client'
import { Avatar, Button } from '@mantine/core'
import React from 'react'
import CustomText from '../atoms/customText'
import { userType } from '@/types'
import { getOnlyInitials } from '@/utils/textHandlers'
import Link from 'next/link'
import CustomModal from '../atoms/customModal'
import RegisterForm from './RegisterForm'
import { getUser } from '@/api'
import useStore from '@/hooks/useStore'
import { Logout } from '@/store/actions'



const UserSide = ({
  name,
  isAdmin,
}: getUser) => {

  const [showModal, setShowModal] = React.useState(false)
  const { states, dispatch } = useStore()

  const HandlerLogout = () => {
    localStorage.removeItem('token')
    dispatch(Logout())

  }

  return (
    <div className='flex flex-col justify-start items-center'>
      {/* <CustomModal 
        isOpen={showModal}
        // onClose={() => setShowModal(false)}
        title='Edit Profile'
      >
        <RegisterForm isEdit={true} />
      </CustomModal> */}
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
{/* 
        <div>
          <Button onClick={() => setShowModal(true)} >
            <CustomText
              className='text-sm font-medium '
              text='Edit Profile'
            />
          </Button>
        </div> */}
          <div className='mx-2'>
            <Link href='/en/admin/dashboard'>
              <Button>
                <CustomText
                  className='text-sm font-medium '
                  text='Dashboard'
                />
              </Button>
            </Link>
          </div>
          <div className='mx-2'>
          <Link href='/'>
            <Button onClick={HandlerLogout} color='red' >
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