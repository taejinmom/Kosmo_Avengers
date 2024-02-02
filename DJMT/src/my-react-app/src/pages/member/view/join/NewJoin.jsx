import React, { Children, useEffect, useRef, useState } from 'react'
import { isLogin } from '../../atom/LoginAtom'

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
  Radio,
  FormLabel,
  RadioGroup,
} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { inputHandler, joinSubmitHandler } from '../../handler/MemberHandler'
import { memberData } from '../../memberData'
import JoinRadioArea from '../inputForm/JoinRadio'
import JoinAddrInput from '../inputForm/JoinAddrInput'
import { Copyright } from '@mui/icons-material'

const NewJoin = props => {
  const theme = createTheme()
  const address = useRef() // 주소 input 값
  const [popup, setPopup] = useState(false) // 주소 api 팝업 state
  const [joinData, setJoinData] = useState({}) // 회원가입 객체
  const navigate = useNavigate()
  // 주소 버튼찾기 클릭
  const handleComplete = e => {
    e.preventDefault()
    setPopup(!popup)
  }

  // form 전송
  const handleSubmit = e => {
    joinSubmitHandler(joinData, navigate)
    e.preventDefault()
  }
  // 홈으로
  const handleRedirect = e => {
    e.preventDefault()
    navigate('/')
  }

  const defaultTheme = createTheme()

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login_id"
                  label="ID"
                  name="login_id"
                  autoComplete="ID"
                  autoFocus
                  onChange={e => inputHandler(e, joinData, setJoinData)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="login_pw"
                  label="Password"
                  type="password"
                  id="login_pw"
                  autoComplete="current-password"
                  onChange={e => inputHandler(e, joinData, setJoinData)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="login_pw_repeat"
                  label="Password"
                  type="password"
                  id="login_pw_repeat"
                  autoComplete="current-password"
                  onChange={e => inputHandler(e, joinData, setJoinData)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="mem_name"
                  label="Name"
                  type="text"
                  id="mem_name"
                  onChange={e => inputHandler(e, joinData, setJoinData)}
                />
              </Grid>
              <JoinAddrInput
                label={'Address'}
                xs={9}
                type={'text'}
                id={'mem_addr1'}
                name={'mem_addr1'}
                autoComplete={'current-password'}
                popup={popup}
                address={address}
                inputHandler={inputHandler}
                data={joinData}
                setData={setJoinData}
                handleComplete={handleComplete}
              />
              {/* 나머지주소 */}
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="mem_addr2"
                  label="Remaining"
                  type="text"
                  id="mem_addr2"
                  onChange={e => inputHandler(e, joinData, setJoinData)}
                />
              </Grid>
              <JoinRadioArea
                inputHandler={inputHandler}
                data={joinData}
                setData={setJoinData}
              />
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
                    회원가입
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    size="large"
                    onClick={e => handleRedirect(e)}
                  >
                    홈으로
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default NewJoin
