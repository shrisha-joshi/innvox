import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import AdminLayout from './components/layout/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BlogManagement from './pages/BlogManagement';
import EventManagement from './pages/EventManagement';
import TeamManagement from './pages/TeamManagement';
import UserManagement from './pages/UserManagement';
import GalleryManagement from './pages/GalleryManagement';
import TestimonialManagement from './pages/TestimonialManagement';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (user.role !== 'admin') {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white">Access denied. Admin privileges required.</div>
    </div>;
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="blogs" element={<BlogManagement />} />
        <Route path="events" element={<EventManagement />} />
        <Route path="team" element={<TeamManagement />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="gallery" element={<GalleryManagement />} />
        <Route path="testimonials" element={<TestimonialManagement />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;