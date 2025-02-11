// 使用redux进行状态管理：
import { createSlice } from "@reduxjs/toolkit";

 const authSlice= createSlice(
  /* 
  如何做持久化处理：
  1.登录时响应数据持久化
  2.状态仓库中数据从本地取 
  */
    
    {
       name: 'auths',
       initialState:()=>{
         if(!localStorage.getItem("token")){
            return {
            isLogged:false,
            token:"",
            user:null}
        }else{
            return {
                isLogged:true,
                token:JSON.parse(localStorage.getItem("token")),
                user:localStorage.getItem("user"),
                expirationTime:0
            }
        }

       },
       reducers:{
        login(state,action) //state为原始state状态对象 action为dispatch传入参数对象
        {
            state.isLogged=true;
            state.token=action.payload.token
            state.user=action.payload.user
            //获取当前的时间戳：
            // const currentTime=new Date().getTime();
            const currentTime=Date.now();
            const timeout= 1000*60*60*24*7;//设置一周过期时间
            state.expirationTime=currentTime+timeout;
            // 设置失效时间

            localStorage.setItem("token",action.payload.token)
            localStorage.setItem("user",JSON.stringify(action.payload.user))
            localStorage.setItem("expirationTime",state.expirationTime+"");
        },
        logout(state,action)  //主要执行对状态仓库中状态的设置-处理
        {
            Object.assign(state,{
                isLogged:false,
                token:"",
                user:null
            })
            // 退出登录时将localStorage中的token和user删除
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
       }
    }
)
export default authSlice;///？？  
// 传递的为整个切片对象
export const {login,logout} = authSlice.actions;