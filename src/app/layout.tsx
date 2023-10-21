
import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import localFont from 'next/font/local'
import { roboto } from './font'
import CookieBanner from '@/components/cookie-banner'
import posthog from 'posthog-js'
import Script from 'next/script'

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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-658931621" />

        <Script> 
          {`
          window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-658931621'); 
          `}
        </Script>
      </Head>
      <body className={roboto.className}>
        <Header/>
          <main>
            {children}
          </main>
          { !posthog.has_opted_in_capturing() && !posthog.has_opted_out_capturing() && <CookieBanner /> }
        <Footer />
      </body>
    </html>
  )
}
