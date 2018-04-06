import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignUp } from '../actions/userActions';

const mapStateToProps = state => ({
   user: state.user.user,
   loading: state.user.loading,
   userAuth: state.user.userAuth,
   userFetched: state.user.fetched,
});

class SignUpForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         signUpEmail: '',
         signUpPassword: '',
      };

      this.handleChange.bind(this);
      this.signUp.bind(this);
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
   dispatch: PropTypes.func,
   active: PropTypes.bool.isRequired,
};

SignUpForm.defaultProps = {
   dispatch: false,
};

module.exports = SignUpForm;
module.exports = connect(mapStateToProps)(SignUpForm);
