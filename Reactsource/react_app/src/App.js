import "./App.css";
import Meals from "./components/Meals/Meals";
import { useReducer, useState } from "react";
import CartContext from "./store/cart-context";
import Filter from "./components/Filter/filter";
import Cart from "./components/Cart/Cart";

//初始的食物数据使用常量保存：
const MEALS_Data = [
  {
    id: "2",
    title: "香辣汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 22,
    img: "./img/2.png",
  },
  {
    id: "3",
    title: "至尊汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 32,
    img: "./img/3.png",
  },
  {
    id: "5",
    title: "至尊汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 32,
    img: "./img/3.png",
  },
  {
    id: "6",
    title: "至尊汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 32,
    img: "./img/3.png",
  },
  {
    id: "4",
    title: "美味汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 25,
    img: "./img/4.jpg",
  },
  {
    id: "7",
    title: "美味汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 25,
    img: "./img/4.jpg",
  },
];
//设置购物车清单数据：
/*
1. 商品数组：
2. 商品总数
2. 商品总价
*/
// 定义
const cartReducer = (state, action) => {
  //进行购物车的浅赋值：
  const newCart = { ...state };
  switch (action.type) {
    case "AddCart":
      // meal需要从dispatch进行传入
      if (newCart.items.indexOf(action.meal) === -1) {
        //向购物车中添加商品：
        newCart.items.push(action.meal);
        //添加时数量加1：--此时将
        action.meal.amount = 1;
      } else {
        action.meal.amount += 1;
        console.log(action.meal.amount);
      }
      //增加总数：
      newCart.totalAmount += 1;
      //增加总价：
      newCart.totalPrice += action.meal.price;
      return newCart;
    case "RemoveCart":
      action.meal.amount -= 1;
      //检查商品数量是否为0 为0 将其在购物车中去除
      if (action.meal.amount === 0) {
        //从购物车中移除商品
        // 使用filter函数：
        newCart.items = newCart.items.filter((item) => action.meal !== item);
      }
      //减少总数：
      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.meal.price;
      return newCart;
    case "ClearCart":
      newCart.items.forEach((item) => delete item.amount);
      newCart.items = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;
    default:
      return state;
  }
};

function App() {
  // 响应式-mealdata数据
  const [mealsData, setMealsData] = useState(MEALS_Data);
  const [cartData, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });
  // 函数与属性一样需要使用相同的方法名进行替换

  // 搜索框的实现:1.存在输入内容 2.不存在输入内容

  const searchMeal = (searchText) => {
    // 搜索框输入的内容：
    if (searchText.length === 0) {
      setMealsData(MEALS_Data);
    } else {
      // 搜索框输入的内容不为空：
      const newMeals = MEALS_Data.filter((meal) =>
        meal.title.includes(searchText)
      );
      setMealsData(newMeals);
    }
  };

  return (
    <>
      <CartContext.Provider value={{ ...cartData, cartDispatch }}>
        <Filter onSearch={searchMeal}></Filter>
        <Meals mealsData={mealsData}></Meals>
        <Cart></Cart>
      </CartContext.Provider>
    </>
  );
}

export default App;
