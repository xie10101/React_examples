import React, {  useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from '../store/api/authApi';
import { login } from '../store/reducer/authSlice';
const AuthForm = () => {
   
    // 具体
   const [isLoginForm,setIsLoginForm]=useState(true);
   const usernameInp=useRef();
   const pwdInp=useRef();
   const emailInp=useRef();
  
   //引入注册的api
   //触发器      //结果
   const [regFn,{error:regError}] = useRegisterMutation();
   const [loginFn,{error:loginError}] =useLoginMutation(); //
    //redux
    const dispatch=useDispatch();
    dispatch(login({
        isLogged:false,
         token:"",
         user:null
     }))
 //  表单提交事件 
const submitHandler=(e)=>{
    e.preventDefault(); //停止冒泡
    //  获取用户输入的内容：
    const username=usernameInp.current.value;
    const pw=pwdInp.current.value;
    const email=emailInp.current.value;
    //处理登录功能：
   if(isLoginForm){
     loginFn( 
        {
            identifier:username,
            password:pw
        }
     ).then(res=>{
        // 请求错误-res为包含error属性的对象
        if(!res.error)
        {
            // 登录成功
            console.log("登录成功");
            //登录成功后,需要向浏览器添加一个标识，标记用户的登录状态 -token
            //存储用户的个人信息
            //跳转页面到根目录？/不是page目录？

            //使用redux进行状态 -存储管理
           dispatch(login({
              isLogged:true,
               token:res.data.jwt,
               user:res.data.user
           }))
        }
     }).catch(err=>{
        // 登录失败
        console.log("登录失败");
     })
   }else{
    regFn(
        {
            username,
            pw,
            email
        }   
     ).then(res=>{
        // 请求错误-res为error对象
        if(!res.error)
        {
            // 注册成功
            console.log("注册成功");
            // 返回登录表单
            setIsLoginForm(true);
        }   
     }).catch(err=>{
        // 注册失败
        console.log("注册失败");
     })
  } 
}

    return (  
        <div>
            {/* 应该为异步显示 */}
            <p style={{color:"red"}}>
                {
                    regError&&regError.data.error.message//可以自定义错误提示  
                }
                { 
                    loginError&&loginError.data.error.message
                }
            </p>

            <h2>{isLoginForm?"登录":"注册"}</h2>
            <form action="">
                <div>
                    <input  ref={usernameInp} type="text" placeholder="用户名" />
                </div>
                {
                    !isLoginForm && <div>
                                     <input type="text" ref={emailInp} placeholder="邮箱" />
                                    </div>
                }
                <div>
                    <input  ref={pwdInp} type='text' placeholder='密码'></input>
                </div>
                <div>
                    <button  onClick={submitHandler}>{isLoginForm?"登录":"注册"}</button>
                    {/* 切换 */}
                    <a href="###" 
                    onClick={
                    e=>{ e.preventDefault();
                    setIsLoginForm(prevState=>!prevState) }}>
                    {isLoginForm?"没有账号-注册":"已有账号-登录"}
                    </a>
                </div>
            </form>
        </div>
    );
}
 
export default AuthForm;