'use client'
import React, { useEffect, useState } from 'react'
import { Notification, Progress } from '@mantine/core'
import CustomText from '../atoms/customText';
import useStore from '@/hooks/useStore';
import { AppHandlerNotification, SetNotification } from '@/store/actions';


const FloatNotification = () => {


  const { states, dispatch } = useStore()



  const HandlerIcon = () => {
    switch (states.App.notificationType) {
      case 'success':
        return <SuccessIcon />
      case 'error':
        return <ErrorIcon />
      case 'warning':
        return <WarningIcon />
      case 'info':
        return <InfoIcon />
      default:
        return <SuccessIcon />
    }
  }


  const [loadingToClose, setLoadingToClose] = useState<number>(0);

  const HandlerCloseNotification = () => {
    dispatch(SetNotification(false))
  };

  const HandlerOpenNotification = () => {
    setLoadingToClose(0);
    dispatch(SetNotification(true))
    loaderHandler()
  }

  const loaderHandler = () => {
    
    const updateLoading = () => {
      setLoadingToClose((prevLoading => prevLoading + 0.420));
    };


    const intervalId = setInterval(updateLoading, 61); // 100 ms = 0.1 segundos

    setTimeout(() => {
      clearInterval(intervalId);
      
      setLoadingToClose(0);
      HandlerCloseNotification()
    }, 15000);

    return () => {
      clearInterval(intervalId);
    };

  }
  useEffect(() => {
    if(states.App.isNotificationOpen){
      HandlerOpenNotification()
    }
  }, [states.App.isNotificationOpen]);

  // useEffect(() => {
  //   dispatch(AppHandlerNotification('This is an unstable version, report a bug',{
  //     notificationType: 'info',
  //   }))
  // },[])

  const setBgColor = () => {
    switch (states.App.notificationType) {
      case 'success':
        return 'green'
      case 'error':
        return 'red'
      case 'warning':
        return 'yellow'
      case 'info':
        return 'cyan'
      default:
        return 'blue'
    }
  }

  const SuccessIcon =  () => {
    return(
      <span className='i-mdi-check-circle-outline scale-150 text-3xl'></span>
    )
  }

  const ErrorIcon =  () => {
    return(
      <span className='i-mdi-alert-circle-outline scale-150 text-3xl'></span>
    )
  }

  const WarningIcon =  () => {
    return(
      <span className='i-mdi-alert-outline scale-150 text-3xl'></span>
    )
  }

  const InfoIcon =  () => {
    return(
      <span className='i-mdi-information-outline scale-150 text-3xl'></span>
    )
  }
  // ${states.App.isNotificationOpen ? 'block' : 'hidden'}

  // dark:border-gray-700 border-gray-200
  // shadow-md drop-shadow-sm shadow-gray-300 dark:shadow-black
  
  return (
    <div className={`
      fixed top-8 right-8 z-50 w-80 overflow-hidden 
      rounded-md border-2 
      ${states.App.isNotificationOpen ? 'block' : 'hidden'}
      ${states.App.sideMenuIsOpen ? 
          `
          dark:border-gray-700 border-gray-200
          shadow-md drop-shadow-md shadow-gray-500 dark:shadow-black  
          `
          :
          `
          dark:border-gray-700 border-gray-200
          shadow-md drop-shadow-sm shadow-gray-300 dark:shadow-black 
          `
      }

      
    `}>
      <Notification 
      radius="xs" 
      icon={<HandlerIcon/>}
      bg={setBgColor()}
      py={16}
      onClose={HandlerCloseNotification}
      styles={{
        closeButton: {
          color: 'white',
          scale: 1.2,
          marginTop: -26,
          marginRight: -10,
          backgroundColor: 'transparent',
        },
      icon: {
        backgroundColor: 'transparent',
      }
      }}
    >
      <CustomText
        text={`${states.App.notificationMessage}`}
        className='text-white text-sm font-medium '
      />
    </Notification>
      <div className='w-full -mt-1 '>
        <Progress value={loadingToClose} animated radius={0} color={setBgColor()} h={4}/>
      </div>
    </div>
  )
}

export default FloatNotification