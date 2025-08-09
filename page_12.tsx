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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" color="primary">
          Dashboard
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<ExitToApp />}
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </Box>

      {successMessage && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {successMessage}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}
              >
                <Person sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                {session.user?.name || 'User'}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {session.user?.email}
              </Typography>
              <Chip
                label="Authenticated"
                color="success"
                icon={<Security />}
                sx={{ mt: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Dashboard sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h5">
                Welcome to your Dashboard
              </Typography>
            </Box>
            
            <Typography variant="body1" paragraph>
              This is a protected route that requires authentication. You can only see this page because you're logged in with valid credentials.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Account Security:
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Keep your account secure by using a strong password and changing it regularly.
              </Typography>
              
              <Button
                variant="outlined"
                startIcon={<VpnKey />}
                onClick={() => setChangePasswordOpen(true)}
                sx={{ mr: 2 }}
              >
                Change Password
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" startIcon={<Person />}>
                View Profile
              </Button>
              <Button variant="outlined" color="primary" startIcon={<Settings />}>
                Account Settings
              </Button>
              <Button variant="outlined" color="secondary">
                Help & Support
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <ChangePasswordDialog
        open={changePasswordOpen}
        onClose={() => setChangePasswordOpen(false)}
        onSuccess={handlePasswordChangeSuccess}
      />
    </Container>
  )
}
