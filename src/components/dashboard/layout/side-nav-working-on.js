'use client';

import React from 'react';
import Link from 'next/link'
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowSquareUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowSquareUpRight';
import { House } from '@phosphor-icons/react';
export function SideNav() {
  return (
    <>
    <Box
      className="Sidebarmaindiv"
      sx={{
        '--SideNav-background': 'var(--mui-palette-neutral-950)',
        '--SideNav-color': 'var(--mui-palette-common-white)',
        '--NavItem-color': 'var(--mui-palette-neutral-300)',
        '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
        '--NavItem-active-background': 'var(--mui-palette-primary-main)',
        '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
        '--NavItem-icon-color': 'var(--mui-palette-neutral-400)',
        '--NavItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
        bgcolor: 'var(--SideNav-background)',
        color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        scrollbarWidth: 'none',
        top: 0,
        width: 'var(--SideNav-width)',
        zIndex: 'var(--SideNav-zIndex)',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box sx={{ display: 'inline-flex' }}>
          <h4 style={{ color: 'white' }}>DCH Dashboard</h4>
        </Box>
      </Stack>

      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
      
      <Box component="nav" sx={{ p: '12px' }}>
        <ul className='nav-main-ul'>
          <li>
            <Link className="sidebar_menu_items" href="/dashboard">
              <span className='menu_icon'><House /></span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className="sidebar_menu_items" href="/dashboard/settings">
              <span className='menu_icon'><ArrowSquareUpRightIcon /></span>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
    </Box>

      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />

      <Stack spacing={2} sx={{ p: '12px' }}>
        <div>
          <Typography color="var(--mui-palette-neutral-100)" variant="subtitle2">
            Need any type of website?
          </Typography>
          <Typography color="var(--mui-palette-neutral-400)" variant="body2">
            Get in touch or Check out our website.
          </Typography>
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            alt="Pro version"
            src="/assets/devias-kit-pro.png"
            sx={{ height: 'auto', width: '160px' }}
          />
    </Box>
        <Button
          component="a"
          endIcon={<ArrowSquareUpRightIcon fontSize="var(--icon-fontSize-md)" />}
          fullWidth
          href="#"
          sx={{ mt: 2 }}
          target="_blank"
          variant="contained"
        >
          Pro version
        </Button>
      </Stack>
      
    </Box>
    </>
  );
}
