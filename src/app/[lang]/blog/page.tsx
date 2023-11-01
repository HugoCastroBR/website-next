import BlogContent from '@/components/organisms/blogContent';
import PageContainer from '@/components/templates/pageContainer';

const Page = ({ params }: { params: { lang: string } }) => {

  return (
    <PageContainer>
      <BlogContent/>
    </PageContainer>
  )
}

export default Page
