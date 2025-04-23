import React, { useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { BackgroundBeams } from '../ui/BackgroundBeams';

// Memoized counting component with spring physics
const CountingNumber = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const numericValue = parseInt(value);
  
  const count = useSpring(0, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.1
  });

  React.useEffect(() => {
    if (isInView) {
      count.set(0);
      count.set(numericValue);
    }
  }, [isInView, numericValue, count]);

  const rounded = useTransform(count, latest => Math.floor(latest));

  return (
    <motion.div 
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="stat-number">
        <motion.span>
          {rounded}
        </motion.span>
        {value.includes('+') && '+'}
        {value.includes('/') && '/7'}
      </div>
      <motion.div 
        className="stat-label"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

// Optimized text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Memoized About Section
const AboutSection = React.memo(() => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const staggeredChildren = useMemo(() => ({
    visible: { 
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }), []);

  return (
    <section id="about" className="about-section" ref={containerRef}>
      <BackgroundBeams />
      
      <div className="container relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          variants={staggeredChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="about-text"
            variants={textVariants}
          >
            <h2 className="glow-text">
              About <span className="highlight-text">INNVOX</span>
            </h2>
            
            <motion.p variants={textVariants}>
              Welcome to the Technical Club of K.S. Institute of Technology, where innovation meets opportunity. 
              We are a community of passionate tech enthusiasts dedicated to fostering technical excellence and 
              collaborative learning.
            </motion.p>
            
            <motion.p variants={textVariants}>
              Our club provides a platform for students to explore, learn, and grow in various technical domains 
              including Software development, Artificial Intelligence, Web development, Blockchain and more. Through workshops, 
              hackathons, and collaborative projects, we aim to bridge the gap between academic knowledge and 
              real-world applications.
            </motion.p>
            
            <motion.div
              variants={textVariants}
              className="mt-8"
            >
              <Link to="/about" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 inline-block">
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-stats"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5
                }
              }
            }}
          >
            <CountingNumber value="10+" label="Technical Domains" />
            <CountingNumber value="3+" label="Monthly Workshops" />
            <CountingNumber value="24/7" label="Learning Support" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default AboutSection;