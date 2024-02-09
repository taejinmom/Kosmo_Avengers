import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    increaseCount(state, action) {
      //state[action.payload].count += 1; // 정렬 시 문제 발생
      let num = state.findIndex((obj) => {
        return obj.id === action.payload;
      });
      console.log(num);
      state[num].count += 1;
    },
    decreaseCount(state, action) {
      //state[action.payload].count += 1; // 정렬 시 문제 발생
      let num = state.findIndex((obj) => {
        return obj.id === action.payload;
      });
      console.log(num);
      state[num].count -= 1;
    },
    // insertItem(state, action) {
    //   console.log("state, action ::", state, action);
    //   let num = state.findIndex((obj) => {
    //     return obj.id === action.payload.id;
    //   });
    //   if (num === -1) {
    //     state.push(action.payload);
    //   } else {
    //     state[num].count += action.payload.count;
    //   }
    // },

    insertItem(pdct_no, pdct_price, count) {
      console.log("pdct_no, pdct_price, count ::", pdct_no, pdct_price, count);
    },
    deleteItem(state, action) {
      let num = state.findIndex((obj) => {
        return obj.id === action.payload;
      });
      state.splice(num, 1);
    },
    checkedChange(state, action) {
      let num = state.findIndex((obj) => {
        return obj.id === action.payload;
      });
      state[num].checked = !state[num].checked;
    },
    allCheckedTrue(state, action) {
      state.forEach((obj) => {
        obj.checked = true;
      });
    },
    allCheckedFalse(state, action) {
      state.forEach((obj) => {
        obj.checked = false;
      });
    },
  },
});

export let {
  increaseCount,
  decreaseCount,
  insertItem,
  deleteItem,
  checkedChange,
  allCheckedTrue,
  allCheckedFalse,
} = cart.actions;

export default cart;
