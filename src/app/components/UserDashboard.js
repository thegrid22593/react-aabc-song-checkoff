import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
require('../scss/style.scss');
import UserDashboardHeader from './UserDashboardHeader';

class UserDashboard extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let currentUser = fire.auth().currentUser;
        console.log('current user:', currentUser);
        if(currentUser) {
            // Route to dashboard
        }
    }

    render() {
        return (
            <div className="container">
                <UserDashboardHeader />
            </div>
        )
    }
}

module.exports = UserDashboard;