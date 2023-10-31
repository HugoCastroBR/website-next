'use client'
import React, { useEffect } from 'react'
import CustomInput from '../atoms/customInput'
import { Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { emailValidator, nameValidator, passwordValidator } from '@/utils/formHandlers'
import useStore from '@/hooks/useStore'
import { register } from '@/api'
import { AppHandlerNotification, SetIsAuth, SetUser } from '@/store/actions'
import CustomText from '../atoms/customText'


const RegisterInitialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

interface RegisterFormProps {
  isEdit?: boolean
  editData?: any
}
const RegisterForm = ({
  isEdit,
  editData,
}: RegisterFormProps) => {

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false)



  const form = useForm({
    validateInputOnChange: true,
    initialValues: RegisterInitialValues,
    validate: {
      name: nameValidator,
      email: emailValidator,
      password: passwordValidator,
      confirmPassword: passwordValidator
    }
  })

  const { states, dispatch } = useStore()

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states.App.sideMenuIsOpen])

  interface handleFormSubmitProps {
    name: string
    email: string
    password: string
    confirmPassword: string
  }
  const handleFormSubmit = ({
    name,
    email,
    password,
    confirmPassword
  }: handleFormSubmitProps) => {
    if (password !== confirmPassword) {
      form.setErrors({
        confirmPassword: 'Passwords do not match'
      })
      return
    }
    handlerRegister()
  }

  const handlerRegister = async () => {
    try {
      const res = await register({
        name: form.values.name,
        email: form.values.email,
        password: form.values.password,
        confirmPassword: form.values.confirmPassword
      })
      localStorage.setItem('token', res.data.token)
      dispatch(SetIsAuth(true))
      dispatch(SetUser(res.data.user))
    } catch (error) {
      dispatch(AppHandlerNotification('Email already in use', {
        notificationType: 'error',
      }))
    }
  }

  return (
    <form
      className='flex flex-col justify-between w-full h-full'
      onReset={form.onReset}
      onSubmit={form.onSubmit((form) => {
        handleFormSubmit({
          name: form.name,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword
        })
      })}
    >
      <CustomInput
        type='text'
        id='name'
        label='Name:'
        placeholder='Name'
        {...form.getInputProps('name')}
        onBlur={(value) => console.log(value)}
      />
      <CustomInput
        type='email'
        id='email'
        label='Email:'
        placeholder='Email'
        {...form.getInputProps('email')}
        onBlur={(value) => console.log(value)}
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
      <CustomInput
        type={isConfirmPasswordVisible ? 'text' : 'password'}
        id='confirmPassword'
        label='Confirm Password:'
        placeholder='Confirm Password'
        {...form.getInputProps('confirmPassword')}
        rightSectionPointerEvents="all"
        right={
          <span className={`
          i-mdi-eye text-2xl cursor-pointer
          text-gray-700 dark:text-gray-300
          hover:text-blue-600 
          transition duration-500 ease-in-out
          ${isConfirmPasswordVisible && 'i-mdi-eye-off'}
          `}
            onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
          >
          </span>
        }
      />
      <Button
        type='submit'
        className='mt-2'
        disabled={!form.isValid()}
      >
        {isEdit ? 'Update' : 'Register'}
      </Button>
    </form>
  )
}

export default RegisterForm