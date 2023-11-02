import { Skeleton } from '@mantine/core'
import React from 'react'

interface BoxLoadingProps {
  loading: boolean
  children: React.ReactNode
}
const BoxLoading = (
  {
    loading = true,
    children
  }: BoxLoadingProps
) => {
  return (
    <Skeleton visible={loading}>
      {children}
    </Skeleton>
  )
}

export default BoxLoading