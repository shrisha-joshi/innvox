import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlacementOpportunity } from '../types/placement';

const Placements: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing'>('all');

  // This would typically come from an API
  const opportunities: PlacementOpportunity[] = [
    {
      id: '1',
      companyName: 'Example Tech',
      role: 'Software Engineer Intern',
      type: 'internship',
      requiredSkills: ['React', 'TypeScript', 'Node.js'],
      salary: {
        min: 25000,
        max: 35000,
        currency: 'INR'
      },
      lastDateToApply: '2024-04-30',
      description: 'Looking for passionate developers...',
      status: 'ongoing',
      location: 'Bangalore',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    // Add more sample opportunities as needed
  ];

  const filteredOpportunities = opportunities.filter(opp => 
    filter === 'all' ? true : opp.status === filter
  );

  const handleApply = (opportunityId: string) => {
    navigate(`/placements/apply/${opportunityId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Placement Opportunities</h1>
        
        {/* Filter Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'upcoming' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('ongoing')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'ongoing' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Ongoing
          </button>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {opportunity.companyName}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    opportunity.status === 'ongoing' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {opportunity.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {opportunity.role}
                </h3>
                
                <div className="mb-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> {opportunity.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Salary:</span> {opportunity.salary.currency} {opportunity.salary.min.toLocaleString()} - {opportunity.salary.max.toLocaleString()}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.requiredSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-500">
                    Last Date: {new Date(opportunity.lastDateToApply).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => handleApply(opportunity.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg">
              No {filter !== 'all' ? filter : ''} opportunities available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Placements; 