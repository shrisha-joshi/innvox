import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import logo from '../../assets/invx.png';
import { useLocation,useNavigate } from 'react-router-dom';

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navLinkClass = "text-white text-lg hover:bg-gray-900 hover:underline px-3 py-2 rounded-md transition-all duration-200 hover:text-shadow-glow";
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        // Set a timeout to close the dropdown after a delay
        timeoutRef.current = setTimeout(() => {
          setIsMoreOpen(false);
        }, 300);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Clear timeout on cleanup
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
   
  }, []);
  
//handle about click to scroll to about section
  const handleAboutClick = (e) => {
    if (location.pathname === '/') {
      // If already on homepage, prevent default and scroll
      e.preventDefault();
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
  };
  
  // Handle mouse leave for dropdown
  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Set a timeout to close the dropdown after a delay
    timeoutRef.current = setTimeout(() => {
      setIsMoreOpen(false);
    }, 300);
  };
  
  // Handle mouse enter to cancel closing
  const handleMouseEnter = () => {
    // Clear any existing timeout to prevent closing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  
  return (
    <header className="w-full h-16 bg-black dark:bg-gray-900 shadow-sm relative z-50">
      <div className="container h-full">
        <div className="h-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Innvox Logo" className="h-12 w-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/#about" onClick={handleAboutClick} className={navLinkClass}>
              About
            </Link>
            <Link to="/events" className={navLinkClass}>
              Events
            </Link>
            {/* <Link to="/blog" className={navLinkClass}>
              Blog
            </Link> */}
            <Link to="/contact" className={navLinkClass}>
              Contact
            </Link>

            {/* More Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef} 
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`${navLinkClass} flex items-center`}
              >
                More
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link
                      to="/blog"
                      className="block px-4 py-2 text-white hover:bg-gray-900 hover:underline hover:text-shadow-glow"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/placements"
                      className="block px-4 py-2 text-white hover:bg-gray-900 hover:underline hover:text-shadow-glow"
                    >
                      Placement Details
                    </Link>
                    <Link
                      to="/gallery"
                      className="block px-4 py-2 text-white hover:bg-gray-900 hover:underline hover:text-shadow-glow"
                    >
                      Gallery
                    </Link>
                    <Link
                      to="/team"
                      className="block px-4 py-2 text-white hover:bg-gray-900 hover:underline hover:text-shadow-glow"
                    >
                      Our Team
                    </Link>
                   
                    <Link
                      to="/resources"
                      className="block px-4 py-2 text-white hover:bg-gray-900 hover:underline hover:text-shadow-glow"
                    >
                      Resources
                    </Link>
                    <Link
                      to="/community"
                      className="block px-4 py-2 text-white hover:bg-gray-900 hover:underline hover:text-shadow-glow"
                    >
                      Community
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/login" 
              className="inline-flex items-center justify-center rounded-md text-md font-medium ring-offset-background 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
  disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2 ml-4
  transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header; 