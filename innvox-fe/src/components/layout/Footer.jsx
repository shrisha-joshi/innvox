import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Tech Club</h3>
            <p className="text-gray-400">Empowering the next generation of tech innovators through education, collaboration, and hands-on experience.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs/web-dev" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/programs/ai-ml" className="text-gray-400 hover:text-white transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/programs/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/programs/data-science" className="text-gray-400 hover:text-white transition-colors">Blockchain</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-gray-400 mt-1"></i>
                <span className="text-gray-400">INNVOX Club , KSIT<br />Bengaluru</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-gray-400"></i>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">(+91) 99999 99999</a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-gray-400"></i>
                <a href="mailto:info@techclub.com" className="text-gray-400 hover:text-white transition-colors">innvox_ksit@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Tech Club. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;