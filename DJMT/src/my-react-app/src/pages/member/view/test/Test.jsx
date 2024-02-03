import React, { useRef } from 'react';
import Form from '../../common/Form';
import * as yup from 'yup';
import { loginHandler } from '../../handler/MemberHandler';
import { useCookies } from 'react-cookie'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { isLogin, memberKeyAtom, isAdmin } from '../../atom/LoginAtom'
import { Avatar, Box } from '@mui/material';

const Test = () => {
    const [Image, setImage] = useState(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      )
    const fileInput = useRef(null)
    const [myPageData, setMyPageData] = useState({})

    const onChange = e => {
    if (e.target.files[0]) {
        setImage(e.target.files[0])
        // setMyPageData({...myPageData,mem_profile : e.target.files[0]})
        console.log( 'data > ', e.target.files[0])
        console.log( myPageData)
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
        console.log('reander', reader)
        if (reader.readyState === 2) {
        setImage(reader.result)
        console.log('result > ',reader.result)
        // console.log('result > ',reader.result)
        }
    }
    reader.readAsDataURL(e.target.files[0])

    }
    return (
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
              name="mem_profile"
              onChange={onChange}
              
              ref={fileInput}
            />
            </Box>
    );
};

export default Test;