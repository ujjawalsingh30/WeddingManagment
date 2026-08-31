import React from 'react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Galleries',
      value: '128',
      change: '+12% from last month',
      icon: (
        <svg className="w-5 h-5 text-[#b78446]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      )
    },
    {
      title: 'Photos Uploaded',
      value: '24,850',
      change: '+3,400 this week',
      icon: (
        <svg className="w-5 h-5 text-[#b78446]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="M12 12v9" />
          <path d="m8 16 4-4 4 4" />
        </svg>
      )
    },
    {
      title: 'QR Scans',
      value: '8,420',
      change: '+18% client activity',
      icon: (
        <svg className="w-5 h-5 text-[#b78446]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="5" height="5" x="3" y="3" rx="1" />
          <rect width="5" height="5" x="16" y="3" rx="1" />
          <rect width="5" height="5" x="3" y="16" rx="1" />
          <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
        </svg>
      )
    },
    {
      title: 'Active Clients',
      value: '94',
      change: '+8 new weddings',
      icon: (
        <svg className="w-5 h-5 text-[#b78446]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      )
    }
  ]

  const recentGalleries = [
    {
      name: 'Rahul & Priya Wedding',
      client: 'Rahul Sharma',
      date: '28 Aug 2026',
      photos: '2,350',
      status: 'Live'
    },
    {
      name: 'Aarav & Ananya Engagement',
      client: 'Ananya Verma',
      date: '25 Aug 2026',
      photos: '1,120',
      status: 'Live'
    },
    {
      name: 'Vikram & Sneha Reception',
      client: 'Vikram Patel',
      date: '21 Aug 2026',
      photos: '3,400',
      status: 'Archived'
    }
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Welcome Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Welcome to PhotoStudio Admin 👋
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your client wedding galleries, track QR scans, and upload photos.
          </p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-[#b78446] hover:bg-[#a2743b] text-white font-bold text-sm shadow-md shadow-[#b78446]/20 transition-all cursor-pointer self-start sm:self-auto">
          + Create New Gallery
        </button>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.title} className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500">{item.title}</span>
              <div className="w-10 h-10 rounded-2xl bg-[#faf2e6] flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-extrabold text-gray-900">{item.value}</span>
              <p className="text-xs font-semibold text-emerald-600 mt-1">{item.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Galleries Table */}
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xs overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-extrabold text-lg text-gray-900">Recent Galleries</h3>
          <span className="text-xs font-bold text-[#b78446] hover:underline cursor-pointer">View All →</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-[#faf8f5] text-xs font-bold text-gray-700 uppercase border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Event Name</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Photos</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentGalleries.map((g) => (
                <tr key={g.name} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{g.name}</td>
                  <td className="px-6 py-4 text-gray-600">{g.client}</td>
                  <td className="px-6 py-4 text-gray-500 text-xs">{g.date}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">{g.photos}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                        g.status === 'Live'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {g.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
