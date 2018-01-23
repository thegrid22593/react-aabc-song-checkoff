import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');
import firebase from 'firebase';

import UserDashboardHeader from '../UserDashboardHeader';
import UserDashboardSidebar from '../UserDashboardSidebar';
import UserSettings from './UserSettings';


class UserSettingsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        if(!this.props.user) {
            let currentUserId = sessionStorage.getItem('userID');
            if (currentUserId) {
              firebase
                .firestore()
                .collection('users')
                .doc(currentUserId)
                .get()
                .then(doc => {
                  console.log('data', doc.data());
                  let user = doc.data();
                  this.setState({user});
                });
            }
          }
    }

    filebuttoni(e) {

    }

    render() {
        return(
            <div>
                <UserDashboardHeader/>
                <div className="user-dashboard-sidebar-container">
                    <UserDashboardSidebar user={this.state.user} />
                </div>
                <UserSettings user={this.state.user}/>
            </div>

        )
    }
}

module.exports = UserSettingsPage;