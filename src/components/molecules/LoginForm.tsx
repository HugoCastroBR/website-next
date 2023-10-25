'use client'
import React from 'react'
import CustomInput from '../atoms/customInput'
import { Button } from '@mantine/core'

const LoginForm = () => {

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

  return (
    <form className='flex flex-col'>
      <CustomInput
        type='email'
        id='email'
        label='Email:'
        placeholder='Email'
        onBlur={(value) => console.log(value)}
      />
      <CustomInput
        type={isPasswordVisible ? 'text' : 'password'}
        id='password'
        label='Password:'
        placeholder='Password'
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
      >
        Register
      </Button>
    </form> 
  )
}

export default LoginForm