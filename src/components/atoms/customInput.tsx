import { Input } from '@mantine/core';
import React from 'react'


interface CustomInputProps {
  label: string
  type: string
  id: string
  placeholder: string
  className?: string
  error?: string,
  onBlur?: (value:string) => void
  right?: React.ReactNode
  rightSectionPointerEvents?: 'all' | 'none'
}

const CustomInput = ({
  label,
  type,
  placeholder,
  className,
  onBlur,
  error,
  right
}:CustomInputProps) => {
  return (
    <>
      <Input.Wrapper label={label} error={error}>
        <Input 
        type={type} placeholder={placeholder} 
        rightSectionPointerEvents={right ? 'all' : 'none'}
        rightSection={right}
        onBlur={
          (e) => onBlur && onBlur(e.currentTarget.value)
        } />
      </Input.Wrapper>
    </>
  )
}

export default CustomInput