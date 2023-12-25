import React, { useEffect, useState } from 'react'
import { headerNav } from '../constants'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Header = props => {
  const [cookies, setCookie] = useCookies([])
  const [tokenData, setTokendata] = useState({
    login_id: '',
    name: '',
    role: '',
  })
  const [tokenDataCheck, setTokenDataCheck] = useState(false)
  const [show, setShow] = useState(false)

  // 토큰 검사
  // useEffect(e => {
  //   console.log('cookies', cookies)

  //   axios
  //     .post('api/refresh', {
  //       header: {
  //         Authorization: cookies.jwtToken,
  //       },
  //       body: {
  //         bodyJson: cookies.refreshBodyJson,
  //       },
  //     })
  //     .then(res => {
  //       console.log(res.data)
  //       setTokendata(res.data)
  //       setTokenDataCheck(true)
  //     })
  //     .catch(error => {
  //       setTokenDataCheck(false)
  //     })
  // }, [])
  console.log('token', tokenDataCheck)
  const toggleMenu = () => {
    setShow(prevShow => !prevShow)
  }
  const testFunction = () => {
    const refreshToken = 'refreshToken'
    axios
      .post('api/refresh', {
        refreshToken: cookies.bodyJson.refreshToken,
      })
      .then(res => {
        console.log(res.data)
        setCookie('jwtToken', res.data)
      })
  }
  return (
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
                <a href="/" onClick={e => removeCookie('jwtToken')}>
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
            <li>
              <button onClick={testFunction}>새로고침실행!</button>
            </li>
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
  )
}

export default Header
