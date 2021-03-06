import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';
import '../../scss/style.scss';
import AppTopBar from '../AppTopBar';
import AppSidebar from '../AppSidebar';
import UserDashboardMenu from './UserDashboardMenu';
import UserDashboardSummary from './UserDashboardSummary';
import UserDashboardFeedback from './UserDashboardFeedback';
import UserDashboardPartComparison from './UserDashboardPartComparison';
import UserDashboardProfile from './UserDashboardProfile';
import UserDashboardNotifications from './UserDashboardNotifications';
import { fetchUser } from '../../actions/userActions';

const mapStateToProps = state => ({
   user: state.user.user,
   userAuth: state.user.userAuth,
   userFetched: state.user.fetched,
});

class UserDashboardPage extends Component {
   constructor(props) {
      super(props);
      if (typeof props.user === 'undefined') {
         this.props.dispatch(fetchUser(this.props.userAuth.uid));
      }
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
                     path="/dashboard/summary"
                     component={UserDashboardSummary}
                  />
                  <Route
                     path="/dashboard/feedback"
                     component={UserDashboardFeedback}
                  />
                  <Route
                     path="/dashboard/part-comparison"
                     component={UserDashboardPartComparison}
                  />
                  <Route
                     path="/dashboard/notifications"
                     component={UserDashboardNotifications}
                  />
               </Switch>
            </div>
         </div>
      );
   }
}

UserDashboardPage.propTypes = {
   user: PropTypes.shape(),
   userAuth: PropTypes.shape(),
   dispatch: PropTypes.func,
};

UserDashboardPage.defaultProps = {
   dispatch: false,
   user: false,
   userAuth: false,
};

module.exports = connect(mapStateToProps)(UserDashboardPage);
