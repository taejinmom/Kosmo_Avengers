import React, { useEffect, useRef, useState } from 'react'

import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  Box,
  Typography,
  Container,
  Grid,
} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  editMyPageHandler,
  inputHandler,
  myPageHandler,
} from '../../handler/MemberHandler'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import JoinAddrInput from '../inputForm/JoinAddrInput'
import JoinRadioArea from '../inputForm/JoinRadio'
import IdInput from '../inputForm/IdInput'
import PwInput from '../inputForm/PwInput'
import NameInput from '../inputForm/NameInput'
import RemainingInput from '../inputForm/RemainingInput'
import { useRecoilValue } from 'recoil'
import { isLogin, memberKeyAtom } from '../../atom/LoginAtom'
import { adminEdit } from '../../atom/AdminAtom'

const MyPage = props => {
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  )
  const fileInput = useRef(null)

  const { confirm } = props
  const location = useLocation()
  const memberKey = useRecoilValue(memberKeyAtom)
  const isLoginCheck = useRecoilValue(isLogin)
  const theme = createTheme()
  const navigate = useNavigate()
  const [myPageData, setMyPageData] = useState({})
  const address = useRef() // 주소 input 값
  const [change, setChange] = useState(true)

  useEffect(() => {
    if (!isLoginCheck) {
      navigate('/')
    }
    if (location.state.adminEdit) {
      myPageHandler(location.state.mem_no, isLoginCheck).then(res => {
        setMyPageData({
          ...res,
          chg_id: memberKey,
        })
      })
    } else {
      myPageHandler(memberKey, isLoginCheck).then(res =>
        setMyPageData({
          ...res,
          chg_id: memberKey,
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
  }
  // 홈으로
  const handleRedirect = e => {
    e.preventDefault()
    navigate('/')
  }
  const onChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    } else {
      //업로드 취소할 시
      setImage(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      )
      return
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  const defaultTheme = createTheme()
  return (
    <>
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
            <Avatar
              src={Image}
              style={{ margin: '20px', cursor: 'pointer' }}
              sx={{ width: 100, height: 120 }}
              onClick={() => {
                fileInput.current.click()
              }}
            />
            <input
              type="file"
              style={{ display: 'none' }}
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
              ref={fileInput}
            />
            <Typography component="h1" variant="h5"></Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <FormControl component="fieldset" variant="standard">
                <Grid container item xs={12}>
                  <IdInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                    label={'ID'}
                  />
                  <PwInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                    change={change}
                    setChange={setChange}
                    confirm={confirm}
                    label={'Password'}
                  />
                  <NameInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                    label={'Name'}
                  />
                  <JoinAddrInput
                    popup={popup}
                    address={address}
                    inputHandler={inputHandler}
                    data={myPageData}
                    setData={setMyPageData}
                    handleComplete={handleComplete}
                    label={'Address'}
                  />
                  <RemainingInput
                    data={myPageData}
                    setData={setMyPageData}
                    label={'Remaining'}
                  />
                  <JoinRadioArea
                    inputHandler={inputHandler}
                    data={myPageData}
                    setData={setMyPageData}
                    label={'Gender'}
                  />

                  {/* 버튼 */}
                  <Grid container textAlign={'right'}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 2, mb: 2, mr: 3 }}
                      size="large"
                      onClick={e => handleSubmit(e)}
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
              </FormControl>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MyPage
