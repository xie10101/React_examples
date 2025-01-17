import React from "react";
import classes from "./BackDrop.module.css";
import ReactDOM from "react-dom";
const BackDrop = (props) => {
  const backdropRoot = document.getElementById("backdrop-root");
  return ReactDOM.createPortal(
    <div {...props} className={`${classes.backdrop} ${props.className}`}>
      {props.children}
    </div>,
    backdropRoot
  );
};

export default BackDrop;
