import React from "react";
import './Login.css';
const Login=()=>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>LOGIN</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="remember-forgot">
                    <a> Forgot Password?</a>
                </div>
                <button type="submit">LOGIN</button>
                <div className="register-link">
                    <p>Or  <br/><br/><a>SIGNUP</a></p>
                </div>
            </form>
         </div>
    );
}
export default Login;