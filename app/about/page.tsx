'use client'

import { motion } from 'framer-motion'

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'Pushing the boundaries of AI technology to create truly personal digital experiences.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Privacy',
    description: 'Your data is yours. We build with privacy-first principles at every layer.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Community',
    description: 'Open source at heart. Building together with developers worldwide.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance',
    description: 'Engineered for speed and efficiency without compromising capabilities.'
  }
]

const timeline = [
  { year: '2023', event: 'Mindverse AI Founded', description: 'Started with a vision to democratize personal AI.' },
  { year: '2024', event: 'Second Me Released', description: 'Launched our open-source framework for AI Self training.' },
  { year: '2025', event: 'Me.bot Launch', description: 'Released the commercial application for wider adoption.' },
  { year: 'Future', event: 'AGI & Beyond', description: 'Continuing to push boundaries of artificial general intelligence.' }
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-6">
      {/* Hero section */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          <span className="text-white">About </span>
          <span className="gradient-text">Mindverse AI</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 leading-relaxed"
        >
          We are building the future of personal AI. Our mission is to create AI that truly understands and extends you &mdash; your digital self that learns, grows, and represents you in the digital world.
        </motion.p>
      </section>

      {/* Vision section */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] -z-10" />

          <h2 className="text-3xl font-bold mb-6">
            <span className="glow-text-purple text-neon-purple">Our Vision</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We envision a world where everyone has access to their own AI companion &mdash; one that understands their unique perspective, protects their privacy, and amplifies their capabilities. Not just another chatbot, but a true digital extension of yourself.
          </p>
        </motion.div>
      </section>

      {/* Values section */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="text-white">Our </span>
          <span className="gradient-text">Values</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center text-neon-cyan">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline section */}
      <section className="max-w-4xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="text-white">Our </span>
          <span className="gradient-text">Journey</span>
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-dark border-2 border-neon-cyan animate-pulse-glow" />

              {/* Content */}
              <div className="glass-card p-6">
                <span className="text-neon-cyan text-sm font-mono">{item.year}</span>
                <h3 className="text-xl font-semibold text-white mt-1 mb-2">{item.event}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-white">Ready to meet your </span>
            <span className="glow-text text-neon-cyan">Digital Self</span>
            <span className="text-white">?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/mindverse/Second-Me"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button"
            >
              Explore Second Me
            </a>
            <a
              href="https://second.me"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button neon-button-purple"
            >
              Try Me.bot
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
