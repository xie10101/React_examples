/*
食物单个组件
*/
import myImage from "./img/4.jpg";
import classes from "./Meal.module.css";
import Counter from "../Counter/Counter";
const Meal = () => {
  return (
    <div className={classes.Meal}>
      <div>
        <img className={classes.img} alt="hanbao1" src={myImage}></img>
      </div>
      <div style={{ margin: "0", padding: "0" }}>
        <h2 className={classes.name}>汉堡包</h2>
        <p className={classes.p1}>
          百分百纯牛肉无添加任何防腐剂天然无bakery<br></br> 天然无bakery
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className={classes.price}>￥12</span>
          <Counter style={{ float: "right" }} amount={3}></Counter>
        </div>
      </div>
    </div>
  );
};

export default Meal;
