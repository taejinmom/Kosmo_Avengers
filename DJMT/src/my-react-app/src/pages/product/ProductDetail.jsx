import { useParams } from "react-router-dom";
import "./Product.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const pdct_no = useParams().id;
  const [pdct, setPdct] = useState([]);
  let tmp = {};
  useEffect(() => {
    axios.get(`/api/product/${pdct_no}`).then((res) => {
      console.log("res ::", res);
      setPdct(res.data);
    });
  }, []);

  console.log("tmp :: ", tmp);

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
              onclick="addCart()"
            >
              장바구니 담기
            </button>
            <button type="button" class="btn btn-dark btn-lg" onclick="order()">
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
