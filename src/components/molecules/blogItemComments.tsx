import React from 'react'
import CustomText from '../atoms/customText'
import { Avatar, Blockquote, Divider, Group, Pagination } from '@mantine/core'
import CommentBlock from './commentBlock';
import NewCommentBlock from './newCommentBlock';
import { commentType } from '@/types';

interface Props {
  totalComments: number
  comments: commentType[]
}
const BlogItemComments = (
  {
    totalComments,
    comments
  }: Props
) => {
  return (
    <div className="">
      <Divider my="sm" />
      <div>
      <CustomText
        className="text-lg font-bold  text-gray-800 dark:text-gray-300"
        text='Comments:'
      />
      </div>
      <div className="p-2">
        <NewCommentBlock
          authorName='John Doe'
          id={1}
          key={3}
        />
        {comments.map((comment,index) => {
          return(
            <CommentBlock
              authorName={comment.authorName}
              createdAt={new Date(comment.createdAt).toLocaleString().replace(',',' -')}
              id={comment.id}
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