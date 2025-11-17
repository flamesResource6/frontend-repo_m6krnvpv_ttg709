import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { site } from '@/content'
import { Container, H1, Sub, Button, FadeIn } from './ui'

const HoverGlow: React.FC<React.PropsWithChildren> = ({ children }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const background = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 60%)`
  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect()
        x.set(e.clientX - rect.left)
        y.set(e.clientY - rect.top)
      }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
      style={{ background }}
    >
      {children}
    </motion.div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-[-20%] h-96 w-96 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[var(--color-secondary)]/20 blur-3xl" />
      </div>
      <Container className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <FadeIn>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span>New</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
              <span>Now with AI Workflows</span>
            </div>
            <H1>
              {site.tagline}
            </H1>
            <Sub className="max-w-xl">
              {site.description}
            </Sub>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button>
                Get Started Free
                <ArrowRight size={16} />
              </Button>
              <Button variant="secondary">Book a Demo</Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-xs text-gray-400">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-6 w-6 rounded-full border border-white/10 bg-white/20" />
                ))}
              </div>
              <p>Trusted by teams at modern startups</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <HoverGlow>
            <div className="aspect-[4/3] w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 shadow-2xl">
              <div className="grid h-full grid-rows-6 gap-3">
                <div className="row-span-1 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <div className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <div className="row-span-5 grid grid-cols-12 gap-3">
                  <div className="col-span-3 space-y-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-8 rounded-md bg-white/10" />
                    ))}
                  </div>
                  <div className="col-span-9 space-y-3">
                    <div className="h-40 rounded-xl bg-white/10" />
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-20 rounded-md bg-white/10" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HoverGlow>
        </FadeIn>
      </Container>
    </section>
  )
}

export default HeroSection
