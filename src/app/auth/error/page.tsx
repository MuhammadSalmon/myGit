'use client'

import { useSearchParams } from 'next/navigation'
import { Container, Paper, Typography, Button, Box, Alert } from '@mui/material'
import { Error as ErrorIcon, Home } from '@mui/icons-material'
import Link from 'next/link'

const errorMessages: Record<string, string> = {
  Configuration: 'There is a problem with the server configuration.',
  AccessDenied: 'You do not have permission to sign in.',
  Verification: 'The verification token has expired or has already been used.',
  Default: 'An error occurred during authentication.'
}

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  
  const errorMessage = error && errorMessages[error] 
    ? errorMessages[error] 
    : errorMessages.Default

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <ErrorIcon color="error" sx={{ fontSize: 64, mb: 2 }} />
        
        <Typography variant="h4" component="h1" gutterBottom color="error">
          Authentication Error
        </Typography>
        
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMessage}
        </Alert>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Please try signing in again. If the problem persists, contact support.
        </Typography>
        
        <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            component={Link}
            href="/auth/signin"
            variant="contained"
            color="primary"
          >
            Try Again
          </Button>
          <Button
            component={Link}
            href="/"
            variant="outlined"
            startIcon={<Home />}
          >
            Go Home
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
