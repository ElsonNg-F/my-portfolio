import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { Provider } from './components/Provider'
import ScrollToTop from './components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Elson Ng',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50  dark:selection:bg-gray-800`}>
        <Provider>
          <NavBar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}
          </main>
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  )
}
