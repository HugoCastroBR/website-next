'use client'
import { postType } from '@/types'
import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import { truncateText } from '@/utils/textHandlers'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';



const BlogItem = (
  {
    title,
    content,
    author,
    createdAt,
    authorId,
    comments,
    id,
    updatedAt,
  }: postType
) => {



  return (
    <ContainerBox className='
    flex flex-col justify-start items-center max-h-90 min-h-90
    cursor-pointer rounded-md bg-gray-50 dark:bg-gray-800
    shadow-md drop-shadow-md shadow-gray-300 dark:shadow-gray-800
    hover:shadow-xl hover:drop-shadow-xl hover:shadow-gray-600
    dark:hover:shadow-gray-950 dark:hover:drop-shadow-gray-950
    transition duration-500 ease-in-out m-2  mx-2 py-10
    w-80
    '
    onClick={() => {
      console.log('clicked')
    }}
    >
      <div className=' flex  flex-wrap justify-start
        items-start text-center align-center overflow-hidden h-20'>
        <CustomText
          className='text-center align-center dark:text-gray-100 text-gray-900
          text-lg font-mono font-bold h-full w-full overflow-hidden flex'
          text={title} />
      </div>
      <div className=' overflow-hidden my-2 h-20'>
        <CustomText
          className='w-full h-full text-justify overflow-hidden
        dark:text-gray-400 text-gray-800 xl:text-lg lg:text-base md:text-sm text-xs '
          text={truncateText(content,0,126)} />
      </div>
      <div className='flex flex-col items-center justify-center text-center mt-8 h-20'>
        <CustomText
          className='text-center dark:text-gray-100 text-gray-900 text-base font-mono font-bold'
          text={`Posted by ${author.name} in ${createdAt}`} />
        <CustomText
          className='text-center dark:text-gray-300 text-gray-700 text-sm font-mono font-bold'
          text={`(Last updated in ${updatedAt})`}
        />
      </div>
    </ContainerBox>
  )

}

export default BlogItem