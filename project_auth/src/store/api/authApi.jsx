// rtkq使用回顾：
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi =createApi(
    {  
        reducerPath:"authApi",//api切片名
        baseQuery:fetchBaseQuery(
            {
                baseUrl:"###"
                // 一般使用在env文件中

            }
        ),endpoints(build){
            return {
                // 构建器创建方法--POST/MUTATION --GET/QUERY 
                register:build.mutation(
                    {
                        query(user)
                        {
                            return {
                                url:"auth/local/register",
                                method:"POST",
                                body:{
                                    // 注册表单数据
                                    user
                                }
                            }
                        }
                    }),
                login:build.mutation(
                    {
                        query(user)
                        {
                         return{
                            url:"auth/local", //api路径
                            method:"POST",    //请求方式
                            body:user   //identifier-代表可以传递 用户名或者邮箱
                            }
                        }
                    }
                )
            }
        }
    }
);                      //register
export const {useRegisterMutation,useLoginMutation} = authApi;



