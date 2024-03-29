import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useCookies } from 'react-cookie'

import { isAdmin } from '../../pages/member/atom/LoginAtom';
import { useRecoilValue } from 'recoil';

const Notice = ({notice}) => {
// const Notice = ({ntc_no, ntc_title,ntc_comm, reg_id, ntc_cate, reg_date}) => {
    const isAdminCheck = useRecoilValue(isAdmin);
    const [ cookies ] = useCookies([]);
    const [ NoticeAuthCheck, setNoticeAuthCheck ] = useState(false);

    const navigate = useNavigate();

    const moveToUpdate = () => {
      navigate('/notice/update/' + notice.ntc_no);
    };
  
    const deleteNotice = async () => {
      if (window.confirm('게시글을 삭제하시겠습니까?')) {
        await axios.delete('/api/deleteNotice',{params:{ntc_no:notice.ntc_no}} )
        .then((res) => {
          alert('삭제되었습니다.');
          moveToList();
        })
        .catch((err)=>
            console.log(err)
        );
      }
    };
  
    const checkMemberKey = async () => {
      if(isAdminCheck){
        await axios.get('/api/checkNoticeAuthentication', {params:{token:cookies.jwtToken, reg_id:notice.reg_id}} )
          .then((res) => {
            console.log("checkMemberKey:"+res.data);
            setNoticeAuthCheck(res.data);
          })
          .catch((err)=>
              console.log(err)
          );
      }
    };

    const moveToList = () => {
        navigate('/notice');
    };

    useEffect(() => {
      checkMemberKey();
      }, [notice]);
  
    return (
        <>
            <div>
                <h5>카테고리 - {notice.ntc_cate}</h5>
                <h2>제목 : {notice.ntc_title}</h2>
                <h5>작성자 : {notice.reg_id}</h5>
                <h5>글 등록 날짜 : {notice.reg_date}</h5>
                <hr />
                <p>내용 : {notice.ntc_comm}</p>
            </div>
            <br></br>
            <div>
              
              {NoticeAuthCheck &&
              <>
                  <button onClick={moveToUpdate}>수정</button>
                  <button onClick={deleteNotice}>삭제</button>
              </>
              }
              <button onClick={moveToList}>목록</button>
            </div>
        </>
    );
};
export default Notice;