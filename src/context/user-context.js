'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    console.log('⚡ fetchUser is being called');
    setLoading(true);
    try {
      const res = await fetch('/api/currentuser', { credentials: 'include' });
      const data = await res.json();
      console.log('user data fetched initially', data)
      setUser(data.user || null);
    } catch (error) {
      setUser(null);
      console.log('error fetching user details', error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <AuthContext.Provider value={{ user, loading, refreshUser: fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
