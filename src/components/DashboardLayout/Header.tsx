'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ExitToApp } from '@mui/icons-material';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '@/theme/colorModeContext';
interface DashboardHeaderProps {
  open: boolean;
  toggleDrawer: () => void;
  drawerWidth: number;
}

export default function DashboardHeader({
  open,
  toggleDrawer,
  drawerWidth,
}: DashboardHeaderProps) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    try {
      await signOut({
        callbackUrl: '/',
        redirect: true,
      });
    } catch (error) {
      console.error('Sign out error:', error);
      window.location.href = '/';
    }
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: (theme) =>
          theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: (theme) =>
            theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }),
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          TGEM JOBS ADMIN
        </Typography>

        {/* Theme toggle button */}
        <Tooltip title="Toggle theme">
          <IconButton
            onClick={colorMode.toggleColorMode}
            color="inherit"
            sx={{ mr: 1 }}
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Tooltip>

        {/* Account menu */}
        <Box>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleToggle}
              size="large"
              edge="end"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              elevation: 3,
              sx: {
                mt: 1.5,
                borderRadius: 2,
                minWidth: 180,
                boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
              },
            }}
          >
            <MenuItem component={Link} href="/dashboard/profile">
              Profile
            </MenuItem>
            <MenuItem>My Account</MenuItem>
            <MenuItem>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<ExitToApp />}
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
