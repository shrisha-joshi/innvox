import React from 'react';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-gray-400 text-lg">
            Meet the talented individuals who make up our tech community!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team member cards will go here */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Member</h3>
            <p className="text-gray-400">Position</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage; 