import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mindverse AI - Train Your AI Self, Amplify You',
  description: 'We create AI that amplifies, not erases, YOU. Build your own AI self with Second Me - an open-source prototype where you craft your AI identity.',
  keywords: ['AI', 'Artificial Intelligence', 'Digital Self', 'Second Me', 'AI Self', 'Mindverse', 'Personal AI'],
  authors: [{ name: 'Mindverse AI' }],
  openGraph: {
    title: 'Mindverse AI - Train Your AI Self, Amplify You',
    description: 'We create AI that amplifies, not erases, YOU.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindverse AI',
    description: 'Train Your AI Self, Amplify You, Bridge the World',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
