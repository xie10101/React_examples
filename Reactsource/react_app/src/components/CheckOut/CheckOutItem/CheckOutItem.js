import classes from "./CheckOutItem.module.css";
import Counter from "../../Meals/Counter/Counter";
const CheckOutItem = (props) => {
  return (
    <div className={classes.checkoutitem}>
      <div className={classes.img}>
        <img src={props.meal.img} alt="hanbao"></img>
      </div>
      <div className={classes.desc}>
        <h2>{props.meal.title}</h2>
        <div className={classes.setting}>
          <Counter mealData={props.meal}></Counter>
          <div className={classes.price}>
            {props.meal.price * props.meal.amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
