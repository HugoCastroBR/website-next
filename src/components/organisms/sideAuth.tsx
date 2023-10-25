import React from 'react'
import AccordionContainer from '../molecules/accordionContainer'
import LoginForm from '../molecules/LoginForm'
import CustomText from '../atoms/customText'
import RegisterForm from '../molecules/RegisterForm'





const SideAuth = () => {
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