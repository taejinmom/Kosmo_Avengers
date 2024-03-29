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
import * as yup from 'yup'
import Form from '../../common/Form'
import Post from './addressApi/Post'

const RenewalJoin = props => {
  const address = useRef() // 주소 input 값
  const [addressValue, setAddressValue] = useState()
  const [popup, setPopup] = useState(false) // 주소 api 팝업 state
  const [joinData, setJoinData] = useState({}) // 회원가입 객체
  const navigate = useNavigate()
  // 주소 버튼찾기 클릭
  const handleComplete = e => {
    e.preventDefault()
    console.log('data' , addressValue)
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
    <div style={{marginTop: '100px'}}>
        <form className="login_form" onSubmit={handleSubmit}>
            <input  name="login_id" label="ID" type="text"/>
            <br/>
            <input  name="login_pw" label="password" type="password"/>
            <br/>
            <input  name="login_pw_repeat" label="password" type="password"/>
            <br/>
            <input  name="mem_name" label="Name" type="text"/>
            <br/>
            <input  className="addressInput" name="mem_addr1" label="Address" type="text" onChange={ (e) => inputHandler(e, joinData,setJoinData)} value={joinData.mem_addr1 || ''}/>
            
            <button className="addressAPI__btn" name="주소 찾기" type="button" onClick={handleComplete}>주소 찾기</button>
            {popup && <Post data={joinData} setData={setJoinData}></Post>}
            <br/>
            <input  name="mem_addr2" label="Remaining" type="text"/>
            <br/>
            <button className="jogin__btn" name="Join in" type="submit"/>
        </form>
    </div>
);
 
}

export default RenewalJoin
