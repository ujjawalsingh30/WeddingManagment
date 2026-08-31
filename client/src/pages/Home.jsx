import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GalleryShowcase from '../components/GalleryShowcase'
import HowItWorks from '../components/HowItWorks'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <GalleryShowcase />
        <HowItWorks />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
