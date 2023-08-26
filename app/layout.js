import { Pacifico } from 'next/font/google'

import Navbar from '../components/Navbar'
import Providers from './providers'

import './globals.css'

export const metadata = {
  title: 'My family',
  description: 'My family app',
  keywords: 'family, tree',
}

const pacifico = Pacifico({
  weight: ['400'],
  styles: ['normal'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pacifico.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
