import classes from "./Counter.module.css";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const Counter = (props) => {
  //添加购物车函数
  const addButtonHandler = () => {
    ctx.addItem(props.mealData);
  };

  const resButtonHandler = () => {
    ctx.removeItem(props.mealData);
  };

  const ctx = useContext(CartContext);
  return (
    <div className={classes.Counter}>
      {
        // 这是 React 中最常见的方式，它类似于 Vue 中 v-if 的简洁语法。
        // 短路前将props.amount作为返回值返回 0
        props.mealData.amount && props.mealData.amount > 0 ? (
          <>
            <button className={classes.buttonless} onClick={resButtonHandler}>
              <span>—</span>
            </button>
            <div className={classes.num}>{props.mealData.amount}</div>
          </>
        ) : null
      }
      {/* 减少按钮与 数量显示应在存在商品数量时显示 */}
      {/* 购物车添加 */}
      <button onClick={addButtonHandler} className={classes.buttonadd}>
        +
      </button>
    </div>
  );
};

export default Counter;
