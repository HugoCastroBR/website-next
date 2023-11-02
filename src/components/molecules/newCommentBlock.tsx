'use client'
import React from 'react'
import { Avatar, Blockquote, Button, Divider } from '@mantine/core'
import CustomText from '../atoms/customText'
import { getOnlyInitials } from '@/utils/textHandlers';





//TODO REFRESH COMMENTS WHEN ADDED A NEW COMMENT





export interface newCommentProps {
  postId:number;
  authorName:string;
  content:string;
}
interface InputCommentProps{
  postId:number;
  authorName:string;
  onCommentSubmit: ({
    postId,
    authorName,
    content
  }:newCommentProps) => void
}

const NewCommentBlock = ({
  postId,
  authorName,
  onCommentSubmit
}:InputCommentProps) => {

  const [isCommentValid, setIsCommentValid] = React.useState(false)

  return (
    <div>
      <Blockquote 
        color="rgba(0, 0, 0, 1)"
        radius={0} iconSize={20} mt="sm"
        p={4} pb={6}
      >
        <div className="flex my-2 items-center">
          <Avatar size='md'>{getOnlyInitials(authorName)}</Avatar>
          <CustomText
            className="ml-2 text-base font-semibold text-gray-800 dark:text-gray-300"
            text={authorName}
          />
        </div>
        <form
          className="flex flex-col w-full items-end dark:text-gray-300 text-gray-900"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const textInput = e.currentTarget[0] as HTMLTextAreaElement;
            const content = (e.currentTarget[0] as HTMLTextAreaElement)
            ?.value || '';
            setIsCommentValid(false)

            onCommentSubmit({
              postId,
              authorName,
              content: content
            })

            textInput.value = ''
          }}
        >
          <textarea
            className="w-full p-2 text-sm font-medium text-gray-800 dark:text-gray-300
            bg-gray-100 dark:bg-gray-700 rounded-md resize-none "
            placeholder="Write a comment..."
            onChange={(e) => {
              if(e){
                setIsCommentValid(e.currentTarget.value.length >= 3)
              
              }
            }}
          />
          <Button
            className={`
            mt-2 ${
              !isCommentValid ? 'cursor-not-allowed bg-gray-400 dark:bg-gray-500 text-gray-700 dark:text-gray-300 ' : 
              'cursor-pointer bg-blue-500 hover:bg-blue-700 '}
              
              `}
            color="blue"
            type="submit"
            disabled={!isCommentValid}
          >
            Submit
          </Button>
        </form>
      </Blockquote>
    </div>
  )
}

export default NewCommentBlock