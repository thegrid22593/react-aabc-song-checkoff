import ReactDOM from 'react-dom';
import React from 'react';
import firebase from 'firebase';
require('firebase/firestore');
import { Switch, Route, Router } from 'react-router-dom';
require('../scss/style.scss');
import UserDashboardHeader from './UserDashboardHeader';
import UserDashboardSidebar from './UserDashboardSidebar';
import UserDashboard from './UserDashboard';
import UserDashboardMenu from './UserDashboardMenu';
import UserDashboardSummary from './UserDashboardSummary';
import UserDashboardFeedback from './UserDashboardFeedback';
import UserDashboardPartComparison from './UserDashboardPartComparison';
import UserDashboardProfile from './UserDashboardProfile';

function messages () {}

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
            firebase.firestore().collection('users').doc(currentUserId).get().then((doc) => {
                console.log('data', doc.data());
                let user = doc.data();
                this.setState({user});
            })
        }
    }

    render() {
        return (
            <div className="container">
                <UserDashboardHeader />
                <div className="user-dashboard-sidebar-container">
                    <UserDashboardSidebar />
                </div>
                <div className="user-dashboard-content-container">
                    <UserDashboardProfile user={this.state.user} />
                    <UserDashboardMenu />
                    <Switch>
                        <Route path="/dashboard" exact component={ UserDashboardSummary } />
                        <Route path="/dashboard/feedback" exact component={ UserDashboardFeedback } />
                        <Route path="/dashboard/part-comparison" exact component={ UserDashboardPartComparison } />
                    </Switch>
                </div>
            </div>
        )
    }
}

module.exports = UserDashboardPage;