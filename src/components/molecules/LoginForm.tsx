/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import CustomInput from '../atoms/customInput'
import { Button } from '@mantine/core'
import { emailValidator, passwordValidator } from '@/utils/formHandlers'
import { useForm } from "@mantine/form"
import useStore from '@/hooks/useStore'
import { AppHandlerNotification, SetIsAuth, SetUser } from '@/store/actions'
import { login, verifyApiHealth } from '@/api'

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
  const { states, dispatch } = useStore()

  useEffect(() => {
    form.clearErrors()
  }, [states.App.sideMenuIsOpen])

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

  interface handleFormSubmitProps {
    email: string
    password: string
  }

  const getApiHealth = async () => {
    try {
      const res = await verifyApiHealth()
      
      if(res.status !== 'ok'){
        throw new Error('Api is down')
      } 
    } catch (error) {
      dispatch(AppHandlerNotification('500: Server is offline',{
        notificationType: 'error',
      }))
    }
  }
  const handleFormSubmit = async ({
    email,
    password
  }:handleFormSubmitProps) => {
    try {
      const res = await login(email, password)
      await localStorage.setItem('token', res.data.token)
      await dispatch(AppHandlerNotification('Login Success',{
        notificationType: 'success',
      }))
      await dispatch(SetIsAuth(true))
      await dispatch(SetUser(res.data.user))
    } catch (error) {
      dispatch(SetIsAuth(false))
      dispatch(AppHandlerNotification('Invalid Email or Password',{
        notificationType: 'error',
      }))
      getApiHealth()
    }
    // dispatch(SetIsAuth(true))
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
      className={`
      mt-4 
      ${form.isValid() ? 'bg-blue-500 hover:bg-blue-700' : 
      'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'}
      transition duration-300 ease-in-out
      `}
      disabled={!form.isValid()}
      >
        Login
      </Button>
    </form> 
  )
}

export default LoginForm