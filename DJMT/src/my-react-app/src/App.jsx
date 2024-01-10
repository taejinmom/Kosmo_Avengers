import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/home/Home.jsx'
import Join from './pages/member/Join.jsx'
import Login from './pages/member/Login.jsx'
import ProductList from './pages/product/ProductList.jsx'
import ProductDetail from './pages/product/ProductDetail.jsx'
import { useEffect } from 'react'
import { validateToken } from './pages/member/reactQuery/MemberHandler.jsx'
import { isLogin } from './pages/member/atom/LoginAtom.jsx'
import { useRecoilState } from 'recoil'
import { useCookies } from 'react-cookie'
import MyPage from './pages/member/MyPage.jsx'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin)
  console.log('isLogin', isLoginCheck)
  useEffect(() => {
    validateToken(cookies, setCookie, removeCookie, setIsLoginCheck).then(
      data => {}
    )
  }, [])
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/productDetail" element={<ProductDetail />} />
            <Route
              path="/myPage"
              element={<MyPage isLoginCheck={isLoginCheck} />}
            />
          </Route>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </HashRouter>
    </>
  )
}

export default App
