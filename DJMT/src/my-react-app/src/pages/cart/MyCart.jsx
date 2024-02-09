import { useRecoilValue } from "recoil";
import { memberKeyAtom } from "../member/atom/LoginAtom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  console.log("Cart !!");
  const [list, setList] = useState([]);
  const memberKey = useRecoilValue(memberKeyAtom);
  useEffect(() => {
    axios.get("/api/myCart", { params: { mem_no: memberKey } }).then((res) => {
      setList(res.data);
    });
  }, []);

  const [selectedBread, setSelectedBread] = useState([]);
  const [chkList, setChkList] = useState([]);
  const chgOneBox = (chk, id) => {
    if (chk) {
      setChkList([...chkList, id]);
    } else {
      setChkList(chkList.filter((el) => el !== id));
    }
  };

  const chgAllBox = (chk) => {
    if (chk) {
      const allChkBox = [];
      selectedBread.forEach((el) => allChkBox.push(el.id));
      setSelectedBread(allChkBox);
    } else {
      setChkList([]);
    }
  };

  return (
    <>
      <form
        name="orderform"
        id="orderform"
        method="post"
        className="orderform"
        action="/Order"
      >
        <div className="basket" id="basket">
          {/* <!-- "장바구니 헤더" --> */}
          <div className="row head">
            <div className="check">선택</div>
            <div className="img">이미지</div>
            <div className="pname">상품명</div>
            <div className="basketprice">가격</div>
            <div className="num">수량</div>
            <div className="sum">합계</div>
            <div className="basketcmd">삭제</div>
          </div>
          {/* <!-- "장바구니 상품 목록" --> */}
          <div className="row data">
            <div className="check">
              <input
                type="checkbox"
                name="buy"
                defaultValue="260"
                defaultChecked=""
              />
              &nbsp;
            </div>
            <div className="img">
              <img src="./backup/704/img/basket1.jpg" width="60" />
            </div>
            <div className="pname">
              <span>찜마마(XJ-92214/3)</span>
            </div>
            <div className="basketprice">
              <input
                type="hidden"
                name="p_price"
                id="p_price1"
                className="p_price"
                defaultValue="20000"
              />
              20,000원
            </div>
            <div className="num">
              {/* <!-- "장바구니 수량 변경" --> */}
              <div className="updown">
                <input
                  type="text"
                  name="p_num1"
                  id="p_num1"
                  size="2"
                  maxLength="4"
                  className="p_num"
                  defaultValue="2"
                />
                <span>
                  <i className="fas fa-arrow-alt-circle-up up"></i>
                </span>
                <span>
                  <i className="fas fa-arrow-alt-circle-down down"></i>
                </span>
              </div>
            </div>
            {/* <!-- "장바구니 상품 합계" --> */}
            <div className="sum">40,000원</div>
            <div className="basketcmd">
              <a href="#" className="abutton">
                삭제
              </a>
            </div>
          </div>
        </div>
        {/* <!-- "장바구니 기능 버튼" --> */}
        <div className="right-align basketrowcmd">
          <a href="#" className="abutton">
            선택상품삭제
          </a>
          <a href="#" className="abutton">
            장바구니비우기
          </a>
        </div>
        {/* <!-- "장바구니 전체 합계 정보" --> */}
        <div className="bigtext right-align sumcount" id="sum_p_num">
          상품갯수: 4개
        </div>
        <div className="bigtext right-align box blue summoney" id="sum_p_price">
          합계금액: 74,200원
        </div>

        <div id="goorder" className="">
          <div className="clear"></div>
          <div className="buttongroup center-align cmd">
            <a href="#">선택한 상품 주문</a>
          </div>
        </div>
      </form>
    </>
  );
}
