import React, { useState } from 'react'
import { Container, Section, H2 } from './ui'
import { site } from '@/content'
import { ChevronDown } from 'lucide-react'

const Item = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-lg border border-white/10 bg-white/5">
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-300">{a}</div>
      )}
    </div>
  )
}

const FAQSection = () => (
  <Section id="faq">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <H2>Frequently asked questions</H2>
      </div>
      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {site.faqs.map((f) => (
          <Item key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </Container>
  </Section>
)

export default FAQSection
