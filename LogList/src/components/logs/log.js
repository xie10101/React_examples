import LogItem from "./logItem/logitem.js";
import "./log.css"
import Card from "../UI/card/Card.js";

const logs=(props)=>{

    //仅执行一次
let loglist=props.logsData.map((item,index)=>{return <LogItem DeleteFun={()=>props.DeleteFun(index)} {...item} key={item.id}   ></LogItem>})
if(props.logsData.length===0)
{
    loglist=<p>没有找到该日志</p>
}
return  <Card className="logs">

         {loglist}  
        </Card>
}
export default logs;