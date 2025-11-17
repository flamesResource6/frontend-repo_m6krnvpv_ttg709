export type SiteConfig = {
  productName: string
  tagline: string
  description: string
  audience: string
  theme: 'light' | 'dark' | 'dark-accent'
  colors: {
    primary: string
    secondary: string
  }
  nav: { label: string; href: string }[]
  features: { icon: string; title: string; description: string }[]
  useCases: { title: string; points: string[] }[]
  testimonials: { quote: string; name: string; role: string; company: string }[]
  pricing: {
    monthly: boolean
    tiers: {
      name: string
      price: string
      description: string
      highlighted?: boolean
      features: string[]
      cta: string
    }[]
  }
  faqs: { q: string; a: string }[]
  logos: string[]
}

export const site: SiteConfig = {
  productName: '[PRODUCT_NAME]',
  tagline: '[SHORT_TAGLINE]',
  description:
    '[PRODUCT_NAME] is a modern platform that helps [TARGET_AUDIENCE] plan, execute, and measure their work with clarity. Ship faster, stay aligned, and make better decisions with real-time insights.',
  audience: '[TARGET_AUDIENCE]',
  theme: 'dark-accent',
  colors: {
    primary: '[PRIMARY_COLOR]',
    secondary: '[SECONDARY_COLOR]'
  },
  nav: [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#preview' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ],
  features: [
    {
      icon: 'Zap',
      title: 'Blazing fast setup',
      description:
        'Go from idea to live in minutes. No complex onboarding — just connect, configure, and go.'
    },
    {
      icon: 'Shield',
      title: 'Enterprise-grade security',
      description:
        'Encryption in transit and at rest, SSO, audit trails, and granular roles out of the box.'
    },
    {
      icon: 'Sparkles',
      title: 'AI-assisted workflows',
      description:
        'Automate the busywork with intelligent suggestions, summaries, and proactive alerts.'
    },
    {
      icon: 'Users',
      title: 'Built for teams',
      description:
        'Comments, mentions, and shared views keep everyone aligned and moving in the same direction.'
    }
  ],
  useCases: [
    {
      title: 'For product teams',
      points: [
        'Prioritize the roadmap with real impact data',
        'Collaborate with engineering and design in one place',
        'Ship confidently with clear release notes'
      ]
    },
    {
      title: 'For operations',
      points: [
        'Create repeatable playbooks and SOPs',
        'Track SLAs and spot bottlenecks early',
        'Share dashboards with stakeholders'
      ]
    }
  ],
  testimonials: [
    {
      quote:
        "We replaced three tools with [PRODUCT_NAME]. Our team finally has a single source of truth and it shows in our velocity.",
      name: 'Alex Carter',
      role: 'VP Product',
      company: 'Nimbus'
    },
    {
      quote:
        "The polish and performance are top-tier. Our onboarding time dropped by 60% and our customers love it.",
      name: 'Priya Nair',
      role: 'Head of Operations',
      company: 'Arcade'
    },
    {
      quote:
        "It’s like the best parts of a modern SaaS, but focused exactly on what our team needs — without the bloat.",
      name: 'Diego Alvarez',
      role: 'CTO',
      company: 'Vector Labs'
    }
  ],
  pricing: {
    monthly: true,
    tiers: [
      {
        name: 'Starter',
        price: '$0',
        description: 'For individuals getting started',
        features: ['Up to 3 projects', 'Basic analytics', 'Community support'],
        cta: 'Get Started'
      },
      {
        name: 'Growth',
        price: '$29',
        description: 'For growing teams who need more',
        highlighted: true,
        features: [
          'Unlimited projects',
          'Advanced analytics',
          'AI assistants',
          'Priority support'
        ],
        cta: 'Start Free Trial'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large orgs with advanced needs',
        features: [
          'SSO & SCIM',
          'Audit logs',
          'Custom contracts',
          'Dedicated support'
        ],
        cta: 'Book a Demo'
      }
    ]
  },
  faqs: [
    {
      q: 'How does the free plan work?',
      a: 'You can use the Starter plan forever. Upgrade anytime for more power and collaboration features.'
    },
    {
      q: 'Do you offer trials?',
      a: 'Yes — Growth includes a free trial with no credit card required.'
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. We follow industry best practices for encryption, access control, and compliance.'
    },
    {
      q: 'Can I change my plan later?',
      a: 'You can upgrade, downgrade, or cancel at any time from your billing settings.'
    },
    {
      q: 'Do you have an API?',
      a: 'Yes. A robust API and webhooks are available on Growth and Enterprise.'
    }
  ],
  logos: [
    'Acme',
    'Vertex',
    'Nimbus',
    'Helix',
    'Quanta',
    'Atlas'
  ]
}
