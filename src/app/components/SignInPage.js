import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Background from '../images/main-bg.jpg';
import Logo from '../images/logo-icon.png';
import { connect } from 'react-redux';
import userSignUpRequest from '../actions/signUpActions';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signInFormActive: true,
            signUpFormActive: false,
        }
    }

    signUp() {
        this.setState({
            signInFormActive: false,
            signUpFormActive: true
        });
    }

    signIn() {
        this.setState({
            signInFormActive: true,
            signUpFormActive: false
        })
    }

    render() {
        return(
            <section className="main-bg" style={{backgroundImage: "url(" + Background + ")"}}>
                <section className="login-sign-up-forms">
                    <div className={"dont-have-account " + (!this.state.signUpFormActive ? 'active' : 'false')}>
                        <div className="dont-have-account-content">
                            <h2 className="dont-have-account-title">Don't Have An Account?</h2>
                            <p>Create an account in order to view the music library of the All-American Boys Chorus</p>
                            <button onClick={this.signUp.bind(this)}>Sign Up</button>
                        </div>
                    </div>
                    <SignUpForm active={this.state.signUpFormActive} userSignUpRequest={userSignUpRequest}/>
                    <div className={"have-an-account " + (!this.state.signInFormActive ? 'active' : 'false')}>
                        <div className="have-an-account-content">
                            <h2 className="have-an-account-title">Have An Account?</h2>
                            <p>Sign into your account to start practicing your songs.</p>
                            <button onClick={this.signIn.bind(this)}>Sign In</button>
                        </div>
                    </div>
                    <SignInForm active={this.state.signInFormActive}/>
                    <div className="aabc-logo-crown">
                    <img src={Logo} alt="aabc-logo"/>
                    </div>
                </section>
            </section>
        )
    }
}

SignInPage.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignUpRequest })(SignInPage);