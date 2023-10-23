import React from 'react'


interface CustomButtonProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const CustomButton = ({
  className,
  children,
  onClick,
}:CustomButtonProps) => {
  return (
    <button 
      className={`dark:bg-gray-900 bg-slate-100 dark:text-white
      text-gray-900 px-2 dark:hover:bg-gray-700 hover:bg-slate-300
      flex cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton