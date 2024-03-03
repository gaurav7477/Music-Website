import Featuredcourses from '@/components/Featuredcourses'
import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Cards from '@/components/Cards'
import React from 'react'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import Instructors from '@/components/Instructors'
import Footer from '@/components/Footer'

function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-while/[0.02]">
      <HeroSection/>
      <Featuredcourses/>
      <WhyChooseUs />
      <Cards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  )
}

export default page