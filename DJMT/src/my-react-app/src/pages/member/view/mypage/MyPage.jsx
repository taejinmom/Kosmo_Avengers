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
  checkImage,
  editMyPageHandler,
  inputHandler,
  myPageHandler,
} from '../../handler/MemberHandler'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import JoinAddrInput from '../inputForm/JoinAddrInput'
import JoinRadioArea from '../inputForm/JoinRadio'
import IdInput from '../inputForm/IdInput'
import PwInput from '../inputForm/PwInput'
import { useRecoilValue } from 'recoil'
import { isLogin, memberKeyAtom } from '../../atom/LoginAtom'
import { adminEdit } from '../../atom/AdminAtom'
import BasicTextInput from '../inputForm/BasicTextInput'

const MyPage = props => {
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  )
  const fileInput = useRef(null)
  const { confirm } = props
  const location = useLocation()
  const memberKey = useRecoilValue(memberKeyAtom)
  const isLoginCheck = useRecoilValue(isLogin)
  const navigate = useNavigate()
  const [myPageData, setMyPageData] = useState({})
  const address = useRef() // 주소 input 값
  const [change, setChange] = useState(true)
  const [imageUrl, setImageUrl] = useState('')
  const imageRef = useRef()

  useEffect(() => {
    let res
    // 로그인 풀리면 홈으로
    if (!isLoginCheck) {
      navigate('/')
    }
    if (location.state.adminEdit) {
      //관리자 마이페이지
      res = myPageHandler(location.state.mem_no, isLoginCheck)
      setMyPageData({
        ...res,
        chg_id: memberKey,
      })
    } else {
      // 사용자 마이페이지
      res = myPageHandler(memberKey, isLoginCheck)

      console.log({ res })
      setMyPageData({
        ...res,
        chg_id: memberKey,
      })
    }
    // return -> promise여서 데이터 꺼내는 용도
    const getData = () => {
      res.then(data => {
        setMyPageData(data.memberDto)
        setImage('data:image/jpeg;base64,' + data.imageBytes)
      })
    }
    getData()
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
    const file = new FormData()
    file.append('file', imageUrl)
    file.append(
      'memberData',
      new Blob([JSON.stringify(myPageData)], { type: 'application/json' })
    )

    editMyPageHandler(file)
    if (adminEdit) {
      navigate('/member', {
        state: {
          title: 'AdminPage',
        },
      })
    } else {
      // navigate("/");
    }
  }
  // 홈으로
  const handleRedirect = e => {
    e.preventDefault()
    navigate('/')
  }
  const onChange = e => {
    if (e.target.files[0]) {
      setMyPageData({ ...myPageData, mem_profile: e.target.files[0] })
    } else {
      //업로드 취소할 시
      setImage(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      )
      return
    }
  }
  // 이미지 선택
  const handleImage = async e => {
    console.log(e.target.files[0])
    const file = e.target.files[0]
    const err = checkImage(file)

    if (err) return window.alert(err)
    if (file) {
      setImage(URL.createObjectURL(file))
    }
    setImageUrl(file)
  }

  const handleImageDelete = () => {
    setImageUrl('')
    var preview = document.getElementById('preview')
    preview.src = ''
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
            {/* <input
              type='image'
              // src={myPageData.mem_profile === null? Image :myPageData.mem_profile}
              src={''}
              style={{ margin: '20px', cursor: 'pointer', width: 100, height: 120 }}
              ref={imageRef}
              onClick={() => {
                
              }}
            /> */}
            <Avatar
              // src={myPageData.mem_profile === null? Image :myPageData.mem_profile}
              src={Image}
              style={{ margin: '20px', cursor: 'pointer' }}
              sx={{ width: 100, height: 120 }}
              ref={imageRef}
              onClick={() => {
                fileInput.current.click()
              }}
            />
            <input
              type="file"
              style={{ display: 'none' }}
              // accept="image/jpg,impge/png,image/jpeg"
              accept="image/*"
              name="file"
              onChange={handleImage}
              ref={fileInput}
            />
            <Typography component="h1" variant="h5"></Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <FormControl component="fieldset" variant="standard">
                <Grid container item xs={12}>
                  <BasicTextInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                    label={'ID'}
                    name="login_id"
                  />
                  {/* <IdInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                    label={'ID'}
                  /> */}
                  <PwInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                    change={change}
                    setChange={setChange}
                    confirm={confirm}
                    label={'Password'}
                  />
                  <BasicTextInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                    label="Name"
                    name="mem_name"
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
                  <BasicTextInput
                    data={myPageData}
                    setData={setMyPageData}
                    isLoginCheck={isLoginCheck}
                    label="Remaining"
                    name="mem_addr2"
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
