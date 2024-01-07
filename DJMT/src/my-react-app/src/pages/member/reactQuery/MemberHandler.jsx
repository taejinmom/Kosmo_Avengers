import request from '../../../api/core'

// 로그인
export const login = async (loginData, setCookie, navigator, isLoginCheck) => {
  try {
    const res = await request.post('login', loginData)
    setCookie('jwtToken', res.tokenData.accessToken)
    setCookie('refreshToken', res.tokenData.refreshToken)
    setCookie('memberData', res.memberData)
    isLoginCheck(true)
    console.log('login >> ', res.memberData)
    navigator('/', {
      state: { value: 1234 },
    })
  } catch (error) {
    if (error.response.data === 'fail') {
      alert('ID 또는 Password가 틀렸습니다.')
      isLoginCheck(false)
    }
  }

  return '/'
}
// 토큰 체크
export const validateToken = async (
  cookie,
  setCookie,
  removeCookie,
  isLoginCheck
) => {
  if (cookie.jwtToken === undefined) {
    isLoginCheck(false)
    return false
  }
  try {
    const res_1 = await request.get('validateToken')
    return cookie.memberData.mem_name
  } catch {
    try {
      const res_2 = await request.post('refresh', {
        refreshToken: cookie.refreshToken,
      })
      setCookie('jwtToken', res_2)
      isLoginCheck(true)
      return cookie.memberData.mem_name
    } catch (error) {
      console.log('validate .> ', error)
      removeCookie('jwtToken')
      removeCookie('refreshToken')
      removeCookie('memberData')
      isLoginCheck(false)
    }
  }
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
