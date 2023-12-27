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
import axios from 'axios'
import { useCookies } from 'react-cookie'

const HomeView = props => {
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [tokenDataCheck, setTokenDataCheck] = useState(false)

  useEffect(() => {
    if (cookies.bodyJson === undefined) return
    axios
      .get('api/validateToken')
      .then(res => {
        console.log('validateToken -> ', res)
        if (res.status === 200) {
          setTokenDataCheck(true)
          console.log(' Token Validate Success!')
        }
      })
      .catch(error => {
        console.log(error)
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
              removeCookie('bodyJson')
            }
            // setTokenDataCheck(false)
          })
      })
  }, [])
  return (
    <>
      <Skip />
      <Header
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
        tokenDataCheck={tokenDataCheck}
        setTokenDataCheck={setTokenDataCheck}
      />
      <Main>
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
