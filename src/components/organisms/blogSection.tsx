import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import ListBlogItems from '../molecules/listBlogItems'
import SeeMore from '../molecules/seeMore'

const BlogSection = () => {
  return (
    <ContainerBox id="blog" className='flex flex-col justify-center items-center'>
      <div className='w-full flex justify-start'>
      <CustomText
        className='text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
        text='Blog'/>
      </div>
      <ListBlogItems/>
      <SeeMore/>
    </ContainerBox>
  )
}

export default BlogSection