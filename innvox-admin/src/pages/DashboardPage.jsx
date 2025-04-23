import React, { useState, useEffect } from 'react';
import { useNotification } from '../context/NotificationContext';
import PlacementManagement from '../components/PlacementManagement';

const DashboardPage = () => {
  const { showNotification } = useNotification();
  const [stats, setStats] = useState({
    totalEvents: 0,
    activeEvents: 0,
    totalNotifications: 0,
    pendingNotifications: 0,
    totalPlacements: 0,
    activePlacements: 0
  });

  useEffect(() => {
    // Simulated data - replace with actual API calls
    setStats({
      totalEvents: 15,
      activeEvents: 8,
      totalNotifications: 25,
      pendingNotifications: 12,
      totalPlacements: 10,
      activePlacements: 5
    });
  }, []);

  const handleRefreshStats = () => {
    showNotification('Statistics refreshed successfully', 'success');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleRefreshStats}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Refresh Stats
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Events Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium">Total Events</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalEvents}</p>
        </div>

        {/* Active Events Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium">Active Events</h3>
          <p className="text-3xl font-bold mt-2">{stats.activeEvents}</p>
        </div>

        {/* Total Placements Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium">Total Placements</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalPlacements}</p>
        </div>

        {/* Active Placements Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium">Active Placements</h3>
          <p className="text-3xl font-bold mt-2">{stats.activePlacements}</p>
        </div>
      </div>

      {/* Placement Management Section */}
      <PlacementManagement />
    </div>
  );
};

export default DashboardPage;