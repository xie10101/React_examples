import { configureStore } from "@reduxjs/toolkit";
import studentApi from "./studentApi";

const store = configureStore({
  // 派发器集合
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
  },
  //middleware：中间件配置：
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(studentApi.middleware),
//作用： 使得缓存生效？
});

export default store;
