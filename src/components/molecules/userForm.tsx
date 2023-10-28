'use client'
import React, { useEffect } from 'react'
import CustomInput from '../atoms/customInput'
import { Button, Switch } from '@mantine/core'
import { useForm } from '@mantine/form'
import { nameValidator, emailValidator, passwordValidator } from '@/utils/formHandlers'
import useStore from '@/hooks/useStore'
import { getUsers, patchUser, postUser, postUserType } from '@/api'
import { UserCancelEditItem, UserSetIsLoading } from '@/store/actions'
import CustomText from '../atoms/customText'

const InitialValues = {
  name: '',
  email: '',
  password: '',
  isAdmin: false
}
interface UserFormProps {
  onClose: (editMode?: boolean) => void
}
const UserForm = ({
  onClose
}: UserFormProps) => {

  const { states, dispatch } = useStore()
  const [isEdit, setIsEdit] = React.useState(false)
  const [adminChanged, setAdminChanged] = React.useState(false)
  const [passwordChanged, setPasswordChanged] = React.useState(false)
  const [newPassword, setNewPassword] = React.useState('')

  const form = useForm({
    validateInputOnChange: true,
    initialValues: InitialValues,
    validate: {
      name: nameValidator,
      email: emailValidator,
      password: passwordValidator,
    },
  })

  useEffect(() => {
    if (!!Object.entries(states.Users.editItem).length) {
      setIsEdit(true)
      form.setValues({
        name: states.Users.editItem.name,
        email: states.Users.editItem.email,
        password: states.Users.editItem.password || ''
      })
      console.log(form.values)
    }
  }, [])

  const handlerSubmit = async (newUser: postUserType) => {
    try {
      const data: postUserType = {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        isAdmin: newUser.isAdmin
      }
      await postUser(data)
      await getUsers(1);
      dispatch(UserSetIsLoading(true))
      onClose(isEdit)

    } catch (error) {
      console.log(error)
    }
  }

  const handlerEdit = async (newUser: postUserType) => {

    try {
      if (adminChanged) {
        const data: postUserType = {
          name: newUser.name,
          email: newUser.email,
          password: newPassword,
          isAdmin: newUser.isAdmin
        }
        if(!passwordChanged){
          delete data.password
        }
        console.log(data)
        await patchUser({
          id: states.Users.editItem.id,
          data: data
        })
      } else {
        const data: postUserType = {
          name: newUser.name,
          email: newUser.email,
          password: newPassword,
        }
        if(!passwordChanged){
          delete data.password
        }
        console.log(data)
        await patchUser({
          id: states.Users.editItem.id,
          data: data
        })
      }

      dispatch(UserSetIsLoading(true))
      if (onClose) onClose(isEdit)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form
      className='flex flex-col w-full'
      onReset={form.onReset}
      onSubmit={form.onSubmit((form) => {
        if (isEdit) {
          handlerEdit(form)
          console.log("edit")
        } else {
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
          defaultValue={isEdit ? states.Users.editItem.name : ''}
          {...form.getInputProps('name')}
        />
      </div>
      <div className="mt-2">
        <CustomInput
          type='email'
          id='email'
          label='Email:'
          placeholder='Email'
          defaultValue={isEdit ? states.Users.editItem.email : ''}
          {...form.getInputProps('email')}
        />
      </div>
      <div className="mt-2">
        {isEdit? 
          <CustomInput
          type='password'
          id='password'
          label='Password:'
          placeholder='Password'
          onChange={(text) => {
            setPasswordChanged(true)
            setNewPassword(text)
          }}
      />
        :
        <CustomInput
          type='password'
          id='password'
          label='Password:'
          placeholder='Password'
          {...form.getInputProps('password')}
        />
        }
      </div>
      <div className="mt-2 flex items-center">
        <label>
          <CustomText
            text='Is Admin:'
            className='text-sm font-medium mr-2'
          />
        </label>
        <Switch
          onClick={() => {
            setAdminChanged(true)
          }
          }
          defaultChecked={states.Users.editItem.isAdmin}
          size="sm"
          {...form.getInputProps('isAdmin')}
        />
      </div>
      <div className="mt-2 pt-4 flex items-end w-full justify-end">
        <Button
          color='red'
          className='ml-2'
          onClick={() => {
            onClose(isEdit)
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