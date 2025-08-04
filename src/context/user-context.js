'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
// import { getCurrentUser } from '@/lib/authapi/userwithsession';
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
        // First check session status
        const sessionData = await getCurrentUser();
        console.log('getCurrentUser - next api and Session status:', sessionData);

        if (sessionData.authenticated) {
          // If session is active, get user data
          const userData = await getCurrentUser();
          console.log('getcurrentuser - get user data is authenticated:', sessionData);
          setUser(userData.CurrentUserData || userData.user);
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