import { Outlet } from 'react-router-dom'
import './Layout.css'
import '../../styles/Common.css'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import { useQuery } from 'react-query'
import axios from 'axios'
import { login } from '../../pages/member/reactQuery/MemberReactQuery.jsx'
import { useCookies } from 'react-cookie'

const Layout = () => {
  const [cookies, setCookie, removeCookie] = useCookies([])
  return (
    <>
      <Header
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
