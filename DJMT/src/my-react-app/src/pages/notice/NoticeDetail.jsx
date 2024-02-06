import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notice from "./Notice";

const NoticeDetail = () => {

    const { ntc_no } = useParams(); // Apps.jsx의 /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
    const [ notice, setNotice ] = useState({});

    const getNotice = async () => {
        console.log({ntc_no});

        axios.get('/api/noticeDetail',{params:{ntc_no}} )
        .then(
            (resp) => {
                console.log(resp);
                setNotice(resp.data);
                 (false);
            }
        )
        
        // .catch(error => {
        //     console.log('error >> ')
        //     // if (error.response.data === 'fail') {
        //     // alert('불러올 데이터가 없습니다.')
        //     // }
        // })
    };
    
    useEffect(() => {
        getNotice();
    }, []);

    return(
        <div>
            게시판 상세보기 페이지
            <hr />
            <Notice notice={notice} />
        </div>
    );
};

export default NoticeDetail;