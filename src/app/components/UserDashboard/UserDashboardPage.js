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
import { fetchUser } from '../../actions/userActions';

class UserDashboardPage extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);

      this.props.dispatch(fetchUser(this.props.userAuth.uid));
   }

   render() {
      return (
         <div className="app-row">
            <AppTopBar />
            <div className="user-dashboard-sidebar-container">
               <AppSidebar user={this.props.user} />
            </div>
            <div className="app-content-container">
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
         userAuth: store.user.userAuth,
         userFetched: store.user.fetched,
      };
   })(UserDashboardPage)
);

module.exports = UserDashboardPage;
