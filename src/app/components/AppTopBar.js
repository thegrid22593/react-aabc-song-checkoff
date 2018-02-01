import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
require('../scss/style.scss');

class AppTopBar extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         notifications: null,
      };
   }

   signOut() {
      firebase
         .auth()
         .signOut()
         .then(() => {
            localStorage.clear('state');
            this.context.router.history.push('/sign-in');
         })
         .catch(error => {
            console.log('could not sign out', error);
         });
   }

   componentWillMount() {
      let notifications = 0;
      console.log('loop', this.props);
      this.props.user.songs.forEach(song => {
         if (song.notes) {
            notifications += song.notes.length;
         }
      });
      console.log('notification', notifications);
      this.setState({ notifications });
   }

   render() {
      return (
         <nav className="main-nav">
            <a className="nav-branding" href="#">
               Music Library
            </a>
            <ul className="nav-links">
               <li onClick={this.signOut}>
                  <i className="fa fa-sign-out" aria-hidden="true" />Sign Out
               </li>
               <li>
                  <div className="notifications">
                     <i className="fa fa-inbox" aria-hidden="true" />
                     <div className="notification-number">
                        <div className="number-container">
                           <div className="number">
                              {this.state.notifications}
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
            <ul className="user-info">
               <li>
                  <i className="fa fa-user-circle-o" aria-hidden="true" />
               </li>
               {/* <li>Hello {{displayName}}!</li> */}
               <Link to="/user-settings">
                  <i className="fa fa-cog" aria-hidden="true" />
               </Link>
            </ul>
         </nav>
      );
   }
}

AppTopBar.contextTypes = {
   router: React.PropTypes.object.isRequired,
};

AppTopBar = connect(store => {
   return {
      user: store.user.user,
   };
})(AppTopBar);

module.exports = AppTopBar;
