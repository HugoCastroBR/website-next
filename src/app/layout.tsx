import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hugo Castro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden `}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}
