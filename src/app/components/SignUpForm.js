import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"sign-up-form " + (this.props.active ? 'active' : 'false')}>
                <div className="sign-up-form-content">
                    <h3>Sign Up</h3>
                    <form action="" className="sign-up">
                        <input type="email" name="signUpFormEmail" id="signUpEmail" placeholder="email"/>
                        <span className="error-message">Email already in use.</span>
                        <input type="password" name="signUpPassword" id="signUpPassword" placeholder="password"/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpForm;