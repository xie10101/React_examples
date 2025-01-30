import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setAge } from "./store";
function App() {
  //useSelector()用来加载state中的数据
  //此时state代表的是store中的state值
  const stu = useSelector((state) => state.stu);
  const dispatch = useDispatch();
    const btnHandler = () => {
      dispatch(setName("huhu"));
    };
//   const btnHandler = () => {
//     dispatch(setAge());
//   };
  return (
    <>
      <div>123</div>
      <p>{stu.name}</p>
      <button onClick={btnHandler}>点击</button>
      <p>{stu.age}</p>
    </>
  );
}
export default App;
