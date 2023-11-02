'use client'
import useStore from '@/hooks/useStore';
import { Input } from '@mantine/core';
import React, { useEffect } from 'react'

interface CustomInputProps {
  label: string
  type: string
  id: string
  placeholder: string
  className?: string
  error?: string | false,
  onBlur?: (value: string) => void
  right?: React.ReactNode
  rightSectionPointerEvents?: 'all' | 'none',
  onClick?: () => void,
  onChange?: (value: string) => void,
  defaultValue?: string
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
  onChange,
  defaultValue
}: CustomInputProps) => {

  const inputRef = React.useRef<HTMLInputElement>(null)
  const { states } = useStore()

  useEffect(() => {
    if (inputRef?.current?.value) {
      inputRef.current.value = ''
    }
  }, [states.App.sideMenuIsOpen])

  return (
    <>
      <Input.Wrapper label={label} error={error}>
        <Input
          error={error}
          type={type} placeholder={placeholder}
          rightSectionPointerEvents={right ? 'all' : 'none'}
          rightSection={right}
          ref={inputRef}
          defaultValue={defaultValue || ''}
          onClick={onClick}
          className={className}
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