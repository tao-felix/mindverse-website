'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'

// Data for stats section
const stats = [
  { number: 8, suffix: 'B+', label: 'people deserve their own AI self' },
  { number: 95, suffix: '%', label: 'of AI training data comes from users—not for them' },
  { number: 100, suffix: '%', label: 'of your identity should remain yours' },
]

// Data for beliefs section
const beliefs = [
  {
    emoji: '🌟',
    title: 'Preserve Every Individual',
    description: 'Your thoughts, memories, and unique perspective matter. AI should protect and amplify your identity, not flatten it into a generic model.'
  },
  {
    emoji: '🤝',
    title: 'Connect People Deeper',
    description: 'AI can bridge cultures, foster understanding, and create relationships that wouldn\'t otherwise exist. We\'re more connected than ever, yet lonelier than ever—AI can change that.'
  },
  {
    emoji: '🌍',
    title: 'Human-AI Coexistence',
    description: 'The future isn\'t humans versus AI. It\'s a diverse ecosystem of AI selves, each reflecting a real person\'s values and dreams, thriving together.'
  }
]

// Data for timeline
const timeline = [
  { phase: 'Now', title: 'Create Your AI Self', description: 'Build an AI that truly knows you—trained on your data, owned by you.' },
  { phase: 'Next', title: 'Connect With Others', description: 'Your AI self meets other AI selves. They communicate, collaborate, create.' },
  { phase: 'Then', title: 'Live in the AI World', description: 'Your AI self navigates the digital world on your behalf—while you stay in control.' },
  { phase: 'Vision', title: 'A Second Me for Everyone', description: 'A world where AI amplifies every individual, not replaces them.' },
]

function StatNumber({ stat, isVisible }: { stat: typeof stats[0], isVisible: boolean }) {
  const count = useCountUp({
    end: stat.number,
    duration: 2000,
    enabled: isVisible
  })

  return (
    <div className="data-number">
      {count}{stat.suffix}
    </div>
  )
}

export default function Home() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 })

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="section min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="blob blob-purple w-[600px] h-[600px] -top-64 -right-64 fixed opacity-20" />
        <div className="blob blob-yellow w-[400px] h-[400px] bottom-0 -left-48 fixed opacity-20" />

        <div className="container text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-hero mb-8"
          >
            AI That Amplifies
            <br />
            <span className="gradient-text-purple">Every Individual</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-12"
          >
            We believe AI should preserve and amplify who you are, not replace you.
            <br className="hidden md:block" />
            Join us in building a world where humans and AI thrive together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
          </motion.div>
        </div>
      </section>

      {/* ===== VISION SECTION (Dark) ===== */}
      <section className="section section-dark">
        <div className="container">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-widest text-secondary mb-8">The State of AI</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="heading-section mb-8">
              We are losing
              <br />
              <span className="text-secondary">ourselves.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-secondary max-w-3xl leading-relaxed">
              Today, your data trains AI for big tech companies—not for you.
              Your experiences are replaced by standardized responses.
              Your voice is drowned out by algorithms that know nothing about who you really are.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section" ref={statsRef}>
        <div className="container">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-widest text-muted mb-8">The Numbers</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.15}>
                <div className="text-center md:text-left">
                  <StatNumber stat={stat} isVisible={statsVisible} />
                  <p className="text-lg text-secondary mt-4">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BELIEFS SECTION ===== */}
      <section className="section bg-white/50">
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-section text-center mb-16">
              What We <span className="gradient-text-purple">Believe</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <ScrollReveal key={belief.title} delay={index * 0.1}>
                <div className="card p-8 h-full">
                  <div className="text-5xl mb-6">{belief.emoji}</div>
                  <h3 className="text-xl font-bold mb-4">{belief.title}</h3>
                  <p className="text-secondary leading-relaxed">{belief.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE SECTION (Dark) ===== */}
      <section className="section section-dark">
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-section mb-16">
              Our Path <span className="text-secondary">Forward</span>
            </h2>
          </ScrollReveal>

          <div className="max-w-2xl">
            <div className="timeline">
              {timeline.map((item, index) => (
                <ScrollReveal key={item.phase} delay={index * 0.1}>
                  <div className="timeline-item">
                    <p className="text-sm text-purple-400 font-medium mb-2">{item.phase}</p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-secondary">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LETTER SECTION ===== */}
      <section className="section">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-widest text-muted mb-8">From Our Founder</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <blockquote className="quote-large mb-12">
              As AI gets smarter, what happens to us? To our individuality?
              To the things that make each of us uniquely human?
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link href="/letter" className="btn-pill">
              Read the full letter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section bg-gradient-to-b from-white/0 to-purple-50/50">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="heading-section mb-6">
              Ready to meet your
              <br />
              <span className="gradient-text-purple">Second Me</span>?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-xl text-secondary mb-12 max-w-xl mx-auto">
              Join thousands of people creating their own AI self.
              Open source. Privacy-first. Human-centered.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
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
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
