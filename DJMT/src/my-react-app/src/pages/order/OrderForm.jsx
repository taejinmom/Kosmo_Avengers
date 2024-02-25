import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { memberKeyAtom } from "../member/atom/LoginAtom";

function OrderForm(prop) {
  let location = useLocation();
  const [info, setInfo] = useState([]);
  const memberKey = useRecoilValue(memberKeyAtom);
  const data = {
    mem_no: memberKey,
    chkList: location.state.checkItems,
  };
  const [totPrice, setTotPrice] = useState(0);
  useEffect(() => {
    axios.post("/api/pdctInfo", data).then((res) => {
      setInfo(res.data);
      setTotPrice(res.data.at(-1).totPrice);
      console.log("res.data ::", res.data);
    });
  }, []);

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const [payInfo, setPayInfo] = useState({
    buyer_name: "",
    buyer_tel: "",
    buyer_addr: "",
    buyer_email: "",
  });

  const onChangePayInfo = (e) => {
    setPayInfo({
      ...payInfo,
      [e.target.name]: e.target.value,
    });
  };

  const requestPay = (e) => {
    console.log("payInfo ::", payInfo);
    const { IMP } = window;
    IMP.init("imp08030724");

    IMP.request_pay(
      {
        pg: "kakaopay.TC0ONETIME",
        pay_method: "card",
        merchant_uid: new Date().getTime(),
        name: "DJMT 의류",
        amount: totPrice,
        buyer_name: payInfo.buyer_name,
        buyer_tel: payInfo.buyer_tel,
        buyer_addr: payInfo.buyer_addr,
        buyer_postcode: "00000",
        buyer_email: payInfo.buyer_email,
      },
      async (rsp) => {
        console.log("res ::", rsp);
        try {
          const { data } = await axios.post(
            "/api/verifyIamport/" + rsp.imp_uid
          );

          console.log("data ::", data);
          if (rsp.paid_amount === data.response.amount) {
            if (alert("결제 성공하였습니다.")) {
            }
          } else {
            alert("결제 실패하였습니다.");
          }
        } catch (error) {
          console.error("Error while verifying payment:", error);
          alert("결제 실패 ###");
        }
      }
    );
  };

  return (
    <>
      <div className="container">
        <h1 className="fs-3">주문 정보</h1>
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            구매자 이름
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="buyer_name"
              name="buyer_name"
              onChange={onChangePayInfo}
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            연락처
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="buyer_tel"
              name="buyer_tel"
              onChange={onChangePayInfo}
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            배송지
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="buyer_addr"
              name="buyer_addr"
              onChange={onChangePayInfo}
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            이메일
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="buyer_email"
              name="buyer_email"
              onChange={onChangePayInfo}
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container">
        <h1 className="fs-3">상품 정보</h1>
        {info.map((item) => {
          return (
            <div key={item.pdct_no}>
              <div className="mb-3">
                <label htmlFor="basic-url" className="form-label">
                  상품명
                </label>
                <div className="input-group">
                  <input
                    defaultValue={item.pdct_nm}
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="basic-url" className="form-label">
                  가격
                </label>
                <div className="input-group">
                  <input
                    defaultValue={item.pdct_price}
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="basic-url" className="form-label">
                  수량
                </label>
                <div className="input-group">
                  <input
                    defaultValue={item.cart_amt}
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div className="mb-3">
          <p className="text-center fs-2 fw-bold">총 결제 금액</p>
          <p className="text-center fs-4 fw-semibold">{totPrice} 원</p>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
          <input
            defaultValue={"결제하기"}
            className="btn btn-primary"
            type="button"
            onClick={() => requestPay()}
          />
        </div>
      </div>
    </>
  );
}

export default OrderForm;
