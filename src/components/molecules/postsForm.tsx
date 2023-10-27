'use client'
import React, {useEffect} from 'react'
import CustomInput from '../atoms/customInput'
import AdminRichTextEditor from './richTextEditor'
import { Button, Switch } from '@mantine/core'
import { useForm } from '@mantine/form'
import { titleValidator, subTitleValidator } from '@/utils/formHandlers'
import CustomText from '../atoms/customText'
import {  getPosts, patchPost, postPost, postPostType } from '@/api'
import useStore from '@/hooks/useStore'
import { PostCancelEditItem, PostSetIsLoading } from '@/store/actions'



const InitialValues: postPostType = {
  title: '',
  subtitle: '',
  imageUrl: '',
  published: false,
  content: ''
}

interface PostsFormProps {
  onClose: () => void
}
const PostsForm = ({
  onClose,
}: PostsFormProps) => {

  const [RichTextValue, setRichTextValue] = React.useState('')
  const { states, dispatch } = useStore()
  const [isEdit, setIsEdit] = React.useState(false)



  // useEffect(()=>{
  //   console.log(isEdit)
  // },[isEdit])

  const form = useForm({
    validateInputOnChange: true,
    initialValues: InitialValues,
    validate: {
      title: titleValidator,
      subtitle: subTitleValidator,
    },
  })

  useEffect(()=>{
    if(!!Object.entries(states.Post.editItem).length){
      setIsEdit(true)
      form.setValues({
        title: states.Post.editItem.title,
        subtitle: states.Post.editItem.subtitle,
        imageUrl: states.Post.editItem.imageUrl || '',
        published: states.Post.editItem.published,
        content: states.Post.editItem.content
      
      })
      console.log(form.values)
    }
  },[])

  const handlerSubmit = async (newPost: postPostType) => {
    try {
      const data: postPostType = {
        title: newPost.title,
        subtitle: newPost.subtitle,
        imageUrl: newPost.imageUrl || '',
        published: newPost.published,
        content: RichTextValue
      }
      await postPost(data)
      await getPosts(1);
      dispatch(PostSetIsLoading(true))
      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  const handlerEdit = async (newPost: postPostType) => {
    try {
      const data: postPostType = {
        title: newPost.title,
        subtitle: newPost.subtitle,
        imageUrl: newPost.imageUrl || '',
        published: newPost.published,
        content: RichTextValue
      }
      await patchPost({
        id: states.Post.editItem.id,
        data: data
      })
      dispatch(PostSetIsLoading(true))
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
          id='title'
          label='Title:'
          placeholder='Title'
          defaultValue={isEdit ? states.Post.editItem.title : ''}
          {...form.getInputProps('title')}
        />
      </div>
      <div className="mt-2">
        <CustomInput
          type='text'
          id='subtitle'
          label='Subtitle:'
          placeholder='Subtitle'
          defaultValue={isEdit ? states.Post.editItem.subtitle : ''}
          {...form.getInputProps('subtitle')}
        />
      </div>
      <div className="mt-2">
        <CustomInput
          type='text'
          id='imageUrl'
          label='Image Link (optional):'
          placeholder='Image Link'
          defaultValue={isEdit ? states.Post.editItem.imageUrl ||'' : ''}
          {...form.getInputProps('imageUrl')}
        />
      </div>
      <div className="mt-2 flex items-center">
        <label>
          <CustomText
            text='Is Published:'
            className='text-sm font-medium mr-2'
          />
        </label>
        <Switch
          defaultChecked={false}
          size="sm"
          {...form.getInputProps('published')}
        />
      </div>
      <div className="mt-2">
        <AdminRichTextEditor
          label='Content:'
          onChange={setRichTextValue}
          defaultValue={isEdit ? states.Post.editItem.content : ''}
        />
      </div>
      <div className="mt-2 pt-4 flex items-end w-full justify-end">
        <Button
          color='red'
          className='ml-2'
          onClick={() => {
            onClose()
            dispatch(PostCancelEditItem())
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

export default PostsForm