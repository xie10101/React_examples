import React, { useEffect } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "../CheckOut/Checkout";
const Cart = () => {
  const ctx = useContext(CartContext);
  const [isListShow, setListShow] = useState(false);
  //使用 useEffect修改清除列表的自动关闭：

  // 存在事件的冒泡--父组件绑定点击事件组件也可以响应
  // 展示购物车商品列表回调
  const showListHandler = () => {
    if (ctx.items.length > 0) {
      if (!isListShow) {
        setListShow(true);
      } else {
        setListShow(false);
      }
    } else {
      setListShow(false);
      return;
    }
  };
  const [isShowCheckOut, setShowCheckOut] = useState(false);
  //打开结算页面回调
  const showCheckOutHandler = () => {
    if (ctx.totalAmount === 0) {
      return;
    } else {
      setShowCheckOut(true);
    }
  };
  // 设置关闭结算页面回调：
  const closeCheckOutHandler = () => {
    setShowCheckOut(false);
  };
  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setListShow(false);
      setShowCheckOut(false);
    }
  }, [ctx.totalAmount]);
  //第二个参数可以设置变化参数，当参数发生变化时该useEffect才执行
  // 通常会将函数中使用到的所有变量设置为变化参数

  return (
    <>
      {isShowCheckOut ? (
        <Checkout onHide={closeCheckOutHandler}></Checkout>
      ) : null}
      <div onClick={showListHandler}>
        {isListShow ? (
          <CartDetails onShow={showListHandler}></CartDetails>
        ) : null}
        <div className={classes.Cart}>
          <div className={classes.img}>
            <img alt="购物带图标"></img>
            {ctx.totalAmount === 0 ? null : (
              <span className={classes.totalAmount}>{ctx.totalAmount}</span>
            )}
          </div>
          {ctx.totalAmount === 0 ? (
            <p className={classes.noMeal}>未选购商品</p>
          ) : (
            <p className={classes.totalPrice}>￥{ctx.totalPrice}</p>
          )}

          <button
            onClick={showCheckOutHandler}
            className={`${classes.button} ${
              ctx.totalAmount === 0 ? classes.disable : null
            }`}
          >
            去结算{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
