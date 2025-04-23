import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Join Our Tech Community?</h2>
          <p>
            Become part of our growing community of tech enthusiasts and start your journey<br />
            towards technical excellence today.
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary">Join Now</Link>
            {/* <Link to="/about" className="btn btn-secondary">Learn More</Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 