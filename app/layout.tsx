import dynamic from 'next/dynamic'
import { RootProvider } from 'next-docs-ui/provider'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import 'next-docs-ui/style.css'
import '@/styles/globals.css'
import Footer from '@/pages/components/footer'
import Head1 from '../pages/components/head1';
export default function Layout({ children }: { children: ReactNode }) {
  const CrispWithNoSSR = dynamic(
    () => import('./components/crisp')
  )

  return (
    <html lang="zh-tw">
    <CrispWithNoSSR />
    <body>
<Head1 />
      <div className="pt-14">
<RootProvider>        {children}</RootProvider>
  </div>
      </body>
          <Footer />   

    </html>
  )
}
