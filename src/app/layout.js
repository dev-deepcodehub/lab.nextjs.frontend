import React from 'react';
import '@/styles/global.css';
import '@/styles/sn.scss';
import AppContent from './app-content';
import { AuthProvider } from '@/context/user-context'

import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocalizationProvider>
          <ThemeProvider>
              <AuthProvider>
                {/* <AppContent> */}
                  {children}
                {/* </AppContent> */}
              </AuthProvider>
            </ThemeProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
