import './globals.scss'
import { Inter } from 'next/font/google'
import { PrismicPreview } from '@prismicio/next'
import { cait } from '@/prismicio'
import Navigation from "@/components/layout/navigation";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

async function GlobalSettings() {
  const defaultSettings = {
    colors: {
      primary: "#fab",
      secondary: "#fab",
      alternate: "#fab",
    },
  };
  const client = createClient();
  try {
    return client.getSingle("global");
  } catch (error) {
    console.error(PrismicError);
    return defaultSettings;
  }
}

const {
  navigation_image,
  buttons,
} = GlobalSettings.data || {};
console.log(GlobalSettings.length)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {GlobalSettings ? <Navigation {...navigation_image} buttons={buttons} /> : null}
        {children}
        <PrismicPreview repositoryName={cait} />
      </body>
    </html>
  )
}