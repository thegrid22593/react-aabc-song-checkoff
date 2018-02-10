import React from 'react';
import { connect } from 'react-redux';
import { userSignIn, fetchUser } from '../actions/userActions';
import PropTypes from 'prop-types';

class SignInForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         loginEmail: '',
         loginPassword: '',
      };

      console.log('SignIn Props', this.props);

      this.handleChange.bind(this);
      this.signIn.bind(this);
   }

   signIn(e) {
      e.preventDefault();
      this.props
         .dispatch(userSignIn(this.state.loginEmail, this.state.loginPassword))
         .then(() => {
            console.log('SIGNED IN', this.props.userAuth.uid);
            this.props.dispatch(fetchUser(this.props.userAuth.uid)).then(() => {
               console.log('DATA RECEIVED', this.props.user);
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

SignInForm.proptypes = {
   dispatch: PropTypes.func.isRequired,
   userAuth: PropTypes.obj.isRequired,
   user: PropTypes.obj.isRequired,
   active: PropTypes.bool.isRequired,
};

SignInForm = connect(store => {
   return {
      user: store.user.user,
      userAuth: store.user.userAuth,
      userFetched: store.user.fetched,
      songs: store.songs.songs,
   };
})(SignInForm);

export default SignInForm;
