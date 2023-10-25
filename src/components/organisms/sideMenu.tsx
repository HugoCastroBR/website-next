'use client'
import React from 'react'
import SideMenuItems from '../organisms/sideMenuItems'
import useStore from '@/hooks/useStore'
import { SetSideMenu } from '@/store/actions'



const SideMenu = () => {

  const {states, dispatch} = useStore()

  return (
    <>
      <input type="checkbox" id="menu" onChange={(e) => {
        // dispatch(SetSideMenu(e?.target?.checked || false))
      }} />
      <label htmlFor="menu" className="icon dark:text-slate-100 text-slate-900">
        <div className="menu
        dark:before:bg-white before:bg-gray-900
          dark:after:bg-white after:bg-gray-900
          dark:bg-white bg-gray-900
        "></div>
      </label>
      <div className='componentMenu'>
        <div className='flex flex-col justify-start w-full h-full
        items-center my-12 py-2 ' >
          <SideMenuItems />
        </div>
      </div>
    </>
  )

}

export default SideMenu