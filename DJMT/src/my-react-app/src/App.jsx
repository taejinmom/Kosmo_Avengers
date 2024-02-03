import {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/home/Home.jsx'

// import Login from './pages/member/Login.jsx'
import ProductList from './pages/product/ProductList.jsx'
import ProductDetail from './pages/product/ProductDetail.jsx'
import { useEffect } from 'react'
import { validateToken } from './pages/member/handler/MemberHandler.jsx'
import {
  isLogin,
  memberKeyAtom,
  isAdmin,
} from './pages/member/atom/LoginAtom.jsx'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useCookies } from 'react-cookie'
import Login from './pages/member/view/login/Login.jsx'
import MyPage from './pages/member/view/mypage/MyPage.jsx'
import AdminPage from './pages/member/view/admin/AdminPage.jsx'
import Join from './pages/member/view/join/Join.jsx'
import InitDiv from './pages/member/view/InitDiv.jsx'
import NoticeList from './pages/notice/NoticeList.jsx'
import NoticeDetail from './pages/notice/NoticeDetail.jsx'
import NoticeWrite from './pages/notice/NoticeWrite.jsx'
import NoticeUpdate from './pages/notice/NoticeUpdate.jsx'
import NotFound from './pages/error/NotFound.jsx'
import NewLogin from './pages/member/view/login/NewLogin.jsx'
import NewJoin from './pages/member/view/join/NewJoin.jsx'
import Test from './pages/member/view/test/Test.jsx'

// import MyPage from './pages/member/MyPage.jsx'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin)
  const [isAdminCheck, setIsAdminCheck] = useRecoilState(isAdmin)
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
            <Route
              path="/member"
              element={
                <InitDiv
                  isLoginCheck={isLoginCheck}
                  isAdminCheck={isAdminCheck}
                  memberKey={memberKey}
                >
                  {/* <Login /> */}
                  <NewLogin />
                  {/* <Join /> */}
                  <NewJoin />
                  <MyPage />
                  <AdminPage />
                </InitDiv>
              }
            />
          </Route>
		      <Route path="/test" element={<Test />} />
		      <Route path="/notice" element={<NoticeList />} />
          <Route path="/notice/:ntc_no" element={<NoticeDetail />} />
          <Route path="/notice/write" element={<NoticeWrite />} />
          <Route path="/notice/update/:ntc_no" element={<NoticeUpdate />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </HashRouter>
    </>
  )
}

export default App
