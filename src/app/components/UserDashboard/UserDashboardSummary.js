import firebase from 'firebase';
import React from 'react';
import '../../scss/style.scss';

function calculatePercentage(totalCompletedSongs, totalSongs) {
   return Math.floor(totalCompletedSongs / totalSongs * 100);
}

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
      const users = [];
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

      const bassAvgPercentage = calculatePercentage(
         bassCompletedSongs,
         bassTotalSongs
      );
      const baritoneAvgPercentage = calculatePercentage(
         baritoneCompletedSongs,
         baritoneTotalSongs
      );
      const firstTenorAvgPercentage = calculatePercentage(
         firstTenorCompletedSongs,
         firstTenorTotalSongs
      );
      const secondTenorAvgPercentage = calculatePercentage(
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

   render() {
      return (
         <div className="dashboard-member-part-tables">
            <div className="part-container">
               <div className="part-container-header clearfix">
                  <h3 className="part-name">Basses</h3>
                  <h5 className="part-average-percentage">
                     {this.state.bassAvgPercentage}%
                  </h5>
               </div>
               <div className="part-table">
                  <div className="part-table-name">Name</div>
                  <div className="part-table-percentage">Percentage</div>
               </div>
               {this.state.users.map((user, index) => {
                  if (user.singingPart === 'Bass') {
                     return (
                        <div key={index} className="part-member">
                           <img
                              className="part-member-avatar"
                              src={user.profilePicURL}
                              alt=""
                           />
                           <div className="part-member-name">
                              {user.firstName} {user.lastName}
                           </div>
                           <div className="part-member-percentage">
                              {user.percentage}%
                           </div>
                           {/* <div className="col-lg-4">0%</div> */}
                        </div>
                     );
                  }
               })}
            </div>

            <div className="part-container">
               <div className="part-container-header clearfix">
                  <h3 className="part-name">Second Tenor</h3>
                  <h5 className="part-average-percentage">
                     {this.state.secondTenorAvgPercentage}%
                  </h5>
               </div>
               <div className="part-table">
                  <div className="part-table-name">Name</div>
                  <div className="part-table-percentage">Percentage</div>
               </div>
               {this.state.users.map((user, index) => {
                  if (user.singingPart === 'Second Tenor') {
                     return (
                        <div key={index} className="part-member">
                           <img
                              className="part-member-avatar"
                              src={user.profilePicURL}
                              alt=""
                           />
                           <div className="part-member-name">
                              {user.firstName} {user.lastName}
                           </div>
                           <div className="part-member-percentage">
                              {user.percentage}%
                           </div>
                           {/* <div className="col-lg-4">0%</div> */}
                        </div>
                     );
                  }
               })}
            </div>

            <div className="part-container">
               <div className="part-container-header clearfix">
                  <h3 className="part-name">First Tenor</h3>
                  <h5 className="part-average-percentage">
                     {this.state.firstTenorAvgPercentage}%
                  </h5>
               </div>
               <div className="part-table">
                  <div className="part-table-name">Name</div>
                  <div className="part-table-percentage">Percentage</div>
               </div>
               {this.state.users.map((user, index) => {
                  if (user.singingPart === 'First Tenor') {
                     return (
                        <div key={index} className="part-member">
                           <img
                              className="part-member-avatar"
                              src={user.profilePicURL}
                              alt=""
                           />
                           <div className="part-member-name">
                              {user.firstName} {user.lastName}
                           </div>
                           <div className="part-member-percentage">
                              {user.percentage}%
                           </div>
                           {/* <div className="col-lg-4">0%</div> */}
                        </div>
                     );
                  }
               })}
            </div>

            <div className="part-container">
               <div className="part-container-header clearfix">
                  <h3 className="part-name">Baritone</h3>
                  <h5 className="part-average-percentage">
                     {this.state.baritoneAvgPercentage}%
                  </h5>
               </div>
               <div className="part-table">
                  <div className="part-table-name">Name</div>
                  <div className="part-table-percentage">Percentage</div>
               </div>
               {this.state.users.map((user, index) => {
                  if (user.singingPart === 'Baritone') {
                     return (
                        <div key={index} className="part-member">
                           <img
                              className="part-member-avatar"
                              src={user.profilePicURL}
                              alt=""
                           />
                           <div className="part-member-name">
                              {user.firstName} {user.lastName}
                           </div>
                           <div className="part-member-percentage">
                              {user.percentage}%
                           </div>
                           {/* <div className="col-lg-4">0%</div> */}
                        </div>
                     );
                  }
               })}
            </div>
         </div>
      );
   }
}

module.exports = UserDashboardSummary;
