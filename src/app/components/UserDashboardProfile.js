import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
import { Switch, Route, Router } from 'react-router-dom';
require('../scss/style.scss');


class UserDashboardProfile extends React.Component {
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
            <section className="dashboard-profile">
                <div className="dashboard-member-info">
                    <div className="member-name-and-photo">
                        {/* <img className="user-profile-pic" alt="user profile pic"> */}
                        <h5>Details</h5>
                        {/* <h2 className="current-user-name">{{currentUserName}}</h2> */}
                        {/* <strong className="current-user-part">{{currentUserPart}}</strong> */}
                     </div>
                    {/* <div className="member-songs-completed"> */}
                        {/* <h5>Songs Completed</h5> */}
                        {/* <p>{{this.completedSongs}} / {{songCount}}</p> */}
                    {/* </div>

                    <div className="member-songs-percentage">
                        <h5>Percentage</h5> */}
                        {/* <p>{{songPercentage}}%</p> */}
                    {/* </div>

                    <div className="member-last-completed-song">
                        <h5>Last Completed Song:</h5> */}
                        {/* <p>{{lastCompletedSong}}</p> */}
                    {/* </div> */}
                </div>
            </section>
        )
    }
}

module.exports = UserDashboardProfile;