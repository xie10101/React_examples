import Card from "../UI/card/Card.js";
import "./LogForm.css";
import {useState} from 'react';
const  LogsForm= (props) => {

//对于表单项数据的获取：

/*
当表单项发生变化时，获取用户输入的内容：
1. 可以创建一个响应函数，监听表单项的变化
2. 通过onChange属性绑定到表单项上

获取内容的方式
1. ref 获取
2. 原生dom获取
3. 通过事件对象获取---方便
*/


/*
创建一个响应函数监听表单项的变化：
*/
// let inputDate='';
// let inputDesc='';
// let inputTime=0;

// const [inputDate,setInputDate]=useState('');
// const [inputDesc,setInputDesc]=useState('');
// const [inputTime,setInputTime]=useState(0);


/*
如何将多个state变量合并到一个对象中
*/

const [formData,setFormData]=useState({
   inputDate:"",
   inputDesc:"",
   inputTime:0
})


const descChangeHandler=(e)=>{
    //合并后修改：
    setFormData({
        ...formData,
        inputDesc:e.target.value
    })
}
const dateChangeHandler=(e)=>{
  setFormData(
    {
      ...formData,
     inputDate:e.target.value
    }
  )
}
const timeChangeHandler=(e)=>{
    setFormData(
        {
          ...formData,
         inputTime:e.target.value
        }
      )
}

const formSubmitHandler=(e)=>{
    e.preventDefault();
    const log={
        date:new Date(formData.inputDate),
        desc:formData.inputDesc,
        time:+formData.inputTime
    }
    props.saveLogHandler(log);
    setFormData(
    {
     inputDate:"",
     inputDesc:"",
     inputTime:0
    }
  )
}
/*
提交后应将表单项清空 但组件为非受控组件无法--直接对其内容进行修改
*/
/*
设置为受控组件？
*/
//使用state来存储表单项的内容---使其成为响应式
//使用setXxx实现 外向内的绑定
//input --绑定 value值={} 进行由内向外的绑定
//由此实现双向绑定--组件成为受控组件

///+ 将非数值类型转为number
    return (
<Card>
<div className="logForm">
            <form onSubmit={formSubmitHandler}>
                <div className="form_item">
                    <label htmlFor="date">日期:</label>
                    <input onChange={dateChangeHandler} value={formData.inputDate} id="date" type="date"/>
                </div >
                <div className="form_item" >
                    <label htmlFor="desc">描述:</label>
                    <input onChange={descChangeHandler} value={formData.inputDesc} id="desc" type="desc"/>
                    
                </div>
                <div className="form_item">  
                    <label htmlFor="time">时间</label>
                    <input onChange={timeChangeHandler} value={formData.inputTime} id="time" />
                </div>
                <div className="form_item">
                   <button  className="button">添加</button>
                </div>
            </form>
            </div>
        </Card>    
  );
}
 
//获取设置的表单项内容--添加到 log中


export default LogsForm;