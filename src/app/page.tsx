'use client'

import { useSession } from 'next-auth/react'
import { Container, Typography, Button, Box, Paper } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Typography variant="h4" align="center">
          Loading...
        </Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom color="primary">
          TGEM VACANCIES  
        </Typography>
        
        <Typography variant="h6" color="text.secondary" paragraph>
          Welcom to the TGEM Vacancies Portal
        </Typography>

        {session ? (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Hello, {session.user?.name || session.user?.email}!
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                component={Link}
                href="/dashboard"
                variant="contained"
                size="large"
              >
                Go to Dashboard
              </Button>
              <Button
                component={Link}
                href="/profile"
                variant="outlined"
                size="large"
              >
                View Profile
              </Button>
            </Box>
          </Box>
        ) : (
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              component={Link}
              href="/auth/signin"
              variant="contained"
              size="large"
            >
              Sign In
            </Button>
            <Button
              component={Link}
              href="/auth/signup"
              variant="outlined"
              size="large"
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  )
}
