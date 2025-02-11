// 设置权限访问路由-容器组件：
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NeedAuth = (props) => {
  // 获取auth切片状态
  // 设置路由守卫-可以在路由组中进行配置（判断配置）

    const auth = useSelector((state) => state.auth);
  // 获取当前路由的路径  
    const location = useLocation();
    /*
    传递为location--为对象
    */
    return(
    auth.isLogged ? props.children:(
        // 设置重定向（替换操作-可以查看先前记录）
        <Navigate to={"/authform"} replace
        state={{preLocation: location}}
        ></Navigate>
      )
    )
}
 
export default NeedAuth;