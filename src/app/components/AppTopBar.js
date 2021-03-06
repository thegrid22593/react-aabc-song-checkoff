import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../scss/style.scss';

const mapStateToProps = state => ({
   user: state.user.user,
});

class AppTopBar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         notifications: null,
      };
   }

   componentWillMount() {
      let notifications = 0;
      this.props.user.songs.forEach(song => {
         if (song.notes) {
            notifications += song.notes.length;
         }
      });
      this.setState({ notifications });
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

   render() {
      return (
         <nav className="main-nav">
            <a className="nav-branding" href="">
               Music Library
            </a>
            <ul className="nav-links">
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
               <li>
                  <Link to="/user-settings">
                     <i className="fa fa-cog" aria-hidden="true" />
                  </Link>
               </li>

               <li>
                  <a onClick={this.signOut} href="">
                     <i className="fa fa-sign-out-alt" aria-hidden="true" />
                  </a>
               </li>
            </ul>
            <ul className="user-info">
               <li>
                  <i className="fa fa-user-circle-o" aria-hidden="true" />
               </li>
               {/* <li>Hello {{displayName}}!</li> */}
            </ul>
         </nav>
      );
   }
}

// AppTopBar.contextTypes = {
//    router: PropTypes.object.isRequired,
// };

AppTopBar.propTypes = {
   user: PropTypes.shape().isRequired,
};

module.exports = connect(mapStateToProps)(AppTopBar);
