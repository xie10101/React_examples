import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/authform" element={<AuthPage></AuthPage>}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
