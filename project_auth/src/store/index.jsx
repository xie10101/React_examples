//rtkq主仓库
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import  authSlice from "./reducer/authSlice"
const store = configureStore(
    {
        reducer:{
            // 注册reducer
            [authApi.reducerPath]:authApi.reducer,
            auth:authSlice.reducer
        },
        // 中间件配置--缓存设置
        middleware:(getDefaultMiddleware)=>{
            return getDefaultMiddleware().concat(authApi.middleware)
        }
    }
)
// 设置 RTK Query 的监听器
setupListeners(store.dispatch);
export default store;