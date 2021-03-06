import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../scss/style.scss';

class UserDashboardMenu extends Component {
   componentWillMount() {}

   render() {
      return (
         <nav className="dashboard-menu">
            <ul>
               <li>
                  <NavLink to="/dashboard/summary" activeClassName="active">
                     <i className="fas fa-chart-pie" aria-hidden="true" />Summary
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/dashboard/feedback" activeClassName="active">
                     <i className="far fa-comments" aria-hidden="true" />Feedback
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/dashboard/part-comparison"
                     activeClassName="active"
                  >
                     <i className="far fa-chart-bar" aria-hidden="true" />Part
                     Comparison
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/dashboard/notifications"
                     activeClassName="active"
                  >
                     <i className="far fa-dot-circle" aria-hidden="true" />Notifications
                  </NavLink>
               </li>
            </ul>
         </nav>
      );
   }
}

module.exports = UserDashboardMenu;
