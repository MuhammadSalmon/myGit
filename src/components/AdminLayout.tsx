// // components/AdminLayout.tsx
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   CssBaseline,
//   Box,
//   IconButton,
//   Divider,
//   Avatar,
//   Menu,
//   MenuItem,
// } from '@mui/material';
// import {
//   Dashboard as DashboardIcon,
//   People as UsersIcon,
//   Settings as SettingsIcon,
//   Logout as LogoutIcon,
//   Menu as MenuIcon,
//   ChevronLeft as ChevronLeftIcon,
// } from '@mui/icons-material';

// const drawerWidth = 240;

// interface AdminLayoutProps {
//   children: React.ReactNode;
//   title?: string;
// }

// const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title = 'Admin Dashboard' }) => {
//   const router = useRouter();
//   const [open, setOpen] = useState(true);
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     // Implement logout logic here
//     router.push('/login');
//   };

//   const navigateTo = (path: string) => {
//     router.push(path);
//   };

//   const menuItems = [
//     { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin/dashboard' },
//     { text: 'Users', icon: <UsersIcon />, path: '/admin/users' },
//     { text: 'Settings', icon: <SettingsIcon />, path: '/admin/settings' },
//   ];

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//           backgroundColor: 'background.paper',
//           color: 'text.primary',
//           boxShadow: 'none',
//           borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerToggle}
//             edge="start"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
//             {title}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={handleMenuOpen} size="small" sx={{ ml: 2 }}>
//               <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//               onClick={handleMenuClose}
//               PaperProps={{
//                 elevation: 0,
//                 sx: {
//                   overflow: 'visible',
//                   filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                   mt: 1.5,
//                   '& .MuiAvatar-root': {
//                     width: 32,
//                     height: 32,
//                     ml: -0.5,
//                     mr: 1,
//                   },
//                   '&:before': {
//                     content: '""',
//                     display: 'block',
//                     position: 'absolute',
//                     top: 0,
//                     right: 14,
//                     width: 10,
//                     height: 10,
//                     bgcolor: 'background.paper',
//                     transform: 'translateY(-50%) rotate(45deg)',
//                     zIndex: 0,
//                   },
//                 },
//               }}
//               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//             >
//               <MenuItem onClick={() => navigateTo('/admin/profile')}>
//                 <Avatar /> Profile
//               </MenuItem>
//               <MenuItem onClick={handleLogout}>
//                 <ListItemIcon>
//                   <LogoutIcon fontSize="small" />
//                 </ListItemIcon>
//                 Logout
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           whiteSpace: 'nowrap',
//           boxSizing: 'border-box',
//           ...(open && {
//             width: drawerWidth,
//             transition: (theme) =>
//               theme.transitions.create('width', {
//                 easing: theme.transitions.easing.sharp,
//                 duration: theme.transitions.duration.enteringScreen,
//               }),
//             overflowX: 'hidden',
//           }),
//           ...(!open && {
//             transition: (theme) =>
//               theme.transitions.create('width', {
//                 easing: theme.transitions.easing.sharp,
//                 duration: theme.transitions.duration.leavingScreen,
//               }),
//             overflowX: 'hidden',
//             width: `calc(${theme.spacing(7)} + 1px)`,
//             [theme.breakpoints.up('sm')]: {
//               width: `calc(${theme.spacing(8)} + 1px)`,
//             },
//           }),
//         }}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 2 }}>
//           <IconButton onClick={handleDrawerToggle}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </Box>
//         <Divider />
//         <List>
//           {menuItems.map((item) => (
//             <ListItem
//               button
//               key={item.text}
//               onClick={() => navigateTo(item.path)}
//               selected={router.pathname === item.path}
//             >
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: `calc(100% - ${open ? drawerWidth : 56}px)`,
//           transition: (theme) =>
//             theme.transitions.create(['width', 'margin'], {
//               easing: theme.transitions.easing.sharp,
//               duration: theme.transitions.duration.leavingScreen,
//             }),
//         }}
//       >
//         <Toolbar />
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default AdminLayout;