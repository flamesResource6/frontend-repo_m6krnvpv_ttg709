import React from 'react'
import { Container, Section, H2, Sub, Card, FadeIn } from './ui'

const Panel = ({ title }: { title: string }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <div className="mb-3 h-4 w-24 rounded bg-white/10" />
    <div className="grid grid-cols-3 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-20 rounded-md bg-white/10" />
      ))}
    </div>
  </div>
)

const ProductPreviewSection = () => {
  return (
    <Section id="preview">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <H2>See it in action</H2>
          <Sub>Familiar patterns, thoughtfully refined. Built to feel fast, clear, and reliable every time.</Sub>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FadeIn>
            <Panel title="Overview" />
          </FadeIn>
          <FadeIn delay={0.05}>
            <Panel title="Workflows" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Panel title="Insights" />
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}

export default ProductPreviewSection
