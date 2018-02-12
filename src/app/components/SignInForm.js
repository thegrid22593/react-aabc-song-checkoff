import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignIn, fetchUser } from '../actions/userActions';

const mapStateToProps = state => ({
   user: state.user.user,
   userAuth: state.user.userAuth,
   userFetched: state.user.fetched,
   songs: state.songs.songs,
});

class SignInForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         loginEmail: '',
         loginPassword: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.signIn = this.signIn.bind(this);
   }

   signIn(e) {
      e.preventDefault();
      this.props
         .dispatch(userSignIn(this.state.loginEmail, this.state.loginPassword))
         .then(() => {
            this.props.dispatch(fetchUser(this.props.userAuth.uid)).then(() => {
               this.context.router.history.push('/dashboard');
            });
         });
   }

   handleChange(e) {
      const change = {};
      change[e.target.name] = e.target.value;
      this.setState(change);
   }

   render() {
      return (
         <div
            className={`login-form ${this.props.active ? 'active' : 'false'}`}
         >
            <div className="login-form-content">
               <h3>Login</h3>
               <form action="" className="login">
                  <input
                     type="email"
                     onChange={this.handleChange}
                     value={this.state.email}
                     name="loginEmail"
                     id="loginEmail"
                     placeholder="email"
                  />
                  <input
                     type="password"
                     onChange={this.handleChange}
                     value={this.state.password}
                     name="loginPassword"
                     id="loginPassword"
                     placeholder="password"
                  />
                  <a href="">Forgot Password?</a>
                  <button
                     className={this.props.userAuth.loading ? 'loading' : ''}
                     type="submit"
                     onClick={this.signIn}
                  >
                     Sign In
                  </button>
                  <div
                     className={`sign-in-loading ${
                        this.props.userAuth.loading ? 'loading' : ''
                     }`}
                  />
               </form>
            </div>
         </div>
      );
   }
}

SignInForm.contextTypes = {
   router: React.PropTypes.object.isRequired,
};

SignInForm.propTypes = {
   dispatch: PropTypes.func.isRequired,
   userAuth: PropTypes.shape().isRequired,
   active: PropTypes.bool.isRequired,
};

module.exports = connect(mapStateToProps)(SignInForm);
