// import React, { useEffect, useState } from 'react'
// import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { isLogin, memberDataAtom } from './atom/LoginAtom'

// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   Checkbox,
//   FormHelperText,
//   Grid,
//   Box,
//   Typography,
//   Container,
//   Radio,
//   FormLabel,
//   RadioGroup,
// } from '@mui/material/'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
// import { useNavigate } from 'react-router-dom'
// import Post from './function/Post'
// import './function/post.css'
// import { inputHandler } from './handler/MemberHandler'

// const MyPage = props => {
//   const { isLoginCheck } = props
//   const theme = createTheme()
//   const [checked, setChecked] = useState(false)
//   const [memberData, setMemberData] = useRecoilState(memberDataAtom)
//   const navigate = useNavigate()
//   const [enroll_company, setEnroll_company] = useState({
//     address: '',
//   })

//   const [popup, setPopup] = useState(false)

//   const handleInput = e => {
//     setEnroll_company({
//       ...enroll_company,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleComplete = data => {
//     setPopup(!popup)
//   }
//   // radio handler
//   const [radioValue, setRadioValue] = useState('')
//   useEffect(() => {
//     setRadioValue(memberData.mem_gen)
//     if (!isLoginCheck) {
//       // navigate('/')
//       console.log('myPage > 토큰만료됨!! ')
//     }
//   }, [])
//   // 동의 체크
//   const handleAgree = e => {
//     setChecked(e.target.checked)
//   }

//   // form 전송
//   const handleSubmit = e => {
//     e.preventDefault()
//   }

//   const handleRadioChange = e => {
//     console.log('radioButton value =>> ', e.target.value)
//     setRadioValue(e.target.value)
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="sm">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
//           <Typography component="h1" variant="h5">
//             마이페이지
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <FormControl component="fieldset" variant="standard">
//               <Grid container>
//                 <Grid item xs={6}>
//                   <FormLabel>ID</FormLabel>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <FormLabel>Password</FormLabel>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <TextField
//                     type="text"
//                     id="login_id"
//                     name="login_id"
//                     defaultValue={memberData.login_id}
//                     onChange={e => {
//                       inputHandler(e, memberData, setMemberData)
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <TextField
//                     type="password"
//                     id="login_pw"
//                     name="login_pw"
//                     defaultValue={memberData.login_pw}
//                     onChange={e => {
//                       inputHandler(e, memberData, setMemberData)
//                     }}
//                   />
//                 </Grid>
//                 <FormLabel>Name</FormLabel>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="mem_name"
//                     name="mem_name"
//                     defaultValue={memberData.mem_name}
//                     onChange={e => {
//                       inputHandler(e, memberData, setMemberData)
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={9}>
//                   <FormLabel>Address</FormLabel>
//                   <TextField
//                     required
//                     fullWidth
//                     id="mem_addr1"
//                     name="mem_addr1"
//                     defaultValue={memberData.mem_addr1}
//                   />
//                 </Grid>

//                 <Grid item xs={3}>
//                   <Button
//                     type="submit"
//                     fullWidth
//                     color="inherit"
//                     variant="outlined"
//                     sx={{ mt: 3, ml: 2, mr: 2, height: 56, width: '90%' }}
//                     size="medium"
//                     onClick={handleComplete}
//                   >
//                     주소찾기
//                   </Button>

//                   {popup && (
//                     <Post
//                       company={enroll_company}
//                       setcompany={setEnroll_company}
//                       memberData={memberData}
//                       setMemberData={setMemberData}
//                     ></Post>
//                   )}
//                 </Grid>

//                 <FormLabel>remaining</FormLabel>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="mem_addr2"
//                     name="mem_addr2"
//                     defaultValue={memberData.mem_addr2}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <FormControl>
//                     <FormLabel>Gender</FormLabel>
//                     <RadioGroup
//                       aria-labelledby="demo-controlled-radio-buttons-group"
//                       name="controlled-radio-buttons-group"
//                       value={radioValue}
//                       onChange={handleRadioChange}
//                     >
//                       <FormControlLabel
//                         value="M"
//                         control={<Radio />}
//                         label="Male"
//                       />
//                       <FormControlLabel
//                         value="F"
//                         control={<Radio />}
//                         label="Female"
//                       />
//                     </RadioGroup>
//                   </FormControl>
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 size="large"
//               >
//                 회원가입
//               </Button>
//             </FormControl>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   )
// }

// export default MyPage
