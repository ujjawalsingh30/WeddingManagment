import React, { useState } from 'react'
import { logo } from '../assets/assets'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-[#faf8f5]/80 backdrop-blur-md sticky top-0 z-50 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO: From assets file */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Logo"
            className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-gray-900 transition-colors">Testimonials</a>
          <a href="#blog" className="hover:text-gray-900 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl border border-gray-300/80 bg-white/60 hover:bg-white text-gray-800 text-sm font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
          >
            Log in
          </button>
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl bg-[#af793e] hover:bg-[#9d6b35] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            Get Started Free
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          {open ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-5 shadow-lg space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-gray-700">
            <a href="#features" onClick={() => setOpen(false)} className="hover:text-gray-900 py-1">Features</a>
            <a href="#how-it-works" onClick={() => setOpen(false)} className="hover:text-gray-900 py-1">How it Works</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-gray-900 py-1">Pricing</a>
            <a href="#testimonials" onClick={() => setOpen(false)} className="hover:text-gray-900 py-1">Testimonials</a>
            <a href="#blog" onClick={() => setOpen(false)} className="hover:text-gray-900 py-1">Blog</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-gray-900 py-1">Contact</a>
          </div>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <button className="w-full py-2.5 rounded-xl border border-gray-300 bg-white text-gray-800 text-sm font-semibold">
              Log in
            </button>
            <button className="w-full py-2.5 rounded-xl bg-[#af793e] text-white text-sm font-semibold">
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
