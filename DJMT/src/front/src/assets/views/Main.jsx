import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Site from '../components/Site'
import Port from '../components/Port'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Skip from '../components/Skip'
import Main from '../components/Main'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const HomeView = props => {
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [tokenDataCheck, setTokenDataCheck] = useState(false)

  useEffect(() => {
    if (cookies.bodyJson === undefined) return
    axios
      .post('api/refresh', {
        refreshToken: cookies.bodyJson.refreshToken,
      })
      .then(res => {
        console.log('이전 쿠키 cookie', cookies.jwtToken)
        console.log('새로 발급받은 쿠키 cookie', res.data)
        setCookie('jwtToken', res.data)
        setTokenDataCheck(true)
      })
      .catch(error => {
        console.log(error)
        if (error.response.status === 402) {
          console.log('refreshToken 유효기간 만료!')
          setTokenDataCheck(false)
          removeCookie('refreshToken')
          removeCookie('jwtToken')
        }
        // setTokenDataCheck(false)
      })
  }, [])
  return (
    <>
      <Skip />
      <Header
        tokenDataCheck={tokenDataCheck}
        setTokenDataCheck={setTokenDataCheck}
      />
      <Main>
        <ToastContainer
          position="top-right" // 알람 위치 지정
          autoClose={3000} // 자동 off 시간
          hideProgressBar={true} // 진행시간바 숨김
          closeOnClick={true} // 클릭으로 알람 닫기
          rtl={false} // 알림 좌우 반전
          pauseOnFocusLoss // 화면을 벗어나면 알람 정지
          draggable // 드래그 가능
          pauseOnHover // 마우스를 올리면 알람 정지
          theme="dark"
          // limit={1} // 알람 개수 제한
        />
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default HomeView
