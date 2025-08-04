'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from '@/lib/authapi/userwithsession';
// import { getCurrentUser } from '@/lib/authapi/api';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //  useEffect(() => {
  const refreshUser = async () => {
    try {
        // First check session status
        const sessionData = await getCurrentUser();

        if (sessionData.status === 200 && sessionData.message === 'authenticated') {
          // If user is authenticated, then set user data
          setUser(sessionData.user);
          router.push('/dashboard');
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log('Session check error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);