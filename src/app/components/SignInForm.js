import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import firebase from 'firebase';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { userSignIn } from '../actions/userActions';
import { fetchUser } from '../actions/userActions';

class SignInForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         loginEmail: '',
         loginPassword: '',
      };
   }

   // componentDidUpdate() {
   //     console.log('updated', this.props.user);
   //     if(this.props.userFetched) {
   //         this.context.router.history.push('/dashboard');
   //     }
   // }

   signIn(e) {
      e.preventDefault();
      this.props
         .dispatch(userSignIn(this.state.loginEmail, this.state.loginPassword))
         .then(() => {
            console.log('SIGNED IN', this.props.userAuth.uid);
            // this.props.dispatch(fetchUser(this.props.user.uid)).then(() => {
            //    //    this.context.router.history.push('/dashboard');
            // });
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
            className={'login-form ' + (this.props.active ? 'active' : 'false')}
         >
            <div className="login-form-content">
               <h3>Login</h3>
               <form action="" className="login">
                  <input
                     type="email"
                     onChange={this.handleChange.bind(this)}
                     value={this.state.email}
                     name="loginEmail"
                     id="loginEmail"
                     placeholder="email"
                  />
                  <input
                     type="password"
                     onChange={this.handleChange.bind(this)}
                     value={this.state.password}
                     name="loginPassword"
                     id="loginPassword"
                     placeholder="password"
                  />
                  <a href="#">Forgot Password?</a>
                  <button type="submit" onClick={this.signIn.bind(this)}>
                     Sign In
                  </button>
               </form>
            </div>
         </div>
      );
   }
}

SignInForm.contextTypes = {
   router: React.PropTypes.object.isRequired,
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
