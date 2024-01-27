import { useCookies } from 'react-cookie'
import request from '../../../api/core'
import { useNavigate } from 'react-router-dom'
import { Confirm } from '../../../api/alert/Confirm'

export const memberAxiosApi = async (apiUrl, httpMethod, data, navigate) => {
  let res
  if (httpMethod === 'post') {
    res = await request.post(apiUrl, data)
  } else if (httpMethod === 'get') {
    res = await request.get(apiUrl)
  }
  return res
}
// 토큰 체크
export const validateToken = async (
  cookie,
  setCookie,
  removeCookie,
  isLoginCheck,
  memberKey,
  navigate
) => {
  
  // 로그인을 안했을 때, 토큰은 없기때문에 한번 체크
  if (cookie.jwtToken === undefined) {
    isLoginCheck(false)
    return
  }
  // accessToken 토큰 권한 체크_1
  await memberAxiosApi('validateToken', 'get')
    .then(res => console.log('1 validateToken >> ', res))
    .catch(error => {
      console.log('1 error - > refreshToken 검증')
      request
        .post('refresh', {
          refreshToken: cookie.refreshToken,
          mem_no: memberKey,
        })
        .then(res => {
          setCookie('jwtToken', res)
          console.log('jwtToken 재발급!')
          isLoginCheck(true)
        })
        .catch(error => {
          console.log('refreshToken 만료.. 토큰 삭제!')
          removeCookie('jwtToken')
          removeCookie('refreshToken')
          isLoginCheck(false)

          window.location.reload()
        })
    })
}
// 회원가입
export const join = async (
  joinData,
  navigator,
  idValidation,
  passwordValidation
) => {
  if (joinData.login_pw !== joinData.login_pw_repeat) {
    alert('패스워드가 일치하지 않습니다.')
    passwordValidation.current.focus()
    return
  }
  const res = await request.post('join', joinData)

  if (res === 'DuplicateKeyException') {
    alert('ID가 중복되었습니다.')
    idValidation.current.focus()
    return
  }
  navigator('/')
}

export const inputHandler = (e, dataGroup, setData) => {
  setData({ ...dataGroup, [e.target.name]: e.target.value })
}
// export const handleRadioChange = (e, setRadioValue) => {
//   console.log('radioButton value =>> ', e.target.value)
//   setRadioValue(e.target.value)
// }
// 회원가입 handler
export const joinSubmitHandler = (joinData, navigate) => {
  if (joinData.login_pw !== joinData.login_pw_repeat) {
    alert('패스워드가 일치하지 않습니다.')
    return
  }
  memberAxiosApi('join', 'post', joinData).then(res => {
    if (res === 'DuplicateKeyException') {
      alert('ID가 중복되었습니다.')
      return
    }
    navigate('/')
  })
}
// 로그아웃 handler
export const logoutHandler = (removeCookie, isLoginCheck) => {
  console.log('logout!')
  removeCookie('jwtToken')
  removeCookie('refreshToken')
  isLoginCheck(false)
  window.location.reload()
}
// 로그인 handler
export const loginHandler = async (
  loginData,
  setIsLoginCheck,
  setMemberRole,
  setMemberKey,
  setCookie,
  navigate
) => {
  await memberAxiosApi('login', 'post', loginData)
    .then(res => {
      setIsLoginCheck(true)
      setCookie('jwtToken', res.tokenData.accessToken)
      setCookie('refreshToken', res.tokenData.refreshToken)
      setMemberKey(res.mem_no)
      setMemberRole(res.role === 'ADMIN' ? true : false)
      navigate('/')
    })
    .catch(error => {
      console.log(error)
      if (error.response.data === 'FAILURE') {
        setIsLoginCheck(false)
        alert('로그인 실패')
        return
      }
    })
}
// mypage 데이터 불러오기
export const myPageHandler = async memberKey => {
  return memberAxiosApi('member/myPage', 'post', {
    mem_no: memberKey,
  })
}
// 수정하기
export const editMyPageHandler = async data => {
  console.log('수정 mem_no 값!! > > ', data)
  return memberAxiosApi('member/editMemberInfo', 'post', data)
}
