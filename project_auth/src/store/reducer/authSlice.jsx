// 使用redux进行状态管理：
import { createSlice } from "@reduxjs/toolkit";

 const authSlice= createSlice(
    
    {
       name: 'auths',
       initialState:{
        isLogged:false,
        token:"",
        user:null
       },
       reducers:{
        login(state,action) //state为原始state状态对象 action为dispatch传入参数对象
        {
            state.isLogged=true;
            state.token=action.payload.token
            state.user=action.payload.user
            console.log(
                123
            )
        },
        logout(state,action)
        {
            Object.assign(state,{
                isLogged:false,
                token:"",
                user:null
            })
        }
       }
    }
)
export default authSlice;///？？  
// 传递的为整个切片对象
export const {login,logout} = authSlice.actions;