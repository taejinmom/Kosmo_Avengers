import { useParams } from "react-router-dom";
import "./Product.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { insertItem } from "../cart/CartSlice";

function ProductDetail() {
  let dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  const pdct_no = useParams().pdct_no;
  console.log("pdct_no ::", pdct_no);
  const [pdct, setPdct] = useState([]);
  const price = pdct.pdct_price;
  let tmp = {};
  useEffect(() => {
    axios
      .get("/api/productDetail", { params: { pdct_no: pdct_no } })
      .then((res) => {
        setPdct(res.data);
      });
  }, []);

  const handleClick = (itemId) => {
    if (
      //!cartItems.find((el)=>el.itemId === itemId)
      cartItems.filter((el) => {
        return el.itemId === itemId;
      }).length !== 0
    ) {
      setCartItems(
        cartItems.map((el) => {
          if (el.itemId === itemId) {
            el.quantity += 1;
          }
          return el;
        })
      );
    } else {
      setCartItems([...cartItems, { itemId: itemId, quantity: 1 }]);
    }
  };

  const formatPrice = (target) => {
    if (target) {
      let result = target.toLocaleString("ko-KR");
      return result;
    }
  };
  console.log("price ::", price);

  return (
    <>
      {/* <div className="product-detail">
        <div className="inner"></div>
        <div className="pdct-no">
          <input type="hidden" value={pdct.pdct_no} />
        </div>
        <div className="pdct-content"> */}
      {/* <p>{pdct.pdct_nm}</p>
          <p>{pdct.pdct_price}</p>
          <p>{pdct.pdct_amt}</p>
          <p>{pdct.pdct_comm}</p> */}
      {/* </div>
      </div> */}

      <div class="d-flex">
        <div class="repImgDiv">
          <img src="" class="rounded repImg" alt={pdct.pdct_nm} />
        </div>
        <div class="ms-3 w-50">
          <span>판매중</span>

          <div class="h4" text={pdct.pdct_price}></div>
          <hr class="my-4"></hr>

          <div class="text-right">
            <div class="h4 text-danger text-left">
              <input
                type="text"
                value={pdct.pdct_price}
                id="price"
                name="price"
              />
              <span text="${pdct.pdct_price}"></span>원
            </div>
            <div class="input-group w-50">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  수량
                  <input type="text" value={pdct.pdct_amt} readOnly />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>구매 수량</p>
              {/* 카운트 버튼 */}
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
          <hr class="my-4"></hr>

          <div class="text-right mgt-50">
            <h5>결제 금액</h5>
            <h3 name="totalPrice" id="totalPrice" class="font-weight-bold"></h3>
          </div>
          <div
            // if="${item.itemSellStatus.toString().equals('SELL')}"
            class="text-right"
          >
            <button
              type="button"
              class="btn btn-light border btn-outline-dark btn-lg"
              onClick={() => {
                dispatch(
                  insertItem({
                    pdct_no: pdct.pdct_no,
                    // isSoldOut: false,
                    pdct_price: pdct.pdct_price,
                    // thumbnail: products.thumbnail,
                    pdct_nm: pdct.pdct_nm,
                    pdct_amt: count,
                    // checked: true,
                  })
                );
                setModal(true);
              }}
            >
              장바구니 담기
            </button>
            <button
              type="button"
              class="btn btn-dark btn-lg"
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
          <div
            // unless="${item.itemSellStatus.toString().equals('SELL')}"
            class="text-right"
          >
            <button type="button" class="btn btn-danger btn-lg">
              품절
            </button>
          </div>
        </div>
      </div>

      <div class="mgt-30">
        <div class="container">
          <h4 class="display-6">상품 상세 설명</h4>
          <hr class="my-4"></hr>
          <p class="lead" text="${pdct.pdct_comm}"></p>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
