import React, { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { site } from '@/content'
import { Container, Button } from './ui'

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f17]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f17]/60">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="h-6 w-6 rounded bg-[var(--color-primary)]" />
          <span className="font-semibold">{site.productName}</span>
        </a>
        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button>
            Get Started
            <ArrowUpRight size={16} />
          </Button>
        </div>
        <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </Container>
      {open && (
        <div className="border-t border-white/10 md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <Button className="w-full">Get Started</Button>
          </Container>
        </div>
      )}
    </header>
  )
}

export const Footer = () => (
  <footer className="border-t border-white/10 py-12">
    <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex items-center gap-2 text-white/80">
        <div className="h-6 w-6 rounded bg-[var(--color-primary)]" />
        <span className="text-sm">© {new Date().getFullYear()} {site.productName}</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
        {['About', 'Docs', 'Security', 'Privacy', 'Terms', 'Contact'].map((l) => (
          <a key={l} href="#" className="hover:text-white">
            {l}
          </a>
        ))}
      </div>
    </Container>
  </footer>
)

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
