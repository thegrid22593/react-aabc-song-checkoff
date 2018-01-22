import ReactDOM from 'react-dom';
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
require('../scss/style.scss');

class UserDashboardMenu extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {}

  render() {
    return (
      <nav className="dashboard-menu">
        <ul>
          <li>
            <NavLink to="/dashboard/summary" activeClassName="active">
              <i className="fa fa-pie-chart" aria-hidden="true" />Summary
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/feedback" activeClassName="active">
              <i className="fa fa-comment-o" aria-hidden="true" />Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/part-comparison" activeClassName="active">
              <i className="fa fa-bar-chart" aria-hidden="true" />Part
              Comparison
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

module.exports = UserDashboardMenu;
