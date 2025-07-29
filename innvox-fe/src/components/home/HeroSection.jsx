import React from 'react';

const HeroSection = () => {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      padding: '100px 20px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>
        INNVOX
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#ccc' }}>
        Break Boundaries. Define the Future
      </p>
      <div style={{ marginTop: '50px' }}>
        <p>If you can see this text, React is working!</p>
      </div>
    </div>
  );
};

export default HeroSection;