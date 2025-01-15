import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import filter_class from "./filter.module.css";
const Filter = (props) => {
  //输入框搜索回调：
  const onSearch = (e) => {
    props.onSearch(e.target.value);
  };
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
            onChange={onSearch}
            className={filter_class.Meals_input}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Filter;
