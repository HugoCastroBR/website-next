'use client'
import React, { useEffect } from 'react'
import CustomInput from '../atoms/customInput'
import { Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { nameValidator, emailValidator, passwordValidator} from '@/utils/formHandlers'
import useStore from '@/hooks/useStore'
import { getUsers, patchUser, postUser, postUserType } from '@/api'
import { UserCancelEditItem, UserSetIsLoading } from '@/store/actions'

const InitialValues = {
  name: '',
  email: '',
  password: '',
}
interface UserFormProps {
  onClose: () => void
}
const UserForm = ({
  onClose
}: UserFormProps) => {

  const { states, dispatch } = useStore()
  const [isEdit, setIsEdit] = React.useState(false)

  const form = useForm({
    validateInputOnChange: true,
    initialValues: InitialValues,
    validate: {
      name: nameValidator,
      email: emailValidator,
      password: passwordValidator,
    },
  })

  useEffect(()=>{
    if(!!Object.entries(states.Users.editItem).length){
      setIsEdit(true)
      form.setValues({
        name: states.Users.editItem.name,
        email: states.Users.editItem.email,
        password: states.Users.editItem.password || ''
      })
      console.log(form.values)
    }
  },[])

  const handlerSubmit = async (newUser: postUserType) => {
    try {
      const data: postUserType = {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      }
      await postUser(data)
      await getUsers(1);
      dispatch(UserSetIsLoading(true))
      onClose()

    } catch (error) {
      console.log(error)
    }
  }

  const handlerEdit = async (newUser: postUserType) => {
    try {
      const data: postUserType = {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      }
      await patchUser({
        id: states.Users.editItem.id,
        data: data
      })
      dispatch(UserSetIsLoading(true))
      if (onClose) onClose()

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form 
      className='flex flex-col w-full'
      onReset={form.onReset}
      onSubmit={form.onSubmit((form) => {
        if(isEdit){
          handlerEdit(form)
          console.log("edit")
        }else{
          handlerSubmit(form)
          console.log("created")
        }
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
          onClick={() => {
            onClose()
            dispatch(UserCancelEditItem())
          }}
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