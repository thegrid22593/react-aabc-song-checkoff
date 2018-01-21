import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
import { Switch, Route, Router } from 'react-router-dom';
require('../scss/style.scss');
import UserDashboardHeader from './UserDashboardHeader';
import UserDashboardSidebar from './UserDashboardSidebar';
import UserDashboard from './UserDashboard';
import UserDashboardMenu from './UserDashboardMenu';
import UserDashboardSummary from './UserDashboardSummary';
import UserDashboardFeedback from './UserDashboardFeedback';
import UserDashboardPartComparison from './UserDashboardPartComparison';

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
                <Switch>
                    <Route path="/dashboard" exact component={UserDashboard} />
                    <Route path="/dashboard/summary" exact component={ UserDashboardSummary } />
                    <Route path="/dashboard/feedback" exact component={ UserDashboardFeedback } />
                    <Route path="/dashboard/part-comparison" exact component={ UserDashboardPartComparison } />
                </Switch>
                
            </div>
        )
    }
}

module.exports = UserDashboardPage;