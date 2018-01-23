import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import firebase from 'firebase';
import SignInForm from './SignInForm';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        signUpEmail: '',
        signUpPassword: '',
    };
  }

  signUp(e) {
    e.preventDefault();

    console.log('firebase');
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.signUpEmail,
        this.state.signUpPassword
      )
      .then(user => {
        console.log('user has been created', user);
        if (user) {
          let userId = user.uid;
          sessionStorage.setItem('userID', userId);
          this.context.router.history.push('/user-sign-up');
        }
      })
      .catch(error => {
        console.log('could not create this user', error);
      });
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
      <div
        className={'sign-up-form ' + (this.props.active ? 'active' : 'false')}
      >
        <div className="sign-up-form-content">
          <h3>Sign Up</h3>
          <form action="" className="sign-up">
            <input
              type="email"
              onChange={this.handleChange.bind(this)}
              name="signUpEmail"
              id="signUpEmail"
              placeholder="email"
            />
            <span className="error-message">Email already in use.</span>
            <input
              type="password"
              onChange={this.handleChange.bind(this)}
              name="signUpPassword"
              id="signUpPassword"
              placeholder="password"
            />
            <button onClick={this.signUp.bind(this)} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SignUpForm.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default SignUpForm;
