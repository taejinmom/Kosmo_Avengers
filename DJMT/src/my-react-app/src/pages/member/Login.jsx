import { useMutation, useQuery } from 'react-query'
import './Member.css'
import { login } from './reactQuery/MemberHandler'
import { inputHandler } from './MemberFunction'
import { LoginDataAtom, isLogin } from './atom/LoginAtom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = props => {
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [loginData, setLoginData] = useRecoilState(LoginDataAtom)
  const [isLoginCheck, setIsLogincheck] = useRecoilState(isLogin)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoginCheck) {
      navigate('/')
    }
  })

  return (
    <>
      <div className="login">
        <div className="inner">
          <h2 className="title">로그인</h2>
          <div>
            <form
              onSubmit={e => {
                e.preventDefault()
                login(loginData, setCookie, navigate, setIsLogincheck)
              }}
              method="POST"
            >
              <span>ID</span>
              <br />
              <input
                type="text"
                name="login_id"
                id="login_id"
                onChange={event => {
                  inputHandler(event, loginData, setLoginData)
                }}
              />
              <br />
              <span>Password</span>
              <br />
              <input
                type="password"
                name="login_pw"
                id="login_pw"
                onChange={event => {
                  inputHandler(event, loginData, setLoginData)
                }}
              />
              <br />
              <button>입력</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
