import ReactDOM from 'react-dom';
import firebase from 'firebase';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserDashboardSummaryPartMember from './UserDashboardSummaryPartMember';
require('../../scss/style.scss');

class UserDashboardSummary extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         users: [],
         secondTenorAvgPercentage: null,
         bassAvgPercentage: null,
         firstTenorAvgPercentage: null,
         baritoneAvgPercentage: null,
      };
   }

   componentWillMount() {
      let users = [];
      firebase
         .firestore()
         .collection('users')
         .get()
         .then(querySnapshot => {
            querySnapshot.forEach(user => {
               users.push(user.data());
            });
            this.setState({ users });
            this.getAveragePercentage();
            console.log('state', this.state);
         });
   }

   getAveragePercentage() {
      let bassCompletedSongs = 0;
      let bassTotalSongs = 0;
      let baritoneCompletedSongs = 0;
      let baritoneTotalSongs = 0;
      let secondTenorCompletedSongs = 0;
      let secondTenorTotalSongs = 0;
      let firstTenorCompletedSongs = 0;
      let firstTenorTotalSongs = 0;

      this.state.users.map(user => {
         if (user.singingPart === 'Bass') {
            bassCompletedSongs += user.completedSongs;
            bassTotalSongs += user.songs.length;
         } else if (user.singingPart === 'Baritone') {
            baritoneCompletedSongs += user.completedSongs;
            baritoneTotalSongs += user.songs.length;
         } else if (user.singingPart === 'First Tenor') {
            firstTenorCompletedSongs += user.completedSongs;
            firstTenorTotalSongs += user.songs.length;
         } else if (user.singingPart === 'Second Tenor') {
            secondTenorCompletedSongs += user.completedSongs;
            secondTenorTotalSongs += user.songs.length;
         }
      });

      let bassAvgPercentage = this.calculatePercentage(
         bassCompletedSongs,
         bassTotalSongs
      );
      let baritoneAvgPercentage = this.calculatePercentage(
         baritoneCompletedSongs,
         baritoneTotalSongs
      );
      let firstTenorAvgPercentage = this.calculatePercentage(
         firstTenorCompletedSongs,
         firstTenorTotalSongs
      );
      let secondTenorAvgPercentage = this.calculatePercentage(
         secondTenorCompletedSongs,
         secondTenorTotalSongs
      );

      this.setState({
         secondTenorAvgPercentage,
         bassAvgPercentage,
         firstTenorAvgPercentage,
         baritoneAvgPercentage,
      });

      console.log('state', this.state);
   }

   calculatePercentage(totalCompletedSongs, totalSongs) {
      return Math.floor(totalCompletedSongs / totalSongs * 100);
   }

   render() {
      return (
         <div className="dashboard-member-part-info">
            <div className="container-full">
               <div className="row">
                  <div className="col-lg-5 col-md-6 col-sm-12">
                     <div className="part-container">
                        <div className="part-container-header clearfix">
                           <h3 className="col-lg-6">Basses</h3>
                           <h5 className="col-lg-6">
                              {this.state.bassAvgPercentage}%
                           </h5>
                        </div>
                        <div className="part-table">
                           <div className="col-lg-8">Name</div>
                           <div className="col-lg-4">Percentage</div>
                        </div>
                        {this.state.users.map((user, index) => {
                           if (user.singingPart === 'Bass') {
                              return (
                                 <div
                                    key={index}
                                    className="col-lg-12 part-member"
                                 >
                                    <div className="col-lg-2">
                                       <img
                                          className="part-member-avatar"
                                          src={user.profilePicURL}
                                          alt=""
                                       />
                                    </div>
                                    <div className="col-lg-6">
                                       {user.firstName} {user.lastName}
                                    </div>
                                    <div className="col-lg-4">
                                       {user.percentage}%
                                    </div>
                                    {/* <div className="col-lg-4">0%</div> */}
                                 </div>
                              );
                           }
                        })}
                     </div>
                  </div>

                  <div className="col-lg-5 col-md-6 col-sm-12">
                     <div className="part-container">
                        <div className="part-container-header clearfix">
                           <h3 className="col-lg-6">Second Tenor</h3>
                           <h5 className="col-lg-6">
                              {this.state.secondTenorAvgPercentage}%
                           </h5>
                        </div>
                        <div className="part-table">
                           <div className="col-lg-8">Name</div>
                           <div className="col-lg-4">Percentage</div>
                        </div>
                        {this.state.users.map((user, index) => {
                           if (user.singingPart === 'Second Tenor') {
                              return (
                                 <div
                                    key={index}
                                    className="col-lg-12 part-member"
                                 >
                                    <div className="col-lg-2">
                                       <img
                                          className="part-member-avatar"
                                          src={user.profilePicURL}
                                          alt=""
                                       />
                                    </div>
                                    <div className="col-lg-6">
                                       {user.firstName} {user.lastName}
                                    </div>
                                    <div className="col-lg-4">
                                       {user.percentage}%
                                    </div>
                                    {/* <div className="col-lg-4">0%</div> */}
                                 </div>
                              );
                           }
                        })}
                     </div>
                  </div>

                  <div className="col-lg-5 col-md-6 col-sm-12">
                     <div className="part-container">
                        <div className="part-container-header clearfix">
                           <h3 className="col-lg-6">First Tenor</h3>
                           <h5 className="col-lg-6">
                              {this.state.firstTenorAvgPercentage}%
                           </h5>
                        </div>
                        <div className="part-table">
                           <div className="col-lg-8">Name</div>
                           <div className="col-lg-4">Percentage</div>
                        </div>
                        {this.state.users.map((user, index) => {
                           if (user.singingPart === 'First Tenor') {
                              return (
                                 <div
                                    key={index}
                                    className="col-lg-12 part-member"
                                 >
                                    <div className="col-lg-2">
                                       <img
                                          className="part-member-avatar"
                                          src={user.profilePicURL}
                                          alt=""
                                       />
                                    </div>
                                    <div className="col-lg-6">
                                       {user.firstName} {user.lastName}
                                    </div>
                                    <div className="col-lg-4">
                                       {user.percentage}%
                                    </div>
                                    {/* <div className="col-lg-4">0%</div> */}
                                 </div>
                              );
                           }
                        })}
                     </div>
                  </div>

                  <div className="col-lg-5 col-md-6 col-sm-12">
                     <div className="part-container">
                        <div className="part-container-header clearfix">
                           <h3 className="col-lg-6">Baritone</h3>
                           <h5 className="col-lg-6">
                              {this.state.baritoneAvgPercentage}%
                           </h5>
                        </div>
                        <div className="part-table">
                           <div className="col-lg-8">Name</div>
                           <div className="col-lg-4">Percentage</div>
                        </div>
                        {this.state.users.map((user, index) => {
                           if (user.singingPart === 'Baritone') {
                              return (
                                 <div
                                    key={index}
                                    className="col-lg-12 part-member"
                                 >
                                    <div className="col-lg-2">
                                       <img
                                          className="part-member-avatar"
                                          src={user.profilePicURL}
                                          alt=""
                                       />
                                    </div>
                                    <div className="col-lg-6">
                                       {user.firstName} {user.lastName}
                                    </div>
                                    <div className="col-lg-4">
                                       {user.percentage}%
                                    </div>
                                    {/* <div className="col-lg-4">0%</div> */}
                                 </div>
                              );
                           }
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

module.exports = UserDashboardSummary;
