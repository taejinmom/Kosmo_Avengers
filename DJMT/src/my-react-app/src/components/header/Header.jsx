import { Link } from 'react-router-dom'
import './Header.css'
import { logoutHandler } from '../../pages/member/handler/MemberHandler'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  isLogin,
  memberKeyAtom,
  isAdmin,
} from '../../pages/member/atom/LoginAtom'
import { isPop } from '../../pages/member/atom/ModalAtom'

const Header = props => {
  const { cookies, setCookie, removeCookie } = props
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin)
  const isAdminCheck = useRecoilValue(isAdmin)
  const [memberKey, setMemberKey] = useRecoilState(memberKeyAtom)
  const [isPopCheck, setIsPopcheck] = useRecoilState(isPop)

  return (
    <>
      <header>
        <div className="submenu">
          <div className="inner">
            <ul>
              <li>
                <Link to={'/myCart'} state={{ title: '장바구니' }}>
                  장바구니
                </Link>
              </li>
              <li>
                <Link to={'/notice'} state={{ title: 'Notice' }}>
                  Notice
                </Link>
              </li>

              {/* 태진 S */}
              {!isLoginCheck ? (
                <>
                  <li>
                    <Link to={'/member'} state={{ title: 'Join' }}>
                      회원가입
                    </Link>
                  </li>
                  <li>
                    <Link to={'/member'} state={{ title: 'Login' }}>
                      로그인
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {isAdminCheck ? (
                    <>
                      <li>
                        <Link to={'/member'} state={{ title: 'AdminPage' }}>
                          관리자
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to={'/member'} state={{ title: 'MyPage' }}>
                        마이 페이지
                      </Link>
                    </li>
                  )}
                  <li>
                    <a
                      href="/"
                      onClick={e => {
                        e.preventDefault()
                        logoutHandler(emoveCookie, setIsLoginCheck, memberKey, setMemrberKey)
                      }}
                    >
                      로그아웃
                    </a>
                  </li>
                </>
              )}

              {/* 태진 E */}
            </ul>
          </div>
        </div>
        <div className="gnb">
          <div className="inner">
            <div className="logo">
              <Link to={'/'}>DJMT(Day of Joy, Miracle Time)</Link>
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
