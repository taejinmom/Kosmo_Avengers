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
import { useLocation, useNavigate } from 'react-router-dom'
import {
  editMyPageHandler,
  inputHandler,
  myPageHandler,
} from '../handler/MemberHandler'
import { memberData } from '../memberData'
import JoinAddrInput from '../inputForm/JoinAddrInput'
import JoinRadioArea from '../inputForm/JoinRadio'
import IdInput from '../inputForm/IdInput'
import PwInput from '../inputForm/PwInput'
import RePwInput from '../inputForm/RePwInput'
import NameInput from '../inputForm/NameInput'
import RemainingInput from '../inputForm/RemainingInput'

const MyPage = props => {
  const { memberKey, isLoginCheck } = props
  const theme = createTheme()
  const navigate = useNavigate()
  const [myPageData, setMyPageData] = useState({})
  const address = useRef() // 주소 input 값

  useEffect(() => {
    if (!isLoginCheck) {
      navigate('/')
    }
    myPageHandler(memberKey, isLoginCheck).then(res =>
      setMyPageData({ ...myPageData, ...res })
    )
  }, [])

  const [popup, setPopup] = useState(false)
  // 주소 버튼찾기 클릭
  const handleComplete = e => {
    e.preventDefault()
    setPopup(!popup)
  }

  // form 전송 - 수정
  const handleSubmit = e => {
    setMyPageData({
      ...myPageData,
      mem_no: memberKey,
    })
    editMyPageHandler(myPageData)
    e.preventDefault()
  }
  // 홈으로
  const handleRedirect = e => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div>
      <div className="inner">
        <h2 className="title">My Page</h2>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            <Box
              maxWidth="sm"
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ mt: 2, bgcolor: 'secondary.main' }} />
              <Typography component="h1" variant="h5"></Typography>
            </Box>
          </Container>
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
                  <IdInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                  />
                  <PwInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                  />
                  <NameInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                  />

                  <JoinAddrInput
                    popup={popup}
                    address={address}
                    inputHandler={inputHandler}
                    data={myPageData}
                    setData={setMyPageData}
                    handleComplete={handleComplete}
                  />
                  <RemainingInput data={myPageData} setData={setMyPageData} />
                  <JoinRadioArea
                    inputHandler={inputHandler}
                    data={myPageData}
                    setData={setMyPageData}
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
                        수정
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
        </ThemeProvider>
      </div>
    </div>
  )
}

export default MyPage
