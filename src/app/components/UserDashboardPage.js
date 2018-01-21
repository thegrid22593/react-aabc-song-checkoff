import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
require('../scss/style.scss');
import UserDashboardHeader from './UserDashboardHeader';
import UserDashboardSidebar from './UserDashboardSidebar';
import UserDashboard from './UserDashboard';
import UserDashboardMenu from './UserDashboardMenu';

class UserDashboardPage extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {

            }
        }
    }

    componentWillMount() {
        let currentUserId = sessionStorage.getItem('userID');
        if(currentUserId) {
            let userDbRef = fire.database().ref('users').once('value').then((snapshot)=> {
                console.log('snapshot', snapshot);
            });
            console.log('userdbref:', userDbRef);
        }
    }

    render() {
        return (
            <div className="container">
                <UserDashboardHeader />
                <UserDashboardSidebar />
                <UserDashboardMenu />
                <UserDashboard />
            </div>
        )
    }
}

module.exports = UserDashboardPage;