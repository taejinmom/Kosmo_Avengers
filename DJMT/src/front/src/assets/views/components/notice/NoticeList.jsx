import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const NoticeList = () => {
    const navigate = useNavigate();
    const [noticeList, setNoticeList] = useState([]);

    const getNoticeList = async e => {
        axios
        .get('api/noticeList')
        .then(res => {
            console.log(res.data)
            setNoticeList(res.data);
        })
        .catch(error => {
            console.log('error >> ')
            // if (error.response.data === 'fail') {
            // alert('불러올 데이터가 없습니다.')
            // }
        })
        // e.preventDefault();
        //
    }
  
    const moveToWrite = () => {
        navigate('/notice/write');
      };

    useEffect(() => {
        getNoticeList(); // 1) 게시글 목록 조회 함수 호출
      }, []);

    


    return(
        <div>
            <ul>
                {noticeList.map(
                        (notice)=> (
                            <li key={notice.ntc_no}>
                                <Link key={notice.ntc_no} to={`/notice/${notice.ntc_no}`}>{notice.ntc_title}</Link>
                            </li>
                        )
                    )
                }

            </ul>
             <div>
                <button onClick={moveToWrite}>글쓰기</button>
            </div>
        </div>
    )
};
    
export default NoticeList;
