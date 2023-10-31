'use client'
import React, { useEffect } from 'react'
import LanguageSelector from '../molecules/SideMenuOptions'
import SideMenuItems from '../organisms/sideMenuItems'
import useStore from '@/hooks/useStore'
import { SetSideMenu } from '@/store/actions'
import { Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'



const SideMenu = () => {

  const {states, dispatch} = useStore()
  const [opened, { toggle }] = useDisclosure();


  useEffect(() => {
    dispatch(SetSideMenu(opened))
  },[opened])

  return (
    <>
      <Burger opened={opened} onClick={toggle}  size={'sm'}  />
      <Drawer 
        opened={opened} 
        onClose={toggle} 
        size='md' 
        overlayProps={{backgroundOpacity:0.5,blur:4}}
        transitionProps={{ transition: 'pop-top-left', duration: 150, timingFunction: 'linear' }}
        closeButtonProps={{
          right: 10,
          top: 10,
        }}
        padding={0}
        zIndex={30}
      >
        <div className='flex flex-col justify-start w-full h-full
        items-center  py-4 ' >
          <SideMenuItems />
          {/* <LanguageSelector /> */}
        </div>
      </Drawer>

    </>
  )

}

export default SideMenu


  // <input type="checkbox" id="menu" onChange={(e) => {
  //   dispatch(SetSideMenu(e.target.checked))
  // }} />
  // <label htmlFor="menu" className="icon dark:text-slate-100 text-slate-900">
  //   <div className="menu
  //   dark:before:bg-white before:bg-gray-900
  //     dark:after:bg-white after:bg-gray-900
  //     dark:bg-white bg-gray-900
  //   "></div>
  // </label>
  // <div className='componentMenu'>
  //   <div className='flex flex-col justify-start w-full h-full
  //   items-center my-12 py-2 ' >
  //     <SideMenuItems />
  //     {/* <LanguageSelector /> */}
  //   </div>
  // </div>