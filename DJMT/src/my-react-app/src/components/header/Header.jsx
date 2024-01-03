import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <>
      <header>
        <div className='submenu'>
          <div className='inner'>
            <ul>
              <li><Link to={'/join'}>회원가입</Link></li>
              <li><Link to={'/login'}>로그인</Link></li>
            </ul>
          </div>
        </div>
        <div className='gnb'>
          <div className="inner">
            <div className="logo"><Link to={'/'}>SHOPPING MALL</Link></div>
            <ul className='menu'>
              <li><Link to={'/productList'}>여성</Link></li>
              <li><Link to={'/productList'}>남성</Link></li>
              <li><Link to={'/productList'}>신발</Link></li>
              <li><Link to={'/productList'}>악세서리</Link></li>
            </ul>
            <div className="search material-icons">search</div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header