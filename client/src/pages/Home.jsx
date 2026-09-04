import React from 'react'
import Hero from '../components/Hero'
import GalleryShowcase from '../components/GalleryShowcase'
import HowItWorks from '../components/HowItWorks'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <main className="flex-1">
        <Hero />
        <GalleryShowcase />
        <HowItWorks />
        <Faq />
        <Testimonials/>
        <Contact />
      </main>
    </div>
  )
}

export default Home
