/*
食物单个组件
*/

import classes from "./Meal.module.css";
import Counter from "../Counter/Counter";
const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div>
        <img
          className={classes.img}
          alt="hanbao1"
          src={props.mealData.img}
        ></img>
      </div>
      <div style={{ margin: "0", padding: "0" }}>
        <h2 className={classes.name}>{props.mealData.title}</h2>
        <p className={classes.p1}>{props.mealData.desc}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className={classes.price}>￥{props.mealData.price}</span>
          <Counter
            style={{ float: "right" }}
            mealData={props.mealData}
          ></Counter>
        </div>
      </div>
    </div>
  );
};

export default Meal;
