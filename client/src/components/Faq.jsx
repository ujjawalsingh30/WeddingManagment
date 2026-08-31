import React, { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0) // First item open by default like in screenshot

  const faqs = [
    {
      num: '01',
      question: 'What is PhotoStudio?',
      answer:
        'PhotoStudio is a platform for photographers to upload, organize, and share photos with their clients through private galleries and QR codes. Your clients can view and download their photos easily.'
    },
    {
      num: '02',
      question: 'How does the QR gallery work?',
      answer:
        'Each event gallery generates a distinct, scannable QR code. Guests simply point their smartphone camera at the QR code to instantly open the live gallery without needing to install any app.'
    },
    {
      num: '03',
      question: 'Can I upload a large number of photos?',
      answer:
        'Yes! PhotoStudio supports bulk uploading of thousands of high-resolution RAW and JPEG photos simultaneously with fast background cloud optimization.'
    },
    {
      num: '04',
      question: 'Can I protect my gallery with a password or PIN?',
      answer:
        'Absolutely. You can set secure passwords or PIN protection on any private gallery so only authorized guests can view or download the memories.'
    },
    {
      num: '05',
      question: 'Can my clients download original quality photos?',
      answer:
        'Yes, your clients can download original full-resolution photos individually or download the full wedding album in a single ZIP file.'
    },
    {
      num: '06',
      question: 'How long will my gallery stay active?',
      answer:
        'Galleries stay active according to your selected plan, ranging from 6 months up to lifetime cloud storage with guaranteed high availability and backups.'
    },
    {
      num: '07',
      question: 'Can I customize my gallery with my brand?',
      answer:
        'Yes! You can add your custom photography studio logo, custom color palette, contact info, and watermark overlays to keep your branding prominent.'
    },
    {
      num: '08',
      question: 'Do you offer customer support?',
      answer:
        'We offer 24/7 dedicated support via live chat, email, and video guides to assist you and your clients whenever you need help.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative bg-[#faf8f5] py-20 lg:py-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/3 -z-10 w-[600px] h-[600px] rounded-full bg-amber-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          
          {/* FAQ Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#fbf4e8] border border-[#f5e4bf] text-xs font-bold tracking-wider text-[#af793e] uppercase mb-3 shadow-2xs">
            FAQ
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Frequently Asked Questions
          </h2>

          {/* Decorative Camera Accent */}
          <div className="flex items-center justify-center gap-2 my-3 text-[#d4a373]">
            <span className="w-8 h-[1px] bg-[#e5cfb5]" />
            <svg className="w-4 h-4 text-[#c8924b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            <span className="w-8 h-[1px] bg-[#e5cfb5]" />
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Everything you need to know about PhotoStudio.
          </p>
        </div>

        {/* 2-COLUMN GRID (LEFT: SUPPORT & FEATURES, RIGHT: ACCORDION) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Support Card & Feature Badges */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Top Support Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100/90 shadow-xs">
              <div className="w-14 h-14 rounded-full bg-[#fbf4e8] text-[#c8924b] flex items-center justify-center mb-4 shadow-2xs">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-5 leading-relaxed">
                Our support team is ready to help you.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#b78446] hover:bg-[#a2743b] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#b78446]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Us</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 4 Feature Points */}
            <div className="space-y-4 pt-2">
              
              {/* Feature 1: Secure & Private */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#faf2e6] text-[#c8924b] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Secure &amp; Private</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                    Your photos and galleries are always protected.
                  </p>
                </div>
              </div>

              {/* Feature 2: Easy to Use */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#faf2e6] text-[#c8924b] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M12 12v9" />
                    <path d="m8 16 4-4 4 4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Easy to Use</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                    Upload, organize and share in just a few clicks.
                  </p>
                </div>
              </div>

              {/* Feature 3: Reliable & Fast */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#faf2e6] text-[#c8924b] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Reliable &amp; Fast</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                    High performance platform built for photographers.
                  </p>
                </div>
              </div>

              {/* Feature 4: 24/7 Support */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#faf2e6] text-[#c8924b] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">24/7 Support</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                    We're here to help, whenever you need us.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Interactive FAQ Accordion */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100/90 shadow-sm p-4 sm:p-6 space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={faq.num}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#f3e5c9] bg-[#fdfaf5]'
                      : 'border-gray-100 hover:border-gray-200 bg-white'
                  }`}
                >
                  {/* Accordion Question Header */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="font-bold text-xs sm:text-sm text-[#c8924b] w-6 flex-shrink-0">
                        {faq.num}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Chevron Icon */}
                    <div className={`text-gray-400 transform transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#c8924b]' : ''}`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-[#f5e7ce]/50 animate-in fade-in duration-200 pl-14">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Faq
