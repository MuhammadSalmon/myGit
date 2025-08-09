'use client';

import { useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import DashboardHeader from '@/components/DashboardLayout/Header';
import DashboardDrawer from '@/components/DashboardLayout/Drawer';
import DashboardFooter from '@/components/DashboardLayout/Footer';

const drawerWidth = 240;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DashboardHeader 
        open={open} 
        toggleDrawer={toggleDrawer} 
        drawerWidth={drawerWidth} 
      />
      <DashboardDrawer 
        open={open} 
        toggleDrawer={toggleDrawer} 
        drawerWidth={drawerWidth} 
      />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3 }}>
          {children}
          <DashboardFooter />
        </Box>
      </Box>
    </Box>
  );
}