'use client'

import React from 'react'
import AccordionContainer from '../molecules/accordionContainer'
import LoginForm from '../molecules/LoginForm'
import CustomText from '../atoms/customText'
import RegisterForm from '../molecules/RegisterForm'
import UserSide from '../molecules/userSide'
import { userType } from '@/types';
import useStore from '@/hooks/useStore'



const SideAuth = () => {

  const { states } = useStore()
  const isAuth = states.User.isAuth
  const user: userType = states.User.user

  if(isAuth) return (
    <AccordionContainer
      title={user.name}
      value='user'
    >
      <UserSide {...user} />
    </AccordionContainer>
  )

  return (
    <div>
      <AccordionContainer
        title='Login'
        value='login'
      >
        <LoginForm />
      </AccordionContainer>
      <AccordionContainer
        title='Register'
        value='register'
      >
        <RegisterForm />
      </AccordionContainer>
    </div>
  )
}

export default SideAuth