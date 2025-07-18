import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || null;
  });

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  // Optional: Auto logout after 1 minute
  useEffect(() => {
    if (token) {
      const timer = setTimeout(() => {
        logout();
        console.log('⏰ Token expired. Logged out automatically.');
      }, 60000); // 1 minute

      return () => clearTimeout(timer);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
