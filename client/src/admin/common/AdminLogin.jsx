import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { logo } from '../../assets/assets'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // Navigate to admin dashboard
      navigate('/admin/dashboard')
    }, 600)
  }

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-[#faf8f5] relative">
      
      {/* GLOBAL BACK BUTTON (TOP-LEFT) */}
      <Link
        to="/"
        className="absolute top-5 left-5 z-30 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-xs border border-gray-200/90 shadow-xs hover:bg-white text-gray-800 text-xs sm:text-sm font-bold transition-all transform hover:-translate-x-0.5 cursor-pointer"
      >
        <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>Back to Home</span>
      </Link>

      {/* LEFT COLUMN: Hero Dark Studio Showcase (HIDDEN ON PHONE/MOBILE, VISIBLE ON DESKTOP) */}
      <div className="hidden lg:flex lg:col-span-6 bg-[#0c1017] text-white relative p-8 sm:p-12 lg:p-14 flex-col justify-between overflow-hidden lg:min-h-screen">
        
        {/* Background Image of Professional DSLR Camera & Laptop Studio with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop"
            alt="Photography Studio Camera Equipment"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/85 to-[#0c1017]/70" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0c1017]/60 to-[#0c1017]" />
        </div>

        {/* TOP BRAND HEADER */}
        <div className="relative z-10 pt-10">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="PhotoStudio Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* MIDDLE HEADLINE INFO */}
        <div className="relative z-10 my-auto py-10 space-y-4 max-w-lg">
          
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#1e2638] border border-gray-700/80 text-[11px] font-bold tracking-widest text-[#d4a373] uppercase shadow-2xs">
            WELCOME BACK
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Admin Access
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Sign in to your admin account to manage galleries, customers, and your studio.
          </p>

          {/* Studio Camera & Dashboard Hero Graphic Accent */}
          <div className="pt-4 relative">
            <div className="w-full max-w-md h-48 sm:h-56 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop"
                alt="Studio workflow"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-gray-200">
                <span className="font-semibold text-white">PhotoStudio Workspace</span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM 3 FEATURE TILES */}
        <div className="relative z-10 pt-6 border-t border-gray-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* 1. Manage Galleries */}
          <div className="flex items-start gap-3">
            <div className="text-[#d4a373] mt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">Manage Galleries</h4>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">Organize and deliver photos effortlessly</p>
            </div>
          </div>

          {/* 2. Manage Customers */}
          <div className="flex items-start gap-3">
            <div className="text-[#d4a373] mt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">Manage Customers</h4>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">Keep all your clients in one place</p>
            </div>
          </div>

          {/* 3. Track Analytics */}
          <div className="flex items-start gap-3">
            <div className="text-[#d4a373] mt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" x2="18" y1="20" y2="10" />
                <line x1="12" x2="12" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="14" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white">Track Analytics</h4>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">Monitor gallery views and downloads</p>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT COLUMN / PHONE VIEW: Standalone Login Card Container */}
      <div className="w-full lg:col-span-6 flex items-center justify-center p-4 sm:p-8 lg:p-14 min-h-screen relative pt-20 sm:pt-20 lg:pt-14">
        
        {/* Background decorative dots (Desktop only) */}
        <div className="absolute top-10 right-10 text-gray-300 opacity-60 hidden sm:block pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
            <circle cx="5" cy="5" r="2" />
            <circle cx="20" cy="5" r="2" />
            <circle cx="35" cy="5" r="2" />
            <circle cx="50" cy="5" r="2" />
            <circle cx="5" cy="20" r="2" />
            <circle cx="20" cy="20" r="2" />
            <circle cx="35" cy="20" r="2" />
            <circle cx="50" cy="20" r="2" />
            <circle cx="5" cy="35" r="2" />
            <circle cx="20" cy="35" r="2" />
            <circle cx="35" cy="35" r="2" />
            <circle cx="50" cy="35" r="2" />
          </svg>
        </div>

        {/* The White Login Card */}
        <div className="w-full max-w-[420px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100/90 p-7 sm:p-10 relative z-10">
          
          {/* Top Shield Icon Badge */}
          <div className="w-14 h-14 rounded-full bg-[#fdf5eb] border border-[#f5e4bf] flex items-center justify-center text-[#c8924b] mx-auto mb-4 shadow-xs">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          {/* Form Header */}
          <div className="text-center mb-7">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Admin Login</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1.5 leading-relaxed">
              Enter your credentials to access your dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">Email Address</label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8924b] focus:ring-1 focus:ring-[#c8924b] transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">Password</label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8924b] focus:ring-1 focus:ring-[#c8924b] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  className="absolute right-3.5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="2" x2="22" y1="2" y2="22" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password Row */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#b78446] focus:ring-[#b78446] accent-[#b78446] cursor-pointer"
                />
                <span>Remember me</span>
              </label>

              <a href="#forgot" className="text-xs font-semibold text-[#af793e] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#b78446] hover:bg-[#a2743b] text-white font-bold text-sm shadow-md shadow-[#b78446]/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
              <span>{loading ? 'Signing In...' : 'Sign In'}</span>
            </button>

            {/* Divider */}
            <div className="relative my-4 flex items-center justify-center">
              <div className="w-full border-t border-gray-200" />
              <span className="bg-white px-3 text-[11px] font-medium text-gray-400 uppercase absolute">OR</span>
            </div>

            {/* Sign in with Google Button */}
            <button
              type="button"
              className="w-full py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-xs sm:text-sm shadow-2xs transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
            >
              {/* Google G Logo */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
              <span>Sign in with Google</span>
            </button>

          </form>

          {/* Copyright Note */}
          <p className="text-center text-[11px] text-gray-400 mt-8">
            © 2024 PhotoStudio. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  )
}

export default AdminLogin
