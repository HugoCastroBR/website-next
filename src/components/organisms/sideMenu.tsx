'use client'
import React from 'react'
import CustomText from '../atoms/customText'
import LanguageSelector from '../molecules/SideMenuOptions'
import SideMenuItems from '../organisms/sideMenuItems'



const SideMenu = () => {
  return (
    <>
      <input type="checkbox" id="menu" />
      <label htmlFor="menu" className="icon dark:text-slate-100 text-slate-900">
        <div className="menu
        dark:before:bg-white before:bg-gray-900
          dark:after:bg-white after:bg-gray-900
          dark:bg-white bg-gray-900
        "></div>
      </label>
      <div className='componentMenu'>
        <div className='flex flex-col justify-start w-full h-full
        items-center my-16 py-2 ' >
          <SideMenuItems />
          <LanguageSelector />
        </div>
      </div>
    </>
  )

}

export default SideMenu