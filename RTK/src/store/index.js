import { configureStore } from "@reduxjs/toolkit";
import { stuReducer } from "./stuReducer";
import { schReducer } from "./schoolReducer";
//通过切片创建store：
const store = configureStore({
  reducer: {
    stu: stuReducer,
    //此处的值属性名代表的是读取state
    // 时state的属性名
    sch: schReducer,
  },
});

export default store;
