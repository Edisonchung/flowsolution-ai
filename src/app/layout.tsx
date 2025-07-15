import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flow Solution.ai - AI-Powered Industrial Solutions',
  description: 'Transforming Malaysian Manufacturing Through AI Innovation. Advanced AI solutions for procurement intelligence, predictive maintenance, and process optimization.',
  keywords: 'AI, Industrial Solutions, Malaysia, Manufacturing, Procurement Intelligence, Predictive Maintenance, Industry 4.0',
  authors: [{ name: 'Flow Solution Engineering Sdn. Bhd.' }],
  openGraph: {
    title: 'Flow Solution.ai - AI-Powered Industrial Solutions',
    description: 'Advanced AI solutions for Malaysian manufacturing industry',
    url: 'https://flowsolution.ai',
    siteName: 'Flow Solution.ai',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
