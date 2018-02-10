import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { userSignUp } from '../actions/userActions';

class SignUpForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         signUpEmail: '',
         signUpPassword: '',
      };

      this.handleChange.bind(this);
      this.signUp.bind(this);

      console.log(props);
   }

   signUp(e) {
      e.preventDefault();
      try {
         this.props.dispatch(
            userSignUp(this.state.signUpEmail, this.state.signUpPassword)
         );
      } catch (error) {
         console.log('error', error);
      } finally {
         console.log('worked');
         this.context.router.history.push('/user-sign-up');
      }
   }

   handleChange(e) {
      const change = {};
      change[e.target.name] = e.target.value;
      this.setState(change);
   }

   render() {
      return (
         <div
            className={`sign-up-form ${this.props.active ? 'active' : 'false'}`}
         >
            <div className="sign-up-form-content">
               <h3>Sign Up</h3>
               <form action="" className="sign-up">
                  <input
                     type="email"
                     onChange={this.handleChange}
                     name="signUpEmail"
                     id="signUpEmail"
                     placeholder="email"
                  />
                  <span className="error-message">Email already in use.</span>
                  <input
                     type="password"
                     onChange={this.handleChange}
                     name="signUpPassword"
                     id="signUpPassword"
                     placeholder="password"
                  />
                  <button onClick={this.signUp} type="submit">
                     Sign Up
                  </button>
               </form>
            </div>
         </div>
      );
   }
}

SignUpForm.propTypes = {
   dispatch: PropTypes,
};

SignUpForm = withRouter(
   connect(store => {
      return {};
   })(SignUpForm)
);

export default SignUpForm;
