import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginEmail: '',
            loginPassword: ''
        }
    }

    signIn(e) {
        e.preventDefault();
        let auth = firebase.auth();
        auth.signInWithEmailAndPassword(this.state.loginEmail, this.state.loginPassword).then((user) => {
            console.log('user', user);
            let userId = user.uid;
            sessionStorage.setItem('userID', userId);
            this.context.router.history.push('/dashboard');
        }).catch((error) => {
            console.log('could not sign in', error);
        });
    }

    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    render() {
        return (
            <div className={"login-form " + (this.props.active ? 'active' : 'false')}>
                <div className="login-form-content">
                    <h3>Login</h3>
                    <form action="" className="login">
                        <input type="email" onChange={ this.handleChange.bind(this) } value={this.state.email} name="loginEmail" id="loginEmail" placeholder="email"/>
                        <input type="password" onChange={ this.handleChange.bind(this) }value={this.state.password} name="loginPassword" id="loginPassword" placeholder="password"/>
                        <a href="#">Forgot Password?</a>
                        <button type="submit" onClick={this.signIn.bind(this)}>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

SignInForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default SignInForm;