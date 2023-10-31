import React from 'react'
import CustomText from '../atoms/customText'
import {  Blockquote, Divider, Loader } from '@mantine/core'
import CommentBlock from './commentBlock';
import NewCommentBlock, { newCommentProps } from './newCommentBlock';
import { commentType } from '@/types';

interface Props {
  totalComments: number
  comments: commentType[]
  isLoading: boolean
  postId: number
  isAuth: boolean,
  authorName: string,
  newComment: ({
    postId,
    authorName,
    content
  }: newCommentProps) => void
}
const BlogItemComments = (
  {
    totalComments,
    comments,
    isLoading,
    postId,
    newComment,
    isAuth,
    authorName
  }: Props
) => {

  if (isLoading) {
    return (
      <div className='flex justify-center items-start h-96'>
        <Loader />
      </div>
    )
  }


  return (
    <div className="">
      <Divider my="sm" />
      <div className='flex flex-col -mb-2'>
        <CustomText
          className="text-lg font-bold  text-gray-800 dark:text-gray-300"
          text='Comments:'
        />
        {totalComments === 0 ?
          <div>
            <CustomText
              className="text-md italic my-2 font-normal  text-gray-800 dark:text-gray-300"
              text='No comments yet'
            />
            <span className="i-mdi-emoticon-sad-outline text-2xl -mb-1 ml-2"></span>
          </div>
          :
          <CustomText
            className="text-sm italic -mt-1 font-normal  text-gray-800 dark:text-gray-300"
            text={`Total: ${totalComments}`}
          />
        }

      </div>
      <div className="p-2">
        {isAuth ?
          <NewCommentBlock
            authorName={authorName}
            postId={postId}
            key={3}
            onCommentSubmit={
              ({
                postId,
                authorName,
                content
              }) => {
                newComment({
                  postId,
                  authorName,
                  content
                })
              }
            }
          />
          :
          <Blockquote
            color="rgba(0, 0, 0, 1)"
            radius={0} iconSize={20} mt="sm"
            p={4} py={14}
          >
            <CustomText
              className="ml-2 text-lg font-semibold text-gray-800 dark:text-gray-300"
              text='You must be logged in to comment'
            />
          </Blockquote>
        }
        {comments.map((comment, index) => {
          return (
            <CommentBlock
              authorName={comment.authorName}
              createdAt={new Date(comment.createdAt).toLocaleString().replace(',', ' -')}
              text={comment.content}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BlogItemComments