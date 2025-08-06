import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { token } = useAuth();
  const [stats, setStats] = useState({
    users: 0,
    blogs: 0,
    events: 0,
    team: 0,
    gallery: 0,
    testimonials: 0
  });
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = 'http://localhost:5000/api';

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };

        const [usersRes, blogsRes, eventsRes, teamRes, galleryRes, testimonialsRes] = await Promise.all([
          fetch(`${API_BASE_URL}/users`, { headers }),
          fetch(`${API_BASE_URL}/blogs`, { headers }),
          fetch(`${API_BASE_URL}/events`, { headers }),
          fetch(`${API_BASE_URL}/team`, { headers }),
          fetch(`${API_BASE_URL}/gallery`, { headers }),
          fetch(`${API_BASE_URL}/testimonials`, { headers })
        ]);

        const [users, blogs, events, team, gallery, testimonials] = await Promise.all([
          usersRes.json(),
          blogsRes.json(),
          eventsRes.json(),
          teamRes.json(),
          galleryRes.json(),
          testimonialsRes.json()
        ]);

        setStats({
          users: users.length,
          blogs: blogs.length,
          events: events.length,
          team: team.length,
          gallery: gallery.length,
          testimonials: testimonials.length
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  const StatCard = ({ title, value, icon, color }) => (
    <div className={`bg-gray-800 border border-gray-700 rounded-lg p-6 ${color}`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 text-white">
            {icon}
          </div>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-400 truncate">{title}</dt>
            <dd className="text-lg font-medium text-white">{loading ? '...' : value}</dd>
          </dl>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-2">Welcome to the Innvox Admin Panel</p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value={stats.users}
          icon="👥"
          color="hover:bg-gray-700 transition-colors"
        />
        <StatCard
          title="Blog Posts"
          value={stats.blogs}
          icon="📝"
          color="hover:bg-gray-700 transition-colors"
        />
        <StatCard
          title="Events"
          value={stats.events}
          icon="🎉"
          color="hover:bg-gray-700 transition-colors"
        />
        <StatCard
          title="Team Members"
          value={stats.team}
          icon="👨‍💼"
          color="hover:bg-gray-700 transition-colors"
        />
        <StatCard
          title="Gallery Items"
          value={stats.gallery}
          icon="🖼️"
          color="hover:bg-gray-700 transition-colors"
        />
        <StatCard
          title="Testimonials"
          value={stats.testimonials}
          icon="💬"
          color="hover:bg-gray-700 transition-colors"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Add New Blog
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
            Create Event
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
            Add Team Member
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
            Upload Image
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>System is running smoothly</span>
            <span className="text-gray-500 text-sm">Just now</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Database connection established</span>
            <span className="text-gray-500 text-sm">2 minutes ago</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Admin panel loaded successfully</span>
            <span className="text-gray-500 text-sm">5 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 