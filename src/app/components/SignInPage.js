import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Background from '../images/main-bg.jpg';

const SignInPage = () => (
  <section className="main-bg" style={{backgroundImage: "url(" + Background + ")"}}>
    <section className="login-sign-up-forms">
        <div className="dont-have-account">
            <div className="dont-have-account-content">
                <h2 className="dont-have-account-title">Don't Have An Account?</h2>
                <p>Create an account in order to view the music library of the All-American Boys Chorus</p>
                <button>Sign Up</button>
            </div>
        </div>
        <SignUp/>
        <div className="have-an-account">
            <div className="have-an-account-content">
                <h2 className="have-an-account-title">Have An Account?</h2>
                <p>Sign into your account to start practicing your songs.</p>
                <button>Sign In</button>
            </div>
        </div>
        <SignIn/>
        <div className="aabc-logo-crown">
          <img alt="aabc-logo"/>
        </div>
    </section>
  </section>
)

export default SignInPage;