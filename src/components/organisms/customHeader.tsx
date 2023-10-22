import React from 'react'
import CustomText from '../atoms/customText'
import SideMenu from './sideMenu'
import HeaderLinks from './headerLinks'

const CustomHeader = () => {
  return (
    <header className='flex h-10 justify-between items-center
    border-b-2 border-gray-800 w-full pl-12 dark:bg-gray-900 
    bg-slate-100' >
      <div className='flex h-14 justify-between items-center  w-2/6 '>
        <SideMenu />
        <CustomText
          className=' font-mono font-bold text-xl
        dark:text-gray-300 text-gray-900 px-12'
          text='Hugo Castro'
        />
        </div>
      <HeaderLinks />
    </header>
  )
}

export default CustomHeader