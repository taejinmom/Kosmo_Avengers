import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/home/Home.jsx'

// import Login from './pages/member/Login.jsx'
import ProductList from './pages/product/ProductList.jsx'
import ProductDetail from './pages/product/ProductDetail.jsx'
import MyCart from './pages/cart/MyCart.jsx'
import { useEffect, useState, createContext } from 'react'
import { validateToken } from './pages/member/handler/MemberHandler.jsx'
import {
  isLogin,
  memberKeyAtom,
  isAdmin,
} from './pages/member/atom/LoginAtom.jsx'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useCookies } from 'react-cookie'
import InitDiv from './pages/member/view/InitDiv.jsx'
import NoticeCategory from './pages/notice/NoticeCategory.jsx'
import NoticeDetail from './pages/notice/NoticeDetail.jsx'
import NoticeWrite from './pages/notice/NoticeWrite.jsx'
import NoticeUpdate from './pages/notice/NoticeUpdate.jsx'
import NotFound from './pages/error/NotFound.jsx'
import Test from './pages/member/view/test/Test.jsx'
import OrderForm from './pages/order/OrderForm.jsx'

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
            <Route path="/productDetail/:pdct_no" element={<ProductDetail />} />
            <Route path="/myCart" element={<MyCart />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/notice" element={<NoticeCategory />} />
            <Route path="/notice/:ntc_no" element={<NoticeDetail />} />
            <Route path="/notice/write" element={<NoticeWrite />} />
            <Route path="/notice/update/:ntc_no" element={<NoticeUpdate />} />
            <Route
              path="/member"
              element={
                <InitDiv
                  isLoginCheck={isLoginCheck}
                  isAdminCheck={isAdminCheck}
                  memberKey={memberKey}
                />
              }
            />
          </Route>
          <Route path="/test" element={<Test />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
