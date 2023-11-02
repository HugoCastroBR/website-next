import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import ListBlogItems from '../molecules/listBlogItems'
import BlogSeeMore from '../molecules/blogSeeMore'

const BlogSection = () => {
  return (
    <ContainerBox id="blog" className='flex flex-col justify-center items-center'>
      <div className='w-full flex justify-start'>
        <CustomText
          className='text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
          text='Blog' />
      </div>
      <ListBlogItems />
      <div className='flex justify-center items-center w-1/2 h-14 mt-4'>
        <BlogSeeMore />
      </div>
    </ContainerBox>
  )
}

export default BlogSection