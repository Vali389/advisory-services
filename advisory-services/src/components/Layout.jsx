import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollToTop from './ScrollToTop'
import ScrollRestoration from './ScrollRestoration'

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
