'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 28C5 28 10 12 15 20C20 28 25 12 30 20C35 28 35 28 35 28" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-semibold tracking-widest text-gray-900 uppercase">
              Mindverse
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
              Home
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
