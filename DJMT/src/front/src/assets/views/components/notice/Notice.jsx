import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Notice = ({ntc_no, ntc_title,ntc_comm, reg_id, ntc_cate, reg_date}) => {
    
    const navigate = useNavigate();

    const moveToUpdate = () => {
      navigate('/notice/update/' + ntc_no);
    };
  
    const deleteNotice = async () => {
      if (window.confirm('게시글을 삭제하시겠습니까?')) {
        await axios.delete('/api/deleteNotice',{params:{ntc_no}} )
        .then((res) => {
          alert('삭제되었습니다.');
          moveToList();
        })
        .catch((err)=>
            console.log(err)
        );
      }
    };
  
    const moveToList = () => {
        navigate('/notice');
    };

    return (
        <div>
            <div>
                <h5>카테고리 - {ntc_cate}</h5>
                <h2>제목 : {ntc_title}</h2>
                <h5>작성자 : {reg_id}</h5>
                <h5>글 등록 날짜 : {reg_date}</h5>
                <hr />
                <p>내용 : {ntc_comm}</p>
            </div>
            <br></br>
            <div>
                <button onClick={moveToUpdate}>수정</button>
                <button onClick={deleteNotice}>삭제</button>
                <button onClick={moveToList}>목록</button>
            </div>
        </div>
    );
};
export default Notice;