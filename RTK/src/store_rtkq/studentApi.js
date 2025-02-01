import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//创建Api对象：
const studentApi = createApi({
  reducerPath: "stuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "haxx",
  }),
  endpoints(build) {
    return {
      //操作名称   //请求类别
      getStudents: build.query(
        //单次查询的信息配置
        {
          query() {
            //用来指定请求的子路径：
            return "students"; //子路径
          },
        }
      ),
      // getStudentById: build.query({}),
      // updateStudent: build.mutation({}),
    };
  },
});

//Api对象创建后，对象中会根据各种方
// 法自动生成对应的钩子函数；

//钩子函数的命名规则： getStudents--> useGetStudentsQuery
export const { useGetStudentsQuery } = studentApi; //根据命名规则解构出钩子函数；

export default studentApi;

//两种选择：
// 1. 统一存储于仓库 进行统一管理
// 2. 单独使用
