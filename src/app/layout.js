import './globals.scss'
import { Inter } from 'next/font/google'
import { PrismicPreview } from '@prismicio/next'
import { cait } from '@/prismicio'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PrismicPreview repositoryName={cait} />
      </body>
    </html>
  )
}