'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-soft' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 28C5 28 10 12 15 20C20 28 25 12 30 20C35 28 35 28 35 28" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-lg font-semibold tracking-widest text-gray-900 uppercase">
            Mindverse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/letter"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            Founder&apos;s Letter
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            About
          </Link>
          <a
            href="https://github.com/mindverse/Second-Me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://second.me"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Try Second Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
          >
            Home
          </Link>
          <Link
            href="/letter"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
          >
            Founder&apos;s Letter
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
          >
            About
          </Link>
          <a
            href="https://github.com/mindverse/Second-Me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
          >
            GitHub
          </a>
          <a
            href="https://second.me"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center mt-2"
          >
            Try Second Me
          </a>
        </div>
      </motion.div>
    </motion.header>
  )
}
