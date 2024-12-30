import React from "react";
import ReactDOM from "react-dom";
import "./BackDrop.css";
const backdropRoot = document.getElementById("backdrop_root");
const BackDrop = (props) => {
  //获取backDrop的根元素：
  return ReactDOM.createPortal(
    <div className="BackDrop">{props.children}</div>,
    backdropRoot
  );
};
export default BackDrop;
