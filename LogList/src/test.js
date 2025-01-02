import Logs from "./components/logs/log";
import LogsForm from "./components/LogsForm/LogsForm";
import React from "react";
import { useState } from "react";
import "./App.css";

function Test() {
  const [logsData, setLogsData] = useState([
    {
      id: 1,
      date: new Date("2022-01-02"),
      time: 30,
      desc: "前端",
    },
    {
      id: 2,
      date: new Date("2022-01-01"),
      time: 40,
      desc: "中端",
    },
    {
      id: 3,
      date: new Date("2023-01-04"),
      time: 50,
      desc: "后端",
    },
  ]);

  //定义一个添加函数：
  const saveLogHandler = (newLog) => {
    //对id的添加应该在数据最初存放时添加
    newLog.id = Date.now() + ""; //以事件戳作为id
    console.log("App.js-->", newLog);
    // setLogsData((preLogsData)=>{
    //     return [newLog,...preLogsData]
    // })
    setLogsData([newLog, ...logsData]);
  };

  //定义一个删除函数：--以id作为删除标准?//以index作为删除标准
  const deleteLogHandler = (id) => {
    // setLogsData((preLogsData) => {
    //   //splice是破坏型的方法--浅复制一个数组作为操作对象
    //   let newLogs = [...preLogsData];
    //   newLogs.splice(index, 1); //返回值是啥？--被删除的对象？
    //   return newLogs;
    // });
    //
    setLogsData((preLogsData) => {
      return preLogsData.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="app">
      <LogsForm saveLogHandler={saveLogHandler}></LogsForm>
      <Logs logsData={logsData} DeleteFun={deleteLogHandler}></Logs>
    </div>
  );
}
export default Test;
