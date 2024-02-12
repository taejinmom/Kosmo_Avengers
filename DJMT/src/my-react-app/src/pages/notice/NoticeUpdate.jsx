import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useCookies } from 'react-cookie'

const NoticeUpdate = () => {
    const [ cookies ] = useCookies([]);

    const navigate = useNavigate();
    const { ntc_no } = useParams();
    const [ notice, setNotice ] = useState({
        ntc_cate: '',
        ntc_title: '',
        chg_id: '',
        ntc_comm: '',
    });

    const { ntc_cate, ntc_title, chg_id, ntc_comm} = notice; //비구조화 할당

    const onChange = (event) => {
        console.log("event.target:"+event.target.name+","+event.target.value);
        const { value, name } = event.target; //event.target에서 name과 value만 가져오기
        setNotice({
        ...notice,
        [name]: value,
        });
    };

    const getNotice = async () => {
        const resp = axios.get('/api/noticeDetail',{params:{ntc_no}} )
        .then(
            (resp) => {
                console.log(resp);
                resp.data.chg_id = cookies.jwtToken;
                setNotice(resp.data);
            }
        )
        .catch(error => {
            console.log('error >> ')
            alert(error)
        })
    };

    const updateNotice = async () => {
        await axios.post('/api/updateNotice', notice)
        .then((res) => {
            alert('수정되었습니다.');
            console.log('Update res >> '+res.data)
            backToDetail();
        })
        .catch((error) => {
            alert(error);
            backToDetail();
        });
    };

    const backToDetail = () => {
        navigate('/notice/' + ntc_no);
    };

    useEffect(
        () => {getNotice();
        }, []
    );

    return(
        <div>
            <h1>글 수정 페이지</h1>
            로그인 된 id가 Chg_id에 넘어갈 수 있도록 해야함
            <br />
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
            <input type="hidden" name="chg_id" value={chg_id} onChange={onChange} />
            <div>
                <span>내용</span>
                <textarea
                name="ntc_comm"
                cols="30"
                rows="10"
                value={ntc_comm}
                onChange={onChange}
                ></textarea>
            </div>
            <br />
            <div>
                <button onClick={updateNotice}>수정</button>
                <button onClick={backToDetail}>취소</button>
            </div>
        </div>
    );
};

export default NoticeUpdate;