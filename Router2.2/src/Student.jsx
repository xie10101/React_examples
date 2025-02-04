import { useMatch } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const Studet = () => {
 const DATA_STU=[
    {
        id:1,
        name:"sun"
    },
    {
id:2,
name:"ba"
    },
    {
id:3,
name:"tang"
    }
 ]
/*
钩子函数的变化：
useParams没有变化
useLocation 
useMatch 需要传递一个路由进行和当前路由的判断
useHistory 主要用来进行路由的跳转---不再用
使用useNavigate进行路由的跳转
*/
const data=useParams(); //使用解构进行获取数据
const location=useLocation()
const match=useMatch("/student/1"); 
// 用来检查当前url是否匹配某个路由  //返回null或者一个对象
const nav=useNavigate();
const student= DATA_STU.find((item)=>item.id === +data.id)
const handler=()=>{
    nav("/about") //底层默认为push
// 设置配置对象实现利用 replace进行跳转
    // nav("/about",{replace:true})
}
    return (
        <div>
            <h1>Student</h1>
            <h3>{student.id}---{student.name}</h3>
            <button onClick={handler}>跳转到/about</button>
        </div>
      );
}
 
export default Studet;