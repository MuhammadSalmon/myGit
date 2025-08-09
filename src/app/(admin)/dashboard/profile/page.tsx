'use client'

import { Typography, Box } from '@mui/material'

export default function ProfilePage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Typography>
        This is the profile page. Here you can display user info from JWT (optional).
      </Typography>
    </Box>
  )
}
