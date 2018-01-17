import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"login-form " + (this.props.active ? 'active' : 'false')}>
                <div className="login-form-content">
                    <h3>Login</h3>
                    <form action="" className="login">
                        <input type="email" name="loginEmail" id="loginEmail" placeholder="email"/>
                        <input type="password" name="loginPassword" id="loginPassword" placeholder="password"/>
                        <a href="#">Forgot Password?</a>
                        <button type="submit">Sign In</button>
                        <div className="sign-in-loading"></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignInForm;