import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
const About = (props) => {
    console.log(props)//没有传递参数
    return <div>

     {/* <Navigate to="/student/1" replace></Navigate> */}
     {/* 区别：redirect组件默认为replace  Navigate组件为平替但默认为push方法*/}

     <h3>about</h3>
        <Outlet/>
            {/* 路由出口--vue中router-view */}
       </div>
}
export default About;