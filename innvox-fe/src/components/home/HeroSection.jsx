import React from 'react';
import { BackgroundLines } from '../ui/BackgroundLines';

const HeroSection = () => {
  return (
    <BackgroundLines>
      <div style={{ 
        position: 'relative', 
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>
          INNVOX
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#ccc' }}>
          Break Boundaries. Define the Future
        </p>
        <div style={{ marginTop: '50px' }}>
          {/* <p>If you can see this text, React is working!</p> */}
        </div>
      </div>
    </BackgroundLines>
  );
};

export default HeroSection;