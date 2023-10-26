import React from 'react';
import CustomNavBar from '@/components/organisms/customNavBar';
import CustomHeader from '@/components/organisms/customHeader';
import CustomFooter from '@/components/organisms/customFooter';
import HomeContent from '@/components/organisms/homeContent';

interface Props {
  children: React.ReactNode;
  linksRouter?: boolean;
}

export default function PageContainer({children,linksRouter}: Props) {
  
  
  return (
    <div className='
    flex flex-col justify-between bg-gradient-to-t
    dark:to-black to-slate-100
    dark:from-blue-950 from-slate-300 w-full lg:pr-3 pr-0  '>
      <div>
        <CustomNavBar />
        <CustomHeader linksRouter={true} />
      </div>
      <div className="xl:px-80 px-0 max">
      {children}
      </div>
      <div>
      <CustomFooter />
      </div>
    </div>
  )
}