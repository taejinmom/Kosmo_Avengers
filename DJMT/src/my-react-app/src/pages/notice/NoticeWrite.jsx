import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCookies } from 'react-cookie'

const NoticeWrite = () => {
    const [ cookies ] = useCookies([]);

    const navigate = useNavigate();

    const [notice, setNotice] = useState({
        ntc_cate: '',
        ntc_title: '',
        reg_id: cookies.jwtToken,
        ntc_comm: '',
    });

    const { ntc_cate, ntc_title, reg_id, ntc_comm } = notice; //비구조화 할당

    const onChange = (event) => {
        const { value, name } = event.target; //event.target에서 name과 value만 가져오기
        setNotice({
        ...notice,
        [name]: value,
        });
    };

    const saveNotice = async () => {
        await axios.post(`/api/insertNotice`, notice)
        .then((res) => {
        alert('글이 등록되었습니다.');
        navigate('/notice');
        });
    };

    const backToList = () => {
        navigate('/notice');
    };

    return (
        <>
            <div>
                <span>카테고리***</span>
                {/*- 셀렉트박스로 수정하기*/}
                <input type="text" name="ntc_cate" value={ntc_cate} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>제목</span>
                <input type="text" name="ntc_title" value={ntc_title} onChange={onChange} />
            </div>
            <br />

            <input type="hidden" name="reg_id" value={reg_id} onChange={onChange} />
           
            <div>
                <span>내용</span>
                <textarea name="ntc_comm" cols="30" rows="10" value={ntc_comm} onChange={onChange} />
                
            </div>
            <br />
            <div>
                <button onClick={saveNotice}>저장</button>
                <button onClick={backToList}>취소</button>
            </div>
        </>
    );
};


export default NoticeWrite;