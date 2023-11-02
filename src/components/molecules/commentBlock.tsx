'use client'
import React from 'react'
import { Avatar, Blockquote, Button, Tooltip } from '@mantine/core'
import CustomText from '../atoms/customText'
import { getOnlyInitials } from '@/utils/textHandlers';
import useStore from '@/hooks/useStore';
import { CommentSetIsLoading } from '@/store/actions';
import { deleteComment } from '@/api';

interface CommentProps {
  authorName: string;
  text: string;
  createdAt: string;
  commentId: number;
  authorId: number;
}
const CommentBlock = ({
  authorName,
  text,
  createdAt,
  commentId,
  authorId
}: CommentProps
) => {

  const {states,dispatch} = useStore()

  const HandlerDeleteComment = async () => {
    dispatch(CommentSetIsLoading(true))
    try {
      if(authorId === states.Auth.user.id){
        await deleteComment(commentId)
      }
    } catch (error) {
      console.log(error)
    }
    dispatch(CommentSetIsLoading(false))
  }

  return (
    <Blockquote color="rgba(0, 0, 0, 1)"
      radius={0} iconSize={20} mt="sm"
      p={4} pb={6}
    >
      <div className='flex justify-between items-start'>
        <div className="flex flex-col ml-2">
          <div className="flex my-2 items-center">
            <Avatar size='md'>{getOnlyInitials(authorName)}</Avatar>
            <CustomText
              className="ml-2 text-base font-semibold text-gray-800 dark:text-gray-300"
              text={authorName}
            />
          </div>
          <CustomText
            text={text}
            className='text-sm font-medium text-gray-800 dark:text-gray-300'
          />
          <CustomText
            text={`Posted at ${createdAt}`}
            className='text-xs italic font-normal mt-2 text-gray-700 dark:text-gray-400'
          />
        </div>
        {authorId === states.Auth.user.id && 
          <div
            className='m-2 w-6 h-6 
            dark:hover:bg-gray-700 hover:bg-slate-400 hover:bg-opacity-40 rounded-sm
              transition duration-300 ease-in-out
              '>
            <Tooltip label='Remove Comment'>
              <span
                className='
                i-mdi-delete-outline text-2xl text-red-500 cursor-pointer'
                onClick={HandlerDeleteComment}
              ></span>
            </Tooltip>
          </div>
        }
      </div>
    </Blockquote>
  )
}

export default CommentBlock