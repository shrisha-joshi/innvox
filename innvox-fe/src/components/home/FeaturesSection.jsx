import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'fas fa-book',
      title: 'Learning Resources',
      description: 'Access to comprehensive learning materials, tutorials, and workshops to enhance your technical skills.'
    },
    {
      icon: 'fas fa-users',
      title: 'Community Projects',
      description: 'Collaborate on real-world projects with fellow members and gain practical experience.'
    },
    {
      icon: 'fas fa-code',
      title: 'Career Growth',
      description: 'Get guidance on career paths, resume building, and interview preparation in the tech industry.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation Hub',
      description: 'A platform to showcase your ideas, get feedback, and turn them into reality.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Why Join Tech Club?</h2>
          <p>Discover the benefits of being part of our technical community</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 