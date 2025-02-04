import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//HashRouterBrowserRouter --在前端开发时没有区别，在项目部署时需要有相应的配置;
//
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App></App>
  </Router>
);
