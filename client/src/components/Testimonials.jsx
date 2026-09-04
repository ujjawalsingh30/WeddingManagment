import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Amit Sharma',
      role: 'Wedding Photographer',
      location: 'Delhi, India',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      highlight: 'game changer',
      quote: 'PhotoStudio has completely changed the way I deliver photos to my clients. The QR gallery feature is a game changer — no more sending endless Google Drive links!',
      bannerImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      bannerText: 'Beautiful platform for beautiful stories ✨'
    },
    {
      id: 2,
      name: 'Neha Verma',
      role: 'Portrait & Event Photographer',
      location: 'Mumbai, India',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      highlight: 'smooth and professional',
      quote: 'The client experience is so smooth and professional. My clients love the custom branded galleries, and the favorite selection feature makes album creation so much easier.',
      bannerImg: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
      bannerText: 'More time for what I love — Photography ♡'
    },
    {
      id: 3,
      name: 'Rohan Mehta',
      role: 'Studio Owner',
      location: 'Bangalore, India',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      highlight: 'organized, secure, and beautifully simple',
      quote: 'As a studio owner, managing multiple events and clients was getting complicated. PhotoStudio keeps everything organized, secure, and beautifully simple.',
      bannerImg: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      bannerText: 'Organized. Professional. Reliable. ♡'
    },
    {
      id: 4,
      name: 'Karan Malhotra',
      role: 'Fashion Photographer',
      location: 'Chandigarh, India',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
      highlight: 'Simple, elegant, and powerful',
      quote: 'Simple, elegant, and powerful. Exactly what modern photographers need to impress clients and streamline gallery delivery.',
      bannerImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      bannerText: 'Elevating fashion stories ✨'
    },
    {
      id: 5,
      name: 'Sneha Kapoor',
      role: 'Newborn & Baby Photographer',
      location: 'Pune, India',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      highlight: 'thoughtful platform',
      quote: 'My clients love how easy it is to access and view their memories. Truly a thoughtful platform built with passion!',
      bannerImg: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
      bannerText: 'Capturing pure moments ♡'
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Format quote text with bold highlighted phrases
  const renderFormattedQuote = (quote, highlight) => {
    if (!highlight) return quote
    const parts = quote.split(highlight)
    if (parts.length < 2) return quote

    return (
      <>
        {parts[0]}
        <span className="font-bold text-gray-900">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#faf8f5] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Top Tag Badge */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 sm:w-16 h-px bg-[#d4a373]/60" />
            <span className="text-xs font-bold tracking-widest text-[#b78446] uppercase">
              TESTIMONIALS
            </span>
            <div className="w-10 sm:w-16 h-px bg-[#d4a373]/60" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Loved by Photographers <span className="text-[#b78446]">Across the World</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Hear from photographers who are already delivering beautiful experiences with PhotoStudio.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. TESTIMONIAL CARDS CAROUSEL GRID */}
        {/* ========================================================================= */}
        <div className="relative mb-16">
          
          {/* Responsive Card Grid / Carousel Window */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {[0, 1, 2].map((offset) => {
              const itemIndex = (activeIndex + offset) % testimonials.length
              const item = testimonials[itemIndex]
              const isMain = offset === 1

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-[2.2rem] border border-gray-200/90 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    isMain
                      ? 'shadow-xl scale-100 border-amber-200/80 ring-1 ring-amber-200/40'
                      : 'shadow-md opacity-90 hidden md:flex hover:opacity-100'
                  }`}
                >
                  <div>
                    {/* Golden Quote Symbol */}
                    <div className="text-4xl sm:text-5xl font-serif text-[#b78446] leading-none mb-3">
                      &ldquo;
                    </div>

                    {/* Quote Content */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed min-h-[80px]">
                      {renderFormattedQuote(item.quote, item.highlight)}
                    </p>

                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400 my-4 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3.5 mb-6">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-[#b78446]/20"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 leading-snug">{item.name}</h4>
                        <p className="text-[11px] text-gray-500 font-medium">{item.role}</p>
                        <p className="text-[10px] text-gray-400">{item.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Showcase Image Banner */}
                  <div className="relative rounded-2xl overflow-hidden aspect-16/7 shadow-inner group">
                    <img
                      src={item.bannerImg}
                      alt="Gallery story showcase"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Overlay Handwritten Style Annotation */}
                    <div className="absolute bottom-2.5 right-3 text-right">
                      <span className="font-serif italic text-white text-[11px] sm:text-xs drop-shadow-md">
                        {item.bannerText}
                      </span>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-gray-400 flex items-center justify-center transition-all shadow-2xs cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 bg-[#b78446]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-gray-400 flex items-center justify-center transition-all shadow-2xs cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. METRICS COUNTER BAR */}
        {/* ========================================================================= */}
        <div className="bg-[#fcfaf7] border border-amber-100/90 rounded-3xl p-6 sm:p-8 mb-16 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center text-left shadow-2xs">
          
          {/* Stat 1: 10,000+ Photographers */}
          <div className="flex items-center gap-4 border-r border-gray-200/60 last:border-r-0 pr-4">
            <div className="w-12 h-12 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-gray-900">10,000+</div>
              <div className="text-xs text-gray-500 font-medium">Photographers Trust Us</div>
            </div>
          </div>

          {/* Stat 2: 4.9/5 Rating */}
          <div className="flex items-center gap-4 border-r border-gray-200/60 last:border-r-0 pr-4">
            <div className="w-12 h-12 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-gray-900">4.9/5</div>
              <div className="text-xs text-gray-500 font-medium">Average Rating</div>
            </div>
          </div>

          {/* Stat 3: 2M+ Happy Clients */}
          <div className="flex items-center gap-4 border-r border-gray-200/60 last:border-r-0 pr-4">
            <div className="w-12 h-12 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-gray-900">2M+</div>
              <div className="text-xs text-gray-500 font-medium">Happy Clients</div>
            </div>
          </div>

          {/* Stat 4: 50M+ Memories Delivered */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-gray-900">50M+</div>
              <div className="text-xs text-gray-500 font-medium">Memories Delivered</div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM COMMUNITY CTA BANNER */}
        {/* ========================================================================= */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0c1017] text-white p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Background Image with Dark Overlays */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80"
              alt="Camera equipment backdrop"
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1017] via-[#0c1017]/90 to-transparent" />
          </div>

          {/* Left Text */}
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#d4a373] uppercase mb-2">
              <span>— JOIN OUR COMMUNITY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Be a Part of Something Beautiful
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Join thousands of photographers who trust PhotoStudio to deliver unforgettable memories.
            </p>
          </div>

          {/* Right Action & Handwritten Note */}
          <div className="relative z-10 text-center md:text-right shrink-0">
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#b78446] hover:bg-[#a2743b] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#b78446]/20 transition-all cursor-pointer"
            >
              <span>Get Started Today</span>
              <span>&rarr;</span>
            </Link>
            
            <p className="text-[11px] text-gray-400 mt-2">No credit card required</p>

            {/* Handwritten Floating Accent */}
            <div className="hidden lg:block absolute -right-4 -bottom-8 text-right pointer-events-none transform rotate-3">
              <span className="font-serif italic text-xs text-[#d4a373] block leading-tight">
                Capture<br />Share<br />Cherish ♡
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Testimonials
