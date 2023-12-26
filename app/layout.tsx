import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { Provider } from './components/Provider'
import Footer from './components/Footer'
import FadeInContent from './components/FadeInContent'
import ScrollToTopButton from './components/ScrollToTopButton'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elson Ng - Portfolio',
  description: 'Portfolio',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-6xl min-h-screen mx-auto px-4 sm:px-6 lg:px-6 bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50  dark:selection:bg-gray-800`}>
        <Provider>
          <FadeInContent moveY={false}>
            <NavBar />
          </FadeInContent>
          <main className="">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </Provider>
      </body>

    </html>
  )
}
