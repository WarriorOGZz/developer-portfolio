import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WarriorOGZz - Developer Portfolio',
  description: 'Full Stack Developer | Problem Solver | Tech Enthusiast',
  keywords: 'developer, portfolio, web development, full stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
