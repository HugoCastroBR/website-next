import React from 'react'


interface ContainerBoxProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  id?: string
}
const ContainerBox = ({
  children,
  className,
  onClick,
  id
}: ContainerBoxProps) => {
  return (
    <section className={`
    flex
    bg-gray-100
    bg-opacity-40
    dark:bg-gray-800
    border-2 border-gray-900 dark:border-gray-700
    rounded-md
    shadow-md
    w-full
    h-auto
    p-2
    my-2
    ${className}`
    }
      onClick={onClick}
      id={id}
    >
      {children}
    </section>
  )
}

export default ContainerBox