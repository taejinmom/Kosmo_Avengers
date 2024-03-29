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
// 토큰 체크 핸들러
export const validateToken = async (
  cookie,
  setCookie,
  removeCookie,
  isLoginCheck,
  memberKey
) => {
  // 로그인을 안했을 때, 토큰은 없기때문에 한번 체크
  if (cookie.jwtToken === undefined) {
    console.log('validate 실행')
    isLoginCheck(false)
    return
  }
  // accessToken 토큰 권한 체크_1
  await request
    .get('validateToken', {
      headers: {
        Authorization: cookie.accessToken,
      },
    })
    .then(res => console.log('1 validateToken >> ', res))
    .catch(error => {
      console.log('1 error - > refreshToken 검증')
      request
        .post(
          'refresh',
          {
            refreshToken: cookie.refreshToken,
            mem_no: memberKey,
          },
          {
            headers: {
              Authorization: cookie.refreshToken,
            },
          }
        )
        .then(res => {
          setCookie('jwtToken', res)
          console.log('jwtToken 재발급!')
          isLoginCheck(true)
        })
        .catch(error => {
          console.log('refreshToken 만료.. 토큰 삭제!')
          request
            .post('logout', { mem_no: memberKey })
            .then(e => {
              removeCookie('jwtToken')
              removeCookie('refreshToken')
              isLoginCheck(false)
            })
            .catch(error => {
              console.log(error)
            })

          window.location.reload()
        })
    })
}

// input 공통
export const inputHandler = (e, dataGroup, setData) => {
  setData({ ...dataGroup, [e.target.name]: e.target.value })
}
// 회원가입 핸들러
export const joinSubmitHandler = (joinData, navigate, confirm) => {
  if (joinData.login_pw !== joinData.login_pw_repeat) {
    confirm('패스워드가 일치하지 않습니다.', emptyFunc, 'warning')
    return
  }
  request.post('join', joinData).then(res => {
    if (res === 'DuplicateKeyException') {
      // alert('ID가 중복되었습니다.')
      confirm('ID가 중복되었습니다.', emptyFunc, 'warning')
      return
    }
    navigate('/')
  })
}

// 로그아웃 handler
export const logoutHandler = async (
  removeCookie,
  isLoginCheck,
  memberKey,
  setMemberKey
) => {
  console.log('logout!')
  // memberAxiosApi('logout','post' ,{mem_no : memberKey})
  await request
    .post('logout', { mem_no: memberKey })
    .then(res => {
      removeCookie('jwtToken')
      removeCookie('refreshToken')
      setMemberKey('')
      isLoginCheck(false)
      window.location.href = '/'
    })
    .catch(error => {
      console.log('logout error -> ', error)
    })
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
  // return memberAxiosApi("/myPage", "post", {
  //   mem_no: memberKey,
  // });
  const res = await request.post('/myPage', {
    mem_no: memberKey,
  })
  if (res) {
    console.log('res >> ', res)
  }
  return res
}

// 수정하기
export const editMyPageHandler = async data => {
  return request
    .post('/editMemberInfo', data)
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
}

// 프로필 사진 image size 체크
export const checkImage = file => {
  let err = ''
  if (!file) return (err = 'File does not exist.')
  if (file.size > 1024 * 1024) {
    err = 'The largest image size is 1mb.'
  }
  if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
    err = 'Image format is incorrect.'
  }
  return err
}
// empty function
export const emptyFunc = () => {}
// promise 값 뽑기
export const getData = (res, setData, param) => {
  res.then(data => {
    if (param) {
      setData(data[param])
    } else {
      setData(data)
    }
  })
}
