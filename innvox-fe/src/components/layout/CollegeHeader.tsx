import React from 'react';
import logo from '../../assets/invx.png';

const CollegeHeader: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm text-white py-1">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left Logo */}
        <div className="w-10 h-10">
          <img src={logo} alt="Left Logo" className="w-full h-full object-contain" />
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold mb-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white" 
              style={{ fontFamily: "'Playfair Display', serif" }}>
            K S Institute of Technology
          </h1>
          <p className="text-xs text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Bangalore, Karnataka, India
          </p>
        </div>

        {/* Right Logo */}
        <div className="w-10 h-10">
          <img src={logo} alt="Right Logo" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default CollegeHeader; 