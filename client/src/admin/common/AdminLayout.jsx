import React, { useState } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { logo } from '../../assets/assets'

const AdminLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navGroups = [
    {
      title: 'MAIN MENU',
      items: [
        {
          name: 'Dashboard',
          path: '/admin/dashboard',
          badge: null,
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
          )
        },
        {
          name: 'Galleries',
          path: '/admin/galleries',
          badge: '24',
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          )
        },
        {
          name: 'Customers',
          path: '/admin/customers',
          badge: '142',
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          )
        },
        {
          name: 'Analytics',
          path: '/admin/analytics',
          badge: null,
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" x2="18" y1="20" y2="10" />
              <line x1="12" x2="12" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="14" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'STUDIO TOOLS',
      items: [
        {
          name: 'Bulk Uploader',
          path: '/admin/dashboard#upload',
          badge: 'New',
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 14.89 9 11.6l3 2.14 4-2.85 4 2.85" />
              <path d="M12 2v10" />
              <path d="m16 6-4-4-4 4" />
            </svg>
          )
        },
        {
          name: 'QR Generator',
          path: '/admin/dashboard#qr',
          badge: null,
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
          )
        }
      ]
    }
  ]

  const getPageTitle = () => {
    if (location.pathname.includes('galleries')) return 'Galleries Management'
    if (location.pathname.includes('customers')) return 'Customers Directory'
    if (location.pathname.includes('analytics')) return 'Performance Analytics'
    return 'Studio Overview'
  }

  const handleLogout = () => {
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] flex">
      
      {/* MOBILE BACKDROP OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* LIGHT THEME ADMIN SIDEBAR (FIXED / STICKY ON DESKTOP) */}
      <aside
        className={`fixed lg:sticky top-0 bottom-0 left-0 lg:h-screen w-72 shrink-0 bg-white text-gray-800 z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 border-r border-amber-100/90 shadow-xl lg:shadow-none overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Logo & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img src={logo} alt="PhotoStudio Logo" className="h-9 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>
            
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#fcf5e7] border border-amber-200/80 text-[10px] font-bold text-[#b78446]">
                PRO OS
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close sidebar"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Grouped Navigation Links */}
          <div className="mt-6 space-y-6">
            {navGroups.map((group) => (
              <div key={group.title}>
                <div className="text-[10px] font-bold tracking-widest text-[#b78446] uppercase px-3 mb-2">
                  {group.title}
                </div>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const active = location.pathname === item.path || (item.path === '/admin/dashboard' && location.pathname === '/admin')
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          active
                            ? 'bg-[#af793e] text-white shadow-md shadow-[#af793e]/20'
                            : 'text-gray-600 hover:bg-[#faf8f5] hover:text-gray-900'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={active ? 'text-white' : 'text-gray-400 group-hover:text-[#af793e] transition-colors'}>
                            {item.icon}
                          </span>
                          <span>{item.name}</span>
                        </div>

                        {item.badge && (
                          <span
                            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                              active
                                ? 'bg-white/20 text-white'
                                : 'bg-[#fcf5e7] text-[#b78446] border border-amber-200/80'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Storage & User Profile Widget */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          
          {/* Cloud Storage Usage Card */}
          <div className="bg-[#faf8f5] p-3.5 rounded-2xl border border-amber-100 text-xs">
            <div className="flex items-center justify-between text-gray-700 font-semibold mb-1.5">
              <span>Cloud Storage</span>
              <span className="text-[#b78446] font-bold">68%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-amber-100/70 overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-[#af793e] to-[#b78446] rounded-full w-[68%]" />
            </div>
            <div className="text-[10px] text-gray-500 flex items-center justify-between">
              <span>680 GB of 1 TB</span>
              <a href="#storage" className="text-[#b78446] hover:underline font-bold">Upgrade</a>
            </div>
          </div>

          {/* User Profile & Logout */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Admin Avatar"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-[#af793e]/40"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-gray-900 truncate">Rishi Sharma</div>
                <div className="text-[10px] text-gray-500 truncate">Super Admin</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
              title="Log out"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
            </button>
          </div>

        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="h-20 bg-white/95 backdrop-blur-md border-b border-amber-100/90 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-black rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Open sidebar"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">{getPageTitle()}</h1>
              <p className="text-[11px] text-gray-500 hidden sm:block">Welcome back to your studio dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#af793e] hover:bg-[#9d6b35] text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>View Live Website</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default AdminLayout
