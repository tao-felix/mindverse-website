'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Mindverse"
              width={120}
              height={30}
              className="h-6 w-auto"
            />
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/letter" className="text-gray-500 hover:text-gray-900 transition-colors">
              Letter
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900 transition-colors">
              About
            </Link>
            <a
              href="https://second.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Second Me
            </a>
            <a
              href="https://github.com/mindverse/Second-Me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mindverse AI
          </p>
        </div>
      </div>
    </footer>
  )
}
