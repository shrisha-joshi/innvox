<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect } from 'react';
=======
import React, { createContext, useContext, useState } from 'react';
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23

const AuthContext = createContext();

export const useAuth = () => {
<<<<<<< HEAD
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
=======
  return useContext(AuthContext);
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
<<<<<<< HEAD
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (userData) => {
    try {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Error removing user from localStorage:', error);
      throw error;
    }
=======

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('user');
>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
  };

  const value = {
    user,
<<<<<<< HEAD
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

=======
    login,
    logout
  };

>>>>>>> 5f9f5a34c5ee9b486d6df436903b2c8c88847a23
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 