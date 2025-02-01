import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setName } from "./store/stuReducer";
// import Next from "./next";
import { useGetStudentsQuery } from "./store_rtkq/studentApi";
function App() {
  //useSelector()用来加载state中的数据
  //此时state代表的是store中的state值
  // const stu = useSelector((state) => state.stu);
  // const dispatch = useDispatch();
  // const btnHandler = () => {
  //   dispatch(setName("huhu"));
  // };

  /*
reduxQuery 进行查询
钩子函数它会返回一个对象作为返回
值，请求过程中相关的数据都在该对象中存储
*/

  //调用Api查询数据：
  const { data, isSuccess, isLoading } = useGetStudentsQuery(); //调用Api中的钩子函数
  // console.log(obj);
  /*
  const { data } = useGetStudentsQuery(); //调用Api中的钩子函数
  会报错,响应是异步的，此处的赋值是同步执行-渲染时数据为空报错；
  1.添加isSuccess：
  const { data，isSuccess} = useGetStudentsQuery(); //调用Api中的钩子函数
  */
  /* 异步响应成功时会进行重新赋值；
 isSuccess&& data.data.map(item=><p key={item.id}></p>)
   2.isLoading用于设置加载提示
 */

  return (
    <>
      <div>123</div>
      {/* <p>{stu.name}</p>
      <button onClick={btnHandler}>点击</button>
      <p>{stu.age}</p> */}
      {/* <Next></Next> */}
    </>
  );
}
export default App;
