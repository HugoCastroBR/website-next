'use client'
import React from 'react'


interface OptionProps {
  option: string
  value: string
}

interface SelectorProps {
  options: OptionProps[]
  className?: string
}

const CustomSelector = ({
  options,
  className,
}: SelectorProps) => {
  return (
    <form>
      <select
        className={className}
        onChange={(e) => {
          const selectedLanguage = e.target.value
          console.log(selectedLanguage)
        }}
      >
        {options.map((option, index) => (
          <option
            className="dark:bg-gray-900 bg-slate-100 dark:text-white
            text-gray-900 px-2
          hover:bg-gray-900 flex cursor-pointer"
            key={index}
            value={option.value}
          >
            {option.option}
          </option>
        ))}
      </select>
    </form>
  )
}

export default CustomSelector