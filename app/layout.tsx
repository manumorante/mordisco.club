import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components'

export const metadata: Metadata = {
  title: 'Mordisco Club',
  description: 'Fotos de las fiestas de música electrónica Mordisco Club en Granada',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
