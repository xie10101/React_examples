//日志的容器：
import MyDate from "./Mydate/MyDate";
import "./logItem.css"
import{useState} from "react";
import ConfirmModel from "../../UI/confirmModel/confirmModel";
const LogItem=(props)=>{
    const [showConfirm,setShowConfirm]=useState(false);
    const day=props.date.toLocaleDateString("en-US",{day:"2-digit"})
const month=props.date.toLocaleDateString("zh-CN",{month:"long"})
const logDelete=()=>{
    //设置浏览器提示框
   setShowConfirm(true)
}
    //设置取消按钮回调：

const Cancel=()=>{
    setShowConfirm(false)
}
    //设置确认按钮回调：
const Confirm=()=>{
   props.DeleteFun();
}

    return (
    <div className='item'>
        { showConfirm && <ConfirmModel onCancel={Cancel} onConfirm={Confirm} ></ConfirmModel>}
        <MyDate  day={day} month={month}></MyDate>
        <div className="task">
            <h2 className="desc">学习{props.desc}</h2>
            <p className='time'>{props.time}分钟</p>
        </div>
        <div type="Delete" className="delete" onClick={logDelete}>
            X
        </div>

    </div>
    )
}

export default LogItem;//代表的是