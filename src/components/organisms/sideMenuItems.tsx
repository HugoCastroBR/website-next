import React from 'react'
import SideMenuSectionContainer from '../molecules/sideMenuSectionContainer'
import SideAuth from './sideAuth'
import SideSettings from './sideSettings'

const SideMenuItems = () => {

  return (
    <div className='flex flex-col w-full h-full items-start justify-start'>
      <SideMenuSectionContainer>
        <SideAuth />
      </SideMenuSectionContainer>
      <SideMenuSectionContainer>
        <SideSettings />
      </SideMenuSectionContainer>
    </div>
  )
}

export default SideMenuItems