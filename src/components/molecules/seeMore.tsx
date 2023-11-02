import React from 'react'
import CustomText from '../atoms/customText'

interface SeeMoreProps {
  onClick?: () => void
  text?: string,
}

const SeeMore = ({
  onClick,
  text,

}:SeeMoreProps) => {
  return (
    <div className='flex justify-center items-center w-1/2 h-14 mt-4'>
      <button 
      onClick={onClick}
      className='
        min-w-full h-5/6 bg-blue-600 rounded-md
        shadow-md drop-shadow-md shadow-gray-300 dark:shadow-gray-800
        dark:drop-shadow-gray-800 drop-shadow-gray-800
        hover:shadow-lg hover:drop-shadow-lg hover:shadow-gray-600
        dark:hover:shadow-gray-900 dark:hover:drop-shadow-gray-900
        hover:scale-105 transition duration-500 ease-in-out
      '>
        <CustomText
          text={text || 'See More'}
          className='text-2xl font-sans font-semibold text-white'
        />
      </button>
    </div>
  )
}

export default SeeMore