'use client'
import { getUserByToken } from '@/api'
import useStore from '@/hooks/useStore'
import { SetIsAuth, SetUser } from '@/store/actions'
import React, { useEffect } from 'react'


interface Props {
  children: React.ReactNode
}
const AuthProvider = (
  {
    children
  }: Props
) => {

  const {states,dispatch} = useStore()

  const getToken = () => {
    const token = localStorage.getItem('token')
    if(token){
      return token
    }else{
      return false
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const LoadUserInfos = async () => {
    try {
      const res = await getUserByToken()
      dispatch(SetUser(res.data))
      dispatch(SetIsAuth(true))
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const token = getToken()
    if(token){
      LoadUserInfos()
    }
  },[])

  
  useEffect(() => {
    const token = getToken()
    if(token){
      LoadUserInfos()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[states.App])

  return (
    <>{children}</>
  )
}

export default AuthProvider