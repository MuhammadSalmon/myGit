'use client';

import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Badge 
} from '@mui/material';
import { Dropdown, MenuButton, Menu, MenuItem } from '@mui/base';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AccountCircle } from '@mui/icons-material';
interface DashboardHeaderProps {
  open: boolean;
  toggleDrawer: () => void;
  drawerWidth: number;
}

export default function DashboardHeader({ 
  open, 
  toggleDrawer, 
  drawerWidth 
}: DashboardHeaderProps) {
  return (
    <AppBar
      position="absolute"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: (theme) => theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: (theme) => theme.transitions.create(['width', 'margin'], {
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
          Dashboard
        </Typography>
        <Dropdown>
          <MenuButton>
            <AccountCircle />
          </MenuButton>
          <Menu>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>  
        </Dropdown>
      </Toolbar>
    </AppBar>
  );
}