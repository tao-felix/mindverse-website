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
        scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-neon-cyan/10' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink flex items-center justify-center">
              <span className="text-dark font-bold text-lg">M</span>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink opacity-0 blur-lg group-hover:opacity-50 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">Mindverse</span>
            <span className="gradient-text ml-1">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 text-sm font-medium tracking-wide"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 text-sm font-medium tracking-wide"
          >
            About
          </Link>
          <a
            href="https://github.com/mindverse/Second-Me"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button text-xs"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-neon-cyan transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-neon-cyan transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-neon-cyan transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-dark-100/95 backdrop-blur-xl border-t border-neon-cyan/10"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-neon-cyan transition-colors py-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-neon-cyan transition-colors py-2"
          >
            About
          </Link>
          <a
            href="https://github.com/mindverse/Second-Me"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button text-center text-xs mt-2"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.header>
  )
}
