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
import { useNavigate } from 'react-router-dom'
import { inputHandler, joinSubmitHandler } from '../../handler/MemberHandler'
import { memberData } from '../../memberData'
import JoinRadioArea from '../inputForm/JoinRadio'
import JoinAddrInput from '../inputForm/JoinAddrInput'

const Join = props => {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          maxWidth="sm"
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container item xs={12}>
                {Children.toArray(
                  memberData.map(e => {
                    if (e.name === 'mem_addr1') {
                      /* 주소 Input */
                      return (
                        <JoinAddrInput
                          label={e.label}
                          xs={e.xs}
                          type={e.type}
                          id={e.id}
                          name={e.name}
                          popup={popup}
                          address={address}
                          inputHandler={inputHandler}
                          data={joinData}
                          setData={setJoinData}
                          handleComplete={handleComplete}
                        />
                      )
                    }

                    if (e.name === 'mem_gen') {
                      /* 성별 */
                      return (
                        <JoinRadioArea
                          inputHandler={inputHandler}
                          data={joinData}
                          setData={setJoinData}
                        />
                      )
                    }
                    return (
                      /* 나머지 Input */
                      <>
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
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}
                >
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
                </Box>
              </Grid>
            </FormControl>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Join
