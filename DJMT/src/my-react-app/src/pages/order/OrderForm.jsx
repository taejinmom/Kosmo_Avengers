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
  useEffect(() => {
    axios.post("/api/pdctInfo", data).then((res) => {
      setInfo(res.data);
    });
  }, []);

  console.log("info ::", info);
  console.log("data ::", data);

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
              id="basic-url"
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
              id="basic-url"
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
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            메모
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container">
        <h1 className="fs-3">상품 정보</h1>
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            상품명
          </label>
          <div className="input-group">
            <input
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
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="button">
            결제하기
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderForm;
