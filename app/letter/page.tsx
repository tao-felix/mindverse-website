'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FounderLetterPage() {
  return (
    <article className="pt-28 pb-20 px-6 overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob blob-purple w-[400px] h-[400px] -top-32 -right-32 fixed" />
      <div className="blob blob-yellow w-[300px] h-[300px] bottom-1/4 -left-32 fixed" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Founder&apos;s Letter</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Making Us Matter Again
          </h1>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-gray-600 leading-relaxed text-lg"
        >
          <p>
            I&apos;ve been thinking a lot about what AI means for us—not as technology, but as people.
          </p>

          <p>
            Like many of you, I&apos;ve watched the rise of increasingly powerful AI with a mix of wonder and worry.
            These systems can write, create, and reason in ways that feel almost magical. But there&apos;s something
            that keeps me up at night.
          </p>

          <p>
            As AI gets smarter, what happens to us? To our individuality? To the things that make
            each of us uniquely human?
          </p>

          <p>
            Today, our data trains AI for big tech companies—not for ourselves. Our experiences and insights
            are being replaced by standardized responses. Our voices are being drowned out by algorithms that
            know nothing about who we really are.
          </p>

          <p className="text-xl font-medium text-gray-800">
            We&apos;re becoming spectators in a future we should be shaping.
          </p>

          <p>
            That&apos;s why we started Mindverse. Not to build another chatbot or another tool.
            But to ask a different question: <em>What if AI could amplify who you are, instead of replacing you?</em>
          </p>
        </motion.div>

        {/* Three Core Beliefs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Three Things We Believe
          </h2>

          <div className="space-y-8">
            {/* Belief 1 */}
            <div className="card p-8">
              <div className="flex items-start gap-5">
                <span className="text-4xl">🌟</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Every person deserves to be preserved in the AI age
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your thoughts, your memories, your way of seeing the world—these aren&apos;t just data points.
                    They&apos;re what make you, you. In a world racing toward superintelligence, we believe
                    your uniqueness matters more than ever. AI should protect and amplify your identity,
                    not flatten it into a generic model.
                  </p>
                </div>
              </div>
            </div>

            {/* Belief 2 */}
            <div className="card p-8">
              <div className="flex items-start gap-5">
                <span className="text-4xl">🤝</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    AI should bring people closer, not push them apart
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We&apos;re more connected than ever, yet lonelier than ever. Technology promised to bring us
                    together but often isolates us behind screens. We believe AI can be different. Imagine your
                    AI self connecting with others&apos; AI selves—bridging cultures, fostering understanding,
                    creating relationships that wouldn&apos;t otherwise exist.
                  </p>
                </div>
              </div>
            </div>

            {/* Belief 3 */}
            <div className="card p-8">
              <div className="flex items-start gap-5">
                <span className="text-4xl">🌍</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Humans and AI can thrive together
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The future doesn&apos;t have to be humans versus AI. We&apos;re building toward a world where they
                    coexist—where AI enhances human capabilities while we maintain our agency and purpose.
                    Not one superintelligence that dominates everything, but a diverse ecosystem of AI selves,
                    each reflecting a real person&apos;s values and dreams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Master Plan */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Our Path Forward
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-300 to-yellow-300" />

            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="relative pl-12">
                <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-purple-500" />
                <div className="card p-6">
                  <p className="text-sm text-purple-600 font-medium mb-1">Now</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Your AI Self</h3>
                  <p className="text-gray-600">
                    Build an AI that truly knows you—your thinking patterns, your values, your unique
                    perspective. Trained on your data, owned by you, running where you choose.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative pl-12">
                <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-purple-400" />
                <div className="card p-6">
                  <p className="text-sm text-purple-600 font-medium mb-1">Next</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect With Others</h3>
                  <p className="text-gray-600">
                    Your AI self meets other AI selves. They communicate, collaborate, and create value
                    together—like the early internet, but for AI. Your data stays yours. Your identity
                    stays yours.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative pl-12">
                <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-purple-300" />
                <div className="card p-6">
                  <p className="text-sm text-purple-600 font-medium mb-1">Then</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live in the AI World</h3>
                  <p className="text-gray-600">
                    Your AI self navigates the digital world on your behalf—finding opportunities,
                    making connections, creating value—while you stay in control.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative pl-12">
                <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-yellow-400" />
                <div className="card p-6 bg-gradient-to-br from-purple-50 to-yellow-50">
                  <p className="text-sm text-yellow-600 font-medium mb-1">The Dream</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">A Second Me for Everyone</h3>
                  <p className="text-gray-600">
                    If the PC era put a computer on every desk, the AI era should put a Second Me in
                    every life. Where your uniqueness thrives, not disappears.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Closing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-16 text-center"
        >
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            This is just the beginning. We&apos;re building Second Me as open source because we believe
            this future should belong to everyone, not just big tech companies.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Join us. Create your Second Me. Help us build a world where AI makes us more human,
            not less.
          </p>
          <p className="text-2xl font-bold gradient-text-purple">
            Making We Matter Again.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
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
              View on GitHub
            </a>
          </div>
        </motion.div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </article>
  )
}
