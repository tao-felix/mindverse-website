'use client'

import { motion } from 'framer-motion'

const beliefs = [
  {
    title: 'Preserve Every Individual',
    description: 'In the age of AI, we believe every person\'s unique identity, thoughts, and perspectives deserve to be preserved and amplified, not homogenized.',
    icon: '🌟'
  },
  {
    title: 'Deeper Human Connections',
    description: 'AI should help people connect more meaningfully and deeply with each other, bridging gaps and fostering understanding across communities.',
    icon: '🤝'
  },
  {
    title: 'Human-AI Coexistence',
    description: 'We\'re building toward a future where humans and AI coexist harmoniously, each enhancing the other\'s capabilities while preserving human agency.',
    icon: '🌍'
  }
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-6 overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob blob-purple w-[400px] h-[400px] -top-32 -right-32 fixed" />
      <div className="blob blob-yellow w-[300px] h-[300px] top-1/2 -left-32 fixed" />

      {/* Hero section */}
      <section className="max-w-3xl mx-auto text-center mb-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
        >
          About <span className="gradient-text-purple">Mindverse</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          We are building AI that amplifies human individuality, not replaces it.
          Our mission is to create a world where every person can have their own AI self
          that truly understands them and helps them connect with others more deeply.
        </motion.p>
      </section>

      {/* Vision section */}
      <section className="max-w-3xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-10 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Companies are building "Super AI" that threatens human independence.
            We crave individuality: AI that amplifies, not erases, <strong>YOU</strong>.
            <br /><br />
            We're challenging that with <strong>Second Me</strong>: an open-source prototype
            where you craft your own AI self—a new AI species that preserves you,
            delivers your context, and defends your interests.
          </p>
        </motion.div>
      </section>

      {/* Beliefs section */}
      <section className="max-w-4xl mx-auto mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-10 text-gray-900"
        >
          What We <span className="gradient-text">Believe</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {beliefs.map((belief, index) => (
            <motion.div
              key={belief.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="text-4xl mb-4">{belief.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{belief.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{belief.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Ready to meet your <span className="gradient-text-purple">Second Me</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://second.me"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Try Second Me
            </a>
            <a
              href="https://github.com/mindverse/Second-Me"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Open Source
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
