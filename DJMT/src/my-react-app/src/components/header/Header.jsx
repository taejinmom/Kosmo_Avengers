import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import { useEffect } from 'react'

import { validateToken } from '../../pages/member/reactQuery/MemberHandler'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isLogin } from '../../pages/member/atom/LoginAtom'
import { logoutHandler } from '../../pages/member/MemberFunction'

const Header = props => {
  const { cookies, setCookie, removeCookie } = props
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin)
  const location = useLocation()
  useEffect(() => {
    if (isLoginCheck) {
      console.log('location data >> ', location)
    }
  })

  return (
    <>
      <header>
        <div className="submenu">
          <div className="inner">
            <ul>
              {/* 태진 S */}
              {!isLoginCheck ? (
                <>
                  <li>
                    <Link to={'/join'}>회원가입</Link>
                  </li>
                  <li>
                    <Link to={'/login'}>로그인</Link>
                  </li>
                </>
              ) : (
                <li>
                  <span>{}님 환영합니다 </span>
                  <a
                    href="/"
                    onClick={e => {
                      // e.preventDefault()
                      logoutHandler(removeCookie, setIsLoginCheck)
                    }}
                  >
                    로그아웃
                  </a>
                </li>
              )}

              {/* 태진 E */}
            </ul>
          </div>
        </div>
        <div className="gnb">
          <div className="inner">
            <div className="logo">
              <Link to={'/'}>SHOPPING MALL</Link>
            </div>
            <ul className="menu">
              <li>
                <Link to={'/productList'}>여성</Link>
              </li>
              <li>
                <Link to={'/productList'}>남성</Link>
              </li>
              <li>
                <Link to={'/productList'}>신발</Link>
              </li>
              <li>
                <Link to={'/productList'}>악세서리</Link>
              </li>
            </ul>
            <div className="search material-icons">search</div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
