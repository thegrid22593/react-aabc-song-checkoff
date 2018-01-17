import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';


const SignUp = () => (
        <div className="sign-up-form">
            <div className="sign-up-form-content">
                <h3>Sign Up</h3>
                <form action="" className="sign-up">
                    <input type="email" name="signUpEmail" id="signUpEmail" placeholder="email"/>
                    <span className="error-message">Email already in use.</span>
                    <input type="password" name="signUpPassword" id="signUpPassword" placeholder="password"/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
)

export default SignUp;