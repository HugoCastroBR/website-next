import React from 'react'
import CustomText from './customText'
import CustomBit from './customBit'

interface RepositoryCardProps {
  title: string
  language: string
  repoUrl: string
}

const RepositoryCard = ({
  title,
  language,
  repoUrl
}: RepositoryCardProps) => {

  return (
    <div className='flex flex-col h-64 w-30 p-2  mt-1 mb-2 mx-2
        border-2 border-gray-200 dark:border-gray-700
        rounded-md shadow-md drop-shadow-md shadow-gray-300 
        dark:shadow-gray-800 dark:drop-shadow-gray-800
        hover:shadow-lg hover:drop-shadow-lg hover:shadow-gray-400
        hover:scale-105 transition duration-500 ease-in-out
        dark:hover:shadow-gray-950 dark:hover:drop-shadow-gray-950
        overflow-hidden 
        '>
      <div className='h-1/3 w-full flex items-center justify-center '>
        <span className='i-mdi-github scale-150 text-3xl'></span>
      </div>
      <div className='h-1/3 flex items-center justify-center text-center w-full overflow-hidden' >
        <CustomText
          className='inline-block w-20 text-lg'
          text={title}
        />
      </div>
      <div className='flex flex-col items-center justify-center w-full h-1/3 py-2 px-4 mt-4'>
        <CustomBit
          text={language || 'Others'}
          className='w-full'
        />
        <CustomBit
          onClick={() => {
            window.open(repoUrl, '_blank')?.focus()
          }}
          text='Open >'
          className='
          w-full shadow-sm drop-shadow-sm shadow-gray-200
          dark:shadow-gray-800 dark:drop-shadow-gray-800
          hover:shadow-md hover:drop-shadow-md hover:shadow-gray-500
          hover:scale-105 transition duration-500 ease-in-out 
          dark:hover:shadow-gray-950 dark:hover:drop-shadow-gray-950
          '
        />
      </div>
    </div>
  )
}

export default RepositoryCard