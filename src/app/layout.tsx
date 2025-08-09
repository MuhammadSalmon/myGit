import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { AppThemeProvider } from '@/theme/AppThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fullstack Auth App',
  description: 'A complete authentication app with Prisma and Material UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
