import React, { useState , useEffect} from "react";

import "./CategoryFilter.css";
import NoticeList from "./NoticeList";

const LS_KEY_CATEGORY = "LS_KEY_CATEGORY";

const categories = [
  {
    name : "전체",
    value : "0"
  },
  {
    name : "공지사항",
    value : "1"
  },
  {
    name : "이벤트",
    value : "2"
  },
  {
    name : "자주하는 질문(FAQ)",
    value : "3"
  },
];

const NoticeCategory = () => {
 
  const [category, setCatecory] = useState("0");

  const makeCategories = () => {
    if (categories.length === 0) return;

    return categories.map((item, idx) => (
      <div
        key={idx}
        className={
          item.value === category ? "category-child selected" : "category-child"
        }
        onClick={() => {
          console.log(">>> item.value:"+item.value);
          setCatecory(item.value);
          localStorage.setItem(LS_KEY_CATEGORY, item.value);
        }}
      >
        {item.name}
      </div>
    ));
  };

  const init = () => {
    let data = localStorage.getItem(LS_KEY_CATEGORY);
    if (data !== null) setCatecory(data);
  };

  useEffect(init, []);

  return (
    <div>
      <div>Category</div>
      <div className="category-set">{makeCategories()}</div>
      <br/>
      <NoticeList ntc_cate={category}/>
    </div>
  );
};

export default NoticeCategory;