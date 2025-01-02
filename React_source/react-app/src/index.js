import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Css_Module/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // 此标签的元素用于？ 以严格模式进行组件渲染
);
