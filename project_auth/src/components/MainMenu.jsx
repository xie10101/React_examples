import {Link} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../store/reducer/authSlice";
const MainMenu = () => {
  //获取状态仓库中的数据：
  const auth =useSelector(state=>state.auth); 
 const dispatch = useDispatch();
  console.log(auth) //为undefine --报错原因
      return ( 
        <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>

        {
          auth.isLogged?     
        <li>
          <Link to="/profile">用户信息</Link>
        </li>:null
        }
        {
          auth.isLogged?
        <li>
           {auth.user.username}
          <Link to="/logout" onClick={dispatch(logout())}>退出登录</Link>
        </li>:null
        }
        <li>
           <Link to="/authform" >登录注册</Link> 
        </li>
      </ul>
        </div>
     );
}
 
export default MainMenu;