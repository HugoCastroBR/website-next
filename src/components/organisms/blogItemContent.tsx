import { postType } from '@/types';
import React from 'react'
import ContainerBox from '../atoms/containerBox';
import BlogItemHeader from '../molecules/blogItemHeader';
import BlogItemComments from '../molecules/blogItemComments';

interface BlogItemContentProps {
  id:number;
}

const BlogItemContent = ({id}:BlogItemContentProps) => {

  const Post:postType = {
    id:1,
    title:'Hello World',
    authorId:1,
    content:'Lorem ipsum dolor sit amet conse',
    createdAt:'2021-10-10',
    updatedAt:'2021-10-10',
    authorName:'John Doe',
    subTitle:'Lorem ipsum dolor sit amet conse',
    totalComments:13,
  }

  return (
    <>
      <ContainerBox className='flex flex-col w-full h-full min-h-screen'>
        <div className='w-full h-full p-4'>
          <BlogItemHeader post={Post}/>
          <div className='my-2 min-h-screen'>
            {Post.content}
          </div>
          <BlogItemComments/>
        </div>
      </ContainerBox>
    </>
  )
}

export default BlogItemContent