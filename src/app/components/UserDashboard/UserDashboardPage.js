import ReactDOM from 'react-dom';
import React from 'react';
import firebase from 'firebase';
require('firebase/firestore');
require('../../scss/style.scss');
import { Switch, Route, Router } from 'react-router-dom';
import AppTopBar from '../AppTopBar';
import AppSidebar from '../AppSidebar';
import UserDashboard from './UserDashboard';
import UserDashboardMenu from './UserDashboardMenu';
import UserDashboardSummary from './UserDashboardSummary';
import UserDashboardFeedback from './UserDashboardFeedback';
import UserDashboardPartComparison from './UserDashboardPartComparison';
import UserDashboardProfile from './UserDashboardProfile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class UserDashboardPage extends React.Component {
   constructor() {
      super();
   }

   render() {
      return (
         <div>
            <AppTopBar />
            <div className="user-dashboard-sidebar-container">
               <AppSidebar user={this.props.user} />
            </div>
            <div className="user-dashboard-content-container">
               <UserDashboardProfile user={this.props.user} />
               <UserDashboardMenu />
               <Switch>
                  <Route
                     path="/dashboard"
                     exact
                     component={UserDashboardSummary}
                  />
                  <Route
                     path="/dashboard/feedback"
                     exact
                     component={UserDashboardFeedback}
                  />
                  <Route
                     path="/dashboard/part-comparison"
                     exact
                     component={UserDashboardPartComparison}
                  />
               </Switch>
            </div>
         </div>
      );
   }
}

UserDashboardPage = withRouter(
   connect(store => {
      return {
         user: store.user.user,
         userFetched: store.user.fetched,
      };
   })(UserDashboardPage)
);

module.exports = UserDashboardPage;
