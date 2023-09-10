import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Roboto } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import localFont from 'next/font/local'
import { roboto } from './font'

export const noto = localFont({ src: '../../public/local-font/NotoSerifBold.woff2' })

export const metadata: Metadata = {
  title: 'Get-A-Ride',
  description: 'Get A Ride Denver Executive Airport Transportation and Mountain Transfer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body className={roboto.className}>
        <Header/>
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
