'use client'

import React from 'react'
import MenuBtn from '../molecules/menuBtn'
import { $t } from '@/utils/lang';
import useStore from '@/hooks/useStore';


const buttons = [
  {
    text:$t('Dashboard'),
    href:'dashboard',
    roles:['user','admin']
  },
  {
    text:$t('Posts'),
    href:'posts',
    roles:['admin']
  },
  {
    text:$t('Users'),
    href:'users',
    roles:['admin']
  },
  {
    text:$t('Comments'),
    href:'comments',
    roles:['user','admin']
  },
  {
    text:$t('Home'),
    href:'/',
    roles:['user','admin']
  },
]

  // DELTA = 5 IF ADMIN ELSE 2
  // IF DELTA = 5 THEN RENDER 5 BUTTONS UNION OF [0,1,2,3,4] AND [0,1,2,3,4] SO RENDER ALL
  // IF DELTA = 2 THEN RENDER 2 BUTTONS UNION OF [0,1,2,3,4] AND [0,1] SO RENDER EXCLUSIVE DASHBOARD AND COMMENTS
  // DEFAULT = 1 THEN RENDER 1 BUTTON UNION OF [0,1,2,3,4] AND [0] SO RENDER EXCLUSIVE HOME
  // DELTA ALWAYS RENDER HOME BUTTON

const GenerateButtons = (role:'user' | 'admin' ) => { 
  return buttons.filter(button => {
    if(button.roles.includes(role)){return button}}).map((button,index) => {
      return (
        <MenuBtn
          legacy={false}
          key={index}
          text={button.text}
          className='w-100 flex h-10 items-center justify-center '
          href={button.href}
        />
    )
  })
}


const AdminHeaderLinks = () => {
  const {states} = useStore()

  return (
    <div className=' w-4/6 h-full flex justify-end mx-2 ml-10 px-6 z-20  '>
      {GenerateButtons(states.Auth.user.isAdmin ? 'admin' : 'user')}
    </div>
  )
}

export default AdminHeaderLinks