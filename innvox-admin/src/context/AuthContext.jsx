import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('adminUser');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          // Validate stored user data
          if (parsedUser && parsedUser.email && parsedUser.role === 'admin') {
            setUser(parsedUser);
          } else {
            // Invalid stored data, clear it
            localStorage.removeItem('adminUser');
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        setError('Failed to initialize authentication');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);

      // TODO: Replace with actual API call
      if (email === 'admin@innvox.com' && password === 'admin123') {
        const userData = {
          id: 1,
          email,
          name: 'Admin User',
          role: 'admin'
        };
        setUser(userData);
        localStorage.setItem('adminUser', JSON.stringify(userData));
        return { success: true };
      }
      throw new Error('Invalid credentials');
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setError(null);
      setLoading(true);
      setUser(null);
      localStorage.removeItem('adminUser');
    } catch (error) {
      console.error('Error during logout:', error);
      setError('Failed to logout');
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;