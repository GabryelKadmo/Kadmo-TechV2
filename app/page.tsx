import AboutDesktop from '@/components/custom/AboutDesktop'
import HeroDesktop from '@/components/custom/HeroDesktop'
import SectionDivider from '@/components/custom/SectionDivider'
import VideoTextSection from '@/components/custom/VideoTextSection'
import FeaturesSection from '@/components/custom/FeaturesSection'
import QuoteSection from '@/components/custom/QuoteSection'
import Footer from '@/components/custom/Footer'
import React from 'react'

export default function page() {
  return (
    <>
      <HeroDesktop />
      <SectionDivider />
      <AboutDesktop />
      <SectionDivider />
      <VideoTextSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <QuoteSection />
      <Footer />
    </>
  )
}
