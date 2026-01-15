'use client'

import { motion } from 'framer-motion'

const products = [
  {
    name: 'Second Me',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tagline: 'Open Source',
    description: 'The Open-Source Framework for Training AI Self. Build your own digital twin with full control and transparency.',
    link: 'https://github.com/mindverse/Second-Me',
    buttonText: 'View on GitHub',
    color: 'cyan',
    features: ['Self-hosted', 'Customizable', 'Community Driven', 'MIT License']
  },
  {
    name: 'Me.bot',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tagline: 'Commercial',
    description: 'The Web & Mobile App for Second Me. Experience the power of AI Self with a polished, ready-to-use application.',
    link: 'https://second.me',
    buttonText: 'Try Me.bot',
    color: 'purple',
    features: ['Cloud Hosted', 'Mobile Ready', 'Enterprise Support', 'Always Updated']
  }
]

export default function Products() {
  return (
    <section className="relative py-32 px-6">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Our </span>
          <span className="gradient-text">Products</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Choose the path that fits your needs. From open-source flexibility to enterprise-ready solutions.
        </p>
      </motion.div>

      {/* Product cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass-card p-8 relative group"
          >
            {/* Glow effect on hover */}
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 ${
                product.color === 'cyan' ? 'bg-neon-cyan/10' : 'bg-neon-purple/10'
              }`}
            />

            {/* Tag */}
            <div className="flex items-center justify-between mb-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide ${
                product.color === 'cyan'
                  ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20'
                  : 'bg-neon-purple/10 text-neon-purple border border-neon-purple/20'
              }`}>
                {product.tagline}
              </div>
              <div className={`${product.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'}`}>
                {product.icon}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 bg-dark-200 rounded-lg text-xs text-gray-300 border border-gray-700/50"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`neon-button w-full text-center block ${
                product.color === 'purple' ? 'neon-button-purple' : ''
              }`}
            >
              {product.buttonText}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
