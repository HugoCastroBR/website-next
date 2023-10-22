import React from 'react'
import SideMenuItem from '../molecules/menuBtn'

const SideMenuItems = () => {
  return (
    <div className='flex flex-col w-full h-5/6 items-start justify-start'>
      <SideMenuItem text='Login' />
      <SideMenuItem text='Register' />
    </div>
  )
}

export default SideMenuItems