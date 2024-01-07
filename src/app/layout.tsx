import type { Metadata } from 'next'
import { Inter, Roboto, Nunito } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight: "700", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Englishia istitute',
  description: 'Englishia institute is language center aims to...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}
        <Toaster position="top-right" />

      </body>
    </html>
  )
}
