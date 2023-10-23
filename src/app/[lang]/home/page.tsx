
import $t from '@/utils/lang'

interface HomeProps {
  lang: string
}
export default function Home({params}: {params: HomeProps}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h5 className="text-3xl font-bold text-center">
        {$t('home.Welcome',`${params.lang}`)} Next.js!
      </h5>
    </main>
  )
}
