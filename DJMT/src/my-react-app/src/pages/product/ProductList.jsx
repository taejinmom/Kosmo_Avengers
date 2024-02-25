import { Link } from "react-router-dom";
import "./Product.css";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("/api/product").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <>
      <div className="product-list">
        <div className="inner">
          <h2 className="title">여성</h2>
          <div className="category">
            <ul>
              <li>
                <a href="" className="active">
                  전체
                </a>
              </li>
              <li>
                <a href="">상의</a>
              </li>
              <li>
                <a href="">하의</a>
              </li>
            </ul>
            <div className="select-box">
              <select
                defaultValue="1"
                // name="displayyn"
                // onChange={onChangeHandler}
              >
                <option value="1">인기순</option>
                <option value="2">구매후기순</option>
                <option value="3">낮은가격순</option>
                <option value="4">높은가격순</option>
              </select>
            </div>
          </div>
          <ul className="item">
            {list.map((item) => {
              return (
                <li key={item.pdct_no}>
                  <Link to={`/productDetail/${item.pdct_no}`}>
                    <div className="item-img"></div>
                    <p className="item-name">{item.pdct_nm}</p>
                    <p className="item-price">{item.pdct_price}</p>
                    <p className="item-comm">{item.pdct_comm}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductList;
