import React, { createContext, useContext, useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const username = secureLocalStorage.getItem('username');
    if (username) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (credentials) => {
    if (credentials.username === 'admin' && credentials.password === 'password') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    secureLocalStorage.removeItem('username'); // Clear username on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
