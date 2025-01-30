import { createSlice } from "@reduxjs/toolkit";
//使用RTK来构建store
//createSlice 创建reducer的切片
const schSlice = createSlice({
  name: "school", //用来自动生成action中的type
  initialState: {
    name: "猪八戒",
    age: 18,
    gender: "男",
  },
  reducers: {
    //创建执行方法：
    setName(state, action) {
      //可以通过不同的方法
      //来指定对state的不同操作
      //两个参数：state 这个state是一个代理对象（不再需要浅拷贝，可以直接进行修改）
      //payload 属性为传入数据值
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = schSlice.actions;
//对执行函数的直接使用： --省略type参数设置
export const { reducer: schReducer } = schSlice;
