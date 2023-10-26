import React from 'react'
import CustomButton from '../atoms/customButton'
import CustomText from '../atoms/customText'
import MenuBtn from '../molecules/menuBtn'
import { $t } from '@/utils/lang';


const buttons = [
  {
    text:$t('Dashboard'),
    href:'dashboard'
  },
  {
    text:$t('Posts'),
    href:'posts'
  },
  {
    text:$t('Users'),
    href:'users'
  },
  {
    text:$t('Home'),
    href:'/'
  },
]

const GenerateButtons = () => {
  return buttons.map((button,index) => {
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
  return (
    <div className=' w-4/6 h-full flex justify-end mx-2 ml-10 px-6 z-20  '>
      {GenerateButtons()}
    </div>
  )
}

export default AdminHeaderLinks