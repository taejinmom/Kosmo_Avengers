import { useRecoilValue } from "recoil";
import { memberKeyAtom } from "../member/atom/LoginAtom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cart() {
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
          {list.map((item) => {
            return (
              <div class="content_totalCount_section">
                <table class="subject_table">
                  <tbody>
                    <tr>
                      <th class="td_width_1"></th>
                      <th class="td_width_2"></th>
                      <th class="td_width_3">상품명</th>
                      <th class="td_width_4">가격</th>
                      <th class="td_width_4">수량</th>
                      <th class="td_width_4">합계</th>
                      <th class="td_width_4">삭제</th>
                    </tr>
                  </tbody>
                </table>
                <table class="cart_table">
                  <tbody>
                    <tr>
                      <td class="td_width_1"></td>
                      <td class="td_width_2"></td>
                      <td class="td_width_3">{item.pdct_nm}</td>
                      <td class="td_width_4 price_td">
                        판매가 : {item.pdct_price} 원
                      </td>
                      <td class="td_width_4 table_text_align_center">
                        <div class="table_text_align_center quantity_div">
                          <input
                            type="text"
                            value={item.cart_amt}
                            class="quantity_input"
                          />
                          <button class="quantity_btn plus_btn">+</button>
                          <button class="quantity_btn minus_btn">-</button>
                        </div>
                        <a class="quantity_modify_btn">변경</a>
                      </td>
                      <td class="td_width_4 table_text_align_center">
                        총액 :{item.pdct_price * item.cart_amt}
                      </td>
                      <td class="td_width_4 table_text_align_center delete_btn">
                        <button>삭제</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="list_table"></table>
              </div>
            );
          })}
        </ul>

        <hr></hr>
        <div class="content_total_section">
          <div class="total_wrap">
            <table>
              <tr>
                <td>
                  <table>
                    <tr>
                      <td>총 상품 가격</td>
                      <td>
                        <span class="totalPrice_span">70000</span> 원
                      </td>
                    </tr>
                    <tr>
                      <td>배송비</td>
                      <td>
                        <span class="delivery_price">3000</span>원
                      </td>
                    </tr>
                    <tr>
                      <td>총 주문 상품수</td>
                      <td>
                        <span class="totalKind_span"></span>종{" "}
                        <span class="totalCount_span"></span>권
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
            <div class="boundary_div">구분선</div>
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
                          <span class="finalTotalPrice_span">70000</span> 원
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
        <div class="content_btn_section">
          <button type="button">주문하기</button>
        </div>
      </div>
    </>
  );
}
