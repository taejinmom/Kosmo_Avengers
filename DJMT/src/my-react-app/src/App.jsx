import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/home/Home.jsx'
import Join from './pages/member/join/Join.jsx'
// import Login from './pages/member/Login.jsx'
import ProductList from './pages/product/ProductList.jsx'
import ProductDetail from './pages/product/ProductDetail.jsx'
import { useEffect } from 'react'
import { validateToken } from './pages/member/handler/MemberHandler.jsx'
import { isLogin, memberKeyAtom } from './pages/member/atom/LoginAtom.jsx'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useCookies } from 'react-cookie'
import Login from './pages/member/login/Login.jsx'
import MyPage from './pages/member/mypage/MyPage.jsx'
import Chat from './pages/member/chat/Chat.jsx'
import ChatRoom from './pages/member/chat/Chat2.jsx'
import Chat3 from './pages/member/chat/Chat3.jsx'

// import MyPage from './pages/member/MyPage.jsx'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin)
  const memberKey = useRecoilValue(memberKeyAtom)

  useEffect(() => {
    validateToken(cookies, setCookie, removeCookie, setIsLoginCheck, memberKey)
  }, [])
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/productDetail" element={<ProductDetail />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat2" element={<ChatRoom />} />
          </Route>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/myPage"
            element={
              <MyPage memberKey={memberKey} isLoginCheck={isLoginCheck} />
            }
          />
          <Route path="/chat3" element={<Chat3 />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </HashRouter>
    </>
  )
}

export default App
