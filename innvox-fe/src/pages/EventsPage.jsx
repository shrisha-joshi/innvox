import React from 'react';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 font-[system-ui] tracking-tight">Upcoming Events</h1>
        
        {/* Event Card */}
        <div className="bg-gray-950 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] max-w-2xl mx-auto 
            transform transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] 
            relative group border border-white/10">
          {/* Glow effect container */}
          <div className="absolute inset-0 rounded-lg glow-effect opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          {/* Card Header with Gradient */}
          <div className="bg-black border-b border-slate-800 px-6 py-4 relative z-10 
              shadow-[inset_0_1px_8px_rgba(255,255,255,0.05)]">
            <h2 className="text-2xl font-bold text-white font-[system-ui] tracking-tight">Inaugural of INNVOX Club</h2>
          </div>
          
          {/* Card Content */}
          <div className="p-6 text-gray-400 font-[system-ui] relative z-10">
            <div className="flex flex-col md:flex-row mb-6">
              {/* Date */}
              <div className="flex items-center mb-3 md:mb-0 md:mr-8">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>21st April 2025</span>
              </div>
              
              {/* Time */}
              <div className="flex items-center mb-3 md:mb-0 md:mr-8">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>10:00 AM</span>
              </div>
              
              {/* Location */}
              <div className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>KSIT Auditorium</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700/50 pt-4">
              <p className="mb-4 leading-relaxed">
                Join us for the official launch of INNVOX, the premier tech innovation club designed to foster creativity and technical excellence among students.
                Experience demonstrations of cutting-edge projects, networking opportunities, and learn about upcoming workshops and hackathons.
              </p>
              
              <button className="inline-flex items-center justify-center rounded-md text-md  
                bg-white text-black h-10 px-4 py-2 transition-all duration-300 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] relative overflow-hidden
                before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100
                before:transition-opacity before:duration-300">
                <span className="relative z-10">Register Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .glow-effect {
          background: radial-gradient(800px circle at var(--x) var(--y), 
            rgba(255,255,255,0.15) 0%, 
            rgba(255,255,255,0) 80%);
          pointer-events: none;
        }
        
        .group:hover .glow-effect {
          background: radial-gradient(600px circle at var(--x) var(--y), 
            rgba(255,255,255,0.2) 0%, 
            rgba(255,255,255,0) 80%;
        }
      `}</style>
    </div>
  );
};

export default EventsPage;