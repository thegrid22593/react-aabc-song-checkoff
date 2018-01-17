import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';


const SignIn = () => (
        <div className="login-form">
            <h3>Login</h3>
            <form action="" className="login">
                <input type="email" name="loginEmail" id="loginEmail" placeholder="email"/>
                <input type="password" name="loginPassword" id="loginPassword" placeholder="password"/>
                <a href="#">Forgot Password?</a>
                <button type="submit">Sign In</button>
                <div className="sign-in-loading"></div>
            </form>
        </div>
)

export default SignIn;