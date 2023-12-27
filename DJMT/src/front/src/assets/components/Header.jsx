import React, { useEffect, useState } from 'react'
import { headerNav } from '../constants'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Header = props => {
  const [tokenData, setTokendata] = useState({
    login_id: '',
    mem_name: '',
    role: '',
  })
  const {
    tokenDataCheck,
    setTokenDataCheck,
    cookies,
    setCookies,
    removeCookie,
  } = props
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log('logout!', cookies.bodyJson)
    if (cookies.bodyJson === undefined) {
      setTokendata({ ...tokenData, login_id: '', mem_name: '', role: '' })
    } else {
      setTokendata({
        ...tokenData,
        login_id: cookies.bodyJson.login_id,
        mem_name: cookies.bodyJson.mem_name,
      })
    }
  }, [])

  console.log('Header.jsx cookies -> ')
  const toggleMenu = () => {
    setShow(prevShow => !prevShow)
  }
  console.log('tokenData', tokenData)
  return (
    <>
      <header id="header" role="banner">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/">
              portfolio<em>react.js</em>
            </a>
          </div>
          <nav
            className={`header__nav ${show ? 'show' : ''}`}
            role="navigation"
            aria-label="메인 메뉴"
          >
            <ul>
              {headerNav.map((nav, key) => {
                return (
                  <li key={key}>
                    <a href={nav.url}>{nav.title}</a>
                  </li>
                )
              })}
              {tokenDataCheck && (
                <li>
                  {tokenData.mem_name}님 안녕하세요
                  <a
                    href="/"
                    onClick={e => {
                      removeCookie('jwtToken')
                      removeCookie('bodyJson')
                      removeCookie('refreshToken')
                      setTokenDataCheck(tokenData, false)
                    }}
                  >
                    Logout
                  </a>
                </li>
              )}
              {!tokenDataCheck && (
                <li>
                  <a href={'/login'}>Login</a>
                </li>
              )}
            </ul>
          </nav>
          <div
            className="header__nav__mobile"
            id="headerToggle"
            aria-controls="primary-menu"
            aria-expanded={show ? 'true' : 'false'}
            role="button"
            tabIndex="0"
            onClick={toggleMenu}
          ></div>
        </div>
      </header>
    </>
  )
}

export default Header
