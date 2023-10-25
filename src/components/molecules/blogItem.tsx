'use client'
import { postType } from '@/types'
import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import { truncateText } from '@/utils/textHandlers'
import { convertDate } from '@/utils/dateHandlers'
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
    flex flex-col justify-start items-center h-96 p-2
    cursor-pointer rounded-md bg-gray-50 dark:bg-gray-800
    shadow-md drop-shadow-md shadow-gray-300 dark:shadow-gray-800
    hover:shadow-xl hover:drop-shadow-xl hover:shadow-gray-600
    dark:hover:shadow-gray-950 dark:hover:drop-shadow-gray-950
    transition duration-500 ease-in-out m-2  mx-0 py-10
    w-80
    '
    onClick={() => {
      console.log('clicked')
    }}
    >
      <div className=' flex h-24 flex-wrap justify-start
        items-start text-center align-center overflow-hidden'>
        <CustomText
          className='text-center align-center dark:text-gray-100 text-gray-900
          text-lg font-mono font-bold h-full w-full overflow-hidden flex'
          text={title} />
      </div>
      <div className=' overflow-hidden my-2 '>
        <CustomText
          className='w-full h-full text-justify overflow-hidden
        dark:text-gray-200 text-gray-800'
          text={truncateText(content,0,126)} />
      </div>
      <div className='flex flex-col items-center justify-center text-center mt-8 '>
        <CustomText
          className='text-center dark:text-gray-100 text-gray-900 text-base font-mono font-bold'
          text={`Posted by ${author.name} in ${convertDate(createdAt)}`} />
        <CustomText
          className='text-center dark:text-gray-300 text-gray-700 text-sm font-mono font-bold'
          text={`(Last updated in ${convertDate(updatedAt)})`}
        />
      </div>
    </ContainerBox>
  )

  // return (
  //   <Card
  //     shadow="sm"
  //     padding="xl"
  //     component="a"
  //     href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  //     target="_blank"
  //     className='w-96'
  //   >
  //     <Card.Section>
  //       <Image
  //         src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
  //         h={160}
  //         alt="No way!"
  //       />
  //     </Card.Section>

  //     <Text fw={500} size="lg" mt="md">
  //       {id}
  //     </Text>

  //     <Text mt="xs" c="dimmed" size="sm">
  //       Please click anywhere on this card to claim your reward, this is not a fraud, trust us
  //     </Text>
  //   </Card>
  // )
}

export default BlogItem