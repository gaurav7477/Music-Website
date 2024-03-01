import Featuredcourses from '@/components/Featuredcourses'
import HeroSection from '@/components/HeroSection'
import React from 'react'

function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-while/[0.02]">
      <HeroSection/>
      <Featuredcourses/>
    </main>
  )
}

export default page