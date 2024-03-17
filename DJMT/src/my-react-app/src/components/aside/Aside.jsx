import './Aside.css'
import React from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { coordinateIsPop, coordinateTop } from '../../pages/coordinate/atom/CoordinateModalAtom';

// 최근 본 목록을 보여줄 모달 컴포넌트
const RecentlyViewedModal = ({ recentItems, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2><b>코디 목록</b></h2>
        {/* // TODO: 슬라이더로 변경 예정 & 개수 제한 */}
        <div>
          <h3>상의</h3>
          <ul>
            {recentItems.map((item, index) => (
              <li key={index}>
                [{item.id}] {item.name}
              </li>
            ))}
          </ul>
          <hr /> {/* 상, 하 구분선 */}
        </div>
        <div>
          <h3>하의</h3>
          <ul>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

const Aside = () => {
  const coordinateIsPopVal = useRecoilValue(coordinateIsPop);
  const topList = useRecoilValue(coordinateTop);

  const setcoordinateIsPopState = useSetRecoilState(coordinateIsPop);

  const showModal = () => {
    setcoordinateIsPopState(true);
  };

  const closeModal = () => {
    setcoordinateIsPopState(false);
  };

  return (
    <>
      <aside>
        <ul>
          <li>
            <span>찜 목록</span>
          </li>
          <li>
             <span className='material-icons' onClick={showModal}>checkroom</span> {/* 코디할 목록 */}
            {coordinateIsPopVal && (
              <RecentlyViewedModal recentItems={topList} onClose={closeModal} />
            )}
          </li>
          <li>
            <span className='material-icons red'>favorite</span>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Aside