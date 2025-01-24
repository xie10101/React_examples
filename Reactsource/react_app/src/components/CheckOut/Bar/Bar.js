import classes from "./Bar.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const Bar = () => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.Cart}>
      <p className={classes.totalPrice}>合计￥{ctx.totalPrice}</p>
      <button
        className={`${classes.button} ${
          ctx.totalAmount === 0 ? classes.disable : null
        }`}
      >
        去支付{" "}
      </button>
    </div>
  );
};

export default Bar;
