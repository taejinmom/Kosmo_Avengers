import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import HomeView from './assets/views/Main'
import lenis from './utills/lenis'
import link from './utills/link'
import Join from './assets/views/components/join/Join'
import Login from './assets/views/components/login/Login'
import { useCookies } from 'react-cookie'
import { ToastContainer } from 'react-toastify'

import NoticeList from './assets/views/components/notice/NoticeList'
import NoticeDetail from './assets/views/components/notice/NoticeDetail'
import NoticeWrite from './assets/views/components/notice/NoticeWrite'
import NoticeUpdate from './assets/views/components/notice/NoticeUpdate'
import Mypage from './assets/views/components/mypage/Mypage'
import NotFound from './assets/views/components/error/NotFound'

const App = () => {
  useEffect(() => {
    lenis()
    link()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {/* 여기에 다른 페이지 넣기 */}
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
		<Route path="/mypage" element={<Mypage />} />
		
		<Route path="/notice" element={<NoticeList />} />
        <Route path="/notice/:ntc_no" element={<NoticeDetail />} />
        <Route path="/notice/write" element={<NoticeWrite />} />
        <Route path="/notice/update/:ntc_no" element={<NoticeUpdate />} />
        
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
    </BrowserRouter>
  )
}

export default App
