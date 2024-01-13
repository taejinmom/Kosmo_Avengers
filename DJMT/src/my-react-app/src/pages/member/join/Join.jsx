import React, { Children, useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { isLogin } from '../atom/LoginAtom'

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
import { useNavigate } from 'react-router-dom'
import { inputHandler, joinSubmitHandler } from '../handler/MemberHandler'
import { JoinDataAtom } from '../atom/JoinAtom'
import { memberData } from '../memberData'
import { memberAxiosApi } from '../function/MemberFunction'
import Post from '../function/Post'
import JoinRadioArea from './shared/JoinRadio'
import JoinAddrInput from './shared/JoinAddrInput'

const Join = props => {
  const theme = createTheme()
  // radio button
  const address = useRef()
  // 회원가입 객체
  const [joinData, setJoinData] = useState({})
  // validation
  const [popup, setPopup] = useState(false)
  // 주소 버튼찾기 클릭
  const handleComplete = e => {
    e.preventDefault()

    setPopup(!popup)
  }
  const navigate = useNavigate()
  // form 전송
  const handleSubmit = e => {
    //joinSubmitHandler(joinData, navigate)
    console.log('joinData', joinData)
    e.preventDefault()
  }

  const handleRedirect = e => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container item xs={12}>
                {Children.toArray(
                  memberData.map(e => {
                    if (e.name === 'mem_addr1') {
                      return (
                        <>
                          {/* 주소 Input */}
                          <JoinAddrInput
                            label={e.label}
                            xs={e.xs}
                            type={e.type}
                            id={e.id}
                            name={e.name}
                            popup={popup}
                            address={address}
                            inputHandler={inputHandler}
                            joinData={joinData}
                            setJoinData={setJoinData}
                            handleComplete={handleComplete}
                          />
                        </>
                      )
                    } else if (e.name === 'mem_gen') {
                      return (
                        <>
                          {/* 성별 */}
                          <JoinRadioArea
                            inputHandler={inputHandler}
                            joinData={joinData}
                            setJoinData={setJoinData}
                          />
                        </>
                      )
                    }
                    return (
                      <>
                        {/* 나머지 Input */}
                        <Grid item xs={12}>
                          <FormLabel>{e.label}</FormLabel>
                        </Grid>
                        <Grid item xs={e.xs}>
                          <TextField
                            fullWidth
                            type={e.type}
                            id={e.id}
                            name={e.name}
                            onChange={event => {
                              inputHandler(event, joinData, setJoinData)
                            }}
                          />
                        </Grid>
                      </>
                    )
                  })
                )}
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
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Join
