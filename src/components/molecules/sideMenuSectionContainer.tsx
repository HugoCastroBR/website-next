import React from 'react'

interface SideMenuSectionContainerProps {
  children: React.ReactNode
  className?: string
}

const SideMenuSectionContainer = ({
  className,
  children
}:SideMenuSectionContainerProps) => {
  return (
    <section className={`
    flex flex-col w-full 
    ${className}`}>
      {children}
    </section>
  )
}

export default SideMenuSectionContainer