import ReactDOM from 'react-dom';
import React from 'react';
import { Link , NavLink} from 'react-router-dom';
require('../scss/style.scss');

class UserDashboardMenu extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
       
    }

    render() {
        return (
            <nav className="dashboard-menu">
                <ul>
                    <li>
                    <NavLink to="/dashboard/summary">
                        <i className="fa fa-pie-chart" aria-hidden="true"></i>Summary
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/feedback">
                    <i className="fa fa-comment-o" aria-hidden="true"></i>Messages
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/part-comparison">
                    <i className="fa fa-bar-chart" aria-hidden="true"></i>Part Comparison
                    </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}


module.exports = UserDashboardMenu;