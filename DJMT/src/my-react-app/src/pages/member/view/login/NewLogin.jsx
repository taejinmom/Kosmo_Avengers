import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLogin, memberKeyAtom, memberRoleAtom } from '../../atom/LoginAtom';
import { inputHandler, loginHandler } from '../../handler/MemberHandler';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Copyright = props => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="#">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function NewLogin() {
    const theme = createTheme()
    const [cookies, setCookie, removeCookie] = useCookies([])
    const navigate = useNavigate()
    const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin) // 로그인 햇는지 체크
    const setMemberRole = useSetRecoilState(memberRoleAtom) // 로그인 유저 Role 값
    const [loginData, setLoginData] = React.useState({ login_id: '', login_pw: '' }) // 로그인 객체
    const setMemberKey = useSetRecoilState(memberKeyAtom) // MEM_NO 전역변수로 저장

    // 로그인
    const handleSubmit = e => {
        e.preventDefault()
        // 로그인 핸들러 실행
        loginHandler(
          loginData,
          setIsLoginCheck,
          setMemberRole,
          setMemberKey,
          setCookie,
          navigate
        )
      }
    
      // 홈으로
      const handleRedirect = e => {
        e.preventDefault()
        navigate('/')
      }
    
      // 홈으로
      const handleJoin = e => {
        e.preventDefault()
        navigate('/member', {
          state: {
            title: 'Join',
          },
        })
      }
      React.useEffect(() => {
        // 로그인 -> home 상태에서 뒤로가기 시 home으로 강제 리턴
        if (isLoginCheck) {
          navigate('/')
        }
      })
    
       
      
      // TODO remove, this demo shouldn't need to reset the theme.
      const defaultTheme = createTheme();
      
        return (
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="login_id"
                    label="ID"
                    name="login_id"
                    autoComplete="ID"
                    autoFocus
                    onChange={(e)=> inputHandler(e,loginData,setLoginData)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="login_pw"
                    label="Password"
                    type="password"
                    id="login_pw"
                    autoComplete="current-password"
                    onChange={(e)=> inputHandler(e,loginData,setLoginData)}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link to={'/'}>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                        <Link to={'/member'} state={{title: 'Join',}}>
                            Don't have an account? Sign Up
                        </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          </ThemeProvider>
        );
      }
  


