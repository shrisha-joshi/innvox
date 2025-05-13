import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        // Set a timeout to close the menu after a delay
        timeoutRef.current = setTimeout(() => {
          setIsOpen(false);
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

  // Handle mouse leave for menu
  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Set a timeout to close the menu after a delay
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
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

  // Consistent with header's navLinkClass and dropdown styles
  const mobileLinkClass = "text-white text-lg hover:bg-gray-900 hover:underline text-shadow-glow px-4 py-2 rounded-md transition-all duration-200";

  return (
    <div className="md:hidden" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-white hover:bg-gray-800 transition-all duration-200"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div 
          className="absolute top-16 left-0 right-0 bg-black shadow-lg py-4 border-t border-gray-800"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/#about" 
                className={mobileLinkClass}
                onClick={handleAboutClick}
              >
                About
              </Link>
              <Link
                to="/events"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/community"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>
              <Link
                to="/contact"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Login button matching desktop style */}
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-md text-md font-medium
                  bg-white text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]
                  h-10 px-4 py-2 mt-2 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;