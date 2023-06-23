import '../assets/scss/theme.scss';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Password Wizard',
  description: 'Simplify online security with our powerful app. Generate strong passwords, securely store them, and access with ease. Protect sensitive information with advanced encryption. Say goodbye to password hassles. Download now for convenience, reliability, and peace of mind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
