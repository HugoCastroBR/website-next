'use client'
import BlogItemContent from '@/components/organisms/blogItemContent';
import PageContainer from '@/components/templates/pageContainer';
import { getOnlyNumbers } from '@/utils/textHandlers';
import { usePathname } from 'next/navigation';
const Page = () => {
  
  const path = usePathname();

  // Get the query parameter from the URL

  return (
    <PageContainer>
      <BlogItemContent id={Number(getOnlyNumbers(path))}/>
    </PageContainer>
  );
}

export default Page
