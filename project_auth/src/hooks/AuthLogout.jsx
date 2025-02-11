import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/auth-slice";
import { useEffect } from "react";

//创建自定义钩子：
const useAuthLogout=()=>{
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    
    //  创建 useEffect处理登录状态
// 根据变量-控制执行次数-时机
useEffect(() => {
    //auth.expirationTime
    const timeout = auth.expirationTime - Date.now();
    //判断timeout的值
    if (timeout < 6000) {
      dispatch(logOut());
      return;
    }
    const timer = setTimeout(() => {
      dispatch(logOut());
    }, timeout);
    return () => {
      // 不管是重新登录或
      // 退出登录都应该将前一个计时器进行删除
      clearTimeout(timer);
    };
  }, [auth]);
}

export default useAuthLogout;