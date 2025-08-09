'use client'

import { Box, Typography } from '@mui/material'

export default function DashboardPage() {
  return (
    <Box sx={{ mt: 10, px: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to your Dashboard
      </Typography>
      <Typography variant="body1">
        You are successfully logged in.
      </Typography>
    </Box>
  )
}
