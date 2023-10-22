
import CustomNavBar from '@/components/organisms/customNavBar';
import CustomHeader from '@/components/organisms/customHeader';
import CustomFooter from '@/components/organisms/customFooter';
import HomeContent from '@/components/organisms/homeContent';

export default function Home() {
  

  return (
    <div className='
    flex flex-col justify-between bg-gradient-to-t
    dark:to-black to-slate-100
    dark:from-blue-950 from-slate-300 w-screen '>
      <div>
        <CustomNavBar />
        <CustomHeader />
      </div>
      <>
      <HomeContent />
      </>
      <div>
      <CustomFooter />
      </div>
    </div>
  )
}
