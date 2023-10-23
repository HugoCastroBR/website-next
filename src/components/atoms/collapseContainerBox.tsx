
'use client'
import React, { useEffect } from 'react'
import SeeMore from '../molecules/seeMore'


interface CollapseContainerBoxProps {
  renderFunction: () => React.ReactNode[]
  className?: string
  onClick?: () => void
  isOpen: boolean
}
const CollapseContainerBox = ({
  className,
  onClick,
  renderFunction,
  isOpen
}: CollapseContainerBoxProps) => {

  const items = renderFunction()
  const windowWidth = window.innerWidth
  const amountOfItemsMobile = 4
  const amountOfItemsTablet = 6
  const amountOfItemsDesktop = 8

  const calculateAmountOfItems = () => {
    if (windowWidth < 600) {
      return amountOfItemsMobile
    } else if (windowWidth < 1024) {
      return amountOfItemsTablet
    } else {
      return amountOfItemsDesktop
    }
  }

  useEffect(() => {
    setAmountOfItems(calculateAmountOfItems())
  },[windowWidth])

  const [amountOfItems, setAmountOfItems] = React.useState<number>(amountOfItemsMobile)


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
      <SeeMore
        onClick={onClick}
        text={isOpen ? 'See Less' : 'See More'}
      />
    </div>
  </>
  )
}

export default CollapseContainerBox