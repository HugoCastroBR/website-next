import { Input } from '@mantine/core';
import React from 'react'


interface CustomInputProps {
  label: string
  type: string
  id: string
  placeholder: string
  className?: string
  error?: string | false,
  onBlur?: (value:string) => void
  right?: React.ReactNode
  rightSectionPointerEvents?: 'all' | 'none',
  onClick?: () => void,
  onChange?: (value:string) => void
}

const CustomInput = ({
  label,
  type,
  placeholder,
  className,
  onBlur,
  error,
  right,
  onClick,
  onChange
}:CustomInputProps) => {
  return (
    <>
      <Input.Wrapper label={label} error={error}>
        <Input 
        error={error}
        type={type} placeholder={placeholder} 
        rightSectionPointerEvents={right ? 'all' : 'none'}
        rightSection={right}
        onClick={onClick}
        onChange={
          (e) => onChange && onChange(e.currentTarget.value)
        }
        onBlur={
          (e) => onBlur && onBlur(e.currentTarget.value)
        } />
      </Input.Wrapper>
    </>
  )
}

export default CustomInput