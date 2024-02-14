import { useParams } from "react-router-dom";
import "./Product.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { memberKeyAtom } from "../member/atom/LoginAtom.jsx";

function ProductDetail() {
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  const pdct_no = useParams().pdct_no;
  const memberKey = useRecoilValue(memberKeyAtom);
  const [pdct, setPdct] = useState([]);
  const price = pdct.pdct_price;
  useEffect(() => {
    axios
      .get("/api/productDetail", { params: { pdct_no: pdct_no } })
      .then((res) => {
        setPdct(res.data);
      });
  }, []);

  const formatPrice = (target) => {
    if (target) {
      let result = target.toLocaleString("ko-KR");
      return result;
    }
  };

  const handleInsItem = (e) => {
    e.preventDefault();
    insertItem(pdct.pdct_no, pdct.pdct_price, count);
  };
  const insertItem = (pdct_no, pdct_price, count) => {
    let cartData = {
      mem_no: memberKey,
      pdct_no: pdct_no,
      pdct_price: pdct_price,
      cart_amt: count,
    };
    console.log("cartData ::", cartData);
    axios.post("/api/cart/insert", cartData).then((res) => {
      if (res.status == 200) {
        console.log("res :: ", res);
        if (
          confirm("상품을 장바구니에 담았습니다. 장바구니를 확인하시겠습니까?")
        ) {
          location.href = "http://localhost:5173/#/myCart";
        }
      } else {
        alert("장바구니 담기에 실패했습니다.");
      }
    });
  };

  return (
    <>
      <div className="d-flex">
        <div className="repImgDiv">
          <img src="" className="rounded repImg" alt={pdct.pdct_nm} />
        </div>
        <div className="ms-3 w-50">
          <span>판매중</span>

          <div className="h4" text={pdct.pdct_price}></div>
          <hr className="my-4"></hr>

          <div className="text-right">
            <div className="h4 text-danger text-left">
              <input
                type="text"
                defaultValue={pdct.pdct_price || ""}
                id="price"
                name="price"
              />
              <span text="${pdct.pdct_price}"></span>원
            </div>
            <div className="input-group w-50">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  수량
                  <input
                    type="text"
                    defaultValue={pdct.pdct_amt || ""}
                    readOnly
                  />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>구매 수량</p>
              <div>
                <button
                  onClick={() => {
                    if (count === 1) {
                      return 1;
                    }
                    setCount(count - 1);
                  }}
                >
                  -
                </button>
                <p>{count}</p>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <p>총 상품 금액</p>
              <p>₩ {formatPrice(price * count)}원</p>
            </div>
          </div>
          <hr className="my-4"></hr>

          <div className="text-right mgt-50">
            <h5>결제 금액</h5>
            <h3
              name="totalPrice"
              id="totalPrice"
              className="font-weight-bold"
            ></h3>
          </div>
          <div className="text-right">
            <button
              type="button"
              className="btn btn-light border btn-outline-dark btn-lg"
              onClick={(e) => {
                handleInsItem(e);
                // setModal(true);
              }}
            >
              장바구니 담기
            </button>
            <button
              type="button"
              className="btn btn-dark btn-lg"
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              onClick={() => {
                navigate("/payment", {
                  state: {
                    title: pdct.pdct_nm,
                    id: pdct.pdct_no,
                    count: count,
                    price: pdct.pdct_price,
                    totalPrice: price * count,
                  },
                });
              }}
            >
              주문하기
            </button>
          </div>
          <div className="text-right">
            <button type="button" className="btn btn-danger btn-lg">
              품절
            </button>
          </div>
        </div>
      </div>

      <div className="mgt-30">
        <div className="container">
          <h4 className="display-6">상품 상세 설명</h4>
          <hr className="my-4"></hr>
          <p className="lead" text="${pdct.pdct_comm}"></p>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
