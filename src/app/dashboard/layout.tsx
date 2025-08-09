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

      {/* Top Bar */}
      <DashboardHeader 
        open={open} 
        toggleDrawer={toggleDrawer} 
        drawerWidth={drawerWidth} 
      />

      {/* Sidebar Drawer */}
      <DashboardDrawer 
        open={open} 
        toggleDrawer={toggleDrawer} 
        drawerWidth={drawerWidth} 
      />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
        }}
      >
        {/* Push content below the AppBar */}
        <Toolbar />

        {/* Main content area that grows */}
        <Box sx={{ flex: 1, p: 3 }}>
          {children}
        </Box>

        {/* Sticky Footer */}
        <DashboardFooter />
      </Box>
    </Box>
  );
}
