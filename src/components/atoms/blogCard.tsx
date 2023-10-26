import React from 'react'
import { Card, Image, Text, Badge, Button, Group,Spoiler, Avatar } from '@mantine/core';
import CustomText from './customText';
import { getOnlyInitials } from '@/utils/textHandlers';

export interface BlogCardProps {
  id:number;
  author:string
  title: string;
  subtitle: string;
  date: string;
  time: string;
  tag: string;
  imageUrl: string;
}

const BlogCard = ({
  id,
  author,
  title,
  subtitle,
  date,
  time,
  tag,
  imageUrl
}:BlogCardProps
) => {
  return (
    <div className='
      flex sm:flex-nowrap flex-wrap-reverse sm:w-full w-64 mb-4
      border-2 dark:border-gray-700 border-gray-300  rounded-md
      sm:h-48 h-full overflow-hidden cursor-pointer
      hover:shadow-lg duration-600 ease-in-out
      dark:hover:border-gray-500 transition-all
    '>
      <div className='w-9/6 flex flex-col py-2 px-4'>
        <div className='flex items-center w-full h-1/6'>
          <Avatar size='sm'>{getOnlyInitials(author)}</Avatar>
          <CustomText
            className="ml-2 text-xs font-semibold"
            text={author}
          />
        </div>
        <div className='flex items-center w-full h-1/6'>
          <CustomText
            className="mt-2 lg:text-lg md:text-base text-sm font-bold w-full"
            text={title}
          />
        </div>
        <div className='flex items-center w-full h-2/6'>
          <CustomText
            className="sm:mt-2 mt-8 lg:text-sm md:text-xs text-xs w-full text-gray-700 dark:text-gray-400"
            text={subtitle}
          />
        </div>
        <div className='flex items-end justify-start w-full h-2/6'>
          <CustomText
            className="mt-2 text-xs mr-1 text-gray-800 dark:text-gray-400"
            text={date}
          />
          <CustomText
            className="mt-2 text-xs mr-1 text-gray-800 dark:text-gray-400"
            text={`· ${time} min read`}
          />
          <CustomText
            className="mt-2 text-xs mr-1 text-gray-800 dark:text-gray-400"
            text={`· ${tag}`}
          />
        </div>
      </div>
      <div className='w-3/12 flex items-end justify-end min-w-max'>
        <Image
          src={imageUrl}
          className="sm:ml-1 ml-0"
          h={192}
          w="auto"
          fit="cover"
          alt="Norway"
        />
      </div>
    </div>
  )
}

export default BlogCard