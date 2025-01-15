/*
食物列表组件
*/
import React from "react";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";
const Meals = (props) => {
  return (
    <div className={classes.Meals}>
      {/* jsx/js语法部分使用{}进行包裹  */}
      {
     props.mealsData.map(item => <Meal  key={item.id} mealData={item} ></Meal>)
      }
     </div>
  )
};

export default Meals;
