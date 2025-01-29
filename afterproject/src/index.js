//引入ReactDOM：
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./mocks/browser";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());

// 启动 mock 服务
worker.start();
