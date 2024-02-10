import { useRecoilValue } from "recoil";
import { memberKeyAtom } from "../member/atom/LoginAtom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  const memberKey = useRecoilValue(memberKeyAtom);
  useEffect(() => {
    axios.post("/api/myCart/" + memberKey).then((res) => {
      setList(res.data);
    });
  }, []);

  /* const [selectedBread, setSelectedBread] = useState([]);
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
  }; */

  return (
    <>
      <div
        className="w-2/3 h-48 p-2 bg-white-200 
						border-2 border-slate-200 
						rounded-lg flex flex-row 
						mx-auto mt-6"
      >
        <ul className="item">
          <div className="content_totalCount_section">
            <table className="subject_table">
              <thead>
                <tr>
                  <th className="td_width_1"></th>
                  <th className="td_width_2"></th>
                  <th className="td_width_3">상품명</th>
                  <th className="td_width_4">가격</th>
                  <th className="td_width_4">수량</th>
                  <th className="td_width_4">합계</th>
                  <th className="td_width_4"></th>
                </tr>
              </thead>
              {list.map((item) => {
                return (
                  <tbody className="cart_table" key={item.pdct_no}>
                    <tr>
                      <td className="td_width_1"></td>
                      <td className="td_width_2"></td>
                      <td className="td_width_3">{item.pdct_nm}</td>
                      <td className="td_width_4 price_td">
                        판매가 : {item.pdct_price} 원
                      </td>
                      <td className="td_width_4 table_text_align_center">
                        <div className="table_text_align_center quantity_div">
                          <input
                            id="cartAmt"
                            type="text"
                            value={item.cart_amt}
                            className="quantity_input"
                          />
                          <div>
                            <button
                              className="quantity_btn minus_btn"
                              onClick={() => {
                                if (item.cart_amt === 1) {
                                  return 1;
                                }
                                setCount(item.cart_amt - 1);
                                console.log("minus_btn");
                              }}
                            >
                              -
                            </button>
                            <button
                              className="quantity_btn plus_btn"
                              onClick={() => {
                                setCount(item.cart_amt + 1);
                                console.log("plus_btn");
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <a className="quantity_modify_btn">변경</a>
                      </td>
                      <td className="td_width_4 table_text_align_center">
                        총액 :{item.pdct_price * item.cart_amt}
                      </td>
                      <td className="td_width_4 table_text_align_center delete_btn">
                        <button>X</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </ul>

        <hr></hr>
        <div className="content_total_section">
          <div className="total_wrap">
            <table>
              <tr>
                <td>
                  <table>
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
                  </table>
                </td>
                <td>
                  <table>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <div className="boundary_div">구분선</div>
            <table>
              <tr>
                <td>
                  <table>
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
                </td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="content_btn_section">
          <button type="button">주문하기</button>
        </div>
      </div>
    </>
  );
}
