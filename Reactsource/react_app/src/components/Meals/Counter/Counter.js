import classes from "./Counter.module.css";
const Counter = (props) => {
  return (
    <div className={classes.Counter}>
      {
        // 这是 React 中最常见的方式，它类似于 Vue 中 v-if 的简洁语法。
        // 短路前将props.amount作为返回值返回 0
        props.amount && props.amount > 0 ? (
          <>
            <button className={classes.buttonless}>
              <span>—</span>
            </button>
            <div className={classes.num}>{props.amount}</div>
          </>
        ) : null
      }
      {/* 减少按钮与 数量显示应在存在商品数量时显示 */}

      <button className={classes.buttonadd}>+</button>
    </div>
  );
};

export default Counter;
