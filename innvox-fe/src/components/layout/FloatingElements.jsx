import React from 'react';
import { Link } from 'react-router-dom';

const FloatingElements = () => {
  return (
    <div className="floating-elements">
      <Link to="/contact" className="floating-button">
        <i className="fas fa-envelope"></i>
      </Link>
      <Link to="/events" className="floating-button">
        <i className="fas fa-calendar"></i>
      </Link>
    </div>
  );
};

export default FloatingElements; 