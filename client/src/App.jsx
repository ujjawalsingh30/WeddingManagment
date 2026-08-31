import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import AdminLogin from './admin/common/AdminLogin'
import AdminLayout from './admin/common/AdminLayout'
import Dashboard from './admin/pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Home Route */}
        <Route path="/" element={<Home />} />

        {/* Public Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<Gallery />} />

        {/* Admin Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Portal Protected / Nested Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="galleries" element={<Dashboard />} />
          <Route path="customers" element={<Dashboard />} />
          <Route path="analytics" element={<Dashboard />} />
        </Route>

        {/* Catch-all Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
