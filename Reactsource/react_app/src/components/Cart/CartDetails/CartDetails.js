import BackDrop from "../../UI/Backdrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./cartdetails.module.css";
import CartContext from "../../../store/cart-context";
import { useContext, useState } from "react";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";
const CartDetails = (props) => {
  const cartCtx = useContext(CartContext);
  //state--confirm的显示与隐藏：
  const [showConfirm, setShowConfirm] = useState(false);
  //点击显示
  const showConfirmHandler = () => {
    setShowConfirm(true);
  };
  //设置点击处理函数：
  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };
  const okHandler = () => {
    //特别注意：
    cartCtx.clearCart();
    props.onShow();
  };

  return (
    <BackDrop onClick={cancelHandler}>
      {showConfirm && (
        <Confirm
          onCancel={cancelHandler}
          onOk={okHandler}
          confirmText={"请确定是否要清空购物车"}
        ></Confirm>
      )}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.header}>
          <h1 className={classes.title}>餐品详情</h1>
          <div onClick={showConfirmHandler} className={classes.clear}>
            <FontAwesomeIcon className={classes.icon_trash} icon={faTrash} />
            <span>清空购物车</span>
          </div>
        </header>
        <div className={classes.mealList}>
          {cartCtx.items.map((item) => (
            <Meal key={item.id} noDesc mealData={item}></Meal>
          ))}
        </div>
      </div>
    </BackDrop>
  );
};

export default CartDetails;
