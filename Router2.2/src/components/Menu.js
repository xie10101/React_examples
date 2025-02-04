import { Link } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Menu.module.css";
const Menu = () => {
  return (
    <div>
      <li>
        {/* <a href="/about">about</a>
         */}
        <Link to="/">主页</Link>
        <NavLink to="/" exact activeClassName={classes.active}>
          主页
        </NavLink>
      </li>

      <li>
        {/* <a href="/">home</a> */}
        <Link to="/about">about</Link>
        <NavLink exact activeClassName={classes.active} to="/about">
          关于
        </NavLink>
      </li>
      <li>
        {/* <a href="/">home</a> */}
        <NavLink exact activeClassName={classes.active} to="/stu">
          学生信息
        </NavLink>
      </li>
    </div>
  );
};

export default Menu;

//   {/*
// a标签的页面跳转会刷新页面向后端发送请求获取页面数据
// link标签的页面跳转不会刷新页面，只是前端路由的改变
//  */}
//  {/*
//  Link和NavLink标签实质都是a标签，--可以使用a选择器设置
//  区别：NavLink存在activeClassName属性 用于当跳转对应页面时链接的高亮设置
//   */}
