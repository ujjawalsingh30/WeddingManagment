import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly') // 'monthly' | 'yearly'
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const isYearly = billingCycle === 'yearly'

  const plans = [
    {
      name: 'Free',
      badge: null,
      highlight: false,
      description: 'Perfect for trying out PhotoStudio',
      priceMonthly: 0,
      priceYearly: 0,
      buttonText: 'Get Started Free',
      buttonLink: '/admin/login',
      buttonStyle: 'border border-[#af793e] text-[#af793e] hover:bg-[#af793e] hover:text-white',
      features: [
        '1 Studio / Account',
        'Up to 3 Events',
        '500 Photos Upload',
        'Basic Gallery Sharing (Link)',
        'Standard Templates',
        'Client Photo Selection',
        'Email Support'
      ]
    },
    {
      name: 'Pro',
      badge: '★ Most Popular',
      highlight: true,
      description: 'Everything you need to grow your business',
      priceMonthly: 999,
      priceYearly: 799,
      buttonText: 'Start Pro Plan',
      buttonLink: '/admin/login',
      buttonStyle: 'bg-[#b78446] hover:bg-[#9d6b35] text-white shadow-md shadow-[#b78446]/20',
      features: [
        '1 Studio / Account',
        'Unlimited Events',
        '50,000 Photos Upload',
        'QR Code Gallery Sharing',
        'Custom Branding (Logo, Colors, Cover)',
        'Client Photo Selection & Favorites',
        'Download Control (Originals/High-Res)',
        'Advanced Analytics',
        'Team Members (up to 5)',
        'Priority Support'
      ]
    },
    {
      name: 'Business',
      badge: null,
      highlight: false,
      description: 'For professional studios and teams',
      priceMonthly: 1999,
      priceYearly: 1599,
      buttonText: 'Start Business Plan',
      buttonLink: '/admin/login',
      buttonStyle: 'border border-[#af793e] text-[#af793e] hover:bg-[#af793e] hover:text-white',
      features: [
        'Multiple Studios / Branches',
        'Unlimited Events',
        '200,000 Photos Upload',
        'QR Code Gallery Sharing',
        'Custom Branding & Domain (e.g. gallery.yourstudio.com)',
        'Client Photo Selection & Favorites',
        'Advanced Download & Access Control',
        'Team Members (up to 20)',
        'Detailed Analytics & Reports',
        'Priority Support',
        'Early Access to New Features'
      ]
    }
  ]

  const comparisonData = [
    { feature: 'Studios', free: '1', pro: '1', business: 'Multiple' },
    { feature: 'Events', free: '3', pro: 'Unlimited', business: 'Unlimited' },
    { feature: 'Photo Upload Limit', free: '500', pro: '50,000', business: '200,000' },
    { feature: 'Gallery Sharing', free: 'Link', pro: 'Link + QR Code', business: 'Link + QR Code' },
    { feature: 'Custom Branding', free: '—', pro: '✓', business: '✓' },
    { feature: 'Client Photo Selection', free: '✓', pro: '✓', business: '✓' },
    { feature: 'Download Control', free: '—', pro: '✓', business: '✓' },
    { feature: 'Team Members', free: '—', pro: 'Up to 5', business: 'Up to 20' },
    { feature: 'Analytics', free: 'Basic', pro: 'Advanced', business: 'Advanced' },
    { feature: 'Custom Domain', free: '—', pro: '—', business: '✓' },
    { feature: 'Priority Support', free: '—', pro: '✓', business: '✓' }
  ]

  const faqs = [
    {
      q: 'Can I change my plan later?',
      a: 'Yes! You can upgrade, downgrade, or cancel your plan at any time directly from your studio account dashboard.'
    },
    {
      q: 'Do you offer refunds?',
      a: 'We offer a 14-day money-back guarantee if you are not satisfied with any of our paid plans. No hassle, no questions asked.'
    },
    {
      q: 'Is there a free trial?',
      a: 'Our Free plan is free forever! You can also try any Pro feature for 14 days without entering credit card details.'
    },
    {
      q: 'Can my clients create an account?',
      a: 'No account required for clients! Clients can view, select, and download photos instantly via gallery link or QR code.'
    },
    {
      q: 'What happens if I exceed the upload limit?',
      a: 'We will notify you when you near your limit so you can upgrade seamlessly without interrupting your active client galleries.'
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. We use bank-grade 256-bit encryption and secure AWS cloud storage to protect your high-resolution photography.'
    }
  ]

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#faf8f5] overflow-hidden relative border-t border-amber-100/60">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & BILLING TOGGLE */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-16">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf8f0] border border-[#f5e6d0] shadow-2xs mb-4">
          <span className="text-[11px] font-bold tracking-widest text-[#b78446] uppercase">
            ✦ SIMPLE PRICING ✦
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Plans for Every <span className="text-[#b78446]">Photographer</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Choose a plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Decorative Annotations */}
        <div className="hidden md:block absolute top-10 left-6 lg:left-12 text-left pointer-events-none transform -rotate-6">
          <span className="font-serif italic text-xs text-[#b78446] block">
            Start free.<br />No credit card required!
          </span>
          <svg className="w-7 h-7 text-[#b78446] ml-6 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4c8 2 12 8 10 14m0 0l-4-4m4 4l4-2" />
          </svg>
        </div>

        {/* Billing Toggle (Monthly / Yearly) */}
        <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              !isYearly
                ? 'bg-[#af793e] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              isYearly
                ? 'bg-[#af793e] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span>Yearly</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-extrabold uppercase">
              Save 20%
            </span>
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. PRICING CARDS GRID */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly

            return (
              <div
                key={plan.name}
                className={`relative rounded-[2.2rem] transition-all duration-300 flex flex-col justify-between ${
                  plan.highlight
                    ? 'bg-[#fdf8f0] border-2 border-[#b78446] shadow-2xl scale-100 lg:-translate-y-2'
                    : 'bg-white border border-gray-200/90 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.badge && (
                  <div className="bg-[#b78446] text-white text-[11px] font-extrabold uppercase tracking-widest text-center py-2 rounded-t-[2rem]">
                    {plan.badge}
                  </div>
                )}

                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <h3 className="text-2xl font-extrabold text-gray-900">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 min-h-[40px]">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="my-6 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                        ₹{price.toLocaleString()}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 font-medium">
                        / month {isYearly && price > 0 ? '(billed annually)' : ''}
                      </span>
                    </div>

                    {/* Button */}
                    <Link
                      to={plan.buttonLink}
                      className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all text-center block cursor-pointer mb-8 ${plan.buttonStyle}`}
                    >
                      {plan.buttonText}
                    </Link>

                    {/* Feature List */}
                    <div className="space-y-3 pt-4 border-t border-gray-200/60">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                          <svg className="w-4 h-4 text-[#b78446] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FEATURE COMPARISON TABLE */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#b78446] uppercase mb-2">
            <span>&rarr; COMPARE FEATURES</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Find the <span className="text-[#b78446]">Right Plan</span> for You
          </h3>
        </div>

        {/* Table Wrapper */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-md overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#faf8f5] border-b border-gray-200/80 text-xs sm:text-sm text-gray-700">
                <th className="py-5 px-6 font-bold w-1/4">Features</th>
                <th className="py-5 px-6 font-bold text-center w-1/4">Free</th>
                <th className="py-5 px-6 font-bold text-center w-1/4 bg-[#fdf8f0] text-[#b78446]">Pro</th>
                <th className="py-5 px-6 font-bold text-center w-1/4">Business</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900">{row.feature}</td>
                  
                  {/* Free */}
                  <td className="py-4 px-6 text-center text-gray-600">
                    {row.free === '✓' ? (
                      <svg className="w-4 h-4 text-emerald-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      row.free
                    )}
                  </td>

                  {/* Pro */}
                  <td className="py-4 px-6 text-center font-bold text-gray-900 bg-[#fdf8f0]/60">
                    {row.pro === '✓' ? (
                      <svg className="w-4 h-4 text-emerald-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      row.pro
                    )}
                  </td>

                  {/* Business */}
                  <td className="py-4 px-6 text-center text-gray-600">
                    {row.business === '✓' ? (
                      <svg className="w-4 h-4 text-emerald-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      row.business
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ GRID) */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#b78446] uppercase mb-2">
              <span>&rarr; FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Still Have <span className="text-[#b78446]">Questions?</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Here are some common questions about our pricing and plans.
            </p>
          </div>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs transition-all hover:border-amber-200 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">{faq.q}</h4>
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#b78446]' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. BOTTOM CTA BANNER */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c1017] rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#d4a373] shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Ready to Simplify Your Photo Delivery?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-lg">
                Join thousands of photographers who trust PhotoStudio to deliver beautiful memories.
              </p>
            </div>
          </div>

          {/* Right Action */}
          <div className="text-center md:text-right relative z-10 shrink-0">
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#b78446] hover:bg-[#a2743b] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#b78446]/20 transition-all cursor-pointer"
            >
              <span>Get Started Today</span>
              <span>&rarr;</span>
            </Link>
            <p className="text-[11px] text-gray-400 mt-2">No credit card required</p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default PricingSection
