import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CtaSection from '../components/home/CtaSection';
import CollegeHeader from '../components/layout/CollegeHeader.tsx';
import Header from '../components/layout/Header';
import NotificationMarquee from '../components/layout/NotificationMarquee.tsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash === '#about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      } 
    }
  }, [location.hash]);    
  
  return (
    <div className="min-h-screen bg-black">
      <CollegeHeader />
      <Header />
      <div className="space-y-20">
        <HeroSection />
        <NotificationMarquee />
        <AboutSection />
        <FeaturesSection />
        <CtaSection />
      </div>
    </div>
  );
};

export default HomePage; 