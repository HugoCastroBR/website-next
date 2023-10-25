import React from 'react'
import CustomText from '../atoms/customText'
import SideMenuBtn from '../molecules/sideMenuBtn'
import SideMenuSectionContainer from '../molecules/sideMenuSectionContainer'
import LoginForm from '../molecules/LoginForm'
import AccordionContainer from '../molecules/accordionContainer'
import SideAuth from './sideAuth'
import SideSettings from './sideSettings'

const SideMenuItems = () => {
  return (
    <div className='flex flex-col w-full h-full items-start justify-start'>
      {/* <SideMenuSectionContainer>
        <SideAuth />
      </SideMenuSectionContainer> */}
      <SideMenuSectionContainer>
        <SideSettings />
      </SideMenuSectionContainer>
    </div>
  )
}

export default SideMenuItems