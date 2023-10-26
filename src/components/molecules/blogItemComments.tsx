import React from 'react'
import CustomText from '../atoms/customText'
import { Avatar, Blockquote, Divider, Group, Pagination } from '@mantine/core'
import CommentBlock from './commentBlock';
import NewCommentBlock from './newCommentBlock';

const BlogItemComments = () => {
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
        <CommentBlock
          authorName='John Doe'
          createdAt='2021-10-10'
          id={1}
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          key={1}
        />
        <CommentBlock
          authorName='John Doe'
          createdAt='2021-10-10'
          id={1}
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          key={2}
        />
      </div>
      <div className='flex justify-end p-2'>
        <Pagination.Root total={10} onChange={
          (currentPage) => console.log(currentPage)
        }>
          <Group gap={2} justify="center">
            <Pagination.Previous />
            <Pagination.Items 
            />
            <Pagination.Next
            />
          </Group>
      </Pagination.Root>
      </div>
    </div>
  )
}

export default BlogItemComments