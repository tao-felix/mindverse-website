import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mindverse AI - We Create AI as Your Digital Self',
  description: 'More Than Just AGI, Your Networked Extension. Build your AI Self with Second Me open-source framework or experience Me.bot.',
  keywords: ['AI', 'Artificial Intelligence', 'Digital Self', 'Second Me', 'Me.bot', 'AGI', 'Mindverse'],
  authors: [{ name: 'Mindverse AI' }],
  openGraph: {
    title: 'Mindverse AI - We Create AI as Your Digital Self',
    description: 'More Than Just AGI, Your Networked Extension.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindverse AI',
    description: 'We Create AI as Your Digital Self',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased animated-gradient cyber-grid min-h-screen`}>
        <ParticleBackground />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
