import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
          {/* Subtle background ambient glows */}
          <div className="absolute top-0 right-1/4 -z-10 w-[550px] h-[550px] rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
          <div className="absolute top-48 left-10 -z-10 w-80 h-80 rounded-full bg-orange-50/60 blur-2xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Headline, Bio, and Stats */}
              <div className="lg:col-span-7 space-y-6">
                {/* Tag pill */}
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#b78446] uppercase">
                  <span>&rarr; ABOUT US</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#18181b] tracking-tight leading-[1.12]">
                  Built for Photographers. <br />
                  <span className="text-[#b78446]">Inspired by Passion.</span>
                </h1>

                {/* Subtitle / Paragraph */}
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                  PhotoStudio was created to simplify the way photographers share, deliver, and manage memories. We combine technology with creativity so you can focus on what you do best &mdash; capturing beautiful moments.
                </p>

                {/* 4 Stats Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                  {/* Stat 1 */}
                  <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-xs transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b78446] flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-[#18181b]">10,000+</div>
                    <div className="text-xs font-medium text-gray-500 mt-0.5">Photographers Trust Us</div>
                  </div>

                  {/* Stat 2 */}
                  <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-xs transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b78446] flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-[#18181b]">2M+</div>
                    <div className="text-xs font-medium text-gray-500 mt-0.5">Happy Clients</div>
                  </div>

                  {/* Stat 3 */}
                  <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-xs transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b78446] flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-[#18181b]">50M+</div>
                    <div className="text-xs font-medium text-gray-500 mt-0.5">Photos Delivered</div>
                  </div>

                  {/* Stat 4 */}
                  <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-xs transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b78446] flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-[#18181b]">150+</div>
                    <div className="text-xs font-medium text-gray-500 mt-0.5">Countries Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Composition */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg">
                  {/* Decorative Frame Effect */}
                  <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#f0e6d6]/60 border border-amber-200/50 transform -rotate-1 -z-10" />
                  
                  {/* Main Frame Card */}
                  <div className="relative bg-white p-4 sm:p-6 rounded-3xl shadow-xl border border-amber-100/80 overflow-hidden">
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-inner group">
                      <img
                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
                        alt="Vintage Camera & Studio Setup"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Quote Overlay Badge inside Frame */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/60 text-center">
                        <p className="font-serif italic text-sm sm:text-base text-gray-800 font-medium">
                          &ldquo;Every picture has a story. We help you share it.&rdquo;
                        </p>
                        <span className="text-xs font-semibold text-[#b78446] tracking-wide mt-1 block">
                          &hearts; PhotoStudio
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. OUR STORY SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-y border-amber-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image Collage */}
              <div className="lg:col-span-6 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Background accent patch */}
                  <div className="absolute -top-6 -left-6 w-48 h-48 bg-amber-100/50 rounded-full blur-xl -z-10" />

                  {/* Main Large Image */}
                  <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-4/3">
                    <img
                      src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80"
                      alt="Photographer taking photos"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Secondary Overlapping Card - Top Right */}
                  <div className="absolute -top-8 -right-4 sm:-right-8 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-square hidden sm:block">
                    <img
                      src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80"
                      alt="Photography gear and lighting setup"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tertiary Overlapping Card - Bottom Floating Laptop UI */}
                  <div className="absolute -bottom-8 -right-2 sm:right-6 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 max-w-xs flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
                      alt="Dashboard Interface preview"
                      className="w-16 h-12 object-cover rounded-lg border border-gray-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-gray-900">Seamless Delivery</div>
                      <div className="text-[11px] text-gray-500">Fast, automated galleries</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Story Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#b78446] uppercase">
                  <span>OUR STORY</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181b] tracking-tight leading-tight">
                  From a Photographer&apos;s Struggle to a <br />
                  <span className="text-[#b78446]">Smarter Solution</span>
                </h2>

                <p className="text-gray-600 leading-relaxed text-base">
                  We&apos;ve been in your shoes. Endless hours uploading photos, sending files, managing links, and answering the same questions from clients.
                </p>

                <p className="text-gray-600 leading-relaxed text-base">
                  So we built PhotoStudio &mdash; a simple, beautiful, and secure platform that helps photographers deliver unforgettable experiences to their clients.
                </p>

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {/* Pillar 1 */}
                  <div className="bg-[#faf8f5] p-4 rounded-2xl border border-amber-100/70 text-center flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100/60 text-[#b78446] flex items-center justify-center mb-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-800">Born from real problems</span>
                  </div>

                  {/* Pillar 2 */}
                  <div className="bg-[#faf8f5] p-4 rounded-2xl border border-amber-100/70 text-center flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100/60 text-[#b78446] flex items-center justify-center mb-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-800">Designed for photographers</span>
                  </div>

                  {/* Pillar 3 */}
                  <div className="bg-[#faf8f5] p-4 rounded-2xl border border-amber-100/70 text-center flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100/60 text-[#b78446] flex items-center justify-center mb-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-800">Focused on client happiness</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. OUR MISSION & VISION SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Mission Card */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-amber-100/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#fcf5e7] text-[#b78446] flex items-center justify-center shrink-0 border border-amber-200/40">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-[#b78446] uppercase">OUR MISSION</span>
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-1">
                      Empower Photographers, <br />
                      <span className="text-[#b78446]">Delight Clients</span>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-6">
                  We empower photographers with the tools they need to work smarter, deliver faster, and build stronger relationships with their clients.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-amber-100/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#fcf5e7] text-[#b78446] flex items-center justify-center shrink-0 border border-amber-200/40">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-[#b78446] uppercase">OUR VISION</span>
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-1">
                      The World&apos;s Most Loved <br />
                      <span className="text-[#b78446]">Photography Platform</span>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-6">
                  We envision a world where every photographer, independent or professional, can deliver premium experiences effortlessly and make every memory easy to cherish.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. WHY PHOTOGRAPHERS CHOOSE US SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-t border-amber-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Tag Badge with Camera Icon & Decorative Accent Lines */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#d4a373]/60" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf8f0] border border-[#f5e6d0] shadow-2xs">
                <svg className="w-4 h-4 text-[#b78446]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#b78446] uppercase">
                  BUILT FOR PHOTOGRAPHERS, LOVED BY CLIENTS
                </span>
              </div>
              <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#d4a373]/60" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight mb-3">
              Why <span className="text-[#b78446]">Photographers</span> Choose Us
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed mb-12">
              We understand your workflow, your time, and your art. <br className="hidden sm:inline" />
              Here&apos;s how we help you deliver better, faster.
            </p>

            {/* 5 Feature Cards Row Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              
              {/* Card 01: Save Hours */}
              <div className="bg-white p-6 rounded-3xl border border-amber-100/90 shadow-2xs hover:shadow-lg transition-all transform hover:-translate-y-1 relative flex flex-col justify-between items-center group">
                <span className="absolute top-4 left-4 text-[11px] font-extrabold text-[#b78446] bg-[#fcf5e7] px-2.5 py-0.5 rounded-full border border-amber-200/60">
                  01
                </span>
                <div className="w-16 h-16 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] my-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                    <line x1="2" y1="12" x2="4" y2="12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Save Hours</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Automate the way you share photos and cut down hours of manual work every week.
                  </p>
                </div>
              </div>

              {/* Card 02: Look Professional */}
              <div className="bg-white p-6 rounded-3xl border border-amber-100/90 shadow-2xs hover:shadow-lg transition-all transform hover:-translate-y-1 relative flex flex-col justify-between items-center group">
                <span className="absolute top-4 left-4 text-[11px] font-extrabold text-[#b78446] bg-[#fcf5e7] px-2.5 py-0.5 rounded-full border border-amber-200/60">
                  02
                </span>
                <div className="w-16 h-16 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] my-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Look Professional</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Deliver stunning branded galleries that reflect your style and make you stand out.
                  </p>
                </div>
              </div>

              {/* Card 03: Deliver Faster */}
              <div className="bg-white p-6 rounded-3xl border border-amber-100/90 shadow-2xs hover:shadow-lg transition-all transform hover:-translate-y-1 relative flex flex-col justify-between items-center group">
                <span className="absolute top-4 left-4 text-[11px] font-extrabold text-[#b78446] bg-[#fcf5e7] px-2.5 py-0.5 rounded-full border border-amber-200/60">
                  03
                </span>
                <div className="w-16 h-16 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] my-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Deliver Faster</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    From upload to gallery in seconds. Get your photos to clients before your competitors do.
                  </p>
                </div>
              </div>

              {/* Card 04: Stay Organized */}
              <div className="bg-white p-6 rounded-3xl border border-amber-100/90 shadow-2xs hover:shadow-lg transition-all transform hover:-translate-y-1 relative flex flex-col justify-between items-center group">
                <span className="absolute top-4 left-4 text-[11px] font-extrabold text-[#b78446] bg-[#fcf5e7] px-2.5 py-0.5 rounded-full border border-amber-200/60">
                  04
                </span>
                <div className="w-16 h-16 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] my-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
                    <circle cx="12" cy="13" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Organized</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Every project, every client, every photo &mdash; perfectly organized and easy to manage.
                  </p>
                </div>
              </div>

              {/* Card 05: Protect Your Work */}
              <div className="bg-white p-6 rounded-3xl border border-amber-100/90 shadow-2xs hover:shadow-lg transition-all transform hover:-translate-y-1 relative flex flex-col justify-between items-center group sm:col-span-2 lg:col-span-1">
                <span className="absolute top-4 left-4 text-[11px] font-extrabold text-[#b78446] bg-[#fcf5e7] px-2.5 py-0.5 rounded-full border border-amber-200/60">
                  05
                </span>
                <div className="w-16 h-16 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] my-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <rect x="9" y="10" width="6" height="5" rx="1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Protect Your Work</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Secure galleries, controlled access, and protection for your valuable photography.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Metrics & Testimonial Bar */}
            <div className="bg-[#fcfaf7] border border-amber-100/90 rounded-3xl p-6 sm:p-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-left">
              
              {/* Left 3 Metrics */}
              <div className="lg:col-span-7 flex flex-wrap items-center justify-between gap-6 border-b lg:border-b-0 lg:border-r border-amber-200/50 pb-6 lg:pb-0 pr-0 lg:pr-6">
                
                {/* Metric 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-gray-900">10,000+</div>
                    <div className="text-xs font-medium text-gray-500">Happy Photographers</div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-gray-900">5M+</div>
                    <div className="text-xs font-medium text-gray-500">Photos Delivered</div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#fdf5eb] border border-amber-100 flex items-center justify-center text-[#b78446] shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 14.89 9 11.6l3 2.14 4-2.85 4 2.85" />
                      <path d="M12 2v10" />
                      <path d="m16 6-4-4-4 4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-gray-900">2TB+</div>
                    <div className="text-xs font-medium text-gray-500">Photos Uploaded</div>
                  </div>
                </div>

              </div>

              {/* Right Testimonial Quote */}
              <div className="lg:col-span-5 flex items-center gap-4 pl-0 lg:pl-4">
                <span className="text-4xl font-serif text-[#b78446] leading-none shrink-0">&ldquo;</span>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                    PhotoStudio has completely changed the way I deliver galleries to my clients.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex -space-x-2 overflow-hidden">
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500">Loved by photographers worldwide</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. MEET THE TEAM SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#b78446] uppercase mb-2">
              <span>MEET THE TEAM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight mb-12">
              People Behind <span className="text-[#b78446]">PhotoStudio</span>
            </h2>

            {/* Team Grid (4 cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Member 1: Rishi Sharma */}
              <div className="bg-white rounded-3xl p-6 border border-amber-100/80 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between">
                <div>
                  <div className="aspect-square rounded-2xl overflow-hidden mb-5 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                      alt="Rishi Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Rishi Sharma</h3>
                  <p className="text-xs font-semibold text-[#b78446] mb-3">Co-founder &amp; CEO</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    A photographer at heart, passionate about technology and solving problems.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-amber-50 text-[#b78446] flex items-center justify-center hover:bg-[#b78446] hover:text-white transition-colors"
                    aria-label="Rishi Sharma LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Member 2: Ananya Verma */}
              <div className="bg-white rounded-3xl p-6 border border-amber-100/80 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between">
                <div>
                  <div className="aspect-square rounded-2xl overflow-hidden mb-5 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                      alt="Ananya Verma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Ananya Verma</h3>
                  <p className="text-xs font-semibold text-[#b78446] mb-3">Co-founder &amp; CTO</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Tech enthusiast who loves building simple, powerful products.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-amber-50 text-[#b78446] flex items-center justify-center hover:bg-[#b78446] hover:text-white transition-colors"
                    aria-label="Ananya Verma LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Member 3: Vikram Singh */}
              <div className="bg-white rounded-3xl p-6 border border-amber-100/80 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between">
                <div>
                  <div className="aspect-square rounded-2xl overflow-hidden mb-5 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                      alt="Vikram Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Vikram Singh</h3>
                  <p className="text-xs font-semibold text-[#b78446] mb-3">Product Lead</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Focuses on creating meaningful features that photographers love.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-amber-50 text-[#b78446] flex items-center justify-center hover:bg-[#b78446] hover:text-white transition-colors"
                    aria-label="Vikram Singh LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Member 4: Meera Nair */}
              <div className="bg-white rounded-3xl p-6 border border-amber-100/80 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between">
                <div>
                  <div className="aspect-square rounded-2xl overflow-hidden mb-5 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
                      alt="Meera Nair"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Meera Nair</h3>
                  <p className="text-xs font-semibold text-[#b78446] mb-3">Customer Success Lead</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Dedicated to helping photographers succeed and grow.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-amber-50 text-[#b78446] flex items-center justify-center hover:bg-[#b78446] hover:text-white transition-colors"
                    aria-label="Meera Nair LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#181411] via-[#241a14] to-[#120e0b] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-amber-900/30">
            {/* Background Camera Lens SVG Graphic Overlay */}
            <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center justify-end pr-10">
              <svg className="w-96 h-96 text-amber-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-[#d4a373] flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Let&apos;s Build Beautiful Experiences Together
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We&apos;re just getting started. Join thousands of photographers who trust PhotoStudio to deliver memories that last a lifetime.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#af793e] hover:bg-[#9d6b35] text-white text-base font-semibold shadow-lg shadow-[#af793e]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Start Your Free Trial</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default About
