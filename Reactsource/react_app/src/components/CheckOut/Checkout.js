import React from "react";
import ReactDOM from "react-dom";
import classes from "./CheckOut.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const checkoutRoot = document.getElementById("checkout-root");
const Checkout = (props) => {
  //  关闭结算页面函数：

  return ReactDOM.createPortal(
    <div className={classes.checkout}>
      <FontAwesomeIcon
        icon={faXmark}
        onClick={() => {
          props.onHide();
        }}
        className={classes.icon_close}
      ></FontAwesomeIcon>
      <div className={classes.body}>
        <header className={classes.header}>
          <h2 className={classes.title}>餐品详情</h2>
        </header>
        <div className={classes.list}>结算列表</div>
        <footer>
          <span>合计￥</span>
          <p>89</p>
        </footer>
      </div>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
