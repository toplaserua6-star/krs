'use client'

import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Benefits } from '@/components/Benefits'
import { HowItWorks } from '@/components/HowItWorks'
import { WhatYouGetSimple } from '@/components/WhatYouGetSimple'
import { Urgency } from '@/components/Urgency'
import { PricingDetails } from '@/components/PricingDetails'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <WhatYouGetSimple />
      <Urgency />
      <PricingDetails />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
