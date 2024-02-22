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
import request from '../../../../api/core';

const Test = () => {
    const [Image, setImage] = useState(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      )
    const [profile, setProfile] = useState()
    const fileInput = useRef(null)
    const [myPageData, setMyPageData] = useState({})
    
    const testSubmit = () => {
        const formData = new FormData();
        formData.append('file', profile);

        console.log('data' , profile)
        request.post('/postTest',{data:formData},{
            headers: {
                'Content-Type': 'multipart/form-data',
                },
            })
    }
    const onChange = e => {
    if (e.target.files[0]) {
        
        setProfile(e.target.files[0])
        console.log( 'data > ', profile)
        // console.log( myPageData)
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
        console.log('result > ',Image)
        // console.log('result > ',reader.result)
        }
    }
    
    reader.readAsDataURL(e.target.files[0])

    
    }
    return (
        <>
            <input type='image' src={Image} style={{width:'150px', height:'200px'}} />
            <input
                type="file"
                // style={{ display: 'none' }}
                accept="image/jpg,impge/png,image/jpeg"
                name="mem_profile"
                onChange={onChange}
                ref={fileInput}
            />
            <button  
                onClick={testSubmit}
            >전송</button>
        </> 
    );
};

export default Test;