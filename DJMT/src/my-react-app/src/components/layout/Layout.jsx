import { Outlet } from 'react-router-dom'
import './Layout.css'
import '../../styles/Common.css'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout