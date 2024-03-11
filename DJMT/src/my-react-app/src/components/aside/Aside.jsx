import './Aside.css'
import React, { useState, useEffect } from 'react';

// 최근 본 목록을 보여줄 모달 컴포넌트
const RecentlyViewedModal = ({ recentItems, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>최근 본 상품</h3>
        <ul>
          {recentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Aside() {
  // 최근 본 목록 상태 관리
  const [recentItems, setRecentItems] = useState([]);
  // 모달 표시 여부 상태 관리
  const [modalVisible, setModalVisible] = useState(false);

  // 최근 본 목록에 상품 추가하는 함수
  const addToRecentItems = (item) => {
    setRecentItems([...recentItems, item]);
  };

  // 버튼 클릭 시 최근 본 목록에 상품 추가
  const handleButtonClick = () => {
    const randomItem = "청바지"; // 추가
    addToRecentItems(randomItem);
    setModalVisible(true); // 모달을 표시
  };

  // 모달 닫기 함수
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    console.log(">>>>modalVisible:", modalVisible);
  }, [modalVisible, recentItems]);

  return (
    <>
      <aside>
        <ul>
          <li>
          <button onClick={handleButtonClick}>최근 본 상품 추가</button>
          {/* 우측 배너 클릭 시 모달 표시 */}
          {modalVisible && (
            <RecentlyViewedModal recentItems={recentItems} onClose={handleCloseModal} />
          )}
          </li>
          <li>
            <a className='material-icons' href='javascript:void(0)'>checkroom</a>
          </li>
          <li>
            <a className='material-icons red' href='javascript:void(0)'>favorite</a>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Aside