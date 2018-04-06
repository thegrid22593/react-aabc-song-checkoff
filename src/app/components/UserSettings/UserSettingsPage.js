import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AppTopBar from '../AppTopBar';
import AppSidebar from '../AppSidebar';
import UserSettings from './UserSettings';

import '../../scss/style.scss';

const mapStateToProps = state => ({
   user: state.user.user,
   userFetched: state.user.fetched,
});

class UserSettingsPage extends Component {
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

module.exports = withRouter(connect(mapStateToProps)(UserSettingsPage));
