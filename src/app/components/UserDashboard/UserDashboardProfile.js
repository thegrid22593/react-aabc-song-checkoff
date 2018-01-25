import ReactDOM from 'react-dom';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
require('../../scss/style.scss');

class UserDashboardProfile extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <section className="dashboard-profile">
            <div className="dashboard-member-info">
               <div className="member-name-and-photo">
                  <img
                     className="user-profile-pic"
                     src={this.props.user.profilePicURL}
                     alt="user profile pic"
                  />
                  <h5>Details</h5>
                  <h2 className="current-user-name">
                     {this.props.user.firstName} {this.props.user.lastName}
                  </h2>
                  <strong className="current-user-part">
                     {this.props.user.singingPart}
                  </strong>
               </div>
               <div className="member-songs-completed">
                  <h5>Songs Completed</h5>
                  <p>{this.props.user.completedSongs}</p>
               </div>

               <div className="member-songs-percentage">
                  <h5>Percentage</h5>
                  <p>{this.props.user.percentage}%</p>
               </div>

               <div className="member-last-completed-song">
                  <h5>Last Completed Song:</h5>
                  <p>{this.props.user.lastCompletedSong}</p>
               </div>
            </div>
         </section>
      );
   }
}

module.exports = UserDashboardProfile;
