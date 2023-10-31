import React from 'react'
import CustomText from '../atoms/customText'
import AdminHeaderLinks from './adminHeaderLinks'
import SideMenu from './sideMenu'

const AdminHeader = () => {
  return (
    <header className='flex h-10 justify-between items-center
    border-b-2 border-gray-800 w-screen pl-4 dark:bg-gray-900 lg:pr-2 pr-0
    bg-slate-100' z-10>
      <div className='flex h-14 justify-start items-center  w-2/6 '>
        <SideMenu />
        <CustomText
          className=' font-mono font-bold text-base
        dark:text-gray-300 text-gray-900 px-6 hidden sm:block'
          text='Hugo Castro'
        />
        </div>
      <AdminHeaderLinks />
    </header>
  )
}

export default AdminHeader