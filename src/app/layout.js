import './globals.scss'
import { Inter } from 'next/font/google'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName, createClient } from '@/prismicio'
import Navigation from "@/components/layout/Navigation";
import Footer from '@/components/layout/Footer';
import clsx from "clsx";
// // If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const client = createClient();

const globalSettings = await client.getSingle("global")
const {
  navigation_image,
  links,
  background_color,
  image,
  notice,
} = globalSettings.data || {}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx([inter.className, "canvas"])}>
      <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        {globalSettings ? <Navigation links={links} navigationImage={navigation_image} backgroundColor={background_color} /> : null}
        {children}
        <Footer navigationImage={image} backgroundColor={background_color} notice={notice} />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}