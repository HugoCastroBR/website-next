"use client"

import useStore from '@/hooks/useStore';
import { SetDarkMode } from '@/store/actions';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const DarkModeSwitch = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { states, dispatch} = useStore();
  

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if(theme === 'dark'){
      dispatch(SetDarkMode(true))
    }
    else{
      dispatch(SetDarkMode(false))
    }
  },[dispatch, theme])

  if (!mounted) {
    return null;
  }
  
  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }


  return (
  <div className='flex flex-col  h-4 justify-center items-center -ml-10 md:mt-0 mt-1 '>
      <label className='dark:text-white text-gray-900 font-mono font-bold text-xs '>
        Dark Mode:
      </label>
      <label className="relative inline-flex items-center cursor-pointer    -ml-2 ">
        <input 
        onChange={toggleDarkMode}
        type="checkbox" checked={theme === 'dark' ? true : false} className="sr-only peer"/>
        <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
        dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
          after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
  </div>

  
  )
  //
  // ----> default <----
  //
  // return (
  //   <div className='flex flex-col h-4 justify-start items-center'>
  //       <label className='dark:text-white text-gray-900 font-mono font-bold text-xs mb-2'>
  //         Dark Mode:
  //       </label>
  //       <label className="relative inline-flex items-center cursor-pointer mt-2">
  //       <input 
  //       onChange={toggleDarkMode}
  //       type="checkbox" checked={theme === 'dark' ? true : false} className="sr-only peer"/>
  //       <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  //       </label>
  //   </div>
  
    
  //   )
}

export default DarkModeSwitch 