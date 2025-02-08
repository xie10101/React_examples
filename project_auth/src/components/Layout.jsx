import React from "react";
import MainMenu from "./MainMenu";
const Layout = (props) => {
    return ( 
        <div>
            <MainMenu></MainMenu>
            <hr />
            {props.children}
            {/* 插槽-作用 */}
        </div>
     );
}
export default Layout;

//  Layout.jsx主要用于设置app中静态部分