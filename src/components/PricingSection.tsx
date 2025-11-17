import React from 'react'
import { Container, Section, H2, Sub, Card, Button, FadeIn } from './ui'
import { site } from '@/content'

const PricingCard = ({ tier }: { tier: (typeof site.pricing.tiers)[number] }) => (
  <Card className={tier.highlighted ? 'ring-2 ring-[var(--color-primary)]' : ''}>
    <div className="flex items-baseline justify-between">
      <h3 className="text-lg font-semibold">{tier.name}</h3>
      <div className="text-3xl font-semibold">{tier.price}
        <span className="ml-1 text-sm font-normal text-gray-400">{site.pricing.monthly ? '/mo' : ''}</span>
      </div>
    </div>
    <p className="mt-2 text-sm text-gray-400">{tier.description}</p>
    <ul className="mt-4 space-y-2 text-sm text-gray-300">
      {tier.features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <Button className="mt-6 w-full">{tier.cta}</Button>
  </Card>
)

const PricingSection = () => (
  <Section id="pricing">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <H2>Simple, transparent pricing</H2>
        <Sub>Start free, upgrade when you’re ready. No hidden fees.</Sub>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {site.pricing.tiers.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.05}>
            <PricingCard tier={t} />
          </FadeIn>
        ))}
      </div>
    </Container>
  </Section>
)

export default PricingSection
