'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, getSessionStatus } from '@/lib/authapi/api';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionChecked, setSessionChecked] = useState(false);
  const router = useRouter();

  //  useEffect(() => {
    const refreshUser = async () => {
      try {
        // First check session status
        const sessionData = await getSessionStatus();
        console.log('Session status:', sessionData);

        if (sessionData.authenticated) {
          // If session is active, get user data
          const userData = await getCurrentUser();
          setUser(userData.CurrentUserData || userData.user);
        } else {
          setUser(null);
        }

        } catch (error) {
          console.log('Session check error:', error);
          setUser(null);
        } finally {
          setSessionChecked(true);
          setLoading(false);
        }
      };

        // const data = await getCurrentUser();
        // if (data.user) {
        //   setUser(data.user);
        // } else {
        //   setUser(null);
        // }
        // console.log('session data:', data);
    //   } catch (error) {
    //       console.log('error', error);
    //     setUser(null);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
  useEffect(() => {
    refreshUser();
  }, []);

  const logout = () => {
    setUser(null);
    router.push('/login');
  };
    
  console.log('on page load data:', user);


  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);