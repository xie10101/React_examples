import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//设置移动端适配：
document.documentElement.style.fontSize = 100 / 390 + "vw"; //1vw--代表视口宽度的1/100
// document.documentElement.style.fontSize = `${
//   ((window.innerWidth / 375) * 100) / 3.75
// }px`;
//100vw=750px=750rem,1rem=100/750vw
//750rem就是视口的宽度--以其作为初始的屏幕宽度
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
reportWebVitals();
