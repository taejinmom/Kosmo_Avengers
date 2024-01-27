import React, { Children, useEffect, useRef, useState } from 'react'

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
} from '../../handler/MemberHandler'
import JoinAddrInput from '../inputForm/JoinAddrInput'
import JoinRadioArea from '../inputForm/JoinRadio'
import IdInput from '../inputForm/IdInput'
import PwInput from '../inputForm/PwInput'
import NameInput from '../inputForm/NameInput'
import RemainingInput from '../inputForm/RemainingInput'
import { adminEdit } from '../../atom/AdminAtom'

const MyPage = props => {
  const { memberKey, isLoginCheck } = props
  const theme = createTheme()
  const navigate = useNavigate()
  const [myPageData, setMyPageData] = useState({})
  const address = useRef() // 주소 input 값
  const location = useLocation()
  const [pwChangeChk, setPwChangeChk] = useState(false)
  useEffect(() => {
    if (!isLoginCheck) {
      navigate('/')
    }
    if (location.state.adminEdit) {
      myPageHandler(location.state.mem_no, isLoginCheck).then(res => {
        setMyPageData({
          ...res,
          chg_id: memberKey,
          etc_param1: pwChangeChk,
        })
      })
    } else {
      myPageHandler(memberKey, isLoginCheck).then(res =>
        setMyPageData({
          ...res,
          chg_id: memberKey,
          etc_param1: pwChangeChk,
        })
      )
    }
  }, [])

  const [popup, setPopup] = useState(false)
  // 주소 버튼찾기 클릭
  const handleComplete = e => {
    e.preventDefault()
    setPopup(!popup)
  }

  // form 전송 - 수정
  const handleSubmit = e => {
    e.preventDefault()
    editMyPageHandler(myPageData)
    if (adminEdit) {
      navigate('/member', {
        state: {
          title: 'AdminPage',
        },
      })
    } else {
      navigate('/')
    }
    // window.location.reload()
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
                  setPwChangeChk={setPwChangeChk}
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
    </>
  )
}

export default MyPage
