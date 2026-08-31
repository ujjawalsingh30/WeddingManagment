import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with ${email}!`)
      setEmail('')
    }
  }

  return (
    <footer className="w-full bg-[#0c1017] text-white pt-16 pb-12 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN 5-COLUMN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          
          {/* Column 1: Brand Info & Socials (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-transparent border-2 border-[#d4a373] flex items-center justify-center text-[#d4a373]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">PhotoStudio</span>
            </a>

            {/* Tagline */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The easiest way for photographers to deliver beautiful memories to their clients.
            </p>

            {/* Social Media Round Buttons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#18202d] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#18202d] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#18202d] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-[#18202d] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Column 2: Product (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#d4a373] font-bold text-sm tracking-wide">Product</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#bulk-upload" className="hover:text-white transition-colors">Bulk Upload</a></li>
              <li><a href="#qr-gallery" className="hover:text-white transition-colors">QR Gallery</a></li>
              <li><a href="#analytics" className="hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Column 3: Resources (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#d4a373] font-bold text-sm tracking-wide">Resources</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#help-center" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#video-tutorials" className="hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#guides" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="#api-docs" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#system-status" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>

          {/* Column 4: Company (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#d4a373] font-bold text-sm tracking-wide">Company</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#about-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter (2-3 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#d4a373] font-bold text-sm tracking-wide">Newsletter</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Get tips, updates, and offers straight to your inbox.
            </p>

            {/* Newsletter Subscribe Form */}
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#131b26] border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a373] pr-11 transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-8 bg-[#c8924b] hover:bg-[#b5813e] text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current transform rotate-45 -mt-0.5 -ml-0.5" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>

            {/* Anti-spam note */}
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400 pt-1">
              <svg className="w-3.5 h-3.5 text-[#d4a373]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>No spam. Unsubscribe anytime.</span>
            </div>
          </div>

        </div>

        {/* BOTTOM SUB-FOOTER BAR */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          
          {/* Copyright text */}
          <div>
            © 2025 PhotoStudio. All Rights Reserved.
          </div>

          {/* Security & Uptime Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-400 text-xs">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Secure &amp; Encrypted</span>
            </div>

            <span className="text-gray-700 hidden sm:inline">|</span>

            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              </svg>
              <span>99.9% Uptime</span>
            </div>

            <span className="text-gray-700 hidden sm:inline">|</span>

            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span>Global CDN</span>
            </div>
          </div>

          {/* Payment Method Badges */}
          <div className="flex items-center gap-2.5">
            {/* VISA */}
            <div className="px-2.5 py-1 rounded bg-[#16202d] border border-gray-800 text-[11px] font-bold tracking-wider text-white">
              VISA
            </div>

            {/* Mastercard */}
            <div className="px-2.5 py-1 rounded bg-[#16202d] border border-gray-800 flex items-center justify-center">
              <div className="flex items-center -space-x-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#eb001b]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#f79e1b] opacity-90" />
              </div>
            </div>

            {/* AMEX */}
            <div className="px-2 py-1 rounded bg-[#16202d] border border-gray-800 text-[10px] font-bold text-[#006fcf]">
              AMEX
            </div>

            {/* PayPal */}
            <div className="px-2.5 py-1 rounded bg-[#16202d] border border-gray-800 text-[11px] font-bold italic text-[#003087]">
              PayPal
            </div>

            {/* Apple Pay */}
            <div className="px-2.5 py-1 rounded bg-[#16202d] border border-gray-800 flex items-center gap-1 text-[11px] font-semibold text-white">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.85-12.01-14.43-6.19-9.56-11.02-20.73-14.49-33.5-3.48-12.78-5.22-24.97-5.22-36.59 0-14.12 3.6-26.06 10.81-35.82 7.21-9.76 16.59-14.75 28.14-14.97 4.24 0 9.07 1.13 14.49 3.39 5.42 2.26 9.38 3.44 11.89 3.55 2.17 0 6.36-1.31 12.56-3.94 6.2-2.63 11.5-3.8 15.91-3.52 11.75.54 21.03 4.88 27.84 13.01-10.44 6.3-15.6 15.11-15.48 26.43.12 8.92 3.49 16.57 10.1 22.95 6.61 6.38 14.54 10.05 23.79 11.02-2.18 6.52-4.94 13.06-8.29 19.61zM119.22 31.84c0-7.39 2.65-14.28 7.95-20.67 5.3-6.39 11.85-10.44 19.65-12.17.65 6.74-.98 13.3-4.89 19.67-3.91 6.37-9.57 10.76-16.98 13.17-.98-.98-2.65-1.52-5.73-2.02z" />
              </svg>
              <span>Pay</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
