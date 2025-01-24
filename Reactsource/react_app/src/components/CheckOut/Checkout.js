import React from "react";
import ReactDOM from "react-dom";
import classes from "./CheckOut.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CheckOutItem from "./CheckOutItem/CheckOutItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Bar from "./Bar/Bar";
const checkoutRoot = document.getElementById("checkout-root");
const Checkout = (props) => {
  //  关闭结算页面函数：
  const ctx = useContext(CartContext);
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
        <div className={classes.list}>
          {ctx.items.map((item) => (
            <CheckOutItem key={item.id} meal={item}></CheckOutItem>
          ))}
        </div>
        <footer>
          <span>合计￥</span>
          <p>{ctx.totalPrice}</p>
        </footer>
      </div>
      <Bar></Bar>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
