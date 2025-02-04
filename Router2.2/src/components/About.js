import {
  Redirect,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Hello from "./Hello";
// import Hello from "./Hello";
const About = () => {
  const match = useRouteMatch();
  const { path } = match;
  console.log(path);
  return (
    <div>
      <h1>About</h1>
      <Redirect to={"/stu"}></Redirect>
      {/* 使用push无法回退到上一历史记录/会不断push循环 */}
      {/* redirect 组件默认使用history中replace-可以查询上一历史 */}
      <Route path={`${path}/hello`}>
        <Hello></Hello>
      </Route>
    </div>
  );
};

export default About;

/*
  component构建的组件，
  组件内部可以通过props获取到路由信息
  包含三个属性：
  history：路由跳转的历史记录--控制跳转
  
  push的使用：
  {
  props.history.push({
  //需要一个loaction对象作为参数
  pathname: "/student/1",
  })
  }
  //将页面压栈-可以回退到上个页面

replace的使用：
--历史记录的直接替换；

  location：地址信息--pathname/hash信息
  match：匹配到的路由信息
     ---isExact: true是否完全匹配
  */
