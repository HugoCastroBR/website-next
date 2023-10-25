/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import CustomInput from '../atoms/customInput'
import { Button, em } from '@mantine/core'
import { emailValidator, passwordValidator } from '@/utils/formHandlers'

const LoginForm = () => {



  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

  const [ emailValue, setEmailValue ] = React.useState<string | null>('')
  const [ emailError, setEmailError ] = React.useState<string | false>(false) 
  const [ startedMailValidation, setStartedMailValidation ] = React.useState<boolean>(false)
  const [ passwordValue, setPasswordValue ] = React.useState<string | null>('')
  const [ passwordError, setPasswordError ] = React.useState<string | false>(false)
  const [ startedPasswordValidation, setStartedPasswordValidation ] = React.useState<boolean>(false)
  const [ isAllValid, setIsAllValid ] = React.useState<boolean>(false)

  useEffect(() => {
    if(startedMailValidation) setEmailError(emailValidator(emailValue))
  }, [emailValue, startedMailValidation])

  useEffect(() => {
    if(startedPasswordValidation) setPasswordError(passwordValidator(passwordValue))
  }, [passwordValue, startedPasswordValidation])


  const verifyIfIsAllValid = () => {
    if(startedPasswordValidation){
      if(startedPasswordValidation){
        if(emailError === false && passwordError === false){
          setIsAllValid(true)
        }
        else{
          setIsAllValid(false)
        }
      }else{
        setIsAllValid(false)
      }
    }else{
      setIsAllValid(false)
    }
  }

  return (
    <form className='flex flex-col'>
      <CustomInput
        type='email'
        id='email'
        label='Email:'
        placeholder='Email'
        error={emailError}
        onChange={(value) => {
          setEmailValue(value)
          verifyIfIsAllValid()
        }}
        onClick={() => setStartedMailValidation(true)}
      />
      <CustomInput
        type={isPasswordVisible ? 'text' : 'password'}
        id='password'
        label='Password:'
        placeholder='Password'
        rightSectionPointerEvents="all"
        onChange={(value) => {
          setPasswordValue(value)
          verifyIfIsAllValid()
        }}
        error={passwordError}
        onClick={() => setStartedPasswordValidation(true)}
        right={
          <span className={`
          i-mdi-eye text-2xl cursor-pointer
          text-gray-700 dark:text-gray-300
          hover:text-blue-600 
          transition duration-500 ease-in-out
          ${isPasswordVisible && 'i-mdi-eye-off'}
          `}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
          </span>
        }
      />
      <Button
      type='submit'
      className='mt-2'
      disabled={!isAllValid}
      >
        Register
      </Button>
    </form> 
  )
}

export default LoginForm