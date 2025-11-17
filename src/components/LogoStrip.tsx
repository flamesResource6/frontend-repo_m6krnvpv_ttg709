import React from 'react'
import { Container, FadeIn } from './ui'
import { site } from '@/content'

const LogoStrip = () => (
  <div className="border-b border-white/10 py-10">
    <Container>
      <FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {site.logos.map((name) => (
            <div key={name} className="text-sm text-gray-400">{name}</div>
          ))}
        </div>
      </FadeIn>
    </Container>
  </div>
)

export default LogoStrip
