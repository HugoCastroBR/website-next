/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Avatar } from '@mantine/core';
import CustomText from './customText';
import { getOnlyInitials, isURLValid } from '@/utils/textHandlers';

export interface BlogCardProps {
  author: string
  title: string;
  subtitle: string;
  date: string;
  time: string;
  imageUrl: string;
}

const BlogCard = ({
  author,
  title,
  subtitle,
  date,
  time,
  imageUrl
}: BlogCardProps
) => {



  const NoImagePlaceHolder = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full sm:h-full h-64 bg-gray-300 dark:bg-gray-600">
        <span className="i-mdi-image-off-outline text-gray-500 dark:text-gray-400 text-6xl"></span>
        <CustomText className="font-bold text-gray-500  dark:text-gray-400" text="No Image" />
      </div>
    )
  }


  const BlogImage = () => {
    if (!isURLValid(imageUrl)) return (<NoImagePlaceHolder />)
    return (
      <img
        className="object-cover sm:w-full sm:h-full w-80"
        src={imageUrl}
      />
    )
  }

  return (
    <div className='
      flex sm:flex-nowrap flex-wrap-reverse  sm:max-w-2xl min-w-full  mb-4
      border-2 dark:border-gray-700 border-gray-300  rounded-md
      sm:h-48 h-full overflow-hidden cursor-pointer
      hover:shadow-lg duration-600 ease-in-out
      dark:hover:border-gray-500 transition-all
      mx-10 
    '>
      <div className='sm:w-9/12 w-80  flex flex-col py-2 px-4'>
        <div className='flex items-center sm:w-full w-80  h-1/6'>
          <Avatar size='sm'>{getOnlyInitials(author)}</Avatar>
          <CustomText
            className="ml-2 text-xs font-semibold"
            text={author || 'No Author'}
          />
        </div>
        <div className='flex items-center sm:w-full w-80  h-1/6'>
          <CustomText
            className="mt-2 lg:text-lg md:text-base text-sm font-bold sm:w-full w-80 "
            text={title || 'No Title'}
          />
        </div>
        <div className='flex items-start sm:w-full w-80 h-2/6 -mt-1'>
          <CustomText
            className="sm:mt-2 mt-8 lg:text-sm md:text-xs text-xs sm:w-full w-full text-gray-700 dark:text-gray-400"
            text={subtitle || 'No Subtitle'}
          />
        </div>
        <div className='flex items-end justify-start sm:w-full w-80   h-2/6'>

          <CustomText
            className="mt-2 text-xs mr-1 text-gray-800 dark:text-gray-400"
            text={date || 'No Date'}
          />
          <CustomText
            className="mt-2 text-xs mr-1 text-gray-800 dark:text-gray-400"
            text={`· ${time} min read`}
          />
        </div>
      </div>
      <div className='sm:w-3/12 w-full flex items-end sm:justify-end  justify-center min-w-max'>
        <BlogImage />
      </div>
    </div>
  )
}

export default BlogCard