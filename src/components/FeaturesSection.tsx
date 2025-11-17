import React from 'react'
import { Container, Section, H2, Sub, Card, FadeIn } from './ui'
import { site } from '@/content'
import * as Icons from 'lucide-react'

const FeaturesSection = () => {
  return (
    <Section id="features">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <H2>Why teams choose {site.productName}</H2>
          <Sub>Everything you need to move from idea to impact — elegantly engineered.</Sub>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {site.features.map((f, idx) => {
            const Icon = (Icons as any)[f.icon] as React.ComponentType<{ className?: string }>
            return (
              <FadeIn key={f.title} delay={idx * 0.05}>
                <Card className="h-full">
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className="h-5 w-5 text-[var(--color-primary)]" />}
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{f.description}</p>
                </Card>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default FeaturesSection
