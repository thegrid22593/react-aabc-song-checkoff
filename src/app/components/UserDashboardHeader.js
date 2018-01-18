import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../../fire';
require('../scss/style.scss');

class UserDashboardHeader extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let currentUser = fire.auth().currentUser;
        console.log('current user:', currentUser);
        if(currentUser) {
        }
    }

    render() {
        return (
            <nav className="main-nav">
                <a className="nav-branding" href="#">Music Library</a>
                <ul className="nav-links">
                    <li>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>Sign Out
                    </li>
                </ul>
                <ul className="user-info">
                    <li><i className="fa fa-user-circle-o" aria-hidden="true"></i></li>
                    {/* <li>Hello {{displayName}}!</li> */}
                    <Link to="/user-settings"><i className="fa fa-cog" aria-hidden="true"></i></Link>
                </ul>
            </nav>
        )
    }
}


module.exports = UserDashboardHeader;