'use client'
import React from 'react'
import CustomInput from '../atoms/customInput'
import { Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { nameValidator, emailValidator, passwordValidator} from '@/utils/formHandlers'
import { userType } from '@/types'

const InitialValues = {
  name: '',
  email: '',
  password: '',
}
interface UserFormProps {
  isEdit?: boolean
  editData?: userType
}
const UserForm = ({
  isEdit,
  editData,
}: UserFormProps) => {

  const HandlerCloseModal = () => {
    // TODO: Close modal
    // TODO: Clear form
  }

  const form = useForm({
    validateInputOnChange: true,
    initialValues: InitialValues,
    validate: {
      name: nameValidator,
      email: emailValidator,
      password: passwordValidator,
    },
  })

  return (
    <form 
      className='flex flex-col w-full'
      onReset={form.onReset}
      onSubmit={form.onSubmit((form) => {
        console.log(form)
      })}
    >
      <div className="mt-2">
        <CustomInput
          type='text'
          id='name'
          label='Name:'
          placeholder='Name'
          {...form.getInputProps('name')}
        />
      </div>
      <div className="mt-2">
        <CustomInput
          type='email'
          id='email'
          label='Email:'
          placeholder='Email'
          {...form.getInputProps('email')}
        />
      </div>
      <div className="mt-2">
        <CustomInput
          type='password'
          id='password'
          label='Password:'
          placeholder='Password'
          {...form.getInputProps('password')}
        />
      </div>
      <div className="mt-2 pt-4 flex items-end w-full justify-end">
        <Button 
          color='red' 
          className='ml-2' 
        >
          Cancel
        </Button>
        <Button 
          className='ml-2' 
          disabled={!form.isValid()}
          type='submit'
        >
          Submit
        </Button>
      </div>
      
    </form>
  )
}

export default UserForm