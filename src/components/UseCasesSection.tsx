import React from 'react'
import { Container, Section, H2, Sub, Card, FadeIn } from './ui'
import { site } from '@/content'

const UseCasesSection = () => (
  <Section id="use-cases">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <H2>Designed for {site.audience}</H2>
        <Sub>Flexible building blocks that map to your reality — not the other way around.</Sub>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {site.useCases.map((u, idx) => (
          <FadeIn key={u.title} delay={idx * 0.05}>
            <Card>
              <h3 className="text-lg font-semibold">{u.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {u.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  </Section>
)

export default UseCasesSection
