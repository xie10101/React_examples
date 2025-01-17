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
      <div className={classes.b1}>
        <h2 className={classes.name}>{props.mealData.title}</h2>
        {props.noDesc ? null : (
          <p className={classes.p1}>{props.mealData.desc}</p>
        )}
        <div className={classes.c1}>
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
