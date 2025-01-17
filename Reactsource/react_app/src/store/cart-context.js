//context相当于一个公共的存储空间--等价于vue中的store（状态管理仓库）
/*
1. 主要学习设置方式--存放方式--拿去使用方式
2. 需要注意的事项
*/
import React from "react";

//使用React.createContext方法进行创建参数是一个对象
//返回值为参数值对象

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
