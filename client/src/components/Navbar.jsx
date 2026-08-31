import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets/assets'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white/95 sm:bg-[#faf8f5]/80 backdrop-blur-md sticky top-0 z-50 transition-all border-b border-gray-100/60 sm:border-none">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO: From assets file */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="PhotoStudio Logo"
            className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-700">
          <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="/gallery" className="hover:text-gray-900 transition-colors">Gellary</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-gray-900 transition-colors">Testimonials</a>
          <a href="#blog" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/admin/login"
            className="px-5 py-2.5 rounded-xl border border-gray-300/80 bg-white/60 hover:bg-white text-gray-800 text-sm font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
          >
            Log in
          </Link>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#af793e] hover:bg-[#9d6b35] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            Get Started Free
          </a>
        </div>

        {/* MOBILE MENU TOGGLE (HAMBURGER / CLOSE) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 text-gray-900 hover:text-black transition-colors cursor-pointer"
        >
          {open ? (
            <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

      </nav>

      {/* MOBILE HAMBURGER MENU DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-[0_20px_35px_rgba(0,0,0,0.06)] px-6 pt-2 pb-8 animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Nav Links Stack */}
          <div className="flex flex-col space-y-1 text-[17px] font-semibold text-gray-800 py-2">
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="py-2.5 hover:text-[#af793e] transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setOpen(false)}
              className="py-2.5 hover:text-[#af793e] transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="py-2.5 hover:text-[#af793e] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setOpen(false)}
              className="py-2.5 hover:text-[#af793e] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#blog"
              onClick={() => setOpen(false)}
              className="py-2.5 hover:text-[#af793e] transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-2.5 hover:text-[#af793e] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100/90 my-3" />

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-1">
            <Link
              to="/admin/login"
              onClick={() => setOpen(false)}
              className="w-full py-3.5 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 text-sm font-bold shadow-2xs transition-colors text-center block cursor-pointer"
            >
              Log in
            </Link>
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="w-full py-3.5 rounded-2xl bg-[#b78446] hover:bg-[#a2743b] text-white text-sm font-bold shadow-md shadow-[#b78446]/20 transition-colors text-center block cursor-pointer"
            >
              Get Started Free
            </a>
          </div>

        </div>
      )}
    </header>
  )
}

export default Navbar
