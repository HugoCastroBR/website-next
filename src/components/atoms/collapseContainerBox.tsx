

import React from 'react'
import SeeMore from '../molecules/seeMore'


interface CollapseContainerBoxProps {
  renderFunction: () => React.ReactNode[] | React.ReactNode
  className?: string
  onClick?: () => void
  isOpen: boolean,
  disabled?: boolean
}
const CollapseContainerBox = ({
  className,
  onClick,
  renderFunction,
  isOpen,
  disabled
}: CollapseContainerBoxProps) => {

  const items = renderFunction()


  return (
    <>
      <div className='flex w-full flex-col items-center justify-center overflow-hidden'>
        <section
          className={`
          ${className}
          transition-all duration-500 ease-in-out
        `}
        >
          {items}
        </section>

      </div>
      <div className='flex w-full pb-6 flex-col items-center justify-center overflow-hidden'>
        {
        !disabled && 
          <SeeMore
          onClick={onClick}
          text={isOpen ? 'See Less' : 'See More'}
        />
        }
      </div>
    </>
  )
}

export default CollapseContainerBox