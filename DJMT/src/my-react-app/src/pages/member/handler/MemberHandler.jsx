import { useCookies } from 'react-cookie'
import request from '../../../api/core'
import { memberAxiosApi } from '../function/MemberFunction'

// // 로그인 reactquery로 대체함 -> login.jsx
// export const login = async (loginData, setCookie, navigator, isLoginCheck) => {
//   try {
//     const res = await request.post("login", loginData);
//     setCookie("jwtToken", res.tokenData.accessToken);
//     setCookie("refreshToken", res.tokenData.refreshToken);
//     setCookie("memberData", res.memberData);
//     isLoginCheck(true);
//     console.log("login >> ", res.memberData);
//     navigator("/");
//     window.location.reload();
//   } catch (error) {
//     if (error.response.data === "fail") {
//       alert("ID 또는 Password가 틀렸습니다.");
//       isLoginCheck(false);
//     }
//   }

//   return "/";
// };

// 토큰 체크
export const validateToken = async (
  cookie,
  setCookie,
  removeCookie,
  isLoginCheck
) => {
  if (cookie.jwtToken === undefined) {
    isLoginCheck(false)
    return
  }
  try {
    const res_1 = await request.get('validateToken')
    return
  } catch {
    try {
      const res_2 = await request.post('refresh', {
        refreshToken: cookie.refreshToken,
      })
      setCookie('jwtToken', res_2)
      isLoginCheck(true)
    } catch (error) {
      console.log('validate .> ', error)
      removeCookie('jwtToken')
      removeCookie('refreshToken')
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
export const inputHandler = (e, dataGroup, setData) => {
  setData({ ...dataGroup, [e.target.name]: e.target.value })
}
// export const handleRadioChange = (e, setRadioValue) => {
//   console.log('radioButton value =>> ', e.target.value)
//   setRadioValue(e.target.value)
// }
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

export const logoutHandler = (removeCookie, isLoginCheck) => {
  console.log('logout!')
  removeCookie('jwtToken')
  removeCookie('refreshToken')
  isLoginCheck(false)
}
