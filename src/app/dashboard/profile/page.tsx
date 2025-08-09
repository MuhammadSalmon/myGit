'use client'

import { useSession } from 'next-auth/react'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  Tabs,
  Tab,
} from '@mui/material'
import {
  Person,
  Email,
  VerifiedUser,
  Security,
  CalendarToday,
} from '@mui/icons-material'
import { useState } from 'react'

interface TabPanelProps {
  value: number
  index: number
  children: React.ReactNode
}

function TabPanel({ value, index, children }: TabPanelProps) {
  return value === index ? <Box sx={{ pt: 3 }}>{children}</Box> : null
}

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const [tab, setTab] = useState(0)

  const handleTabChange = (_: any, newVal: number) => setTab(newVal)

  if (status === 'loading') {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Typography variant="h5" align="center">Loading...</Typography>
      </Container>
    )
  }

  if (!session) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" color="error" gutterBottom>
            Access Denied
          </Typography>
          <Typography>You must be signed in to view this page.</Typography>
        </Paper>
      </Container>
    )
  }

  const { name, email, image } = session.user || {}
  const roles = ['Admin', 'Editor'] // Replace with real data if available
  const joinedAt = session.user?.joinedAt || '2024-01-01'
  const is2FAEnabled = true // Replace with real setting if available

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Profile
      </Typography>

      <Card elevation={3}>
        <CardContent>
          <Tabs value={tab} onChange={handleTabChange} variant="scrollable">
            <Tab label="Info" />
            <Tab label="Settings" />
            <Tab label="Security" />
          </Tabs>

          <Divider sx={{ mb: 3 }} />

          {/* Tab 1: Info */}
          <TabPanel value={tab} index={0}>
            <Grid container spacing={4}>
              {/* Left: Avatar and details */}
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <Avatar
                    src={image || undefined}
                    sx={{ width: 80, height: 80, margin: 'auto', mb: 2 }}
                  >
                    <Person />
                  </Avatar>
                  <Typography variant="h5">{name || 'Unknown User'}</Typography>
                  <Chip
                    label="Active"
                    icon={<VerifiedUser />}
                    color="success"
                    sx={{ mt: 1 }}
                  />
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                  <Typography><Email fontSize="small" sx={{ mr: 1 }} /> {email}</Typography>
                  <Typography><CalendarToday fontSize="small" sx={{ mr: 1 }} /> Joined: {new Date(joinedAt).toLocaleDateString()}</Typography>
                  <Typography>Roles: {roles.join(', ')}</Typography>
                </Box>
              </Grid>

              {/* Right: Raw session */}
              <Grid item xs={12} md={8}>
                <Paper variant="outlined" sx={{ p: 2, maxHeight: 300, overflowY: 'auto' }}>
                  <Typography variant="h6" gutterBottom>
                    Session Data
                  </Typography>
                  <Typography
                    component="pre"
                    sx={{ fontSize: '0.75rem', whiteSpace: 'pre-wrap' }}
                  >
                    {JSON.stringify(session, null, 2)}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 2: Settings */}
          <TabPanel value={tab} index={1}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ maxWidth: 400 }}
            >
              <TextField
                fullWidth
                label="Full Name"
                defaultValue={name}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                defaultValue={email}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary">
                Save Changes
              </Button>
            </Box>
          </TabPanel>

          {/* Tab 3: Security */}
          <TabPanel value={tab} index={2}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Security color={is2FAEnabled ? 'success' : 'warning'} />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Two-Factor Authentication:{' '}
                  <strong>{is2FAEnabled ? 'Enabled' : 'Disabled'}</strong>
                </Typography>
              </Grid>
            </Grid>

            <Typography sx={{ mt: 2 }} variant="body2">
              Enable 2FA to protect your account from unauthorized access. You can configure it from your security settings.
            </Typography>
          </TabPanel>
        </CardContent>
      </Card>
    </Container>
  )
}
