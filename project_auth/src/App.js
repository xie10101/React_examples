import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import NeedAuth from "./components/NeedAuth";
import useAuthLogout from "./hooks/AuthLogout";
const App = () => {
  useAuthLogout();
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            // 路由守卫的设置当登录后访问该页面 /
            // 当未登录时跳转到登录页面--authform-authPage
            element={
              <NeedAuth>
                <ProfilePage />
              </NeedAuth>
            }
          />
          <Route path="/authform" element={<AuthPage></AuthPage>}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
