import React from "react";
import { useRecoilValue } from "recoil";
import { memberDataAtom } from "./atom/LoginAtom";

const MyPage = () => {
  const memberData = useRecoilValue(memberDataAtom);
  console.log(memberData);
  return (
    <div className="join">
      <div className="inner">
        <h2 className="title">M</h2>
        <div className="joinDiv"></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <ul>
            <li>{memberData.mem_name}</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button>수정</button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
