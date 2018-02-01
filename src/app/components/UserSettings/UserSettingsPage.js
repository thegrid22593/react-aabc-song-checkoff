import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');
import firebase from 'firebase';

import AppTopBar from '../AppTopBar';
import AppSidebar from '../AppSidebar';
import UserSettings from './UserSettings';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class UserSettingsPage extends React.Component {
   constructor(props) {
      super(props);
   }

   filebuttoni(e) {}

   render() {
      return (
         <div className="app-row">
            <AppTopBar />
            <div className="user-dashboard-sidebar-container">
               <AppSidebar user={this.props.user} />
            </div>
            <div className="app-content-container">
               <UserSettings user={this.props.user} />
            </div>
         </div>
      );
   }
}

UserSettingsPage = withRouter(
   connect(store => {
      return {
         user: store.user.user,
         userFetched: store.user.fetched,
      };
   })(UserSettingsPage)
);

module.exports = UserSettingsPage;
