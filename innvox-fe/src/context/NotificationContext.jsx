import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const useNotification = () => {
<<<<<<< HEAD
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
=======
  return useContext(NotificationContext);
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
<<<<<<< HEAD
    try {
      setNotification({ message, type });
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error) {
      console.error('Error showing notification:', error);
    }
=======
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
  };

  const value = {
    notification,
    showNotification
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {notification && (
<<<<<<< HEAD
        <div 
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
            notification.type === 'error' 
              ? 'bg-red-500 text-white' 
              : notification.type === 'success'
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white'
          }`}
        >
=======
        <div className={`notification ${notification.type}`}>
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}; 