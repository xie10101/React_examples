import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//HashRouterBrowserRouter --在前端开发时没有区别，在项目部署时需要有相应的配置;
//路由
import { BrowserRouter as Router } from "react-router-dom";
//redux
import store from "./store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>
);
