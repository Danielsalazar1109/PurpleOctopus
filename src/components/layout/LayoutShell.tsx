'use client'

import { usePathname } from 'next/navigation'
import Navbar from './navbar'
import Footer from './footer'

type LayoutShellProps = {
  children: React.ReactNode
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname()
  const hideChrome = pathname === '/book-now' || pathname.startsWith('/book-now/')

  if (hideChrome) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
