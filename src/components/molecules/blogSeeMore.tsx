import Link from 'next/link'
import React from 'react'
import CustomText from '../atoms/customText'

const BlogSeeMore = () => {
  return (
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
  )
}

export default BlogSeeMore