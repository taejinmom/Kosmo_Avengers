import { inputHandler, loginHandler } from '../handler/MemberHandler'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { isLogin, memberKeyAtom } from '../atom/LoginAtom'
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import InitDiv from '../shared/InitDiv'

const Login = props => {
  const theme = createTheme()
  const [cookies, setCookie, removeCookie] = useCookies([])
  const navigate = useNavigate()
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin) // 로그인 햇는지 체크
  const [loginData, setLoginData] = useState({ login_id: '', login_pw: '' }) // 로그인 객체
  const setMemberKey = useSetRecoilState(memberKeyAtom) // MEM_NO 전역변수로 저장

  // 로그인
  const handleSubmit = e => {
    e.preventDefault()
    loginHandler(loginData, setIsLoginCheck, setMemberKey, setCookie, navigate)
  }

  // 홈으로
  const handleRedirect = e => {
    e.preventDefault()
    navigate('/')
  }

  // 홈으로
  const handleJoin = e => {
    e.preventDefault()
    navigate('/join')
  }

  //   const onError = error => {
  //     console.log('onError!! >> ', error)
  //   }
  //   const onSuccess = data => {
  //     setCookie('jwtToken', data.tokenData.accessToken)
  //     setCookie('refreshToken', data.tokenData.refreshToken)
  //     setIsLogincheck(true)
  //     setMemberKey(data.mem_no)
  //   }

  //   const { data, isError, error, refetch } = useQuery('login', loginHandler, {
  //     cacheTime: 3000,
  //     enabled: false,
  //     staleTime: 3000,
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //     onSuccess,
  //     onError,
  //   })

  useEffect(() => {
    // 로그인 -> home 상태에서 뒤로가기 시 home으로 강제 리턴
    if (isLoginCheck) {
      navigate('/')
    }
  })

  return (
    <>
      <div className="inner">
        <h2 className="title">Login</h2>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            maxWidth="sm"
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'wrap',
              alignItems: 'center',
            }}
          >
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <FormControl component="fieldset" variant="standard">
                <Grid container item xs={12}>
                  <Grid item xs={12}>
                    <FormLabel>Id</FormLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="text"
                      id="login_id"
                      name="login_id"
                      onChange={event => {
                        inputHandler(event, loginData, setLoginData)
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel>Password</FormLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="password"
                      id="login_pw"
                      name="login_pw"
                      onChange={event => {
                        inputHandler(event, loginData, setLoginData)
                      }}
                    />
                  </Grid>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      bgcolor: 'background.paper',
                    }}
                  >
                    {/* 버튼 */}
                    <Grid item xs={12}>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ mt: 2, mb: 2, mr: 3 }}
                          size="large"
                          onClick={e => {
                            handleSubmit(e)
                          }}
                        >
                          로그인
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ mt: 2, mb: 2, mr: 3 }}
                          size="large"
                          onClick={e => {
                            handleJoin(e)
                          }}
                        >
                          회원가입
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ mt: 2, mb: 2, mr: 3 }}
                          size="large"
                          onClick={e => {
                            handleRedirect(e)
                          }}
                        >
                          홈으로
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </FormControl>
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Login
