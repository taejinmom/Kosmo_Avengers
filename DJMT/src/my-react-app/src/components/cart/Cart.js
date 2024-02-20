import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Content from "./Content/Content";
import EmptyContent from "./Content/EmptyContent";
import { CART_API, CART_CHECK_API, CART_EMPTY_API } from "config";
import { color } from "styles/color";

const Cart = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(CART_API, {
  //     method: "GET",
  //     headers: {
  //       Authorization: localStorage.getItem("user_token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setProducts(res.products_list);
  //     });
  // }, []);

  const handleFetchPlus = (product) => {
    fetch(CART_API, {
      method: "PUT",
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id"),
        product_id: product.product_id,
        quantity: product.quantity + 1,
      }),
      headers: {
        Authorization: localStorage.getItem("user_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const handleFetchMinus = (product) => {
    fetch(CART_API, {
      method: "PUT",
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id"),
        product_id: product.product_id,
        quantity: product.quantity - 1,
      }),
      headers: {
        Authorization: localStorage.getItem("user_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const handleFetchChecked = (product) => {
    fetch(CART_CHECK_API, {
      method: "PUT",
      body: JSON.stringify({
        product_id: product.product_id,
        quantity: product.quantity,
        checked: !product.checked,
      }),
      headers: {
        Authorization: localStorage.getItem("user_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const handleFetchEmpty = () => {
    fetch(CART_EMPTY_API, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("user_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const handleAdd = (productId) => {
    const addQty = products.map((product) => {
      if (productId === product.product_id && product.quantity < 5) {
        return { ...product, quantity: product.quantity + 1 };
      } else return product;
    });
    setProducts(addQty);
  };

  const handleSubstract = (productId) => {
    const substractQty = products.map((product) => {
      if (productId === product.product_id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      } else return product;
    });
    setProducts(substractQty);
  };

  const handleChecked = (productId) => {
    const changeChecked = products.map((product) => {
      if (productId === product.product_id) {
        return { ...product, checked: !product.checked };
      } else return product;
    });
    setProducts(changeChecked);
  };

  const handleEmpty = () => {
    if (products.length > 0 && window.confirm("장바구니를 비우시겠습니까?")) {
      setProducts([]);
    } else return;
  };

  return (
    //*  */
    //   <>
    //     <Header
    //       products={products}
    //       handleEmpty={handleEmpty}
    //       handleFetchEmpty={handleFetchEmpty}
    //     />
    //     {products.length > 0 ? (
    <Content
      //         products={products}
      //         handleAdd={handleAdd}
      //         handleSubstract={handleSubstract}
      //         handleChecked={handleChecked}
      handleFetchPlus={handleFetchPlus}
      handleFetchMinus={handleFetchMinus}
      //         handleFetchChecked={handleFetchChecked}
      //         handleFetchEmpty={handleFetchEmpty}
    />
    //     ) : (
    //       <EmptyContent />
    //     )}

    //<Footer>ⓒ Overdose Inc. All Rights Reserved.</Footer>
    //   </>
  );
};

const Footer = styled.p`
  margin: 50px;
  text-align: center;
  color: ${color.GRAY};
  font-size: 13px;
`;

export default Cart;
