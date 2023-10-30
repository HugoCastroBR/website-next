'use client'
import React, {useEffect} from 'react'
import CustomInput from '../atoms/customInput'
import AdminRichTextEditor from './richTextEditor'
import { Button, Switch } from '@mantine/core'
import { useForm } from '@mantine/form'
import { titleValidator, subTitleValidator, contentValidator } from '@/utils/formHandlers'
import CustomText from '../atoms/customText'
import {  getComments, patchComment, postCommentType,patchCommentType, getOneCommentReq } from '@/api'
import useStore from '@/hooks/useStore'
import { CommentCancelEditItem, CommentSetIsLoading } from '@/store/actions'



const InitialValues: patchCommentType = {
  content: '',
  id: 0
}

interface CommentsFormProps {
  onClose: (editMode?:boolean) => void
}
const CommentsForm = ({
  onClose,
}: CommentsFormProps) => {

  const { states, dispatch } = useStore()
  const [isEdit, setIsEdit] = React.useState(false)



  // useEffect(()=>{
  //   console.log(isEdit)
  // },[isEdit])

  const form = useForm({
    validateInputOnChange: true,
    initialValues: InitialValues,
    validate: {
      content: contentValidator,
    },
  })

  useEffect(()=>{
    if(!!Object.entries(states.Comment.editItem).length){
      setIsEdit(true)
      form.setValues({
        content: states.Comment.editItem.content
      
      })
      
    }
    console.log('aqui')
    console.log(states.Comment.editItem)
  },[])



  const handlerEdit = async (newComment: patchCommentType) => {
    try {
      await patchComment({
        id: states.Comment.editItem.id,
        content: newComment.content
      })
      dispatch(CommentSetIsLoading(true))
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
        if(isEdit){
          handlerEdit(form)
          console.log("edit")
        }
      })}
    >
      <div className="mt-2">
        <CustomInput
          type='text'
          id='content'
          label='Content:'
          placeholder='Content'
          defaultValue={isEdit ? states.Comment.editItem.content : ''}
          {...form.getInputProps('content')}
        />
      </div>
      <div className="mt-2 pt-4 flex items-end w-full justify-end">
        <Button
          color='red'
          className='ml-2'
          onClick={() => {
            onClose(isEdit)
            dispatch(CommentCancelEditItem())
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

export default CommentsForm