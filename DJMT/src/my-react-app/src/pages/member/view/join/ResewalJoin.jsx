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

  const schema = yup.object().shape({
    login_id: yup.string().required("ID is required"),
    login_pw: yup
      .string()
      .required("Password is required"),
});
 
return (
    <div>
        <Form className="login_form" schema={schema} onSubmit={joinSubmitHandler}>
            <Form.input  name="login_id" label="ID" type="text"/>
            <Form.input  name="login_pw" label="password" type="password"/>
            <Form.input  name="login_pw_repeat" label="password" type="password"/>
            <Form.input  name="mem_name" label="Name" type="text"/>
            <Form.input  className="addressInput" name="mem_addr1" label="Address" type="text" value='ss'/>
            <Form.button className="addressAPI__btn" name="주소 찾기" type="button" onClick={handleComplete}/>
            {popup && <Post data={addressValue} setData={setAddressValue}></Post>}
            <Form.input  name="mem_addr2" label="Remaining" type="text"/>
            <Form.button className="jogin__btn" name="Join in" type="submit"/>
        </Form>
    </div>
);
 
}

export default RenewalJoin
