import React, { useCallback, useMemo, useState } from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const theme = createTheme()
  const [checked, setChecked] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [loginData, setLoginData] = useState({
    login_id: '',
    login_pw: '',
  })
  const loginItem = [
    {
      name: 'login_id',
      id: 'login_id',
      label: '아이디',
      onChange: '',
      type: 'text',
      key: 1,
    },
    {
      name: 'login_pw',
      id: 'login_pw',
      label: '비밀번호',
      onChange: '',
      type: 'password',
      key: 2,
    },
  ]
  const navigate = useNavigate()
  // 동의 체크
  const handleAgree = useCallback(
    e => {
      setChecked(checked, e.target.checked)
    },
    [checked]
  )
  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  // form 전송
  const handleSubmit = async e => {
    axios
      .post('api/login', loginData)
      .then(res => {
        console.log(res.data)
        setCookie('jwtToken', res.data.accessToken)
        setCookie('bodyJson', res.data)
        navigate('/')
      })
      .catch(error => console.log(error))
    e.preventDefault()
    //
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {/* 입력 Input */}
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                {loginItem.map(e => {
                  return (
                    <Grid item xs={12} key={e.key}>
                      <TextField
                        required
                        fullWidth
                        onChange={handleChange}
                        id={e.id}
                        name={e.name}
                        label={e.label}
                        type={e.type}
                      />
                    </Grid>
                  )
                })}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                로그인
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                href="/join"
              >
                회원가입
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default Login
