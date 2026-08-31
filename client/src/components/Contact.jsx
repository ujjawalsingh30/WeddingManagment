import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      alert('Thank you! Your message has been sent successfully.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 400)
  }

  return (
    <section id="contact" className="relative bg-[#faf8f5] py-20 lg:py-28 overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/4 right-5 -z-10 w-96 h-96 rounded-full bg-amber-50/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 rounded-full bg-orange-50/50 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Top Label with camera accent */}
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#af793e] uppercase mb-2">
            <span>CONTACT US</span>
          </div>

          {/* Decorative Mini Camera Line */}
          <div className="flex items-center justify-center gap-2 mb-3 text-[#d4a373]">
            <span className="w-6 h-[1px] bg-[#e5cfb5]" />
            <svg className="w-4 h-4 text-[#c8924b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            <span className="w-6 h-[1px] bg-[#e5cfb5]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight">
            We'd Love to Hear From You!
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
            Have a question or need help? We're here for you.
          </p>
        </div>

        {/* MAIN 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Let's Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Let's Connect</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed max-w-md">
                Whether you have a question, feedback, or need support, our team is ready to help.
              </p>
              {/* Gold accent bar */}
              <div className="w-10 h-1 bg-[#c8924b] rounded-full mt-3 mb-6" />
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              
              {/* 1. Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#faf2e6] text-[#c8924b] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Email Us</h4>
                  <a href="mailto:hello@photostudio.com" className="text-xs text-gray-500 hover:text-[#c8924b] transition-colors mt-0.5 block">
                    hello@photostudio.com
                  </a>
                </div>
              </div>

              {/* 2. Call */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#faf2e6] text-[#c8924b] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Call Us</h4>
                  <a href="tel:+919876543210" className="text-xs text-gray-500 hover:text-[#c8924b] transition-colors mt-0.5 block">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* 3. Business Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#faf2e6] text-[#c8924b] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Business Hours</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    Mon - Sat : 9:00 AM - 7:00 PM <br />
                    Sunday : Closed
                  </p>
                </div>
              </div>

              {/* 4. Our Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#faf2e6] text-[#c8924b] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Our Location</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    123, Photography Street, <br />
                    Mumbai, Maharashtra - 400001
                  </p>
                </div>
              </div>

            </div>

            {/* Follow Us with Social Badges */}
            <div className="flex items-center gap-3 pt-3">
              <span className="font-bold text-xs text-gray-800">Follow Us</span>
              
              {/* Instagram */}
              <a href="#instagram" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-[#c8924b] hover:border-[#c8924b] flex items-center justify-center transition-colors shadow-2xs">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#facebook" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-[#c8924b] hover:border-[#c8924b] flex items-center justify-center transition-colors shadow-2xs">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#youtube" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-[#c8924b] hover:border-[#c8924b] flex items-center justify-center transition-colors shadow-2xs">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#linkedin" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-[#c8924b] hover:border-[#c8924b] flex items-center justify-center transition-colors shadow-2xs">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

            </div>

          </div>

          {/* RIGHT COLUMN: Send Us a Message Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-100/90">
            
            <h3 className="text-xl font-bold text-gray-900">Send Us a Message</h3>
            <div className="w-10 h-1 bg-[#c8924b] rounded-full mt-2 mb-6" />

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8924b] focus:ring-1 focus:ring-[#c8924b] transition-all"
                  />
                </div>

                {/* Email */}
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8924b] focus:ring-1 focus:ring-[#c8924b] transition-all"
                  />
                </div>

              </div>

              {/* Row 2: Phone */}
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your Phone"
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8924b] focus:ring-1 focus:ring-[#c8924b] transition-all"
                />
              </div>

              {/* Row 3: Select Subject */}
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="6" height="6" x="4" y="4" rx="1" />
                    <rect width="6" height="6" x="14" y="4" rx="1" />
                    <rect width="6" height="6" x="4" y="14" rx="1" />
                    <rect width="6" height="6" x="14" y="14" rx="1" />
                  </svg>
                </div>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8924b] focus:ring-1 focus:ring-[#c8924b] appearance-none cursor-pointer transition-all"
                >
                  <option value="" disabled className="text-gray-400">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="wedding">Wedding Gallery Setup</option>
                  <option value="pricing">Pricing &amp; Plans</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback &amp; Suggestions</option>
                </select>
                <div className="absolute right-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Row 4: Your Message */}
              <div className="relative">
                <div className="absolute top-3.5 left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  </svg>
                </div>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8924b] focus:ring-1 focus:ring-[#c8924b] resize-none transition-all"
                />
              </div>

              {/* Submit Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#af793e] hover:bg-[#9d6b35] text-white text-sm font-semibold shadow-md shadow-[#af793e]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current transform rotate-45 -mt-0.5" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                  <span>{submitted ? 'Sending...' : 'Send Message'}</span>
                </button>

                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500">
                  <svg className="w-4 h-4 text-[#af793e] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>We respect your privacy. Your information is safe with us.</span>
                </div>
              </div>

            </form>

          </div>

        </div>

        {/* BOTTOM NEED IMMEDIATE HELP BANNER */}
        <div className="mt-14 bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-2xs p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#fbf4e8] text-[#c8924b] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">Need Immediate Help?</h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Our support team is available to assist you.
              </p>
            </div>
          </div>

          <a
            href="#help-center"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#e5cfb5] text-[#af793e] hover:bg-[#fbf4e8] text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
          >
            <span>Visit Help Center</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact
