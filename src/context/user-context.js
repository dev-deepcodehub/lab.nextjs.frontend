'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from '@/lib/authapi/api';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //  useEffect(() => {
    const refreshUser = async () => {
      try {
        const data = await getCurrentUser();
        if (data.CurrentUserData) {
          setUser(data.CurrentUserData);
        } else {
          setUser(null);
        }
        console.log('dataaaaa', data);
      } catch (error) {
          console.log('error', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    refreshUser();
  }, []);

  const logout = () => {
    setUser(null);
    router.push('/login');
  };
    
  console.log('usersetornot', user);


  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);