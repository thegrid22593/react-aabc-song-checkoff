import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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

UserDashboardPage.propTypes = {
    user: PropTypes.shape(),
    userAuth: PropTypes.shape(),
    dispatch: PropTypes.func
}

UserDashboardPage.defaultProps ={
    dispatch: false,
    user: false,
    userAuth: false,
}

module.exports = UserDashboardPage;
