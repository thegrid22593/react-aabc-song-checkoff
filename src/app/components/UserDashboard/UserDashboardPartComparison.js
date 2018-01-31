import ReactDOM from 'react-dom';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
require('../../scss/style.scss');
import firebase from 'firebase';
import UserDashboardPartPercentageBar from './UserDashboardPartPercentageBar';

class UserDashboardPartComparison extends React.Component {
   constructor(props) {
      super(props);
      console.log('part-comparison', props);
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
         <section className="part-comparison">
            <div className="part-graphs">
               <div className="part">
                  <div className="part-name">First Tenor</div>
                  <UserDashboardPartPercentageBar
                     averagePercentage={this.state.firstTenorAvgPercentage}
                     color={'#469ff3'}
                  />
               </div>
               <div className="part">
                  <div className="part-name">Second Tenor</div>
                  <UserDashboardPartPercentageBar
                     averagePercentage={this.state.secondTenorAvgPercentage}
                     color={'#2ECC71'}
                  />
               </div>
               <div className="part">
                  <div className="part-name">Baritone</div>
                  <UserDashboardPartPercentageBar
                     averagePercentage={this.state.baritoneAvgPercentage}
                     color={'#f3cc46'}
                  />
               </div>
               <div className="part">
                  <div className="part-name">Bass</div>
                  <UserDashboardPartPercentageBar
                     averagePercentage={this.state.bassAvgPercentage}
                     color={'#A9171C'}
                  />
               </div>
            </div>
         </section>
      );
   }
}

UserDashboardPartComparison = withRouter(
   connect(store => {
      return {
         user: store.user.user,
      };
   })(UserDashboardPartComparison)
);

module.exports = UserDashboardPartComparison;
