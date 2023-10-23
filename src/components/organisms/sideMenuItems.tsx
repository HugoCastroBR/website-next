import React from 'react'
import SideMenuItem from '../molecules/menuBtn'
import CustomText from '../atoms/customText'

const SideMenuItems = () => {
  return (
    <div className='flex flex-col w-full h-5/6 items-start justify-start'>
      <SideMenuItem text='Login' className=''/>
      <SideMenuItem text='Register' />
      <CustomText text='TODO: MAKE THIS A PROFILE OVERVIEW'
        className='text-slate-900 dark:text-slate-100 text-2xl font-bold my-2'
      />
    </div>
  )
}

export default SideMenuItems