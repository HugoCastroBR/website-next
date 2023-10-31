'use client'

import React, { useEffect } from 'react'
import AccordionContainer from '../molecules/accordionContainer'
import LoginForm from '../molecules/LoginForm'
import RegisterForm from '../molecules/RegisterForm'
import UserSide from '../molecules/userSide'
import useStore from '@/hooks/useStore'
import { getUser } from '@/api'



const SideAuth = () => {

  const { states } = useStore()
  const isAuth = states.Auth.isAuth

  const [userInfos, setUserInfos] = React.useState<getUser>({
    name: '',
    email: '',
    id: 0,
    isAdmin: false
  })

  useEffect(() => {
    setUserInfos(states.Auth.user)
  }, [states.Auth.user])

  if (isAuth) return (
    <AccordionContainer
      title='Profile'
      value='user'
    >
      <UserSide {...userInfos} />
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