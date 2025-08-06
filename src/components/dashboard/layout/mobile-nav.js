'use client';

import React, { useState } from 'react'; 
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowSquareUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowSquareUpRight';
import { navIcons } from './nav-icons'; //icons
import { navItems } from './config'; //menus
import { SignOut } from '@phosphor-icons/react/dist/ssr/SignOut';
import Drawer from '@mui/material/Drawer';
// import { CaretUpDownIcon } from '@phosphor-icons/react/dist/ssr/CaretUpDown';


export function MobileNav({ open, onClose }) {
  const pathname = usePathname();

  return (
    <Drawer
      PaperProps={{
        sx: {
          '--MobileNav-background': 'var(--mui-palette-neutral-950)',
          '--MobileNav-color': 'var(--mui-palette-common-white)',
          '--NavItem-color': 'var(--mui-palette-neutral-300)',
          '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
          '--NavItem-active-background': 'var(--mui-palette-primary-main)',
          '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
          '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
          '--NavItem-icon-color': 'var(--mui-palette-neutral-400)',
          '--NavItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
          '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
          bgcolor: 'var(--MobileNav-background)',
          color: 'var(--MobileNav-color)',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          scrollbarWidth: 'none',
          width: 'var(--MobileNav-width)',
          zIndex: 'var(--MobileNav-zIndex)',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      }}
      onClose={onClose}
      open={open}
    >
    <Box className="Sidebarmaindiv">
      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="div" sx={{ mb: 3 }}>
          <h4 style={{ color: 'white' }}>DCH Dashboard</h4>
        </Typography>
      </Stack>

      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />

      <Box component="nav" sx={{ flex: 1 }}>
        {navItems.map((item) => {
          const Icon = navIcons[item.icon];
          const isActive = pathname === item.href;
          const [hovered, setHovered] = useState(false);

          return (
            <Box
              onClick={onClose}
              component={RouterLink} 
              key={item.key} 
              href={item.href}
              className={isActive ? 'active' : ''} 
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {Icon ? (
                <Icon
                  weight={isActive || hovered ? 'fill' : undefined} 
                />
              ) : null } 
              <Typography component="span" className='menutitle'> {item.title}</Typography>
            </Box>
          )
        })}

        {/* Logout button  */}
        <Box className='logoutbtn'>
            <SignOut weight='fill'/>
            <Typography component="span" className='logout-title'>Log-Out</Typography>
        </Box>

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
    </Drawer>
  );
}