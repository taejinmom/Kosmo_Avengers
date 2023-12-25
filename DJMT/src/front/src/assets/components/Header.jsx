import React, { useEffect, useState } from 'react'
import { headerNav } from '../constants'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Header = props => {
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [tokenData, setTokendata] = useState({
    login_id: '',
    name: '',
    role: '',
  })
  const { tokenDataCheck, setTokenDataCheck } = props
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(prevShow => !prevShow)
  }

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
                  {tokenData.name}님 안녕하세요
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
