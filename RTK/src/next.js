import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setAge } from "./store/schoolReducer";
function Next() {
  //useSelector()用来加载state中的数据
  //此时state代表的是store中的state值
  const sch = useSelector((state) => state.sch);
  const dispatch = useDispatch();
  const btnHandler1 = () => {
    dispatch(setName("long"));
  };
  const btnHandler2 = () => {
    dispatch(setAge(22));
  };
  return (
    <>
      <p>{sch.name}</p>
      <button onClick={btnHandler1}>点击1</button>
      <p>{sch.age}</p>
      <button onClick={btnHandler2}>点击2</button>
    </>
  );
}
export default Next;
