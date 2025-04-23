import React from 'react';

const NotificationMarquee: React.FC = () => {
  const notifications = [
    "🚀 Upcoming Workshop: Introduction to Machine Learning - March 15, 2024",
    "📢 Registration Open: Annual Tech Fest 2024",
    "🎓 Placement Drive: Tech Companies Visiting Campus - March 20, 2024",
    "💡 New Course: Web Development Bootcamp Starting Soon",
    "🏆 Congratulations to our Hackathon Winners!"
  ];

  return (
    <div className="relative py-4 overflow-hidden">
      {/* Top particles */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />
      
      {/* Marquee content */}
      <div className="relative z-10">
        <div className="animate-marquee whitespace-nowrap">
          {notifications.map((notification, index) => (
            <span key={index} className="inline-block mx-4 text-white">
              {notification}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom particles */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      <div className="absolute bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />
    </div>
  );
};

export default NotificationMarquee; 