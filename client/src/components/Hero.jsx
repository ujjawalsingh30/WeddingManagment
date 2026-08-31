import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] pt-8 pb-20 lg:pt-12 lg:pb-24">
      {/* Ambient background glow effects */}
      <div className="absolute top-0 right-1/4 -z-10 w-[550px] h-[550px] rounded-full bg-amber-100/35 blur-3xl pointer-events-none" />
      <div className="absolute top-48 left-10 -z-10 w-80 h-80 rounded-full bg-orange-50/50 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-6 space-y-6 text-left z-10">
            
            {/* 1. Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fcf5e7] border border-[#f5e4bf] shadow-2xs text-xs sm:text-sm font-medium text-[#996f2a]">
              <svg className="w-3.5 h-3.5 text-[#b8863b]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z" />
              </svg>
              <span>Trusted by 2,000+ Photographers</span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight text-[#18181b] leading-[1.12]">
              Deliver Memories. <br />
              <span className="text-[#b78446]">Delight Every Client.</span>
            </h1>

            {/* 3. VISUAL COLLAGE SHIFTED DIRECTLY AFTER HEADING (VISIBLE ON MOBILE & TABLET) */}
            <div className="lg:hidden py-4">
              <VisualCollage />
            </div>

            {/* 4. Subheading Description */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
              Upload photos in bulk, create private galleries for each customer, and let them access with a simple QR code. Secure, simple, and built for photographers.
            </p>

            {/* 5. CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#af793e] hover:bg-[#9d6b35] text-white text-base font-semibold shadow-md shadow-[#af793e]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Started Free</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white border border-gray-300/80 text-[#18181b] text-base font-semibold shadow-xs hover:bg-gray-50 hover:border-gray-400 transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center pl-0.5">
                  <svg className="w-2.5 h-2.5 fill-current text-[#18181b]" viewBox="0 0 24 24">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* 6. Value Checkmark Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-3 text-xs sm:text-sm font-medium text-gray-600">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#af793e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" stroke="#af793e" strokeWidth="2" fill="none" />
                  <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>No credit card required</span>
              </div>

              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#af793e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" stroke="#af793e" strokeWidth="2" fill="none" />
                  <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Free forever plan</span>
              </div>

              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#af793e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" stroke="#af793e" strokeWidth="2" fill="none" />
                  <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>

          </div>

          {/* RIGHT VISUAL COLUMN (DESKTOP) */}
          <div className="hidden lg:flex lg:col-span-6 relative justify-end">
            <VisualCollage />
          </div>

        </div>

        {/* BOTTOM FULL FEATURE STRIP */}
        <div className="mt-16 lg:mt-24 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100/90">
          
          <h3 className="text-center font-bold text-gray-900 text-sm sm:text-base mb-8 tracking-tight">
            Everything you need to deliver unforgettable moments
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            
            {/* Bulk Upload */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#fbf4e8] text-[#b78446] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m8 16 4-4 4 4" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Bulk Upload</h4>
              <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 leading-relaxed">Upload thousands of photos at once</p>
            </div>

            {/* Private Galleries */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#fbf4e8] text-[#b78446] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Private Galleries</h4>
              <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 leading-relaxed">Each client gets their own private gallery</p>
            </div>

            {/* QR Access */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#fbf4e8] text-[#b78446] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="5" height="5" x="3" y="3" rx="1" />
                  <rect width="5" height="5" x="16" y="3" rx="1" />
                  <rect width="5" height="5" x="3" y="16" rx="1" />
                  <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                  <path d="M21 21v.01" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">QR Access</h4>
              <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 leading-relaxed">One scan and photos are instantly accessible</p>
            </div>

            {/* Favorites */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#fbf4e8] text-[#b78446] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Favorites</h4>
              <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 leading-relaxed">Clients can favorite and select photos</p>
            </div>

            {/* Analytics */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#fbf4e8] text-[#b78446] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" x2="18" y1="20" y2="10" />
                  <line x1="12" x2="12" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="14" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Analytics</h4>
              <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 leading-relaxed">Track views, scans and downloads</p>
            </div>

            {/* Secure & Reliable */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#fbf4e8] text-[#b78446] flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Secure &amp; Reliable</h4>
              <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 leading-relaxed">Your photos are safe and always available</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

// Reusable Visual Collage Component matching the screenshot
const VisualCollage = () => {
  return (
    <div className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto">
      
      {/* Photographer Portrait Card with Rounded Shape */}
      <div className="relative w-full sm:w-[460px] h-[330px] sm:h-[390px] rounded-[3.2rem] sm:rounded-[4.2rem] overflow-hidden shadow-2xl z-0 mx-auto">
        <img
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop"
          alt="Photographer holding camera in autumn outdoors"
          className="w-full h-full object-cover object-[70%_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Card 1: Rahul & Priya Wedding Stats */}
      <div className="absolute top-16 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_20px_45px_rgba(0,0,0,0.14)] border border-gray-100 w-52 sm:w-60 z-20">
        <h4 className="font-bold text-xs sm:text-sm text-gray-900 mb-2.5">Rahul &amp; Priya Wedding</h4>
        
        {/* Avatar Stack */}
        <div className="flex items-center -space-x-1.5 mb-3.5">
          <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop" alt="Guest" />
          <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop" alt="Guest" />
          <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop" alt="Guest" />
          <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop" alt="Guest" />
          <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white bg-gray-100 text-[9px] font-semibold text-gray-600">+23</span>
        </div>

        {/* Metrics with icons */}
        <div className="space-y-2 text-xs text-gray-600 pt-1 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500">
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
              </svg>
              <span className="text-[11px]">Photos Uploaded</span>
            </div>
            <span className="font-bold text-gray-900 text-[11px]">2,350</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500">
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <span className="text-[11px]">Galleries Created</span>
            </div>
            <span className="font-bold text-gray-900 text-[11px]">24</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500">
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="6" height="6" x="3" y="3" rx="1" />
                <rect width="6" height="6" x="15" y="3" rx="1" />
                <rect width="6" height="6" x="3" y="15" rx="1" />
              </svg>
              <span className="text-[11px]">QR Codes Generated</span>
            </div>
            <span className="font-bold text-gray-900 text-[11px]">24</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mt-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eafaf1] text-[10px] font-semibold text-[#1e834d]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27ae60] animate-pulse" />
            All galleries are live
          </span>
        </div>
      </div>

      {/* Floating Card 2: Scan QR Code Card */}
      <div className="absolute top-36 sm:top-32 right-1 sm:right-4 bg-white rounded-2xl p-3 sm:p-4 shadow-[0_25px_50px_rgba(0,0,0,0.18)] border border-gray-100 z-30 flex flex-col items-center">
        <div className="w-22 h-22 sm:w-28 sm:h-28 bg-white p-1 rounded-lg">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            {/* Corner 1 */}
            <rect x="5" y="5" width="30" height="30" rx="4" fill="black" />
            <rect x="10" y="10" width="20" height="20" rx="2" fill="white" />
            <rect x="14" y="14" width="12" height="12" rx="1.5" fill="black" />
            
            {/* Corner 2 */}
            <rect x="65" y="5" width="30" height="30" rx="4" fill="black" />
            <rect x="70" y="10" width="20" height="20" rx="2" fill="white" />
            <rect x="74" y="14" width="12" height="12" rx="1.5" fill="black" />

            {/* Corner 3 */}
            <rect x="5" y="65" width="30" height="30" rx="4" fill="black" />
            <rect x="10" y="70" width="20" height="20" rx="2" fill="white" />
            <rect x="14" y="74" width="12" height="12" rx="1.5" fill="black" />

            {/* QR Matrix Pattern */}
            <rect x="42" y="6" width="6" height="6" fill="black" />
            <rect x="52" y="6" width="6" height="6" fill="black" />
            <rect x="42" y="18" width="6" height="6" fill="black" />
            <rect x="52" y="24" width="6" height="10" fill="black" />
            <rect x="42" y="30" width="16" height="6" fill="black" />
            
            <rect x="6" y="42" width="6" height="6" fill="black" />
            <rect x="18" y="42" width="10" height="6" fill="black" />
            <rect x="34" y="42" width="6" height="6" fill="black" />
            <rect x="46" y="42" width="8" height="8" fill="black" />
            <rect x="60" y="42" width="14" height="6" fill="black" />
            <rect x="80" y="42" width="14" height="6" fill="black" />

            <rect x="6" y="54" width="12" height="6" fill="black" />
            <rect x="24" y="54" width="6" height="6" fill="black" />
            <rect x="36" y="54" width="8" height="6" fill="black" />
            <rect x="50" y="54" width="14" height="6" fill="black" />
            <rect x="70" y="54" width="8" height="6" fill="black" />
            <rect x="84" y="54" width="10" height="6" fill="black" />

            <rect x="42" y="66" width="6" height="12" fill="black" />
            <rect x="54" y="66" width="10" height="6" fill="black" />
            <rect x="70" y="66" width="10" height="6" fill="black" />
            <rect x="86" y="66" width="8" height="6" fill="black" />

            <rect x="42" y="84" width="12" height="10" fill="black" />
            <rect x="60" y="78" width="14" height="6" fill="black" />
            <rect x="80" y="78" width="6" height="16" fill="black" />
            <rect x="60" y="88" width="14" height="6" fill="black" />
            <rect x="90" y="88" width="6" height="6" fill="black" />
          </svg>
        </div>
        <p className="text-[11px] sm:text-xs text-gray-700 font-semibold mt-1.5 tracking-tight">Scan to view gallery</p>
      </div>

      {/* 3 Photo Thumbnails at Bottom */}
      <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-12 sm:mt-10 ml-0 sm:ml-4 relative z-10">
        {/* Thumb 1: Wedding couple kissing with petals */}
        <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white transition-transform hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=300&auto=format&fit=crop"
            alt="Wedding Couple kissing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumb 2: Releasing balloons */}
        <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white transition-transform hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=300&auto=format&fit=crop"
            alt="Wedding Celebration Balloons"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumb 3: DSLR Camera equipment flat lay */}
        <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white transition-transform hover:scale-105 bg-black">
          <img
            src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=300&auto=format&fit=crop"
            alt="Camera Equipment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  )
}

export default Hero
