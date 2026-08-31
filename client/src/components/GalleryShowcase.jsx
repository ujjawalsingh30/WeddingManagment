import React, { useState, useEffect } from 'react'

const GalleryShowcase = () => {
  // Sets of rotating gallery images that slowly change smoothly
  const mainGalleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
      alt: 'Couple in golden hour wedding portrait'
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      alt: 'Romantic wedding kiss with confetti'
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
      alt: 'Wedding celebration party'
    },
    {
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop',
      alt: 'Joyful wedding couple smiling'
    }
  ]

  const topThumbImages = [
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=500&auto=format&fit=crop'
  ]

  const sideThumbImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=500&auto=format&fit=crop'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Slowly change picture every 4 seconds with smooth crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mainGalleryImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [mainGalleryImages.length])

  return (
    <section className="relative bg-[#faf8f5] py-20 lg:py-28 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-20 -z-10 w-[550px] h-[550px] rounded-full bg-amber-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-96 h-96 rounded-full bg-orange-50/40 blur-2xl pointer-events-none" />

      {/* Decorative Dot Grid (Top Right) */}
      <div className="absolute top-8 right-12 text-gray-300 opacity-60 hidden md:block pointer-events-none">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="currentColor">
          <circle cx="10" cy="10" r="2.5" />
          <circle cx="30" cy="10" r="2.5" />
          <circle cx="50" cy="10" r="2.5" />
          <circle cx="10" cy="30" r="2.5" />
          <circle cx="30" cy="30" r="2.5" />
          <circle cx="50" cy="30" r="2.5" />
          <circle cx="10" cy="50" r="2.5" />
          <circle cx="30" cy="50" r="2.5" />
          <circle cx="50" cy="50" r="2.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-5 space-y-6 text-left z-10">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf4e8] border border-[#f5e4bf] text-xs font-bold tracking-widest text-[#af793e] uppercase shadow-2xs">
              <svg className="w-3.5 h-3.5 text-[#c8924b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
              <span>BRING YOUR MOMENTS TO LIFE</span>
            </div>

            {/* Serif Large Display Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-serif text-[#18181b] tracking-tight leading-[1.12]">
              Your Story, <br />
              <span className="text-[#b78446] italic font-normal">Beautifully</span> <br />
              <span className="text-[#b78446]">Framed</span>
            </h2>

            {/* Heart Divider Line */}
            <div className="flex items-center gap-3 text-[#d4a373] pt-1">
              <span className="w-12 h-[1px] bg-[#e5cfb5]" />
              <svg className="w-4 h-4 fill-current text-[#b78446]" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="w-12 h-[1px] bg-[#e5cfb5]" />
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md pt-1">
              Picture it. We'll help bring it to life.
            </p>

            {/* 3 Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs sm:text-sm font-semibold text-gray-700">
              
              {/* Secure */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#af793e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Secure</span>
              </div>

              <span className="text-gray-300">|</span>

              {/* Easy to Use */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#af793e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span>Easy to Use</span>
              </div>

              <span className="text-gray-300">|</span>

              {/* Always Available */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#af793e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                </svg>
                <span>Always Available</span>
              </div>

            </div>

          </div>

          {/* RIGHT GALLERY COLLAGE (SLOW TRANSITIONING PICTURES) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end min-h-[460px] sm:min-h-[520px]">
            <div className="relative w-full max-w-[560px]">
              
              {/* Twinkling Sparkles at Top */}
              <div className="absolute -top-6 right-28 text-[#d4a373] flex items-center gap-1 pointer-events-none">
                <svg className="w-6 h-6 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
                <svg className="w-3.5 h-3.5 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              {/* Dotted Golden Orbit Trail with Small Heart */}
              <svg className="absolute -bottom-10 -left-10 w-full h-40 pointer-events-none z-0" viewBox="0 0 500 160" fill="none">
                <path d="M 10 120 C 140 160, 260 90, 480 110" stroke="#d5b58c" strokeWidth="1.4" strokeDasharray="5 5" strokeOpacity="0.45" />
              </svg>
              <div className="absolute -bottom-2 left-32 text-[#d4a373] text-sm pointer-events-none">
                ♡
              </div>

              {/* 1. MAIN LARGE ROTATING POLAROID FRAME (SLOW AUTO CROSSFADE) */}
              <div className="relative z-10 w-[260px] sm:w-[320px] h-[330px] sm:h-[400px] bg-white p-3 sm:p-4 pb-6 sm:pb-8 rounded-3xl shadow-2xl border border-gray-100/90 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100">
                  {mainGalleryImages.map((img, idx) => (
                    <img
                      key={img.url}
                      src={img.url}
                      alt={img.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    />
                  ))}
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* 2. TOP RIGHT SMALL PHOTO FRAME */}
              <div className="absolute top-2 right-4 sm:right-10 z-15 w-32 sm:w-40 h-32 sm:h-40 bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl border border-gray-100 transform rotate-6 hover:rotate-2 transition-transform duration-300">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={topThumbImages[currentIndex % topThumbImages.length]}
                    alt="Camera and flowers"
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                  />
                </div>
              </div>

              {/* 3. MIDDLE RIGHT PHOTO FRAME */}
              <div className="absolute top-40 right-0 sm:right-4 z-15 w-32 sm:w-38 h-32 sm:h-38 bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={sideThumbImages[currentIndex % sideThumbImages.length]}
                    alt="Lake and mountains sunset"
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                  />
                </div>
              </div>

              {/* 4. BOTANICAL GREENERY BRANCH (PEEKING FROM MAIN PHOTO CORNER) */}
              <div className="absolute bottom-2 left-10 sm:left-14 z-20 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none opacity-90">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M 20 80 Q 50 50 80 20" stroke="#607d5b" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="35" cy="65" rx="10" ry="5" fill="#88a883" transform="rotate(-35 35 65)" />
                  <ellipse cx="45" cy="55" rx="10" ry="5.5" fill="#a4be9e" transform="rotate(25 45 55)" />
                  <ellipse cx="58" cy="42" rx="11" ry="6" fill="#88a883" transform="rotate(-20 58 42)" />
                  <ellipse cx="68" cy="32" rx="9" ry="5" fill="#a4be9e" transform="rotate(30 68 32)" />
                  <ellipse cx="80" cy="20" rx="8" ry="4" fill="#88a883" transform="rotate(-15 80 20)" />
                </svg>
              </div>

              {/* 5. BOTTOM RIGHT STICKY NOTE / QUOTE CARD */}
              <div className="absolute -bottom-6 right-2 sm:right-10 z-25 bg-[#faf4ea] rounded-2xl p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-[#eeddc5] w-52 sm:w-60 text-center transform rotate-2 hover:rotate-0 transition-transform">
                
                {/* Camera Icon in Gold Badge */}
                <div className="w-8 h-8 rounded-lg bg-[#b78446] text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>

                {/* Handwritten Style Quote */}
                <p className="text-xs sm:text-sm font-serif italic text-gray-800 leading-snug">
                  Every picture has a story. <br />
                  <span className="font-semibold text-[#8c602a]">Let's make yours unforgettable.</span>
                </p>

                {/* Heart Accent Line */}
                <div className="flex items-center justify-center gap-2 mt-2.5 text-[#b78446]">
                  <span className="w-6 h-[1px] bg-[#d9bd9b]" />
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="w-6 h-[1px] bg-[#d9bd9b]" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default GalleryShowcase
