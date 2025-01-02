import LogItem from "./logItem/logitem.js";
import "./log.css";
import Card from "../UI/card/Card.js";
import LogFilter from "./LogFilter/LogFilter.js";
import { useState } from "react";
const Logs = (props) => {
  //将年份设置为state变量：
  const [year, setYear] = useState(2021);
  //设置过滤后的数据：
  let filterData = props.logsData.filter(
    (item) => item.date.getFullYear() === year
  );

  //仅执行一次 ---对过滤后的数据进行map处理
  let loglist = filterData.map((item) => {
    // item
    return (
      <LogItem
        DeleteFun={() => props.DeleteFun(item.id)}
        {...item}
        key={item.id}
      ></LogItem>
    );
  });

  //创建修改年份的函数：
  const changeYearHandler = (year) => {
    setYear(Number(year));
  };

  if (props.logsData.length === 0) {
    filterData = <p>没有找到该日志</p>;
  }
  return (
    <Card className="logs">
      {/* 不应将set函数传给子组件 */}
      <LogFilter year={year} onYearChange={changeYearHandler}></LogFilter>
      {loglist}
    </Card>
  );
};
export default Logs;
