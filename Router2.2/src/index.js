import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
//HashRouterBrowserRouter --在前端开发时没有区别，在项目部署时需要有相应的配置;
//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App></App>
  </Router>
);
