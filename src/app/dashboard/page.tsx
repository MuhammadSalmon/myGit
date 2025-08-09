'use client'

import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Alert
} from '@mui/material'
import { 
  Dashboard, 
  Person, 
  ExitToApp, 
  Security, 
  VpnKey,
  Settings 
} from '@mui/icons-material'
import ChangePasswordDialog from '@/components/change-password-dialog'
import Chart from '@/components/Dashboard/Chart';
import Deposits from '@/components/Dashboard/Deposits';
import Orders from '@/components/Dashboard/Orders';
export default function DashboardPage() {
  const { data: session } = useSession()
  const [changePasswordOpen, setChangePasswordOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleSignOut = async () => {
    try {
      // Show loading state or confirmation if needed
      await signOut({ 
        callbackUrl: '/',
        redirect: true 
      })
    } catch (error) {
      console.error('Sign out error:', error)
      // Fallback: force redirect to home page
      window.location.href = '/'
    }
  }

  const handlePasswordChangeSuccess = () => {
    setSuccessMessage('Password changed successfully!')
    setTimeout(() => setSuccessMessage(''), 5000)
  }

  if (!session) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Typography variant="h4" align="center">
          Access Denied
        </Typography>
      </Container>
    )
  }

  return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}


