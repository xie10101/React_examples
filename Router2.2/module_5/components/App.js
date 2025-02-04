import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import About from "./about.js";
import Menu from "./Menu.js";
import Student from "./Student.js";
import Home from "./Home.js";
import Acticle from "./Acticle.jsx";
const App = () => {
  return (
    <div>
      {/*
       将路由和组件进行映射
      */}
      <Menu></Menu>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about">
        <About></About>
      </Route>
      <Route path="/stu" exact component={Student}></Route>
      <Acticle></Acticle>
      <Redirect from={"/abc"} to={"/stu"}></Redirect>
    </div>
  );
};

export default App;
