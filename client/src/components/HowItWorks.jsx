import React from 'react'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative bg-[#faf8f5] py-20 lg:py-28 overflow-hidden">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[700px] rounded-full bg-amber-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#fbf4e8] border border-[#f5e4bf] text-xs font-bold tracking-wider text-[#af793e] uppercase mb-4 shadow-2xs">
            HOW IT WORKS
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Simple Steps, Beautiful Results
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Deliver memories to your clients in just a few clicks.
          </p>
        </div>

        {/* 4 STEPS GRID WITH CONNECTING ARROWS */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 items-stretch">
          
          {/* STEP 1: Guest Phone */}
          <div className="relative group flex flex-col items-center">
            
            {/* Dashed Rounded Container */}
            <div className="w-full h-full min-h-[300px] border-2 border-dashed border-gray-200/90 rounded-[2.2rem] bg-white/40 p-6 flex flex-col items-center justify-between transition-all hover:border-[#af793e]/40 hover:bg-white/70 shadow-2xs">
              
              {/* Step Number Badge */}
              <div className="-mt-10 px-4 py-1 rounded-full bg-[#fbf4e8] border border-[#f5e4bf] text-xs sm:text-sm font-bold text-[#af793e] shadow-xs">
                01
              </div>

              {/* Graphic: Smartphone mockup with floral accents */}
              <div className="relative my-auto py-3 flex items-center justify-center">
                
                {/* Floral Bouquet on Left */}
                <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 w-14 h-24 sm:w-16 sm:h-28 pointer-events-none opacity-90">
                  <svg viewBox="0 0 80 140" fill="none" className="w-full h-full">
                    {/* Soft Watercolor Roses & Leaves */}
                    <circle cx="35" cy="40" r="16" fill="#fceae6" />
                    <circle cx="35" cy="40" r="10" fill="#f8cfc7" />
                    <circle cx="35" cy="40" r="5" fill="#e99e91" />
                    
                    <circle cx="20" cy="75" r="15" fill="#fef1ea" />
                    <circle cx="20" cy="75" r="9" fill="#fbd1bd" />
                    
                    <circle cx="45" cy="95" r="14" fill="#fceae6" />
                    <circle cx="45" cy="95" r="8" fill="#f8cfc7" />

                    {/* Stems & Leaves */}
                    <path d="M 35 55 Q 30 90 25 130" stroke="#8fa989" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 20 88 Q 30 110 32 135" stroke="#7a9774" strokeWidth="2" strokeLinecap="round" />
                    <ellipse cx="12" cy="50" rx="8" ry="4" fill="#a4be9e" transform="rotate(-30 12 50)" />
                    <ellipse cx="50" cy="70" rx="7" ry="4" fill="#8fa989" transform="rotate(25 50 70)" />
                    <ellipse cx="15" cy="105" rx="7" ry="3.5" fill="#a4be9e" transform="rotate(-20 15 105)" />
                  </svg>
                </div>

                {/* Smartphone Device */}
                <div className="w-28 sm:w-32 h-52 sm:h-56 bg-[#111827] rounded-[2rem] p-1.5 shadow-xl border-2 border-gray-800 relative z-10">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-white rounded-[1.6rem] p-2 flex flex-col items-center justify-between text-center overflow-hidden">
                    
                    {/* Screen Header */}
                    <div className="w-full flex items-center justify-between px-1 pt-1 border-b border-gray-100 pb-1">
                      <div className="flex items-center gap-1">
                        <div className="w-3.5 h-3.5 rounded-full bg-amber-200 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Bride" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[7px] font-bold text-gray-800 truncate">Wedding Photos</span>
                      </div>
                      <div className="w-2.5 h-2.5 flex flex-col justify-between py-0.5">
                        <span className="w-full h-[1px] bg-gray-400" />
                        <span className="w-full h-[1px] bg-gray-400" />
                        <span className="w-full h-[1px] bg-gray-400" />
                      </div>
                    </div>

                    {/* QR Code in Phone */}
                    <div className="w-16 h-16 p-0.5 my-auto">
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        <rect x="5" y="5" width="30" height="30" rx="3" fill="#111827" />
                        <rect x="10" y="10" width="20" height="20" rx="1.5" fill="white" />
                        <rect x="14" y="14" width="12" height="12" fill="#111827" />
                        
                        <rect x="65" y="5" width="30" height="30" rx="3" fill="#111827" />
                        <rect x="70" y="10" width="20" height="20" rx="1.5" fill="white" />
                        <rect x="74" y="14" width="12" height="12" fill="#111827" />

                        <rect x="5" y="65" width="30" height="30" rx="3" fill="#111827" />
                        <rect x="10" y="70" width="20" height="20" rx="1.5" fill="white" />
                        <rect x="14" y="74" width="12" height="12" fill="#111827" />

                        <rect x="42" y="8" width="6" height="6" fill="#111827" />
                        <rect x="52" y="16" width="6" height="12" fill="#111827" />
                        <rect x="42" y="34" width="16" height="6" fill="#111827" />
                        <rect x="12" y="44" width="20" height="6" fill="#111827" />
                        <rect x="42" y="44" width="14" height="12" fill="#111827" />
                        <rect x="64" y="44" width="24" height="6" fill="#111827" />
                        <rect x="42" y="66" width="12" height="12" fill="#111827" />
                        <rect x="64" y="64" width="8" height="24" fill="#111827" />
                        <rect x="80" y="78" width="12" height="12" fill="#111827" />
                      </svg>
                    </div>

                    {/* Scan to View Button */}
                    <div className="w-full py-1 bg-[#d4a373] text-white rounded-md text-[7px] font-bold tracking-tight shadow-2xs mb-0.5">
                      Scan to View
                    </div>

                  </div>
                </div>

              </div>

              {/* Text Info */}
              <div className="text-center mt-3">
                <h3 className="font-bold text-gray-900 text-lg">Guest Phone</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed max-w-xs">
                  Guests scan the QR code using their phone to access the gallery.
                </p>
              </div>

            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[#af793e]">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

          </div>

          {/* STEP 2: Upload */}
          <div className="relative group flex flex-col items-center">
            
            <div className="w-full h-full min-h-[300px] border-2 border-dashed border-gray-200/90 rounded-[2.2rem] bg-white/40 p-6 flex flex-col items-center justify-between transition-all hover:border-[#af793e]/40 hover:bg-white/70 shadow-2xs">
              
              {/* Step Number Badge */}
              <div className="-mt-10 px-4 py-1 rounded-full bg-[#fbf4e8] border border-[#f5e4bf] text-xs sm:text-sm font-bold text-[#af793e] shadow-xs">
                02
              </div>

              {/* Graphic: 3D Cloud with floating photos & upload arrow */}
              <div className="relative my-auto py-3 flex items-center justify-center w-full min-h-[170px]">
                
                {/* Floating Photo 1 (Left - Sunset Beach) */}
                <div className="absolute top-1 left-3 sm:left-6 w-16 h-12 rounded-lg overflow-hidden border-2 border-white shadow-md transform -rotate-12 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200&auto=format&fit=crop"
                    alt="Sunset Beach"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Photo 2 (Right - Mountain View) */}
                <div className="absolute top-2 right-3 sm:right-6 w-16 h-12 rounded-lg overflow-hidden border-2 border-white shadow-md transform rotate-12 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=200&auto=format&fit=crop"
                    alt="Mountain Landscape"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 3D Soft White Cloud */}
                <div className="relative z-10 w-36 h-24 bg-white/95 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center">
                  {/* Cloud Bumps */}
                  <div className="absolute -top-5 left-5 w-16 h-16 bg-white rounded-full border-t border-gray-100" />
                  <div className="absolute -top-8 right-6 w-18 h-18 bg-white rounded-full border-t border-gray-100" />
                  
                  {/* Golden Upload Arrow */}
                  <div className="relative z-20 text-[#c8924b]">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 16V7.85l-2.6 2.6L7 9l5-5 5 5-1.4 1.45-2.6-2.6V16h-2z" />
                      <rect x="7" y="18" width="10" height="2" rx="1" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Text Info */}
              <div className="text-center mt-3">
                <h3 className="font-bold text-gray-900 text-lg">Upload</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed max-w-xs">
                  You upload all the photos from the event to our secure platform.
                </p>
              </div>

            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[#af793e]">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

          </div>

          {/* STEP 3: Generate QR */}
          <div className="relative group flex flex-col items-center">
            
            <div className="w-full h-full min-h-[300px] border-2 border-dashed border-gray-200/90 rounded-[2.2rem] bg-white/40 p-6 flex flex-col items-center justify-between transition-all hover:border-[#af793e]/40 hover:bg-white/70 shadow-2xs">
              
              {/* Step Number Badge */}
              <div className="-mt-10 px-4 py-1 rounded-full bg-[#fbf4e8] border border-[#f5e4bf] text-xs sm:text-sm font-bold text-[#af793e] shadow-xs">
                03
              </div>

              {/* Graphic: Custom QR Code with camera emblem and gold accents */}
              <div className="relative my-auto py-3 flex items-center justify-center min-h-[170px]">
                <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-2xl shadow-xl border border-gray-100 p-3.5 flex flex-col items-center justify-center relative">
                  
                  {/* Detailed QR Matrix */}
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    {/* Gold Corner 1 (Top Left) */}
                    <rect x="4" y="4" width="28" height="28" rx="4" fill="#c8924b" />
                    <rect x="8" y="8" width="20" height="20" rx="2" fill="white" />
                    <rect x="12" y="12" width="12" height="12" rx="1.5" fill="#c8924b" />
                    
                    {/* Gold Corner 2 (Top Right) */}
                    <rect x="68" y="4" width="28" height="28" rx="4" fill="#c8924b" />
                    <rect x="72" y="8" width="20" height="20" rx="2" fill="white" />
                    <rect x="76" y="12" width="12" height="12" rx="1.5" fill="#c8924b" />

                    {/* Gold Corner 3 (Bottom Left) */}
                    <rect x="4" y="68" width="28" height="28" rx="4" fill="#c8924b" />
                    <rect x="8" y="72" width="20" height="20" rx="2" fill="white" />
                    <rect x="12" y="76" width="12" height="12" rx="1.5" fill="#c8924b" />

                    {/* QR Code Dots */}
                    <rect x="38" y="6" width="6" height="6" fill="#18181b" />
                    <rect x="48" y="6" width="6" height="6" fill="#18181b" />
                    <rect x="58" y="6" width="6" height="6" fill="#18181b" />
                    
                    <rect x="38" y="18" width="6" height="12" fill="#18181b" />
                    <rect x="54" y="18" width="10" height="6" fill="#18181b" />
                    
                    <rect x="6" y="38" width="6" height="6" fill="#18181b" />
                    <rect x="18" y="38" width="12" height="6" fill="#18181b" />
                    <rect x="70" y="38" width="24" height="6" fill="#18181b" />

                    <rect x="6" y="50" width="12" height="6" fill="#18181b" />
                    <rect x="24" y="50" width="8" height="8" fill="#18181b" />
                    <rect x="68" y="50" width="10" height="6" fill="#18181b" />
                    <rect x="84" y="50" width="10" height="12" fill="#18181b" />

                    <rect x="38" y="68" width="8" height="12" fill="#18181b" />
                    <rect x="52" y="68" width="10" height="6" fill="#18181b" />
                    <rect x="74" y="68" width="10" height="6" fill="#18181b" />

                    <rect x="38" y="86" width="12" height="8" fill="#18181b" />
                    <rect x="56" y="82" width="12" height="12" fill="#18181b" />
                    <rect x="74" y="82" width="20" height="6" fill="#18181b" />
                  </svg>

                  {/* Center Camera Icon Badge in QR code */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-md shadow-xs border border-gray-100 text-[#c8924b]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>

                </div>
              </div>

              {/* Text Info */}
              <div className="text-center mt-3">
                <h3 className="font-bold text-gray-900 text-lg">Generate QR</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed max-w-xs">
                  We generate a unique QR code for this event's live gallery.
                </p>
              </div>

            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[#af793e]">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

          </div>

          {/* STEP 4: Live Gallery */}
          <div className="relative group flex flex-col items-center">
            
            <div className="w-full h-full min-h-[300px] border-2 border-dashed border-gray-200/90 rounded-[2.2rem] bg-white/40 p-6 flex flex-col items-center justify-between transition-all hover:border-[#af793e]/40 hover:bg-white/70 shadow-2xs">
              
              {/* Step Number Badge */}
              <div className="-mt-10 px-4 py-1 rounded-full bg-[#fbf4e8] border border-[#f5e4bf] text-xs sm:text-sm font-bold text-[#af793e] shadow-xs">
                04
              </div>

              {/* Graphic: Stack of polaroid wedding photos */}
              <div className="relative my-auto py-3 flex items-center justify-center min-h-[170px] w-full">
                
                {/* Back Photo 1 (Tilted Left) */}
                <div className="absolute top-2 left-6 sm:left-8 w-28 sm:w-32 h-36 sm:h-40 bg-white p-2 pb-5 rounded-xl shadow-md transform -rotate-8 border border-gray-100 z-0">
                  <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=200&auto=format&fit=crop"
                      alt="Wedding Party"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Back Photo 2 (Tilted Right) */}
                <div className="absolute top-3 right-6 sm:right-8 w-28 sm:w-32 h-36 sm:h-40 bg-white p-2 pb-5 rounded-xl shadow-md transform rotate-8 border border-gray-100 z-10">
                  <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=200&auto=format&fit=crop"
                      alt="Wedding Celebration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Front Photo (Centered Couple) */}
                <div className="relative z-20 w-30 sm:w-36 h-38 sm:h-44 bg-white p-2 pb-6 rounded-xl shadow-xl border border-gray-100 transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop"
                      alt="Bride and Groom"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>

              {/* Text Info */}
              <div className="text-center mt-3">
                <h3 className="font-bold text-gray-900 text-lg">Live Gallery</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed max-w-xs">
                  Guests enjoy the photos in real-time and download their favorites.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM TRUST BADGE PILL CONTAINER */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-8 py-3.5 bg-white rounded-2xl sm:rounded-full border border-gray-200/90 shadow-sm">
            
            {/* Secure */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800">
              <svg className="w-4 h-4 text-[#af793e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Secure</span>
            </div>

            {/* Instant Access */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800">
              <svg className="w-4 h-4 text-[#af793e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>Instant Access</span>
            </div>

            {/* Always Available */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800">
              <svg className="w-4 h-4 text-[#af793e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              </svg>
              <span>Always Available</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
