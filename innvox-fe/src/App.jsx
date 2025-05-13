import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// import { BlogProvider } from './context/BlogContext';
import { NotificationProvider } from './context/NotificationContext.jsx';
import { ChatProvider } from './context/ChatContext';

// Layout components
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer';
import FloatingElements from './components/layout/FloatingElements';

// Pages
import HomePage from './pages/HomePage';
// import BlogPage from './pages/BlogPage';
// import SingleBlogPage from './pages/SingleBlogPage';
import EventsPage from './pages/EventsPage';
import CommunityPage from './pages/CommunityPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage.jsx';

// Styles
import './styles/global.css';

// Wrapper component to handle conditional header rendering
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app min-h-screen flex flex-col bg-black text-white">
      {!isHomePage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} /> */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {/* <FloatingElements /> */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      {/* <BlogProvider> */}
        <NotificationProvider>
          <ChatProvider>
            <Router>
              <AppContent />
            </Router>
          </ChatProvider>
        </NotificationProvider>
      {/* </BlogProvider> */}
    </AuthProvider>
  );
}

export default App; 