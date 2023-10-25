/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import CustomInput from '../atoms/customInput'
import { Button, em } from '@mantine/core'
import { emailValidator, passwordValidator } from '@/utils/formHandlers'
import { useForm } from "@mantine/form"
import useStore from '@/hooks/useStore'

const LoginInitialValues = {
  email: '',
  password: ''
}
const LoginForm = () => {

  const form = useForm({
    validateInputOnChange: true,
    initialValues: LoginInitialValues,
    validate:{
      email: emailValidator,
      password: passwordValidator
    },
  })
  const { states } = useStore()

  useEffect(() => {
    form.clearErrors()
  }, [states.App.sideMenuIsOpen])

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

  interface handleFormSubmitProps {
    email: string
    password: string
  }
  const handleFormSubmit = ({
    email,
    password
  }:handleFormSubmitProps) => {
    console.log(email, password)
  }

  return (
    <form 
    className='flex flex-col'
    onReset={form.onReset}
    onSubmit={form.onSubmit((form) => {
      handleFormSubmit({
        email: form.email,
        password: form.password
      })
    })}
    >
      <CustomInput
        type='email'
        id='email'
        label='Email:'
        placeholder='Email'
        {...form.getInputProps('email')}
      />
      <CustomInput
        type={isPasswordVisible ? 'text' : 'password'}
        id='password'
        label='Password:'
        placeholder='Password'
        {...form.getInputProps('password')}
        rightSectionPointerEvents="all"
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
      disabled={!form.isValid()}
      >
        Login
      </Button>
    </form> 
  )
}

export default LoginForm