import React, { useState } from "react";
// import CartItem from "../components/CartItem";
// import OrderSummary from "../components/OrderSummary";

// handleDelete는 onDelete로, handleQuantityChange는 onQuantityChange로 받기
export default function Cart({
  items,
  cartItems,
  handleDelete: onDelete,
  handleQuantityChange: onQuantityChange,
}) {
  const [checkedItems, setCheckedItems] = useState(
    cartItems.map((el) => el.itemId)
  );

  const handleCheckChange = (checked, id) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckedItems(cartItems.map((el) => el.itemId));
    } else {
      setCheckedItems([]);
    }
  };

  // props로 받은 onQuantityChange를 함수 안에서 실행하기
  const handleQuantityChange = (quantity, itemId) => {
    onQuantityChange(itemId, quantity);
  };

  // props로 받은 onDelete를 함수 안에서 실행하기
  const handleDelete = (itemId) => {
    setCheckedItems(checkedItems.filter((el) => el !== itemId));
    onDelete(itemId);
  };

  const getTotal = () => {
    let cartIdArr = cartItems.map((el) => el.itemId);
    let total = {
      price: 0,
      quantity: 0,
    };
    for (let i = 0; i < cartIdArr.length; i++) {
      if (checkedItems.indexOf(cartIdArr[i]) > -1) {
        let quantity = cartItems[i].quantity;
        let price = items.filter((el) => el.id === cartItems[i].itemId)[0]
          .price;

        total.price = total.price + quantity * price;
        total.quantity = total.quantity + quantity;
      }
    }
    return total;
  };

  const renderItems = items.filter(
    (el) => cartItems.map((el) => el.itemId).indexOf(el.id) > -1
  );
  const total = getTotal();

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">장바구니</div>
        <span id="shopping-cart-select-all">
          <input
            type="checkbox"
            checked={checkedItems.length === cartItems.length ? true : false}
            onChange={(e) => handleAllCheck(e.target.checked)}
          ></input>
          <label>전체선택</label>
        </span>
        <div id="shopping-cart-container">
          {!cartItems.length ? (
            <div id="item-list-text">장바구니에 아이템이 없습니다.</div>
          ) : (
            <div id="cart-item-list">
              {renderItems.map((item, idx) => {
                const quantity = cartItems.filter(
                  (el) => el.itemId === item.id
                )[0].quantity;
                return (
                  <CartItem
                    key={idx}
                    handleCheckChange={handleCheckChange}
                    handleQuantityChange={handleQuantityChange}
                    handleDelete={handleDelete}
                    item={item}
                    checkedItems={checkedItems}
                    quantity={quantity}
                  />
                );
              })}
            </div>
          )}
          <OrderSummary total={total.price} totalQty={total.quantity} />
        </div>
      </div>
    </div>
  );
}
