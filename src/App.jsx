import React, { useEffect } from 'react'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import LogoStrip from './components/LogoStrip'
import FeaturesSection from './components/FeaturesSection'
import ProductPreviewSection from './components/ProductPreviewSection'
import UseCasesSection from './components/UseCasesSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import { site } from './content'

function App() {
  useEffect(() => {
    // CSS variables for theme colors
    const root = document.documentElement
    const primary = site.colors.primary || '#6366f1'
    const secondary = site.colors.secondary || '#22d3ee'
    root.style.setProperty('--color-primary', primary)
    root.style.setProperty('--color-secondary', secondary)
  }, [])

  return (
    <Layout>
      <HeroSection />
      <LogoStrip />
      <FeaturesSection />
      <ProductPreviewSection />
      <UseCasesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </Layout>
  )
}

export default App
