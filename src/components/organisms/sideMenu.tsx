/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import SideMenuItems from '../organisms/sideMenuItems'
import useStore from '@/hooks/useStore'
import { SetSideMenu } from '@/store/actions'
import { Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'


const SideMenu = () => {

  const { dispatch } = useStore()
  const [opened, { toggle }] = useDisclosure();


  useEffect(() => {
    dispatch(SetSideMenu(opened))
  }, [opened])

  return (
    <>
      <Burger opened={opened} onClick={toggle} size={'sm'} />
      <Drawer
        opened={opened}
        onClose={toggle}
        size='md'
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
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
        </div>
      </Drawer>

    </>
  )

}

export default SideMenu
