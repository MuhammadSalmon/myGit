'use client'

import { useSession } from 'next-auth/react'
import {
  Container,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Chip
} from '@mui/material'
import { Person, Email, CalendarToday, Verified } from '@mui/icons-material'

export default function ProfilePage() {
  const { data: session } = useSession()

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
    <>
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        User Profile
      </Typography>

      <Card>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Person sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
            <Box>
              <Typography variant="h4">
                {session.user?.name || 'Anonymous User'}
              </Typography>
              <Chip
                label="Active User"
                color="success"
                size="small"
                icon={<Verified />}
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ color: 'primary.main', mr: 2 }} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Email Address
                </Typography>
                <Typography variant="body1">
                  {session.user?.email || 'No email provided'}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarToday sx={{ color: 'primary.main', mr: 2 }} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Account Status
                </Typography>
                <Typography variant="body1">
                  Active and Verified
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom>
              Session Details
            </Typography>
            <Typography variant="body2" component="pre" sx={{ 
              overflow: 'auto',
              fontSize: '0.75rem'
            }}>
              {JSON.stringify(session, null, 2)}
            </Typography>
          </Paper>
        </CardContent>
      </Card>
    </Container>
    </>
  )
}
