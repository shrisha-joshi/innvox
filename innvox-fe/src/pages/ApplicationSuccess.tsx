import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Application Submitted Successfully!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your application. We will review it and get back to you soon.
        </p>

        <div className="space-y-4">
          <Link
            to="/placements"
            className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            View More Opportunities
          </Link>
          
          <Link
            to="/"
            className="block w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccess; 