import ReactDOM from 'react-dom';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
require('../../scss/style.scss');

class UserDashboardPartComparison extends React.Component {
   constructor(props) {
      super(props);
   }

   componentWillMount() {}

   render() {
      return (
         <section className="part-comparison">
            <div className="part-graphs">
               <div className="part">
                  <div className="part-name">First Tenor</div>
                  <div className="part-percentage-bar">
                     <div
                        className="part-percentage"
                        style={{ backgroundColor: '#469ff3' }}
                     />
                  </div>
               </div>
               <div className="part">
                  <div className="part-name">Second Tenor</div>
                  <div className="part-percentage-bar">
                     <div
                        className="part-percentage"
                        style={{ backgroundColor: '#2ECC71' }}
                     />
                  </div>
               </div>
               <div className="part">
                  <div className="part-name">Baritone</div>
                  <div className="part-percentage-bar">
                     <div
                        className="part-percentage"
                        style={{ backgroundColor: '#f3cc46' }}
                     />
                  </div>
               </div>
               <div className="part">
                  <div className="part-name">Bass</div>
                  <div className="part-percentage-bar">
                     <div
                        className="part-percentage"
                        style={{ backgroundColor: '#A9171C' }}
                     />
                  </div>
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
