'use client';
import React from 'react';
import { useRouter } from 'next/navigation';  
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';
import { MainNav } from '@/components/dashboard/layout/main-nav'; // header
import { SideNav } from '@/components/dashboard/layout/side-nav'; // sidebar
import { useAuth } from '@/context/user-context'


export default function Layout({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  
  // if (!user) return router.push('/login');  

  return (
    <>
      <GlobalStyles 
        styles={{
          body: {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': 1000,
            '--SideNav-width': '280px',
            '--SideNav-zIndex': 1100,
            '--MobileNav-width': '320px',
            '--MobileNav-zIndex': 1100,
          },
        }}
      />
      
      <Box
        sx={{
          bgcolor: 'var(--mui-palette-background-default)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '100vh',
        }}
      >
        <SideNav />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            pl: { lg: 'var(--SideNav-width)' },
          }}
        >
          <MainNav />

          <main>
            <Container maxWidth="xl" sx={{ py: '64px' }}>
              {/* <AuthProvider>{children}</AuthProvider> */}
              {children}
            </Container>
          </main>
        </Box>
      </Box>
    </>
  );
}
