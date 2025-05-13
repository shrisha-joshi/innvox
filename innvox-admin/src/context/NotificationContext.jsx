import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [currentNotification, setCurrentNotification] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
    try {
      const savedNotifications = localStorage.getItem('adminNotifications');
      if (savedNotifications) {
        setNotifications(JSON.parse(savedNotifications));
      }
    } catch (error) {
      console.error('Error loading notifications from localStorage:', error);
=======
    // Load notifications from localStorage on initial load
    const savedNotifications = localStorage.getItem('adminNotifications');
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
    }
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    try {
      localStorage.setItem('adminNotifications', JSON.stringify(notifications));
    } catch (error) {
      console.error('Error saving notifications to localStorage:', error);
    }
  }, [notifications]);

  const showNotification = (message, type = 'info') => {
    try {
      const newNotification = {
        id: Date.now(),
        message,
        type,
        timestamp: new Date().toISOString()
      };
      setNotifications(prev => [...prev, newNotification]);
      setCurrentNotification(newNotification);

      // Auto-remove notification after 5 seconds
      setTimeout(() => {
        removeNotification(newNotification.id);
      }, 5000);
    } catch (error) {
      console.error('Error showing notification:', error);
    }
  };

  const removeNotification = (id) => {
    try {
      setNotifications(prev => prev.filter(notification => notification.id !== id));
      if (currentNotification?.id === id) {
        setCurrentNotification(null);
      }
    } catch (error) {
      console.error('Error removing notification:', error);
=======
    // Save notifications to localStorage whenever they change
    localStorage.setItem('adminNotifications', JSON.stringify(notifications));
  }, [notifications]);

  const showNotification = (message, type = 'info') => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toISOString()
    };
    setNotifications(prev => [...prev, newNotification]);
    setCurrentNotification(newNotification);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
    if (currentNotification?.id === id) {
      setCurrentNotification(null);
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
    }
  };

  const clearNotifications = () => {
<<<<<<< HEAD
    try {
      setNotifications([]);
      setCurrentNotification(null);
    } catch (error) {
      console.error('Error clearing notifications:', error);
    }
=======
    setNotifications([]);
    setCurrentNotification(null);
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
  };

  const value = {
    notifications,
    currentNotification,
    showNotification,
    removeNotification,
    clearNotifications
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
<<<<<<< HEAD
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${
              notification.type === 'error'
                ? 'bg-red-500 text-white'
                : notification.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 text-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{notification.message}</span>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-4 text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
=======
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
    </NotificationContext.Provider>
  );
}; 