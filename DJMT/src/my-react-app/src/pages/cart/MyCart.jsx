import { useRecoilValue } from "recoil";
import { memberKeyAtom } from "../member/atom/LoginAtom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./cart.css";
import styled from "styled-components";
import { color } from "../../styles/color";
import CheckBox from "../../components/cart/CheckBox";

function Cart() {
  const [list, setList] = useState([]);
  const memberKey = useRecoilValue(memberKeyAtom);
  const [checkItems, setCheckItems] = useState([]);

  // 240212 미르 : 선택 삭제 기능 하려다 포기
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      list.forEach((el) => idArray.push(el.pdct_no));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  console.log("checkItems ::", checkItems);
  useEffect(() => fetchList(), []);

  const fetchList = (e) => {
    axios.post("/api/myCart/" + memberKey).then((res) => {
      setList(res.data);
    });
  };

  const removeProduct = (pdct_no) => {
    if (pdct_no == null || pdct_no == "" || checkItems == []) {
      return alert("삭제할 상품을 선택해주세요.");
    } else {
      if (confirm("해당 상품을 장바구니에서 삭제하시겠습니까?")) {
        axios
          .post("/api/myCart/delete", {
            pdct_no: pdct_no,
            mem_no: memberKey,
            chkList: checkItems,
          })
          .then((res) => {
            alert("삭제되었습니다.");
            fetchList();
          });
      }
    }
  };

  const handleFetchPlus = (product) => {
    fetch("/api/myCart/updateAmt?cate=plus", {
      method: "PUT",
      body: JSON.stringify({
        mem_no: memberKey,
        pdct_no: product.pdct_no,
        cart_amt: product.cart_amt + 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => fetchList());
  };

  const handleFetchMinus = (product) => {
    fetch("/api/myCart/updateAmt?cate=minus", {
      method: "PUT",
      body: JSON.stringify({
        mem_no: memberKey,
        pdct_no: product.pdct_no,
        cart_amt: product.cart_amt - 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => fetchList());
  };

  const handleAdd = (pdct_no) => {
    const addQty = list.map((product) => {
      if (pdct_no === product.pdct_no) {
        return { ...product, pdct_amt: product.pdct_amt + 1 };
      } else return product;
    });
    setList(addQty);
  };

  const handleSubstract = (pdct_no) => {
    const substractQty = list.map((product) => {
      if (pdct_no === product.pdct_no && product.pdct_amt > 1) {
        return { ...product, pdct_amt: product.pdct_amt - 1 };
      } else return product;
    });
    setList(substractQty);
  };

  return (
    <>
      <div
        className="w-2/3 h-48 p-2 bg-white-200 
						border-2 border-slate-200 
						rounded-lg flex flex-row 
						mx-auto mt-6"
      >
        <button
          className="cancelBtn"
          onClick={() => {
            removeProduct();
          }}
        >
          선택 삭제
        </button>
        <div className="content_totalCount_section">
          <table className="subject_table">
            <thead>
              <tr>
                <th className="td_width_0">
                  <input
                    type="checkbox"
                    name="select-all"
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    checked={checkItems.length === list.length ? true : false}
                  />
                  전체선택
                </th>
                <th className="td_width_3">상품명</th>
                <th className="td_width_4">가격</th>
                <th className="td_width_4">수량</th>
                <th className="td_width_4">합계</th>
                <th className="td_width_4"></th>
              </tr>
            </thead>
            {list.map((item, idx) => {
              return (
                <tbody className="cart_table" key={item.pdct_no}>
                  <tr>
                    <td className="td_width_0">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          handleSingleCheck(e.target.checked, item.pdct_no)
                        }
                        checked={
                          checkItems.includes(item.pdct_no) ? true : false
                        }
                      />
                    </td>
                    <td className="td_width_3">{item.pdct_nm}</td>
                    <td className="td_width_4 price_td">
                      판매가 : {item.pdct_price} 원
                    </td>
                    <td className="td_width_4 table_text_align_center">
                      <div>
                        <MinusBtn
                          onClick={() => {
                            handleSubstract(item.pdct_no);
                            handleFetchMinus(item);
                          }}
                        >
                          {/* <FontAwesomeIcon icon="fa-solid fa-minus" /> */}
                          <i className="fas fa-minus"></i>
                        </MinusBtn>
                        <ContentNum>{item.cart_amt}</ContentNum>
                        <PlusBtn
                          onClick={() => {
                            handleAdd(item.pdct_no);
                            handleFetchPlus(item);
                          }}
                        >
                          <i className="fas fa-plus"></i>
                        </PlusBtn>
                      </div>
                    </td>
                    <td className="td_width_4 table_text_align_center">
                      총액 :{item.pdct_price * item.cart_amt}
                    </td>
                    <td className="td_width_4 table_text_align_center delete_btn">
                      <button
                        className="cancelBtn"
                        onClick={() => {
                          removeProduct(item.pdct_no);
                        }}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>

        <div className="content_total_section">
          <div className="total_wrap">
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>총 상품 가격</td>
                  <td>
                    <span className="totalPrice_span">70000</span> 원
                  </td>
                </tr>
                <tr>
                  <td>배송비</td>
                  <td>
                    <span className="delivery_price">3000</span>원
                  </td>
                </tr>
                <tr>
                  <td>총 주문 상품수</td>
                  <td>
                    <span className="totalKind_span"></span>종{" "}
                    <span className="totalCount_span"></span>권
                  </td>
                </tr>
              </tbody>
              {/* <div className="boundary_div">구분선</div> */}
              <tbody>
                <tr>
                  <td>
                    <strong>총 결제 예상 금액</strong>
                  </td>
                  <td>
                    <span className="finalTotalPrice_span">70000</span> 원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="content_btn_section">
          <Link to={`/order`}>
            <button type="button">선택상품 주문하기</button>
          </Link>
        </div>
      </div>
    </>
  );
}

const MinusBtn = styled.button`
  width: 40px;
  height: 40px;
  background: ${color.WHITE};
  border: 1px solid ${color.LIGHTGRAY};
  box-shadow: 2px 2px 0 0 rgb(0 0 0 / 6%);
  color: #707070;
  cursor: pointer;
`;

const PlusBtn = styled(MinusBtn)``;

const ContentNum = styled.span`
  display: inline-block;
  width: 45px;
  padding-top: 12px;
  vertical-align: top;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;
export default Cart;
