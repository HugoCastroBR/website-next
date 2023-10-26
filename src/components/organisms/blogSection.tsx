import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import ListBlogItems from '../molecules/listBlogItems'
import SeeMore from '../molecules/seeMore'
import Link from 'next/link'

const BlogSection = () => {
  return (
    <ContainerBox id="blog" className='flex flex-col justify-center items-center'>
      <div className='w-full flex justify-start'>
      <CustomText
        className='text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
        text='Blog'/>
      </div>
      <ListBlogItems/>
      <div className='flex justify-center items-center w-1/2 h-14 mt-4'>
        <Link href='/en/blog' className=' min-w-full h-5/6 bg-blue-600 rounded-md
          shadow-md drop-shadow-md shadow-gray-300 dark:shadow-gray-800
          dark:drop-shadow-gray-800 drop-shadow-gray-800
          hover:shadow-lg hover:drop-shadow-lg hover:shadow-gray-600
          dark:hover:shadow-gray-900 dark:hover:drop-shadow-gray-900
          hover:scale-105 transition duration-500 ease-in-out text-center
          align-middle pt-2 pb-4'>
          <CustomText
            text={'See More'}
            className='text-2xl font-sans font-semibold text-white'
          />
        </Link>
      </div>
    </ContainerBox>
  )
}

export default BlogSection