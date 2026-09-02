import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { logo } from '../assets/assets'

const Gallery = () => {
  const { id } = useParams()
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'masonry'
  const [showFilter, setShowFilter] = useState('All Photos')
  const [sortBy, setSortBy] = useState('Newest')
  const [currentPage, setCurrentPage] = useState(1)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const totalPages = 15
  const photosPerPage = 10

  // Gallery info
  const galleryInfo = {
    title: 'Rahul & Priya',
    date: '20th April 2024',
    venue: 'The Grand Vista, Jaipur',
    totalPhotos: 356
  }

  // Sample wedding photos
  const allPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
      alt: 'Wedding couple portrait',
      category: 'Ceremony'
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      alt: 'Wedding mandap decoration',
      category: 'Decoration'
    },
    {
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop',
      alt: 'Wedding ceremony rituals',
      category: 'Ceremony'
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
      alt: 'Bridal mehndi hands',
      category: 'Details'
    },
    {
      url: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=800&auto=format&fit=crop',
      alt: 'Groom in sherwani',
      category: 'Portraits'
    },
    {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
      alt: 'Wedding lights decoration',
      category: 'Decoration'
    },
    {
      url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop',
      alt: 'Couple under lights',
      category: 'Ceremony'
    },
    {
      url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop',
      alt: 'Wedding cake with flowers',
      category: 'Details'
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      alt: 'Wedding reception fountain',
      category: 'Reception'
    },
    {
      url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop',
      alt: 'Palace venue exterior',
      category: 'Venue'
    }
  ]

  const filterOptions = ['All Photos', 'Ceremony', 'Decoration', 'Portraits', 'Details', 'Reception', 'Venue']
  const sortOptions = ['Newest', 'Oldest', 'Name']

  const filteredPhotos = showFilter === 'All Photos'
    ? allPhotos
    : allPhotos.filter(p => p.category === showFilter)

  // Pagination display
  const getPageNumbers = () => {
    const pages = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1, 2, 3, 4)
      pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col">

      {/* HERO BANNER WITH DECORATIVE BACKGROUND */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">

        {/* Background decorative image (camera, flowers, frame) */}
        <div className="absolute top-0 right-0 w-[50%] h-full hidden md:block pointer-events-none z-0">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=900&auto=format&fit=crop"
            alt="Camera equipment and flowers"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        </div>

        {/* Decorative "Every picture has a story" frame card */}
        <div className="absolute top-8 right-12 hidden lg:block z-10">
          <div className="bg-white rounded-2xl p-5 shadow-xl border border-amber-100/80 transform rotate-3 w-52">
            <div className="border-2 border-[#c8924b] rounded-lg p-4 text-center">
              <p className="font-serif italic text-[#8c602a] text-lg leading-snug">
                Every picture<br />has a story.
              </p>
              <div className="flex items-center justify-center mt-2 text-[#c8924b]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Header Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">

          {/* Back to Home / Back link */}
          <div className="mb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>{id ? 'Back to All Galleries' : 'Back to Home'}</span>
            </Link>
          </div>

          {id ? (
            /* INDIVIDUAL COUPLE GALLERY HEADER */
            <>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf4e8] border border-[#f5e4bf] text-[10px] font-bold tracking-widest text-[#af793e] uppercase shadow-2xs mb-4">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
                <span>WEDDING GALLERY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight flex items-center gap-3">
                {galleryInfo.title}
                <span className="text-[#d4a373] text-2xl sm:text-3xl">♡</span>
              </h1>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mt-2.5 font-medium">
                <svg className="w-3.5 h-3.5 text-[#c8924b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <span>{galleryInfo.date}</span>
                <span className="text-gray-300">•</span>
                <svg className="w-3.5 h-3.5 text-[#c8924b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{galleryInfo.venue}</span>
              </div>
            </>
          ) : (
            /* MAIN GALLERY HERO SECTION */
            <>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf4e8] border border-[#f5e4bf] text-[10px] font-bold tracking-widest text-[#af793e] uppercase shadow-2xs mb-4">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
                <span>&rarr; WEDDING &amp; EVENT GALLERIES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight leading-tight max-w-2xl">
                Capturing Moments. <br />
                <span className="text-[#b78446]">Delivering Stories.</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed mt-3">
                Browse through our curated collection of high-resolution wedding, portrait, and event photo galleries. Delivered with elegance, speed, and privacy.
              </p>
            </>
          )}

          {/* 3 Stats Row */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-8 mt-6">

            {/* Photos Count */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#faf2e6] flex items-center justify-center text-[#c8924b]">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold text-gray-900">{id ? galleryInfo.totalPhotos : '500+'}</span>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{id ? 'Photos' : 'Galleries'}</p>
              </div>
            </div>

            {/* Photos Delivered / Date */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#faf2e6] flex items-center justify-center text-[#c8924b]">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-extrabold text-gray-900">{id ? galleryInfo.date : '50M+'}</span>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{id ? 'Date' : 'Delivered'}</p>
              </div>
            </div>

            {/* HD Quality / Venue */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#faf2e6] flex items-center justify-center text-[#c8924b]">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-extrabold text-gray-900">{id ? galleryInfo.venue : '100% Ultra HD'}</span>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{id ? 'Location' : 'Quality'}</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* TOOLBAR BAR: Grid/Masonry Toggle + Filters + Share */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">

          {/* Left: View Toggle */}
          <div className="flex items-center gap-0 bg-gray-50 rounded-xl p-1 border border-gray-200/80">
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-[#af793e] shadow-sm border border-[#f0dfc4]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
              </svg>
              Grid
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'masonry'
                  ? 'bg-white text-[#af793e] shadow-sm border border-[#f0dfc4]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
              </svg>
              Masonry
            </button>
          </div>

          {/* Center: Filters */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">

            {/* Show: Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">Show:</span>
              <select
                value={showFilter}
                onChange={(e) => setShowFilter(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#c8924b] focus:border-[#c8924b] cursor-pointer appearance-none pr-7"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 8px center'
                }}
              >
                {filterOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Sort by */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#c8924b] focus:border-[#c8924b] cursor-pointer appearance-none pr-7"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 8px center'
                }}
              >
                {sortOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

          </div>

        </div>
      </div>

      {/* PHOTO GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">

        {viewMode === 'grid' ? (
          /* GRID VIEW: 5 columns on desktop, 3 on tablet, 2 on mobile */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                        <path d="M11 8v6M8 11h6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* MASONRY VIEW */
          <div className="columns-2 sm:columns-3 lg:columns-5 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            {filteredPhotos.map((photo, index) => {
              // Vary heights for masonry effect
              const heights = ['h-52', 'h-64', 'h-72', 'h-56', 'h-60', 'h-48', 'h-68', 'h-58', 'h-44', 'h-66']
              return (
                <div
                  key={index}
                  className={`group relative ${heights[index % heights.length]} break-inside-avoid rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300`}
                  onClick={() => setLightboxIndex(index)}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                          <path d="M11 8v6M8 11h6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-1.5 mt-10">
          {/* Prev Button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-9 h-9 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((page, i) => (
            <button
              key={i}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              disabled={page === '...'}
              className={`w-9 h-9 rounded-lg text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                page === currentPage
                  ? 'bg-[#b78446] text-white shadow-md shadow-[#b78446]/20'
                  : page === '...'
                  ? 'text-gray-400 cursor-default'
                  : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-9 h-9 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors z-10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Nav */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex(Math.max(0, lightboxIndex - 1))
            }}
            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={filteredPhotos[lightboxIndex]?.url}
            alt={filteredPhotos[lightboxIndex]?.alt}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Nav */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex(Math.min(filteredPhotos.length - 1, lightboxIndex + 1))
            }}
            className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full">
            {lightboxIndex + 1} / {filteredPhotos.length}
          </div>
        </div>
      )}

    </div>
  )
}

export default Gallery
