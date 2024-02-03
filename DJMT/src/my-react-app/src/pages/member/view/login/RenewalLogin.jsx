import React from 'react';
import Form from '../../common/Form';
import * as yup from 'yup';
import { loginHandler } from '../../handler/MemberHandler';
import { useCookies } from 'react-cookie'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { isLogin, memberKeyAtom, isAdmin } from '../../atom/LoginAtom'

const RenewalLogin = () => {
    const [cookies, setCookie, removeCookie] = useCookies([])
    const navigate = useNavigate()
    const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin) // 로그인 햇는지 체크
    const setIsAdminCheck = useSetRecoilState(isAdmin) // 로그인 유저 Role 값
    const setMemberKey = useSetRecoilState(memberKeyAtom) // MEM_NO 전역변수로 저장

    const schema = yup.object().shape({
        login_id: yup.string().required("ID is required"),
        login_pw: yup
          .string()
          .required("Password is required"),
    });
    // 홈으로
    const handleRedirect = e => {
    e.preventDefault()
    navigate('/')
    }
    // 로그인
    const loginHandler1 = (data) => {
        loginHandler(data, setIsLoginCheck, setIsAdminCheck, setMemberKey, setCookie, navigate )
      };
      
    return (
        <div style={{textAlign:'center', maxWidth:'50ch' , margin: 'auto'}}>
            <Form className="login_form" schema={schema} onSubmit={loginHandler1}>
                <Form.input  name="login_id" label="ID" type="text"/>
                <Form.input  name="login_pw" label="password" type="password"/>
                <Form.button className="login__btn" name="Sign in" type="submit"/>
            </Form>
        </div>
    );
};

export default RenewalLogin;