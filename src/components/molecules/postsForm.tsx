'use client'
import React from 'react'
import CustomInput from '../atoms/customInput'
import AdminRichTextEditor from './richTextEditor'
import { Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import {titleValidator, subTitleValidator} from '@/utils/formHandlers'
import { postType } from '@/types'

const InitialValues = {
  title: '',
  subtitle: '',
}

interface PostsFormProps {
  isEdit?: boolean
  editData?: postType
}
const PostsForm = ({
  isEdit,
  editData,
}: PostsFormProps) => {

  const HandlerCloseModal = () => {
    // TODO: Close modal
    // TODO: Clear form
  }

  const form = useForm({
    validateInputOnChange: true,
    initialValues: InitialValues,
    validate: {
      title: titleValidator,
      subtitle: subTitleValidator,
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
          id='title'
          label='Title:'
          placeholder='Title'
          {...form.getInputProps('title')}
        />
      </div>
      <div className="mt-2">
        <CustomInput
          type='text'
          id='subtitle'
          label='Subtitle:'
          placeholder='Subtitle'
          {...form.getInputProps('subtitle')}
        />
      </div>
      <div className="mt-2">
        <AdminRichTextEditor
          label='Content:'
          onChange={(value) => console.log(value)}
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

export default PostsForm