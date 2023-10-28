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

  const LoadUserInfos = async () => {
    try {
      const res = await getUserByToken()
      dispatch(SetUser(res.data))
      dispatch(SetIsAuth(true))
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = getToken()
    if(token){
      LoadUserInfos()
    }
  },[])

  useEffect(() => {
    if(!states.Auth.isAuth){
      localStorage.removeItem('token')
    }
  },[states.Auth.isAuth])

  return (
    <>{children}</>
  )
}

export default AuthProvider