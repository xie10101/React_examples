import "./App.css";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartContext from "./store/cart-context";
import Filter from "./components/Filter/filter";
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
    id: "2",
    title: "香辣汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 22,
    img: "./img/2.png",
  },
  {
    id: "2",
    title: "香辣汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 22,
    img: "./img/2.png",
  },
  {
    id: "2",
    title: "香辣汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 22,
    img: "./img/2.png",
  },
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
    id: "4",
    title: "美味汉堡包",
    desc: "百分百纯牛肉搭配脆爽黄瓜片洋葱粒与美味番茄酱经典滋味无与伦比",
    price: 25,
    img: "./img/4.jpg",
  },
];

function App() {
  // 响应式-mealdata数据
  const [mealsData, setMealData] = useState(MEALS_Data);

  //设置购物车清单数据：
  /*
 1. 商品数组：
 2. 商品总数
 2. 商品总价
 */
  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  //购物车添加商品的回调：
  const addItem = (meal) => {
    //先将已有数据进行浅复制：
    const newCart = { ...cartData };

    //向数据中进行添加
    //1.先看商品是否存在
    if (newCart.items.indexOf(meal) === -1) {
      //向购物车中添加商品：
      newCart.items.push(meal);
      //添加时数量加1：--此时将
      meal.amount = 1;
    } else {
      meal.amount += 1;
    }
    //增加总数：
    newCart.totalAmount += 1;
    //增加总价：
    newCart.totalPrice += meal.price;

    setCartData(newCart);
  };
  //减少商品数量：
  const removeItem = (meal) => {
    //复制：
    const newCart = { ...cartData };
    //减少商品数量：
    meal.amount -= 1;
    //检查商品数量是否为0 为0 将其在购物车中去除
    if (meal.amount === 0) {
      //从购物车中移除商品
      // 使用filter函数：
      newCart.items = newCart.items.filter((item) => meal !== item);
    }
    //减少总数：
    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;
    setCartData(newCart);
  };
  // 函数与属性一样需要使用相同的方法名进行替换

  // 搜索框的实现:1.存在输入内容 2.不存在输入内容

  const searchMeal = (searchText) => {
    // 搜索框输入的内容：
    if (searchText.trim().length === 0) {
      setMealData(MEALS_Data);
    } else {
      // 搜索框输入的内容不为空：
      const newMeals = MEALS_Data.filter((meal) => meal.title === searchText);
      setMealData(newMeals);
    }
  };

  return (
    <>
      <CartContext.Provider value={{ ...cartData, addItem, removeItem }}>
        <Filter onSearch={searchMeal}></Filter>
        <Meals mealsData={mealsData}></Meals>
      </CartContext.Provider>
    </>
  );
}

export default App;
