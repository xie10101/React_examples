//引入ReactDOM：
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store_rtkq/index";
//  import store from "./store/index";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
//与context的区别-context重新定义函数 state 多个传值
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
