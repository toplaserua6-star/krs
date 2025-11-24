import type { Metadata } from 'next'
import { HeroMarketers } from '@/components/HeroMarketers'
import { BenefitsMarketers } from '@/components/BenefitsMarketers'
import { PromptExamples } from '@/components/PromptExamples'
import { CTAMarketers } from '@/components/CTAMarketers'
import { Testimonials } from '@/components/Testimonials'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Промты для маркетологов и SMM — готовые шаблоны ChatGPT',
  description: 'Готовые промты для маркетологов, SMM и таргетологов. Создавайте контент и рекламу быстрее. Полный пакет — $33.',
  keywords: 'промты для маркетологов, SMM промты, промты для таргетологов, ChatGPT промты, контент-план, реклама',
  openGraph: {
    title: 'Super Prompts for Marketers — создавайте контент быстрее',
    description: 'Готовые промты для маркетологов, SMM и таргетологов. Создавайте контент и рекламу быстрее. Полный пакет — $33.',
    type: 'website',
    url: 'https://krs2.vercel.app/for-marketers',
    images: [
      {
        url: '/images/marketers-banner.png',
        width: 1200,
        height: 630,
        alt: 'Super Prompts for Marketers',
      },
    ],
  },
}

export default function ForMarketersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navigation />
      <HeroMarketers />
      <BenefitsMarketers />
      <PromptExamples />
      <CTAMarketers />
      <Testimonials />
      <Footer />
    </main>
  )
}

