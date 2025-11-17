import React from 'react'
import { Container, Section, H2, Sub, Card, FadeIn } from './ui'
import { site } from '@/content'

const TestimonialsSection = () => (
  <Section>
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <H2>Loved by modern teams</H2>
        <Sub>Evidence beats adjectives. Here’s what people say after switching.</Sub>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {site.testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.05}>
            <Card className="h-full">
              <p className="text-sm text-gray-300">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/80">
                <span className="font-medium">{t.name}</span>
                <span className="text-gray-400"> — {t.role}, {t.company}</span>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  </Section>
)

export default TestimonialsSection
