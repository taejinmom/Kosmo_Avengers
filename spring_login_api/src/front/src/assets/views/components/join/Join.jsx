import React, { useCallback, useEffect, useRef, useState } from 'react'
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
import { flushSync } from 'react-dom'
import JoinData, { joinItem } from '../../../constants/join/JoinData'

const Join = () => {
  const theme = createTheme()
  const [checked, setChecked] = useState(false)
  const [passwordChecked, setPasswordChecked] = useState(false)
  const [repeatPassword, setRepeatPassword] = useState('')
  const [idChk, setIdChk] = useState(false)
  const [pwChk, setPwChk] = useState(false)
  const [EmailChk, setEmailChk] = useState(false)
  const [nameChk, setNameChk] = useState(false)
  const [joinData, setJoinData] = useState({
    login_id: '',
    login_pw: '',
    login_pw_chk: '',
    email: '',
    name: '',
  })
  console.log('check!!', pwChk)
  // 패스워드 재입력 체크
  const handlePassCheck = e => {
    setRepeatPassword(e.target.value)
    console.log(e.target.value)

    // if (repeatPassword === joinData.login_pw) {
    //   return true
    // } else {
    //   return false
    // }
  }

  // 입력 값 저장
  const handleChange = useCallback(e => {
    if (e.target.name === 'loginPwRepeat') {
      setRepeatPassword(e.target.value)
    } else {
      setJoinData({
        ...joinData,
        [e.target.name]: e.target.value,
      })
    }
    console.log(
      `password >> ${joinData.login_pw} // repeat >> ${repeatPassword}`
    )
    if (joinData.login_pw !== repeatPassword) {
      console.log('check!!')
      setPasswordChecked(true)
    } else {
      setPasswordChecked(false)
    }
  })

  useEffect(e => {
    axios.get('api/test').then(response => {
      console.log(response)
    })
  }, [])

  // 패스워드 재입력 테스트

  // 동의 체크
  const handleAgree = useCallback(
    e => {
      setChecked(checked, e.target.checked)
    },
    [checked]
  )

  // form 전송
  const handleSubmit = e => {
    e.preventDefault()
    if (joinData.login_pw !== joinData.login_pw_chk) {
      setPwChk(pwChk, true)
      return
    } else {
      setPwChk(pwChk, false)
    }
    if (joinData.login_id === '') {
      setIdChk(idChk, true)
      return
    } else {
      setIdChk(idChk, false)
    }
    if (joinData.name === '') {
      setNameChk(nameChk, true)
      return
    } else {
      setNameChk(nameChk, true)
    }
    axios
      .post('api/userInsert', joinData)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
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
            회원가입
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <JoinData />
                {joinItem.map((e, idx) => {
                  return (
                    <Grid item xs={12} key={idx}>
                      <TextField
                        required
                        fullWidth
                        id={e.id}
                        name={e.name}
                        label={e.label}
                        type={e.type}
                        helperText={e.helpeText}
                        ref={e.ref}
                        error={false}
                        onChange={e =>
                          setJoinData({
                            ...joinData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Grid>
                  )
                })}

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleAgree} color="primary" />
                    }
                    label="회원가입 약관에 동의합니다."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                회원가입
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                href="/login"
              >
                로그인
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default Join
