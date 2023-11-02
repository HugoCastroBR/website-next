import React from 'react'
import CustomInput from '../atoms/customInput'

interface Props {
  label?: string
  placeholder?: string
  handlerSearchChange: (value: string) => void,
  defaultValue?: string,
}

const SearchInput = (
  {
    label,
    placeholder,
    handlerSearchChange,
    defaultValue
  }: Props
) => {
  return (
    <div className='mt-2'>
      <CustomInput
        type='text'
        id='searchInput'
        label={label || 'Search:'}
        placeholder={placeholder || 'Search'}
        rightSectionPointerEvents="all"
        defaultValue={defaultValue || ''}
        className='w-72'
        onChange={(value) => {
          handlerSearchChange(value)
        }}
        right={
          <span className='
            i-mdi-search text-2xl cursor-pointer
            text-gray-700 dark:text-gray-300
            hover:text-blue-600 
            transition duration-500 ease-in-out
            '
            onClick={() => {
              
            }}
          >
          </span>
        }
      />
    </div>
  )
}

export default SearchInput