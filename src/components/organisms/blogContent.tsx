import React from 'react'
import BlogCard from '../atoms/blogCard'
import ContainerBox from '../atoms/containerBox'
import BlogCardList from '../molecules/blogCardList'

const BlogContent = () => {
  return (
    <ContainerBox className="flex flex-wrap w-full h-full justify-evenly items-center overflow-hidden">
      <BlogCardList/>
    </ContainerBox>
  )
}

export default BlogContent