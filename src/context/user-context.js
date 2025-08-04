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
        console.log('🔄 Session data:', sessionData);

        if (sessionData.status === 200 && sessionData.message === 'Authorized') {
          // If user is authenticated, then set user data
          setUser(sessionData.user);
          console.log('✅ User state updated:', user);
          router.push('/dashboard');
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('❌ Session check error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
      console.log('userdata:', user);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  // // ✅ Detect when user state is updated
  // useEffect(() => {
  //   if (user) {
  //     console.log('✅ User state updated:', user);

  //     // Optional: only push if not already on dashboard
  //     router.push('/dashboard');
  //   }
  // }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);