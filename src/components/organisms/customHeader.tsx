import React from 'react'
import CustomText from '../atoms/customText'
import SideMenu from './sideMenu'
import HeaderLinks from './headerLinks'

const CustomHeader = () => {
  return (
    <header className='flex h-10 justify-between items-center
    border-b-2 border-gray-800 w-screen pl-12 dark:bg-gray-900 lg:pr-2 pr-0
    bg-slate-100' z-10>
      <div className='flex h-14 justify-between items-center  w-2/6 '>
        <SideMenu />
        <CustomText
          className=' font-mono font-bold text-base
        dark:text-gray-300 text-gray-900 px-6 hidden sm:block'
          text='Hugo Castro'
        />
        </div>
      <HeaderLinks />
    </header>
  )
}

export default CustomHeader