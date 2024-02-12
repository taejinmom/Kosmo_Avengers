import React, { useState } from "react";
import checkItemHandler from "../../pages/cart/MyCart";
export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  const checkHandled = ({ target }) => {
    setChecked(!checked);
    checkItemHandler(target.id, target.checked);
  };

  //   return (
  // <label>
  //   <input
  //     id={pdct_no}
  //     type="checkbox"
  //     checked={bChecked}
  //     onChange={(e) => checkHandled(e)}
  //   />
  //   {text}
  // </label>
  //   )
}
