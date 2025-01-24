import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import filter_class from "./filter.module.css";
const Filter = (props) => {
  /*
  // 输入框搜索回调：
  //keyword的双向绑定
  //特别注意要将初始值设为""否则会出现类型报错
  */

  const [keyword, setkeyword] = useState("");

  // react中函数是封闭的
  // useEffect(() => {
  //   props.onSearch(keyword);
  // }, [keyword]);
  const onsearch = (e) => setkeyword(e.target.value.trim());
  // 防止空格输入

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("搜索了");
      props.onSearch(keyword);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return (
    <div>
      <div className={filter_class.filter}>
        <div className={filter_class.container}>
          <FontAwesomeIcon
            className={filter_class.icon_Search}
            icon={faSearch}
          ></FontAwesomeIcon>
          <input
            type="text"
            placeholder="请输入关键字"
            value={keyword}
            onChange={onsearch}
            className={filter_class.Meals_input}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Filter;
